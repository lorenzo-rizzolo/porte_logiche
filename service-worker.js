if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let o={};const c=e=>s(e,a),f={module:{uri:a},exports:o,require:c};i[a]=Promise.all(n.map((e=>f[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-bd9393cf"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"and.jpg",revision:"b878275710ff227f946420199ce86a05"},{url:"assets/Framework7Icons-Regular.a42aa071.woff2",revision:"4a39aba9fb8a2f831fa437780e1a058a"},{url:"assets/Framework7Icons-Regular.eba1e821.woff",revision:"d03b787b6492fa2b0141c43fb7e56689"},{url:"assets/index.0eac8b5c.js",revision:"a729a78058260e2e3e9eba4bed297efd"},{url:"assets/index.ff47f934.css",revision:"02392043ab903e9bc2d5ecbcab3564df"},{url:"assets/material-icons.450e40b0.woff",revision:"263e223425dafdc3b3658d81d164f986"},{url:"assets/material-icons.96470908.woff2",revision:"7bdf272c965400b0c625533e3aea2e31"},{url:"icons/128x128.png",revision:"4e35a6dad5f1ab5b385f86dfe97579b8"},{url:"icons/144x144.png",revision:"47efa07843a29aff095e50015e084e85"},{url:"icons/152x152.png",revision:"ab189ff1c3604cbecd2ccc180b6f7c25"},{url:"icons/192x192.png",revision:"9ad7d46019f56396237834ced5038973"},{url:"icons/256x256.png",revision:"28969ffd71e59d0bb2ca642ac8bb0134"},{url:"icons/512x512.png",revision:"aa0c2f038e42624eb7ee396b272ee852"},{url:"icons/apple-touch-icon.png",revision:"4e94b1d1edaea36f052ec015c03ff26b"},{url:"icons/favicon.png",revision:"4e35a6dad5f1ab5b385f86dfe97579b8"},{url:"index.html",revision:"0b65d5b722561cf9cbd73457468961ad"},{url:"not.jpg",revision:"cc617a9b402f93ebf8684c00a850a27a"},{url:"porte.png",revision:"319cb27d2296e28b243ea259d3fd98ac"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=service-worker.js.map
