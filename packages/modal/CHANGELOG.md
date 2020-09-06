## [3.3.0] - 2020-05-19 - [LUIT-157](https://creditandfinance.atlassian.net/browse/LUIT-157)
### Deleted
- Delete the prop `disableClose` and revert modal to 3.1.0.

## [3.2.0] - 2020-05-06 - [LUIT-153](https://creditandfinance.atlassian.net/browse/LUIT-153)
### Added
- Add one more prop `disableClose` to remove the close icon and not allow overlay to close the modal.

## [3.1.0] - 2019-10-03 - [HUB-544](https://creditandfinance.atlassian.net/browse/HUB-544)
### Changed
- Update overlay dependency which removes react-scrolllock, which was locking the scrolling of modal content.

## [3.0.1] 2019-09-26 [Release Notes](https://creditandfinance.atlassian.net/wiki/spaces/HUB/pages/803930391/Upcoming+Major+Changes)
- Bumped lendi-ui dependencies to latest versions

## [3.0.0] 2019-9-23 2019-8-21 [Release notes](https://creditandfinance.atlassian.net/wiki/spaces/HUB/pages/803930391/Upcoming+Major+Changes)
### Updated
- Update typescript to version 3.5.2 and react to version 16.8.4

### Changed
Model prop - `fixedHeader` changed to `isHeaderFixed`
Model prop - `show` changed to `isVisible`
ModalHeaderProps prop - `headerSize` changed to `size`

## [2.3.2] - 2019-07-22 - [HUB-342](https://creditandfinance.atlassian.net/browse/HUB-342)
### Changed
- Update the Modal.Content section to use `overflow: auto` instead of `overflow: scroll`.

## [2.3.1] - 2019-07-17 - [HUB-4](https://creditandfinance.atlassian.net/browse/HUB-4)
### Changed
- Bump patch version to reflect the relative path issue fix

## [2.3.0] - 2019-06-17 - [HUB-196](https://creditandfinance.atlassian.net/browse/HUB-196)
### Added
- Added the fixedHeader prop to the Modal (defaults to false).
- Added the Modal.Header child for the fixed header.

## [2.2.1] - 2019-06-4 - [HUB-262](https://creditandfinance.atlassian.net/browse/HUB-262)
### Changed
- Updated utils dependency to get correct types

## [2.2.0] - 2019-05-27 - [HUB-169](https://creditandfinance.atlassian.net/browse/HUB-169)
### Changed
- Support for native props like Aria attributes, Standard HTML Attributes like title, classname, id, role, itemProp, itemID, itemRef

## [2.1.1] - 2019-05-21 - [HUB-129](https://creditandfinance.atlassian.net/browse/HUB-129)
### Changed
- fix padding bug on wrapper.
- fix documentation and the content of the example.

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

## [2.0.1] - 2019-04-29 - [HUB-94](https://creditandfinance.atlassian.net/browse.HUB-94)
### Added
- Created outer Wrapper component.
- Added normalise mixin to outer component.

## [2.0.0] - 2019-04-30 - [HUB-54](https://creditandfinance.atlassian.net/browse/HUB-54)
### Deleted
- Remove the CJS bundles.

## [1.0.1] - 2019-03-05 - [BRAVO-535](https://creditandfinance.atlassian.net/browse/BRAVO-535)
### Changed
- Updated icon dependency from ^4 to ^5.

## [1.0.0]
### Created
- Created initial version.
