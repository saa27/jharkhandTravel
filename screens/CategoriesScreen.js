import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Animated
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
        imageStyle={{ opacity: 0.9 }}
      >
        <View style={styles.borderStyle}>
          <View style={styles.border}>
            <BodyText style={styles.text}>{itemData.item.title}</BodyText>
          </View>
        </View>
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
          contentContainerStyle={{ alignItems: "center" }}
          snapToInterval={320}
          
        />
      </View>
      <View style={styles.screen}>
        <BodyText style={styles.mainAtt}>Recommended:</BodyText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dim: {
    height: 220,
    width: 300,
    //width: width - 36 * 2,
    marginRight: 20,
    borderRadius: 12,
    overflow: "hidden",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  border: {
    //flex: 1,
    borderRadius: 1,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "white",
    height: 200,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  borderStyle: {
    padding: 15,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  screen: {
    paddingHorizontal: 30,
    paddingTop: 5,
  },
  mainAtt: {
    fontSize: 20,
    padding: 10,
  },
  flex: {
    flex: 0,
    marginTop: 24,
    flexDirection: "column",
    backgroundColor: "transparent",
    paddingHorizontal: 36,
    paddingBottom: 15,
  },
  header: {
    fontSize: 60,
    fontFamily: "anand",
    paddingTop: 10,
  },
  subHeader: {
    paddingLeft: 20,
    fontSize: 15,
    marginLeft: 110,
  },
});

TravelListScreen.navigationOptions = (navData) => {
  return {
    header: () => (
      <View style={styles.flex}>
        <Text style={styles.header}>Jharkhand</Text>
        <BodyText style={styles.subHeader}>Nature's Hidden Jewel</BodyText>
      </View>
    ),
  };
};

export default TravelListScreen;
