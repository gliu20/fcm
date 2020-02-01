import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App;

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate('Profile', {name: 'Jane'})}
      />
    );
  }
}
/*
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
      </View>
      <View style={styles.container}>
        <Button
          onPress={() => {
            alert('You tapped the button!');
          }}
          title="Play"
        />
        <Button
          onPress={() => {
            alert('You tapped the button!');
          }}
          title="Badges"
        />
        <Button
          onPress={() => {
            alert('You tapped the button!');
          }}
          title="Shop"
        />
        <View style={styles.container}>
          <Text>Streak: 2 days</Text>
        </View>
      </View>
      
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    backgroundColor: '#29f',
    color:"#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    color: "#fff",
    paddingVertical: 10
  },
  container: {
    flex:1
  }
});*/
