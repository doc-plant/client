import React, { Component } from 'react';
import {
  TouchableOpacity,
  Platform,
} from "react-native";
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';

export default class Disease extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Disease',
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
  render() {
    const { navigation: { navigate } } = this.props
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Left>
                <TouchableOpacity
                  onPress={() => {
                    navigate('Diseases');
                  }}
                >
                  <Text>Simon Mignolet</Text>
                </TouchableOpacity>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem >
              <Left>
                <Text>Nathaniel Clyne</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Dejan Lovren</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}