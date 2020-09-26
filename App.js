import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ExchangeScreen from './screens/ExchangeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import { AppDrawerNavigator } from './component/AppDrawerNavigator';

export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Home:{screen: HomeScreen},
  Exchange:{screen: ExchangeScreen},
})

const AppContainer =  createAppContainer(switchNavigator);




