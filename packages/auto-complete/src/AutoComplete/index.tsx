import * as React from 'react';
import createRef from 'react-create-ref';
import {
  Size,
  CloseIcon,
  AutoCompleteList,
  AutoCompleteListItem,
  CloseWrapper,
  BeforeIconWrapper,
  SpinnerWrapper,
  AfterIconWrapper,
  AutoCompleteWrapper,
} from './index.style';
import { debounce } from 'lodash';
import { KEY_ENTER, KEY_UP, KEY_DOWN, KEY_ESCAPE, KEY_TAB } from './keys';
import { Input } from '@lendi-ui/text-input';
import { IconProps } from '@lendi-ui/icon';

export interface AutoCompleteProps {
  dataSource: ((input: string) => Promise<string[]>) | string[];
  onSelect?: (item: string) => void;
  size?: Size;
  placeholder?: string;
  isDisabled?: boolean;
  beforeIcon?: React.ReactElement<IconProps>;
}

export interface AutoCompleteState {
  filteredDataSource: string[];
  userInput: string;
  showList: boolean;
  activeSelection: number; // currently focussed item.
  isLoading: boolean;
}

export default class AutoComplete extends React.Component<AutoCompleteProps, AutoCompleteState> {
  debouncedCall: (userInput: string) => void;
  static readonly DEBOUNCE_WAIT = 300;
  state: AutoCompleteState = {
    activeSelection: 0,
    filteredDataSource: [],
    userInput: '',
    showList: false,
    isLoading: false,
  };
  menuContainerRef = createRef();

  constructor(props: AutoCompleteProps) {
    super(props);
    this.debouncedCall = debounce(this.getFilteredData, AutoComplete.DEBOUNCE_WAIT);
  }

  render() {
    const {
      dataSource: [],
      placeholder = 'Just start Typing...',
      size = 'md',
      isDisabled = false,
      beforeIcon,
    } = this.props;
    return (
      <AutoCompleteWrapper>
        <Input
          size={size}
          placeholder={placeholder}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          isFullWidth={true}
          value={this.state.userInput}
          before={beforeIcon && <BeforeIconWrapper>{beforeIcon}</BeforeIconWrapper>}
          after={this.state.userInput && this.renderAfterIcon()}
          isDisabled={isDisabled}
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
        <AutoCompleteList innerRef={this.menuContainerRef}>
          {this.state.filteredDataSource.map((option, index) => (
            <AutoCompleteListItem
              key={index}
              tabIndex={index}
              className={index === this.state.activeSelection ? 'selectedItem' : ''}
              isActive={index === this.state.activeSelection}
              onClick={this.onSelect}
            >
              <div dangerouslySetInnerHTML={{ __html: option }} />
            </AutoCompleteListItem>
          ))}
        </AutoCompleteList>
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
      () => this.debouncedCall(event.target.value)
    );
  };

  getFilteredData = async (userInput: string) => {
    const { dataSource } = this.props;
    let filteredDataSource: string[] = [];
    if (userInput !== '') {
      if (!Array.isArray(dataSource)) {
        filteredDataSource = await dataSource(userInput);
      } else {
        filteredDataSource = dataSource.filter(
          (data: string) => data.toLowerCase().indexOf(userInput.toLowerCase()) > -1
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

  makeInputKeyBold = (str: string, find: string) => {
    var regex = new RegExp(find, 'gi');
    const matchings: RegExpMatchArray | null = str.match(regex);
    if (matchings) {
      return str.replace(new RegExp(matchings[0], 'g'), '<b>' + matchings[0] + '</b>');
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
          userInput: filteredDataSource[activeSelection].replace(/<\/?[^>]+(>|$)/g, ''),
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
