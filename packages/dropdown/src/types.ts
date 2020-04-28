import { LUIGlobalProps } from '@lendi-ui/utils';
import { BreakpointValueMap, BreakpointValue } from '@lendi-ui/breakpoint';
import { ThemeMap } from '@lendi-ui/theme';

export interface OptionType {
  [key: string]: any;
}
export type OptionsType<OptionType> = ReadonlyArray<OptionType>;
export type ValueType<OptionType> = OptionType | OptionsType<OptionType> | null | undefined;

export type Size = 'xs' | 'sm' | 'md' | 'lg';
export type InputSize = BreakpointValue<Size> | BreakpointValueMap<Size>;

export type FocusEventHandler = (event: React.FocusEvent<HTMLElement>) => void;
export type KeyboardEventHandler = (event: React.KeyboardEvent<HTMLElement>) => void;
export type FormatOptionLabelContext = 'menu' | 'value';

export interface LUISelectProps extends LUIGlobalProps {
  className?: string;
  /* Formats option labels in the menu and control as React components so that consumer can show menu-items with before and after icon or whatever way he wants to
  use it - see examples - `select-before-icon-example` and `select-with-description-example` */
  formatOptionLabel?: (option: OptionType, { context }: { context: FormatOptionLabelContext }) => React.ReactNode;
  /* Hide the selected option from the menu */
  hideSelectedOptions?: boolean;
  /* The value of the search input */
  inputValue?: string;
  isAutoFocus?: boolean;
  /* Is the select value clearable */
  isClearable?: boolean;
  /* Remove the currently focused option when the user presses backspace */
  isClearableByBackspace?: boolean;
  isDisabled?: boolean;
  isError?: boolean;
  isFullWidth?: boolean;
  isInverse?: boolean;
  isMenuOpen?: boolean;
  isOptionsOverflow?: boolean;
  /* enable multi select*/
  isMultiple?: boolean;
  isSearchable?: boolean;
  onBlur?: FocusEventHandler;
  onChangeItem?: (value: ValueType<OptionType>) => void;
  onFocus?: FocusEventHandler;
  onKeyDown?: KeyboardEventHandler;
  onInputChange?: (val: string) => string | void;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  name?: string;
  /* Array of options that populate the select menu  - it is required*/
  options: OptionsType<OptionType>;
  placeholder?: string;
  size?: Size;
  theme?: ThemeMap;
  /* The value of the select; reflected by the selected option */
  value?: ValueType<OptionType>;
}
