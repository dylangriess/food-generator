import React from "react";

function localshops() {
  location_response = requests.get(
    "https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY"
  );
  location = location_response.json();
  latitude = location["location"]["lat"];
  longitude = location["location"]["lng"];
  maps_response = requests.get(
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={latitude},{longitude}&radius=5000&type=pizza&key=YOUR_API_KEY"
  );
  pizza_shops = maps_response.json()["results"];

  print(shop["name"]);
  print(shop["vicinity"]);
  print();
  return <div>localshops</div>;
}

export default localshops;
