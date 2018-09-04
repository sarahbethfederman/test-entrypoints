import * as React from 'react';
import styled, { css } from 'styled-components';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { color, bg } from '@lendi-ui/color';
import { p } from '@lendi-ui/spacing';
import { body } from '@lendi-ui/typography';

export type PlaygroundBackground = 'light' | 'dark' | 'chequered';

const Provider = styled(LiveProvider)`
  ${bg('shade.0')} border-radius: 3px;
  border: 1px solid ${color('shade.200')};
`;

interface PreviewProps {
  background: PlaygroundBackground;
}

const Preview = styled(LivePreview)`
  ${p('sm')};
  ${body()} ${({ background }: PreviewProps) => {
    switch (background) {
      case 'light':
        return bg('shade.0');
      case 'dark':
        return bg('shade.700');
      case 'chequered':
        return css`
          background-size: 10px 10px;
          background-position: 0 0, 5px 0, 5px -5px, 0px 5px;
          background-image: -webkit-gradient(
              linear,
              0 100%,
              100% 0,
              color-stop(0.25, ${color('shade.100')}),
              color-stop(0.25, transparent)
            ),
            -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0.25, ${color('shade.100')}), color-stop(0.25, transparent)),
            -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.75, transparent), color-stop(0.75, ${color('shade.100')})),
            -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0.75, transparent), color-stop(0.75, ${color('shade.100')}));
        `;
    }
  }};
`;

const Editor = styled(LiveEditor)`
  border-top: 1px solid ${color('shade.200')};
    &&& {
      ${p('sm')};
      white-space: pre-wrap;
    }
  }
`;

export interface PlaygroundProps {
  code?: string;
  scope?: { [name: string]: any };
  inline?: boolean;
  background?: 'light' | 'dark' | 'chequered';
  children?: React.ReactNode;
}

export class Playground extends React.Component<PlaygroundProps> {
  public render() {
    const { code, scope, background = 'light', inline = true, children } = this.props;

    /*
      We use a bit of a hack to get react-live working:
      - we recieve JSX from MDX and convert that into a string... doing so
        relies on each component having a `displayName` set or inferred which SFCs
        dont always have
      - in the future, we could look at writing a write a MDX (remark) AST plugin that allows us to write
        code in code blocks, automatically create the scope from the imports and pass additional props to the playground
    */
    const source = code
      ? code
      : reactElementToJSXString(children, { maxInlineAttributesLineLength: 80, sortProps: false });

    return (
      <Provider code={source.trim()} scope={scope} noInline={!inline}>
        <Preview background={background} />
        <Editor />
        <LiveError />
      </Provider>
    );
  }
}
