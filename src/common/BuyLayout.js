import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Button from './Button'

const BuyLayout = ({total,items,onClick}) => {
    return (
        <View style={styles.container}>
            <View style={styles.tab}>
                <Text >{`(items ${items})`}</Text>
                <Text style={styles.total}>{'Total: $'+total}</Text>
            </View>
            <View style={styles.tab}>
                <TouchableOpacity style={styles.button} onPress={onClick}>
                    <Text style={styles.buy}>Buy Item</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BuyLayout

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        height: 80,
        width: Dimensions.get('window').width,
        backgroundColor: "#fff",
        flexDirection: 'row',
    },
    tab: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        width:'80%',
        height:'60%',
        backgroundColor:'#ff8605',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    buy:{
        fontSize:20,
        fontWeight:'600',
        color:'#fff'
    },
    total:{
        fontWeight:'700',
        fontSize:20
    }
    
})