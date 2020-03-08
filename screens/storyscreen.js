import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Story from './../components/story';

class StoryScreen extends React.Component {

    render() {
        if (this.props.hidden) {
            return null;
        }

        return (
            <FlatList 
                data={this.props.story} 
                horizontal={true} 
                pagingEnabled={true} 
                style={styles.container} 
                renderItem={({ item }) => <Story storyImage={item.storyImage} storyText={item.storyText}></Story>
                }>
            </FlatList>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
});

export default StoryScreen;