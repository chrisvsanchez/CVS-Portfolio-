import React from "react";
import TextLoop from "react-text-loop";
import {
  FaGithub,
  FaMedium,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "gatsby";
import styled from "styled-components";
const OutterDiv = styled.div`
  height: 80vh;
  width: 93vw;
  border: 1px solid red;
  text-align: center;
`;
const CustomBox = styled.div`
  border: 1px solid blue;
  height: 80vh; /* Magic here */
  width: 93vw;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto h3, h1 {
    color: rgb(109, 182, 91);
  }
`;
const StyledLink = styled(Link)`
  color: purple;
`;
const LandingPage = () => {
  return (
    <OutterDiv>
      <CustomBox>
        {/* <h1>Chris V. Sanchez </h1> */}
        <div>
          {" "}
          <h1 className="landing-page-name">Chris V. Sanchez </h1>
          <h2>
            <TextLoop>
              <span>Full Stack Developer </span>
              <span>Problem Solver </span>
              <span>Cyclist </span>
              <span>Coffee Aficionado</span>
            </TextLoop>
          </h2>
          <br></br>
          <div></div>
          <table style={{ overflowX: "auto", border: "0" }}>
            <tr>
              <th>
                <Link to="https://github.com/chrisvsanchez">
                  <FaGithub />
                </Link>
              </th>
              <td>
                <Link to="https://medium.com/@chrisvsanchez">
                  <FaMedium />
                </Link>
              </td>
              <td>
                <Link to="https://www.linkedin.com/in/chrisvsanchez/">
                  <FaLinkedin />
                </Link>
              </td>
              <td>
                <Link to="https://twitter.com/chris_vsanchez">
                  <FaTwitter />
                </Link>
              </td>
              <td>
                <Link
                  to="chrisvsanchez@gmail.com"
                  style={{ textDecoration: "none" }}
                >
                  <FaEnvelope />
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </CustomBox>
    </OutterDiv>
  );
};
export default LandingPage;
