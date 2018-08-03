import { injectGlobal } from 'styled-components';

/*

  We shouldn't include anything in here that doesn't apply specifically to the `html` or `body` elements.
  Just like with the BEM methodology, each component should fully define all the styles necessary for display,
  so that it can be inserted on any page regardless of the containing elements.
*/
/* tslint:disable:no-unused-expression */
injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
  }
`;