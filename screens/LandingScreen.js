import { KeyboardAvoidingView, StyleSheet, View, Text } from 'react-native';
import React from 'react';

const LandingScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Fun Chat</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Background color for the entire screen
  },
  inputContainer: {
    width: 200,
    height: 200,
    backgroundColor: '#A389E8', // Change to your desired background color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 600 / 2, // Make the container circular
  },
  text: {
    fontSize: 34,
    color: '#fff',
    fontFamily: 'Beau Rivage',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default LandingScreen;


