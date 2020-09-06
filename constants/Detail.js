import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import BodyText from "../constants/BodyText";
import Rating from "../constants/Rating";

let TouchableCmp = TouchableOpacity;

if (Platform.OS === "android" && Platform.Version >= 21) {
  TouchableCmp = TouchableNativeFeedback;
}

const Detail = (props) => {
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={props.imageUrl} style={styles.image} />
        <View style={styles.header}>
          <Text style={styles.title}>{props.title.toUpperCase()}</Text>
        </View>
        <View style={styles.details}>
          <Rating rating={props.rating} size={20} />
          <TouchableCmp onPress={props.onSelect}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <MaterialIcons name="location-on" size={20} color="#B22222" />
              <BodyText style={styles.location}>Locate on Map</BodyText>
            </View>
          </TouchableCmp>
          <BodyText style={styles.text}>{props.description}</BodyText>
        </View>
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
    //marginBottom: 20,
  },
  header: {
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    backgroundColor: "rgba(6, 115, 44, 0.5)",
  },
  details: {
    padding: 20,
  },
  text: {
    fontSize: 16,
    paddingTop: 10,
    borderTopColor: "#A9A9A9",
    borderTopWidth: 1,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
  location: {
    color: "grey",
    fontSize: 15,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

export default Detail;
