# Changelog

## [2.0.0] - 2019-04-30 - [HUB-54] (https://creditandfinance.atlassian.net/browse/HUB-54)
 
### Deleted
- Remove the CJS bundles
## [1.1.1] - 2019-04-30 - [HUB-135](https://creditandfinance.atlassian.net/browse/HUB-135)
### Added
- Added the `createdDate` property to the results of the `fetchApplication()` helper.

## [1.1.0] - 2019-04-08 - [HUB-68](https://creditandfinance.atlassian.net/browse/HUB-68)
### Added
- Added `fetchApplication` and `fetchBroker` helper methods which can be used to fetch the application & broker data for the `NavBar`, can be imported with `import { fetchApplication, fetchBroker } from '@lendi-ui/navbar'`.

## [1.0.9] - 2019-04-12 [HUB-89](https://creditandfinance.atlassian.net/browse/HUB-89)

### Changed
- Changed left navbar header wrapper to explicitly use box-sizing: border-box; and removed the height on the header, resolving a bug where half the header was being cutoff based on box-sizing.
- Fixed the build script to copy images from src to dist/esm.

## [1.0.8] - 2019-03-05 - [BRAVO-535] (https://creditandfinance.atlassian.net/browse/BRAVO-535)
### Changed
- Updated icon dependency from ^4 to ^5

## [1.0.7] = 2019-03-01
### Changed
- Removed aria-role attribute for just role on ul element.
- Fixed React warning under unit tests

## [1.0.6] = 2019-02-14
### Changed
- Added header tag to Header to improve semantics

## [1.0.5] = 2019-02-08
### Changed
- Fixed that the logo in the header didn't link to '/'

## [1.0.4] = 2019-01-24
### Changed
- Gave the Overlay in Sidebar and wrapper to fix z-index stacking context issue that was causing the overlay to be painted behind the header while fading

## [1.0.3] = 2019-01-15
### Changed
- Fixed some styling in LeftSidebar and add more variants to the navbar example.

## [1.0.2] = 2019-01-14
### Changed
- Updated icon dependency from ^4 to ^5
