import React from "react";
import { Link } from "gatsby";
const Header = () => {
  const ListLink = (props) => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  );
  return (
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none` }}>
        <h3 style={{ display: `inline` }}>Chris V. Sanchez </h3>
      </Link>
      <ul style={{ float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
  );
};
export default Header;
