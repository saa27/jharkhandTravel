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
    "40 km from Ranchi",
    23.1463,
    85.4672,
    4.5
  ),
  new Place(
    "p2",
    "c1",
    "Hundru Falls",
    require("../assets/hundru-falls.jpg"),
    "Hundru Falls is about 45 kms away from Ranchi town, located on the Ranchi Purulia Highway. The sight of the River Swarnarekha taking a spectacular leap from a height of 320 feet instantly wears out your fatigue. At the base of the falls the spirit of the water however mellows, gathering into a frothy pool where the visitors may take a rejuvenating dip. The place is also popular as one of the most admired trekking destination in the state. The wrath of Hundru is at its peak in the monsoons, when its waters unbridled and unchallenged, lash against the rocks. In summer, however it proves to be a cool recluse for picnic lovers",
    "45 km from Ranchi",
    23.4498,
    85.6686,
    5
  ),
  new Place(
    "p3",
    "c1",
    "Bhatinda Falls",
    require("../assets/bhatinda-waterfall.jpg"),
    "Here, the wild torrents of the locally flowing rivulet Jamunia, gurgles down in playful mirth and mischief across the rocks that have the natural terrain of steps. It tumbles down from fairly a low height of about 10 metres. However, the beauty of the waterfalls lies in its cascading effect, over the rocks. Located barely 15 kms from the town, site is ideal for picnic revellers, who throng here during Christmas and New Year. However, it is also a retreat for those wanting to rejuvenate themselves from the mundane humdrums in solitude. It can be reached from the Dhanbad-Bokaro Road (NH-32) about 25 kms from the railway station. The road goes 12 kms inwards from Putki More, taking you to the site.",
    "145 km from Ranchi",
    23.712025,
    86.331104,
    4
  ),
  new Place(
    "p4",
    "c1",
    "Garga Dam",
    require("../assets/garga-dam.jpg"),
    "Garga Dam, Bokaro Steel City Overview. Garga is a tributary of the Damodar River that flows on the southern parts of the city of Bokaro. A dam was constructed on it in the 1950s to make it the first such river valley project in the country.",
    "110 km from Ranchi",
    23.6319,
    86.0695,
    3.9
  ),
  new Place(
    "p5",
    "c1",
    "Jonha Falls",
    require("../assets/jonha-falls.png"),
    "About 45 kms away from Ranchi situated on the Ranchi-Purulia Highway, is the Jonha Falls, named after the local village. It is also known as the Gautamdhara, as there is a temple dedicated to Lord Budha, in its vicinity. The rocks here seem to beckon you down its natural gradient to join the frothy gurgling water of the River. The fall appears relatively more somber, enhancing the picturesque charm of the spot.",
    "40 km from Ranchi",
    23.343757,
    85.610864,
    4.4
  ),
  new Place(
    "p6",
    "c2",
    "Satsang Ashram",
    require("../assets/satsang-ashram.jpg"),
    "The ashram in Deoghar is a holy place for the followers of Sri Sri Thakur Anukul Chandra. A visit to the Ashram would give one a feel of freedom, peace and progress.",
    "280 km from Ranchi",
    24.4781,
    86.6767,
    5
  ),
  new Place(
    "p7",
    "c2",
    "Rikhia Ashram",
    require("../assets/rikhia-ashram.jpg"),
    "Rikhia Yoga Ashram (Rikhiapeeth) is situated in a tiny, remote and rural village of Rikhia panchayat, 12 kms from the renowned temple town of Deoghar, also known as Baba BaidyanathDham, in the state of Jharkhand. Undoubtedly the strong spiritual presence of the rishis, enlightened sages, at Rikhia in the past has percolated down to the present day as the place is pure, serene and radiates peace. Its location abounds in divine vibrations as it is the tapobhumi, place of intense spiritual practices and austerities of Swami Satyananda where he performed the Panchagni Vidya, the five fires worship, and other long and arduous Vedic sadhanas or spiritual practices.\n\nRikhia is eternally blessed, as for twenty years it was the abode and tapobhumi of the realized sage and visionary Swami Satyananda who embodied the wisdom, tapasya, austerity, and enlightened understanding of the ancient rishis, and great seers. Paramahansa Satyananda revived the glory of the divine heritage of ancient times by bringing the teachings into a modern context through the medium of Rikhiapeeth, which has developed into a dynamic spiritual epicentre where the cardinal teachings of Swami Sivananda “Serve, Love and Give” are practiced and lived.",
    "345 km from Ranchi",
    24.537495,
    86.735767,
    5
  ),
  new Place(
    "p8",
    "c3",
    "Deuridih rural Tourism",
    require("../assets/deuridih-rural.jpg"),
    "Located in the Kharsawan block, 54 kms from Jamshedpur, the village is a part of the silk hub of the state. Jharkhand today, is the highest producer of Tassar silk hub of the state. Jharkhand today, is the highest producer of Tassar silk in the country. There are rows of Arjun and Asan plants, where the silk worms are reared. About 8 kms from the village is the Govt run reeling and spinning training institute of silk. About 30 women belonging from the ho community are being trained in the art, The Tassar-cocoon pilot project is also close by, in between Deuridih and Amda. To add to the above, the village is also trying to revive the Kharsawan form of Chhau, from extinction.",
    "150 km from Ranchi",
    24.2397,
    86.3351,
    5
  ),
  new Place(
    "p9",
    "c3",
    "McCluskieGanj",
    require("../assets/mccluskie.jpg"),
    "On the Chhotanagpur Plateau, barely 60 kms from Ranchi, lies the idyllic hamlet of Mc Cluskieganj. Once a bastion of the Anglo-Indian community, the place is known as lapra or Ganj among the residents. It is at an altitude of 450 m. the weather is ideal for a brief getaway, in this hamlet, particularly in the sweltering summers. Even in the peak of summer, the mercury seldom crosses 37 degrees Celsius. The humidity too is very low.",
    "64 km from Ranchi",
    23.64,
    84.94,
    5
  ),
  new Place(
    "p10",
    "c3",
    "Amadubi",
    require("../assets/amadubi.jpg"),
    "Yes, take the not so treaded path, and discover priceless jewels in a beautiful corner of a state known for its natural and cultural wealth. Amadubi not just another village in the heartland of Jharkhand’s vast rural areas- It’s a treasure house that any visitor will never forget. The place is now a focus point in the Tourist Map of the Department of Tourism, Governmnet of Jharkhand.",
    "64 km from Ranchi",
    22.5577,
    86.5579,
    5
  ),
  new Place(
    "p11",
    "c4",
    "Palamu Fort",
    require("../assets/palamau-fort.jpg"),
    "One of the most important archaeological monuments of the state from the Mughal period, it is located at about 45 kms south-east of Medini Nagar on the confluence of Koel and Auranga rivers amidst dense forests. The fort is about 5 kms west of Latehar district headquarters within the core area of Betla tiger reserves.\n\nThe fort is atop a hillock and called the PuranaQuila. Believed to be constructed in 1562, it is within an area of 5 sq. kms. The construction of the fort is originally ascribed to the Rakshaul ruler Raja Mansingh of the 16th century. However, some believe that it come up during the reign of Raja Medini Rai of Chero dynasty. The most impressive structures of the fort are the three doubles storied gates leading to the fort, which is in Nagpuri style. The folklores of Palamau are replete with references of the fort where comparisons have been drawn with its contemporary fort of Rohtasgarh. About 2 kms away from the PuranaQuila is an incomplete structure by the name of NayaQuila. Its walls bear inscriptions in Persian and Sanskrit from where we learn that it was being built by Medini Rai for his son Pratap Rai in 1634.",
    "170 km from Ranchi",
    23.8949,
    84.2297,
    5
  ),
  new Place(
    "p12",
    "c4",
    "Navratn Garh",
    require("../assets/navratn_garh.jpg"),
    "Navratangarh (Doisagarh) was one of the capitals of the Nagvanshi dynasty, who ruled parts of what is now the state of Jharkhand, India. It is located in Sisai block of Gumla district. Nagvanshi king Bairisal shifted his capital from Khukhragarh to Navratangarh. The fort was constructed by King Durjan Sal.",
    "74 km from Ranchi",
    23.10993,
    84.78367,
    5
  ),
  new Place(
    "p13",
    "c4",
    "Chalet Fort",
    require("../assets/chalet-fort.jpg"),
    "Chalet House Netarhat :-  Chalet is a French word which means a wooden dwelling .This is  a historical building of Netarhat  is made up of logs of wood . it was established during the period of Sir Edward Gate, L.G of Bihar and Orissa in early 20th Century. initially, it was used as summer exodus by British Officer for discussion with local influential village chiefs.\n\n Now it is being used as the camp office of D.C Latehar.",
    "164 km from Ranchi",
    23.4854,
    84.2648,
    5
  ),
  new Place(
    "p14",
    "c5",
    "Jagannath Temple",
    require("../assets/jagannath-temple.jpg"),
    "Jagannath Temple in the Bokaro Steel City is a popular tourist attraction, which looks exactly like the Jagannath Temple in Puri, Orrisa. The temple has been recently constructed by the Bokaro Steel Plant Management and has become a prominent place, where devotees come to pray to Lord Jagannath.",
    "120 km from Ranchi",
    23.3169,
    85.2816,
    5
  ),
  new Place(
    "p15",
    "c5",
    "Deori Mandir",
    require("../assets/deori-mandir.jpg"),
    "A temple of SolhaBhuji(16 arms) Goddess Durga, it is located on the right side of Tata-Ranchi Highway (NH-33), at 60 kms from the capital city Ranchi and 3 kms from Tamar. It is the only temple in the Jharkhand where the Pujas are done by the Pahans (Tribal Priests) along with the conventional Brahmins. The original temple is in stone dating back to about 10- 11th century AD. The temple commands unflinching faith from its devotees, from far and wide. The icon of the temple with 16 arms is unique considering that the commonly worshiped form of Goddess Durga is with eight arms. ",
    "60 km from Ranchi",
    23.046313,
    85.682813,
    5
  ),
  new Place(
    "p16",
    "c5",
    "Maa Chhinmastika Devi Mandir",
    require("../assets/chhin.jpg"),
    "About 65 kms from Ranchi, in Ramgarh district, Rajrappa is a famous temple complex. The presiding deity of the main temple, at the confluence of rivers Damodar and Bhera, is Maa Chhinnmastika.\n\nInside the old temple, the headless statue of the goddess stands over the bodies of Kamdev and Rati on a lotus bed. A large number of devotees throng the place everyday.",
    "65 km from Ranchi",
    23.6319,
    85.7098,
    5
  ),
  new Place(
    "p17",
    "c5",
    "Parasnath",
    require("../assets/Parasnath.jpg"),
    "Parasnath, the temple town is the highest hill in the Jharkhand, at an elevation of 4480 ft and 35 km from Giridih town. The Parasnath temple is considered to be the most important and sanctified holy places of Jains. The temple complex is not prejudiced, for it welcomes all the sects of the Jains. It is 9 kms uphill from the base which makes it an 18 kms round trip, with two temple and 24 shrines.\n\nMost of the temples are dedicated to Parsvanath who meditated and attained salvation on Parasnath Hill that looms over Shikharji town. The oldest of the temples in Shikharji is the 300 Years old Bageecha Temple (Garden Temple).  The delicately carved stone sculpture of Parasnath points out that the deity was restored to the temple after being sealed in a wall of the nearby Tera Panthi Shrine for many decades. Most of the shrines in Shikharji are spic and span with hordes of pilgrims from all across the globes.",
    "150 km from Ranchi",
    23.9625,
    86.1328,
    5
  ),
  new Place(
    "p18",
    "c6",
    "Parsailing Training",
    require("../assets/parasailing.jpg"),
    "Giridih offers a remarkable space for an exciting aero sport parasailing, in which you will be sailing in the air up to an altitude of 300 feet through a half cut orange shaped parachute called 'Parasail' that is dragged through a rope linked to a jeep on land or by a motorboat above water. You will be having a thrilling and exciting experience at this height in the absence of any engine, sound or pilot",
    "155 km from Ranchi",
    24.1913,
    86.2996,
    5
  ),
  new Place(
    "p19",
    "c6",
    "Water Sports, Giridih",
    require("../assets/watersports-giridih.jpg"),
    "Around 8 km North-East of Giridih, this water reservoir is among the best sports providing you water related adventure sports and bird-watching activities. You can get an amazing panoramic view of Khandoli site from a watch tower and 600 feet high hillock. You can get the adventure of elephant and Camel Safari and many other amusement facilities like Boating, Rock-climbing, Parasailing and Kayaking.",
    "155 km from Ranchi",
    24.1913,
    86.2996,
    5
  ),
  new Place(
    "p20",
    "c7",
    "Kiriburu",
    require("../assets/Kiriburu.jpg"),
    "Saranda is Asia’s largest Sal Forest and Jharkhand’s Pride. An un-spoilt world, where nature rules supreme, it is the home of the endangered flying lizard, In the local Ho language it means “The land of seven hundred hills” and is located in the West Singhbhum District.\n\nSaranda is full of exciting and colourful flora and fauna. It is khown and famous for its majestic Sal trees. Besides Sal, which is the principal and dominating tree species a large number of trees, herbs and shrub décor this beautiful forest. Right from the mammals to birds and reptiles, Saranda is a golden treasure of wild life. However, its majestic elephants are known all over the world, the magical sunrise and sun set of Kiriburu in the hills of Saranda is a spectacular sight.",
    "257 km from Ranchi",
    22.1082,
    85.2904,
    5
  ),
  new Place(
    "p21",
    "c7",
    "Saranda Forest",
    require("../assets/saranda.jpg"),
    "Saranda, the largest Sal forest in Asia, is located 122 kms from Jamshedpur. Famed for its multifarious flora and fauna, it has also been in the limelight due to its rich mineral reserve. Saranda, meaning ‘the land of seven hundred hills’ is spread over around 900 sq. kms and has mesmerised and fascinated nature-enthusiasts for decades. The spectacular sunset, here against the backdrop of tall dark silhouettes of Sal, would simply make you gaze wide eyed as the sky dons the hues of crimson, orange and grey, before the flaming ball of fire calls it off for the day.",
    "225 km from Ranchi",
    24.0818,
    86.7731,
    5
  ),
  new Place(
    "p22",
    "c7",
    "Betla National Park",
    require("../assets/betla-2.jpg"),
    "One of India’s earliest tiger reserves (1974), Betla features luxuriant tropical forest cover and a rich variety of fauna.\n\nThe Betla National Park, was first established as a sanctuary and later upgraded to it’s present status. Average elevation is about 1000 feet and though the park is open throughout the year the best time to visit is between November to March. Spread over 250 sq. kms., the park is covered with good roads cris-crossing each other, to enables the motorist to have a closer view of the wild life in dense forests.",
    "156 km from Ranchi",
    23.8856,
    84.1924,
    5
  ),
  new Place(
    "p23",
    "c7",
    "Magnolia Sunset Point, Netarhat",
    require("../assets/netarhaat.jpg"),
    "Adding to the ambience of the place is the poignant love story of Magnolia, a young British girl who fell desperately in love with a tribal shepherd boy. A granite plaque narrates how Magnolia's love for the poor shepherd drew the ridicule of the girl's English community. Realising that her love would remain unfulfilled she chose to end her life by diving into the alley along with her horse. Magnolia Point is located around 10 KM from the town's main bus stand.\n\nIdeal for picnics, fishing and bird watching is the Netarhat Dam, located 2 KM from the bus stand. The dam has been providing water supply to the region since the time of the British Raj.",
    "160 km from Ranchi",
    23.474154,
    84.279171,
    5
  ),
  
];
