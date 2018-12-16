# ExpoKit-smaller-binary-example

Today I worked on an ExpoKit project, it has all of the `expo-firebase` modules so to make the binary size reasonable I needed to start pulling stuff out. I figured I'd share my findings and an example project. 

## How to Remove Stuff

If you eject your project (`expo eject`) you can open the `ios/Podfile` and pull out all of the following modules:

```rb
pod 'EXAdsAdMob',
  :path => "../packages/expo-ads-admob/ios"
pod 'EXAppAuth',
  :path => "../packages/expo-app-auth/ios"
pod 'EXBarCodeScanner',
  :path => "../packages/expo-barcode-scanner/ios"
pod 'EXCamera',
  :path => "../packages/expo-camera/ios"
pod 'EXContacts',
  :path => "../packages/expo-contacts/ios"
pod 'EXFaceDetector',
  :path => "../packages/expo-face-detector/ios"
pod 'EXGoogleSignIn',
  :path => "../packages/expo-google-sign-in/ios"
pod 'EXFaceDetector',
  :path => "../packages/expo-face-detector/ios"
pod 'EXGL',
  :path => "../packages/expo-gl/ios"
pod 'EXGL-CPP',
  :path => "../packages/expo-gl-cpp/cpp"
pod 'EXLocalAuthentication',
  :path => "../packages/expo-local-authentication/ios"
pod 'EXLocalization',
  :path => "../packages/expo-localization/ios"
pod 'EXMediaLibrary',
  :path => "../packages/expo-media-library/ios"
pod 'EXPaymentsStripe',
  :path => "../node_modules/expo-payments-stripe/ios"
pod 'EXPrint',
  :path => "../packages/expo-print/ios"
pod 'EXSegment',
  :path => "../packages/expo-analytics-segment/ios"
pod 'EXSensors',
  :path => "../packages/expo-sensors/ios"
pod 'EXSMS',
  :path => "../packages/expo-sms/ios"
```

## Interfaces 

You may have noticed a bunch of Pods with the `interface` suffix. These cannot be removed as they are used for interfacing between unimodules. They usually contain 1 or 2 `.h` files which compile down to ~100 bytes. So you shouldn't worry about binary bloat coming from these. Ideally we could make these removable too, for brevity purposes ¯\_(ツ)_/¯ 

## Making Expo Smaller

Using [this script](https://github.com/google/cocoapods-size) I measured all of the Pods in an ExpoKit (v30) project. 
Here is a breakdown of the results: [Neat-Spread-Sheet](https://docs.google.com/spreadsheets/d/1klwEJoVJ6mvNqGFniF_QKnwK5_kfRMLDM_FopFnnd7E/edit?usp=sharing).

Ideally these modules would be bundled into their own Expo Unimodules, that way you can remove them! 😄 For instance `expo-face-detector` is removable which saves you 43mb. (in the case of FaceDetector you need to detach to use it anyways `expo build` doesn't bundle it by default)

As you can see from the chart below; Google Maps (~15mb) & Facebook (~5.5mb) would be good libraries to roll into removable unimodules.

In v31 we've moved `AppAuth` (0.14mb), and `GoogleSignIn` (0.61mb) into `expo-app-auth` and `expo-google-sign-in` which you can now pull out (reducing size wasn't the target of those two 😅). 
GPUImage (~0.9mb) is still in the client for legacy purposes, it will be removed soon enough!

![picture so the readme looks fuller](https://github.com/EvanBacon/ExpoKit-smaller-binary-example/blob/master/assets/cocoapod_preview.png?raw=true)
