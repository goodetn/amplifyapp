import React from "react";
import Map from "../components/map";

type ContactTypes = {
  name: string;
  email: string;
  site: string;
}

export type LatLngType = {
  lat: number;
  lng: number;
}

export default function Contact(props: ContactTypes) {
  const center: LatLngType = {
    lat: -3.745,
    lng: -38.523
  };

  return (
    <div>
      <address>
        Contact {props.name} via{" "}
        <a data-testid="email" href={"mailto:" + props.email}>
          email
        </a>
        or on their <a data-testid="site" href={props.site}>
          website
        </a>.
      </address>
      <Map center={center} />
    </div>
  );
}