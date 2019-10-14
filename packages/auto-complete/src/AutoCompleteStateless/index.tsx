import * as React from 'react';
import { debounce } from 'lodash';
import { Input } from '@lendi-ui/text-input';

import { DataSourceItem, AutoCompleteStatelessProps } from '../typings';
import { KEY_DOWN, KEY_UP, KEY_ENTER, KEY_TAB, KEY_ESCAPE } from '../util/keys';
import {
  AutoCompleteWrapper,
  AutoCompleteList,
  AutoCompleteListItem,
  AfterIconWrapper,
  SpinnerWrapper,
  CloseWrapper,
  CloseIcon,
} from '../common/index.style';
import { makeInputKeyBold, getOffsetScrollTop, transformedItem } from '../util';

interface MenuListItemProps {
  onClick: () => void;
  onMouseEnter: () => void;
}

export interface AutoCompleteStatelessState {
  isOpen: boolean;
  highlightedIndex: number | null;
  menuWidth: number;
}

export class AutoCompleteStateless extends React.Component<AutoCompleteStatelessProps, AutoCompleteStatelessState> {
  inputWrapper: React.RefObject<HTMLDivElement> = React.createRef();
  menuContainerRef: React.RefObject<HTMLUListElement> = React.createRef();
  static readonly WINDOW_RESIZE_WAIT = 100;

  state = {
    isOpen: false,
    highlightedIndex: null,
    menuWidth: 0,
  };

  constructor(props: AutoCompleteStatelessProps) {
    super(props);
    this.calcInputWidth = debounce(this.calcInputWidth, AutoCompleteStateless.WINDOW_RESIZE_WAIT);
  }

  componentDidMount() {
    window.addEventListener('resize', this.calcInputWidth);
    this.calcInputWidth();
  }

  componentDidUpdate(_prevProps: AutoCompleteStatelessProps, prevState: AutoCompleteStatelessState) {
    const { onMenuVisibilityChange = () => {} } = this.props;
    if (prevState.isOpen !== this.state.isOpen) {
      onMenuVisibilityChange(this.state.isOpen);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calcInputWidth);
  }

  calcInputWidth = () => {
    this.setState({
      menuWidth: (this.inputWrapper.current!.firstElementChild as HTMLUListElement).offsetWidth,
    });
  };

  renderMenu() {
    const children = this.getFilteredItems(this.props).map((item: DataSourceItem, index: number) => {
      const element = this.renderItem(item, this.state.highlightedIndex === index, index);

      return React.cloneElement(element as React.ReactElement<MenuListItemProps>, {
        onClick: () => this.selectItemFromMouse(item),
        onMouseEnter: () => this.highlightItemFromMouse(index),
      });
    });
    return this.renderComposeMenu(children);
  }

  renderComposeMenu = (children: React.ReactNode) => {
    return (
      <AutoCompleteList customWidth={this.state.menuWidth} ref={this.menuContainerRef}>
        {children}
      </AutoCompleteList>
    );
  };

  renderItem = (item: DataSourceItem, isHighlighted: boolean, index: number) => (
    <AutoCompleteListItem
      isActive={index === this.state.highlightedIndex}
      className={`${isHighlighted ? 'selectedItem' : ''}`}
      key={index}
      value={item.value}
    >
      <div dangerouslySetInnerHTML={{ __html: item.label }} />
    </AutoCompleteListItem>
  );

  renderAfterIcon = () => (
    <AfterIconWrapper>
      {this.props.isLoading ? (
        <SpinnerWrapper size={this.props.size!} variant="dark" />
      ) : (
        <CloseWrapper onClick={this.clearInput}>
          <CloseIcon color="primary.500" size={this.props.size!} />
        </CloseWrapper>
      )}
    </AfterIconWrapper>
  );

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange = () => {} } = this.props;
    onChange(event);
  };

  // menu should close on onBlur - just like it happens with html dropdown.
  handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    let selectCallback;
    const { highlightedIndex } = this.state;
    if (highlightedIndex !== null) {
      const items = this.getFilteredItems(this.props);
      const item = items[highlightedIndex!];
      selectCallback = () => this.props.onSelectItem!(transformedItem(item));
    }
    this.setState(
      {
        isOpen: false,
        highlightedIndex: null,
      },
      selectCallback
    );
    const { onBlur } = this.props;
    if (onBlur) {
      onBlur(event);
    }
  };

  selectItemFromMouse = (item: DataSourceItem) => {
    this.setState(
      {
        isOpen: false,
        highlightedIndex: null,
      },
      () => {
        this.props.onSelectItem!(transformedItem(item));
      }
    );
  };

  highlightItemFromMouse(index: number) {
    this.setState({ highlightedIndex: index });
  }

  handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    // this is internal keyDown event to do interacttion upon Key_UP/Down, Enter, Tab
    const items = this.getFilteredItems(this.props);
    const { highlightedIndex } = this.state;
    let index: number | null = 0;

    switch (event.key) {
      case KEY_DOWN:
        if (!items.length) return;
        index = highlightedIndex === null ? -1 : highlightedIndex;

        const p = (index! + 1) % items.length;
        index = p;
        if (index! > -1 && index !== highlightedIndex) {
          this.setState(
            {
              highlightedIndex: index,
              isOpen: true,
            },
            this.focusItem
          );
        }
        return;

      case KEY_UP:
        if (!items.length) return;
        index = highlightedIndex === null ? items.length : highlightedIndex;
        index = (index! - 1 + items.length) % items.length;
        if (index !== items.length) {
          this.setState(
            {
              highlightedIndex: index,
              isOpen: true,
            },
            this.focusItem
          );
        }
        return;

      case KEY_ENTER:
        // menu is closed so there is no selection to accept -> do nothing
        if (!items.length || !this.isOpen()) {
          return;
        } else if (this.state.highlightedIndex == null) {
          // input has focus but no menu item is selected + enter is hit -> close the menu, highlight whatever's in input
          this.setState({
            isOpen: false,
          });
        } else {
          // text entered + menu item has been highlighted + enter is hit -> update value to that of selected menu item, close the menu
          event.preventDefault();
          const item = this.getFilteredItems(this.props)[this.state.highlightedIndex!];
          this.setState(
            {
              isOpen: false,
              highlightedIndex: null,
            },
            () => {
              this.props.onSelectItem!(transformedItem(item));
            }
          );
        }

        return;

      case KEY_TAB:
      case KEY_ESCAPE:
        return this.setState({
          highlightedIndex: null,
          isOpen: false,
        });

      default:
        if (!this.isOpen()) {
          this.setState({
            isOpen: true,
          });
        }
    }

    // if there is an external keydown event
    const { onKeyDown } = this.props;
    if (onKeyDown) {
      onKeyDown(event);
    }
  }

  clearInput = () => {
    const { onReset = () => {} } = this.props;
    this.setState({
      isOpen: false,
      highlightedIndex: null,
    });
    onReset();
  };

  getFilteredItems = (props: AutoCompleteStatelessProps): DataSourceItem[] => {
    let items = props.dataSource;
    // some extra processing can be done here like make the input bold in the selections.
    items = items.map((d) => makeInputKeyBold(d, String(props.value).toLowerCase()));
    return items;
  };

  isOpen = () => {
    return 'open' in this.props ? this.props.open : this.state.isOpen;
  };

  private focusItem() {
    if (this.menuContainerRef.current)
      this.menuContainerRef.current.scrollTop = getOffsetScrollTop(this.menuContainerRef);
  }

  render() {
    const open = this.isOpen();
    const {
      dataSource,
      value = '',
      onChange = () => {},
      placeholder = '',
      size = 'md',
      onSelectItem = () => {},
      onMenuVisibilityChange,
      ...inputProps
    } = this.props;
    return (
      <AutoCompleteWrapper ref={this.inputWrapper}>
        <Input
          {...inputProps}
          size={size}
          placeholder={placeholder}
          autoComplete="off" // The attribute specifies whether or not an input field should have autocomplete enabled
          onChange={this.handleChange}
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => this.handleKeyDown(event)}
          value={String(this.props.value)}
          after={(this.props.isLoading || this.props.value) && this.renderAfterIcon()}
          onBlur={this.handleInputBlur}
        />
        {open && dataSource.length > 0 && this.renderMenu()}
      </AutoCompleteWrapper>
    );
  }
}
