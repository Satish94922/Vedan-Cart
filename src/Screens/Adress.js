import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../common/Header'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { deleteAdress } from '../redux/Actions'
import { useState } from 'react'
import { useEffect } from 'react'

const Adress = () => {
    const navigation=useNavigation();
    const adresses=useSelector(state=>state.AdressReducer.data);
    const dispatch=useDispatch();
    const [City,setCity]=useState('');
    const [State,setState]=useState('');
    const [Pincode,setPincode]=useState('');
    const [Type,SetType]=useState('');

    const defaultAdress=async item=>{
        await AsyncStorage.setItem(
            'MY_ADRESS',''+
            item.city+','+
            item.state+','+
            item.pincode+',type:'+
            item.type
            );
        await AsyncStorage.setItem('CITY',item.city);
        await AsyncStorage.setItem('STATE',item.state);
        await AsyncStorage.setItem('PINCODE',item.pincode);
        await AsyncStorage.setItem('TYPE',item.type);
        navigation.goBack()
    }

    useEffect(()=>{
        getAdress()
    })

    const getAdress=async()=>{
        const city1=await AsyncStorage.getItem('CITY');
        const state1=await AsyncStorage.getItem('STATE');
        const pincode1=await AsyncStorage.getItem('PINCODE');
        const type1=await AsyncStorage.getItem('TYPE');

        setCity(city1)
        setState(state1)
        setPincode(pincode1)
        SetType(type1)
    }

    const removeAdress=async()=>{
        await AsyncStorage.removeItem('MY_ADRESS')
        await AsyncStorage.removeItem('CITY')
        await AsyncStorage.removeItem('STATE')
        await AsyncStorage.removeItem('PINCODE')
        await AsyncStorage.removeItem('TYPE')
    }
    

    const renderItem=({item})=>{
        return(
            <TouchableOpacity style={styles.adrView} onPress={()=>defaultAdress(item)}>
                <Text style={styles.test}>{`State:  ${item.state}`}</Text>
                <Text style={styles.test}>{`City:  ${item.city}`}</Text>
                <Text style={styles.test}>{`Pincode:  ${item.pincode}`}</Text>
                <Text style={styles.test1}>{item.type}</Text>
                <View style={styles.bottomview}>
                    <TouchableOpacity style={styles.bottomIcon} onPress={()=>navigation.navigate('AddAdress',{type:'edit',data:item})}>
                        <Image source={require('VedanCart/assets/edit.png')} style={styles.img}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomIcon} onPress={()=>{dispatch(deleteAdress(item.id))}}>
                        <Image source={require('VedanCart/assets/bin.png')} style={styles.img}/>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }


    return (
        <View style={styles.container}>
            <Header leftIcon={require('VedanCart/assets/back.png')} title={'My Adress'} onClickLeftIcon={()=>navigation.goBack()}/>
            {City !==null && (<TouchableOpacity style={styles.adrView}>
                <Text style={styles.test}>{`State:  ${State}`}</Text>
                <Text style={styles.test}>{`City:  ${City}`}</Text>
                <Text style={styles.test}>{`Pincode:  ${Pincode}`}</Text>
                <Text style={styles.test1}>{Type}</Text>
                <View style={styles.bottomview}>
                    <TouchableOpacity style={styles.bottomIcon} onPress={()=>removeAdress()}>
                        <Image source={require('VedanCart/assets/bin.png')} style={styles.img}/>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>)}
            
            <FlatList
            data={adresses}
            renderItem={renderItem}/>
            <TouchableOpacity style={styles.addButton} onPress={()=>navigation.navigate('AddAdress',{type:'new'})}>
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Adress

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    addButton:{
        width:50,
        height:50,
        backgroundColor:'#ec8a00',
        borderRadius:25,
        position:'absolute',
        bottom:50,
        right:20,
        justifyContent:'center',
        alignItems:'center'
    },
    plus:{
        fontSize:30,
        color:'#fff'
    },
    adrView:{
        width:'90%',
        backgroundColor:'white',
        borderWidth:0.5,
        borderRadius:10,
        alignSelf:'center',
        marginTop:20,
        paddingLeft:20,
        paddingBottom:10,
        paddingTop:10
    },
    test:{
        fontSize:20,
        color:'#000'
    },
    test1:{
        fontSize:12,
        color:'#000',
        position:'absolute',
        right:10,
        top:10,
        backgroundColor:'#b1bff5',
        borderRadius:10,
        padding:10,
        fontWeight:'600'
    },
    bottomview:{
        position:'absolute',
        right:10,
        bottom:10,
        flexDirection:'row'
    },
    bottomIcon:{
        width:24,
        height:24,
        marginLeft:30
    },
    img:{
        width:24,
        height:24
    }
})