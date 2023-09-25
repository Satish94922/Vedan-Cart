import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView,BackHandler,ToastAndroid} from 'react-native'
import React, { useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignUp = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [badName, setBadName] = useState(false);
    const [badMail, setBadMail] = useState(false);
    const [badNumber, setBadNumber] = useState(false);
    const [badPassword, setBadPassword] = useState(false);
    const [badConfPassword, setBadConfPassword] = useState(false);



    const validate = () => {


        if (name == '') {
            setBadName(true)
            

        }
        else {
            setBadName(false)

            if (mail == '') {
                setBadMail(true)
                
            }
            else {
                setBadMail(false)

                if (number == '') {
                    setBadNumber(true)
                    

                }
                else if (number.length < 10) {
                    setBadNumber(true)
                    

                }
                else {
                    setBadNumber(false)

                    if (password == '') {
                        setBadPassword(true)
                        
                    }
                    else {
                        setBadPassword(false)

                        if (confPassword == '') {
                            setBadConfPassword(true)
                            

                        }
                        else {
                            setBadConfPassword(false)

                            if (password !== confPassword) {
                                setBadConfPassword(true)
                                

                            }
                            else {
                                setBadConfPassword(false)

                                saveData();
                            }

                        }

                    }

                }

            }

        }

    }
    



const saveData = async () => {

    await AsyncStorage.setItem("NAME", name);
    await AsyncStorage.setItem("MAIL", mail);
    await AsyncStorage.setItem("NUMBER", number);
    await AsyncStorage.setItem("PASSWORD", password);
    navigation.navigate('Login')

}


return (
    <ScrollView style={styles.signcontain}>
        <View style={styles.container}>
            <Image source={require('VedanCart/assets/playstore-icon.png')} style={styles.img} />
            <Text style={styles.test}>Create New Account</Text>

            <View style={styles.container1}>
                <Image source={require('VedanCart/assets/user.png')} style={styles.image} />
                <TextInput
                    style={styles.testinput}
                    placeholder='Enter Name'
                    value={name}
                    onChangeText={setName}
                />
            </View>
            {badName === true && (<Text style={styles.val}>Enter Name</Text>)}

            <View style={styles.container1}>
                <Image source={require('VedanCart/assets/mail.png')} style={styles.image} />
                <TextInput
                    style={styles.testinput}
                    placeholder='Enter Email Id'
                    value={mail}
                    onChangeText={setMail}
                />
            </View>
            {badMail === true && (<Text style={styles.val}>Enter Email</Text>)}
            <View style={styles.container1}>
                <Image source={require('VedanCart/assets/mobile.png')} style={styles.image} />
                <TextInput
                    style={styles.testinput}
                    placeholder='Enter Mobile Number'
                    value={number}
                    onChangeText={setNumber}
                    keyboardType='decimal-pad'
                />

            </View>
            {badNumber === true && (<Text style={styles.val}>Enter Number</Text>)}

            <View style={styles.container1}>
                <Image source={require('VedanCart/assets/padlock.png')} style={styles.image} />
                <TextInput
                    style={styles.testinput}
                    placeholder='Enter Password'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            {badPassword === true && (<Text style={styles.val}>Enter Password</Text>)}

            <View style={styles.container1}>
                <Image source={require('VedanCart/assets/padlock.png')} style={styles.image} />
                <TextInput
                    style={styles.testinput}
                    placeholder='Enter Confirm Password'
                    secureTextEntry={true}
                    value={confPassword}
                    onChangeText={setConfPassword}
                />
            </View>
            {badConfPassword === true && (<Text style={styles.val}>Enter Correct Password</Text>)}

            <TouchableOpacity style={styles.lgbtn} onPress={validate}><Text style={styles.lgtxt}>Register</Text></TouchableOpacity>

            <Text style={styles.acctxt} onPress={() => navigation.navigate('Login')}>Already have account?</Text>





        </View>
    </ScrollView>
)
}

export default SignUp

const styles = StyleSheet.create({
    signcontain:{
        flex: 1, 
        backgroundColor: '#fff' 
    },
    container: {
        flex: 1,
        alignItems: 'center',

    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 100,
        marginTop: 50
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
        fontWeight: '600',
        marginBottom: 50
    },
    val: {
        color: 'red',
        marginTop: 10
    }
})