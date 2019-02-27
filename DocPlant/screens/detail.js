import React, { Component } from 'react';
import { Image, WebView, Dimensions ,View, ScrollView,} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, } from 'native-base';
import { local } from '../helpers';
import VideoComponent from '../components/video'

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
    videos: [1,2,3]
  }
  
  render() {
    const { navigation } = this.props
    const videos = navigation.getParam('youtubes')
    console.log(videos[0], 'ini videos')
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
                  <Text note>{new Date(recommend.createdAt).toDateString()}</Text>
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
              <View style={{ flex: 1, height: 300 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {
                    // <VideoComponent/>
                    videos.map(p => (
                      <VideoComponent VideoUri={p.id.videoId}
                        Videoname={p.title}
                        key={p.id.videoId}
                      />
                    ))
                  }
                </ScrollView>
              </View>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}


