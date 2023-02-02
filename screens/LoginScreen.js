import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View ,ImageBackground} from 'react-native'
import React,{useState,useEffect} from 'react'
import {auth} from '../firebase.js'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
// import { useNavigation } from '@react-navigation/native';

const image = { uri: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" };

const LoginScreen = ({navigation}) => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [result,setResult]=useState('')
 
  useEffect(() => {
    const unsubscribe=
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        navigation.navigate('Home')
        
      } 
      
    })
    return unsubscribe
    
  },[navigation]);


  const handleSignUp=()=>{
    createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setResult(user);
            navigation.navigate('SignUp')
            
           
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setResult(errorMessage);
            // ..
          })
  }
const handleLogin =()=>{
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setResult(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setResult(errorMessage)
  }) 



 }

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    enabled
    >
        

    <View >
      
      <TextInput
      placeholder="Email"
      value={email}
      onChangeText={text=>setEmail(text)}
      style={styles.input}
      />
       <TextInput
      placeholder="Password"
      value={password}
      onChangeText={text=>setPassword(text)}
      secureTextEntry
      
      style={styles.input}
      />
    </View>
    <View style={styles.buttonContainer}>
        <TouchableOpacity
        
        style={styles.button}
        onPress={handleLogin}
        >
       <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={handleSignUp}
        style={[styles.button,styles.buttonOutline]}
        >
       <Text style={styles.buttonOutlineText} >Sign Up</Text>
        </TouchableOpacity>
    </View>
    {/* <View><Text>{result}</Text></View> */}
   
   
    </KeyboardAvoidingView>
    </ImageBackground>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    

},
inputContainer:{
 width:'80%',
 paddingHorizontal:15,
 paddingVertical:10,
 borderRadius:10,
 marginTop:5
 ,
 width:10
},
input:{
  borderRadius:5,
  padding:10,
  margin:2,
  backgroundColor:'white',
  width:200


},

buttonContainer:{
  width:'60%',
  justifyContent:'center',
  alignItems:'center',
  marginTop:40,
  backgroundColor:' #ff6f3c'
  
},
button:{
  backgroundColor:'#fa8072',
  padding:10,
  margin:10,
  borderRadius:10,
  alignItems:'center'
 

}
,
buttonText:{
  fontWeight:'700',
  color:'black',
  fontSize:16

},
buttonOutline:{
 backgroundColor:'white',
 borderColor:'#fa8072',
 borderWidth:2


},
buttonOutlineText:{
  fontWeight:'700',
  color:'black',
  fontSize:16
},
image: {
  flex: 1,
  justifyContent: "center"
}


})