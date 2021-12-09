import {ScreenHeader} from '../components/header-component/ScreenHeader';
import * as _c from '../common/common';
import React from 'react'
import  {View, Text, StyleSheet, SafeAreaView} from 'react-native'

export default class About extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScreenHeader {...this.props} />
                <SafeAreaView style={{flex: 1}}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={styles.text}>{_c.getAboutText().about}</Text>
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
