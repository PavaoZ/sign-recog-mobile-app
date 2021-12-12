import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";

export default function Welcome() {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          How can Handatalk help you?
        </Text>

        <Text
          style={[styles.getStartedText, { marginTop: 15 }]}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Handatalk uses image recognition technology to interpret sign
          language. No longer is deafness an issue to holding a conversation.
          The Handatalk app is different from other apps on the market as you
          can take multiple images as a slideshow and understand entire words or
          sentences at once.
        </Text>

        <Text
          style={[styles.getStartedText, { marginTop: 15 }]}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Try it out and send us feedback!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
});
