import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'; // Import the Image component

const COLORS = {
  white: '#fff',
  dark: '#000',
  red: '#F52A2A',
  light: '#F1F1F1',
  green: '#00B761',
};

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Welcome to</Text>
      <Text style={{ fontSize: 38, color: COLORS.green, fontWeight: 'bold' }}>
        Plant Shop
      </Text>
      <Image
        source={require('../assets/plant4.png')} // Add the image source here
        style={styles.image} // Make sure to define the styles for the image (if needed)
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.loginBtn, { backgroundColor: COLORS.red }]}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.signupBtn, { backgroundColor: COLORS.red }]}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.signupText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 200, 
    height: 200, 
    marginBottom: 16, 
  },
  title: {
    fontSize: 24,
    marginBottom: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 32,
  },
  loginBtn: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 75,
  },
  loginText: {
    color: COLORS.white,
    fontSize: 16,
    textAlign: 'center',
  },
  signupBtn: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 75,
  },
  signupText: {
    color: COLORS.white,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default WelcomeScreen;
