import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../Themed";

const languagesList = ["ksdksdkskdskd", "skksdksdks"];

export default function LanguagesContainer() {
  return (
    <View>
      <View style={styles.languagesContainer}>
        {/* <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Select one of the languages and start translating!
        </Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  languagesContainer: {
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
  },
});
