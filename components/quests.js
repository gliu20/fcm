import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, Button } from 'react-native';

class TodayQuest extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Button style={{padding: '20'}} title={this.props.quest}></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default TodayQuest;