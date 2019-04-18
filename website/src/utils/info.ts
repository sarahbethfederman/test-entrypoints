import metadata, { DocMetadata, ExampleMetadata, WorkspaceMetadata, Metadata } from 'workspace-metadata';

export class Doc {
  constructor(private info: DocMetadata) {}

  get name() {
    return this.info.name;
  }

  get slug() {
    // TODO: make url friendly
    return this.name;
  }

  load = () => {
    return this.info.load();
  };
}

export class Example {
  constructor(private info: ExampleMetadata) {}

  get name() {
    return this.info.name;
  }

  get slug() {
    // TODO: make url friendly
    return this.name;
  }

  load = () => {
    return this.info.load();
  };
}

export class Workspace {
  constructor(private info: WorkspaceMetadata) {}

  get org() {
    return this.info.name.split('/')[0];
  }

  get name(): string {
    return this.info.name.split('/')[1];
  }

  get version() {
    return this.info.version;
  }

  get description() {
    return this.info.description;
  }

  get docs() {
    return this.info.docs.map((doc) => new Doc(doc));
  }

  get examples() {
    return this.info.examples.map((example) => new Example(example));
  }

  getDocByName(name: string) {
    const doc = this.docs.find((doc) => name === doc.name);
    if (!doc) {
      throw new Error(`Doc "${name} was not found.`);
    }
    return doc;
  }

  getExampleByName(name: string) {
    const example = this.examples.find((example) => name === example.name);
    if (!example) {
      throw new Error(`Example "${name} was not found.`);
    }
    return example;
  }
}

export class Project {
  constructor(private info: Metadata) {}

  get name(): string {
    return this.info.root.name;
  }

  get description(): string {
    return this.info.root.description;
  }

  get workspaces() {
    return this.info.workspaces.map((info) => new Workspace(info));
  }

  getWorkspaceByName(name: string) {
    const workspace = this.workspaces.find((workspace) => name === workspace.name);
    if (!workspace) {
      throw new Error(`Workspace "${name} was not found.`);
    }
    return workspace;
  }
}

export default new Project(metadata);
