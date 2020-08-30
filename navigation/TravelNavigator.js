import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import TravelPlacesScreen from "../screens/TravelPlacesScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import Colors from "../constants/Colors";

const TravelNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    TravelPlaces: TravelPlacesScreen,
  },
  {
    defaultNavigationOptions: {},
  }
);

export default createAppContainer(TravelNavigator);
