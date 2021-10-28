import React, { ReactNode } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { colors } from "../../../utils";

interface IButton extends TouchableOpacityProps {
  text?: string;
  icon?: ReactNode;
}
export default function index(props: IButton) {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      {props.text ? <Text style={styles.text}>{props.text}</Text> : props.icon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.PRIMARY_COLOR,
    borderRadius: 8,
    height: 50,
    width: 110,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
