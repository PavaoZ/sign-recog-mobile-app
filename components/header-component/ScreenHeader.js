import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import * as AppConstants from '../../common/AppConsts'

export const ScreenHeader = props => (
    <View style={styles.header}>
        <Text style={styles.text}>{AppConstants.HEADER_NAME}</Text>
        <TouchableOpacity 
            style={styles.touchable}
            onPress={props.navigation.openDrawer}>
            <FontAwesome5 name='bars' size={24} color='#161924' />
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        backgroundColor: '#87CEFA',
        height: 70,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        borderColor: 'black',
        borderWidth: 0.4,
    },
    text: {
        color: '#161924',
        fontSize: 20,
        fontWeight: '500',
        margin: 'auto',
        marginLeft: 15,
        marginTop: 5,
        width: '85%'
    },
    touchable: {
        alignItems: 'flex-end',
        margin: 'auto',
    }
});
