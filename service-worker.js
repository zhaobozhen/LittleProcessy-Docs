if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const f=e=>a(e,r),b={module:{uri:r},exports:c,require:f};s[r]=Promise.all(d.map((e=>b[e]||f(e)))).then((e=>(i(...e),c)))}}define(["./workbox-2572b17b"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.2e89484a.css",revision:"67b777476273222a6cc8f249ef7cb6d2"},{url:"assets/img/danger-dark.86c63c40.svg",revision:"86c63c4006d5cd5f860cdef57310696a"},{url:"assets/img/danger.1c7d8a0f.svg",revision:"1c7d8a0f45b8bee5d5b92334a16e2711"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.a1decb69.svg",revision:"a1decb69db82fb8eebb48704dd74e649"},{url:"assets/img/info.6f2cfedb.svg",revision:"6f2cfedb8e6d19d1b24eb73943f7ff4e"},{url:"assets/img/note-dark.8668720f.svg",revision:"8668720f2e50ebd01173f11a89d9da6e"},{url:"assets/img/note.32319b2e.svg",revision:"32319b2e9c86860d8a4f1c8f660096cb"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.0d0028db.svg",revision:"0d0028db13caec45ac1527d8b673fae0"},{url:"assets/img/tip.a9004be5.svg",revision:"a9004be5a8a5a83cc9c77bba88c816ff"},{url:"assets/img/warning-dark.b995cb45.svg",revision:"b995cb45fa552ac10ad35fa7716af15b"},{url:"assets/img/warning.57a43d6d.svg",revision:"57a43d6dcdee07d8db78a5dd3d6137ba"},{url:"assets/js/14.b03dd3ef.js",revision:"b532cd887ac1a3c1bb2ce44a332f2d1f"},{url:"assets/js/15.07e90a4a.js",revision:"45b9fca4d6552c853a62f5e2aab841f1"},{url:"assets/js/16.21a69d8c.js",revision:"4c554c02e7065f6736c61abfb4270e04"},{url:"assets/js/app.fcf37eca.js",revision:"1490ddb3120e246cb221b0a2bf2ad784"},{url:"assets/js/layout-Blog.49e75bed.js",revision:"05306f8c1c68203ffe07ead029613cad"},{url:"assets/js/layout-Layout.86e2e3bb.js",revision:"915779518cf3fffedaa37526105726ad"},{url:"assets/js/layout-NotFound.073570d5.js",revision:"7a5ab2aa436a352305fd55134cbb1e75"},{url:"assets/js/layout-Slide.3fa60a82.js",revision:"9eb6bf37a0a68f398d6c9feb940e224a"},{url:"assets/js/page--a1e32cda.cc4dc975.js",revision:"0e6d66024e6ffb6c6432b24e6f35875c"},{url:"assets/js/page-Download.70d583bf.js",revision:"f36ca95fc57781dd6b0d97a430248130"},{url:"assets/js/page-Home.cbdc6b40.js",revision:"8bc73c5b5698a9f19239c64c1275ac95"},{url:"assets/js/page-��˽����.a074c034.js",revision:"5f5388cdf6717f3a1025d2d068936b11"},{url:"assets/js/vendors~layout-Blog~layout-Layout.d5ee5273.js",revision:"d5a979969b3aa3bf860d25e285e12f54"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.ab5aef55.js",revision:"5e1a681e5aeea5dbb5416232840ebfab"},{url:"assets/js/vendors~layout-Layout.118b55e6.js",revision:"5d46343a3d8e9181f8a61237535909ed"},{url:"assets/js/vendors~photo-swipe.c765c3cb.js",revision:"ac113f8429e9656b1122bd56c4983c28"},{url:"404.html",revision:"502700819d5243ccaf6d864f3f522afc"},{url:"article/index.html",revision:"80ffa2a7305cd0c3cc9d361db1457a25"},{url:"category/index.html",revision:"7b5134898667c20b3970a5ff989b2650"},{url:"changelog/index.html",revision:"1d3e0482bd31d5dbed58d522d931094a"},{url:"download/index.html",revision:"6281713fb5534d92b3745564310db097"},{url:"encrypt/index.html",revision:"59469ff018ff54603e6e9d0ebc3db2f4"},{url:"index.html",revision:"b43e1190cd87956b9764aa44d39fb77d"},{url:"privacy/index.html",revision:"db9395d0a405a822521a6905da19f564"},{url:"slide/index.html",revision:"350963bab1043a0f2a13866b3e1d875e"},{url:"star/index.html",revision:"4f1fc46407b028c36368a0cef92fbf07"},{url:"tag/index.html",revision:"bbba12aee618b0aa9b58464774ce0476"},{url:"timeline/index.html",revision:"cff792cd74fc21d6c7b3d626e3bf0e6d"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
