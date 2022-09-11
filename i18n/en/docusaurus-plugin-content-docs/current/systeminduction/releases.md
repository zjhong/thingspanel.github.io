---
sidebar_position: 9
---

# Update Records

## Things Panel-Ver0.2.0

### New feature
- System settings main menu has been added to support the replacement of all logo and system names on the system
- Device properties have been added and can be filled to position in order to position the device in business visualization
- The tcp protocol was optimized and the device reset api interface added
- Added external extension interface：query device history based on device id
- Added external extension interface：provides interface for input device data and pictures
- Image preview added in data management, fixes time defaults
- Added external extension interface：for all devices and devices based on business ids.
- Added external extension interface：query device current value based on device id
- Added data export to excel.
- Log module added to the background to configure split lines in app.conf configuration file, 8 log levels, log saving time; sql log at info.
- Warning information supports business ids, asset ids, equipment ids.
- Added a dynamic loading logo, changed the loading style
### This optimized and repaired bugs
- Fix service delay problems caused by automated early warning “or” associated events
- Optimized to toggle assets in visualization and optimized toggle load speed
- Optimized login page loading issues
- Optimize the question of changing chart fields in the app management
- Fixed defects that the temperature humidity visualization plugin map cannot be loaded
- Optimized titles and layout for all plugins
- Optimize the configuration of the front-end pack deployment component with docker key deployment
- Optimize docker version, support updating of preend, front-end and nginx configuration on docker version
- Optimized data management retrieval features, repaired some bugs and enhanced user experience;
- Optimize editing in business and decrease display delay; partially name changed
