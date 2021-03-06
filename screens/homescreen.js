import React from 'react';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import Streak from './../components/streaks';
import Dashboard from './../components/dashboard';
import TodayQuest from './../components/quests';

class HomeScreen extends React.Component {
  render () {
    if (this.props.hidden) {
      return null;
    }
    
    return (
        <ImageBackground resizeMode={'stretch'} source={require('../assets/back.jpg')} style={styles.container}>
            <Streak streak="2"></Streak>
            <Dashboard switchView={this.props.switchView}></Dashboard>
            <TodayQuest switchView={this.props.switchView} quest="Do 20 Jumping Jacks!"></TodayQuest>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    flexDirection:"column",
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;