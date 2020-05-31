import * as React from 'react';

import { View, StyleSheet, Image, Text } from 'react-native';

import Avatar from '../assets/images/bruna.png';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image style={{ margin: 8 }} source={require('../assets/images/bruna.png')}/>
      <View>
        <Text style={{ fontWeight: 'bold' }}> Bruna M. Garcia</Text>
        <Text style={{ fontSize: 10 }}> Ag: 0178 c/c 09988-8</Text>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:0,
    height: 60,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#f89e1a',
  },
});
