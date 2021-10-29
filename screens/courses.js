// import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";

// import React from 'react';
import { 
  StyleSheet,
  Image, 
  Text, 
  View, 
  SafeAreaView, 
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
 } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Category from './components/explore/Category';


class Home extends React.Component{
  componentWillUnmount(){
    this.startHeaderHeight = 80
    if(Platform.OS == 'android'){
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }
  render() {
    return(
      <SafeAreaView style={{flex: 1,}}>
        <View style={{flex: 1,}}>
          <View style={{height: this.startHeaderHeight, backgroundColor: 'white',
          borderBottomWidth: 1, borderBottomColor: '#dddddd'}}>
            <View style={{flexDirection: 'row', padding: 10,
            backgroundColor: 'white', marginHorizontal: 20,
            shadowOffset: {width: 0, height: 0},
            shadowColor: 'black',
            shadowOpacity: 0.2,
            elevation:1,
            marginTop: Platform.OS == 'android' ? 30: null
          
            }}>
              <Icon name="ios-search" size={20}/>
              <TextInput
                 underlineColorAndroid="transparent"
                 placeholder="Search Courses"
                 placeholderTextColor="grey"
                 style={{flex: 1, fontWeight: '700',
                 backgroundColor: 'white'}}
                
              />
            </View>
          </View>
          <ScrollView scrollEventThrottle={16}>
            <View style={{flex: 1, backgroundColor: 'white',
              paddingTop: 20}}>
              <Text style={{fontSize: 24, fontWeight: '700',
              paddingHorizontal: 20}}>
                Resourses
              </Text>
              <View style={{height: 130, marginTop: 20}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Category imageUri={require('../assets/Vision_Tracker_Poster.png')}
                  name="Vision Tracker"/>
                  <Category imageUri={require('../assets/CV_poster.png')}
                  name="Sample CV Template"/>
                  <Category imageUri={require('../assets/Concept_Note_Poster.png')}
                  name="Concept Note Template"/>
                  <Category imageUri={require('../assets/Career_Map_Poster.png')}
                  name="Career Map Template"/>
                  <Category imageUri={require('../assets/Canvas_Poster.png')}
                  name="Business Ideation Canvas Template "/>
                </ScrollView>
              </View>
              <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                  <Text style={{ fontSize: 24, fontWeight: '700' }}>
                      Opportunities
                  </Text>
                  
                  <View style={{ width: 300, height: 200, marginTop: 10, marginRight: 20 }}>
                      <Image
                          style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                          source={require('../assets/Manchester.png')}
                      />
                  </View>
              </View>
              <Text style={{fontSize: 24, fontWeight: '700',
              paddingHorizontal: 20, marginBottom: 10}}>
                Courses
              </Text>    
                <View style={{height: 130, marginTop: 10, marginBottom: 20}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Category imageUri={require('../assets/courses/Blogging_and_Writing.png')}
                  name="Blogging and Writing"/>
                  <Category imageUri={require('../assets/courses/Building_Effective_Teams.png')}
                  name="Building Effective Teams"/>
                  <Category imageUri={require('../assets/courses/Career-Mapping-For-Students.png')}
                  name="Career Mapping For Students"/>
                  <Category imageUri={require('../assets/courses/Create_a_Business_Plan_30_Minutes.png')}
                  name="Create a Business Plan - 30 Minutes"/>
                  <Category imageUri={require('../assets/courses/Digital_Literacy_to_Accelerate_Your_Career.png')}
                  name="Digital Literacy to Accelerate Your Career"/>
                  <Category imageUri={require('../assets/courses/Email_Communication-Skills-to-Give-You-an-Edge.png')}
                  name="Email Communication Skills to Give You an Edge"/>
                  <Category imageUri={require('../assets/courses/Financial_Literacy_for_Beginners.png')}
                  name="Financial Literacy for Beginners"/>
                  <Category imageUri={require('../assets/courses/How_to_Ace_That_Online_Job_Application.png')}
                  name="How to Ace That Online Job Application"/>
                  <Category imageUri={require('../assets/courses/How-to-Nail-That-Job-Interview.png')}
                  name="How to Nail That Job Interview"/>
                  <Category imageUri={require('../assets/courses/How-to-Write-a-Winning-CV.png')}
                  name="How to Write a Winning CV"/>
                  <Category imageUri={require('../assets/courses/Marketing_your_brand.png')}
                  name="Marketing your brand"/>
                  <Category imageUri={require('../assets/courses/Personal-Leadership-for-Professional-Growth.png')}
                  name="Personal Leadership for Professional Growth"/>
                  <Category imageUri={require('../assets/courses/Personality-Types-For-Career-Advancement.png')}
                  name="Personality Types For Career Advancement"/>
                   <Category imageUri={require('../assets/courses/Risk_and_Safeguarding.png')}
                  name="Risk and Safeguarding"/>
                   <Category imageUri={require('../assets/courses/Skills-for-Public-Speaking-and-Pitching.png')}
                  name="Skills for Public Speaking and Pitching"/>
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});