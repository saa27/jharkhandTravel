import Category from "../models/category";
import Place from "../models/places";

export const CATEGORIES = [
  new Category(
    "c2",
    "SPIRITUAL TOURISM",
    require("../assets/Spiritual-Tourism.jpg")
  ),
  new Category(
    "c1",
    "WATERFALLS & DAMS",
    require("../assets/bhatindaFalls.jpg")
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
  new Category("c6", "ADVENTURE TOURISM", require("../assets/zipline.jpg")),
  new Category("c7", "ECO TOURISM", require("../assets/betla.jpg")),
];

export const PLACES = [
  new Place(
    "p1",
    ["c1", "c2"],
    "Dassam Falls",
    require("../assets/Dassam_falls.jpg"),
    "About 45 kms from Ranchi, enroute Jamshedpur, a motorable road branching off from NH 33, turns right towards Taimara village. It is here that the Kanchi River, a wild tributary of River Swarnarekha tumbles down from a height of 144 feet in full glory, to say the original name of the falls Da-Song, believed to be given during the British Raj, probably stems from the pristine beauty and the reverberations of the water at the falls. The ideal time to visit the place is between October to January and get rejuvenated in the lap of nature. \n It can be reached through cars or private vehicles.",
    "30 km from ranchi",
    "45",
    "50"
  ),
  new Place(
    "p2",
    "c1",
    "Hundru Falls",
    require("../assets/hundru-falls.jpg"),
    "hwloo",
    "20 km from ranchi",
    "45",
    "50"
  ),
];
