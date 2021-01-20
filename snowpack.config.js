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
    port: 5000
  },
  buildOptions: {
    /* ... */
  },
  routes: [
    { match: 'routes', src: '.*', dest: '/index.html' },
  ]
};
