import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  Platform,
  AsyncStorage 
} from "react-native";
import {Content,ListItem, Text, Icon, Left, Body, Right, Button } from 'native-base';


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
const { height, width } = Dimensions.get('window')


class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Profile',
    headerStyle: {
      backgroundColor: 'rgb(59, 133, 5)',
      borderBottomWidth: 0,

    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    headerLeft: (
      <TouchableOpacity
        style={{ width: 30, color: "#fff", paddingLeft: 10 }}
        onPress={() => navigation.openDrawer()}>
        <Icon name={Platform.OS === "ios" ? "ios-menu" : "md-menu"} size={30} style={{ color: "#fff" }} />
      </TouchableOpacity>
    ),
  })

  state = {
    active: 'true'
  }
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };

  render() {
    return (

      <View style={{ flex: 1 }}>
        <ImageBackground source={require('../assets/profile_background.png')} style={{ width: '100%', height: '100%' }}>
          <View style={styles.container}>
            <View style={{ height: 190, width: 140, borderRadius: 10, backgroundColor: 'rgb(231,234,236)' }}>
              <View>
                <Image source={{ uri: "https://2.bp.blogspot.com/-Z2f_rpbGnXs/WpKK4rFuefI/AAAAAAAAAQ0/h4Cm6zcmu_UdJrcXvS6HH3TOg3lBTWIEwCEwYBhgL/w800-h800/1519398909.png", isStatic: true, borderRadius: 10, }}
                  style={{ width: 140, height: 120, resizeMode: 'cover', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}
                />
              </View>
              <View style={{
                flex: 1, paddingLeft: 10, paddingTop: 20, alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text style={{ fontSize: 15, fontWeight: '700' }}>Muhammad Vinutama</Text>
              </View>
            </View>

          </View>
          <Content style={{ flex: 1 }}>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#FF9501" }}>
                  <Icon active name="mail" />
                </Button>
              </Left>
              <Body>
                <Text>Email</Text>
              </Body>
              <Right>
                <Text>
                  muhammadvinutama@gmail.com
                </Text>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#007AFF" }} onPress={() => this.props.navigation.navigate('History')}>
                  <Icon active name="sync" />
                </Button>
              </Left>
              <Body>
                <Text>History</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#007AFF" }}>
                  <Icon active name="build" />
                </Button>
              </Left>
              <Body>
                <Text>Version</Text>
              </Body>
              <Right>
                <Text>V 1.0.0</Text>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#007AFF" }}  onPress={() => this._signOutAsync()}>
                  <Icon active name="ios-log-out" />
                </Button>
              </Left>
              <Body>
                <Text>Logout</Text>
              </Body>
              <Right>
              </Right>
            </ListItem>
          </Content>
        </ImageBackground>
      </View>

    );
  }
}
const mapStateToProps = (state) => ({
  img: state.content.img
})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  }
});