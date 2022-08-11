import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import MainTabNavigator from "./MainTabNavigator";
import LinkingConfiguration from './LinkingConfiguration';

import { RootStackParamList } from './types';

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
