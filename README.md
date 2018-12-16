# ExpoKit-smaller-binary-example

I've removed all of the optional modules from this ExpoKit project


Here are all of the pods I could remove:

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

Using [this script](https://github.com/google/cocoapods-size) I measured all of the Pods in an ExpoKit project. 
Here is a breakdown of the results: [Neat-Spread-Sheet](https://docs.google.com/spreadsheets/d/1klwEJoVJ6mvNqGFniF_QKnwK5_kfRMLDM_FopFnnd7E/edit?usp=sharing).




