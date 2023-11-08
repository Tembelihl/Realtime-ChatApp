import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Landing from '../assets/landing.jpg'; 
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Fun Chat</Text>
          <Image style={styles.landing} source={Landing} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>Enjoy the new experience chatting with global friends!</Text>
        </View>
        <View style={styles.customTextContainer}>
          <Text style={styles.customText}>
            Welcome to Fun Chat, the ultimate messaging platform that brings you close to your family.
            Chat, share, and stay in touch effortlessly!!!
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A389E8',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 60,
    color: '#000',
    fontStyle: 'italic',
    fontWeight: 'bold',
    bottom: 20
  },
  landing: {
    width: 270,
    height: 180,
    borderRadius: 50,
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
    marginBottom: 80,
  },
  customText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 50,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;











