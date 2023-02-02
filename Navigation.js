import { View, Text } from 'react-native'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';
import LoginScreen from './screens/LoginScreen';
import ReviewDetail from './components/restaurantDetail/ReviewDetail'
import MyTabs from './TabNavigation';
import RestaurantStack from './screens/RestaurantStack';
import Test2 from './components/restaurantDetail/test2';
const Stack = createNativeStackNavigator();
export default function Navigation() {
  const screenOptions={
    headerShown:false,
  }
  return (
    <>
    <NavigationContainer independent='true' >
    <Stack.Navigator initialRouteName='Login' screenOptions={screenOptions}>
      <Stack.Screen options={{headerShown:false, tabBarStyle: { display: 'none' }, tabBarVisible: false 
       }}
        name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={Home}  />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetail}  />
      <Stack.Screen name="Test2" component={Test2} />
      
    </Stack.Navigator>
  </NavigationContainer>
  
  </>
  )
}