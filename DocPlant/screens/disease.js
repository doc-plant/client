import React, { Component } from 'react';
import {
  TouchableOpacity,
  Platform,
  Button
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
  })

  state = {
    diseases: []
  }
  
  componentDidMount () {
    this.setState({
      diseases: this.props.navigation.getParam('diseases')
    })
  }

  render() {
    const { navigation: { navigate } } = this.props
    const diseases = this.state.diseases
    return (
      <Container>
        <Content>
          <List>
            {diseases.map( d =>  (
            <ListItem
            key={d._id}
            >
              <Left>
                <TouchableOpacity
                  onPress={() => {
                    navigate('Diseases', {details: d});
                  }}
                >
                  <Text>{d.name}</Text>
                </TouchableOpacity>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}