
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
    'index.csr.html': {size: 958, hash: 'aeab1c3a4e70f37030ad53000e5550e4ec45387f7c24c845b8e10c334ab6b299', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 960, hash: '583edc31b705c7b742de2324d3422aba82bf79ee5c811cbe79ddaa4002d9edcc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5008, hash: '7e61716ede81e958d76e2bb26b3a8c4b5db74c71ad7ea4275dfce07183ff433b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sobre-mi/index.html': {size: 5017, hash: '476785622215c7a6f6df33b0d8aa48ff3c797f0fbb6c7b456b86fb0680d56e37', text: () => import('./assets-chunks/sobre-mi_index_html.mjs').then(m => m.default)},
    'formacion/index.html': {size: 4063, hash: '5015017974931d0a2e5ad268a0edc6ec6d7d04cc8722f1fea5c85197725535f8', text: () => import('./assets-chunks/formacion_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 4838, hash: '4a0603b5a0260f9c61bb103be0d8fdcfbe841667975e3f64c1aff34e26f9e5b8', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'styles-FQLAVYMY.css': {size: 648, hash: 'vEypHCo89gs', text: () => import('./assets-chunks/styles-FQLAVYMY_css.mjs').then(m => m.default)}
  },
};
