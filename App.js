import React, {Component} from 'react';
import DeviceCamera from './src/components/camera';
import CameraButton from './src/components/CameraButton';
//import {AppRegistry} from 'react-native';

export default class App extends Component {
  render() {
    return <CameraButton />;

    //<DeviceCamera />;
  }
}
