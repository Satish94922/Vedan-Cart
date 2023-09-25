import { StyleSheet,LogBox} from 'react-native'
import React from 'react'
import AppNavigator from './src/AppNavigator'
import {Provider} from 'react-redux'
import store from './src/redux/Store'


const App = () => {
  LogBox.ignoreAllLogs();

  

  return (
    <Provider store={store}>
      <AppNavigator />
  
    </Provider>

  )
}

export default App

const styles = StyleSheet.create({})

