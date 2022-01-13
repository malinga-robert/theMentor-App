// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

const Blog = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  // const onSkip = () => {
  //   setShowRealApp(true);
  // };
  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            {/* <Text style={styles.titleStyle}>
              
            </Text>
            <Text style={styles.paragraphStyle}>
              
            </Text> */}
            <Button
              title="Re Start Course"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          // showSkipButton={true}
          // onSkip={onSkip}
        />
      )}
    </>
  );
};

export default Blog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#800000",
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: '95%',
    height: 150,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});


const slides = [
  {
    key: 's1',
    text: 'Best of luck in the study',
    title: 'What is Blogging',
    image: {
            uri:
              'https://the-mentor.s3.amazonaws.com/media/images/1_n3OF6Hv.width-500.png',
          },
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'Why Blogging',
    text: 'Best of luck in the study',
    image:{
      uri:
        'https://the-mentor.s3.amazonaws.com/media/images/2_q4rHR9d.width-500.png',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'What your blog says',
    text: 'Best of luck in the study',
    image: {
      uri:
        'https://the-mentor.s3.amazonaws.com/media/images/3_On0jo3n.width-500.png',
    },
    backgroundColor: '#22bcb5',
  },
  {
    key: 's4',
    title: 'Choosing a blog topic',
    text: ' Best of luck in the study',
    image: {
      uri:
        'https://the-mentor.s3.amazonaws.com/media/images/4_tk5aNkM.width-500.png',
    },
    backgroundColor: '#3395ff',
  },
  {
    key: 's5',
    title: 'Features of a blog 1',
    text: 'Best of luck in the study',
    image: {
      uri:
        'https://the-mentor.s3.amazonaws.com/media/images/5_cKiFqdn.width-500.png',
    },
    backgroundColor: '#f6437b',
  },
  {
    key: 's6',
    title: 'Features of a blog 2',
    text: 'Best of luck in the study',
    image: {
      uri:
        'https://the-mentor.s3.amazonaws.com/media/images/6_2DydA17.width-500.png',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's7',
    title: 'Driving Traffic 1',
    text: ' Best of luck in the study',
    image: {
      uri:
        'https://the-mentor.s3.amazonaws.com/media/images/7_xZRE6Nm.width-500.png',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's8',
    title: 'Driving Traffic 2',
    text: ' Best of luck in the study',
    image: {
      uri:
        'https://the-mentor.s3.amazonaws.com/media/images/8_ZRz3jFr.width-500.png',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's9',
    title: 'Monetizing your blog 1',
    text: ' Best of luck in the study',
    image: {
      uri:
        'https://the-mentor.s3.amazonaws.com/media/images/9_C3FYHEU.width-500.png',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's10',
    title: 'Monetizing your blog 2',
    text: ' Best of luck in the study',
    image: {
      uri:
        'https://the-mentor.s3.amazonaws.com/media/images/10_m88PuPh.width-500.png',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's11',
    title: 'Travel writing',
    text: ' Best of luck in the study',
    image: {
      uri:
        'https://the-mentor.s3.amazonaws.com/media/images/11_1aNjBjm.width-500.png',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's12',
    title: 'Show and do not tell',
    text: ' Best of luck in the study',
    image: {
      uri:
        'https://the-mentor.s3.amazonaws.com/media/images/12_rYumI96.width-500.png',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's13',
    title: 'Blogging and Photography',
    text: 'Best of luck in the study',
    image: {
      uri:
        'https://the-mentor.s3.amazonaws.com/media/images/13_i4fMnXA.width-500.png',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's14',
    title: 'Blogging and Photography 2',
    text: 'Best of luck in the study',
    image: {
      uri:
        'https://the-mentor.s3.amazonaws.com/media/images/14_r2hoh77.width-500.png',
    },
    backgroundColor: '#febe29',
  },
  // {
    // key: '15',
    // title: 'Malinga Robert',
    // text: ' Here i Come',
    // image: require('../assets/CV_poster.png'),
    // backgroundColor: '#febe29',
  // },
];
