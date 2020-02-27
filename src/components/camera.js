import React, {PureComponent} from 'react';
import Video from 'react-native-video';
import CameraRoll from '@react-native-community/cameraroll';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {RNCamera} from 'react-native-camera';

class DeviceCamera extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isRecording: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            console.log(barcodes);
          }}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={
              this.state.isRecording
                ? this.stopRecording()
                : this.Record.bind(this)
            } //changed from onPress = {this.takePicture.bind(this)}
            style={styles.capture}>
            <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  Record = async () => {
    if (this.camera) {
      const options = {maxDuration: 5};
      const data = await this.camera.recordAsync(options);
      console.log(data.uri);

      CameraRoll.saveToCameraRoll(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 150,
    alignSelf: 'center',
    margin: 20,
  },
});

export default DeviceCamera;
