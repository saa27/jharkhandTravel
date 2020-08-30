import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Platform,
  TouchableNativeFeedback,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import BodyText from "./BodyText";

let TouchableCmp = TouchableOpacity;

if (Platform.OS === "android" && Platform.Version >= 21) {
  TouchableCmp = TouchableNativeFeedback;
}

const PlacesGrid = (props) => {
  return (
    <View style={{ padding: 10 }}>
      <View style={styles.card}>
        <TouchableCmp>
          <View>
            <View style={styles.imageContainer}>
              <Image source={props.imageUrl} style={styles.img} />
            </View>
            <View style={styles.details}>
              <BodyText style={styles.title}>{props.title}</BodyText>
            </View>
            <View style={styles.location}>
              <TouchableCmp>
                <Entypo
                  name="location-pin"
                  size={30}
                  color="maroon"
                />
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
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 18,
    marginTop: 4,
    fontFamily: "open-sans-bold",
  },
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
    paddingHorizontal: 20
  },
});

export default PlacesGrid;
