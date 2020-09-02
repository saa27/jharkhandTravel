import React from "react";
import { View, StyleSheet, Image } from "react-native";

import BodyText from "../constants/BodyText";
import { ScrollView } from "react-native-gesture-handler";
import { PLACES } from "../data/data";

const PlaceDetailScreen = (props) => {
  const pid = props.navigation.getParam("pid");

  const displayedPlaces = PLACES.find((place) => place.id === pid);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={displayedPlaces.imageUrl} style={styles.image} />
        <BodyText>{displayedPlaces.description}</BodyText>
        {/* <View style={styles.details}>
          <BodyText>{selectedMeal.duration}m</BodyText>
          <BodyText>{selectedMeal.complexity.toUpperCase()}</BodyText>
          <BodyText>{selectedMeal.affordability.toUpperCase()}</BodyText>
        </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
});

export default PlaceDetailScreen;
