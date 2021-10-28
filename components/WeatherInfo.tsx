import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { colors } from "../utils";

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;

interface IWeatherInfo {
  unitsSystem: string;
}
export default function WeatherInfo({ unitsSystem }: IWeatherInfo) {
  const weather = useSelector((state: RootState) => state.weather);
  const unit = unitsSystem === "metric" ? "C" : "F";

  if (weather[0]) {
    const { icon, main, description } = weather[0].weather[0];
    const { name } = weather[0];

    const iconURL = `https://openweathermap.org/img/wn/${icon}@4x.png`;
    return (
      <View style={styles.weatherInfo}>
        <Text>{name}</Text>
        <Image style={styles.weatherIcon} source={{ uri: iconURL }} />
        <Text style={styles.textPrimary}>
          {weather[0].main.temp.toFixed(0)}°{unit}
        </Text>
        <Text style={styles.weatherDescription}>{description}</Text>
        <Text style={styles.textSecondary}>{main}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Load</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: "center",
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weatherDescription: {
    textTransform: "capitalize",
  },
  textPrimary: {
    fontSize: 40,
    color: PRIMARY_COLOR,
  },
  textSecondary: {
    fontSize: 28,
    color: SECONDARY_COLOR,
    fontWeight: "500",
    marginTop: 10,
  },
});
