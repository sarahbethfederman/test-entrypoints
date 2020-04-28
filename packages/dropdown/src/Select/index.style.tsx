import { map } from '@lendi-ui/breakpoint';
import { deriveSize, normalise } from '@lendi-ui/utils';
import styled, { css } from 'styled-components';
import { Close, KeyboardArrowDown } from '@lendi-ui/icon';
import { select, ThemeMap } from '@lendi-ui/theme';
import { bg } from '@lendi-ui/color';
import { pl, pr, pt, pb } from '@lendi-ui/spacing';
import { Size, InputSize } from '../types';

export interface DropDownArrowProps {
  isOpen?: boolean;
  size?: Size;
}

export const SelectWrapper = styled.span`
  ${normalise};
`;

export const LUISelectStyles = (
  theme: ThemeMap,
  size: InputSize,
  isInverse: boolean,
  isFullWidth: boolean,
  isError: boolean,
  isDisabled: boolean,
  isOptionsOverflow: boolean
) => ({
  // the dropdown
  control: (defaultStyles: React.CSSProperties) => {
    return {
      ...defaultStyles, // default comes from react-select
      borderRadius: select('borderRadius')({ theme }),
      ...luiControlStyles(theme, size, isInverse, isFullWidth, isError, isDisabled),
    };
  },
  // dropdown container
  container: (defaultStyles: React.CSSProperties) => {
    return {
      ...defaultStyles,
      fontFamily: select('typography.body.fontFamily')({ theme }),
      width: isFullWidth ? '100%' : widthBySizeMixin(size),
      ...fontBySizeMixin(size),
    };
  },
  // the text input
  input: (defaultStyles: React.CSSProperties) => {
    return {
      ...defaultStyles,
      color: isInverse ? 'white' : 'inherit',
      ...fontBySizeMixin(size),
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: isInverse ? 'transparent' : getColor('shade.25')({ theme }),
      },
    };
  },
  // single value being selection
  singleValue: (defaultStyles: React.CSSProperties) => {
    return {
      ...defaultStyles,
      ...fontBySizeMixin(size),
    };
  },
  // multiple value label
  multiValueLabel: (defaultStyles: React.CSSProperties) => {
    return {
      ...defaultStyles,
      fontSize: '100%',
    };
  },
  // multiple value box
  multiValue: (defaultStyles: React.CSSProperties) => {
    return {
      ...defaultStyles,
      backgroundColor: getColor('primary.50')({ theme }),
      borderRadius: select('borderRadius')({ theme }),
    };
  },
  // multiple value cross icon
  multiValueRemove: (defaultStyles: React.CSSProperties) => ({
    ...defaultStyles,
    borderRadius: select('borderRadius')({ theme }),
    ':hover': {
      backgroundColor: getColor('secondary.300')({ theme }),
      color: 'white',
    },
  }),
  placeholder: (defaultStyles: React.CSSProperties) => ({
    ...defaultStyles,
    color: getColor('shade.500')({ theme }),
  }),
  clearIndicator: (defaultStyles: React.CSSProperties, { isSelected }: { isSelected: boolean }) => ({
    // the cross icon conntainer
    ...defaultStyles,
    cursor: 'pointer',
    color: 'inherit',
    padding: '0 8px 4px 0',
    ':active': {
      backgroundColor: !isDisabled && (isSelected ? getColor('secondary.600') : getColor('secondary.50')),
    },
  }),
  dropdownIndicator: (defaultStyles: React.CSSProperties) => ({
    ...defaultStyles,
    cursor: 'pointer',
    color: 'inherit',
    padding: '0px 8px 4px 4px',
  }),
  option: (
    defaultStyles: React.CSSProperties,
    { isFocused, isSelected }: { isFocused: boolean; isSelected: boolean }
  ) => {
    const color = isSelected ? getColor('shade.0')({ theme }) : getColor('shade.1000')({ theme });
    let backgroundColor;
    backgroundColor = isSelected
      ? getColor('secondary.600')({ theme })
      : isFocused
      ? getColor('secondary.25')({ theme })
      : 'transparent';
    const overflowCss = isOptionsOverflow
      ? {}
      : { maxHeight: '48px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' };
    return {
      ...defaultStyles,
      color,
      wordWrap: 'break-word',
      paddingLeft: pl('sm')[1],
      paddingRight: pr('sm')[1],
      paddingTop: pt('xs')[1],
      paddingBottom: pb('xs')[1],
      backgroundColor,
      ...overflowCss,
      ':active': {
        backgroundColor: !isDisabled && (isSelected ? getColor('secondary.600') : getColor('secondary.50')),
      },
    };
  },
  menu: (defaultStyles: React.CSSProperties) => ({
    // menu list container
    ...defaultStyles,
    paddingTop: pt('xxs')[1],
    paddingBottom: pb('xxs')[1],
    margin: 0,
    borderRadius: select('borderRadius')({ theme }),
    fontFamily: select('typography.body.fontFamily')({ theme }),
  }),
  menuList: (defaultStyles: React.CSSProperties) => ({
    // menu list container
    ...defaultStyles,
    margin: 0,
    maxHeight: '192px',
    ...bg('shade.0'),
    overflow: 'auto',
    outline: 'none',
  }),
  groupHeading: (defaultStyles: React.CSSProperties) => ({
    ...defaultStyles,
    textTransform: 'uppercase',
    paddingTop: '4px',
    fontSize: '90%',
    height: '25px',
  }),
  menuPortal: (defaultStyles: React.CSSProperties) => ({
    ...defaultStyles,
    zIndex: 30, // greater than modal's one
  }),
});

export const luiControlStyles = (
  theme: ThemeMap,
  size: InputSize,
  isInverse?: boolean,
  isFullWidth?: boolean,
  isError?: boolean,
  isDisabled?: boolean
) => {
  let styles: React.CSSProperties;
  if (isDisabled) {
    styles = {
      cursor: 'not-allowed',
      backgroundColor: isInverse ? 'transparent' : getColor('shade.25')({ theme }),
      borderColor: isInverse ? getColor('shade.0')({ theme }) : getColor('shade.100')({ theme }),
      ...heightBySizeMixin(size),
      width: isFullWidth ? '100%' : widthBySizeMixin(size),
    };
  } else {
    styles = {
      borderWidth: `1px`,
      borderColor: InputBorderColor({ isInverse, isError, theme }),
      borderStyle: 'solid',

      backgroundColor: isInverse ? 'transparent' : getColor('shade.0')({ theme }),
      ...heightBySizeMixin(size),
      width: isFullWidth ? '100%' : widthBySizeMixin(size),
    };
  }
  return styles;
};

const InputBorderColor = ({
  isInverse,
  isError,
  theme,
}: {
  isInverse?: boolean;
  isError?: boolean;
  theme: ThemeMap;
}) => {
  let color;
  if (!isError) {
    if (!isInverse) {
      color = getColor('shade.200')({ theme });
    } else {
      color = getColor('shade.25')({ theme });
    }
  } else {
    color = getColor('error.500')({ theme });
  }

  return color;
};

const getColor = (variant: string) => {
  return select(`colors.${variant}`);
};

export const heightBySizeMixin = (size: InputSize) => {
  return map(size, (val) => {
    switch (val) {
      case 'xs':
        return {
          minHeight: deriveSize(1.625),
          borderRadius: '13px',
        };
      case 'sm':
        return {
          minHeight: deriveSize(2.5),
        };
      case 'md':
        return {
          minHeight: deriveSize(3),
        };
      case 'lg':
        return {
          minHeight: deriveSize(3.875),
        };
      default:
        return undefined;
    }
  });
};

export const KeyboardArrowDownIcon = styled(KeyboardArrowDown).attrs({
  color: 'primary.500',
})<DropDownArrowProps>`
  transition: transform 0.5s ease 0s;
  ${({ isOpen }) =>
    css`
      transform: rotate(${isOpen ? '180deg' : '0deg'});
    `};
  ${({ size }) => iconBySizeMixin(size!)};
`;

export const CloseIcon = styled(Close)`
  ${({ size }: { size: Size }) => iconBySizeMixin(size)};
`;

const iconBySizeMixin = (size: Size) =>
  map(size, (val) => {
    switch (val) {
      case 'xs':
        return css`
          top: ${deriveSize(0.25)};
          width: ${deriveSize(0.875)};
          height: ${deriveSize(0.875)};
        `;
      case 'sm':
        return css`
          top: ${deriveSize(0.35)};
          width: ${deriveSize(1)};
          height: ${deriveSize(1)};
        `;
      case 'md':
        return css`
          top: ${deriveSize(0.45)};
          width: ${deriveSize(1.25)};
          height: ${deriveSize(1.25)};
        `;
      case 'lg':
        return css`
          top: ${deriveSize(0.35)};
          width: ${deriveSize(1.75)};
          height: ${deriveSize(1.75)};
        `;
      default:
        return undefined;
    }
  });

export const fontBySizeMixin = (size: InputSize) =>
  map(size, (val) => {
    switch (val) {
      case 'xs':
        return {
          fontSize: deriveSize(0.7857),
        };
      case 'sm':
        return {
          fontSize: deriveSize(0.875),
        };
      case 'md':
        return {
          fontSize: deriveSize(1),
        };
      case 'lg':
        return {
          fontSize: deriveSize(1.125),
        };
      default:
        return undefined;
    }
  });

export const widthBySizeMixin = (size: InputSize) =>
  map(size, (val) => {
    switch (val) {
      case 'xs':
        return deriveSize(12.5);
      case 'sm':
        return deriveSize(14.5);
      case 'lg':
        return deriveSize(24);
      case 'md':
      default:
        return deriveSize(21.5);
    }
  });
