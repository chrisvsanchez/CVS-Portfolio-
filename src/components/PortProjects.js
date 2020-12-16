import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProjectPreview from "./project-preview";
const PortProjects = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            url
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);
  const projects = data.allProjectsJson.edges;
  return (
    <>
      <h1>PROJECTS!!!!!</h1>
      {projects.map(({ node: project }) => {
        const title = project.title;
        const description = project.description;
        const slug = project.slug;
        const imageData = project.image.childImageSharp.fluid;
        return (
          <ProjectPreview
            title={title}
            description={description}
            imageData={imageData}
            slug={slug}
          />
        );
      })}
    </>
  );
};
export default PortProjects;
