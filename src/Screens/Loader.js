import { ActivityIndicator, StyleSheet, Text, View ,Modal} from 'react-native'
import React from 'react'

const Loader = ({ visible }) => {
    
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <View style={styles.container}>
        <ActivityIndicator size="large" color="skyblue" />
      </View>
    </Modal>
  )
}

export default Loader

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    loader:{
        height:100,
        width:100,
        borderWidth:0.5,
        borderRadius:10,
        backgroundColor:'#e9e9e9',
        justifyContent:'center',
        alignItems:'center'
    }
})