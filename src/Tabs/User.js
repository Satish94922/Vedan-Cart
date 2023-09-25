import { Share, Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import Header from '../common/Header'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'
import { useState } from 'react'
import { Linking } from 'react-native'

const User = () => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);

  const URL_Logout = 'myapp://login';
  const URl_Adress = 'myapp://adress';
  const URL_Myorders = 'myapp://myorders';
  const URL_EDIT = 'myapp://edit';
  const URL_HELP = 'myapp://help';

  useEffect(() => {
    getData();
  })

  const getData = async () => {
    try {
      const Email = await AsyncStorage.getItem('MAIL');
      const Name = await AsyncStorage.getItem('NAME');

      if (Email && Name) {
        setEmail(Email);
        setName(Name);
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  const handleLogout = () => {
    Linking.openURL(URL_Logout)

  };

  const handleEdit = () => {
    Linking.openURL(URL_EDIT)
  }

  const handleHelp = () => {
    Linking.openURL(URL_HELP)
  }

  const onShare = async () => {
    try {
      
      const result = await Share.share({
        message:'this is my user details'
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
      <Header title={'My Profile'} />

      <ScrollView style={styles.container1}>
        <View style={styles.profcontainer}>
          <Image source={require('VedanCart/assets/man.png')} style={styles.profimg} />
        </View>

        <View style={styles.profname}>

          <Text style={styles.title}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>

        <View style={{ width: '100%', marginTop: 30 }}>
          <TouchableOpacity style={styles.ordcontainer} onPress={handleEdit}>
            <Image source={require('VedanCart/assets/edit-info.png')} style={styles.ordimg} />
            <Text style={styles.order}>Edit Profile</Text>
            <Image source={require('VedanCart/assets/greater-than-symbol.png')} style={styles.oimg} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.ordcontainer} onPress={() => Linking.openURL(URL_Myorders)}>
            <Image source={require('VedanCart/assets/myorder.png')} style={styles.ordimg} />
            <Text style={styles.order}>My Orders</Text>
            <Image source={require('VedanCart/assets/greater-than-symbol.png')} style={styles.oimg} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.ordcontainer} onPress={() => Linking.openURL(URl_Adress)}>
            <Image source={require('VedanCart/assets/adress.png')} style={styles.ordimg} />
            <Text style={styles.order}>My Address</Text>
            <Image source={require('VedanCart/assets/greater-than-symbol.png')} style={styles.oimg} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.ordcontainer} onPress={handleHelp}>
            <Image source={require('VedanCart/assets/customer-service.png')} style={styles.ordimg} />
            <Text style={styles.order}>Help Center</Text>
            <Image source={require('VedanCart/assets/greater-than-symbol.png')} style={styles.oimg} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.ordcontainer} onPress={onShare}>
            <Image source={require('VedanCart/assets/share.png')} style={styles.ordimg} />
            <Text style={styles.order}>Share</Text>
            <Image source={require('VedanCart/assets/greater-than-symbol.png')} style={styles.oimg} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.ordcontainer, { marginBottom: 80 }]} onPress={handleLogout}>
            <Image source={require('VedanCart/assets/logout.png')} style={styles.ordimg} />
            <Text style={styles.order}>Logout</Text>
            <Image source={require('VedanCart/assets/greater-than-symbol.png')} style={styles.oimg} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>





  )
}

export default User

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  container1: {
    width: Dimensions.get('window').width
  },
  profcontainer: {
    borderWidth: 0.5,
    height: 150,
    width: 150,
    marginTop: 30,
    borderRadius: 75,
    backgroundColor: '#cccccc',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  profimg: {
    width: 120,
    height: 120
  },
  profname: {
    marginTop: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: '600'
  },
  email: {
    fontSize: 15,
    textAlign: 'center'
  },
  ordcontainer: {
    borderWidth: 0.5,
    width: '90%',
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 10,
    paddingLeft: 20,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#e9e9e9'
  },
  order: {
    fontSize: 20,
    paddingLeft: 20
  },
  ordimg: {
    width: 35,
    height: 35,
    tintColor: '#1BDDCE'

  },
  oimg: {
    height: 25,
    width: 25,
    position: 'absolute',
    right: 10
  }
})