Sense Overview
==========================================

## Channels
A data channel is a source of data that flows into the Sense platform. For example, a channel could include data from all 
iOS devices with an app using the Sense Reach iOS SDK. Channels are collections of mobile apps that use the 
Sense SDKs, or of any other devices that write to the Sense Ingress API.

## Projects
A profile organizes your various channels and rules. You can separate the channels that are impacted by the rules by grouping your rules into projects. You can then enable the channels within the projects where the device data will be sourced from.

## Devices
A device is anything that provides sensor data to the platform. These can include mobile devices, watches, headsets, or other IoT sensors such as thermostats.

### Connecting Devices to the Platform
Device sensor data is ingested into the platform through the [Ingress API](http://docs.sixgill.com/ingress-api.html). 
For Android and iOS devices, this can be done by integrating the Sense SDK into a mobile app. 
The SDK handles sensor gathering at configurable intervals, and automatically sends the data to the Ingress API. 
The SDKs are authenticated using the API key for their respective channels. The API key can be found in the Channels section of the dashboard. Please use the appropriate channel for your mobile or IoT device.

## Rules
Rules are at the heart of device interactivity within the Sense platform. Rules define conditions around device 
and sensor data and specify the actions that are executed when the conditions are met. For example, devices entering a geofence or coming within range of a beacon could trigger a notification to another device, send an email to a recipient, or post data to another web service. Rules can be complex and include multiple condition or perform multiple actions and may include data from multiple channels.

## Landmarks
Landmarks or geofences are geographic points of interest defined by a perimeter. Landmarks are used in conditions for rules in order to trigger some action.

## Free Form Conditions
Free-form event conditions are used to evaluate sensor-agnostic IoT data. See [Event Free Form](http://docs.sixgill.com/rules.html#event_free_form) for more information.
