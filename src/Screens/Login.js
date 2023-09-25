import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert,BackHandler,ToastAndroid } from 'react-native'
import React, { useState ,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './Loader';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [badEmail, setBadEmail] = useState(false);
    const [badPassword, setBadPassword] = useState(false)
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);


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

    const handleEmail = (test) => {
        setEmail(test)
    }
    const handlePassword = (txt) => {
        setPassword(txt)
    }
    const login = () => {
        if (email == '') {
            setBadEmail(true)
        }
        else{
            setBadEmail(false)
        }
        if (password == '') {
            setBadPassword(true)
        }
        else{
            setBadPassword(false)
        }
        getData();
    }

    const getData=async()=>{
        const Memail=await AsyncStorage.getItem('MAIL')
        const Mpass=await AsyncStorage.getItem('PASSWORD')
        if(email===Memail && password===Mpass){
            setModalVisible(true)
            setTimeout(()=>{
                navigation.navigate('Main')
                setModalVisible(false)
            },1000)
        }
        else{
            Alert.alert("Enter correct details")
        }
    }


    return (
        <View style={styles.container}>
            <Image source={require('VedanCart/assets/playstore-icon.png')} style={styles.img} />
            <Text style={styles.test}>Login</Text>

            <View style={styles.container1}>
                <Image source={require('VedanCart/assets/mail.png')} style={styles.image} />
                <TextInput
                    style={styles.testinput}
                    onChangeText={handleEmail}
                    value={email}
                    placeholder='Enter Email Id'
                />
            </View>
            {badEmail === true && (<Text style={styles.val}>Enter Password</Text>)}


            <View style={styles.container1}>
                <Image source={require('VedanCart/assets/padlock.png')} style={styles.image} />
                <TextInput
                    style={styles.testinput}
                    placeholder='Enter Password'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={handlePassword} />

                
            </View>
            {badPassword === true && (<Text style={styles.val}>Enter Password</Text>)}



            <TouchableOpacity style={styles.lgbtn} onPress={() => {login();}}><Text style={styles.lgtxt}>Login</Text></TouchableOpacity>

            <Text style={styles.acctxt} onPress={() => navigation.navigate('SignUp')}>Create New Account?</Text>


            <Loader visible={modalVisible} />


        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 100,
        marginTop: 100
    },
    test: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 50
    },
    container1: {
        width: '85%',
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    testinput: {
        marginLeft: 10,
    },
    image: {
        width: 24,
        height: 24
    },
    lgbtn: {
        backgroundColor: 'skyblue',
        width: '85%',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 50,
        padding: 10,
    },
    lgtxt: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20

    },
    acctxt: {
        fontSize: 20,
        marginTop: 20,
        textDecorationLine: 'underline',
        fontWeight: '600'
    },
    val: {
        color: 'red',
        marginTop: 10,
    }

})


