import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Rating = (props) => {
  const filledStars = Math.floor(props.rating / 1.0);
  const maxStars = Array(5 - filledStars).fill("staro");
  const r = [...Array(filledStars).fill("star"), ...maxStars];

  return (
    <View style={styles.rating}>
      <Text style={styles.ratingNumber}>{props.rating}</Text>
      {r.map((type, index) => {
        return <AntDesign key={index} name={type} size={20} color="#e1ad01" />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  ratingNumber: { fontFamily: "open-sans", fontSize: 15, marginRight: 10 },
  rating: {
    flexDirection: "row",
    /* alignItems: "center",
    justifyContent: "center", */
    marginVertical: 4,
    marginBottom: 10
  },
});

export default Rating;
