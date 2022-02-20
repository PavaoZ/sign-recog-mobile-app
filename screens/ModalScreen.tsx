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
import * as FS from "expo-file-system";

export default function ModalScreen({ route }) {
  const { language } = route.params;

  const [imageList, setImageList] = useState([]);
  const [isTFlowReady, setTFlowReady] = useState(true);
  const [isModelReady, setModelReady] = useState(true);
  const [model, setModel] = useState(null);
  const [image, setImage]: any = useState(null);
  const [imageProcessingResult, setImageProcessingResult]: any = useState(null);
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
    setImageProcessingResult(null);
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status === "granted") {
      const response: any = await ImagePicker.launchCameraAsync(options);
      handleImageResponse(response);
    }
  };

  const launchImageLibrary = async () => {
    setImageProcessingResult(null);
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === "granted") {
      const response: any = await ImagePicker.launchImageLibraryAsync(options);
      handleImageResponse(response);
    }
  };

  const handleImageResponse = (response: any) => {
    if (response.cancelled) {
      setImage(null);
    } else {
      setImage(response);
    }
  };

  const sendToImageProcessing = async () => {
    //   toServer = async (mediaFile) => {
    //     console.log("tu smo");
    //     let type = mediaFile.type;
    //     let schema = "http://";
    //     let host = "192.168.56.1";
    //     let route = "";
    //     let port = "5000";
    //     let url = "";
    //     let content_type = "";
    //     type === "image"
    //       ? ((route = "/process-image"), (content_type = "image/png"))
    //       : ((route = "/video"), (content_type = "video/mp4"));
    //     url = schema + host + ":" + port + route;
    //     console.log(url);
    //     console.log(type);
    //     let response = await FS.uploadAsync(url, mediaFile.uri, {
    //       headers: {
    //         "content-type": content_type,
    //       },
    //       httpMethod: "POST",
    //       uploadType: FS.FileSystemUploadType.BINARY_CONTENT,
    //     });
    //     console.log(response.headers);
    //     console.log(response.body);
    //   };

    ////////////////////////////////////////////////////////////////////////////////

    try {
      let response = await FS.uploadAsync(
        "https://wise-gecko-3.loca.lt/process-image",
        image.uri,
        {
          httpMethod: "POST",
          headers: {
            "content-type": "image",
          },
          uploadType: FS.FileSystemUploadType.BINARY_CONTENT,
        }
      );
      // let formData = new FormData();
      // let match = /\.(\w+)$/.exec(image.uri.split("/").pop());
      // let mimetype = match ? `image/${match[1]}` : `image`;
      // formData.append("uri", image.uri);
      // formData.append("name", image.uri.split("/").pop());
      // formData.append("mimetype", mimetype);
      // // formData.append("base64", image.base64);
      // formData.append("language", language);
      // let response = await fetch(
      //   "https://curvy-moth-63.loca.lt/process-image",
      //   {
      //     method: "POST",
      //     headers: {
      //       "content-type": "multipart/form-data",
      //     },
      //     body: formData,
      //   }
      // );
      // console.log(response);
      console.log(response);
      // console.log(JSON.parse(response.body).result);
      console.log(response.status);
      if (response.status === 200) {
        let responseData = JSON.parse(response.body).result;
        setImage(null);
        setImageProcessingResult(responseData);
      } else {
        console.log("Not OK");
      }
    } catch (error) {
      console.error(error);
    }

    ///////////////////////////////////////////////////////////////////////////////////

    // let formData = new FormData();
    // let match = /\.(\w+)$/.exec(image.uri.split("/").pop());
    // let mimetype = match ? `image/${match[1]}` : `image`;
    // formData.append("uri", image.uri);
    // formData.append("name", image.uri.split("/").pop());
    // formData.append("mimetype", mimetype);
    // // formData.append("base64", image.base64);
    // formData.append("language", language);
    // console.log(image);
    // try {
    //   // let response = await fetch("http://127.0.0.1:5000/process-image", {
    //   let response = await fetch("http://192.168.56.1:5000/process-image", {
    //     method: "POST",
    //     headers: {
    //       "content-type": "multipart/form-data",
    //     },
    //     body: formData,
    //   });
    //   console.log(response);
    //   if (response.ok) {
    //     let json = await response.json();
    //     setImage(null);
    //     setImageProcessingResult(json.result);
    //     // console.log(json.result);
    //     // console.log(imageProcessingResult);
    //   } else {
    //     console.log("Not OK");
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
    // // We would need to send image base64 or BLOB for full functionality
    // // let response = await fetch("http://2495a2dcf2e5.ngrok.io/process-image", {
    // // this.setImageLoadingState({ isLoading: false });
    // // this.setState({ resultText: json["label"] });
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
                  sendToImageProcessing();
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
                  source={{ uri: image.uri }}
                  style={styles.recognitionImage}
                />
              </View>
            </View>
          </View>
        ) : null}
        {imageProcessingResult ? (
          <View style={{ marginTop: 30 }}>
            <View>
              <Text
                style={styles.resultTitle}
                lightColor="rgba(0,0,0,0.8)"
                darkColor="rgba(255,255,255,0.8)"
              >
                The result is
              </Text>
            </View>
            <View>
              <Text
                style={styles.resultTitle}
                lightColor="rgba(0,0,0,0.8)"
                darkColor="rgba(255,255,255,0.8)"
              >
                {imageProcessingResult}
              </Text>
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
  resultTitle: {
    textAlign: "center",
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

// import React, { Component } from "react";
// import { Button, SafeAreaView, StyleSheet, Alert, Text } from "react-native";

// //Importing the installed libraries
// import * as FS from "expo-file-system";
// import * as ImagePicker from "expo-image-picker";

// export default class ModalScreen extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       cameraRollPer: null,
//       disableButton: false,
//     };
//   }
//   async componentDidMount() {
//     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     this.setState((state, props) => {
//       return {
//         cameraRollPer: status === "granted",
//         disableButton: false,
//       };
//     });
//   }

//   // showAlert = () =>
//   //   Alert.alert(
//   //     "Connection Problem",
//   //     "Internet or Server Problem ",
//   //     [
//   //       {
//   //         text: "Try Again",
//   //         onPress: () => {
//   //           this.resetData();
//   //         },
//   //         style: "cancel",
//   //       },
//   //     ],
//   //     {
//   //       cancelable: true,
//   //       onDismiss: () => {
//   //         this.resetData();
//   //       },
//   //     }
//   //   );

//   uriToBase64 = async (uri) => {
//     let base64 = await FS.readAsStringAsync(uri, {
//       encoding: FS.EncodingType.Base64,
//     });
//     return base64;
//   };

//   pickMedia = async () => {
//     this.setState((state, props) => {
//       return {
//         cameraRollPer: state.cameraRollPer,
//         disableButton: true,
//       };
//     });
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       base64: true,
//     });
//     if (result.cancelled) {
//       return;
//     }
//     if (result.type == "image") {
//       await this.toServer({
//         type: result.type,
//         base64: result.base64,
//         uri: result.uri,
//       });
//     } else {
//       let base64 = await this.uriToBase64(result.uri);
//       await this.toServer({
//         type: result.type,
//         base64: base64,
//         uri: result.uri,
//       });
//     }
//   };

//   toServer = async (mediaFile) => {
//     console.log("tu smo");
//     let type = mediaFile.type;
//     let schema = "http://";
//     let host = "192.168.56.1";
//     let route = "";
//     let port = "5000";
//     let url = "";
//     let content_type = "";
//     type === "image"
//       ? ((route = "/process-image"), (content_type = "image/png"))
//       : ((route = "/video"), (content_type = "video/mp4"));
//     url = schema + host + ":" + port + route;

//     console.log(url);
//     console.log(type);

//     let response = await FS.uploadAsync(url, mediaFile.uri, {
//       headers: {
//         "content-type": content_type,
//       },
//       httpMethod: "POST",
//       uploadType: FS.FileSystemUploadType.BINARY_CONTENT,
//     });

//     console.log(response.headers);
//     console.log(response.body);
//   };

//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//         {this.state.cameraRollPer ? (
//           <Button
//             title="Pick From Gallery"
//             disabled={this.state.disableButton}
//             onPress={async () => {
//               await this.pickMedia();
//               this.setState((s, p) => {
//                 return {
//                   cameraRollPer: s.cameraRollPer,
//                   disableButton: false,
//                 };
//               });
//             }}
//           />
//         ) : (
//           <Text>Camera Roll Permission Required ! </Text>
//         )}
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
