import React from 'react'
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ReviewDetail from '../components/restaurantDetail/ReviewDetail';
import RestaurantDetail from './RestaurantDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack =  createNativeStackNavigator();

function RestaurantStack() {
    const screenOptions={
        headerShown:false,
      }
  return (
    <>
    <NavigationContainer independent='true' >
    <Stack.Navigator initialRouteName='RestaurantDetail' screenOptions={screenOptions}>
      <Stack.Screen options={{headerShown:false}} name="ResaturantDetail" component={RestaurantDetail} />
      <Stack.Screen name="ReviewDetail" component={ReviewDetail} />
    </Stack.Navigator>
  </NavigationContainer>
  
  </>
   
  )
}

export default RestaurantStack