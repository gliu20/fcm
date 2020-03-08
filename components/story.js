import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, ImageBackground } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

class Story extends React.Component {

    render() {
        return (
            <ImageBackground resizeMode={'stretch'} source={this.props.storyImage} style={styles.container}>
                <Text>Story: {this.props.storyText}</Text>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        alignItems:"center",
        justifyContent:"center"
    },
});

export default Story;