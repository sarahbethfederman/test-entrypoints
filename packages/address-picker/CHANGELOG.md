# Changelog - @lendi-ui/address-picker

## 3.0.0-beta.0

### Minor Changes

- preconstruct infra update

### Patch Changes

- Updated dependencies [undefined]
  - @lendi-ui/auto-complete@6.0.0-beta.0
  - @lendi-ui/breakpoint@6.0.0-beta.0
  - @lendi-ui/button@9.0.0-beta.0
  - @lendi-ui/color@6.0.0-beta.0
  - @lendi-ui/container@7.0.0-beta.0
  - @lendi-ui/dropdown@5.0.0-beta.0
  - @lendi-ui/grid@5.0.0-beta.0
  - @lendi-ui/icon@10.0.0-beta.0
  - @lendi-ui/modal@4.0.0-beta.0
  - @lendi-ui/spacing@7.1.0-beta.0
  - @lendi-ui/text-input@5.0.0-beta.0
  - @lendi-ui/theme@10.0.0-beta.0
  - @lendi-ui/typography@6.0.0-beta.0
  - @lendi-ui/utils@6.0.0-beta.0

## [2.3.3] 2020-06-16 [FUNNEL-1095](https://creditandfinance.atlassian.net/browse/FUNNEL-1363)

### Fixed

- Fixed country is being saved into street type.

## [2.3.2] 2020-06-16 [FUNNEL-1095](https://creditandfinance.atlassian.net/browse/FUNNEL-1363)

### Updated

- Updated address to a pick list, enable a free text input for state when country is not AU.

## [2.3.1] 2020-03-09 [FUNNEL-1095](https://creditandfinance.atlassian.net/browse/FUNNEL-1095)

### Updated

- Remove the redundant comma from formatString.

## [2.3.0] 2020-02-10 [FUNNEL-1036](https://creditandfinance.atlassian.net/browse/FUNNEL-1036)

### Updated

- Use city instead of suburb because SF support city only.

## [2.2.2] 2020-02-10 [LUIT-141](https://creditandfinance.atlassian.net/browse/LUIT-141)

### Updated

- Show formatted address on input field when user enter an address manually.

## [2.2.1] 2020-02-06 [FUNNEL-1007](https://creditandfinance.atlassian.net/browse/FUNNEL-1007)

### Updated

- Fixed the issue with showing street type when user search regions only.

## [2.2.0] 2020-02-04 [FUNNEL-1007](https://creditandfinance.atlassian.net/browse/FUNNEL-1007)

### Updated

- Allow user to search regions only.

## [2.1.3] 2020-01-21 [HUB-hotfix-autocomplete](

### Updated

- Bump text-input version for fixing autofocus bug.

## [2.1.2] 2020-01-21 [hotfix]

- Using Lui SSR enabled Select

## [2.1.1] 2020-01-14 [HUB-724](https://creditandfinance.atlassian.net/browse/HUB-724)

### Fixed

- Fixed a bug that street name and street type mixed in some case.

## [2.1.0] 2019-11-12 [FUNNEL-658](https://creditandfinance.atlassian.net/browse/FUNNEL-658)

### Changed

- Add static map.
- Use mapType instead of showMap.
- Remove the max-width.
- Fix the issue with no formatted address.

## [2.0.3] 2019-10-21 [HUB-639](https://creditandfinance.atlassian.net/browse/HUB-639)

### Changed

- Replaced generic ERROR with ZERO_RESULTS error from google.

## [2.0.2] 2019-10-08 [HUB-586](https://creditandfinance.atlassian.net/browse/HUB-586)

### Updated

- Bumped the version of button to ^8 and changed the button type inside the modal to button (it was previously submit by default).

## [2.0.1] 2019-09-26 [Release Notes](https://creditandfinance.atlassian.net/wiki/spaces/HUB/pages/803930391/Upcoming+Major+Changes)

- Bumped lendi-ui dependencies to latest versions

## [2.0.0] 2019-9-23 [Release notes](https://creditandfinance.atlassian.net/wiki/spaces/HUB/pages/803930391/Upcoming+Major+Changes)

### Updated

- Update typescript to version 3.5.2 and react to version 16.8.4 [HUB-151](https://creditandfinance.atlassian.net/browse/HUB-151)
- Changed onSelect to onSelectAddress [HUB-112](https://creditandfinance.atlassian.net/browse/HUB-112)
- Updated onChange handler for Dropdown component to expect to receive the native event, instead of the event.target.value [HUB-112](https://creditandfinance.atlassian.net/browse/HUB-112)

## [1.2.0] - 2019-08-27 - [HUB-438](https://creditandfinance.atlassian.net/browse/HUB-260)

### Changed

- let users get format_string of address in onSelect function
- allow users to set default value in Input
- improve documentation for googlemap api script link
- fix some UI bugs

## [1.1.1] - 2019-08-15 - [HUB-260](https://creditandfinance.atlassian.net/browse/HUB-260)

### updated

- bump the version so that it could use latest dropdown version.

## [1.2.0] - 2019-08-27 - [HUB-438](https://creditandfinance.atlassian.net/browse/HUB-260)

### Changed

- let users get format_string of address in onSelect function
- allow users to set default value in Input
- improve documentation for googlemap api script link
- fix some UI bugs

## [1.1.1] - 2019-08-15 - [HUB-260](https://creditandfinance.atlassian.net/browse/HUB-260)

### updated

- bump the version so that it could use latest dropdown version.

## [1.1.0] 2019-6-27 [HUB-66](https://creditandfinance.atlassian.net/browse/HUB-66)

### Created

- Added country to the addressObject
- Fixed bug with onSelect not returning the correct response
- Added isDisabled and size to the props

## [1.0.0] 2019-6-27 [HUB-66](https://creditandfinance.atlassian.net/browse/HUB-66)

### Created

- Release version of AddressPicker.

## [0.1.0] 2019-6-27 [HUB-66](https://creditandfinance.atlassian.net/browse/HUB-66)

### Created

- Created AddressModal component in AddressPicker.
- Integrated google maps API into MapBox
