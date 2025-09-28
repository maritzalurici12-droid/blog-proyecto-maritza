
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'ng build --base-href=https://maritzalurici12-droid.github.io/maritzalurici/ --output-path docs',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ng%20build%20--base-href=https:/maritzalurici12-droid.github.io/maritzalurici/%20--output-path%20docs"
  },
  {
    "renderMode": 2,
    "route": "/ng%20build%20--base-href=https:/maritzalurici12-droid.github.io/maritzalurici/%20--output-path%20docs/sobre-mi"
  },
  {
    "renderMode": 2,
    "route": "/ng%20build%20--base-href=https:/maritzalurici12-droid.github.io/maritzalurici/%20--output-path%20docs/formacion"
  },
  {
    "renderMode": 2,
    "route": "/ng%20build%20--base-href=https:/maritzalurici12-droid.github.io/maritzalurici/%20--output-path%20docs/contacto"
  },
  {
    "renderMode": 2,
    "redirectTo": "/ng%20build%20--base-href=https://maritzalurici12-droid.github.io/maritzalurici/%20--output-path%20docs",
    "route": "/ng%20build%20--base-href=https:/maritzalurici12-droid.github.io/maritzalurici/%20--output-path%20docs/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1029, hash: '887bfab03a58bb11d165463cc6b67382d2307d07ee030cef63d9d268d199bd0e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1031, hash: '7e79faa798ac9d7b9c75c37670fa1a7126f2adb35e1eecf6b9474c127713b0ca', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FQLAVYMY.css': {size: 648, hash: 'vEypHCo89gs', text: () => import('./assets-chunks/styles-FQLAVYMY_css.mjs').then(m => m.default)}
  },
};
