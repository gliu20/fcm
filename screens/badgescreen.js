import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Badge from './../components/badge';

class BadgeScreen extends React.Component {
    render() {
        if (this.props.hidden) {
            return null;
        }

        return (
            <FlatList
                data={this.props.badges}
                style={styles.container}
                renderItem={({ item }) => <Badge badge={item.badgeText}></Badge>}
            >
            </FlatList>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default BadgeScreen;