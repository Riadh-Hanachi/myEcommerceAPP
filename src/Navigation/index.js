import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../Screens/Home"
import SignInScreen from '../Screens/SignInScreen'
import SignUpScreen from '../Screens/SignUpScreen'
import WelcomeScreen from '../Screens/WelcomeScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import CartScreen from '../Screens/CartScreen'
import FavoriteScreen from '../Screens/FavoriteScreen'
import AddProductScreen from '../Screens/AddProductScreen'
import ProductDetailsScreen from '../Screens/ProductDetails'
import CalculatorScreen from '../Screens/CalculatorScreen'

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator  initialRouteName="WelcomeScreen"
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="AddProductScreen" component={AddProductScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
      <Stack.Screen name="CalculatorScreen" component={CalculatorScreen} />

      
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default index