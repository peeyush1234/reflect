import React, { Component } from "react";
import MotivationScreen from "./MotivationScreen.js";
import QuestionOne from "./QuestionOne.js";
import QuestionTwo from "./QuestionTwo.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator(
  {
    MotivationScreen: { screen: MotivationScreen },
    QuestionOne: { screen: QuestionOne },
    QuestionTwo: { screen: QuestionTwo }
  },
  {
    initialRouteName: "MotivationScreen"
  }
));