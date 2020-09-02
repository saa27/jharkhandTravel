import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Animated,
  TouchableOpacity,
} from "react-native";

import { CATEGORIES } from "../data/data";
import BodyText from "../constants/BodyText";
import Category from "../constants/Category";

const { width, height } = Dimensions.get("window");
const SPACER_ITEM_SIZE = (width - 310) / 2;

const TravelListScreen = (props) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderCatgItem = ({ item, index }) => {
    if (!item.imageUrl) {
      return <View style={{ width: SPACER_ITEM_SIZE }} />;
    }

    const inputRange = [(index - 2) * 320, (index - 1) * 320, index * 320];
    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [0, -20, 0],
    });
    return (
      <Category
        onSelect={() =>
          props.navigation.navigate("TravelPlaces", { categoryId: item.id })
        }
        style={{ transform: [{ translateY }] }}
        imageUrl={item.imageUrl}
        title={item.title}
      />
    );
  };

  return (
    <ImageBackground
      source={require("../assets/forest3.png")}
      style={{ flex: 1, height: "100%", width: "100%", paddingTop: 5 }}
      imageStyle={{ opacity: 1 }}
    >
      <View style={{ marginTop: 0 }}>
        <View style={styles.flex}>
          <Text style={styles.header}>Jharkhand</Text>
          <BodyText style={styles.subHeader}>Nature's Hidden Jewel</BodyText>
        </View>
        <View>
          <BodyText style={styles.mainAtt}>Main Attractions:</BodyText>
          <Animated.FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[
              { key: "left-spacer" },
              ...CATEGORIES,
              { key: "right-spacer" },
            ]}
            renderItem={renderCatgItem}
            contentContainerStyle={{ alignItems: "center", height: 270 }}
            snapToInterval={320}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true } //to use animation
            )}
            scrollEventThrottle={16}
            decelerationRate={0}
          />

          <BodyText style={styles.recomm}>Recommended:</BodyText>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainAtt: {
    paddingHorizontal: 30,
    fontSize: 20,
    paddingBottom: 10,
    color: 'white'
  },
  recomm: {
    paddingHorizontal: 30,
    fontSize: 20,
    paddingBottom: 10,
    color: 'black'
  },

  flex: {
    flex: 0,
    marginTop: 12,
    flexDirection: "column",
    backgroundColor: "transparent",
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  header: {
    fontSize: 60,
    fontFamily: "anand",
    paddingTop: 10,
    color: 'white'
  },
  subHeader: {
    paddingLeft: 20,
    fontSize: 15,
    marginLeft: 110,
    color: 'white'
  },
});

/* TravelListScreen.navigationOptions = (navData) => {
  return {
    header: () => (
      <View style={styles.flex}>
        <Text style={styles.header}>Jharkhand</Text>
        <BodyText style={styles.subHeader}>Nature's Hidden Jewel</BodyText>
      </View>
    ),
  };
}; */

export default TravelListScreen;
