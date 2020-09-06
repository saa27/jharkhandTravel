import React from "react";

import { PLACES, CATEGORIES } from "../data/data";
import Detail from "../constants/Detail";
import { View } from "react-native";

const PlaceDetailScreen = (props) => {
  const pid = props.navigation.getParam("pid");

  const displayedPlaces = PLACES.find((place) => place.id === pid);

  return (
    <View style={{ backgroundColor: "rgba(6, 115, 44, 0.2)", flex: 1 }}>
      <Detail
        imageUrl={displayedPlaces.imageUrl}
        title={displayedPlaces.title}
        rating={displayedPlaces.rating}
        description={displayedPlaces.description}
        onSelect={() => {
          props.navigation.navigate("Map", {
            lat: displayedPlaces.lat,
            long: displayedPlaces.long,
          });
        }}
      />
    </View>
  );
};

PlaceDetailScreen.navigationOptions = (navData) => {
  const cid = navData.navigation.getParam("cid");
  const displayedPlaceCatg = CATEGORIES.find((place) => place.id === cid);

  return {
    headerShown: true,
    headerTitle: displayedPlaceCatg.title,
    headerTitleStyle: { fontFamily: "open-sans" },
    headerStyle: {
      backgroundColor: "rgba(6, 115, 44, 0.8)",
    },
  };
};

export default PlaceDetailScreen;
