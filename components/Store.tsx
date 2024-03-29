import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";
import iconMaker from "../img/marker-icon.png";

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

interface props {
  onchange: boolean;
}

const Store = ({ onchange }: props) => {
  const iconMarkup = renderToStaticMarkup(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      className={classes.icon}
    >
      <path d="M21.025 11.05V19q0 .825-.587 1.413-.588.587-1.413.587h-14q-.825 0-1.412-.587-.588-.588-.588-1.413v-7.95q-.575-.525-.887-1.35-.313-.825-.013-1.8l1.05-3.4q.2-.65.713-1.075Q4.4 3 5.075 3h13.9q.675 0 1.175.412.5.413.725 1.088l1.05 3.4q.3.975-.012 1.775-.313.8-.888 1.375Zm-6.8-1.05q.675 0 1.025-.463.35-.462.275-1.037l-.55-3.5h-1.95v3.7q0 .525.35.913.35.387.85.387Zm-4.5 0q.575 0 .938-.387.362-.388.362-.913V5h-1.95l-.55 3.5q-.1.6.263 1.05.362.45.937.45Zm-4.45 0q.45 0 .787-.325.338-.325.413-.825L7.025 5h-1.95l-1 3.35q-.15.5.162 1.075Q4.55 10 5.275 10Zm13.5 0q.725 0 1.05-.575.325-.575.15-1.075L18.925 5h-1.9l.55 3.85q.075.5.413.825.337.325.787.325Z" />
    </svg>
  );

  const customMarkerIcon = divIcon({
    html: iconMarkup,
  });

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
            <Marker position={elem.location} key={i} icon={customMarkerIcon}>
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
