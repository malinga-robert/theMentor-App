import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView } from 'react-native';

class Shop extends React.Component{
  render() {
    return(
<View style={styles.container}>
<Text>Go to Shop!</Text>
</View>
    );
  }
}
export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});



