import * as React from 'react';
import { Wrapper, CollapseBody, CollapseFooter, CollapsePanel, CollapseContent, Size } from './index.style';
import CollapseHeaderSection from './CollapseHeader';
import { LUIGlobalProps } from '@lendi-ui/utils';

export interface CollapseProps extends LUIGlobalProps {
  title: string;
  subTitle?: string;
  isExpanded?: boolean;
  onClick?: (expanded: boolean) => void;
  footer?: React.ReactElement<any>;
  headerSize?: Size;
  className?: string;
}

export interface CollapseState {
  isExpanded: boolean;
}

export default class Collapse extends React.Component<CollapseProps, CollapseState> {
  constructor(props: CollapseProps) {
    super(props);
    this.state = {
      isExpanded: props.isExpanded!,
    };
  }
  collapse = () => {
    this.setState(
      {
        isExpanded: !this.state.isExpanded,
      },
      () => {
        if (this.props.onClick) this.props.onClick(this.state.isExpanded);
      }
    );
  };

  render() {
    const { title, subTitle = '', headerSize = 'xs', footer, children, onClick, ...otherProps } = this.props;
    return (
      <Wrapper {...otherProps}>
        <CollapsePanel onClick={this.collapse} isExpanded={this.state.isExpanded} isFooterAdded={footer ? true : false}>
          <CollapseHeaderSection
            title={title}
            subTitle={subTitle}
            isOpen={this.state.isExpanded}
            headerSize={headerSize}
          />
        </CollapsePanel>
        <CollapseBody isExpanded={this.state.isExpanded} isFooterAdded={footer ? true : false}>
          <CollapseContent>{children}</CollapseContent>
        </CollapseBody>
        {footer && <CollapseFooter>{footer}</CollapseFooter>}
      </Wrapper>
    );
  }
}
