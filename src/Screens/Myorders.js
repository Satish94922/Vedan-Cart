import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image, Dimensions } from 'react-native'
import React from 'react'
import Header from '../common/Header'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const Myorders = () => {
    const navigation=useNavigation();

    const orders=useSelector(state=>state.OrderReducer.data)

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
          </TouchableOpacity>
        )
      }



  return (
    <View style={styles.container}>
        <Header title={'My Orders'} leftIcon={require('VedanCart/assets/back.png')} onClickLeftIcon={()=>navigation.goBack()}/>
        <FlatList
          data={orders}
          
          renderItem={renderItem}
           />
    </View>
  )
}

export default Myorders

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    productItem: {
        width: Dimensions.get('window').width,
        height: 100,
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
})