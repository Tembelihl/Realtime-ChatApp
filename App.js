import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './screens/LandingScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options= {{ headerShown: false}} name="Landing" component={LandingScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const containerSize = 200; // Set the desired size of the container
const circleSize = 100; // Set the desired size of the circle

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the whole screen and center its content
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 200,
    height: 200,
    backgroundColor: '#A389E8', // Change to your desired background color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 600 / 2, // Make the container circular
  },
  text: {
    fontSize: 40, // Change to your desired font size
    color: '#fff',
    fontFamily: 'Beau Rivage', // Set the font family to "Beau Rivage"
    fontStyle: 'italic'
  },
});










