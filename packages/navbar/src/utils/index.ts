export const browserSupportsPassiveListeners = () => {
  let supportsPassive = false;
  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function() {
        supportsPassive = true;
      },
    });
    // for testing browser compatibility, no need to worry
    // about the null TS issue.
    // @ts-ignore
    window.addEventListener('testPassive', null, opts);
    // @ts-ignore
    window.removeEventListener('testPassive', null, opts);
  } catch (e) {}

  return supportsPassive;
};
