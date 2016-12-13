import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Analytics from "mobile-center-analytics";

export default class AnalyticsScene extends Component {
  sendTrackingEvent() {
    Analytics.trackEvent('Custom Tracking event', {
      sentTime: new Date().toString()
    });
  }

  render() {
    return (
      <View>
        <Button
          title="Send Tracking event"
          onPress={() => this.sendTrackingEvent()}
          />
      </View>
    );
  }
}
