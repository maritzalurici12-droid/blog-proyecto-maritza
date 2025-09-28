
export default {
  basePath: '/blog-proyecto-maritza',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
