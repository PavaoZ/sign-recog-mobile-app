import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Platform, Pressable, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Network from "expo-network";
import { Text, View } from "../components/Themed";
import { useState } from "react";

export default function ModalScreen({ route }) {
  const { language } = route.params;
  const [imageList, setImageList] = useState([]);
  console.log(language);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select image input</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View
        style={styles.buttonContainer}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      >
        <Pressable
          onPress={() => {
            console.log("askdkaCDCDCDDCDsd");
          }}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <Text
            style={styles.buttonText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)"
          >
            Launch Camera
          </Text>
        </Pressable>
      </View>
      <View
        style={(styles.separator, styles.buttonContainer)}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      >
        <Pressable
          onPress={() => {
            console.log("askdkaCDCDCDDCDsd");
          }}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <Text
            style={styles.buttonText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)"
          >
            Launch Image Library
          </Text>
        </Pressable>
      </View>
      <View
        style={(styles.separator, styles.buttonContainer)}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      >
        <Pressable
          onPress={() => {
            console.log("askdkaCDCDCDDCDsd");
          }}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <Text
            style={styles.buttonText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)"
          >
            Send to image processing
          </Text>
        </Pressable>
      </View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  buttonText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  buttonContainer: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "lightgray",
    backgroundColor: "#FFF",
  },
});
