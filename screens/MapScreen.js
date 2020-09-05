import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = (props) => {
  const pLat = props.navigation.getParam("lat");
  const pLong = props.navigation.getParam("long");

  const mapRegion = {
    latitude: pLat,
    longitude: pLong,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  };

  return (
    <MapView
      style={styles.map}
      provider="google"
      region={mapRegion}
      mapType="hybrid"
    >
      <Marker coordinate={{ latitude: pLat, longitude: pLong }} />
    </MapView>
  );
};

MapScreen.navigationOptions = (navData) => {
  return {
    headerShown: true,
    headerTitle: "Maps",
    headerTitleStyle: { fontFamily: "open-sans" },
    headerStyle: {
      backgroundColor: "rgba(6, 115, 44, 0.9)",
    },
  };
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapScreen;
