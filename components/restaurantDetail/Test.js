import React,{useState} from 'react'
import { View ,TouchableOpacity,Text,FlatList} from 'react-native'

function Test({navigation,route}) {
    const [reviews,setReviews]=useState([
        {title:'incredible flavours',rating:4.5,body:'lorem ipsum',key:'1'},
        {title:'nice dining',rating:4,body:'lorem ipsum',key:'2'},
        {title:'favourite sushi restaurant ',rating:4.8,body:'lorem ipsum',key:'3'},
      ])
  return (
<View>
    <FlatList
      data={reviews}
     
      renderItem={({item})=>{
        return(
        <View style={styles.containerStyle}>
        <TouchableOpacity  onPress={()=>navigation.navigate('Test2',
        {
            data: item,
        }
        )} >
        <Text>{item.title}</Text>
        </TouchableOpacity>
  
      </View>
        )
         
      }}
      />
      </View>
//     <View>
        
//     <TouchableOpacity  onPress={()=>navigation.navigate('Test2')}>
//         <Text>click!</Text>
//     </TouchableOpacity>
// </View>
  )
}

export default Test


const styles={
    containerStyle:{
        backgroundColor:'white',
        borderWidth:1,
        borderRadius:5,
        borderColor:'#ddd',
        borderBottomWidth:0,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.1,
        shadowRadius:2,
        elevation:1,
        marginLeft:5,
        marginRight:5,
        marginTop:10,
        padding:10

    }
}