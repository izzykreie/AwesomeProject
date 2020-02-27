import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import DeviceCamera from './camera';

class CameraButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCamera: false,
    };
  }

  showCamera = () => this.setState({showCamera: true});
  hideCamera = () => this.setState({showCamera: false});

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.state.showCamera ? this.hideCamera : this.showCamera}
          title={
            this.state.showCamera
              ? 'Click me to hide the camera!'
              : 'Click me to show the camera!'
          }
          color="#841584"
        />
        {this.state.showCamera && <DeviceCamera />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default CameraButton;
