import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet,TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Button, Text } from 'react-native-paper'

class CameraModule extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            // @ts-ignore
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <Button mode='contained' onPress={this.takePicture.bind(this)} style={styles.capture}>
            SNAP
          </Button>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    // @ts-ignore
    if (this.camera) {
      const options = { quality: 0.1, base64: true, width: 200,  };
      // @ts-ignore
      const data = await this.camera.takePictureAsync(options);
      console.log('pp ', data.base64)
      
      let url = `https://momsapp.herokuapp.com/chats`;
      const info = {
        // @ts-ignore
        userId: this.props.route.params.user,
        text: 'hello', 
        image: data.base64
      }
      const response: Response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });
     
      if (response.status) {
        // @ts-ignore
        this.props.navigation.navigate("Welcome")
      }
     
    }
  };
}

export default CameraModule

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
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});