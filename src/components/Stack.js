import React from "react";
import { Container, Row, Col } from "react-grid-system";
export default function Stack() {
  return (
    <div>
      <h1>STACK</h1>

      <table style={{ overflowX: "auto", border: "0" }}>
        <tr>
          <th>Languages</th>
          <th>Frontend</th>
          <th>Backend</th>
          <th>Database</th>
        </tr>
        <tr>
          <td>JavaScript</td>
          <td>React</td>
          <td>Rails</td>
          <td>SQL</td>
        </tr>
        <tr>
          <td>Ruby</td>
          <td></td>
          <td></td>
          <td>SQLite</td>
        </tr>
        <tr>
          <td>HTML</td>
          <td></td>
          <td></td>
          <td>PostgreSQL</td>
        </tr>
        <tr>
          <td>CSS</td>
        </tr>
      </table>
    </div>
  );
}
