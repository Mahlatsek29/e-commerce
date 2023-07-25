
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const COLORS = {
  white: '#fff',
  dark: '#000',
  red: '#F52A2A',
  light: '#F1F1F1',
  green: '#00B761',
};

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Sign in clicked!");
    navigation.navigate("Home"); 
  };

  const handleSignUp = () => {
    console.log("Sign up clicked!");
    navigation.navigate("SignUp"); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor={COLORS.dark}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor={COLORS.dark}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.signinBtn} onPress={handleLogin}>
        <Text style={styles.signinText}>SIGN IN</Text>
      </TouchableOpacity>

      <Text>Don't have an account?</Text>
      <TouchableOpacity style={styles.signupBtn} onPress={handleSignUp}>
        <Text style={styles.signupText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: COLORS.light,
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  signinBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: COLORS.red,
  },
  signinText: {
    color: COLORS.white,
  },
  signupBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: COLORS.red,
  },
  signupText: {
    color: COLORS.white,
  },
});

export default SignInScreen;
