import * as React from 'react';
import { AutoCompleteListItem, AutoCompleteList } from '../../common/index.style';
import { DataSourceItem } from '../../typings';

export interface AutoCompleteMenuListProps {
  onSelectItem: (item: DataSourceItem) => void;
  filteredDataSource: DataSourceItem[];
  activeSelection: number;
  innerRef: any;
  menuWidth: number;
  debounceWindowResize: () => void;
  onMouseEnter: (index: number) => void;
}

export default class AutoCompleteMenuList extends React.Component<AutoCompleteMenuListProps, {}> {
  componentDidMount() {
    this.props.debounceWindowResize();
  }

  render() {
    const {
      filteredDataSource,
      onSelectItem = () => {},
      activeSelection = 0,
      menuWidth,
      innerRef,
      onMouseEnter = () => {},
    } = this.props;

    return (
      <AutoCompleteList customWidth={menuWidth} ref={innerRef}>
        {filteredDataSource.map((option: DataSourceItem, index) => (
          <AutoCompleteListItem
            key={index}
            tabIndex={index}
            className={index === activeSelection ? 'selectedItem' : ''}
            isActive={index === activeSelection}
            onClick={() => onSelectItem(option)}
            value={option.value}
            onMouseEnter={() => onMouseEnter(index)}
          >
            <div dangerouslySetInnerHTML={{ __html: option.label }} />
          </AutoCompleteListItem>
        ))}
      </AutoCompleteList>
    );
  }
}
