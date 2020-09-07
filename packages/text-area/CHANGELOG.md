## [4.1.1] - 2020-03-06 - [HUB-918](https://creditandfinance.atlassian.net/browse/HUB-918)

## 4.2.1

### Patch Changes

- fix publish issue
- Updated dependencies [undefined]
  - @lendi-ui/breakpoint@5.2.1
  - @lendi-ui/color@5.1.1
  - @lendi-ui/utils@5.1.1

## 4.2.0

### Minor Changes

- 920174c5: preconstruct infra update

### Patch Changes

- Updated dependencies [920174c5]
  - @lendi-ui/breakpoint@5.2.0
  - @lendi-ui/color@5.1.0
  - @lendi-ui/utils@5.1.0

### Fixed

- Fixed a bug that set textarea value internal.

## [4.1.0] - 2020-02-29 - [HUB-918](https://creditandfinance.atlassian.net/browse/HUB-918)

### Added

- Add maxRows feature for auto resize textarea.

## [4.0.1] 2020-02-18 [HUB-hotfix-textarea]

### Fixed

- Fix a bug that textarea interface should be React.TextareaHTMLAttributes<HTMLTextAreaElement>.

## [4.0.0] 2020-02-13 [HUB-903](https://creditandfinance.atlassian.net/browse/HUB-903)

### Changed

- Refactor LUI Textarea with forwardRef and remove the fixed height and width to allow all native html text area attributes.

## [3.0.1] 2019-09-26 [Release Notes](https://creditandfinance.atlassian.net/wiki/spaces/HUB/pages/803930391/Upcoming+Major+Changes)

- Bumped lendi-ui dependencies to latest versions

## [3.0.0] 2019-9-23 2019-8-21 [Release notes](https://creditandfinance.atlassian.net/wiki/spaces/HUB/pages/803930391/Upcoming+Major+Changes)

### Updated

- Update typescript to version 3.5.2 and react to version 16.8.4

## [2.3.0] - 2019-07-30 - [HUB-297](https://creditandfinance.atlassian.net/browse/HUB-297)

### Added

- Add 'xs' size to text-area.
- Fixed disabled state still get hover bug.

## [2.2.1] - 2019-06-4 - [HUB-262](https://creditandfinance.atlassian.net/browse/HUB-262)

### Changed

- Updated utils dependency to get correct types

## [2.2.0] - 2019-05-27 - [HUB-169](https://creditandfinance.atlassian.net/browse/HUB-169)

### Changed

- Support for native props like Aria attributes, Standard HTML Attributes like title, classname, id, role, itemProp, itemID, itemRef

## [2.1.0] - 2019-05-17 - [HUB-174](https://creditandfinance.atlassian.net/browse/HUB-174)

### Changed

- Module format reverted back to CJS.

### Deleted

- Dropped "module" property from package.json.

## [2.0.4] - 2019-05-02 - [HUB-88](https://creditandfinance.atlassian.net/browse/HUB-88)

### Changed

- replace `border-radius: 6px` with select function in theme

## [2.0.3] - 2019-05-09 - [HUB-92](https://creditandfinance.atlassian.net/browse/HUB-92)

### Changed

- Updated CHANGELOG to match required parsing format.

## [2.0.2] - 2019-05-08 - [HUB-54](https://creditandfinance.atlassian.net/browse/HUB-54)

### Changed

- Change module main entry point to esm in package.json

## [2.0.1] - [2019-04-29] - [HUB-94](https://creditandfinance.atlassian.net/browse/HUB-94)

### Added

- Added normalise mixin to the outer component.

### Update

- Updated utils dependency to ^2.0.1.

## [2.0.0] - 2019-04-30 - [HUB-54](https://creditandfinance.atlassian.net/browse/HUB-54)

### Deleted

- Remove the CJS bundles.

## [1.0.0] - [HUB-19](https://creditandfinance.atlassian.net/browse/HUB-19)

### Added

- Created `TextArea` component.
