import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Constants from "expo-constants";
import { colors } from "../utils";
import { Button } from "../components";
import { MaterialIcons } from "@expo/vector-icons";
import Searches from "../components/Searches";

const { statusBarHeight } = Constants;

export default function Search() {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Type your location here:</Text>
      <TextInput style={styles.input} />
      <View style={styles.actions}>
        <Button text="Submit" />
        <Button
          icon={<MaterialIcons name="gps-fixed" size={24} color="#fff" />}
        />
      </View>
      <Text style={styles.searchesTitle}>Previous Searches</Text>
      <Searches />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    paddingTop: statusBarHeight + 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
  },
  input: {
    borderColor: colors.BORDER_COLOR,
    borderWidth: 1,
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 8,
    marginVertical: 15,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchesTitle: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 25,
    marginBottom: 15,
  },
});
