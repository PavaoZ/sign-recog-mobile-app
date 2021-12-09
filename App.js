import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions} from 'react-native'

import {Feather} from '@expo/vector-icons'
import SideBar from './components/SideBar'

// import * as tf from '@tensorflow/tfjs'
// import { fetch } from '@tensorflow/tfjs-react-native'

import {
  AboutScreen, 
  CameraScreen, 
  ContactUsScreen,
  RecognizeFontsScreen
} from './screens/NavigationModules';

const DrawerNavigation = createDrawerNavigator({
  AboutScreen: {
    screen: AboutScreen,
    navigationOptions: {
      title: 'About',
      drawerIcon: ({ tintColor }) => <Feather name="info" size={16} color={tintColor} />
    }
  },
  CameraScreen: {
    screen: CameraScreen,
    navigationOptions: {
      title: 'Camera',
      drawerIcon: ({ tintColor }) => <Feather name="camera" size={16} color={tintColor} />
    }
  },
  RecognizeFontsScreen: {
    screen: RecognizeFontsScreen,
    navigationOptions: {
      title: 'Recognize Fonts',
      drawerIcon: ({tintColor}) => <Feather name="image" size={16} color={tintColor} />
    }
  },
  ContactUsScreen: {
    screen: ContactUsScreen,
    navigationOptions: {
      title: 'Contact Us',
      drawerIcon: ({ tintColor }) => <Feather name="smartphone" size={16} color={tintColor} />
    }
  }
},
{
  contentComponent: props => <SideBar {...props} />,
  drawerWidth: Dimensions.get('window').width * 0.85,
  contentOptions: {
    activeBackgroundColor: '#ADD8E6',
    activeTintColor: '#53115B',
    itemsContainerStyle: {
      marginTop: 16,
      marginHorizontal: 8
    },
    itemsStyle: {
      borderRadius: 4
    }
  }
})

export default createAppContainer(DrawerNavigation);
