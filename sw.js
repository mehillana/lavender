const C='lavender-v6';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','icon.svg','manifest.webmanifest'])).catch(()=>{}));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!='GET')return;e.respondWith(caches.open(C).then(c=>c.match(e.request).then(h=>{const f=fetch(e.request).then(r=>{if(r&&(r.ok||r.type=='opaque'))c.put(e.request,r.clone());return r}).catch(()=>h);return h||f})))});
