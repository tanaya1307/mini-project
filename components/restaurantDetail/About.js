import { View, Text ,Image,Button} from 'react-native'
import React,{useState} from 'react'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import Reviews from './Reviews';
import { Divider } from 'react-native-elements/dist/divider/Divider';
const getFonts=()=>{
  return Font.loadAsync({
    'nunito-bold':require('../../assets/fonts/Nunito-Bold.ttf'),
    'nunito-light':require('../../assets/fonts/Nunito-Light.ttf')
  })
}



const description='Find the best sushi in India ,now in your city'
export default function About(props) {
  const {name,image,price,reviews,rating,categories}=props.route.params;
  
  const [fontsLoaded,setFontsLoaded]=useState(false);
  if(fontsLoaded){
  return (
    <View >
     <RestaurantImage image={image}/>
     <RestaurantTitle title={name}/>
     <RestaurantDescription description={description}/>
      </View>
  )
  }
  else{
    return(
    <AppLoading
    startAsync={getFonts}
    onFinish={()=>setFontsLoaded(true)}
    onError={console.warn}/>
    )

  }
}

const RestaurantImage=(props)=>{
  return(
  <Image
  style={{ height:180, width:'100%'}}
  source={{uri: props.image}}/>)
}
const RestaurantTitle=(props)=>(
  <Text
  style={{
    fontFamily:'nunito-bold',
    fontSize:30,
    fontWeight:'700',
    marginTop:10,
    marginHorizontal:15
  }}
  
  >{props.title}</Text>
)

const RestaurantDescription=(props)=>(
  <Text
  style={{
    fontFamily:'nunito-light',
    fontSize:15,
    fontWeight:'400',
    marginTop:10,
    marginHorizontal:15
  }}
  
  >{props.description}</Text>
)
