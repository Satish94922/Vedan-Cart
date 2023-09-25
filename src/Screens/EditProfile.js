import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../common/Header'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Button from '../common/Button'

const EditProfile = () => {

    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [mail, setMail] = useState('');

    

    useEffect(() => {
        getData();
    },[])


    const getData = async () => {
        try {
            const Number = await AsyncStorage.getItem('NUMBER');
            const Name = await AsyncStorage.getItem('NAME');
            const Email = await AsyncStorage.getItem('MAIL');

            
            setNumber(Number);
            setName(Name);
            setMail(Email);
            
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    };

    const setData = async () => {
        await AsyncStorage.setItem("NAME", name);
        await AsyncStorage.setItem("MAIL", mail);
        await AsyncStorage.setItem("NUMBER", number);

        navigation.goBack()
    }



    return (
        <View style={styles.container}>
            <Header title={'Edit Profile'} leftIcon={require('VedanCart/assets/back.png')} onClickLeftIcon={() => navigation.goBack()} />
            <Text style={[styles.label, { marginTop: 30 }]}>Enter Name:</Text>
            <TextInput style={styles.testinput} placeholder='Enter Name ...' value={name} onChangeText={txt => setName(txt)} />

            <Text style={[styles.label, { marginTop: 10 }]}>Enter Number:</Text>
            <TextInput style={styles.testinput} placeholder='Enter Number ...' keyboardType={'number-pad'} value={number} onChangeText={txt => setNumber(txt)} />

            <Text style={[styles.label, { marginTop: 10 }]}>Enter Email:</Text>
            <TextInput style={styles.testinput} placeholder='Enter Email ...' value={mail} onChangeText={txt => setMail(txt)} />


            <Button bg={'#fe9000'} title={'Save Profile'} color={'white'} onClick={() => setData()} />
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    testinput: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        borderWidth: 0.5,
        alignSelf: 'center',
        paddingLeft: 20,
        marginTop: 10
    },
    label: {
        fontSize: 18,
        textAlign: 'left',
        marginLeft: 25,
        fontWeight: '600'

    }
})