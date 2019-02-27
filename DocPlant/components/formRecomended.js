import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Textarea } from 'native-base';
export default class Recomended extends Component {
  render() {
    return (
     
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Textarea rowSpan={5} bordered placeholder="Textarea" />
            </Item>
          </Form>
        </Content>
     
    );
  }
}