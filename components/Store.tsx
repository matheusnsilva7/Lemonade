import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Data from "./Data";

import classes from "./Store.module.css";
import "leaflet/dist/leaflet.css";

const data: {
  name: string;
  location: [number, number];
}[] = [
  {
    name: "São Paulo",
    location: [-23.5706673, -46.6635181],
  },
  {
    name: "Rio de janeiro",
    location: [-22.8764055, -43.1005146],
  },
  {
    name: "Santa catarina",
    location: [-27.0096093, -48.6143955],
  },
];

const Store = ({
  onchange,
  language,
}: {
  onchange: boolean;
  language: string;
}) => {
  const location: [number, number][] = [
    [-23.5706673, -46.6635181],
    [-22.8764055, -43.1005146],
    [-27.0096093, -48.6143955],
  ];

  return (
    <div
      className={
        onchange
          ? `${classes.pageMap} ${classes.mapAnimation}`
          : classes.pageMap
      }
    >
      <MapContainer
        className={classes.map}
        center={[-23.6912156, -46.6969227]}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='<a href="https://www.openstreetmap.org/copyright">&copy; OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((elem, i: number) => {
          return (
            <Marker position={elem.location} key={i}>
              <Popup className={classes.popup}>
                <h1>{elem.name}</h1>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Store;
