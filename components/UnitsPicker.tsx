import React, { Dispatch, SetStateAction } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-community/picker";
import { ItemValue } from "@react-native-community/picker/typings/Picker";

interface IUnitsPicker {
  unitsSystem: string;
  setUnitsSystem: Dispatch<SetStateAction<string>>;
}

export default function UnitsPicker(props: IUnitsPicker) {
  return (
    <View style={styles.unitsSystem}>
      <Picker
        selectedValue={props.unitsSystem}
        onValueChange={(item) => props.setUnitsSystem(item.toString())}
        mode="dropdown"
      >
        <Picker.Item label="Celsius" value="metric" />
        <Picker.Item label="Fahrenheit" value="imperial" />
      </Picker>
    </View>
  );
}
const styles = StyleSheet.create({
  unitsSystem: {
    height: 50,
    width: 150,
  },
});
