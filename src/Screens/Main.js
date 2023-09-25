import { StyleSheet} from 'react-native'
import React,{useEffect} from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';



const Main = () => {
    const Drawer = createDrawerNavigator();

    

    return (
        <Drawer.Navigator>
            <Drawer.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>
    )
}

export default Main

const styles = StyleSheet.create({})