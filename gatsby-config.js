/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Offline Test`,
        short_name: `OfflineTest`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `static/favicon.ico`
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        navigateFallbackBlacklist: [/^\/blog/, /^\/demo/]
      }
    }
  ]
}
