import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/homeScreen"
import CreateScreen from "../screens/createScreen"
import tw from 'tailwind-react-native-classnames';


const Stack = createStackNavigator();

export default function AppNavigator(){
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="CreateScreen" component={CreateScreen} />
    </Stack.Navigator>
  );
};


