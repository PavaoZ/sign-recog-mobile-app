import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../Themed";
import LanguagesContainer from "./partial/LanguagesContainer";

export default function Languages() {
  return (
    <View>
      <View style={styles.languagesIntroContainer}>
        <Text
          style={styles.languagesIntroText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Select one of the languages and start translating!
        </Text>
      </View>
      <LanguagesContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  languagesIntroContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  languagesIntroText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
});
