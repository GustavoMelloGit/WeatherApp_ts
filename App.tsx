import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import Home from "./screens/Home";
import { Provider } from "react-redux";
import store from "./store";
import Search from "./screens/Search";

export default function App() {
  return (
    <Provider store={store}>
      <Search />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
