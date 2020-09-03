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
    "c1",
    "Dassam Falls",
    require("../assets/Dassam_falls.jpg"),
    " About 45 kms from Ranchi, enroute Jamshedpur, a motorable road branching off from NH 33, turns right towards Taimara village.\n\n It is here that the Kanchi River, a wild tributary of River Swarnarekha tumbles down from a height of 144 feet in full glory, to say the original name of the falls Da-Song, believed to be given during the British Raj, probably stems from the pristine beauty and the reverberations of the water at the falls.\n\n The ideal time to visit the place is between October to January and get rejuvenated in the lap of nature. \n\n It can be reached through cars or private vehicles.",
    "40 km from ranchi",
    "45",
    "50",
    4.5
  ),
  new Place(
    "p2",
    "c1",
    "Hundru Falls",
    require("../assets/hundru-falls.jpg"),
    "Hundru Falls is about 45 kms away from Ranchi town, located on the Ranchi Purulia Highway. The sight of the River Swarnarekha taking a spectacular leap from a height of 320 feet instantly wears out your fatigue. At the base of the falls the spirit of the water however mellows, gathering into a frothy pool where the visitors may take a rejuvenating dip. The place is also popular as one of the most admired trekking destination in the state. The wrath of Hundru is at its peak in the monsoons, when its waters unbridled and unchallenged, lash against the rocks. In summer, however it proves to be a cool recluse for picnic lovers",
    "45 km from ranchi",
    "45",
    "50",
    5
  ),
  new Place(
    "p3",
    "c1",
    "Bhatinda Falls",
    require("../assets/bhatindaFalls.jpg"),
    "Here, the wild torrents of the locally flowing rivulet Jamunia, gurgles down in playful mirth and mischief across the rocks that have the natural terrain of steps. It tumbles down from fairly a low height of about 10 metres. However, the beauty of the waterfalls lies in its cascading effect, over the rocks. Located barely 15 kms from the town, site is ideal for picnic revellers, who throng here during Christmas and New Year. However, it is also a retreat for those wanting to rejuvenate themselves from the mundane humdrums in solitude. It can be reached from the Dhanbad-Bokaro Road (NH-32) about 25 kms from the railway station. The road goes 12 kms inwards from Putki More, taking you to the site.",
    "145 km from ranchi",
    "45",
    "50",
    5
  ),
  new Place(
    "p4",
    "c1",
    "Garga Dam",
    require("../assets/garga-dam.jpg"),
    "Garga Dam, Bokaro Steel City Overview. Garga is a tributary of the Damodar River that flows on the southern parts of the city of Bokaro. A dam was constructed on it in the 1950s to make it the first such river valley project in the country.",
    "110 km from ranchi",
    "45",
    "50",
    5
  ),
  new Place(
    "p5",
    "c1",
    "Jonha Falls",
    require("../assets/jonha-falls.png"),
    "About 45 kms away from Ranchi situated on the Ranchi-Purulia Highway, is the Jonha Falls, named after the local village. It is also known as the Gautamdhara, as there is a temple dedicated to Lord Budha, in its vicinity. The rocks here seem to beckon you down its natural gradient to join the frothy gurgling water of the River. The fall appears relatively more somber, enhancing the picturesque charm of the spot.",
    "40 km from ranchi",
    "45",
    "50",
    5
  ),
  new Place(
    "p6",
    "c2",
    "Satsang Ashram",
    require("../assets/satsang-ashram.jpg"),
    "The ashram in Deoghar is a holy place for the followers of Sri Sri Thakur Anukul Chandra. A visit to the Ashram would give one a feel of freedom, peace and progress.",
    "280 km from ranchi",
    "45",
    "50",
    5
  ),
  new Place(
    "p7",
    "c2",
    "Rikhia Ashram",
    require("../assets/rikhia-ashram.jpg"),
    "Rikhia Yoga Ashram (Rikhiapeeth) is situated in a tiny, remote and rural village of Rikhia panchayat, 12 kms from the renowned temple town of Deoghar, also known as Baba BaidyanathDham, in the state of Jharkhand. Undoubtedly the strong spiritual presence of the rishis, enlightened sages, at Rikhia in the past has percolated down to the present day as the place is pure, serene and radiates peace. Its location abounds in divine vibrations as it is the tapobhumi, place of intense spiritual practices and austerities of Swami Satyananda where he performed the Panchagni Vidya, the five fires worship, and other long and arduous Vedic sadhanas or spiritual practices.\n\nRikhia is eternally blessed, as for twenty years it was the abode and tapobhumi of the realized sage and visionary Swami Satyananda who embodied the wisdom, tapasya, austerity, and enlightened understanding of the ancient rishis, and great seers. Paramahansa Satyananda revived the glory of the divine heritage of ancient times by bringing the teachings into a modern context through the medium of Rikhiapeeth, which has developed into a dynamic spiritual epicentre where the cardinal teachings of Swami Sivananda “Serve, Love and Give” are practiced and lived.",
    "345 km from ranchi",
    "45",
    "50",
    5
  ),
  new Place(
    "p8",
    "c3",
    "Deuridih rural Tourism",
    require("../assets/deuridih-rural.jpg"),
    "Located in the Kharsawan block, 54 kms from Jamshedpur, the village is a part of the silk hub of the state. Jharkhand today, is the highest producer of Tassar silk hub of the state. Jharkhand today, is the highest producer of Tassar silk in the country. There are rows of Arjun and Asan plants, where the silk worms are reared. About 8 kms from the village is the Govt run reeling and spinning training institute of silk. About 30 women belonging from the ho community are being trained in the art, The Tassar-cocoon pilot project is also close by, in between Deuridih and Amda. To add to the above, the village is also trying to revive the Kharsawan form of Chhau, from extinction.",
    "150 km from ranchi",
    "45",
    "50",
    5
  ),
  new Place(
    "p9",
    "c3",
    "McCluskieGanj",
    require("../assets/mccluskie.jpg"),
    "On the Chhotanagpur Plateau, barely 60 kms from Ranchi, lies the idyllic hamlet of Mc Cluskieganj. Once a bastion of the Anglo-Indian community, the place is known as lapra or Ganj among the residents. It is at an altitude of 450 m. the weather is ideal for a brief getaway, in this hamlet, particularly in the sweltering summers. Even in the peak of summer, the mercury seldom crosses 37 degrees Celsius. The humidity too is very low.",
    "64 km from ranchi",
    "45",
    "50",
    5
  ),
  new Place(
    "p10",
    "c3",
    "Amadubi",
    require("../assets/amadubi.jpg"),
    "Yes, take the not so treaded path, and discover priceless jewels in a beautiful corner of a state known for its natural and cultural wealth. Amadubi not just another village in the heartland of Jharkhand’s vast rural areas- It’s a treasure house that any visitor will never forget. The place is now a focus point in the Tourist Map of the Department of Tourism, Governmnet of Jharkhand.",
    "64 km from ranchi",
    "45",
    "50",
    5
  ),
];
