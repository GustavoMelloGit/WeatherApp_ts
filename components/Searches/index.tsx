import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "./sub_components/Card";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../utils";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function Searches() {
  const weather = useSelector((state: RootState) => state.weather);
  const [searches, setSearches] = useState<any>();

  const recentSearches = weather.map((weather, index) => (
    <Card key={index}>
      <View style={styles.content}>
        <View>
          <Text style={styles.city}>{weather.name}</Text>
          <Text style={styles.info}>R.J Brasil</Text>
        </View>
        <AntDesign name="arrowright" size={24} color={colors.PRIMARY_COLOR} />
      </View>
    </Card>
  ));

  useEffect(() => {
    setSearches(recentSearches);
  }, []);

  return <View>{searches}</View>;
}

const styles = StyleSheet.create({
  content: {
    borderLeftWidth: 3,
    borderLeftColor: colors.PRIMARY_COLOR,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 15,
  },
  city: {
    fontWeight: "bold",
    fontSize: 16,
  },
  info: {},
});
