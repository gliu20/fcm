import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Streak from './components/streaks';
import Dashboard from './components/dashboard';
import TodayQuest from './components/quests';

class HomeScreen extends React.Component {
  render () {
    <View style={styles.container}>
      <Streak streak="2"></Streak>
      <Dashboard></Dashboard>
      <TodayQuest quest="Do 20 Jumping Jacks!"></TodayQuest>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;