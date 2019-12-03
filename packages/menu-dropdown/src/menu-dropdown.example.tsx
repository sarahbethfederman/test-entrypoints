import * as React from 'react';
import Theme from '@lendi-ui/theme';
import styled from 'styled-components';
import { fg } from '@lendi-ui/color';

import MenuDropdown from './MenuDropdown';
import MenuDropdownContext, { MenuDropdownState, useMenuDropdownContext } from './MenuDropdownContext';

interface StyledTriggerProps extends MenuDropdownState {}

const StyledTrigger = styled(MenuDropdown.Trigger)<StyledTriggerProps>`
  font-weight: ${({ showDropdown }) => (showDropdown ? 'bold' : 'inherit')};

  :hover {
    background-color: transparent;
    text-decoration: underline;
    ${fg('shade.900')};
  }
`;

const StyledItem = styled(MenuDropdown.Content.Item)`
  font-weight: bold;
`;

export default () => {
  return (
    <Theme>
      <MenuDropdown>
        <MenuDropdownContext.Consumer>
          {({ showDropdown }) => (
            <>
              <StyledTrigger showDropdown={showDropdown}>Applications</StyledTrigger>

              <MenuDropdown.Content>
                <StyledItem size="md" onClick={() => alert('Dropped it like it is hot!')}>
                  Drop it like it is hot.
                </StyledItem>

                <StyledItem size="md" onClick={() => alert('Flaunted what your mumma gave you!')}>
                  Flaunt what your mumma gave you.
                </StyledItem>

                <StyledItem size="md" onClick={() => alert('You heard the people sing!')}>
                  Do you hear the people sing?
                </StyledItem>
              </MenuDropdown.Content>
            </>
          )}
        </MenuDropdownContext.Consumer>
      </MenuDropdown>
    </Theme>
  );
};
