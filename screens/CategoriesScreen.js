import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
} from "react-native";

import { CATEGORIES } from "../data/data";
import BodyText from "../constants/BodyText";
import { FlatList } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const renderCategoryItem = (itemData) => {
  return (
    <View style={styles.dim}>
      <ImageBackground
        source={itemData.item.imageUrl}
        style={styles.bgImage}
        imageStyle={{opacity: 0.8}}
      >
        <Text>{itemData.item.title}</Text>
      </ImageBackground>
    </View>
  );
};

const TravelListScreen = (props) => {
  return (
    <View>
      <View style={styles.screen}>
        <BodyText style={styles.mainAtt}>Main Attractions:</BodyText>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CATEGORIES}
          renderItem={renderCategoryItem}
        />
      </View>
      <View style={styles.screen}>
        <BodyText>Recommended</BodyText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 0,
    marginTop: 36,
    flexDirection: "column",
    backgroundColor: "transparent",
    paddingHorizontal: 36,
  },
  screen: {
    paddingHorizontal: 30,
    paddingTop: 15,
  },
  mainAtt: {
    fontSize: 20,
    padding: 10,
  },
  destination: {
    flex: 0,
    flexDirection: "column",
  },
  dim: {
    height: 220,
    width: 300,
    //width: width - 36 * 2,
    marginRight: 10,
    borderRadius: 12,
    overflow: "hidden",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  header: {
    fontSize: 60,
    fontFamily: "anand",
    paddingTop: 10,
  },
  subHeader: {
    paddingLeft: 20,
    fontSize: 10,
  },
});

TravelListScreen.navigationOptions = (navData) => {
  return {
    header: () => (
      <View style={styles.flex}>
        <Text style={styles.header}>Jharkhand</Text>
        <BodyText style={styles.subHeader}>
          Eastern Indian state known for Hindu shrines, waterfalls, Parasnath
          Hill temples
        </BodyText>
      </View>
    ),
  };
};

export default TravelListScreen;
