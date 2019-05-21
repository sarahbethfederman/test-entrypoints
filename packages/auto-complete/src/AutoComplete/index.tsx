import * as React from 'react';
import createRef from 'react-create-ref';
import { IconProps } from '@lendi-ui/icon';
import { Size, CloseIcon, CloseWrapper, SpinnerWrapper, AfterIconWrapper, AutoCompleteWrapper } from './index.style';
import { debounce } from 'lodash';
import { KEY_ENTER, KEY_UP, KEY_DOWN, KEY_ESCAPE, KEY_TAB } from './keys';
import { Input } from '@lendi-ui/text-input';
import AutoCompleteMenuList from './MenuList';

export interface DataSourceItem {
  label: string;
  value: string;
}

export interface AutoCompleteProps {
  dataSource: ((input: string) => Promise<DataSourceItem[]>) | DataSourceItem[];
  value?: string;
  onSelect?: (item: string) => void;
  size?: Size;
  placeholder?: string;
  isDisabled?: boolean;
  before?: React.ReactElement<IconProps>;
  isError?: boolean;
  className?: string;
  isInverse?: boolean;
  isRequired?: boolean;
  isAutoFocus?: boolean;
  isReadOnly?: boolean;
  isFullWidth?: boolean;
}

export interface AutoCompleteState {
  filteredDataSource: DataSourceItem[];
  userInput: string;
  showList: boolean;
  activeSelection: number; // currently focussed item.
  isLoading: boolean;
  menuWidth: number;
}

export default class AutoComplete extends React.Component<AutoCompleteProps, AutoCompleteState> {
  debounceFilterDataSource: (userInput: string) => void;
  debounceWindowResize: () => void;
  static readonly DEBOUNCE_WAIT = 300;
  static readonly WINDOW_RESIZE_WAIT = 100;
  state: AutoCompleteState = {
    activeSelection: 0,
    filteredDataSource: [],
    userInput: this.props.value ? this.props.value : '',
    showList: false,
    isLoading: false,
    menuWidth: 0,
  };
  menuContainerRef: any = createRef();
  inputWrapper: any = createRef();
  inputElemWidth = 0;

  constructor(props: AutoCompleteProps) {
    super(props);
    this.debounceFilterDataSource = debounce(this.getFilteredData, AutoComplete.DEBOUNCE_WAIT);
    this.debounceWindowResize = debounce(this.calcInputWidth, AutoComplete.WINDOW_RESIZE_WAIT);
  }

  calcInputWidth = () => {
    this.setState({
      menuWidth: this.inputWrapper.current.firstElementChild.offsetWidth,
    });
  };

  componentDidMount() {
    window.addEventListener('resize', this.debounceWindowResize);
    this.calcInputWidth();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debounceWindowResize);
  }

  render() {
    const {
      dataSource: [],
      placeholder = 'Just start Typing...',
      size = 'md',
      onSelect = () => {},
      ...inputProps
    } = this.props;
    return (
      <AutoCompleteWrapper innerRef={this.inputWrapper}>
        <Input
          size={size}
          placeholder={placeholder}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          value={this.state.userInput}
          after={this.state.userInput && this.renderAfterIcon()}
          {...inputProps}
        />
        {this.state.showList && this.listComponent()}
      </AutoCompleteWrapper>
    );
  }

  renderAfterIcon = () => (
    <AfterIconWrapper>
      {this.state.isLoading ? (
        <SpinnerWrapper size={this.props.size!} variant="dark" />
      ) : (
        <CloseWrapper onClick={this.clearInput}>
          <CloseIcon color="primary.500" size={this.props.size!} />
        </CloseWrapper>
      )}
    </AfterIconWrapper>
  );

  listComponent = () => {
    if (this.state.userInput && !this.state.isLoading && this.state.filteredDataSource.length > 0) {
      return (
        <AutoCompleteMenuList
          onSelect={this.onSelect}
          activeSelection={this.state.activeSelection}
          filteredDataSource={this.state.filteredDataSource}
          innerRef={this.menuContainerRef}
          menuWidth={this.state.menuWidth}
          debounceWindowResize={this.debounceWindowResize}
        />
      );
    }
    return;
  };

  // on select an item from a source
  onSelect = (event: React.MouseEvent<HTMLElement>) => {
    const { onSelect = () => {} } = this.props;
    const textWithoutHTMLJunk = event.currentTarget.innerText.replace(/<\/?[^>]+(>|$)/g, '');
    this.setState({
      activeSelection: 0,
      filteredDataSource: [],
      userInput: textWithoutHTMLJunk,
      showList: false,
    });
    onSelect(textWithoutHTMLJunk);
  };

  // Event fired when the input value is changed
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    const userInput = event.currentTarget.value;
    this.setState(
      {
        userInput: userInput,
        isLoading: true,
        filteredDataSource: [],
      },
      () => this.debounceFilterDataSource(event.target.value)
    );
  };

  getFilteredData = async (userInput: string) => {
    const { dataSource } = this.props;
    let filteredDataSource: DataSourceItem[] = [];
    if (userInput !== '') {
      if (!Array.isArray(dataSource)) {
        filteredDataSource = await dataSource(userInput);
      } else {
        filteredDataSource = dataSource.filter(
          (data) => data.label.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
      }
      filteredDataSource = filteredDataSource.map((d) => this.makeInputKeyBold(d, userInput.toLowerCase()));
      this.setState({
        activeSelection: 0,
        filteredDataSource,
        showList: true,
        isLoading: false,
      });
    }
  };

  makeInputKeyBold = (str: DataSourceItem, find: string): DataSourceItem => {
    var regex = new RegExp(find, 'gi');
    const matchings: RegExpMatchArray | null = str.label.match(regex);
    if (matchings) {
      return {
        label: str.label.replace(new RegExp(matchings[0], 'g'), '<b>' + matchings[0] + '</b>'),
        value: str.value,
      };
    } else {
      return str;
    }
  };

  // Event fired when the user presses a key down
  // for example when you pressed enter, tab, up/down key
  onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { activeSelection, filteredDataSource } = this.state;
    switch (event.key) {
      case KEY_ENTER:
        this.setState({
          activeSelection: 0,
          userInput: filteredDataSource[activeSelection].label.replace(/<\/?[^>]+(>|$)/g, ''),
          showList: false,
        });
        return;
      case KEY_UP:
        if (activeSelection === 0) {
          return;
        }
        this.setState({ activeSelection: activeSelection - 1 }, this.focusItem);
        return;
      case KEY_DOWN:
        if (activeSelection === filteredDataSource.length - 1) {
          return this.setState({ activeSelection: 0 }, this.focusItem);
        }
        this.setState({ activeSelection: activeSelection + 1 }, this.focusItem);
        return;
      case KEY_TAB:
      case KEY_ESCAPE:
        this.setState({
          activeSelection: 0,
          showList: false,
          filteredDataSource: [],
        });
        return;
      default:
        return;
    }
  };

  clearInput = () => {
    return this.setState({
      activeSelection: 0,
      filteredDataSource: [],
      userInput: '',
      showList: false,
    });
  };

  focusItem = () => {
    if (this.menuContainerRef.current) {
      this.menuContainerRef.current.scrollTop = 0;
      this.menuContainerRef.current.scrollTop =
        this.menuContainerRef.current.querySelector('.selectedItem').offsetTop +
        40 -
        this.menuContainerRef.current.offsetHeight;
    }
  };
}
