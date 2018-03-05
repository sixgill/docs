# Sixgill Reach Android SDK Setup
The Sixgill Reach Android SDK is a package for collecting android device sensor data for use with the Sixgill Sense platform. In order to fully utilize the Reach SDK, permissions will have to be requested at app level to enable features using Location, Push Notifications, and Wifi Sensors. Follow the guides below to configure your app.

## Permission Configuration

1. Request and get required permissions from user before starting Reach sdk.

```java
/**
    choose specific permissions as requied.
    see 
*/
private static final List<String> REQUIRED_PERMISSIONS = Arrays.asList(
        Manifest.permission.ACCESS_FINE_LOCATION,
        Manifest.permission.ACCESS_COARSE_LOCATION,
        Manifest.permission.ACCESS_WIFI_STATE,
        Manifest.permission.CHANGE_WIFI_STATE,
        Manifest.permission.BLUETOOTH,
        Manifest.permission.BLUETOOTH_ADMIN,
        "com.google.android.gms.permission.ACTIVITY_RECOGNITION"
);

private static int MY_PERMISSIONS_REQUEST = 1234;

// thisActivity is the current activity
Activity thisActivity = this

public boolean hasPermissions(List<String> permissions) {
    if (android.os.Build.VERSION.SDK_INT >= Build.VERSION_CODES.M && permissions != null) {
        for (String permission : permissions) {
            if (ContextCompat.checkSelfPermission(context, permission) != PackageManager.PERMISSION_GRANTED) {
                return false;
            }
        }
    }
    return true;
}

public boolean shouldShowRequestPermissionRationale(List<String> permissions) {
    if (android.os.Build.VERSION.SDK_INT >= Build.VERSION_CODES.M && permissions != null) {
        for (String permission : permissions) {
            if (ContextCompat.shouldShowRequestPermissionRationale(context, permission)){
                return true;
            }
        }
    }
    return false;
}

//inside function that is starting Reach SDK
if (this.hasPermissions(REQUIRED_PERMISSIONS)) {
    Reach.enable(this)
}
else{
    // Should we show an explanation?
    if (this.shouldShowRequestPermissionRationale(REQUIRED_PERMISSIONS)) {
        // Show an explanation to the user *asynchronously* -- don't block
        // this thread waiting for the user's response! After the user
        // sees the explanation, try again to request the permission.
    } else {
        // No explanation needed, we can request the permission.
        ContextCompat.requestPermissions(thisActivity,
                REQUIRED_PERMISSIONS.toArray(),
                MY_PERMISSIONS_REQUEST);
    }
}

@Override
public void onRequestPermissionsResult(int requestCode,
        String permissions[], int[] grantResults) {
        //use requestCode to verify this request
        if(requestCode === MY_PERMISSIONS_REQUEST){
            Reach.enable(this)
        }
}
```

## SDK Initialization

In your application's instance class, initialise SDK in following manner:

```java

public class MainApplication extends Application {
    public void onCreate() {
        super.onCreate();
        Reach.initWithAPIKey(this,"YOUR_API_KEY");
    }
}
```


## Other Notes

If including `.aar` file manually, you need to put sdk dependencies in you app dependecies.
**Note this only applies if yo uare including `.aar` manually instead of using sdk hosted on cloud**

[Generating .aar](https://github.com/sixgill/android-sdk-java/tree/API-integration#user-content-installation)

build.gradle(app level)
```gradle
dependencies {
    ...
    implementation 'javax.annotation:javax.annotation-api:1.2'
    implementation 'com.journeyapps:zxing-android-embedded:3.5.0'
    implementation 'com.google.code.gson:gson:2.8.0'
    implementation 'com.google.firebase:firebase-messaging:11.8.0'

    implementation 'com.squareup.retrofit2:retrofit:2.3.0'
    implementation 'com.squareup.retrofit2:converter-protobuf:2.3.0'
    implementation 'com.squareup.okhttp3:logging-interceptor:3.9.1'
    implementation 'com.google.android.gms:play-services-gcm:11.8.0'
    implementation 'com.google.android.gms:play-services-location:11.8.0'
    implementation 'com.facebook.stetho:stetho-okhttp3:1.5.0'
    ...
}
```