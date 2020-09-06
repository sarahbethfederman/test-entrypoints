## [4.1.1] - 2020-7-15 - [RD-926](https://creditandfinance.atlassian.net/browse/RD-926)

## 4.2.0

### Minor Changes

- 920174c5: preconstruct infra update

### Patch Changes

- Updated dependencies [920174c5]
  - @lendi-ui/color@5.1.0
  - @lendi-ui/depth@4.1.0
  - @lendi-ui/icon@9.7.0
  - @lendi-ui/spacing@7.1.0
  - @lendi-ui/utils@5.1.0
- fixed the issue that click event didn't work on span

## [4.1.0] - 2019-11-28 - [HUB-707](https://creditandfinance.atlassian.net/browse/HUB-707)

### Changed

- Added customisability to all of the components through LUI global props and onClicks
- Added MenuDropdownContext which exposes `showDropdown`
- Removed restriction that only MenuDropdown compound components can be valid children of MenuDropdown

## [4.0.2] - 2019-10-23 - [FUNNEL-642](https://creditandfinance.atlassian.net/browse/FUNNEL-642)

### Fixed

- Miss alignment in dropdown trigger and content

## [4.0.1] 2019-09-26 [Release Notes](https://creditandfinance.atlassian.net/wiki/spaces/HUB/pages/803930391/Upcoming+Major+Changes)

- Bumped lendi-ui dependencies to latest versions

## [4.0.0] 2019-9-23 - [2019-07-02] - [HUB-151](https://creditandfinance.atlassian.net/browse/HUB-151)

## [3.0.0] 2019-9-23 - [2019-07-02] - [HUB-151](https://creditandfinance.atlassian.net/browse/HUB-151)

### Updated

- Update typescript to version 3.5.2 and react to version 16.8.4

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

## [2.0.4] - 2019-05-10 - [HUB-92](https://creditandfinance.atlassian.net/browse/HUB-92)

### Changed

- Correctly type this.props.childen

## [2.0.3] - 2019-05-09 - [HUB-92](https://creditandfinance.atlassian.net/browse/HUB-92)

### Changed

- Updated CHANGELOG to match required parsing format.

## [2.0.2] - 2019-05-08 - [HUB-54](https://creditandfinance.atlassian.net/browse/HUB-54)

### Changed

- Change module main entry point to esm in package.json

## [2.0.1] - 2019-04-29 - [HUB-94](https://creditandfinance.atlassian.net/browse/HUB-94)

### Added

- Added normalise mixin to outer component.
- Added utils ^2.0.1 dependency.

## [2.0.0] - 2019-04-30 - [HUB-54](https://creditandfinance.atlassian.net/browse/HUB-54)

### Deleted

- Remove the CJS bundles.

## [1.0.1] - 2019-03-05 - [BRAVO-535](https://creditandfinance.atlassian.net/browse/BRAVO-535)

### Changed

- Updated icon dependency from ^4 to ^5.

## [1.0.0] - 2019-02-25 - [BRAVO-533](https://creditandfinance.atlassian.net/browse/BRAVO-533)

### Created

- Created Menu Dropdown Component.
