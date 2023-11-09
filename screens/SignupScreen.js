import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const goBack = () => {
    navigation.goBack();
  };

  return ( 
    <View style={styles.container}>
      <View style={styles.upperPart}>
      <TouchableOpacity style={styles.backArrow} onPress={goBack}>
        <Icon name="arrow-left" size={15} color="black" />
      </TouchableOpacity>
        <Text style={styles.text}>Fun Chat</Text>
        <Image source={require("../assets/head.png")} style={styles.image} />
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
              name={showPassword ? "eye" : "eye-slash"}
              size={15}
              style={styles.passwordIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={styles.text4}>Or</Text>
          <Text style={styles.text5}>Signup with</Text>
          <View style={styles.socialIconsContainer}>
          <TouchableOpacity style={styles.socialIcon} onPress={() => handleSocialLogin("google")}>
            <Image source={require("../assets/google-icon.png")} style={styles.iconImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon} onPress={() => handleSocialLogin("facebook")}>
            <Image source={require("../assets/facebook-icon.png")} style={styles.iconImage} />
          </TouchableOpacity>
        </View>
          <Text style={styles.text6}>Existing User?</Text>
          <TouchableOpacity
            style={styles.text7}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.text7}>Login Now</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: "#A389E8",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 0,
  },
  lowerPart: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
    color: "#000",
    fontStyle: "italic",
    fontWeight: "bold",
    top: 30,
  },
  text2: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    bottom: 80,
    right: 9,
  },
  text3: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    bottom: 80,
  },
  text4: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
    top: 20,
  },
  text5: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
    top: 20,
  },
  text6: {
    fontSize: 12,
    color: "#000",
    top: 29,
    right: 40,
  },
  text7: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
    top: 5,
    left: 18,
  },
  image: {
    width: 200,
    height: 200,
    bottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    width: "80%",
    height: 40,
    marginVertical: 10,
  },
  icon: {
    padding: 10,
    color: "black",
  },
  input: {
    flex: 1,
    padding: 10,
  },
  passwordIcon: {
    color: "black",
    right: 18,
  },
  buttonContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#A389E8",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 20,
    top: 20,
  },
  buttonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  socialIconsContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  iconImage: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 4,
    marginRight: 6,
  },

  backArrow: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
});

export default SignupScreen;
