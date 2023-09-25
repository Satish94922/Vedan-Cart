import { View, Text,StyleSheet,Image } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {

    const navigation=useNavigation();

    useEffect(()=>{
        setTimeout(()=>{
            getData();
        },1500)
    })

    const getData=async()=>{
      const email=await AsyncStorage.getItem('MAIL');
      if(email!=='' && email!==null && email!==undefined){
        navigation.navigate("Main")
      }
      else{
        navigation.navigate("Login")
      }
    }
  return (
    <View style={styles.conatiner}>
      <Image source={require('VedanCart/assets/playstore-icon.png')} style={styles.img}/>
    </View>
  )
}

const styles=StyleSheet.create({
    conatiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
        
    },
    img:{
        width:200,
        height:200,
        borderRadius:100,
        resizeMode:'center'
    }
})

export default Splash