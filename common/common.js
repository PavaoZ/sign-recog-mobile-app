import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export function getAboutText() {
    return require('../storage/data/about-data.json');
}

export function addTryCatch(fn) {
    try{
        fn();
    } catch (err) {
        console.log(err);
    }
}

export function handleErr(err) {
    console.log(JSON.stringify(err));
    alert(JSON.stringify(err.message));
}

export function showActivityIndicator(message) {
    return (
        <View style={styles.activityWrapper}>
            <Text>{ message.toString() }</Text>
            <ActivityIndicator style={styles.activityIndicator} size='large' color='#0000ff' />
        </View>
    );
}

const styles = StyleSheet.create({
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
    },
    activityWrapper: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }
})
