import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Fun Chat</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>Enjoy a new experience chatting with global friends!</Text>
      </View>
      <View style={styles.customTextContainer}>
        <Text style={styles.customText}>
          Welcome to Fun Chat!!! the ultimate messaging platform that brings you close to your family. 
          Chat, share, and stay in touch effortlessly
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log('Button pressed!')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A389E8',
  },
  titleContainer: {
    marginBottom: 260,
  },
  title: {
    fontSize: 60,
    color: '#000',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  descriptionContainer: {
    marginBottom: 10,
  },
  description: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  customTextContainer: {
    marginBottom: 100,
  },
  customText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 30,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;










