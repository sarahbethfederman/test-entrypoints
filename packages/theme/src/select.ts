import { Theme } from './types';

export function select(path: string, defaultValue?: any): any {
  return ({ theme }: { theme?: Partial<Theme> }) => {
    if (!theme) {
      throw new Error(
        '@lendi-ui/theme: Theme not found. Please ensure your components are wrapped in the Theme component e.g. <Theme><App/></Theme>'
      );
    }

    let obj: any = theme;
    let startIndex = -1;
    let finishIndex = -1;
    do {
      // check if there is a key that matches the remainder of the path
      const restOfPath = path.substr(startIndex + 1);

      if (obj.hasOwnProperty(restOfPath)) {
        return obj[restOfPath];
      }

      // check if there is a key that matches the next part of the path
      finishIndex = path.indexOf('.', startIndex + 1);
      const nextPartOfPath = path.substr(startIndex + 1, finishIndex - startIndex - 1);

      if (finishIndex === -1 || !obj.hasOwnProperty(nextPartOfPath)) {
        if (defaultValue !== undefined) {
          return defaultValue;
        } else {
          throw new Error(`@lendi-ui/theme: Could not find a property named "${path}" on the theme.`);
        }
      }

      obj = obj[nextPartOfPath];
      startIndex = finishIndex;
    } while (true);
  };
}
