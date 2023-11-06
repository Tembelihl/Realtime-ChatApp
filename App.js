import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './screens/LandingScreen'; // Import your LandingScreen
import WelcomeScreen from './screens/WelcomeScreen'; // Import your WelcomeScreen

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Landing"
          component={LandingScreen} // Use the LandingScreen component
        /> */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={WelcomeScreen} // Use the WelcomeScreen component
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}







