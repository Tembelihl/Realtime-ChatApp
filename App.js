import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LandingScreen from './screens/LandingScreen'; 
import WelcomeScreen from './screens/WelcomeScreen'; 
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import MessageScreen from './screens/MessageScreen';
import ChatScreen from './screens/ChatScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
         <Stack.Screen
          options={{ headerShown: false }}
          name="Message"
          component={MessageScreen}
        />
         <Stack.Screen
          options={{ headerShown: false }}
          name="Chat"
          component={ChatScreen}
        />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}







