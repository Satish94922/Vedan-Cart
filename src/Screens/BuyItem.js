import { StyleSheet, Text, View ,FlatList,TouchableOpacity,Image, Dimensions} from 'react-native'
import React, { useState } from 'react'
import Header from '../common/Header'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../common/Button'
import { ScrollView } from 'react-native-gesture-handler'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { addOrder} from '../redux/Actions'

const BuyItem = () => {
    const navigation = useNavigation();
    const items = useSelector((state) => state.CartReducer.data);
    const [selectPaymentMethod,setSelectPaymentMethod]=useState(0)
    const [cartItem, setCartItem] = useState(items);
    const [selectAdress,setSelectAdress]=useState('Please Select Adress')
    const dispatch = useDispatch();
    const isfocused=useIsFocused();
    useEffect(()=>{
        getSelectedAdress();
    },[isfocused])
    
    const getSelectedAdress=async()=>{
        setSelectAdress(await AsyncStorage.getItem('MY_ADRESS'))
    }

    const getTotal = () => {
        let total = 0;
        cartItem.map(item => {
            total = total + item.price
        })
        return total.toFixed(0)
    }

    const orderHandled=()=>{

      alert('Your Order Succesfully Placed')

      dispatch(addOrder(cartItem))
      navigation.navigate('Main')
      
    }

    const renderItem = ({ item }) => {
        return (

            <TouchableOpacity style={styles.productItem} activeOpacity={1} onPress={() => { }}>
                <Image source={{ uri: item.image }} style={styles.img} />
                <View>
                    <Text style={styles.name}>{item.title.length > 25 ? item.title.substring(0, 25) + '...' : item.title}
                    </Text>
                    <Text style={styles.description}>{item.description.length > 25 ? item.description.substring(0, 25) + '...' : item.description}
                    </Text>

                    <Text style={styles.price}>${item.price}</Text>


                </View>
                
            </TouchableOpacity>
        )
    }

    return (
        
        <View style={styles.container}>
            <Header leftIcon={require('VedanCart/assets/back.png')} title={'Buy Item'} onClickLeftIcon={() => navigation.goBack()} />
        <ScrollView>
            <Text style={styles.test}>Added Items</Text>
            <View>
            <FlatList
                data={cartItem}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
            </View>
            <View style={styles.totalview}>
                <Text style={styles.title}>Total</Text>
                <Text style={styles.total}>{'$'+getTotal()}</Text>
            </View>
            <Text style={styles.paytest}>Select Payment Mode</Text>
            <TouchableOpacity style={styles.paymentMethods} onPress={()=>setSelectPaymentMethod(0)}>
                <Image source={selectPaymentMethod==0?require('VedanCart/assets/radio_fill.png'):require('VedanCart/assets/radio.png')} style={styles.radimg}/>
                <Text style={styles.paymentMethodtest}>Credit Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymentMethods} onPress={()=>setSelectPaymentMethod(1)}>
                <Image source={selectPaymentMethod==1?require('VedanCart/assets/radio_fill.png'):require('VedanCart/assets/radio.png')} style={styles.radimg}/>
                <Text style={styles.paymentMethodtest}>Debit Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymentMethods} onPress={()=>setSelectPaymentMethod(2)}>
                <Image source={selectPaymentMethod==2?require('VedanCart/assets/radio_fill.png'):require('VedanCart/assets/radio.png')} style={styles.radimg}/>
                <Text style={styles.paymentMethodtest}>UPI</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymentMethods} onPress={()=>setSelectPaymentMethod(3)}>
                <Image source={selectPaymentMethod==3?require('VedanCart/assets/radio_fill.png'):require('VedanCart/assets/radio.png')} style={styles.radimg}/>
                <Text style={styles.paymentMethodtest}>Cash On Delivery</Text>
            </TouchableOpacity>
            <View style={styles.addressView}>
            <Text style={styles.paytest}>Adress</Text>
            <Text style={styles.editadr} onPress={()=>navigation.navigate('Adress')}>Edit Adress</Text>
            </View>
            <Text style={styles.adr}>{selectAdress}</Text>
            

            <Button bg={'green'} title={'Pay & Order'} color={'white'} onClick={orderHandled}/>
            </ScrollView>
        </View>
        
    )
}

export default BuyItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    test: {
        fontSize: 18,
        marginLeft: 20,
        marginTop: 30,
        color: "black",
        fontWeight:'700'
    },
    productItem: {
        width: Dimensions.get('window').width,
        height: 100,
        marginTop: 10,
        backgroundColor: "#fff",
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:10
    
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
      totalview:{
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:50,
        flexDirection:'row',
        height:50,
        borderBottomWidth:0.5,
        borderBottomColor:'#b7b7b7'
      },
      title:{
        fontSize:20,
        fontWeight:'700',
        marginLeft:20
      },
      total:{
        fontSize:20,
        fontWeight:'700',
        marginRight:20
      },
      paytest:{
        marginTop:30,
        fontSize:20,
        fontWeight:'700',
        marginLeft:20,
        color:'black'
      },
      paymentMethods:{
        flexDirection:'row',
        width:'90%',
        marginTop:20,
        paddingLeft:20
      },
      radimg:{
        width:25,
        height:25,
      },
      paymentMethodtest:{
        marginLeft:20,
        fontSize:16,
        color:'black',
      },
      adr:{
        marginTop:10,
        fontSize:16,
        fontWeight:'700',
        marginLeft:20,
        color:'#636363'
      },
      addressView:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingRight:20
      },
      editadr:{
        marginTop:10,
        fontSize:20,
        fontWeight:'600',
        marginLeft:20,
        color:'#0269a0fb',
        textDecorationLine:"underline"
      }
      
})