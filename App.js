import 'react-native-gesture-handler';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as React from 'react';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

//importing screens from the pages folder
import HomeScreen from './screens/HomeScreen';
import Shop from './screens/Shop';
import Profile from './screens/Profile';
import ResourcesScreen from './screens/ResourcesScreen';
import CoursesScreen from './screens/CoursesScreen';
import OpportunitiesScreen from './screens/OpportunitiesScreen';
import Blogging from './screens/Blogging';
import Building from './screens/Building_Effective';
import Business from './screens/Business_Plan';
import Career from './screens/Career_Mapping';
import Digital from './screens/Digital_Literacy';
import Email from './screens/Email_Communication';
import Financial from './screens/Financial_Literacy';
import HowToAce from './screens/How_to_Ace';
import HowToNail from './screens/How_to_Nail';
import HowToWrite from './screens/How_to_Write';
import Marketing from './screens/Marketing';
import PersonalLeadership from './screens/Personal_Leadership';
import Personality from './screens/Personality_Types';
import Risk from './screens/Risk ';
import Skills from './screens/Skills_for_Public';
import Blog from './topics/Blog';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//stack navigation to enable buttons to be navigable between screens
function CoursesStack() {
  return (
      <Stack.Navigator
        initialRouteName="Courses"
        screenOptions={{
          headerStyle: { backgroundColor: '#fff' },
          headerTintColor: '#000000',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Courses"
          component={CoursesScreen}
          options={{ title: 'Select A Course' }}/>
        <Stack.Screen
          name="Resources"
          component={ResourcesScreen}
          options={{ title: 'Back' }} />
        <Stack.Screen
          name="Opportunities"
          component={OpportunitiesScreen}
          options={{ title: 'Back' }} />
        <Stack.Screen
          name="Blogging"
          component={Blogging}
          options={{ title: 'Back To Courses' }} />
        <Stack.Screen
          name="Building"
          component={Building}
          options={{ title: 'Back To Courses' }} />
        <Stack.Screen
          name="Business"
          component={Business}
          options={{ title: 'Back To Courses' }} />
        <Stack.Screen
          name="Career"
          component={Career}
          options={{ title: 'Back To Courses' }} />
        <Stack.Screen
          name="Digital"
          component={Digital}
          options={{ title: 'Back To Courses' }} />
        <Stack.Screen
          name="Email"
          component={Email}
          options={{ title: 'Back To Courses' }} />
        <Stack.Screen
          name="Financial"
          component={Financial}
          options={{ title: 'Back To Courses' }} />
        <Stack.Screen
          name="HowToAce"
          component={HowToAce}
          options={{ title: 'Back To Courses' }} />
        <Stack.Screen
          name="HowToNail"
          component={HowToNail}
          options={{ title: 'Back To Courses' }} />
        <Stack.Screen
          name="HowToWrite"
          component={HowToWrite}
          options={{ title: 'Back To Courses' }} />
        <Stack.Screen
          name="Marketing"
          component={Marketing}
          options={{ title: 'Back To Courses' }} />
        <Stack.Screen
          name="PersonalLeadership"
          component={PersonalLeadership}
          options={{ title: 'Back To Courses' }} />
        <Stack.Screen
          name="Personality"
          component={Personality}
          options={{ title: 'Back To Courses' }} />
        <Stack.Screen
          name="Risk"
          component={Risk}
          options={{ title: 'Back To Courses' }} />
        <Stack.Screen
          name="Skills"
          component={Skills}
          options={{ title: 'Back To Courses' }} />
        <Stack.Screen
          name="Blog"
          component={Blog}
          options={{ title: 'Back' }} />
      </Stack.Navigator>
  );
}

// function to enable bottom navigator with Vector expo icons
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#ff0000',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}  />
        <Tab.Screen
          name="ShopStack"
          component={Shop}
          options={{
            tabBarLabel: 'Shop',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons 
                name="shop"
                color={color}
                size={size}
              />
            ),
          }}  />
        <Tab.Screen
          name="CoursesStack"
          component={CoursesStack}
          options={{
            tabBarLabel: 'Courses',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="bookmarks-outline"
                color={color}
                size={size}
              />
            ),
          }}  />
        <Tab.Screen
          name="ProfileStack"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="person"
                color={color}
                size={size}
              />
            ),
          }}  />  
        </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;