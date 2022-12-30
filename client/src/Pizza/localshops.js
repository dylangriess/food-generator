import React from "react";

function localshops() {
  location_response = requests.get(
    "https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY"
  );
  location = location_response.json();
  latitude = location["location"]["lat"];
  longitude = location["location"]["lng"];
  return <div>localshops</div>;
}

export default localshops;
