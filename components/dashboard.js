import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, Button } from 'react-native';

class Dashboard extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Button style={styles.button} 
                    onPress={() => {
                       this.props.switchView("badges")
                    }} title="Badges"></Button>
            </View>
        );
    }
}

/*
Un-implemented features:
                <Button style={styles.button} title="Shop"></Button>
                <Button style={styles.button} title="Extra Practice"></Button>
                <Button style={styles.button} title="Feedback"></Button>

*/

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: '20'
    }
});

export default Dashboard;