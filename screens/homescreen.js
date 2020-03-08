import React from 'react';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import Streak from './../components/streaks';
import Dashboard from './../components/dashboard';
import TodayQuest from './../components/quests';

class HomeScreen extends React.Component {
  render () {
    return (
        <ImageBackground resizeMode={'stretch'} source={require('../assets/back.jpg')} style={styles.container}>
            <Streak streak="2"></Streak>
            <Dashboard></Dashboard>
            <TodayQuest quest="Do 20 Jumping Jacks!"></TodayQuest>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,// temp fix for status bar
    flex: 1,
    width:"100%",
    flexDirection:"column",
    backgroundColor: '#29f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;