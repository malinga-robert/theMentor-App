import React from "react";
import {
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  SafeAreaView,
  
  
} from "react-native";
import SearchCos from '../screens/SeachBar/SearchCos';



const CoursesScreen = ({ navigation }) => {
  
   return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView scrollEventThrottle={16}>
          <View style={styles.container}>
            <View
              style={{
                flexDirection: "row",
                margin: 20,
                paddingHorizontal: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#800000",
                  padding: 20,
                  width: 150,
                  borderRadius: 10,
                  marginHorizontal: 2,
                }}
              onPress = {()=> navigation.navigate('Resources')}
              >
                <Text
                  style={{ textAlign: "center", color: "#fff", fontSize: 18 }}
                >
                  Resources
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#800000",
                  padding: 20,
                  width: 150,
                  borderRadius: 10,
                  marginHorizontal: 2,
                }}
                onPress = {()=> navigation.navigate('Opportunities')}
              >
                <Text
                  style={{ textAlign: "center", color: "#fff", fontSize: 18 }}
                >
                  Opportunities
                </Text>
              </TouchableOpacity>
            </View>
            <SearchCos/>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "700",
                color: "#800000",
                marginTop: 10,
              }}
            >
              Courses
            </Text>
            <View style={{ marginHorizontal: 5, alignItems: "center" }}>
              <View style={styles.imgHolder}>
                <View style={styles.imgContainer}>
                  <Image
                    style={styles.imgContainer}
                    source={require("../assets/courses/Blogging_and_Writing.png")}
                  />
                </View>
                <TouchableOpacity
                onPress = {()=> navigation.navigate('Blogging')}
                >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "200",
                    color: "#0000FF",
                    marginTop: 5,
                  }}
                >
                  Blogging and Writing
                </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.imgHolder}>
                <View style={styles.imgContainer}>
                  <Image
                    style={styles.imgContainer}
                    source={require("../assets/courses/Building_Effective_Teams.png")}
                  />
                </View>
                <TouchableOpacity
                onPress = {()=> navigation.navigate('Building')}
                >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "200",
                    color: "#0000FF",
                    marginTop: 5,
                  }}
                >
                  Building Effective Teams
                </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.imgHolder}>
                <Image
                  style={styles.imgContainer}
                  source={require("../assets/courses/Career-Mapping-For-Students.png")}
                />
                <TouchableOpacity
                onPress = {()=> navigation.navigate('Career')}
                >
                <Text style={styles.textHolder}>
                  Career Mapping For Students
                </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.imgHolder}>
                <Image
                  style={styles.imgContainer}
                  source={require("../assets/courses/Create_a_Business_Plan_30_Minutes.png")}
                />
                <TouchableOpacity
                onPress = {()=> navigation.navigate('Business')}
                >
                <Text style={styles.textHolder}>
                  Create a Business Plan - 30 Minutes
                </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.imgHolder1}>
                <Image
                  style={styles.imgContainer}
                  source={require("../assets/courses/Digital_Literacy_to_Accelerate_Your_Career.png")}
                />
                <TouchableOpacity
                onPress = {()=> navigation.navigate('Digital')}
                >
                <Text style={styles.textHolder}>
                  Digital Literacy to Accelerate Your Career
                </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.imgHolder1}>
                <Image
                  style={styles.imgContainer}
                  source={require("../assets/courses/Email_Communication-Skills-to-Give-You-an-Edge.png")}
                />
                <TouchableOpacity
                onPress = {()=> navigation.navigate('Email')}
                >
                <Text style={styles.textHolder}>
                  Email Communication Skills to Give You an Edge
                </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.imgHolder}>
                <Image
                  style={styles.imgContainer}
                  source={require("../assets/courses/Financial_Literacy_for_Beginners.png")}
                />
                <TouchableOpacity
                onPress = {()=> navigation.navigate('Financial')}
                >
                <Text style={styles.textHolder}>
                  Financial Literacy for Beginners
                </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.imgHolder1}>
                <Image
                  style={styles.imgContainer}
                  source={require("../assets/courses/How_to_Ace_That_Online_Job_Application.png")}
                />
                <TouchableOpacity
                onPress = {()=> navigation.navigate('HowToAce')}
                >
                <Text style={styles.textHolder}>
                  How to Ace That Online Job Application
                </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.imgHolder}>
                <Image
                  style={styles.imgContainer}
                  source={require("../assets/courses/How-to-Nail-That-Job-Interview.png")}
                />
                <TouchableOpacity
                onPress = {()=> navigation.navigate('HowToNail')}
                >
                <Text style={styles.textHolder}>
                  How to Nail That Job Interview
                </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.imgHolder}>
                <Image
                  style={styles.imgContainer}
                  source={require("../assets/courses/How-to-Write-a-Winning-CV.png")}
                />
                <TouchableOpacity
                onPress = {()=> navigation.navigate('HowToWrite')}
                >
                <Text style={styles.textHolder}>How to Write a Winning CV</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.imgHolder}>
                <Image
                  style={styles.imgContainer}
                  source={require("../assets/courses/Marketing_your_brand.png")}
                />
                <TouchableOpacity
                onPress = {()=> navigation.navigate('Marketing')}
                >
                <Text style={styles.textHolder}>Marketing your brand</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.imgHolder1}>
                <Image
                  style={styles.imgContainer}
                  source={require("../assets/courses/Personal-Leadership-for-Professional-Growth.png")}
                />
                <TouchableOpacity
                onPress = {()=> navigation.navigate('PersonalLeadership')}
                >
                <Text style={styles.textHolder}>
                  Personal Leadership for Professional Growth
                </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.imgHolder1}>
                <Image
                  style={styles.imgContainer}
                  source={require("../assets/courses/Personality-Types-For-Career-Advancement.png")}
                />
                <TouchableOpacity
                onPress = {()=> navigation.navigate('Personality')}
                >
                <Text style={styles.textHolder}>
                  Personality Types For Career Advancement
                </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.imgHolder}>
                <Image
                  style={styles.imgContainer}
                  source={require("../assets/courses/Risk_and_Safeguarding.png")}
                />
                <TouchableOpacity
                onPress = {()=> navigation.navigate('Risk')}
                >
                <Text style={styles.textHolder}>Risk and Safeguarding</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.imgHolder1}>
                <Image
                  style={styles.imgContainer}
                  source={require("../assets/courses/Skills-for-Public-Speaking-and-Pitching.png")}
                />
                <TouchableOpacity
                onPress = {()=> navigation.navigate('Skills')}
                >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "200",
                    color: "#0000FF",
                    marginTop: 5,
                  }}
                >
                  Skills for Public Speaking and Pitching
                </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  
}
export default CoursesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    
  },
  imgContainer: {
    height: 200,
    width: 298,
    borderColor: "#dddddd",
    resizeMode: "cover",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  imgHolder: {
    borderRadius: 10,
    width: 300,
    alignItems: "center",
    height: 250,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "#dddddd",
    marginTop: 10,
  },
  textHolder: {
    fontSize: 18,
    fontWeight: "200",
    color: "#0000FF",
    marginTop: 10,
  },
  imgHolder1: {
    borderRadius: 10,
    width: 300,
    alignItems: "center",
    height: 280,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "#dddddd",
    marginTop: 10,
    marginBottom: 10,
  },
});
