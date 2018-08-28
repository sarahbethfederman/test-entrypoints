export type Level = 1 | 2 | 3 | 4;

export function depth(level: Level) {
  switch (level) {
    case 1:
      return `box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1), 
        0 2px 2px 0 rgba(0, 0, 0, 0.12), 
        0 1px 3px 0 rgba(0, 0, 0, 0.14);`;
    case 2:
      return `box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1), 
        0 3px 4px 0 rgba(0, 0, 0, 0.12), 
        0 1px 8px 0 rgba(0, 0, 0, 0.14);`;
    case 3:
      return `box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1), 
        0 1px 18px 0 rgba(0, 0, 0, 0.12), 
        0 3px 5px 0 rgba(0, 0, 0, 0.14);`;
    default:
      return `box-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.1), 
        0 5px 22px 4px rgba(0, 0, 0, 0.12), 
        0 7px 8px 0 rgba(0, 0, 0, 0.14);`;
  }
}
