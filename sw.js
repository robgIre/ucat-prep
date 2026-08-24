/* Network-first service worker: always tries the network so updates land immediately,
   falls back to cache when offline. Bump VERSION on any content change. */
var VERSION = "ucat-v1";
var ASSETS = [
  "./","./index.html","./manifest.webmanifest",
  "./bank-vr.js","./bank-dm.js","./bank-qr.js","./bank-sjt.js","./strategies.js","./icon.svg"
];

self.addEventListener("install", function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(VERSION).then(function(c){ return c.addAll(ASSETS).catch(function(){}); }));
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){ return k===VERSION ? null : caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function(e){
  if(e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(function(res){
      var copy = res.clone();
      caches.open(VERSION).then(function(c){ c.put(e.request, copy); }).catch(function(){});
      return res;
    }).catch(function(){
      return caches.match(e.request).then(function(hit){
        return hit || caches.match("./index.html");
      });
    })
  );
});
