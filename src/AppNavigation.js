import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignupScreen from './screens/SignupScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import PaymentScreen from './screens/PaymentScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ProductStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="Product" component={ProductScreen} />
    <Stack.Screen name="Cart" component={CartScreen} />
    <Stack.Screen name="Payment" component={PaymentScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen
 name="Welcome"
 component={WelcomeScreen}
 options={{
   tabBarIcon: ({ color, size }) => (
     <Icon name="" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="user-plus" size={size} color={color} />
            ),
          }}
        />
         <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Product"
          component={ProductScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="check" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="shopping-cart" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Payment"
          component={PaymentScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="credit-card" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;