import * as React from 'react';
import { AutoCompleteListItem, AutoCompleteList } from '../../styled/index.style';
import { DataSourceItem } from '../../types';

export interface AutoCompleteMenuListProps {
  onSelect: (item: DataSourceItem) => void;
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
      onSelect = () => {},
      activeSelection = 0,
      menuWidth,
      innerRef,
      onMouseEnter = () => {},
    } = this.props;

    return (
      <AutoCompleteList customWidth={menuWidth} innerRef={innerRef}>
        {filteredDataSource.map((option: DataSourceItem, index) => (
          <AutoCompleteListItem
            key={index}
            tabIndex={index}
            className={index === activeSelection ? 'selectedItem' : ''}
            isActive={index === activeSelection}
            onClick={() => onSelect(option)}
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
