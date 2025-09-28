
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/blog-proyecto-maritza/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/blog-proyecto-maritza"
  },
  {
    "renderMode": 2,
    "route": "/blog-proyecto-maritza/sobre-mi"
  },
  {
    "renderMode": 2,
    "route": "/blog-proyecto-maritza/formacion"
  },
  {
    "renderMode": 2,
    "route": "/blog-proyecto-maritza/contacto"
  },
  {
    "renderMode": 2,
    "redirectTo": "/blog-proyecto-maritza",
    "route": "/blog-proyecto-maritza/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 958, hash: '5fa0c9b1c2edbd5064c5dc282753b2c4b0138fe69735feb2026d926e45355190', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 960, hash: 'd9bd3fc945315d9168c25bf409383393542a08f0528e60b71cf7d45479be0313', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'formacion/index.html': {size: 4063, hash: 'bbe8616c71d1be74edf66675bce73b92c67ed7d8d138d8c457f153536ba70805', text: () => import('./assets-chunks/formacion_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5015, hash: '8513fbd5cac7e751b8c5caee91d0b3e4136ac71f5c9de4ac597742d1b07cbeb7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 4838, hash: 'cec1ede91477684f10bdc77be9137b5bd4505daff4fe547e712016c1dd460f63', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'sobre-mi/index.html': {size: 5024, hash: '27b5e3c5d2853af425b831d6f92bffc3336595b9dc743756ba3b6f7bce794735', text: () => import('./assets-chunks/sobre-mi_index_html.mjs').then(m => m.default)},
    'styles-FQLAVYMY.css': {size: 648, hash: 'vEypHCo89gs', text: () => import('./assets-chunks/styles-FQLAVYMY_css.mjs').then(m => m.default)}
  },
};
