import { View, Text, SafeAreaView, ScrollView,Divider, TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItem from '../components/home/RestaurantItem';
import { signOut } from "firebase/auth";
import {auth} from '../firebase.js'
import { useNavigation } from '@react-navigation/native';



export default function Home({navigation}) {
 
  const handleSignOut =()=>{
    signOut(auth).then(() => {
      navigation.goBack()
     
    }).catch((error) => {
      // An error happened.
    })
  
  
   }
   
  return (
    <SafeAreaView style={{backgroundColor:"#eee",flex:1}}>
        <View style={{backgroundColor:'white',padding :15}}>
        <HeaderTabs style={{margin:10}} />
        <SearchBar/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        <RestaurantItem navigation={navigation}/>
        {/* <Divider width={1}/> */}
         
         <TouchableOpacity
         onPress={handleSignOut}
         style={{backgroundColor:'#fa8072',
         borderRadius:10,
         width:100,
         padding:10}}><Text>Sign Out</Text></TouchableOpacity>
        
       
        </ScrollView>
      

     
    </SafeAreaView>
  );
}