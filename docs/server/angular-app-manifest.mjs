
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
    'index.csr.html': {size: 958, hash: '8e1ceceb47dea6fa3c9b1c0e1142cf47b301fec15eaa9cd4b80213d980f0d2e0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 960, hash: 'c6f5d8da44ae9ae2bd0b32ff9c48ff433477291612ec63651f2d4c311fc61fff', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4952, hash: 'e3c892419b07b7cc7c766576f5f987c2727d55eb45175fe6a4596810890fbbb4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sobre-mi/index.html': {size: 4952, hash: 'e3c892419b07b7cc7c766576f5f987c2727d55eb45175fe6a4596810890fbbb4', text: () => import('./assets-chunks/sobre-mi_index_html.mjs').then(m => m.default)},
    'formacion/index.html': {size: 4952, hash: 'e3c892419b07b7cc7c766576f5f987c2727d55eb45175fe6a4596810890fbbb4', text: () => import('./assets-chunks/formacion_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 4952, hash: 'e3c892419b07b7cc7c766576f5f987c2727d55eb45175fe6a4596810890fbbb4', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'styles-FQLAVYMY.css': {size: 648, hash: 'vEypHCo89gs', text: () => import('./assets-chunks/styles-FQLAVYMY_css.mjs').then(m => m.default)}
  },
};
