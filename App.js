import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './screens/LandingScreen'; 
import WelcomeScreen from './screens/WelcomeScreen'; 
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Landing"
          component={LandingScreen} 
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={WelcomeScreen} 
        />
         <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={SignupScreen} 
        />
         <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}







