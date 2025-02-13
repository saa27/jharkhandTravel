import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import TravelNavigator from "./navigation/TravelNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "art-brewery": require("./assets/fonts/Art-Brewery.ttf"),
    "ananda": require("./assets/fonts/AnandaAkchyarbold.ttf"),
    "anand": require("./assets/fonts/AnandaNep.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }
  return <TravelNavigator />;
}
