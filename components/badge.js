import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Badge extends React.Component {

    render() {
        return <Text>Badge: {this.props.badge}</Text>;
    }
}

export default Badge;