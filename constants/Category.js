import React from "react";
import {
  Animated,
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet
} from "react-native";

import BodyText from "./BodyText";

const Category = (props) => {
  return (
    <Animated.View style={{ ...styles.dim, ...props.style }}>
      <TouchableOpacity onPress={props.onSelect}>
        <ImageBackground
          source={props.imageUrl}
          style={styles.bgImage}
          imageStyle={{ opacity: 0.9 }}
        >
          <View style={styles.borderStyle}>
            <View style={styles.border}>
              <BodyText style={styles.text}>{props.title}</BodyText>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </Animated.View>
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
});

export default Category;
