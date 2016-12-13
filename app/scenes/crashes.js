import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Crashes from "mobile-center-crashes";

export default class CrashesScene extends Component {
  nativeCrash() {
    Crashes.generateTestCrash();
  }

  jsCrash() {
    this.firstFunction();
  }

  firstFunction() {
    this.secondFunction();
  }

  secondFunction() {
    this.thirdFunction();
  }

  thirdFunction() {
    this.sourceOfCrashFunction();
  }

  sourceOfCrashFunction() {
    throw new Error('This is a Javascript crash message');
  }

  render() {
    return (
      <View>
        <Button onPress={() => this.jsCrash()} title="Generate JS Crash"  color="#841584"/>
        <Button onPress={() => this.nativeCrash()} title="Generate Native Crash"  color="#841584"/>
      </View>
    );
  }
}
