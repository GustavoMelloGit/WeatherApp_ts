import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IReloadIcon {
  load: () => Promise<void>;
}
export default function ReloadIcon({ load }: IReloadIcon) {
  return (
    <View style={styles.reloadIcon}>
      <Ionicons onPress={load} name="refresh" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  reloadIcon: {},
});
