import React from "react";
import Map from "../components/map";

export type LatLngType = {
  lat: number;
  lng: number;
}

type ContactTypes = {
  name: string;
  email: string;
  site: string;
  center: LatLngType;
}

export default function Contact(props: ContactTypes) {
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
      <Map center={props.center} />
    </div>
  );
}
