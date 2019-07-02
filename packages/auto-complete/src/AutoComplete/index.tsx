import * as React from 'react';
import createRef from 'react-create-ref';
import { debounce } from 'lodash';

import { Input } from '@lendi-ui/text-input';

import { CloseIcon, CloseWrapper, SpinnerWrapper, AfterIconWrapper, AutoCompleteWrapper } from '../styled/index.style';
import { KEY_ENTER, KEY_UP, KEY_DOWN, KEY_ESCAPE, KEY_TAB } from '../util/keys';
import AutoCompleteMenuList from './MenuList';
import { extractData, getOffsetScrollTop, transformedItem } from '../util';
import { DataSourceItem, AutoCompleteStatefulProps, AutoCompleteValue } from '../types';

export interface AutoCompleteState {
  filteredDataSource: DataSourceItem[];
  userInput: AutoCompleteValue;
  showList: boolean;
  activeSelection: number; // currently focussed item.
  isLoading: boolean;
  menuWidth: number;
}

export class AutoComplete extends React.Component<AutoCompleteStatefulProps, AutoCompleteState> {
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
  menuContainerRef: React.RefObject<HTMLUListElement> = createRef();
  inputWrapper: React.RefObject<HTMLDivElement> = createRef();

  constructor(props: AutoCompleteStatefulProps) {
    super(props);
    this.debounceFilterDataSource = debounce(this.getFilteredData, AutoComplete.DEBOUNCE_WAIT);
    this.debounceWindowResize = debounce(this.calcInputWidth, AutoComplete.WINDOW_RESIZE_WAIT);
  }

  calcInputWidth = () => {
    this.setState({
      menuWidth: (this.inputWrapper.current!.firstElementChild as HTMLUListElement).offsetWidth,
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
    if ((this.inputWrapper.current!.firstElementChild as HTMLUListElement) !== theClickedElement) {
      this.setState({
        showList: false,
      });
    }
  };

  render() {
    const { dataSource = [], placeholder = '', size = 'md', onSelect = () => {}, ...inputProps } = this.props;
    return (
      <AutoCompleteWrapper innerRef={this.inputWrapper}>
        <Input
          {...inputProps}
          size={size}
          autoComplete="off" // The attribute specifies whether or not an input field should have autocomplete enabled
          placeholder={placeholder}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          value={String(this.state.userInput)}
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
          onMouseEnter={(index) => this.highlightItemFromMouse(index)}
        />
      );
    }
    return;
  };

  // on select an item from a source
  onSelect = (item: DataSourceItem) => {
    const { onSelect = () => {} } = this.props;
    const textWithoutHTMLJunk = transformedItem(item).label;
    onSelect(transformedItem(item));
    this.setState({
      activeSelection: 0,
      filteredDataSource: [],
      userInput: textWithoutHTMLJunk,
      showList: false,
    });
  };

  highlightItemFromMouse(index: number) {
    this.setState({ activeSelection: index });
  }

  // Event fired when the input value is changed
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    const { onChange = () => {} } = this.props;
    onChange(event);
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
        if (!filteredDataSource.length) return;
        this.setState(
          {
            activeSelection: 0,
            userInput: filteredDataSource[activeSelection].label.replace(/<\/?[^>]+(>|$)/g, ''),
            showList: false,
          },
          () => {
            onSelect(transformedItem(filteredDataSource[activeSelection]));
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
      () => onSelect({ label: '', value: '' })
    );
  };

  private focusItem() {
    if (this.menuContainerRef.current)
      this.menuContainerRef.current.scrollTop = getOffsetScrollTop(this.menuContainerRef);
  }
}
