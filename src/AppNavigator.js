import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from './Screens/Splash'
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Home from './Screens/HomeScreen';
import Main from './Screens/Main'
import ProductDetail from './Screens/ProductDetail'
import Cart from './Screens/Cart';
import { islogin } from './Screens/Login'
import BuyItem from './Screens/BuyItem'
import Adress from './Screens/Adress'
import AddAdress from './Screens/AddAdress'
import Myorders from './Screens/Myorders'
import EditProfile from './Screens/EditProfile'
import HelpCenter from './Screens/HelpCenter'

const config={
  screens:{
    Login:{
      path:'login'
    },
    Adress:{
      path:'adress'
    },
    Myorders:{
      path:'myorders'
    },
    EditProfile:{
      path:'edit'
    },
    HelpCenter:{
      path:'help'
    }
  }
}

const Linking={
  prefixes:['myapp://'],
  config
}

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer linking={Linking}>
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='Login' component={Login} />
        
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='Main' component={Main}/>
        <Stack.Screen name='ProductDetail' component={ProductDetail}/>
        <Stack.Screen name='Cart' component={Cart}/>
        <Stack.Screen name='BuyItem' component={BuyItem}/>
        <Stack.Screen name='Adress' component={Adress}/>
        <Stack.Screen name='AddAdress' component={AddAdress}/>
        <Stack.Screen name='Myorders' component={Myorders}/>
        <Stack.Screen name='EditProfile' component={EditProfile}/>
        <Stack.Screen name='HelpCenter' component={HelpCenter}/>
      </Stack.Navigator> 
    </NavigationContainer>
  )
}

export default AppNavigator