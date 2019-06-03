export type LUIInputProps = React.InputHTMLAttributes<HTMLInputElement>;
// Global whitelist props for all LUI components
export interface LUIGlobalProps extends React.AriaAttributes {
  id?: string;
  className?: string;
  itemProp?: string;
  itemScope?: boolean;
  itemType?: string;
  itemID?: string;
  itemRef?: string;
  tabIndex?: number;
  title?: string;
  role?: string;
}

export interface LUIFormProps extends LUIGlobalProps {
  autoFocus?: boolean;
  name?: string;
  type?: string;
}
