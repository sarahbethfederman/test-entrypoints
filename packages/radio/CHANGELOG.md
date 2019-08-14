## [2.3.0] - 2019-07-22 - [HUB-256](https://creditandfinance.atlassian.net/browse/HUB-256)
### Added
- Added xs, xm, lg size variants

### Fixed
- Custom radio override was not displaying in Firefox

## [2.2.4] - 2019-07-22 - [HUB-310](https://creditandfinance.atlassian.net/browse/HUB-310)
### Changed
- Legend label text in Radio Group does not have responsive font size, default it to 'md'

## [2.2.3] - 2019-06-19 - [HUB-278](https://creditandfinance.atlassian.net/browse/HUB-278)
### Changed
- Incorrect reference to @lendi-ui/utils/src - it should be `@lendi-ui/utils`.

## [2.2.2] - 2019-06-13 - [HUB-274](https://creditandfinance.atlassian.net/browse/HUB-274)
### Changed
- Used strict equality to ensure only one radio element in a radio group can be selected at a time.

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

## [2.0.5] - 2019-05-13 - [HUB-168](https://creditandfinance.atlassian.net/browse/HUB-168)
### Changed
- Ponyfill for createReactContext fallback now compatible with ESM imports

## [2.0.4] - 2019-05-02 - [HUB-88](https://creditandfinance.atlassian.net/browse/HUB-88)
### Changed
- replace `border-radius: 6px` with select function in theme

## [2.0.3] - 2019-05-09 - [HUB-92](https://creditandfinance.atlassian.net/browse/HUB-92)
### Changed
- Updated CHANGELOG to match required parsing format.

## [2.0.2] - 2019-05-08 - [HUB-54](https://creditandfinance.atlassian.net/browse/HUB-54) 
### Changed
- Change module main entry point to esm in package.json

## [2.0.1] - 2019-04-29 - [HUB-94](https://creditandfinance.atlassian.net/browse/HUB-94)
### Added
- Added normalise mixin to outer components.

## [2.0.0] - 2019-04-30 - [HUB-54](https://creditandfinance.atlassian.net/browse/HUB-54)
### Deleted
- Remove the CJS bundles.

## [1.0.0] - 2019-02-28 - [BRAVO-423](https://creditandfinance.atlassian.net/browse/BRAVO-423)
### Created
- Radio component intended for singular use
- Radio Group component intended for use as a fieldset with legend, when a single selection from multiple options is intended

### Changed
- Started using "CHANGELOG.md"
