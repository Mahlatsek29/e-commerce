import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import CartScreen from './src/screens/CartScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignupScreen';

const Tab = createBottomTabNavigator();

const App = () => {
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

export default App;
