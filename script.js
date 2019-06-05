function getCompleteQuery(name,latLon) {
  name = name.split(' ').join(',');
  var API_KEY = 'AI******************************';
  var url = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
  var query = url + '?query=' + name + '&location=' +  latLon + '&radius=500&key=' + API_KEY;
  return query;
}

function get_placeID(name,latlong) {
  var query = getCompleteQuery(name,latlong);
  var response = UrlFetchApp.fetch(query);
  var obj = response.getContentText();
  var json = JSON.parse(obj).results[0];
  return [json.place_id]

}
