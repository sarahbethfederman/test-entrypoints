declare module 'workspace-metadata' {
  export interface DocMetadata {
    name: string;
    load(): Promise<any>;
  }

  export interface ExampleMetadata {
    name: string;
    load(): Promise<any>;
  }

  export interface RootMetadata {
    name: string;
    description: string;
  }

  export interface WorkspaceMetadata {
    name: string;
    version: string;
    description: string;
    deprecated: string | null;
    docs: DocMetadata[];
    examples: ExampleMetadata[];
  }

  export interface Metadata {
    root: RootMetadata;
    workspaces: WorkspaceMetadata[];
  }

  const info: Metadata;
  export default info;
}
