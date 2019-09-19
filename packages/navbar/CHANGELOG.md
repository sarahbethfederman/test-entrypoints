## [3.0.5] - 2019-09-18 - [HUB-566](https://creditandfinance.atlassian.net/browse/HUB/566)
### Fixed
- Fixed a bug for MarketingNavbar and SEMNavabr header button should perform the same with ApplicationNavbar whether application exist or not.

## [3.0.4] - 2019-09-12 - [HUB-539](https://creditandfinance.atlassian.net/browse/HUB/539)
### Changed
- Revert setup default logout function in Navbar

## [3.0.3] - 2019-09-11 - [HUB-375](https://creditandfinance.atlassian.net/browse/HUB/375)
### Changed
- bumped transition and overlay versions

## [3.0.2] - 2019-09-04 - [HUB-493](https://creditandfinance.atlassian.net/browse/HUB-493)
### Changed
- add default logout function to navbar

## [3.0.1] - 2019-09-04 - [HUB-490](https://creditandfinance.atlassian.net/browse/HUB-490)
### Changed
- Corrected the link of continue application - now pointed to /home-loans/search.

## [3.0.0] - 2019-08-22 - [HUB-417-navbar](https://creditandfinance.atlassian.net/browse/HUB-417-navbar)
### Changed
- Change sign-in link to new auth stuff.

## [2.5.1] - 2019-07-26 - [HUB-321](https://creditandfinance.atlassian.net/browse/HUB-321)
### Changed
- Change `type` default to 'application'

## [2.5.0] - 2019-07-23 - [HUB-321](https://creditandfinance.atlassian.net/browse/HUB-321)
### Added
- Add SEMNavbar into navbar package

## [2.4.4] - 2019-07-19 - [HUB-navbar-hotfix](https://creditandfinance.atlassian.net/browse/HUB-navbar-hotfix)
### Changed
- Change assets build script and folder structre

## [2.4.3] - 2019-07-18 - [HUB-navbar-svg](https://creditandfinance.atlassian.net/browse/HUB-navbar-svg)
### Changed
- Add one more svg.d.ts module in typings

## [2.4.2] - 2019-07-17 - [HUB-4](https://creditandfinance.atlassian.net/browse/HUB-4)
### updated
- Bump patch version to reflect the relative path issue fix

## [2.4.1] - 2019-06-4 - [HUB-262](https://creditandfinance.atlassian.net/browse/HUB-262)
### Changed
- Updated utils dependency to get correct types

## [2.4.0] - 2019-05-27 - [HUB-169](https://creditandfinance.atlassian.net/browse/HUB-169)
### Changed
- Support for native props like Aria attributes, Standard HTML Attributes like title, classname, id, role, itemProp, itemID, itemRef

## [2.3.4] - 2019-05-29 - [HUB-144](https://creditandfinance.atlassian.net/browse/HUB-144)
### Changed
- Updated the icon imports to be from the new fancy-icons package.
- Update icon imports to match new icon naming.

## [2.3.3] - 2019-05-24 - [HUB-147](https://creditandfinance.atlassian.net/browse/HUB-147)
### Changed
- Update the logo size in the Header and LeftSidebar based on the currently selected theme.

## [2.3.2] - 2019-05-23 - [HUB-143](https://creditandfinance.atlassian.net/browse/HUB-143)
### Changed
- Updated the header styles of the buttons so they display correctly in mobile view.

## [2.3.1] - 2019-05-22 - [HUB-175](https://creditandfinance.atlassian.net/browse/HUB-175)
### Added
- Export all defined types in './type.ts' file

## [2.3.0] - 2019-05-17 - [HUB-175](https://creditandfinance.atlassian.net/browse/HUB-175)
### Changed
- Add one props `params` to accept query parameters from URL in all links in Navbar component

## [2.2.1] - 2019-05-21 - [HUB-174](https://creditandfinance.atlassian.net/browse/HUB-174)
### Changed
- Change build of images to point to CJS.

## [2.2.0] - 2019-05-20] - [HUB-110](https://creditandfinance.atlassian.net/browse/HUB-110)
### Added
- Lendi Analytics support for Navbar

## [2.1.0] - 2019-05-17 - [HUB-174](https://creditandfinance.atlassian.net/browse/HUB-174)
### Changed
- Module format reverted back to CJS.

### Deleted
- Dropped "module" property from package.json.

## [2.0.5] - 2019-05-02 - [HUB-88](https://creditandfinance.atlassian.net/browse/HUB-88)
### Changed
- replace `border-radius: 6px` with select function in theme

## [2.0.4] - 2019-05-09 - [HUB-92](https://creditandfinance.atlassian.net/browse/HUB-92)
### Changed
- Updated CHANGELOG to match required parsing format.

## [2.0.3] - 2019-05-08 - [HUB-54](https://creditandfinance.atlassian.net/browse/HUB-54)
### Changed
- Change module main entry point to esm in package.json

## [2.0.2] - 2019-04-29 - [HUB-94](https://creditandfinance.atlassian.net/browse/HUB-94)
### Added
- Created outer Wrapper component.
- Added normalise mixin to outer component.

## [2.0.1] - 2019-04-26 - [HUB-99](https://creditandfinance.atlassian.net/browse/HUB-99)
### Added
- Bump theme and Logo version

## [2.0.0] - 2019-04-30 - [HUB-54](https://creditandfinance.atlassian.net/browse/HUB-54)

### Deleted
- Remove the CJS bundles.

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

## [1.0.8] - 2019-03-05 - [BRAVO-535](https://creditandfinance.atlassian.net/browse/BRAVO-535)
### Changed
- Updated icon dependency from ^4 to ^5

## [1.0.7] - 2019-03-01
### Changed
- Removed aria-role attribute for just role on ul element.
- Fixed React warning under unit tests

## [1.0.6] - 2019-02-14
### Changed
- Added header tag to Header to improve semantics

## [1.0.5] - 2019-02-08
### Changed
- Fixed that the logo in the header didn't link to '/'

## [1.0.4] - 2019-01-24
### Changed
- Gave the Overlay in Sidebar and wrapper to fix z-index stacking context issue that was causing the overlay to be painted behind the header while fading

## [1.0.3] - 2019-01-15
### Changed
- Fixed some styling in LeftSidebar and add more variants to the navbar example.

## [1.0.2] - 2019-01-14
### Changed
- Updated icon dependency from ^4 to ^5
