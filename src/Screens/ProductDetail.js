import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,ToastAndroid ,Share} from 'react-native'
import React from 'react'
import Header from '../common/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import {useDispatch} from 'react-redux'
import Button from '../common/Button'
import { addItemToCart, addItemToWishList } from '../redux/Actions'
import { useState } from 'react'

const ProductDetail = ({item}) => {
    const dispatch=useDispatch();
    const navigation=useNavigation();
    const route=useRoute();
    const [click,setClick]=useState(false)

    const addItemWishlist=()=>{
        setClick(true)
        dispatch(addItemToWishList(route.params.data))
        ToastAndroid.show('Item Added To WishList',ToastAndroid.SHORT);
    }
    const addItemCart=()=>{
        dispatch(addItemToCart(route.params.data))
        ToastAndroid.show('Item Added To Cart',ToastAndroid.SHORT);
    }

    const onShare = async () => {
        try {
            const title = route.params.data.title;
          const result = await Share.share({
            message:title,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
            }
            else {
            }
          }
          else if (result.action === Share.dismissedAction) {
          }
        } catch (error) {
          alert(error.message);
        }
      };
    
  
return (
    <View style={styles.container}>
      <Header 
      leftIcon={require('VedanCart/assets/back.png')} 
      rightIcon={require('VedanCart/assets/cart.png')} 
      title={'Product Detail'}
      onClickLeftIcon={()=>navigation.goBack()} isCart/>
      <ScrollView>
      <Image source={{uri:route.params.data.image}} style={styles.img}/>
      <Text style={styles.title}>{route.params.data.title}</Text>
      <Text style={styles.desc}>{route.params.data.description}</Text>
      <Text style={styles.price}>${route.params.data.price}</Text>
      {click==false?(
        <TouchableOpacity style={styles.wishbtn} onPress={addItemWishlist}>
            <Image source={require('VedanCart/assets/heart.png')} style={styles.wishimg}/>
        </TouchableOpacity>)
        :(<TouchableOpacity style={styles.wishbtn} onPress={addItemWishlist}>
            <Image source={require('VedanCart/assets/heart_fill.png')} style={styles.wishimg}/>
        </TouchableOpacity>)}
        <TouchableOpacity style={styles.sharebtn} onPress={onShare}>
            <Image source={require('VedanCart/assets/share.png')} style={styles.wishimg}/>
        </TouchableOpacity>
      <Button bg={'#ff9a0c'} title={'Add To Cart'} color={'white'} onClick={addItemCart}/>
      </ScrollView>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    img:{
        width:"100%",
        height:300,
        resizeMode:'center',
        marginTop:30
    },
    title:{
        fontSize:22,
        fontWeight:'600',
        color:'#000',
        marginLeft:20,
        marginTop:20
    },
    desc:{
        fontSize:18,
        marginLeft:20,
        marginRight:20,
        marginTop:10,
        width:'90%',
        alignSelf:'center',
        
    },
    price:{
        fontSize:25,
        color:'green',
        fontWeight:'800',
        marginLeft:20,
        marginTop:20
    },
    wishbtn:{
        position:'absolute',
        right:20,
        top:100,
        backgroundColor:'#e2dfdf',
        justifyContent:'center',
        alignItems:'center',
        width:50,
        height:50,
        borderRadius:25
    },
    sharebtn:{
        position:'absolute',
        right:20,
        top:180,
        backgroundColor:'#e2dfdf',
        justifyContent:'center',
        alignItems:'center',
        width:50,
        height:50,
        borderRadius:25
    },
    wishimg:{
        width:30,
        height:30
    }
})