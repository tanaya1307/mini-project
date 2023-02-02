import React from 'react'
import {View,Text,Button,Stylesheet} from 'react-native'
import{
    Avatar,Title,Cation,Text,TouchableRipple
} from 'react-native-paper';

function Profile() {
  return (
    <View>
        <View>
            <View>
                <Avatar.Image
                source={{
                    uri:"../assets/images/woman.png" 
                }}
                size={80}
                />
            </View>
        </View>
    </View>
  )
}

export default Profile