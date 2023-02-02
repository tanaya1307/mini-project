import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function AddReview() {
  return (
    <View
    style={{
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        position:'absolute',
        top:240,
        zIndex:999


    }}
    >
    <View 
     style={{
        flexDirection:'row',
        justifyContent:'center',
        width:'100%'
     }}
    
    >
        <TouchableOpacity
         style={{
            marginTop:20,
            backgroundColor:'black',
            alignItems:'center',
            padding:13,
            borderRadius:40,
            width:300,
            position:'relative'
         }}
        
        >
        <Text style={{color:'white'}}>Add Review</Text>
        </TouchableOpacity>
     
    </View>
    </View>
  )
}