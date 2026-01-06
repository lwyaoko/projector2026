// Service Worker: PWAとして認識させるための最小構成
self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // ネットワークから取得するだけの空のフェッチイベント
  e.respondWith(fetch(e.request));
});
