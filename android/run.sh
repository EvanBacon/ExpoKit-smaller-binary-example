#!/bin/bash

./gradlew ${1:-installDevMinSdkDevKernelDebug} --stacktrace && adb shell am start -n com.bacon.skinnyexample/host.exp.exponent.MainActivity
