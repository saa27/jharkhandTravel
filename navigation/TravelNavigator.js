import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import TravelPlacesScreen from "../screens/TravelPlacesScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import Colors from "../constants/Colors";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import MapScreen from "../screens/MapScreen";

const TravelNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    TravelPlaces: TravelPlacesScreen,
    PlaceDetail: PlaceDetailScreen,
    Map: MapScreen,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(TravelNavigator);
