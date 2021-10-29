import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../../../../utils";
import Card from "../Card";
import { AntDesign } from "@expo/vector-icons";

export interface ISearch {
  name: string;
  country: string;
}
export default function Search({ name, country }: ISearch) {
  return (
    <Card>
      <View style={styles.content}>
        <View>
          <Text style={styles.city}>{name}</Text>
          <Text style={styles.info}>R.J {country}</Text>
        </View>
        <AntDesign name="arrowright" size={24} color={colors.PRIMARY_COLOR} />
      </View>
    </Card>
  );
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
