import React, { useState } from "react";
import { ScrollView, StyleSheet, TextInput } from "react-native";
import { View } from "../../Themed";
import Language from "./Language";

const languagesList = [
  "American",
  "Chinese",
  "Korean",
  "Russian",
  "dasd",
  "Bosnian",
  "Serbian",
  "French",
  "Armenian",
  "Armenian",
  "Armenian",
  "Armenian",
  "Armenian",
  "Armenian",
  "Armenian",
  "Armenian",
  "Armenian",
  "Armenian",
  "Armenian",
  "Armenian",
  "Armenian",
  "Armenian",
  "Armenian",
  "Armenian",
  "Armenian",
  "Armenian",
];

export default function LanguagesContainer() {
  const [languageSearchText, setLanguageSearchText] = useState("");
  return (
    <View>
      <View style={styles.languagesContainer}>
        <TextInput
          style={{ height: 40, marginTop: 15 }}
          placeholder="Type here to search for languages"
          onChangeText={(text) => setLanguageSearchText(text)}
          defaultValue={languageSearchText}
        />
        <ScrollView>
          <View style={styles.languageList}>
            <>
              {languagesList.map((language) => (
                <Language name={language} />
              ))}
            </>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  languagesContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  languageList: {
    fontSize: 17,
    lineHeight: 24,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
