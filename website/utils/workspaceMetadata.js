const path = require('path');
const glob = require('fast-glob');
const stringifyRequest = require('loader-utils').stringifyRequest;

const DOC_EXT = '.doc.{mdx,tsx}';

async function getDocs(ctx, dir) {
  const docs = await glob(`src/**/*${DOC_EXT}`, { cwd: dir, absolute: true });
  return docs.map((file) => {
    // tell webpack to reload the workspace-metadata when the doc file changes
    ctx.addDependency(file);

    // TODO: extract metadata from top of file
    // TODO: disable caching of plugin

    // execute the doc file to get the doc name
    // ctx.loadModule(file, (error, source, sourceMap, module) => {
    //   if (error) {
    //     reject(error);
    //     return;
    //   }
    //   console.log(ctx.exec(source, file));
    // });
    return {
      name: path.basename(file, path.extname(file)).replace(/\.doc$/, ''),
      file,
    };
  });
}

module.exports = {
  async transform(metadata) {
    const root = {
      name: metadata.root.json.name,
      description: metadata.root.json.description,
    };

    const workspaces = await Promise.all(
      metadata.workspaces.filter((workspace) => !workspace.json.private).map(async (workspace) => {
        const docs = await getDocs(this, workspace.path);
        return {
          name: workspace.json.name,
          version: workspace.json.version,
          description: workspace.json.description,
          docs,
        };
      })
    );

    return {
      root,
      workspaces,
    };
  },

  stringify(metadata) {
    return `
      export default {
        root: ${JSON.stringify(metadata.root)},
        workspaces: [
          ${metadata.workspaces.map(
            (workspace) => `{
            name: ${JSON.stringify(workspace.name)},
            version: ${JSON.stringify(workspace.version)},
            description: ${JSON.stringify(workspace.description)},
            docs: [
              ${workspace.docs.map(
                (doc) => `{
                name: ${JSON.stringify(doc.name)},
                load: () => import(${stringifyRequest(this, doc.file)})
              }`
              )}
            ]
          }`
          )}
        ]
      }
    `;
  },
};
