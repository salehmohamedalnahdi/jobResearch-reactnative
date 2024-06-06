import React from 'react';
import {View } from 'react-native';
import AppNavigator from './routes/appNavigator';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './routes/drawerNavigator';
import tw from 'tailwind-react-native-classnames';



export default function App() {
  return (
    
      <NavigationContainer>
      <DrawerNavigator />
      </NavigationContainer>
      
  );
}

