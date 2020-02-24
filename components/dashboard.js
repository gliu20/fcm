import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, Button } from 'react-native';

/* link to background image is
https://lh6.googleusercontent.com/DtsSy-AQNUWS9Gww84diPM6b4Ynx0kJ8_YNs9peDHh34iHW8pFuLuE7Hm_pcSP-oqjU_tCRwF2zkpEwurSIy=w1920-h942-rw
 */

const imageUrl = "https://lh6.googleusercontent.com/DtsSy-AQNUWS9Gww84diPM6b4Ynx0kJ8_YNs9peDHh34iHW8pFuLuE7Hm_pcSP-oqjU_tCRwF2zkpEwurSIy=w1920-h942-rw";

class Dashboard extends React.Component {

    render() {
        return (
            <ImageBackground source={{uri: imageUrl}} style={styles.container}>
                <Text>Does</Text>
                <Image source={{uri: imageUrl}} style={{width: '100%', height: '100%'}} />
                <Button style={{padding: '20'}} title="Badges"></Button>
                <Button style={{padding: '20'}} title="Shop"></Button>
                <Button style={{padding: '20'}} title="Extra Practice"></Button>
                <Button style={{padding: '20'}} title="Feedback"></Button>
            </ImageBackground >
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

export default Dashboard;