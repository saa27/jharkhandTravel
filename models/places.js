class Place {
  constructor(
    id,
    categoryIds,
    title,
    imageUrl,
    description,
    location,
    lat,
    long,
    rating
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.location = location;
    this.lat = lat;
    this.long = long;
    this.rating = rating;
  }
}

export default Place;
