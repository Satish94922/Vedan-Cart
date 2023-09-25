import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Dimensions, ToastAndroid } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import Header from '../common/Header';
import { useNavigation } from '@react-navigation/native';
import { removeItemFromWishList } from '../redux/Actions';

const WishList = () => {
  const items = useSelector((state) => state.WishListReducer.data);
  const dispatch=useDispatch();

  const handleRemove=()=>{
    
    ToastAndroid.show('Item Deleted From Cart',ToastAndroid.SHORT);
  }


  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.productItem} activeOpacity={1} onPress={()=>{}}>
        <Image source={{ uri: item.image }} style={styles.img} />
        <View>
          <Text style={styles.name}>{item.title.length>25?item.title.substring(0,25)+'...':item.title}
          </Text>
          <Text style={styles.description}>{item.description.length>25?item.description.substring(0,25)+'...':item.description}
          </Text>
          <Text style={styles.price}>${item.price}</Text>

        </View>
        <TouchableOpacity style={styles.rmbtn} onPress={()=>{
          dispatch(removeItemFromWishList(item.id))
          handleRemove()
        }}>
            <Image source={require('VedanCart/assets/bin.png')} style={styles.rmimg}></Image>
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }


  return (
    <View style={styles.container}>
      <Header title={'Wish List Items'} rightIcon={require('VedanCart/assets/cart.png')}/>

      <FlatList
          data={items}
          renderItem={renderItem}
           />
      {items.length<1 && (<View style={styles.wishno}><Text>No Items in WishList</Text></View>)}
    </View>

  )
}

export default WishList

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  productItem: {
    width: Dimensions.get('window').width,
    // height: 100,
    marginTop: 10,
    backgroundColor: "#fff",
    flexDirection: 'row',
    alignItems: 'center'

  },
  img: {
    width: 100,
    height: 100
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20
  },
  description: {
    marginLeft: 20
  },
  price: {
    color: 'green',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 5
  },
  wishno:{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  rmbtn:{
    position:'absolute',
    right:20,
    bottom:10
  },
  rmimg:{
    width:30,
    height:30
  },
})

