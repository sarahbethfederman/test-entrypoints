import * as React from 'react';

interface ComponentMap {
  [name: string]: React.Component | React.SFC;
}

interface DocumentProps {
  components: ComponentMap;
}

type Document = React.ComponentClass<DocumentProps>;

export interface DocumentViewerProps {
  loader: () => Promise<any>;
}

export interface DocumentViewerState {
  document?: Document;
  components?: ComponentMap;
}

export interface RouteMatch {
  match: {
    path: string;
    params: {
      pkg: string;
      doc: string;
      example: string;
      page: string;
    };
    url: string;
  };
}

export class DocumentViewer extends React.Component<DocumentViewerProps, DocumentViewerState> {
  state: DocumentViewerState = {};

  async load() {
    try {
      const { loader } = this.props;
      const document = await loader();
      const components = await import('./components');
      this.setState({
        document: document.default,
        components: components.components,
      });
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps: DocumentViewerProps) {
    if (this.props.loader !== prevProps.loader) {
      this.load();
    }
  }

  render() {
    const { document, components } = this.state;

    if (!document || !components) {
      return null;
    }

    if (!document) {
      throw new Error('Document has no default export.');
    }

    return React.createElement(document, { components });
  }
}
