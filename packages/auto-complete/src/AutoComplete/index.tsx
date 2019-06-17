import * as React from 'react';
import createRef from 'react-create-ref';
import { debounce } from 'lodash';

import { LUIFormProps } from '@lendi-ui/utils';
import { IconProps } from '@lendi-ui/icon';
import { Input } from '@lendi-ui/text-input';

import { Size, CloseIcon, CloseWrapper, SpinnerWrapper, AfterIconWrapper, AutoCompleteWrapper } from './index.style';
import { KEY_ENTER, KEY_UP, KEY_DOWN, KEY_ESCAPE, KEY_TAB } from './keys';
import AutoCompleteMenuList from './MenuList';
import { extractData } from './Utils';

export type SelectedValue = string | number;

export interface DataSourceItem {
  label: string;
  value: SelectedValue;
}

export interface AutoCompleteProps extends LUIFormProps {
  dataSource: ((input: string) => Promise<DataSourceItem[]>) | DataSourceItem[];
  value?: string;
  onSelect?: (selectedItem: SelectedValue) => void;
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
  onChange?: (value: SelectedValue) => void;
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

  constructor(props: AutoCompleteProps) {
    super(props);
    this.debounceFilterDataSource = debounce(this.getFilteredData, AutoComplete.DEBOUNCE_WAIT);
    this.debounceWindowResize = debounce(this.calcInputWidth, AutoComplete.WINDOW_RESIZE_WAIT);
  }

  calcInputWidth = () => {
    this.setState({
      menuWidth: this.inputWrapper.current.firstElementChild!.offsetWidth,
    });
  };

  componentDidMount() {
    window.addEventListener('click', this.onHoverOff);
    window.addEventListener('resize', this.debounceWindowResize);
    this.calcInputWidth();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debounceWindowResize);
    window.removeEventListener('click', this.onHoverOff);
  }

  onHoverOff = (e: Event) => {
    // this component is uncontroller component, and showing-menu is internal to it,
    // so just checking if consumer clicks outside `AC`, it will find out and close the menu
    const theClickedElement = (e.target as HTMLDivElement).parentElement;
    if (this.inputWrapper.current.firstElementChild !== theClickedElement) {
      this.setState({
        showList: false,
      });
    }
  };

  render() {
    const {
      dataSource = [],
      placeholder = 'Just start Typing...',
      size = 'md',
      onSelect = () => {},
      ...inputProps
    } = this.props;
    return (
      <AutoCompleteWrapper innerRef={this.inputWrapper}>
        <Input
          {...inputProps}
          size={size}
          placeholder={placeholder}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          value={this.state.userInput}
          after={this.state.userInput && this.renderAfterIcon()}
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
    onSelect(this.state.filteredDataSource[this.state.activeSelection].value);
    this.setState({
      activeSelection: 0,
      filteredDataSource: [],
      userInput: textWithoutHTMLJunk,
      showList: false,
    });
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
    const { dataSource, onChange = () => {} } = this.props;
    onChange(userInput);
    const filteredDataSource = await extractData(userInput, dataSource);
    this.setState({
      activeSelection: 0,
      filteredDataSource,
      showList: true,
      isLoading: false,
    });
  };

  // Event fired when the user presses a key down
  // for example when you pressed enter, tab, up/down key
  onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { activeSelection, filteredDataSource } = this.state;
    const { onSelect = () => {} } = this.props;

    switch (event.key) {
      case KEY_ENTER:
        this.setState(
          {
            activeSelection: 0,
            userInput: filteredDataSource[activeSelection].label.replace(/<\/?[^>]+(>|$)/g, ''),
            showList: false,
          },
          () => {
            onSelect(filteredDataSource[activeSelection].value);
          }
        );
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
    const { onSelect = () => {} } = this.props;
    return this.setState(
      {
        activeSelection: 0,
        filteredDataSource: [],
        userInput: '',
        showList: false,
      },
      () => onSelect('')
    );
  };

  focusItem = () => {
    // The idea is to calculate the new scrollTop for menuContainer as you scroll up/down. Just a simple mathematics to scroll the
    // container by selected item height. If the additon of selectedItem's offsetTop and offsetHeight cannot be accomodated inside menucontainer,
    // which means if their addition is bigger than menuContainer's offsetHeight then we will make its difference to menuContainer's scrollTop
    // and the addiiton of 7, is just to have extra padding to accodomate the padding we are giving at menuContainer's level - ${py('xxs')};
    // for example - if we change the padding ${py('xxs')} to ${py('xs')}, then we need to change this factor of 7 to 12.
    if (this.menuContainerRef.current) {
      this.menuContainerRef.current.scrollTop = 0; // just a reset and calculate again.
      this.menuContainerRef.current.scrollTop =
        this.menuContainerRef.current.querySelector('.selectedItem').offsetTop +
        this.menuContainerRef.current.querySelector('.selectedItem').offsetHeight -
        this.menuContainerRef.current.offsetHeight +
        7;
    }
  };
}
