import React, { Component } from "react";
import { Platform, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { NativeRouter, Route } from "react-router-native";
import thunk from "redux-thunk";

import reducers from "./src/reducers";

import AppContainer from "./src/containers/appContainer";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <NativeRouter>
          <Route
            path={["/:submenuId/:contentId", "/:submenuId", "/"]}
            component={AppContainer}
          />
        </NativeRouter>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
