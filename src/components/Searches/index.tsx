import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../src/store";
import Search from "./sub_components/Search";

const Searches = () => {
  const weather = useSelector((state: RootState) => state.weather);
  const recentSearches = weather.map((weather, index) => (
    <Search key={index} name={weather.name} country={weather.sys.country} />
  ));
  recentSearches.reverse();

  return <View>{recentSearches}</View>;
};

export default React.memo(Searches);
