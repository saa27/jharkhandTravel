import React from "react";

import { PLACES } from "../data/data";
import Detail from "../constants/Detail";

const PlaceDetailScreen = (props) => {
  const pid = props.navigation.getParam("pid");

  const displayedPlaces = PLACES.find((place) => place.id === pid);

  return (
    <Detail
      imageUrl={displayedPlaces.imageUrl}
      title={displayedPlaces.title}
      rating={displayedPlaces.rating}
      description={displayedPlaces.description}
    />
  );
};

PlaceDetailScreen.navigationOptions = (navData) => {
  const pid = navData.navigation.getParam("pid");
  const displayedPlaces = PLACES.find((place) => place.id === pid);

  return {
    headerShown: true,
    headerTitle: displayedPlaces.title,
    headerTitleStyle: { fontFamily: "open-sans" },
    headerStyle: {
      backgroundColor: "rgba(6, 115, 44, 0.8)",
    },
  };
};

export default PlaceDetailScreen;
