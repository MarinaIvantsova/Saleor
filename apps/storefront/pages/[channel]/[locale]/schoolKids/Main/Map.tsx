import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ ...props }) => <div>{}</div>;

export default function Map() {
  const defaultProps = {
    center: {
      lat: 59.955413,
      lng: 30.337844,
    },
    zoom: 11,
  };

  return (
    <div className="w-full h-screen h-[610px] md:h-[438px] xs:h-[260px]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
