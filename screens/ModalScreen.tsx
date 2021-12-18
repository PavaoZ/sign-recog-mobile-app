import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Network from "expo-network";
import { Text, View } from "../components/Themed";
import { useEffect, useState } from "react";

export default function ModalScreen({ route }) {
  const { language } = route.params;

  const [imageList, setImageList] = useState([]);
  const [isTFlowReady, setTFlowReady] = useState(true);
  const [isModelReady, setModelReady] = useState(true);
  const [model, setModel] = useState(null);
  const [image, setImage]: any = useState(null);
  const [predictions, setPredictions] = useState(null);

  const options = {
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    quality: 1,
    base64: true,
  };

  useEffect(() => {
    async function checkConnectionStatus() {
      const networkStatus = await Network.getNetworkStateAsync();
      if (!networkStatus.isConnected || !networkStatus.isInternetReachable) {
        alert("No network connection");
        return;
      }
    }

    checkConnectionStatus();
  }, []);

  const launchCamera = async () => {
    const response: any = await ImagePicker.launchCameraAsync(options);
    handleImageResponse(response);
  };

  const launchImageLibrary = async () => {
    let response: any = await ImagePicker.launchImageLibraryAsync(options);
    handleImageResponse(response);
  };

  const handleImageResponse = (response: any) => {
    console.log(response.uri);
    if (response.cancelled) {
      setImage(null);
    } else {
      setImage(response.uri);
    }
  };

  const sendToImageProcessing = async () => {
    // this.setImageLoadingState({ isLoading: true });

    // We would need to send image base64 or BLOB for full functionality
    let response = await fetch("http://2495a2dcf2e5.ngrok.io/process-image", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image_path: "yourValue",
      }),
    });
    let json = await response.json();

    // this.setImageLoadingState({ isLoading: false });

    // this.setState({ resultText: json["label"] });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select image input</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View>
        <View
          style={styles.buttonContainer}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        >
          <Pressable
            onPress={() => {
              console.log("askdkaCDCDCDDCDsd");
              launchCamera();
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
              launchImageLibrary();
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
        {image ? (
          <View>
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
            <View style={styles.imageSection}>
              <View style={{ margin: "auto", justifyContent: "center" }}>
                <Image
                  source={{ uri: image }}
                  style={styles.recognitionImage}
                />
              </View>
            </View>
          </View>
        ) : null}
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
  imageSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  recognitionImage: {
    width: Dimensions.get("screen").width * 0.6,
    height: Dimensions.get("screen").height * 0.35,
    marginTop: 15,
  },
});
