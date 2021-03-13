/**
 * @type {import("@ayakashi/types").Config}
 */
module.exports = {
  config: {},
  waterfall: [
    {
      type: 'script',
      module: 'getPage',
    },
    {
      type: 'scraper',
      module: 'githubAbout',
    },
    {
      type: 'script',
      module: 'printToConsole',
    },
  ],
};
