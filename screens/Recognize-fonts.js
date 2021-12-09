import React, { Fragment } from 'react';
import  {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';
import {ScreenHeader} from '../components/header-component/ScreenHeader';
import * as _c from '../common/common';
import * as AppConstants from '../common/AppConsts';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import * as Network from 'expo-network';

export default class RecognizeFonts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resultText: 'Here we show the text',
            isTFlowReady: false,
            isModelReady: false,
            model: null,
            image: {
                isLoading: false,
                data: null,
            },
            predictions: null
        }
        this.options = {
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
            base64: true,
        }
    }

    async componentDidMount() {
        const networkStatus = await Network.getNetworkStateAsync();
        if (!networkStatus.isConnected || !networkStatus.isInternetReachable) {
            alert(AppConstants.NO_NETWORK_CONNECTION);
            return;
        }

        this.setState({isTFlowReady: true, isModelReady: true});
    }

    setImageLoadingState({isLoading, data = null}) {
        this.setState({
            image: {
                isLoading: isLoading,
                data: data,
            }
        });
    }

    launchCamera = async () => {
        this.setImageLoadingState({ isLoading: true });
        let response = await ImagePicker.launchCameraAsync(this.options);
        this.handleResponse(response);
    }

    launchImageLibrary = async () => {
        this.setImageLoadingState({ isLoading: true });
        let response = await ImagePicker.launchImageLibraryAsync(this.options);
        this.handleResponse(response);
    }

    sendToImageProcessing = async () => {
        this.setImageLoadingState({ isLoading: true });

        // We would need to send image base64 or BLOB for full functionality
        let response = await fetch('http://2495a2dcf2e5.ngrok.io/process-image', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                image_path: 'yourValue',
              }),
        });
        let json = await response.json();
        
        this.setImageLoadingState({ isLoading: false });

        this.setState({ resultText: json['label'] });
    }

    handleResponse = (response) => {
        if (response.cancelled) {
            console.log('User cancelled image picker');
            this.setImageLoadingState({ isLoading: false });
        } else {
            this.setImageLoadingState({ isLoading: false, data: response.base64 });
        }
    }

    // In case we decide to fetch image not encoded in base64
    renderFileUri() {
        if (this.state.image !== null) {
            if (this.state.image.isLoading) {
                return (
                    <View style={styles.images}>
                        { _c.showActivityIndicator(AppConstants.LOADING_IMAGE) }
                    </View>
                );
            }
            if (this.state.image.uri !== null) {
                return <Image source={{uri: this.state.image.data}} style={styles.images}/>;
            }
        }
        return <Image source={require('../assets/images/expo-icon.png')} style={styles.images} />
    }

    renderFileData() {
        if (this.state.image.isLoading) {
            console.log("Showing Spinner");
            return _c.showActivityIndicator(AppConstants.LOADING_IMAGE);
        }
        if (this.state.image.data !== null) {
            return <Image source={{uri: AppConstants.BASE_64_IMG_STARTS_WITH + this.state.image.data}}
                          style={styles.images}/>;
        }

        return <Image source={require('../assets/images/Lato.png')} style={styles.images} />
        // return <Image source={require('../assets/images/expo-icon.png')} style={styles.images} />
    }


    render() {
        return (
            <Fragment>
                <ScreenHeader {...this.props} />
                {
                    this.state.isTFlowReady && this.state.isModelReady &&
                    <Fragment>
                        <SafeAreaView>
                            <View style={styles.body}>
                                <Text style={{
                                    textAlign: 'center',
                                    fontSize: 20,
                                    paddingBottom: 10
                                }}>{AppConstants.RECOGNIZE_FONTS_SCREEN_HEADER.toString()}</Text>
                                <View style={styles.ImageSections}>
                                    <View style={{margin: 'auto', justifyContent: 'center'}}>
                                        {this.renderFileData()}
                                    </View>
                                </View>

                                <View style={styles.btnParentSection}>

                                    <TouchableOpacity onPress={this.launchCamera} style={styles.btnSection}>
                                        <Text style={styles.btnText}>Launch Camera</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={this.launchImageLibrary} style={styles.btnSection}>
                                        <Text style={styles.btnText}>Launch Image Library</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={this.sendToImageProcessing} style={styles.btnSection}>
                                        <Text style={styles.btnText}>Send to image processing</Text>
                                    </TouchableOpacity>

                                    <Text style={styles.btnText}>{this.state.resultText}</Text>
                                </View>

                            </View>
                        </SafeAreaView>
                    </Fragment>
                }
                {
                    (!this.state.isTFlowReady || !this.state.isModelReady) &&
                    <View style={{height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>
                            {_c.showActivityIndicator(AppConstants.LOADING_TFLOW_AND_MODEL_MESSAGE)}
                        </Text>
                    </View>
                }
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    body: {
        backgroundColor: Colors.white,
        justifyContent: 'center',
        height: Dimensions.get('screen').height * 0.8,
        width: Dimensions.get('screen').width,
    },
    ImageSections: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 8,
        justifyContent: 'center',
    },
    images: {
        width: Dimensions.get('screen').width * 0.85,
        height: Dimensions.get('screen').height * 0.35,
        borderColor: 'black',
        borderWidth: 1,
        margin: 'auto',
        marginHorizontal: 3
    },
    btnParentSection: {
        alignItems: 'center',
        marginTop:10
    },
    btnSection: {
        width: 225,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:10,
        backgroundColor: '#87CEFA',
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        borderColor: 'black',
        borderWidth: 0.4,
    },
    btnText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 14,
        fontWeight:'bold'
    }
});
