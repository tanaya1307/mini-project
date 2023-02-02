import { View, Text ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from 'react-native-vector-icons'
const localRestaurants=[
  {
    name:'Beachside Bar',
    image_url:'https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    categories:['Cafe','Bar'],
    price:'$$',
    reviews :1244,
    rating:4.2,


   },
   {
    name:'Madarasi Hotel',
    image_url:'https://images.unsplash.com/photo-1643268972535-a2b100ff3632?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9zYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    categories:['South Indian'],
    price:'$$',
    reviews :2560,
    rating:4.5,


   },
   {
    name:'Sarvoday',
    image_url:'https://plus.unsplash.com/premium_photo-1663837827377-d28df735ec75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    categories:['Dessert'],
    price:'$$',
    reviews :999,
    rating:4.3,
    

   }
]
export default function RestaurantItem({navigation}) {
  return (
    <>

      { localRestaurants.map((restaurant,index)=>(
        <TouchableOpacity activeOpacity={1} key={index} style={ {marginBottom:30}} 
        onPress={()=>navigation.navigate('RestaurantDetail',
        {
          name:restaurant.name,
          image:restaurant.image_url,
          categories:restaurant.categories,
          price:restaurant.price,
          rating:restaurant.rating,
          reviews:restaurant.reviews
        }
        )
        }
        >
          <View 
      style={{marginTop:10, padding:15,backgroundColor:'white'}}>
     <RestaurantImage image={restaurant.image_url}/>
     <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
    </View>
    </TouchableOpacity>))
      }
</>
   
  )
}
const RestaurantImage=(props)=>(
  <>
    <Image source={{uri:props.image}}
    style={{width:'100%',height:180}}/>
    <TouchableOpacity style={{position:'absolute',right:20}}>
      <MaterialCommunityIcons name='heart-outline' size={25} color='#fff'/>
    </TouchableOpacity>
    </>
);
const RestaurantInfo=(props)=>(
  <>
  <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:10}}>
  <Text style={{fontSize:15,fontWeight:'bold'}}>{props.name}</Text>
  <View style={{backgroundColor:'#eee' ,height:30,width:30,borderRadius:15,padding:5}}><Text >{props.rating}</Text></View>
  </View>
  
  </>
)