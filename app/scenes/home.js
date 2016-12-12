import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
} from 'react-native';

import Crashes from './crashes';
import Analytics from './analytics';

let styles = StyleSheet.create({
  listItem: {
    fontSize: 18,
    paddingTop: 3,
    paddingBottom: 3
  }
});

var scenes = [
  { title: 'Crashes', component: Crashes },
  { title: 'Analytics', component: Analytics }
]

export default class HomeScene extends Component {
  handleSceneClick(sceneTitle) {
    var scene = scenes.filter(scene => scene.title === sceneTitle);
    if (scene.length === 1) {
      this.props.navigator.push(scene[0]);
    }
  }

  renderRow({title}) {
    return (
      <TouchableHighlight onPress={(e) => this.handleSceneClick(title)}>
        <Text style={styles.listItem}>{title}</Text>
      </TouchableHighlight>
    );
  }

  render() {
    const rows = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(scenes);
    return (<ListView
      dataSource={rows}
      renderRow={rowData => this.renderRow(rowData)}
      />
    );
  }
}
