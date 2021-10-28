import React, { ReactNode } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

interface ICard {
  children: ReactNode;
}

export default function Card({ children }: ICard) {
  return <TouchableOpacity style={styles.card}>{children}</TouchableOpacity>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ced4da",
    width: "100%",
    height: 80,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: "center",
    marginBottom: 15,
  },
});
