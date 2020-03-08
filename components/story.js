import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Story extends React.Component {

    render() {
        return (
            <Text>Story: {this.props.story}</Text>
        );
    }
}

export default Story;