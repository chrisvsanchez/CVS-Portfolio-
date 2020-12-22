import React from "react";
import Layout from "./layout";

export default function Contact() {
  return (
    <Layout>
      <div style={{ height: "90vh", width: "90vw" }}>
        <h1>I'd love to talk! Email me at the address below</h1>
        <p>
          <a href="mailto:me@example.com">me@example.com</a>
        </p>
      </div>
    </Layout>
  );
}
