import * as React from 'react';
import styled, { css } from 'styled-components';
import { Button, ButtonProps } from '@lendi-ui/button';
import { color } from '@lendi-ui/color';

const InputWithButton = (props: ButtonProps) => {
  const InputWithButton = styled(Button)`
    ${(props) => {
      if (props.variant === 'secondary') {
        return css`
          border: 1px solid ${color('shade.200')};
          :hover {
            border: 1px solid ${color('shade.400')};
          }
        `;
      }
      return undefined;
    }};
  `;
  return <InputWithButton {...props} />;
};

export const InputButton = styled(InputWithButton)`
  :focus {
    outline: 5px auto -webkit-focus-ring-color;
    opacity: 1;
    box-shadow: none;
    transform: scale(1);
  }
  :active {
    transform: scale(1);
  }
`;
