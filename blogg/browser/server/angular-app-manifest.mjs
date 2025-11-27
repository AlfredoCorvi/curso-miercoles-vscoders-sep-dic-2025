
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/alfredo"
  },
  {
    "renderMode": 2,
    "route": "/renata"
  },
  {
    "renderMode": 2,
    "route": "/abigail"
  },
  {
    "renderMode": 2,
    "route": "/lidia"
  },
  {
    "renderMode": 2,
    "route": "/antonio"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 809, hash: '8b92665a701462070dd97d8b29d5817d55aadf01a4c1862ff9ad796bc4b3ca26', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1001, hash: 'fb25301343f1f7570757f6ac633180ebdeb60a72248daafc1c2006b0699753de', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'renata/index.html': {size: 4548, hash: 'bbae2ff82c1009f006c152f9a4e893ed81ab7bebad072409235909f3efa75c3b', text: () => import('./assets-chunks/renata_index_html.mjs').then(m => m.default)},
    'alfredo/index.html': {size: 5932, hash: '4c21404bd7e07342f0112ac89c4a821acd7d3a7c21163bb256d743459a7ae240', text: () => import('./assets-chunks/alfredo_index_html.mjs').then(m => m.default)},
    'antonio/index.html': {size: 4876, hash: '6bb1b302ad3909340f61bfbb20cc2699289ccd00f50762d35f4c6b129bcffa33', text: () => import('./assets-chunks/antonio_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4344, hash: 'c19415d5e2f40f99cfb705a6cdd624f9a9c11b607bc6cfb3b7fb61e2ff937f03', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'lidia/index.html': {size: 4891, hash: 'c4973024b58532381d08693f4290fd1a30f9a1a63e5640e10dd974b76ca38dd6', text: () => import('./assets-chunks/lidia_index_html.mjs').then(m => m.default)},
    'abigail/index.html': {size: 5649, hash: 'f7000d71a31b98f0316ff0661eeb4064807be42e581725eedd7f894f3766a08b', text: () => import('./assets-chunks/abigail_index_html.mjs').then(m => m.default)},
    'styles-2VSGR4K5.css': {size: 348, hash: 'Ul1MjAgELYE', text: () => import('./assets-chunks/styles-2VSGR4K5_css.mjs').then(m => m.default)}
  },
};
