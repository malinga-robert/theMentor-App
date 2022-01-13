import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';


const Risk = ({ navigation}) => {
      
      return(
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView scrollEventThrottle={16}>
              <View style={styles.container}>
                  <Text style={{fontSize: 30, fontWeight: "700" ,paddingHorizontal:5, color: '#800000'}}>Risk and Safeguarding!</Text>
                  <Image style={{marginTop: 10, width: '95%', height: 200}} source={require('../assets/courses/Risk_and_Safeguarding.png')}/>
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
                        Effectively mitigating Risk
                      </Text>
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                        Introduction to Safeguarding
                      </Text>
                    </View>   
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                        What is Safeguarding?
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                         Who are the vulnerable people?
                      </Text>
                    </View> 
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                        In the case of Helping Hand
                      </Text>
                    </View> 
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                        The importance of safeguarding
                      </Text>
                    </View> 
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                        What is Risk?
                      </Text>
                    </View> 
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                        What risks exist?
                      </Text>
                    </View> 
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                        How to identify risk
                      </Text>
                    </View> 
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                        Where does Helping Hand start?
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Image style={styles.imgContainer} source={require("../assets/list_bullets_icon.png")}/>
                      <Text style={styles.textHolder}>
                        In case of a safeguarding concern... 
                      </Text>
                    </View>  
                  </View>
                  <View style={{paddingBottom: 20,width: '95%'}}>
                      <Text style={{fontSize: 30, fontWeight: "700", color: '#800000'}}>
                          Description
                      </Text>
                      <View style={{flexDirection: 'column'}}>
                      <Text>
                       This module will help you know why Safeguarding is a very important element of the work that we do.
                      </Text>
                      <Text>
                       What risk is and what it involves.
                      </Text>
                      <Text>
                       What to do in cases of safeguarding issues.
                      </Text>
                  </View>
                </View>
              </View>
          </ScrollView>
        </SafeAreaView>
    );
                      
}
export default Risk;

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
    height: 400,
    backgroundColor: '#E5E4E2', 
    borderRadius: 10, 
    marginTop: 10, 
    marginBottom: 10
  },

});



