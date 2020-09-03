import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Platform,
  TouchableNativeFeedback,
  Image,
  ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import BodyText from "./BodyText";

let TouchableCmp = TouchableOpacity;

if (Platform.OS === "android" && Platform.Version >= 21) {
  TouchableCmp = TouchableNativeFeedback;
}

const PlacesGrid = (props) => {
  return (
    <View style={{ padding: 10, marginTop: 25 }}>
      <View style={styles.card}>
        <TouchableCmp onPress={props.onSelect}>
          <View>
            <View style={{ ...styles.mealRow, ...styles.header }}>
              <ImageBackground
                source={props.imageUrl}
                style={styles.imageContainer}
              >
                <View style={styles.titleContainer}>
                  <BodyText style={styles.title} numberOfLines={1}>
                    {props.title}
                  </BodyText>
                </View>
              </ImageBackground>
            </View>
            {/* <View style={styles.imageContainer}>
              <Image source={props.imageUrl} style={styles.img} />
            </View>
            <View style={styles.details}>
              <BodyText style={styles.title}>{props.title}</BodyText>
            </View> */}
            <View style={styles.location}>
              <TouchableCmp>
                <MaterialIcons name="location-on" size={30} color="maroon" />
              </TouchableCmp>
              <BodyText>{props.location}</BodyText>
            </View>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row",
  },
  header: {
    height: "80%",
  },
  card: {
    elevation: 10,
    borderRadius: 10,
    height: 280,
    width: "100%",
    overflow: "hidden",
    backgroundColor: "white",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  /* title: {
    fontSize: 18,
    marginTop: 4,
    fontFamily: "open-sans-bold",
  }, */
  details: {
    alignItems: "center",
    height: "20%",
    justifyContent: "center",
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    alignItems: "center",
    height: "20%",
    paddingHorizontal: 20,
    backgroundColor: "rgba(6, 115, 44, 0.6)",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    height: 50,
    justifyContent: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});

export default PlacesGrid;
