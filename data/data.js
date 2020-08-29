import Category from "../models/category";
import Place from "../models/places";

export const CATEGORIES = [
  new Category(
    "c1",
    "WATERFALLS & DAMS",
    require("../assets/bhatindaFalls.jpg")
  ),
  new Category(
    "c2",
    "SPIRITUAL TOURISM",
    require("../assets/Spiritual-Tourism.jpg")
  ),
  new Category("c3", "RURAL TOURISM", require("../assets/rural-tourism.jpg")),
  new Category(
    "c4",
    "HERITAGE TOURISM",
    require("../assets/Heritage_Tourism.jpg")
  ),
  new Category(
    "c5",
    "RELIGIOUS TOURISM",
    require("../assets/rajrappa-mandir.jpg")
  ),
  new Category(
    "c6",
    "ADVENTURE TOURISM",
    require("../assets/zipline.jpg")
  ),
  new Category(
    "c7",
    "ECO TOURISM",
    require("../assets/betla.jpg")
  ),
];

export const PLACES = [
  new Place(
    "p1",
    ["c1", "c2"],
    "Jonha Falls",
    require("../assets/Dassam_falls.jpg"),
    "45",
    "50"
  ),
  new Place(
    "p1",
    "c1",
    "Jonha Falls",
    require("../assets/Dassam_falls.jpg"),
    "45",
    "50"
  ),
];
