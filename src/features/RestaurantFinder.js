import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const RestaurantFinder = () => {
    return (
        <>
            <View style={styles.searchBar}>
                <Text>search</Text>
            </View>
            <View style={styles.searchResults}>
                <Text>list</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        padding: 16,
        backgroundColor: 'green'
    },
    searchResults: {
        padding: 16,
        backgroundColor: 'blue',
        flex: 1
    }
})