import * as React from 'react';
import { AutoCompleteListItem, AutoCompleteList } from '../index.style';
import { DataSourceItem } from '..';

export interface AutoCompleteMenuListProps {
  onSelect: (event: React.MouseEvent<HTMLElement>) => void;
  filteredDataSource: DataSourceItem[];
  activeSelection: number;
  innerRef: any;
  menuWidth: number;
  debounceWindowResize: () => void;
}

export default class AutoCompleteMenuList extends React.Component<AutoCompleteMenuListProps, {}> {
  componentDidMount() {
    this.props.debounceWindowResize();
  }

  render() {
    const { filteredDataSource, onSelect = () => {}, activeSelection = 0, menuWidth, innerRef } = this.props;

    return (
      <AutoCompleteList customWidth={menuWidth} innerRef={innerRef}>
        {filteredDataSource.map((option, index) => (
          <AutoCompleteListItem
            key={index}
            tabIndex={index}
            className={index === activeSelection ? 'selectedItem' : ''}
            isActive={index === activeSelection}
            onClick={onSelect}
          >
            <div dangerouslySetInnerHTML={{ __html: option.label }} />
          </AutoCompleteListItem>
        ))}
      </AutoCompleteList>
    );
  }
}
