import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Home from './Screens/Home'
import TabNavigator from "./components/TabNavigator"
import LoadingScreen from './Screens/Loading'
import Login from './Screens/Login'
import Search from "./Screens/Search"
import {firebaseConfig} from './config'
import firebase from 'firebase'
import DrawerNavigator from "./components/DraweNavigator"
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
export default function App() {
  return (
    <AppContainer>
    </AppContainer>
  );
}
const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:{screen:LoadingScreen},
  Login:{screen:Login},
  DrawerNavigator:{screen:DrawerNavigator}
}
)
const AppContainer=createAppContainer(AppSwitchNavigator)
const styles = StyleSheet.create({
 
});          
                                                 
