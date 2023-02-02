import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Navigation from './Navigation';
import MyTabs from './TabNavigation'
import RestaurantStack from './screens/RestaurantStack';



export default function App() {
 SplashScreen.preventAutoHideAsync();
 setTimeout(SplashScreen.hideAsync,2000)


  return (
    <>
  <MyTabs/>
   
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },





