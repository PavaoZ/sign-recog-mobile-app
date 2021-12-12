import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "./Themed";

export default function Feedback() {
  return (
    <View>
      <View style={styles.feedbackContainer}>
        <Text
          style={styles.feedbackText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          One thing we always like to receive at Handatalk is feedback about our
          products! To send us feeedback please use our official email listed
          underneath!
        </Text>

        <Text
          style={[styles.feedbackText, { marginTop: 15 }]}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Official email
        </Text>
        <Text
          style={[styles.feedbackText]}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          info@handatalk.ba
        </Text>
      </View>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
  );
}

const styles = StyleSheet.create({
  feedbackContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  feedbackText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
});
