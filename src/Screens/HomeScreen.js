import { StyleSheet, Text, View,TouchableOpacity ,Image,Keyboard,BackHandler,ToastAndroid} from 'react-native'
import React, { useEffect, useState } from 'react'
import Home from '../Tabs/Home'
import Search from '../Tabs/Search'
import WishList from '../Tabs/WishList'
import Notification from '../Tabs/Notification'
import User from '../Tabs/User'
import { useSelector } from 'react-redux'
import { Data } from '../Tabs/Notification'


const HomeScreen = () => {

  const items = useSelector((state) => state.WishListReducer.data);


  const [selectTab,setSelectTab]=useState(0)
  const [keyboardVisible,setKeyboardVisible]=useState(false);

  

  useEffect(()=>{
    const keyboardShowListener=Keyboard.addListener('keyboardDidShow',()=>{
      setKeyboardVisible(true);
    })
    const keyboardHideListener=Keyboard.addListener('keyboardDidHide',()=>{
      setKeyboardVisible(false)
    })
    return()=>{
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    }
  })
  
  return (
    <View style={styles.container}>
      
      {selectTab==0 ? (<Home/>):selectTab==1?(<Search/>):selectTab==2?(<WishList/>):selectTab==3?(<Notification/>):(<User/>)}

      {!keyboardVisible && (<View style={styles.bottom}>
        <TouchableOpacity style={styles.bottomTab} onPress={()=>setSelectTab(0)}>
          <Image source={selectTab==0?require('VedanCart/assets/home_fill.png'):require('VedanCart/assets/home.png')} style={styles.bottomIcon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={()=>setSelectTab(1)}>
          <Image source={selectTab==1?require('VedanCart/assets/search_fill.png'):require('VedanCart/assets/search.png')} style={styles.bottomIcon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={()=>setSelectTab(2)}>
          <Image source={selectTab==2?require('VedanCart/assets/heart_fill.png'):require('VedanCart/assets/heart.png')} style={styles.bottomIcon}/>
          {items.length==0 ? (<View></View>):(<View style={styles.cartitem}>
            <Text style={styles.cartlen}>{items.length}</Text>
          </View>)}
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={()=>setSelectTab(3)}>
          <Image source={selectTab==3?require('VedanCart/assets/notification_fill.png'):require('VedanCart/assets/notification.png')} style={styles.bottomIcon}/>
          {Data.length==0 ? (<View></View>):(<View style={styles.notiitem}>
            <Text style={styles.cartlen}>{Data.length}</Text>
          </View>)}
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={()=>setSelectTab(4)}>
          <Image source={selectTab==4?require('VedanCart/assets/user1.png'):require('VedanCart/assets/user.png')} style={styles.bottomIcon}/>
        </TouchableOpacity>
      </View>)}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  bottom:{
    position:'absolute',
    bottom:0,
    width:'100%',
    height:70,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor:'#fff'
  },
  bottomTab:{
    width:"20%",
    height:"100%",
    justifyContent:'center',
    alignItems:'center'
  },
  bottomIcon:{
    width:25,
    height:25
  },
  cartitem:{
    width:20,
    height:20,
    borderRadius:10,
    backgroundColor:'skyblue',
    position:'absolute',
    right:13,
    top:15,
    justifyContent:'center',
    alignItems:'center'
  },
  notiitem:{
    width:20,
    height:20,
    borderRadius:10,
    backgroundColor:'skyblue',
    position:'absolute',
    right:18,
    top:15,
    justifyContent:'center',
    alignItems:'center'
  },
  cartlen:{
    color:'#000'
  }
})