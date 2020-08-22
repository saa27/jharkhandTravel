import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ArticleScreen from "../screens/ArticleScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import Colors from "../constants/Colors";

const TravelNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    Article: ArticleScreen,
  },
  {
    defaultNavigationOptions: {},
  }
);

export default createAppContainer(TravelNavigator);
