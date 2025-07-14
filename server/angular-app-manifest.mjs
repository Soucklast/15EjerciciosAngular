
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/Soucklast/15EjerciciosAngular',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Soucklast/15EjerciciosAngular/ejercicio1",
    "route": "/Soucklast/15EjerciciosAngular"
  },
  {
    "renderMode": 2,
    "route": "/Soucklast/15EjerciciosAngular/ejercicio1"
  },
  {
    "renderMode": 2,
    "route": "/Soucklast/15EjerciciosAngular/ejercicio2"
  },
  {
    "renderMode": 2,
    "route": "/Soucklast/15EjerciciosAngular/ejercicio3"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23507, hash: '3103f00d50161c02f515ef9e016be6a5646a67ac12bcb1277a5b998b52cb02b4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17126, hash: '426bac5d068ae70d05819ed159fb7ba253bdc6bf4ed7e2042dcc613d9bfc4ceb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'ejercicio2/index.html': {size: 312331, hash: '1473aa7c46decf4b4d9ec3d86c545e9580361aaf7415c64e369cf6a1bd0944af', text: () => import('./assets-chunks/ejercicio2_index_html.mjs').then(m => m.default)},
    'ejercicio3/index.html': {size: 325938, hash: 'b7c914e1e18711f5f46ff128569d34a0f6b4cec08cbd95692f3d33262d97ae39', text: () => import('./assets-chunks/ejercicio3_index_html.mjs').then(m => m.default)},
    'ejercicio1/index.html': {size: 312446, hash: '0cdd767f81bbb0660f6b400cb002b521a4e0672ad593d8fb9e246b7f0eede08c', text: () => import('./assets-chunks/ejercicio1_index_html.mjs').then(m => m.default)},
    'styles-Z5UYKNDX.css': {size: 6934, hash: 'VxIyzD7LHG8', text: () => import('./assets-chunks/styles-Z5UYKNDX_css.mjs').then(m => m.default)}
  },
};
