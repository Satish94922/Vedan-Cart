import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({bg,title,onClick,color}) => {
  return (
    <TouchableOpacity activeOpacity={1} style={[styles.btn,{backgroundColor:bg}]} onPress={onClick}>
      <Text style={[styles.test,{color:color}]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btn:{
        width:Dimensions.get('window').width -40,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        marginTop:30,
        borderRadius:10
    },
    test:{
        fontSize:18,
        fontWeight:'600'
    }
    
})