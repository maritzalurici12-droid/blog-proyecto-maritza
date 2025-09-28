
export default {
  basePath: 'ng build --base-href=https://maritzalurici12-droid.github.io/maritzalurici/ --output-path docs',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
