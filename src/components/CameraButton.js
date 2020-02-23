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
          onPress={this.showCamera}
          title="click me to open the camera!"
          color="#841584"
        />
        {this.state.showCamera && <DeviceCamera />}
        <Button
          title="click me to close the camera!"
          onPress={this.hideCamera}
        />
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
