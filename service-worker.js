const CACHE_NAME = 'baby-word-cards-v1';
const FILES_TO_CACHE = [
  './baby_word_cards.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  // 필요하다면 이미지 등 추가
];

// 설치 시 캐시
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

// 요청시 캐시에서 응답
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});