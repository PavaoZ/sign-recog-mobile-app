import React from "react";
import { ScrollView, StyleSheet, TextInput } from "react-native";
import { Text, View } from "../Themed";
import LanguagesContainer from "./partial/LanguagesContainer";

export default function Languages() {
  return (
    <ScrollView>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  languagesIntroContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 50,
  },
  languagesIntroText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
});
