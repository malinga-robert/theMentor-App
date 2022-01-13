import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';


const Financial = ({ navigation}) => {
      
      return(
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView scrollEventThrottle={16}>
              <View style={styles.container}>
                  <Text style={{fontSize: 30, fontWeight: "700" , color: '#800000'}}>Financial Literacy for Beginners!</Text>
                  <Image style={{marginTop: 10, width: '95%', height: 200}} source={require('../assets/courses/Financial_Literacy_for_Beginners.png')}/>
                  <View style={{ flexDirection: 'row', marginTop: 15, paddingHorizontal: 10}}>
                      <View style={{marginTop: 15, flexDirection: 'row'}}> 
                        <Image style={{marginTop: 8, width: 20, height: 20}} source={require('../assets/list_bullets_icon.png')}/>
                        <Text style={{fontSize: 25, fontWeight: "200", marginLeft: 10,color: '#800000'}}>5TOPICS</Text>
                      </View>
                        <TouchableOpacity style={{backgroundColor: "#20B2AA",padding: 15,width: 150,borderRadius: 10,marginHorizontal: 10,
                            }}
                          onPress = {()=> navigation.navigate('Opportunities')}>
                        <Text style={{fontSize: 25, fontWeight: "200", color: '#FFFFFF', marginLeft: 10}}>ENROLL</Text>
                        </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={{fontSize: 30, textAlign:'left', fontWeight: "700", color: '#800000', marginLeft: 10}}>Content</Text>
                  </View>
                  <View style={styles.oppContainer}>
                      <Text style={styles.txtHeader}>
                        Financial Literacy
                      </Text>
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                        Track your Spending
                      </Text>
                    </View>   
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                        Develop a savings culture
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                        Think long term
                      </Text>
                    </View> 
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                        Benefits of Financial Literacy
                      </Text>
                    </View> 
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                        Remember!
                      </Text>
                    </View> 
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                        Make Financial Goals
                      </Text>
                    </View> 
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                        Identify alternative sources of income
                      </Text>
                    </View> 
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                        Needs and Wants
                      </Text>
                    </View> 
                  </View>
                  <View style={{paddingBottom: 20,width: '95%'}}>
                      <Text style={{fontSize: 30, fontWeight: "700", color: '#800000'}}>
                          Description
                      </Text>
                      <View style={{flexDirection: 'column'}}>
                      <Text>
                        {/* Are you a writer that is wondering how to go about setting up your blog? */}
                      </Text>
                      <Text>
                        {/* Here are a few tips on how to get started on your writing journey. */}
                      </Text>
                      </View>
                  </View>
              </View>
          </ScrollView>
        </SafeAreaView>
    );
                      
}
export default Financial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },
  row: { 
    flexDirection: "row",
    marginTop: 5,
    paddingHorizontal: 20,
  },
  imgContainer: {
    height: 20,
    width: 20,
    borderColor: "#dddddd",
    resizeMode: "cover",
  },
  textHolder: {
    fontSize: 15,
    fontWeight: "200",
    color: "#800000",
    paddingRight: 20,
    paddingLeft: 7,
    marginRight: 8
  },
  txtHeader: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "700",
    color: "#800000",
    fontSize: 25,
    textAlign: "left",
  },
  oppContainer: {
    // borderWidth: 1, 
    width: '95%', 
    height: 300,
    backgroundColor: '#E5E4E2', 
    borderRadius: 10, 
    marginTop: 10, 
    marginBottom: 10
  },

});



