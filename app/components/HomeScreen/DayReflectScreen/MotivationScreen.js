import React from "react";
import { Alert } from "react-native";

import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  H1
} from "native-base";

import { StackNavigator } from "react-navigation";
import QuestionOne from "./QuestionOne.js";

export default class MotivationScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left />
        <Body>
          <Title>Welcome</Title>
        </Body>
        <Right />
      </Header>
    )
  });
  
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name="paper-plane" />
              <Text>Motivation Qoute</Text>
              <Right>
                <Icon name="close" />
              </Right>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("QuestionOne")}
          >
            <Text>Goto Question Screen One</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}