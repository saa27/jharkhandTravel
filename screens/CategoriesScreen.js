import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import BodyText from "../constants/BodyText";

const { width, height } = Dimensions.get("window");

const TravelListScreen = (props) => {
  return (
    <View>
      <View style={styles.screen}>
        <BodyText style={styles.mainAtt}>Main Attractions:</BodyText>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          //scrollEventThrottle={16}
          //snapToAlignment="center"
        >
          <View style={styles.dim}>
            <Text>DIM 1</Text>
          </View>
          <View style={styles.dim}>
            <Text>DIM 2</Text>
          </View>
          <View style={styles.dim}>
            <Text>DIM 3</Text>
          </View>
        </ScrollView>
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
    paddingHorizontal: 36,
    paddingTop: 15,
  },
  mainAtt:{
    fontSize:20,
    padding: 10
  },
  destination: {
    flex: 0,
    flexDirection: "column",
  },
  dim: {
    height: 220,
    width: width - 36 * 2,
    marginRight: 10,
    borderRadius: 12,
    backgroundColor: "pink",
    padding: 10,
  },
  header: {
    fontSize: 60,
    fontFamily: "art-brewery",
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
