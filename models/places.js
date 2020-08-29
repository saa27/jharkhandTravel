class Place {
  constructor(id, categoryIds, title, imageUrl, lat, lang) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.lat = lat;
    this.lang = lang;
  }
}

export default Place;
