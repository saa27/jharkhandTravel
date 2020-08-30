import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import PlacesGrid from "../constants/PlacesGrid";
import { CATEGORIES, PLACES } from "../data/data";

const TravelPlacesScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const displayedPlaces = PLACES.filter(
    (place) => place.categoryIds.indexOf(catId) >= 0
  );

  const renderGridItem = ({ item, index }) => {
    return (
      <PlacesGrid
        onSelect={() => {}}
        imageUrl={item.imageUrl}
        title={item.title}
        location ={item.location}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={displayedPlaces}
      renderItem={renderGridItem}
    />
  );
};

const styles = StyleSheet.create({});

TravelPlacesScreen.navigationOptions = (navData) => {
  const catId = navData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
    headerTitleStyle: { fontFamily: "open-sans" },
  };
};

export default TravelPlacesScreen;
