import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../common/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useState } from 'react'
import Button from '../common/Button'
import { useDispatch } from 'react-redux';
import { addAdress ,updateAdress} from '../redux/Actions'
import uuid from 'react-native-uuid';

const AddAdress = () => {
    const route=useRoute();
    const navigation=useNavigation();
    const [type,setType]=useState(route.params.type=='edit'?route.params.data.type=='Home'?1:2:1);
    const [state,setState]=useState(route.params.type=='edit'?route.params.data.state :'');
    const [city,setCity]=useState(route.params.type=='edit'?route.params.data.city:'');
    const [pincode,setPincode]=useState(route.params.type=='edit'?route.params.data.pincode:'');
    const dispatch=useDispatch();
    

    const addAdress1=()=>{
        if(route.params.type=='edit'){
            dispatch(updateAdress({state:state,city:city,pincode:pincode,type:type==1?'Home':'Office',id:route.params.data.id}),
            navigation.goBack());
        }
        else{
            dispatch(addAdress({state:state,city:city,pincode:pincode,type:type==1?'Home':'Office',id:uuid.v4()}),
            navigation.goBack());
        }
        
        
    }
    return (
        <View style={styles.container}>
            <Header leftIcon={require('VedanCart/assets/back.png')} title={route.params.type=='edit'?'Edit Adress':'Add New Adress'} onClickLeftIcon={()=>navigation.goBack()}/>
            <TextInput style={[styles.testinput,{marginTop:50}]} placeholder='Enter State' value={state} onChangeText={txt=>setState(txt)}/>
            <TextInput style={[styles.testinput,{marginTop:15}]} placeholder='Enter City' value={city} onChangeText={txt=>setCity(txt)}/>
            <TextInput style={[styles.testinput,{marginTop:15}]} placeholder='Enter Pincode' keyboardType={'number-pad'} value={pincode} onChangeText={txt=>setPincode(txt)}/>
            <View style={styles.typeadrView}>
                <TouchableOpacity style={[styles.typeadrbtn,{borderColor:type==1?'orange':'black'}]} onPress={()=>setType(1)}>
                    <Image source={type==1?require('VedanCart/assets/radio_fill.png'):require('VedanCart/assets/radio.png')} style={styles.radbtn}/>
                    <Text style={styles.radtest}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.typeadrbtn,{borderColor:type==2?'orange':'black'}]} onPress={()=>setType(2)}>
                    <Image source={type==2?require('VedanCart/assets/radio_fill.png'):require('VedanCart/assets/radio.png')} style={styles.radbtn}/>
                    <Text style={styles.radtest}>Office</Text>
                </TouchableOpacity>
            </View>
            <Button bg={'#fe9000'} title={'Save Adress'} color={'white'} onClick={addAdress1}/>
        </View>
    )
}

export default AddAdress

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    testinput:{
        width:'90%',
        height:50,
        borderRadius:10,
        borderWidth:0.5,
        alignSelf:'center',
        paddingLeft:20,
    },
    typeadrView:{
        width:'100%',
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    typeadrbtn:{
        width:'40%',
        height:50,
        borderRadius:10,
        flexDirection:'row',
        borderWidth:0.5,
        paddingLeft:10,
        alignItems:'center',
    },
    radbtn:{
        height:25,
        width:25
    },
    radtest:{
        fontSize:15,
        marginLeft:20
    }
    
})