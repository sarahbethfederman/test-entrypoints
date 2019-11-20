import * as React from 'react';
import { Fade } from '@lendi-ui/transition';

import { StyledVerticalNavExpander, CollapseChevron, ExpandChevron } from './index.style';
import { useVerticalNavContext } from '../context/VerticalNavContext';

export default () => {
  const { isMouseOver, isExpanded, setIsExpanded } = useVerticalNavContext();

  return (
    <StyledVerticalNavExpander data-testid="vn expander" onClick={setIsExpanded}>
      <Fade isActive={isMouseOver}>
        {isExpanded ? (
          <CollapseChevron data-testid="vn expander icon" />
        ) : (
          <ExpandChevron data-testid="vn expander icon" />
        )}
      </Fade>
    </StyledVerticalNavExpander>
  );
};
