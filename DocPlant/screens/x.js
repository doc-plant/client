import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, } from 'native-base';
import { Image, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ApiKeys from '../constants/config';
import * as firebase from 'firebase';


class home extends Component {
  componentDidMount(){
    if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
  }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#3a8305" }}>
          <Left>
            <Image
              style={style.drawerImage}
              source={require('../assets/mini_logo.png')} />
          </Left>
          <Body>
            <Text style={{
              color: "#fff", fontWeight: 'bold',
              fontSize: 25,
            }}> Doc Plant</Text>
          </Body>
          <Right />
        </Header>
        <Content>
          {/* <Image
            source={{ uri: this.props.img, isStatic: true }}
            style={{ width: 100, height: 100 }}
          /> */}
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Camera')}>
              <Icon name="camera" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


const mapStateToProps = (state) => ({
  img: state.content.img
})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(home)


const style = StyleSheet.create({
  drawerImage: {
    height: 24,
    width: "23%",
    marginLeft: 10
  }
})

