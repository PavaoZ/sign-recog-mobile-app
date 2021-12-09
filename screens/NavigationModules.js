import React from 'react';
import About from './About';
import Camera from './Camera';
import ContactUs from './Contact-us';
import RecognizeFonts from './Recognize-fonts';

// Screens to navigate through
export const AboutScreen = ({navigation}) => <About navigation={navigation} />
export const CameraScreen = ({navigation}) => <Camera navigation={navigation} />
export const ContactUsScreen = ({navigation}) => <ContactUs navigation={navigation} />
export const RecognizeFontsScreen = ({navigation}) => <RecognizeFonts navigation={navigation} />

// Imports && Exports
import {ScreenHeader} from '../components/header-component/ScreenHeader';
import * as _c from '../common/common';
import * as AppConstants from '../common/AppConsts';

export {
    ScreenHeader,
    _c,
    AppConstants
};
