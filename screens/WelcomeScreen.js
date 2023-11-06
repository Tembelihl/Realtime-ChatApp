import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Landing from "../assets/landing.jpg";
const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Fun Chat</Text>
        <Image style={styles.landing} source={Landing} />
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
      <TouchableOpacity style={styles.buttonContainer} onPress={() => ('Button pressed!')}>
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
    marginBottom: 90,
    top: 60
  },
  title: {
    fontSize: 60,
    color: '#000',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  landing: {
    width: 277,
    height: 215,
    marginBottom: 50,
    borderRadius: 50,
    top:30
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










