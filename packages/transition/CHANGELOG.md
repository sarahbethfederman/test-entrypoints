## [4.0.2] 2019-10-01 [QUAL-694](https://creditandfinance.atlassian.net/browse/HUB-694)
- Bumped lendi-ui dependencies to latest versions

## [4.0.1] 2019-09-26 [Release Notes](https://creditandfinance.atlassian.net/wiki/spaces/HUB/pages/803930391/Upcoming+Major+Changes)
- Bumped lendi-ui dependencies to latest versions

## [4.0.0] 2019-9-23 2019-8-21 [Release notes](https://creditandfinance.atlassian.net/wiki/spaces/HUB/pages/803930391/Upcoming+Major+Changes)
### Updated
- Update typescript to version 3.5.2 and react to version 16.8.4

### Changed
- Changed active to isActive.
- Changed appear to isVisible.
- Changed mountOnEnter to shouldMountOnEnter.
- Changed unmountOnExit to shouldUnmountOnExit.
- onStateChange was renamed to onChangeState

## [3.1.0] - 2019-05-17 - [HUB-174](https://creditandfinance.atlassian.net/browse/HUB-174)
### Changed
- Module format reverted back to CJS.
### Deleted
- Dropped "module" property from package.json.

## [3.0.2] - 2019-05-09 - [HUB-92](https://creditandfinance.atlassian.net/browse/HUB-92)
### Changed
- Updated CHANGELOG to match required parsing format.

## [3.0.1] - 2019-05-08 - [HUB-54](https://creditandfinance.atlassian.net/browse/HUB-54)
### Changed
- Change module main entry point to esm in package.json

## [3.0.0] - 2019-04-30 - [HUB-54](https://creditandfinance.atlassian.net/browse/HUB-54)
### Deleted
- Remove the CJS bundles.

## [1.1.1] - 2019-01-24
### Changed
- Fixed issue where the Fade would ignore its fade timeout when first opened

## [2.0.0] - 2019-01-29
### Changed
- Prop `timeout` in Fade changed from seconds to milliseconds. This fixes an issue where the number, in seconds, was passed to Transition which used it as milliseconds.
- Fixed issue where Fade would prioritise passing the default timeout value rather that given timeout prop to Transition
