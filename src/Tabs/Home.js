import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View,BackHandler,ToastAndroid} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from '../common/Header'
import { useDispatch } from 'react-redux'
import { addProducts } from '../redux/Actions'

const Home = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [products, setProducts] = useState([])
    let i=0

    const backbutton=()=>{
      if (i<1){
        ToastAndroid.show('Press again to exit',ToastAndroid.SHORT);
        
        i=1;
  
        setTimeout(()=>{
          i=0;
          
        },2000);
        return true
      }
      else{
        BackHandler.exitApp();
      }
    }
  
    useEffect(()=>{
      BackHandler.addEventListener('hardwareBackPress',backbutton);
      return()=>{
        BackHandler.removeEventListener('hardwareBackPress',backbutton)
      }
    },[])
    

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json);
                dispatch(addProducts(json))
            })
    }

    const renderItem=({item})=>{
        return (
            <TouchableOpacity style={styles.productItem} activeOpacity={1} onPress={() => navigation.navigate('ProductDetail', { data: item })}>
                <Image source={{ uri: item.image }} style={styles.img} />
                <View>
                    <Text style={styles.name}>{item.title.length > 25 ?
                        item.title.substring(0, 25) + '...' :
                        item.title}
                    </Text>
                    <Text style={styles.description}>{item.description.length > 30 ?
                        item.description.substring(0, 30) + '...' :
                        item.description}
                    </Text>
                    <Text style={styles.price}>${item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }



    return (
        <View style={styles.container}>
            <Header
                leftIcon={require('VedanCart/assets/menu.png')}
                rightIcon={require('VedanCart/assets/cart.png')}
                title={'Vedan Cart'}
                onClickLeftIcon={() => navigation.openDrawer()} 
                onClickRightIcon={()=>navigation.navigate('Cart')} isCart/>
            <View style={{marginBottom:130}}>

                <FlatList
                    data={products}
                    renderItem={renderItem} />
            </View>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    }
})