class Place {
  constructor(
    id,
    categoryIds,
    title,
    imageUrl,
    description,
    location,
    lat,
    lang,
    rating
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.location = location;
    this.lat = lat;
    this.lang = lang;
    this.rating = rating;
  }
}

export default Place;
