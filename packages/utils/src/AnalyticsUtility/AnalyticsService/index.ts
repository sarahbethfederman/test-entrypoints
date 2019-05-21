import { Action, Category, WindowPosition, UserType, track } from '@lendi/lendi-analytics-package';
// analytics using button and hyperlink
export const trackNavigation = (
  text: string,
  isBroker: boolean,
  position: WindowPosition,
  category: Category,
  themeName: string
) => {
  switch (themeName) {
    case 'LendiLogo':
      track({
        action: Action.navigate,
        button_text: text.toLowerCase(),
        category,
        position,
        user_type: isBroker ? UserType.broker : UserType.user,
      });
      break;
    default:
      // @ts-ignore
      console.error('Not a Lendi Theme');
  }
};
