import * as React from "react";
import { StyleSheet } from "react-native";

import Languages from "../components/languages/Languages";
import { Text, View } from "../components/Themed";

export default function LanguagesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available languages</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Languages />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
