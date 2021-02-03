/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_'
  },
  plugins: [
    ['@snowpack/plugin-svelte'],
    ['@snowpack/plugin-typescript'],
    ['@snowpack/plugin-webpack']
  ],
  packageOptions: {
    "packageLookupFields": ["svelte", "module", "main"]
  },
  devOptions: {
    open: 'none',
    port: 5400
  },
  buildOptions: {
    /* ... */
  },
  routes: [
    { match: 'routes', src: '.*', dest: '/index.html' },
  ]
};
