import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "../../Themed";
import { useNavigation } from "@react-navigation/native";

const Language = (props: { name: string }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.singleLanguageContainer}>
      <Pressable
        onPress={() => {
          navigation.navigate("Modal", {
            language: props.name,
          });
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
