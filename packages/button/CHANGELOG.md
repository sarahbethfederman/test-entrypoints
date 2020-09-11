## [8.1.0] 2020-04-17 [AC-126](https://creditandfinance.atlassian.net/browse/AC-126)

## 8.2.7

### Patch Changes

- 073c3f07: fix build

## 8.2.6

### Patch Changes

- 2482beea: Fix build declarations

## 8.2.5

### Patch Changes

- 95dd1da3: added a storybook story

## 8.2.4

### Patch Changes

- type issue

## 8.2.3

### Patch Changes

- cd0b310a: temporary workaround for type issue

## 8.2.2

### Patch Changes

- 0f4cc643: fixed Size type problem

## 8.2.1

### Patch Changes

- fix publish issue
- Updated dependencies [undefined]
  - @lendi-ui/breakpoint@5.2.1
  - @lendi-ui/color@5.1.1
  - @lendi-ui/depth@4.1.1
  - @lendi-ui/spacing@7.1.1
  - @lendi-ui/spinner@4.1.1
  - @lendi-ui/utils@5.1.1

## 8.2.0

### Minor Changes

- 920174c5: preconstruct infra update

### Patch Changes

- Updated dependencies [920174c5]
  - @lendi-ui/breakpoint@5.2.0
  - @lendi-ui/color@5.1.0
  - @lendi-ui/depth@4.1.0
  - @lendi-ui/spacing@7.1.0
  - @lendi-ui/spinner@4.1.0
  - @lendi-ui/utils@5.1.0

### Updated

- Update button dependency to get button type for InputButton.

## [8.0.2] 2019-10-02 [FUNNEL-772](https://creditandfinance.atlassian.net/browse/FUNNEL-772)

### Changed

- Remove the margin right if ButtonGroup isFullWidth.

## [8.0.1] 2019-10-02 [FUNNEL-772](https://creditandfinance.atlassian.net/browse/FUNNEL-772)

### Changed

- Fix ButtonGroup isFullWidth.

## [8.0.0] 2019-10-02 [HUB-593](https://creditandfinance.atlassian.net/browse/HUB-593)

### Added

- Add one more prop 'type' to LUI Button and IconButton. The value of 'type' can be button, submit and reset. The default value for 'type' is button.

## [7.0.2] 2019-09-27 [HUB-590](https://creditandfinance.atlassian.net/browse/HUB-590)

### Changed

- Import IconProps from LUI icon package.

## [7.0.1] 2019-09-26 [Release Notes](https://creditandfinance.atlassian.net/wiki/spaces/HUB/pages/803930391/Upcoming+Major+Changes)

- Bumped lendi-ui dependencies to latest versions

## [7.0.0] 2019-9-23 - [HUB-412](https://creditandfinance.atlassian.net/browse/HUB-412)

### Changed

- Uses Theme v7
- Update typescript to version 3.5.2 and react to version 16.8.4 [HUB-151](https://creditandfinance.atlassian.net/browse/HUB-151)

## [6.0.2] - 2019-07-29 - [HUB-371](https://creditandfinance.atlassian.net/browse/HUB-371)

### Changed

- Add in dependency for lendi-ui/spinner.

## [6.0.1] - 2019-07-15 - [HUB-258](https://creditandfinance.atlassian.net/browse/HUB-258)

### Changed

- Change button font weight from 600 to 700.

## [6.0.0] - 2019-07-01 - [HUB-306](https://creditandfinance.atlassian.net/browse/HUB-306)

### Changed

- Send back MouseEvent for Button onClick function.

## [5.4.0] - 2019-06-14 - [HUB-148](https://creditandfinance.atlassian.net/browse/HUB-148)

### Added

- Added icon-button to the package.

## [5.3.3] - 2019-06-19 - [HUB-278](https://creditandfinance.atlassian.net/browse/HUB-278)

### Changed

- Incorrect reference to @lendi-ui/utils/src - it should be `@lendi-ui/utils`.

## [5.3.2] - 2019-06-07 - [HUB-264](https://creditandfinance.atlassian.net/browse/HUB-264)

### Changed

- Corrected before and after alignment issue.

## [5.3.1] - 2019-06-04 - [HUB-262](https://creditandfinance.atlassian.net/browse/HUB-262)

### Changed

- Updated utils dependency to get correct types

## [5.3.0] - 2019-03-03 - [HUB-169](https://creditandfinance.atlassian.net/browse/HUB-169)

### Changed

- Support for native props like Aria attributes, Standard HTML Attributes like title, classname, id, role, itemProp, itemID, itemRef

## [5.2.1] - 2019-05-28 - [HUB-203](https://creditandfinance.atlassian.net/browse/HUB-203)

### Changed

- Fix the bug that Button does not disabled with href prop.

## [5.2.0] - 2019-05-17 - [HUB-174](https://creditandfinance.atlassian.net/browse/HUB-174)

### Changed

- Module format reverted back to CJS.

### Deleted

- Dropped "module" property from package.json.

## [5.1.5] - 2019-05-13 - [HUB-168](https://creditandfinance.atlassian.net/browse/HUB-88)

### Changed

- Ponyfill for createReactContext fallback now compatible with ESM imports

## [5.1.4] - 2019-05-02 - [HUB-88](https://creditandfinance.atlassian.net/browse/HUB-88)

### Changed

- replace `border-radius: 6px` with select function in theme

## [5.1.3] - 2019-05-09 - [HUB-92](https://creditandfinance.atlassian.net/browse/HUB-92)

### Changed

- Updated CHANGELOG to match required parsing format.

## [5.1.2] - 2019-05-08 - [HUB-54](https://creditandfinance.atlassian.net/browse/HUB-54)

### Changed

- Change module main entry point to esm in package.json

## [5.1.1] - 2019-04-29 - [HUB-94](https://creditandfinance.atlassian.net/browse/HUB-94)

### Added

- Added normalise mixin to outer component.

### Updated

- Updated utils dependency to ^2.0.1.

## [5.1.0] - 2019-04-30 - [HUB-128](https://creditandfinance.atlassian.net/browse/HUB-128)

### Added

- Allowed the passthrough of any data- properties to the button HTML element.

## [5.0.0] - 2019-04-30 - [HUB-54](https://creditandfinance.atlassian.net/browse/HUB-54)

### Deleted

- Remove the CJS bundles.

## [4.5.0] - 2019-04-16 - [HUB-21](https://creditandfinance.atlassian.net/browse/HUB-21)

### Added

- Add `xs` button

## [4.4.0] - 2019-04-15 - [HUB-26](https://creditandfinance.atlassian.net/browse/HUB-26)

### Changed

- Add letter spacing. The rule is if the font size is 14px then letter spacing is 1.4-4=1, 16px is 1.6-4=1.2 etc Refer to Zeplin design
- Make font uppercase in all size variations

## [4.3.3] - 2019-03-05 - [BRAVO-535](https://creditandfinance.atlassian.net/browse/BRAVO-535)

### Changed

- Updated icon dependency from ^4 to ^5

## [4.3.2] - 2019-02-27

### Changed

- Moved onClick from buttonProps to commonProps
- Removed empty buttonProps getter

## [4.3.1]

### Changed

- Added CHANGELOG.md
