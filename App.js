/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Search from './Components/Search'
import DiceApp from './Components/biskit/DiceApp'
import Menu from './Components/menu'
import Party from './Components/party'
import Room from './Components/Room'
import Pseudo from './Components/Room/pseudo'

import firebase from '@react-native-firebase/app';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//StackNavigator
const Nav = createStackNavigator({
  Menu: {
    screen : Menu,
  },
  DiceApp: {
    screen: DiceApp,
  },
  Party: {
    screen : Party,
  },
  Room: {
    screen : Room,
  },
  Pseudo: {
    screen : Pseudo,
  }
}, {
  initialRouteName: 'Menu'
})

const AppContainer = createAppContainer(Nav)

// TODO(you): import any additional firebase services that you require for your app, e.g for auth:
//    1) install the npm package: `yarn add @react-native-firebase/auth@alpha` - you do not need to
//       run linking commands - this happens automatically at build time now
//    2) rebuild your app via `yarn run run:android` or `yarn run run:ios`
//    3) import the package here in your JavaScript code: `import '@react-native-firebase/auth';`
//    4) The Firebase Auth service is now available to use here: `firebase.auth().currentUser`

const firebaseCredentials = Platform.select({
  ios: 'https://invertase.link/firebase-ios',
  android: 'https://invertase.link/firebase-android',
});

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer/>
        {!firebase.apps.length && (
          <Text>
            {`\nYou currently have no Firebase apps registered, this most likely means you've not downloaded your project credentials. Visit the link below to learn more. \n\n ${firebaseCredentials}`}
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
