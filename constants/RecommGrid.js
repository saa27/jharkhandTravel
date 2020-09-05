import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  Image,
  Platform
} from "react-native";

import BodyText from "./BodyText";
import Rating from "./Rating";

let TouchableCmp = TouchableOpacity;

if (Platform.OS === "android" && Platform.Version >= 21) {
  TouchableCmp = TouchableNativeFeedback;
}

const RecommGrid = (props) => {
  return (
    <View style={styles.place}>
      <TouchableCmp onPress={props.onSelect}>
        <View style={styles.card}>
          <Image
            source={props.imageUrl}
            style={{ height: 150, width: "100%" }}
          />
          <View style={styles.titleContainer}>
            <Text
              style={{ fontFamily: "open-sans-bold", fontSize: 16 }}
              numberOfLines={1}
            >
              {props.title}
            </Text>
            <BodyText style={styles.location}>{props.location}</BodyText>
            <Rating
              rating={props.rating}
              size={16}
              numberSize={{ fontSize: 10, marginRight: 5 }}
            />
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  place: {
    width: 160,
    padding: 5,
    marginLeft: 10,
  },
  card: {
    elevation: 10,
    borderRadius: 10,
    height: 220,
    width: "100%",
    overflow: "hidden",
    backgroundColor: "white",
  },
  titleContainer: {
    marginLeft: 10,
  },
  location: {
    color: "#ccc",
    fontSize: 10,
  },
});

export default RecommGrid;
