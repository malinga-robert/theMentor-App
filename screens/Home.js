
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView, navigation } from 'react-native';


class Courses extends React.Component{
  render() {
    return(
<View style={styles.container}>
<Text>Go to Home!</Text>
</View>
    );
  }
}
export default Courses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});






