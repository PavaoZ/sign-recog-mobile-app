import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Alert, Modal, Pressable, StyleSheet } from "react-native";
import { Text, View } from "../../Themed";

// const LanguageStack = createNativeStackNavigator();

const Language = (props: { name: string }) => {
  //   const [languageModalVisible, setLanguageModalVisible] = useState(false);

  return (
    <View style={styles.singleLanguageContainer}>
      <Pressable
        onPress={() => {
          console.log("askdkasd");
          //   setLanguageModalVisible(true);
        }}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <Text
          style={styles.languageName}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          {props.name}
        </Text>
      </Pressable>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={languageModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setLanguageModalVisible(!languageModalVisible);
        }}
      >
        <View>
          <Text>kasksdkfksdfk</Text>
        </View>
      </Modal> */}
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  singleLanguageContainer: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "lightgray",
  },
  languageName: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
});
