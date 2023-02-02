import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {Ionicons,AntDesign} from 'react-native-vector-icons'
export default function SearchBar() {
  return (
    <View style={{marginTop:15,flexDirection:'row'}}>
      <GooglePlacesAutocomplete placeholder='Search' styles={{
        textInput:{
            backgroundColor:'#eee',
            borderRadius:20,
         
            marginTop:7
        },
        textInputContainer:{
            backgroundColor:'#eee',
            borderRadius:50,
            flexDirection:'row',
            alignItems:'center',
            marginRight:10
        }
      }}
      renderLeftButton={()=><View style={{marginLeft:10}}>
        <Ionicons name='location-sharp' size={24}/>
      </View>}
      renderRightButton={()=><View style={{flexDirection:'row',borderRadius:30,backgroundColor:'white',marginRight:8,padding:9,alignItems:'center'}}>
      <AntDesign name='clockcircle' size={11}/>
      <Text style={{marginLeft:5}} >Search</Text>
      </View>} />
    </View>
  )
}