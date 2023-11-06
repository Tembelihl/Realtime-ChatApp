import { KeyboardAvoidingView, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';

const LandingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay and then stop the loading animation
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay duration as needed
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#A389E8" />
        ) : (
          <Text style={styles.text}>Fun Chat</Text>
        )}
      </View>
    </KeyboardAvoidingView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  inputContainer: {
    width: 200,
    height: 200,
    backgroundColor: '#A389E8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 600 / 2,
  },
  text: {
    fontSize: 34,
    color: '#fff',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default LandingScreen;


