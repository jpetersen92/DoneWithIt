import React from 'react';
import { Switch, View } from 'react-native';


import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import MyAccountScreen from './app/screens/MyAccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import Screen from './app/components/Screen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

export default function App() {
  return (
    // <ListingDetailsScreen />
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <MessagesScreen />
    // <MyAccountScreen />
    // <ListingsScreen />
    <Screen>
      <AppPicker icon='apps' placeholder='Category'/>
      <AppTextInput icon='email' placeholder='Email'/>
    </Screen>
  );
}
