import React from 'react';
import  {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {ScreenHeader} from '../components/header-component/ScreenHeader';

export default class ContactUs extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScreenHeader {...this.props} />
                <SafeAreaView style={{flex: 1}}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={styles.text}>Contact Us Screen</Text>
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    text: {
        color: '#161924',
        fontSize: 20,
        fontWeight: '500',
        margin: 30
    }
})