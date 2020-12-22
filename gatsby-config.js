module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-DWB27N3MMK",
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "project",
        path: "./data/",
      },
    },
    "gatsby-transformer-json",
  ],
};
