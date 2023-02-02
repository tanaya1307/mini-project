import { View, Text } from 'react-native'
import React from 'react'

export default function ReviewDetail({route,navigation}) {
  return (
    <View>
    <Text> {route.params.body}</Text>
  </View>
  )
}