import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Constants from "expo-constants";
import { colors } from "../../utils";
import { Button } from "../components";
import { MaterialIcons } from "@expo/vector-icons";
import Searches from "../components/Searches";
import { WEATHER_API_KEY, BASE_URL } from "@env";
import { useDispatch } from "react-redux";
import { saveWeather } from "../store/weather";
import * as Location from "expo-location";

const { statusBarHeight } = Constants;

export default function Search() {
  const [cityInput, setCityInput] = useState("");
  const dispatch = useDispatch();

  async function handleSubmit() {
    try {
      const response = await fetch(
        `${BASE_URL}q=${cityInput}&appid=${WEATHER_API_KEY}`
      );
      const data = await response.json();
      dispatch(saveWeather(data));
    } catch (e: any) {
      console.log(e.message);
    }
  }
  async function handleCurrentPosition() {
    try {
      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;

      const weatherUrl = `${BASE_URL}lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`;
      const response = await fetch(weatherUrl);

      const result = await response.json();
      dispatch(saveWeather(result));
    } catch (e: any) {
      console.log(e.message);
    }
  }
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Type your location here:</Text>
      <TextInput style={styles.input} onChangeText={setCityInput} />
      <View style={styles.actions}>
        <Button text="Submit" onPress={handleSubmit} />
        <Button
          icon={<MaterialIcons name="gps-fixed" size={24} color="#fff" />}
          onPress={handleCurrentPosition}
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
