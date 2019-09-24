import * as React from 'react';
import { debounce } from 'lodash';
import { Input } from '@lendi-ui/text-input';
import { CloseIcon, CloseWrapper, SpinnerWrapper, AfterIconWrapper, AutoCompleteWrapper } from '../common/index.style';
import { KEY_ENTER, KEY_UP, KEY_DOWN, KEY_ESCAPE, KEY_TAB } from '../util/keys';
import AutoCompleteMenuList from './components';
import { extractData, getOffsetScrollTop, transformedItem } from '../util';
import { DataSourceItem, AutoCompleteStatefulProps, AutoCompleteValue } from '../typings';

export interface AutoCompleteState {
  filteredDataSource: DataSourceItem[];
  userInput: AutoCompleteValue;
  showList: boolean;
  activeSelection: number; // currently focused item
  isLoading: boolean;
  menuWidth: number;
}

const DEBOUNCE_WAIT = 300;
const WINDOW_RESIZE_WAIT = 100;

export class AutoComplete extends React.Component<AutoCompleteStatefulProps, AutoCompleteState> {
  state: AutoCompleteState = {
    activeSelection: 0,
    filteredDataSource: [],
    userInput: this.props.initialValue || '',
    showList: false,
    isLoading: false,
    menuWidth: 0,
  };
  menuContainerRef: React.RefObject<HTMLUListElement> = React.createRef();
  inputWrapper: React.RefObject<HTMLDivElement> = React.createRef();

  constructor(props: AutoCompleteStatefulProps) {
    super(props);
    this.getFilteredData = debounce(this.getFilteredData, DEBOUNCE_WAIT);
    this.calcInputWidth = debounce(this.calcInputWidth, WINDOW_RESIZE_WAIT);
  }

  componentDidMount() {
    window.addEventListener('click', this.onHoverOff);
    window.addEventListener('resize', this.calcInputWidth);
    this.calcInputWidth();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calcInputWidth);
    window.removeEventListener('click', this.onHoverOff);
  }

  calcInputWidth = () => {
    // @TODO - Future enhancement, ref forwarding https://creditandfinance.atlassian.net/browse/HUB-510
    if (this.inputWrapper && this.inputWrapper.current) {
      const inputChild = this.inputWrapper.current!.firstElementChild;

      if (inputChild !== null) {
        this.setState({
          menuWidth: (inputChild as HTMLUListElement).offsetWidth,
        });
      }
    }
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

  onHoverOff = (e: Event) => {
    // this component is uncontrolled component, and showing-menu is internal to it,
    // so just checking if consumer clicks outside `AC`, it will find out and close the menu
    const theClickedElement = (e.target as HTMLDivElement).parentElement;

    // @TODO - Future enhancement, ref forwarding https://creditandfinance.atlassian.net/browse/HUB-510
    const inputChild = this.inputWrapper.current!.firstElementChild;

    if ((inputChild as HTMLUListElement) !== theClickedElement) {
      this.setState({
        showList: false,
      });
    }
  };

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
          onSelectItem={this.onSelectItem}
          activeSelection={this.state.activeSelection}
          filteredDataSource={this.state.filteredDataSource}
          innerRef={this.menuContainerRef}
          menuWidth={this.state.menuWidth}
          debounceWindowResize={this.calcInputWidth}
          onMouseEnter={(index) => this.highlightItemFromMouse(index)}
        />
      );
    }
    return;
  };

  // on select an item from a source
  onSelectItem = (item: DataSourceItem) => {
    const { onSelectItem = () => {} } = this.props;
    const textWithoutHTMLJunk = transformedItem(item).label;
    onSelectItem(transformedItem(item));
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
      () => this.getFilteredData(event.target.value)
    );
  };

  // Event fired when the user presses a key down
  // for example when you pressed enter, tab, up/down key
  onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { activeSelection, filteredDataSource } = this.state;
    const { onSelectItem = () => {} } = this.props;

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
            onSelectItem(transformedItem(filteredDataSource[activeSelection]));
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
    const { onSelectItem = () => {} } = this.props;
    return this.setState(
      {
        activeSelection: 0,
        filteredDataSource: [],
        userInput: '',
        showList: false,
      },
      () => onSelectItem({ label: '', value: '' })
    );
  };

  private focusItem() {
    if (this.menuContainerRef.current) {
      this.menuContainerRef.current.scrollTop = getOffsetScrollTop(this.menuContainerRef);
    }
  }

  render() {
    const { dataSource = [], placeholder = '', size = 'md', onSelectItem = () => {}, ...inputProps } = this.props;
    return (
      <AutoCompleteWrapper ref={this.inputWrapper}>
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
}
