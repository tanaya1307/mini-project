import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import Reviews from '../components/restaurantDetail/Reviews'
import AddReview from '../components/restaurantDetail/AddReview'
import Test from '../components/restaurantDetail/test'



export default function RestaurantDetail({route,navigation}) {
  return (
    <View>
      <About route={route}/>
      <Divider width={1.8} style={{marginVertical:20}} />
      <View>
        <Test navigation={navigation} route={route}/>
     <AddReview navigation={navigation} restaurantName={route.params.name}/>
     </View>
    </View>
  )
}
{/* <About/>
      <Divider width={1.8} style={{marginVertical:20}} />
      <Reviews/> */}