## [5.1.0] 2020-03-17 [FUNNEL-1124](

## 5.2.0

### Minor Changes

- 920174c5: preconstruct infra update

### Patch Changes

- Updated dependencies [920174c5]
  - @lendi-ui/breakpoint@5.2.0
  - @lendi-ui/color@5.1.0
  - @lendi-ui/depth@4.1.0
  - @lendi-ui/icon@9.7.0
  - @lendi-ui/spacing@7.1.0
  - @lendi-ui/spinner@4.1.0
  - @lendi-ui/text-input@4.2.0
  - @lendi-ui/typography@5.1.0
  - @lendi-ui/utils@5.1.0

### Changed

- Added backupOption as a prop, display backup option as the suggestion if no match found.

## [5.0.4] 2020-01-21 [HUB-hotfix-autocomplete](

### Updated

- Bump text-input version for fixing autofocus bug.

## [5.0.3] - 2019-10-15 - [FUNNEL-627](https://creditandfinance.atlassian.net/browse/FUNNEL-627)

### Fixed

- TypeError: Cannot read property 'firstElementChild' of null in auto-complete component

## [5.0.2] - 2019-10-14 - [FUNNEL-624](https://creditandfinance.atlassian.net/browse/FUNNEL-624)

### Fixed

- onMenuVisibilityChange is passed down to Input component which cause an error

## [5.0.1] 2019-09-26 [Release Notes](https://creditandfinance.atlassian.net/wiki/spaces/HUB/pages/803930391/Upcoming+Major+Changes)

- Bumped lendi-ui dependencies to latest versions

## [5.0.0] 2019-9-23 [Release notes](https://creditandfinance.atlassian.net/wiki/spaces/HUB/pages/803930391/Upcoming+Major+Changes)

### Fixed

- Added more safety around querying a potentially indeterminite ref again
- Added more safety around querying a potentially indeterminite ref
- Update typescript to version 3.5.2 and react to version 16.8.4 [HUB-151](https://creditandfinance.atlassian.net/browse/HUB-151)

### Changed

- Changed onSelect to onSelectItem (Autocomplete and Autocomplete Stateful)
- Changed value to initialValue (Autocomplete Stateful)

## [4.0.3] - 2019-07-17 - [HUB-4](https://creditandfinance.atlassian.net/browse/HUB-4)

### Updated

- Bump patch version to reflect the relative path issue fix

## [4.0.2] - 2019-07-01 - [HUB-254](https://creditandfinance.atlassian.net/browse/HUB-254)

### Changed

- Bug on Stateful comp like onselect - Consumer was getting first element only by mouse click - `fixed`. No issue with keyboard selection.
- Small enhancement - onSelect will give the DataSourceItem `{label, value}`

## [4.0.1] - 2019-06-28 - [HUB-66](https://creditandfinance.atlassian.net/browse/HUB-66)

- hotfix for TypeScript to ignore nullibility check on index type.

## [4.0.0] - 2019-06-19 - [HUB-254](https://creditandfinance.atlassian.net/browse/HUB-254)

### Changed

- Added AutoComplete Stateless component
- AutoCompleteStateless(Controller) and AutoComplete(UnControlled) exposed as named exports.
- OnChange consistent with both stateless and stateful component.
- Fixed a small bug for AutoCompleteStateful - when you push enter before the results come up you get an error in the console and same when there is not result come up and push enter

## [3.2.0] - 2019-06-05 - [HUB-204](https://creditandfinance.atlassian.net/browse/HUB-204)

### Changed

- changed the DataSourceItem value to take both 'string and number'
- consumer can get value of DataSourceItem on onSelect by mouse and on enter of text-input
- set typography on drop down items
- on empty the text input or clicking cancel icon on the text input - should reset the onselect to empty.
- onChange prop

## [3.1.1] - 2019-06-04 - [HUB-262](https://creditandfinance.atlassian.net/browse/HUB-262)

### Changed

- Updated utils dependency to get correct types

## [3.1.0] - 2019-05-27 - [HUB-169](https://creditandfinance.atlassian.net/browse/HUB-169)

### Changed

- Support for native props like Aria attributes, Standard HTML Attributes like title, classname, id, role, itemProp, itemID, itemRef

## [3.0.0] - 2019-05-20 - [HUB-172](https://creditandfinance.atlassian.net/browse/HUB-172)

### Changed

- change the datasource prop, now it can take an Object `{label, value}`
- Full width support
- can take value as props
- added few more props like isError, className, isInverse, isRequired, isReadOnly, isAutoFocus

## [2.1.0] - 2019-05-17 - [HUB-174](https://creditandfinance.atlassian.net/browse/HUB-174)

### Changed

- Module format reverted back to CJS.

### Deleted

- Dropped "module" property from package.json.

## [2.0.5] - 2019-05-15 - [HUB-172](https://creditandfinance.atlassian.net/browse/HUB-172)

### Changed

- Updated - keep import of @spinner component at the top of style file, it is quick fix to solve
  relative path issue in distribution(dist) style definiton file.
- fix the changelog version

## [2.0.4] - 2019-05-09 - [HUB-92](https://creditandfinance.atlassian.net/browse/HUB-92)

### Changed

- Updated CHANGELOG to match required parsing format.

## [2.0.3] - 2019-05-02 - [HUB-88](https://creditandfinance.atlassian.net/browse/HUB-88)

### Changed

- replace `border-radius: 6px` with select function in theme

## [2.0.2] - 2019-05-08 - [HUB-54](https://creditandfinance.atlassian.net/browse/HUB-54)

### Changed

- Change module main entry point to esm in package.json

## [2.0.1] - 2019-04-29 - [HUB-94](https://creditandfinance.atlassian.net/browse/HUB-94)

### Added

- Added normalise mixin to outer component.

### Updated

- Updated utils dependency to ^2.0.1.

## [2.0.0] - 2019-04-30 - [HUB-54](https://creditandfinance.atlassian.net/browse/HUB-54)

### Deleted

- Remove the CJS bundles.

## [1.0.0] - 2019-04-11 - [HUB-16](https://creditandfinance.atlassian.net/browse/HUB-16)

### Created

- Created auto-complete component
