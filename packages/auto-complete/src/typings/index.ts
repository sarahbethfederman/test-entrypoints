import { IconProps } from '@lendi-ui/icon';
import { BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';
import { LUIFormProps } from '@lendi-ui/utils';

type SizeVariant = 'lg' | 'md' | 'sm';

export type Size = BreakpointValue<SizeVariant> | BreakpointValueMap<SizeVariant>;

export type AutoCompleteValue = string | number;

export interface DataSourceItem {
  label: string;
  value: AutoCompleteValue;
}

export interface AutoCompleteBaseProps extends LUIFormProps {
  before?: React.ReactElement<IconProps>;
  className?: string;
  isAutoFocus?: boolean;
  isDisabled?: boolean;
  isError?: boolean;
  isFullWidth?: boolean;
  isInverse?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onSelectItem?: (selectedItem: DataSourceItem) => void;
  placeholder?: string;
  size?: Size;
}

export interface AutoCompleteStatefulProps extends AutoCompleteBaseProps {
  dataSource: ((input: string) => Promise<DataSourceItem[]>) | DataSourceItem[];
  initialValue?: string;
}

export interface AutoCompleteStatelessProps extends AutoCompleteBaseProps {
  dataSource: DataSourceItem[]; // The items to display in the dropdown menu
  isLoading?: boolean; // loading state
  open?: boolean; // Used to override the internal logic which displays/hides the dropdown menu
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void; // capture every keydown event
  onReset?: () => void; // called when clear(cross) button is being called.
  // By default Autocomplete will manage its own menu visibility, using basic logic to decide whether or not to display it (e.g. open on focus, keypress, close on blur, select, escape, etc). If you need full control over when the menu opens and closes you can put Autocomplete into "managed menu visibility mode" by supplying <code>props.open</code>. This will force Autocomplete to ignore its internal menu visibility status and always hide/show the menu based on <code>props.open</code>. Pair this with <code>props.onMenuVisibilityChange</code> - which is invoked each time the internal visibility state changes - for full control over the menu's visibility.
  onMenuVisibilityChange?: (isOpen: boolean) => void;
  value?: string;
}
