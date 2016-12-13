import React, { Component } from 'react';
import {
AppRegistry,
StyleSheet,
Text,
View,
Navigator,
TouchableHighlight
} from 'react-native';

import HomeScene from './scenes/home';

let styles = StyleSheet.create({
navBar: {
backgroundColor: 'white',
},
navBarText: {
fontSize: 16,
marginVertical: 10,
},
navBarTitleText: {
color: '#373E4D',
fontWeight: '500',
marginVertical: 9,
},
navBarLeftButton: {
paddingLeft: 10,
},
navBarRightButton: {
paddingRight: 10,
},
navBarButtonText: {
color: '#5890FF',
},
container: {
paddingTop: 40,
paddingLeft: 5,
paddingRight: 5,
flex: 1,
backgroundColor: '#EAEAEA',
}
});

let navBar = (
<Navigator.NavigationBar
routeMapper={{
LeftButton: (route, navigator, index, navState) => {
return route.title === 'Home' ? null : (
    <TouchableHighlight onPress={e => navigator.pop()} style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>←</Text>
    </TouchableHighlight>
);
},
Title: (route) => { return (<Text style={[styles.navBarText, styles.navBarTitleText]}>{route.title}</Text>); },
RightButton: () => null
}}
style={styles.navBar}
/>

);

export default class RNMobileCenterDemo extends Component {
render() {
return (
<Navigator
initialRoute={{ title: 'Home', component: HomeScene }}
renderScene={(route, navigator) =>
    <View style={styles.container}><route.component navigator={navigator} /></View>
}
style={styles.container}
navigationBar={navBar}
/>
);
}
}

AppRegistry.registerComponent('RNMobileCenterDemo', () => RNMobileCenterDemo);
