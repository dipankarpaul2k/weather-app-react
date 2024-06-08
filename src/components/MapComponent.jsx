import { useEffect, useState } from "react";
// import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import useWeatherContext from "../contexts/useWeatherContext";
import { placeFeatureCodes } from "../utils/constants";

export default function MapComponent() {
  const { cityDetails } = useWeatherContext();

  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [featureCodeMeaning, setFeatureCodeMeaning] = useState(null);

  useEffect(() => {
    if (cityDetails) {
      setLat(cityDetails.latitude);
      setLon(cityDetails.longitude);

      const codeMeaning = placeFeatureCodes.find(
        (item) => item.code === cityDetails.feature_code
      );
      setFeatureCodeMeaning(codeMeaning.meaning);
    }
  }, [cityDetails]);

  if (!cityDetails) {
    return null;
  }

  return (
    <div className="py-4">
      <h3 className="text-xl font-bold mb-4">City Information</h3>
      <div className="grid grid-cols-1 gap-y-4">
        {/* location info */}
        <div className="">
          <div className="stats stats-horizontal shadow w-full border">
            {/* city */}
            <div className="stat">
              <div className="stat-title">City</div>
              <div className="stat-value">
                <span>{cityDetails.name}, </span>
                <span className="text-sm font-medium">
                  {cityDetails.feature_code}
                </span>
              </div>
              <div className="stat-desc">
                <span>
                  {cityDetails.feature_code}: {featureCodeMeaning}
                </span>
              </div>
            </div>

            {/* state */}
            {cityDetails.admin1 && (
              <div className="stat">
                <div className="stat-title">State</div>
                <div className="stat-value">{cityDetails.admin1}</div>
              </div>
            )}

            {/* country */}
            <div className="stat">
              <div className="stat-title">Country</div>
              <div className="stat-value">
                <span>{cityDetails.country}, </span>
                <div className="avatar">
                  <div className="w-4 rounded-full">
                    <img
                      src={`https://hatscripts.github.io/circle-flags/flags/${cityDetails.country_code.toLowerCase()}.svg`}
                      alt="Country Flag Image"
                    />
                  </div>
                </div>
              </div>
              <div className="stat-desc">
                <span>Country Code: {cityDetails.country_code}</span>
              </div>
            </div>

            <div className="stat">
              <div className="stat-title">Time Zone</div>
              <div className="stat-value">{cityDetails.timezone}</div>
            </div>

            <div className="stat">
              <div className="stat-title">Latitude</div>
              <div className="stat-value">{cityDetails.latitude}</div>
            </div>

            <div className="stat">
              <div className="stat-title">Longitude</div>
              <div className="stat-value">{cityDetails.longitude}</div>
            </div>
          </div>
        </div>

        {/* map */}
        <div className="w-full min-h-[400px] px-4 sm:px-0">
          {lat && lon && (
            <div className="h-full w-full rounded-xl overflow-hidden">
              <MapContainer
                className="h-full w-full"
                center={[lat, lon]}
                zoom={10}
                scrollWheelZoom={true} // Enable scroll wheel zoom
                touchZoom={false} // Disable touch zooming
                dragging={false} // Disable map dragging
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[lat, lon]}>
                  <Popup>
                    <div>
                      <p>
                        <strong>City: </strong>
                        {cityDetails.name}
                      </p>
                      {cityDetails.admin1 && (
                        <p>
                          <strong>State: </strong>
                          {cityDetails.admin1}
                        </p>
                      )}
                      <p>
                        <strong>Country: </strong>
                        {cityDetails.country}
                      </p>
                      <p>
                        <strong>Time Zone: </strong>
                        {cityDetails.timezone}
                      </p>
                      <p>
                        <strong>Latitude: </strong>
                        {cityDetails.latitude}
                      </p>
                      <p>
                        <strong>Longitude: </strong>
                        {cityDetails.longitude}
                      </p>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
