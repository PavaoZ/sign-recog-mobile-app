import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';

export default Sidebar = props => (
    <ScrollView>
        <ImageBackground 
            source={require("../assets/images/background.jpeg")}
            style={{ width: undefined, padding: 16, paddingTop: 100 }}
        >
        </ImageBackground>
        <View style={styles.container}>
            <DrawerNavigatorItems {...props} />
        </View>
    </ScrollView>
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "#FFF"
    }
});
