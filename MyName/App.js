import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                My name is <Text style={styles.boldText}>Kadia</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
    },
    boldText: {
        fontWeight: 'bold',
    },
});
