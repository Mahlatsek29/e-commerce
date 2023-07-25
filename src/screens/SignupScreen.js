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

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    
    console.log("Sign up clicked!");
    navigation.navigate("Home");
  };

  const handleLogin = () => {
    
    console.log("Sign in clicked!");
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor={COLORS.dark}
          onChangeText={(name) => setName(name)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Surname"
          placeholderTextColor={COLORS.dark}
          onChangeText={(surname) => setSurname(surname)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor={COLORS.dark}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor={COLORS.dark}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signInBtn} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signInText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
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
    color: COLORS.dark, 
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    paddingHorizontal: 32,
  },
  signInBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: COLORS.red,
  },
  signInText: {
    color: COLORS.white,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SignUpScreen;
