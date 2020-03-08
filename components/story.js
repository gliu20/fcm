import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

class Story extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Story: {this.props.story}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: deviceWidth
    },
});

export default Story;