import * as React from 'react';

let loadedSpritesheet = false;

export interface IconProps {
  /** Name of the svg icon */
  name: string; // @TODO LIP-530 create enum of possible svgs

  className?: string;
}

export class Icon extends React.Component<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    className: undefined,
  };

  constructor(props: IconProps) {
    super(props);
  }

  private mountSVGSpritesheet(response: string) {
    const svgWrapper: HTMLElement = document.createElement('div');
    svgWrapper.setAttribute('id', 'svg-icons');
    svgWrapper.setAttribute('style', 'display:none;');
    svgWrapper.innerHTML = response;

    document.body.insertAdjacentHTML('afterbegin', svgWrapper.outerHTML);

    loadedSpritesheet = true;
  }

  public componentDidMount() {
    if (!loadedSpritesheet) {
      loadedSpritesheet = true;
      fetch('./sprite.symbol.svg')
        .then((res) => res.text())
        .then((text) => {
          this.mountSVGSpritesheet(text);
        })
        .catch((error) => {
          /* tslint:disable-next-line no-console */
          console.warn(error);
          loadedSpritesheet = false;
        });
    }

    return undefined;
  }

  public render() {
    return (
      <svg className={this.props.className} focusable="false" role="img">
        <use href={`#${this.props.name}`} />
      </svg>
    );
  }
}

export default Icon;
