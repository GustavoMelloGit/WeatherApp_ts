import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import {
  ReloadIcon,
  UnitsPicker,
  WeatherInfo,
  WeatherDetails,
} from "../components";
import { colors } from "../utils";
import { WEATHER_API_KEY, BASE_WEATHER_URL } from "@env";
import Constants from "expo-constants";
import { IServerResponse } from "../utils/interfaces";
import { useDispatch } from "react-redux";
import { saveWeather } from "../store/weather";

const { statusBarHeight } = Constants;

export default function Home() {
  const [errorMessage, setErrorMessage] = useState("");
  const [currentWeather, setCurrentWeather] = useState<IServerResponse>();
  const [unitsSystem, setUnitsSystem] = useState("metric");
  const dispatch = useDispatch();

  async function load() {
    setCurrentWeather(undefined);
    setErrorMessage("");
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMessage("Access to location is needed to run the app");
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;

      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;
      const response = await fetch(weatherUrl);

      const result = await response.json();
      if (!response.ok) {
        setErrorMessage(result.message);
        return;
      }
      setCurrentWeather(result);
      dispatch(saveWeather(result));
    } catch (error: any) {
      alert(error.message);
    }
  }

  useEffect(() => {
    load();
  }, [unitsSystem]);

  if (currentWeather) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <View style={styles.header}>
            <UnitsPicker
              unitsSystem={unitsSystem}
              setUnitsSystem={setUnitsSystem}
            />
            <ReloadIcon load={load} />
          </View>
          <WeatherInfo unitsSystem={unitsSystem} />
          <WeatherDetails
            currentWeather={currentWeather}
            unitsSystem={unitsSystem}
          />
        </View>
      </View>
    );
  } else if (errorMessage) {
    return (
      <View style={styles.container}>
        <ReloadIcon load={load} />
        <Text>Not able to connect to servers</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  return (
    <View style={styles.main}>
      <StatusBar style="auto" />
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  main: {
    justifyContent: "space-between",
    flex: 1,
    paddingTop: statusBarHeight,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
