import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignupScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperPart}>
        <Text style={styles.text}>Fun Chat</Text>
        <Image source={require('../assets/head.png')} style={styles.image} />
        <Text style={styles.text2}>Enjoy the new experience</Text>
        <Text style={styles.text3}>chatting with global friends!</Text>
      </View>
      <View style={styles.lowerPart}>
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Enter FullName" />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Enter Email" />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Icon
              name={showPassword ? 'eye-slash' : 'eye'}
              size={20}
              style={styles.passwordIcon}
            />
          </TouchableOpacity>
        </View>
        <Button title="Sign Up" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperPart: {
    flex: 1,
    backgroundColor: '#A389E8',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 0,
  },
  lowerPart: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    color: '#000',
    fontStyle: 'italic',
    fontWeight: 'bold',
    top: 30,
  },
  text2: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    bottom: 80,
    right: 9,
  },
  text3: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    bottom: 80,
  },
  image: {
    width: 200,
    height: 200,
    bottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: '80%',
    height: 40,
    marginVertical: 10,
  },
  icon: {
    padding: 10,
    color: 'black',
  },
  input: {
    flex: 1,
    padding: 10,
  },
  passwordIcon: {
    color: 'gray',
  },
});

export default SignupScreen;








