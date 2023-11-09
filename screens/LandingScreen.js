import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Welcome');
    }, 3000); 
  }, [navigation]);

  const LoadingDots = () => {
    const dotCount = loading ? (Math.floor(Date.now() / 700) % 4) + 1 : 0;
    return (
      <Text style={styles.loadingDots}>{'.'.repeat(dotCount)}</Text>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#A389E8" />
        ) : (
          <Image style={styles.image} source={require('../assets/mylogo1.png')} />
        )}
      </View>
      <View style={styles.loadingContainer}>
        <Text style={styles.text}>Loading</Text>
        <LoadingDots />
      </View>
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
  imageContainer: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  loadingContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
  },
  loadingDots: {
    fontSize: 54,
  },
});

export default LandingScreen;




