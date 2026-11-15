// Ao publicar alterações, mudar o número da versão abaixo para os aparelhos buscarem os arquivos novos.
const C='geoint-0.9.10';
const F=["./", "index.html", "manifest.json", "analista/", "analista/index.html", "analista/manifest.json", "img/3d.jpg", "img/apple-touch-icon.png", "img/bda.jpg", "img/carta.jpg", "img/carta3d.jpg", "img/danos.jpg", "img/draga.jpg", "img/dta.jpg", "img/emblema.png", "img/fundo-claro.jpg", "img/fundo-escuro.jpg", "img/icon-192.png", "img/icon-512.png", "img/instalacao.jpg", "img/mde-img.jpg", "img/mde-malha.jpg", "img/s1-radar.jpg", "img/s2-agua.jpg", "img/s2-realce.jpg", "img/s2-veg.jpg", "img/strava.jpg", "img/termal.jpg"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
 e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>{const n=fetch(e.request).then(x=>{if(x&&x.ok&&new URL(e.request.url).origin===location.origin){const cp=x.clone();caches.open(C).then(c=>c.put(e.request,cp));}return x;}).catch(()=>r);return r||n;}));});
