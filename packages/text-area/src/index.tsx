import * as React from 'react';
import composeRefs from '@seznam/compose-react-refs';
import { Size, TextAreaWrapper } from './index.style';

type ReactTextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export type TextAreaProps = Pick<
  ReactTextAreaProps,
  Exclude<keyof ReactTextAreaProps, 'size' | 'placeholder' | 'value'>
> & {
  size?: Size;
  isError?: boolean;
  isInverse?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  placeholder?: string;
  value?: string;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  maxRows?: number;
};

const TextArea = React.forwardRef(
  (
    {
      size = 'md',
      isError = false,
      isInverse = false,
      isFullWidth = false,
      isDisabled = false,
      maxRows,
      onChange,
      rows: initialRows = 3,
      className = '',
      value: initialValue = '',
      ...otherProps
    }: TextAreaProps,
    parentRef?: React.Ref<HTMLTextAreaElement>
  ) => {
    const [rows, setRows] = React.useState<number>(maxRows && initialRows > maxRows ? maxRows : initialRows);
    const [value, setValue] = React.useState<string>(initialValue);
    // we can use this to tell us what the new row value needs to be
    const [scrollHeightRatio, setScrollHeightRatio] = React.useState(0);
    const [scrollHeight, setScrollHeight] = React.useState(0);

    // remove padding from scrollheight calculation
    const getScrollHeightMinusPadding = (node: HTMLTextAreaElement) => {
      if (typeof window !== 'undefined') {
        const paddingY = parseFloat(window.getComputedStyle(node, null).getPropertyValue('padding-top')) * 2;
        // scrollHeight minus vertical padding is the value of (rows * lineHeight)
        return node.scrollHeight - paddingY;
      }
      return node.scrollHeight;
    };

    const scrollHeightRef = React.useCallback<(node: HTMLTextAreaElement) => HTMLTextAreaElement>((node) => {
      if (node !== null) {
        const currentScrollHeight = getScrollHeightMinusPadding(node);
        // get ratio of each line
        setScrollHeightRatio(currentScrollHeight / rows);
        // get scrollheight
        setScrollHeight(currentScrollHeight);
      }
      return node;
    }, []);

    // if rows if greater than maxRows by mistake then set rows to the maxRows
    const setRowsWithMax = (rows: number) => {
      if (maxRows && rows > maxRows) {
        setRows(maxRows);
      } else {
        setRows(rows);
      }
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (maxRows) {
        // set rows to initial rows every time and allow us to change height
        event.target.rows = initialRows;
        event.target.style.height = 'auto';

        // get the current scrollHeight without vertical paddings
        const newScrollHeight = getScrollHeightMinusPadding(event.target);

        // when the incoming change affect scrollHeight then we change the scrollHeight and rows
        if (scrollHeight !== newScrollHeight) {
          setScrollHeight(newScrollHeight);
          setRowsWithMax(Math.round(newScrollHeight / scrollHeightRatio));
        }

        // once the incoming change rows is greater than maxRows then we make it scrollable
        if (Math.round(newScrollHeight / scrollHeightRatio) > maxRows) {
          event.target.scrollTop = event.target.scrollHeight;
        }
        // finally change rows and height back
        event.target.rows = rows;
        event.target.style.height = null;
      }
      setValue(event.target.value);

      if (onChange) {
        onChange(event);
      }
    };

    return (
      <TextAreaWrapper
        size={size}
        data-testid="lui-textarea"
        id="lui-textarea"
        rows={rows}
        ref={composeRefs(parentRef, scrollHeightRef)}
        isError={isError}
        isInverse={isInverse}
        isFullWidth={isFullWidth}
        disabled={isDisabled}
        isDisabled={isDisabled}
        className={className}
        value={value}
        onChange={handleChange}
        {...otherProps}
      />
    );
  }
);

export default TextArea;
