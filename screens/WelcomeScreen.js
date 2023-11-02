import { KeyboardAvoidingView, StyleSheet, View, Text } from 'react-native';
import React from 'react';

const WelcomeScreen = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        TextInput
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
  innerContainer: {
    backgroundColor: '#A389E8',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Beau Rivage',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default WelcomeScreen;


