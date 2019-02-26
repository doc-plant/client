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
  AsyncStorage,
  TouchableOpacity,
  ActivityIndicator,
  Modal
} from "react-native";
import { Camera, Permissions, ImagePicker } from 'expo'
import { Header, Form, Item, Input, Label, Textarea, Button, Left } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import { add_form_image } from '../actions/content'
import Result from '../components/result';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Recomended from "../components/formRecomended";
const { height, width } = Dimensions.get('window')
import { local } from '../helpers'

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
    images: "",
    detail: {},
    article: '',
    content: '',
    recommendations: [],
    loading: false

  };
  componentWillMount() {
    this.startHeaderHeight = 80
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }

 async componentDidMount () {
    const { navigation } =  this.props
    this.setState({
      detail: navigation.getParam('details')
    })
   let { data } = await local({
      method: 'GET',
      url: `/recommendations/${navigation.getParam('details')._id}`,
      headers: {
        token: await AsyncStorage.getItem('userToken')
      }
    })
    this.setState({
      recommendations: data
    })
    
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }


  selectImage = async () => {
    this.setState({
      loading: true
    })
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      aspect: 1,
      allowsEditing: true,
    });
    if (!cancelled) {
      this.props.add_form_image(uri)
        .then(() => {
          this.setState({
            loading: false
          })
        })
        .catch((error) => {
          Alert.alert(error);
        });
    };
  }

  handleChange = (id) => (value) => {
    this.setState({
      [id]: value
    })
  }

  getRecommendation = async () => {
    let { data } = await local({
      method: 'GET',
      url: `/recommendations/${navigation.getParam('details')._id}`,
      headers: {
        token: await AsyncStorage.getItem('userToken')
      }
    })
    this.setState({
      recommendations: data
    })
    
  }

  handleSubmit = async (id) => {
    const { recommendations, modalVisible } = this.state
    let { data } = await local({
      url: `/recommendations/${id}`,
      method: 'POST',
      data: {
        article: this.state.article,
        content: this.state.content,
        imageUrl: this.props.form_img
      },
      headers: {
        token: await AsyncStorage.getItem('userToken')
      }
    })
    this.setState({
      recommendations: [data, ...recommendations],
      article: '',
      content: '',
      imageUrl: ''
    }, () => {
      this.setModalVisible(!modalVisible)
      this.getRecommendation()
    })
    
  }


  render() {
    const { navigation } = this.props
    const { detail, recommendations, loading } = this.state
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10 }}>
              <View style={{ marginTop: 5, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  {detail.name}
                </Text>
                <Text style={{ fontWeight: '100', marginTop: 10, fontSize: 17 }}>
                  {detail.description}
                                </Text>
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
                  }}>Add Recommendation</Text>
              </Button>
              <Text style={{ fontSize: 24, fontWeight: '700', marginTop: 25, paddingHorizontal: 20}}>List Recommendations</Text>
              <View style={{ height: 190, marginTop: 25 }}>
              <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                 {recommendations.map(val => (
                  <TouchableOpacity key={val._id}
                  onPress={ () => navigation.navigate('Detail', {recommend: val, user: val.userId.fullname})}>
                    <Result imageUri={val.imageUrl}
                      name={val.content}
                    />
                  </TouchableOpacity>
                 ))}
                  
                </ScrollView>
              </View>
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
                      <Input style={{marginRight: 4 }} id="article" onChangeText={this.handleChange('article')}/>
                    </Item>
                    <Item stackedLabel>
                      <Textarea style={{ width: "95%", marginBottom: 10 , marginRight: 4}} rowSpan={8} bordered placeholder="Description" id="content" onChangeText={this.handleChange('content')}/>
                    </Item>
                    {loading ? <ActivityIndicator/>:  <Button bordered light
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
                    </Button>}
                   
                    {this.props.form_img && !loading ? <Image source={{ uri: this.props.form_img }}
                      style={{ marginLeft: 20, width: 80, height: 80 , marginTop: 10}} />:null}
                  
                    <Button bordered light
                    onPress={() => this.handleSubmit(detail._id)}
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