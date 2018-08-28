import metadata, { DocMetadata, WorkspaceMetadata, Metadata } from 'workspace-metadata';

export class Doc {
  constructor(private info: DocMetadata) {}

  get name() {
    return this.info.name;
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

  get name() {
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

  getDocByName(name: string) {
    const doc = this.docs.find((doc) => name === doc.name);
    if (!doc) {
      throw new Error(`Doc "${name} was not found.`);
    }
    return doc;
  }
}

export class Project {
  constructor(private info: Metadata) {}

  get name() {
    return this.info.root.name;
  }

  get description() {
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
