import Image from "next/image";
import React from "react";

import "./styles.css";

export default async function HomePage() {
  return (
    <div className="home">
      <div className="content">
        <Image
          alt="Payload Logo"
          height={65}
          src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
          width={65}
        />

        <h1>{"Let's give this another try!"}</h1>
      </div>
    </div>
  );
}
