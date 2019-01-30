# Changelog

## [1.1.1] = 2019-01-24

### Changed

- Fixed issue where the Fade would ignore its fade timeout when first opened

## [2.0.0] = 2019-01-29

### Changed

- Prop `timeout` in Fade changed from seconds to milliseconds. This fixes an issue where the number, in seconds, was passed to Transition which used it as milliseconds.
- Fixed issue where Fade would prioritise passing the default timeout value rather that given timeout prop to Transition
