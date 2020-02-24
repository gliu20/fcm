import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Streak extends React.Component {

    render() {
        return <Text>Your Streak is: {this.props.streak}</Text>;
    }
}

export default Streak;