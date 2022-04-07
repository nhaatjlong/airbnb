import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import getCenter from "geolib/es/getCenter";
function MapBox({ dataSearch }) {
  const listCoor = dataSearch.map((loca) => ({
    longitude: loca.long,
    latitude: loca.lat,
  }));
  const center = getCenter(listCoor);

  const [viewState, setViewState] = React.useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 12,
  });
  const [selectedLocation, setSelectedLocation] = useState({});
  console.log(selectedLocation);
  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width: 500, height: 1000, borderRadius: 10 }}
      mapStyle="mapbox://styles/longdndtu/cl1otosbp000k14nzhk94fs7d"
      mapboxAccessToken={process.env.mapbox_key}
    >
      {dataSearch.map((location) => (
        <div key={location.long}>
          <Marker
            key={location.long}
            longitude={location.long}
            latitude={location.lat}
          >
            <p
              role="img"
              className="cursor-pointer text-2xl animate-bounce"
              onMouseEnter={() => setSelectedLocation(location)}
              onMouseLeave={() => setSelectedLocation({})}
              aria-label="push pin"
            >
              🚩
            </p>
          </Marker>
          {location.long === selectedLocation.long ? (
            <Popup latitude={location.lat} longitude={location.long}>
              {location.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
}
const MapBoxMemo = React.memo(MapBox);
export default MapBoxMemo;
