import React, { Component } from 'react';
import { Image, WebView, Dimensions} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, } from 'native-base';
import HTML from 'react-native-render-html';
import { local } from '../helpers';

let { height, width } = Dimensions.get('window');

export default class Detail extends Component {
  static navigationOptions = ({ navigation }) => ({
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
    embedUri: "ysbeEQWXbA8?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com",
  }

  render() {
    const { navigation } = this.props
    const recommend = navigation.getParam('recommend')
    const owner = navigation.getParam('user')
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: recommend.userId.avatar }} />
                <Body>
                  <Text>{recommend.article}</Text>
                  <Text note>{recommend.createdAt}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{ uri: recommend.imageUrl }} style={{ height: 200, width: "100%", flex: 1 }} />
                <Text style={{ marginTop: 10, textAlign: 'justify' }}>
                  {recommend.content}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="create" />
                  <Text style={{ fontSize: 15, fontWeight: '700' }}>{owner}</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Body>
                  <Text style={{ fontSize: 27, fontWeight: '700' }}>Recommended Video </Text>
                  <Text note></Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body style={{ width: width - 20, height: height / 3, }}>
                <HTML html={`<iframe width="340" height="100"  src="https://www.youtube.com/embed/${this.state.embedUri}">
                        </iframe>
                      `} />
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}


