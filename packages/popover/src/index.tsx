import * as React from 'react';
import { TooltipWrapper, Position, ContentWrapper, ArrowWrapper } from './index.style';
import { LUIGlobalProps } from '@lendi-ui/utils';
import * as TooltipTrigger from './react-popper-tooltip';

const TooltipTriggerComponent = typeof TooltipTrigger === 'object' ? TooltipTrigger.default : TooltipTrigger;

export interface PopoverProps extends LUIGlobalProps {
  children: React.ReactNode;
  position?: Position;
}

function getChildrenOf(component: React.ReactType, children: React.ReactNode) {
  const foundChildren = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === component && child
  );

  if (foundChildren.length !== 1) {
    throw new Error(`You must have one ${component.toString} inside your Popover`);
  }

  const child = React.Children.only(foundChildren[0]);
  if (typeof child === 'string') return <>{child}</>;
  return child;
}

const Target: React.FunctionComponent = ({ children }) => <>{children}</>;

interface TooltipProps {
  position?: Position;
  arrowRef?: any;
  tooltipRef?: any;
  getArrowProps?: any;
  getTooltipProps?: any;
}

const Tooltip: React.FunctionComponent<TooltipProps> = ({
  children,
  position,
  arrowRef,
  tooltipRef,
  getArrowProps,
  getTooltipProps,
}) => {
  const isContentString = typeof children === 'string';

  return (
    <TooltipWrapper>
      <div
        {...getTooltipProps({
          ref: tooltipRef,
          className: 'tooltip-container',
        })}
      >
        <ArrowWrapper>
          <div
            {...getArrowProps({
              ref: arrowRef,
              className: `tooltip-arrow`,
              'data-placement': position,
            })}
          />
        </ArrowWrapper>

        <ContentWrapper isContentString={isContentString}>{children}</ContentWrapper>
      </div>
    </TooltipWrapper>
  );
};

function Popover({ position, children, ...props }: PopoverProps) {
  const InternalTooltip = getChildrenOf(Popover.Content, children);
  const InternalTarget = getChildrenOf(Popover.Target, children);

  return (
    <TooltipTriggerComponent
      {...props}
      placement={position}
      trigger="click"
      tooltip={(props) => React.cloneElement(InternalTooltip as React.ReactElement, { position, ...props })}
    >
      {({ getTriggerProps, triggerRef }) => (
        <span
          {...getTriggerProps({
            ref: triggerRef,
            className: 'trigger',
            trigger: 'click',
            ...props,
          })}
        >
          {InternalTarget}
        </span>
      )}
    </TooltipTriggerComponent>
  );
}

Popover.Target = Target;
Popover.Content = Tooltip;

export default Popover;
