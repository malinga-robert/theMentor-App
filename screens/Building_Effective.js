import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';


const Building = ({ navigation}) => {
      
      return(
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView scrollEventThrottle={16}>
              <View style={styles.container}>
                  <Text style={{fontSize: 30, fontWeight: "700" ,paddingHorizontal:5, color: '#800000'}}>Building Effective Teams!</Text>
                  <Image style={{marginTop: 10, width: '95%', height: 200}} source={require('../assets/courses/Building_Effective_Teams.png')}/>
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
                        Building Effective Teams
                      </Text>
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                        What is teamwork?
                      </Text>
                    </View>   
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                        Importance of teamwork
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                        Elements of Teamwork 
                      </Text>
                    </View> 
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                        Tips for effective teamwork
                      </Text>
                    </View> 
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                        More tips
                      </Text>
                    </View> 
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                        Remember!
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
export default Building;

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
    height: 250,
    backgroundColor: '#E5E4E2', 
    borderRadius: 10, 
    marginTop: 10, 
    marginBottom: 10
  },

});



