import React from 'react'
import {TouchableOpacity,View,Text} from 'react-native'

function Test2({route}) {
    // const { title} = route.params;
    const { data } = route.params;
  return (
   <>
    <View>
    <Text> {data.title}</Text>
  </View>
  
   
   </>
  )
}

export default Test2