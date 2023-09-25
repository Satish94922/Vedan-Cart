import { Dimensions, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../common/Header';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const products = useSelector((state) => state.ProductReducer.data);

  const navigation = useNavigation()
  const [search, setSearch] = useState('')

  const [oldData, setOlddata] = useState(products)
  const [searchedList, setSearchedList] = useState(oldData)


  

  const filerData = (test) => {
    let newData = oldData.filter(item => {
      return item.title.toLowerCase().match(test.toLowerCase());
    })
    setSearchedList(newData)
  }

  return (
    <View style={styles.container}>
      <Header title={'Search Items'} />
      <View style={styles.searchView}>
        <View>
          <Image source={require('VedanCart/assets/search.png')} style={styles.Icon} />
        </View>
        <TextInput
          value={search}
          onChangeText={(test) => { setSearch(test); filerData(test) }}
          placeholder='Search Items Here....'
          style={styles.testinput} />

        {search !== '' && (<TouchableOpacity style={styles.btnicon} onPress={()=>{setSearch(''); filerData('');}}>
          <Image source={require('VedanCart/assets/wrong.png')} style={styles.Icon} />
        </TouchableOpacity>)}

      </View>
      <View style={styles.listcontain}>
        <FlatList
          data={searchedList}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={styles.productItem} activeOpacity={1} onPress={() => navigation.navigate('ProductDetail', { data: item })}>
                <Image source={{ uri: item.image }} style={styles.img} />
                <View>
                  <Text style={styles.name}>{item.title.length > 25 ?
                    item.title.substring(0, 25) + '...' :
                    item.title}
                  </Text>
                  <Text style={styles.description}>{item.description.length > 30 ?
                    item.description.substring(0, 30) + '...' :
                    item.description}
                  </Text>
                  <Text style={styles.price}>${item.price}</Text>
                </View>
              </TouchableOpacity>
            )

            _
          }} />
      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  searchView: {
    width: '90%',
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center'

  },
  Icon: {
    width: 30,
    height: 30,
    resizeMode: 'center'
  },
  testinput: {
    width: '80%',
    marginLeft:10,
  },
  btnicon: {
    justifyContent: 'center',
    width: 30,
    height: 30,
    resizeMode: 'center',
    alignItems: 'center'

  },
  productItem: {
    width: Dimensions.get('window').width,
    height: 100,
    marginTop: 10,
    backgroundColor: "#fff",
    flexDirection: 'row',
    alignItems: 'center'

  },
  img: {
    width: 100,
    height: 100
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20
  },
  description: {
    marginLeft: 20
  },
  price: {
    color: 'green',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 5
  },
  listcontain:{
    marginTop:20
  }
})