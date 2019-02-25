import React, { Component } from 'react';
import { Image, WebView, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, } from 'native-base';
import HTML from 'react-native-render-html';
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
    embedUri: "ysbeEQWXbA8?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
  }
  render() {
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: `http://pngimg.com/uploads/tomato/tomato_PNG12590.png` }} />
                <Body>
                  <Text>Tomatto</Text>
                  <Text note>April 15, 2019</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{ uri: `http://pngimg.com/uploads/tomato/tomato_PNG12590.png` }} style={{ height: 200, width: "100%", flex: 1 }} />
                <Text style={{ marginTop: 10, textAlign: 'justify' }}>
                  Tomatoes are an intensely nutritious plant food.
                  The benefits of consuming different types of fruit and vegetable are impressive,
                  and tomatoes are no different. As the proportion of plant foods in the diet increases, the risk of developing heart disease, diabetes, and cancer decreases.
                  There are different types and sizes of tomato, and they can be
                  prepared in different ways. These include cherry tomatoes, stewed tomatoes, raw tomatoes, soups, juices, and purees.
                  The health benefits can vary between types. For example, cherry tomatoes have higher beta-carotene content than regular tomatoes.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="create" />
                  <Text style={{ fontSize: 15, fontWeight: '700' }}>Herman Susanto</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Body>
                  <Text style={{ fontSize: 27, fontWeight: '700' }}>Recomended Video </Text>
                  <Text note></Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body style={{ width: width - 20, height: height / 3, }}>
                <HTML html={` <iframe width="340" height="100"  src="https://www.youtube.com/embed/${this.state.embedUri}">
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


