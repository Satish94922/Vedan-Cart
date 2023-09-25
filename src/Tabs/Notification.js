import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../common/Header'

export const Data=[
  {title:'Message',date:'25-09-2023',desc:'Notification Description',time:'7:10 am'},
  {title:'Message',date:'25-09-2023',desc:'Notification Description',time:'8:20 am'},
  {title:'Message',date:'25-09-2023',desc:'Notification Description',time:'8:50 am'},
  {title:'Message',date:'25-09-2023',desc:'Notification Description',time:'9:30 am'},
  {title:'Message',date:'25-09-2023',desc:'Notification Description',time:'10:10 am'},
  {title:'Message',date:'25-09-2023',desc:'Notification Description',time:'10:50 am'},
  {title:'Message',date:'25-09-2023',desc:'Notification Description',time:'11:00 am'},
  {title:'Message',date:'25-09-2023',desc:'Notification Description',time:'11:40 am'},
  {title:'Message',date:'25-09-2023',desc:'Notification Description',time:'12:10 pm'},
  {title:'Message',date:'25-09-2023',desc:'Notification Description',time:'1:10 pm'},
  {title:'Message',date:'25-09-2023',desc:'Notification Description',time:'2:40 pm'}

]

const Notification = () => {
  
  return (
    <View style={styles.container}>
      <Header title={'Notifications'} />

    <FlatList data={Data} renderItem={({item})=>{
      return(
        <TouchableOpacity style={styles.notifyContainer}>
        <View style={styles.imgcontain}>
          <Image source={require('VedanCart/assets/notification_fill.png')} style={styles.img} />
        </View>
        <View style={styles.testcontain}>
          <Text style={styles.msg}>{item.title}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <View style={styles.desccontain}>
          <Text style={styles.desc}>{item.desc}</Text>
        </View>
        <View style={styles.testcontain}>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </TouchableOpacity>
      )
    }}/>

      
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  notifyContainer: {
    width: '100%',
    borderBottomWidth: 0.5,
    height: 80,

    flexDirection: 'row',
    alignItems: 'center',
    
    paddingLeft: 15
  },
  imgcontain: {
    width: 50,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a2a2a2',
  },
  img: {
    width: 30,
    height: 30
  },
  testcontain:{
    marginLeft:10,
    
    
  },
  msg:{
    fontWeight:'600',
    fontSize:16
  },
  date:{
    fontSize:12
  },
  desccontain:{
    marginLeft:5
  },
  desc:{
    fontSize:16,
    paddingBottom:10
  },
  time:{
    fontSize:13,
    paddingTop:30
  }

})