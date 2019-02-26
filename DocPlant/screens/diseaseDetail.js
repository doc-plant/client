import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  TouchableHighlight,
  Modal,
} from "react-native";
import { Camera, Permissions, ImagePicker } from 'expo'
import { Header, Form, Item, Input, Label, Textarea, Button, Left } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import { add_form_image } from '../actions/content'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Recomended from "../components/formRecomended";
const { height, width } = Dimensions.get('window')
class DetailDisease extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Detail',
    headerStyle: {
      backgroundColor: 'rgb(59, 133, 5)',
      borderBottomWidth: 0,

    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  })
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    modalVisible: false,
    images: ""

  };
  componentWillMount() {
    this.startHeaderHeight = 80
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  selectImage = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      aspect: 1,
      allowsEditing: true,
    });
    if (!cancelled) {
      this.props.add_form_image(uri)
        .then(() => {
        })
        .catch((error) => {
          Alert.alert(error);
        });
    };
  }


  render() {
    const { navigation: { navigate } } = this.props
    const { navigation } = this.props
    const img = navigation.getParam('img')
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10 }}>
              <View style={{ marginTop: 5, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  Tomato
                </Text>
                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  Tomato Spider mites Two spotted spider mite
                                </Text>
                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                    source={{ uri: img, isStatic: true }}
                  />
                </View>
              </View>
              <Button bordered light
                onPress={() => {
                  this.setModalVisible(true);
                }}
                style={{
                  width: "80%",
                  alignSelf: "center",
                  justifyContent: 'center',
                  borderRadius: 20,
                  marginTop: 30,
                  backgroundColor: "green",
                }}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>Add Recomended</Text>
              </Button>
            </View>

          </ScrollView>
          <View style={{ marginTop: 22 }}>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}>
              <View>
                <View style={{ width: "100%", height: 60, backgroundColor: "green" }}>
                  <TouchableHighlight
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Text style={{ marginTop: 22, color: "white", fontWeight: 'bold', fontSize: 20, marginLeft: 4 ,marginRight: 4 }}>Close</Text>
                  </TouchableHighlight>
                </View>
                <View>
                  <Form>
                    <Item stackedLabel>
                      <Label>Title</Label>
                      <Input style={{marginRight: 4 }}/>
                    </Item>
                    <Item stackedLabel>
                      <Textarea style={{ width: "95%", marginBottom: 10 , marginRight: 4}} rowSpan={8} bordered placeholder="Description" />
                    </Item>
                    <Button bordered light
                      onPress={this.selectImage}
                      style={{
                        width: "30%",
                        borderRadius: 10,
                        marginTop: 10,
                        backgroundColor: "green",
                        marginLeft: 15
                      }}>
                      <Text
                        style={{
                          marginLeft: 15,
                          color: "white",
                          fontWeight: 'bold',
                          fontSize: 15,
                        }}>Upload Image</Text>
                    </Button>
                    <Image source={{ uri: this.props.form_img }}
                      style={{ marginLeft: 20, width: 80, height: 80 , marginTop: 10}} />
                    <Button bordered light
                      style={{
                        width: "80%",
                        alignSelf: "center",
                        justifyContent: 'center',
                        borderRadius: 20,
                        marginTop: 30,
                        backgroundColor: "green",
                      }}>
                      <Text
                        style={{

                          color: "white",
                          fontWeight: 'bold',
                          fontSize: 20,
                        }}>SUBMIT</Text>
                    </Button>
                  </Form>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  form_img: state.content.form_list
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ add_form_image }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DetailDisease)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }

})