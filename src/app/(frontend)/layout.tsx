import React from "react";
import "./styles.css";

export const metadata = {
  description: "Testing Payload in a t3 App",
  title: "T3 Payload",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
