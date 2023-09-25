import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { List, Divider } from 'react-native-paper';
import Header from '../common/Header';
import { useNavigation } from '@react-navigation/native';

const HelpCenter = () => {
    const navigation=useNavigation();
  return (
    <View>
    <Header title={'Help Center'} leftIcon={require('VedanCart/assets/back.png')} onClickLeftIcon={()=>navigation.goBack()}/>
    <ScrollView>
      <List.Section>
        <List.Item
          title="Frequently Asked Questions"
        />
        <Divider />
        <List.Item
          title="Contact Support"
        />
        <Divider />
      </List.Section>
    </ScrollView>
    </View>
  );
};

export default HelpCenter;
