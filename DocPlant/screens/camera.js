

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  Modal,
  TouchableHighlight
} from "react-native";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Camera, Permissions, ImagePicker } from 'expo'
import { Header, Item, Icon, Input, Button } from 'native-base'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import { add_image } from '../actions/content'


class CameraScreen extends Component {
  static navigationOptions = {
    drawerLabel: () => null
  }

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  takeImage = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      this.setModalVisible(true);
      this.props.add_image(photo.uri)
        .then(() => {
          this.props.navigation.navigate('Result')
          this.setModalVisible(!this.state.modalVisible);
        })
        .catch((error) => {
          Alert.alert(error);
        });

    }
  };
  selectImage = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      aspect: 1,
      allowsEditing: true,
    });
    this.setModalVisible(true);
    if (!cancelled) {
      this.props.add_image(uri)
        .then(() => {
          this.props.navigation.navigate('Result')
          this.setModalVisible(!this.state.modalVisible);
        })
        .catch((error) => {
          Alert.alert(error);
        });
    };
  }


  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' })
    this.setState({loading:1})
  }
  render() {
    const { hasCameraPermission } = this.state
    if (hasCameraPermission === null) {
      return <View />
    }
    else if (hasCameraPermission === false) {
      return <Text> No access to camera</Text>
    }
    else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1, justifyContent: 'space-between' }} type={this.state.type} ref={ref => { this.camera = ref; }} >
            <Header searchBar rounded
              style={{
                position: 'absolute', backgroundColor: 'transparent',
                left: 0, top: 0, right: 0, zIndex: 100, alignItems: 'center'
              }}
            >
              <View style={{ flexDirection: 'row', flex: 4 }}>
                <Item style={{ backgroundColor: 'transparent' }}>
                <Icon name="ios-log-out" style={{ color: 'white', fontWeight: 'bold' }} onPress={() => this.props.navigation.navigate('Home')}  />
                </Item>
              </View>

              <View style={{ flexDirection: 'row', flex: 2, justifyContent: 'space-around' }}>
                <Image style={{width: 60, height: 23}}
                  source={require('../assets/login_icon_white.png')} />
                <Icon
                  onPress={() => {
                    this.setState({
                      type: this.state.type === Camera.Constants.Type.back ?
                        Camera.Constants.Type.front :
                        Camera.Constants.Type.back
                    })
                  }}
                  name="ios-reverse-camera" style={{ color: 'white', fontWeight: 'bold' }} />
              </View>
            </Header>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, marginBottom: 15, alignItems: 'flex-end' }}>
              <MaterialCommunityIcons name="message-reply"
                style={{ color: 'white', fontSize: 36 }}
              ></MaterialCommunityIcons>

              <View style={{ alignItems: 'center' }}>
                <MaterialCommunityIcons name="circle-outline"
                  style={{ color: 'white', fontSize: 100 }}
                  onPress={() => this.takeImage()}
                ></MaterialCommunityIcons>
                <Icon name="ios-images" style={{ color: 'white', fontSize: 36 }}
                  onPress={this.selectImage}
                />
              </View>
              <MaterialCommunityIcons name="google-circles-communities"
                style={{ color: 'white', fontSize: 36 }}
              ></MaterialCommunityIcons>
            </View>
          </Camera>
          <View >
        <Modal 
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View>
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              marginTop:200
              }}>
            <Image style={{width: 120, height: 130, marginTop:30, marginBottom:10, marginLeft:10}} source={{ uri: `https://firebasestorage.googleapis.com/v0/b/docplant-f7bfd.appspot.com/o/icon%2Fupload.gif?alt=media&token=7b164251-926e-4820-a1ee-ce3fe15ae9b8` }}/>
            <Text style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                }} >Uploading</Text>
            </View>
          </View>
        </Modal>
      </View>
        </View>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  access_token: state.user.access_token
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ add_image }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CameraScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});