import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import { Provider } from "react-redux";
import store from "./src/store";
import Search from "./src/screens/Search";
import * as Location from "expo-location";

export default function App() {
  const [errorMessage, setErrorMessage] = useState("");
  async function load() {
    setErrorMessage("");
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMessage("We need permission to run this app");
      return;
    }
  }
  useEffect(() => {
    load();
  }, []);

  if (errorMessage) {
    return (
      <View style={styles.container}>
        <Text>{errorMessage}</Text>
      </View>
    );
  }

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
