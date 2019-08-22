// LUISelect is made using `withTheme` which can't be made as named export. So we made it default export first, importing it here and then exporting it as named export
import LUISelect from './Select';

export * from './types';
export * from './NativeSelect'; // Native Dropdown
export const Select = LUISelect; // Fancy Dropdown
