'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "98b2a7f22d9bcfefff0c9cf7974757f8",
".git/config": "224a778b77fcc2231e78ee31d7ee0348",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1764a270e9e4011b8a8e846a0a1f5aca",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8680fca8203f002b5587ac4bd92cedb9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b1adcba9205d5def00efabe5c677e47b",
".git/logs/refs/heads/master": "b1adcba9205d5def00efabe5c677e47b",
".git/logs/refs/remotes/origin/master": "cb345c444ef5e136f94d4e05ed0d97ef",
".git/objects/02/2c3f7be720a2f22963c1d69414e3619841b3e6": "0dc2427177f8cfc1dcc05da20923b0f5",
".git/objects/09/5d88fac4448d08124db2097c01594ac45c7813": "aadf93106f547ef41bdc3aaa2e2d327e",
".git/objects/10/06f7d21e03d3173d876e71312dc26c76b447f3": "dd906222cc5f621d8817c53d61c6272f",
".git/objects/1e/72962ded9eecc36e77d3d66ca6bce02554ea2e": "15fe90f14453f6a373e1b5d601489ba8",
".git/objects/25/75e24110c38f4c399b578a18f9800c6ebcb239": "1826874339bfd7bb528ee4bf0d3167b2",
".git/objects/3f/00c2301d8b48cf75c0c5b2fcd163aefc4fa632": "b17a48f4f904a07d4ec12ca88d064c42",
".git/objects/49/820c779f4c3aab4f4e36873768899254e6172b": "cc90e3d280d5bd069372bc98564760e9",
".git/objects/62/dc245104d60c729e27cb6d33f2eb647ba93f97": "8b20bdbe95bf12847d726da5ad7cb7d2",
".git/objects/71/25aae6c44a3634780f12ae6d25c80fa68f9651": "c06dbd5e7ce89f8e64b0c867c1da1552",
".git/objects/72/94d9602d65f21302527e6b7bbeb60eca3c44f3": "2b6cf68ac9bc36e679fb997ec743944a",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/88/d51e47919cd12acaee62268edceaf416b91c7a": "21e36a2ff15c066ade4f42c6c81121f5",
".git/objects/a1/b6247eb064afd3265f9a2da4b8e4f081f4623e": "1d83bb88ca4069f0a798f1efb18f1906",
".git/objects/a3/fcae25917ef2ad73bbb3f18477888dd43e7bfa": "470a36f43ee677f6d29fc524a5ac778d",
".git/objects/a5/83c4ab0c7a4ac0140297ee61bc08a8396e6bf5": "27b286f92ed9c261054e4ae6a76875df",
".git/objects/c5/228b2c4fbe74f415fab623046e3d90d88da880": "81fb97b8f6bc9c8ac3fcfd0bfe2ce576",
".git/objects/c7/15155adb4ba10a29af9b9f4ab578fc14f91574": "0a384fd4c949c74e8231b29d9002a634",
".git/objects/c7/b6593d96a42c2b7cc52a042a3a79569dd039d9": "2029a96105eebbd0745a4c475e79b72f",
".git/objects/cb/c8f87d33334d91f16244b781cdeefae6d05369": "da0e51fb4b0558256cedc31c74df8897",
".git/objects/cc/c5a3219e5a5fc59d239fd145926ca132a3ff1f": "e32c5fed6ea0bb9e0a2c95ba53c717e1",
".git/objects/ce/c3d1d7973867c3383ab3aeb3e43f81ec6e3afa": "c8508fabb3fa52c05ed5dae0de958f61",
".git/objects/ee/53316a77e809598a851e97028d02e0a727d8eb": "14678706e0d4baa2f1c18e96b4fb74cc",
".git/objects/f0/0c547074a823730491c8e38691000b204c0877": "8ed7c8dfefde527b7fc3f037e75482c9",
".git/objects/pack/pack-da1db58750578c911a3e4c60f0307851cb8ef58e.idx": "fe859b85e4640f2f48317bd9a4d3e970",
".git/objects/pack/pack-da1db58750578c911a3e4c60f0307851cb8ef58e.pack": "4670d09853b27bb017fa7e38b89d9be7",
".git/ORIG_HEAD": "053f3ebb265943a4837025327c9ac6fe",
".git/refs/heads/master": "0535e5e1e3b54ed96faee689256a9b3b",
".git/refs/remotes/origin/master": "053f3ebb265943a4837025327c9ac6fe",
"assets/AssetManifest.json": "22721a487bb2028217e1a35f6049ce03",
"assets/assets/svgs/mobile_interface.svg": "86c7a862bdfed8cef0be65daee2e2587",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "d3a9b745db4e18ee601c9caa5380f1f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "3725a0811e16affbef87d783520e61d4",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "491df729e7b715d86fc167feabea031a",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "57bec8d5c24a3a80888b8466d37be1d0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "38afcbdb9f6feb6c016f10d3267c6f99",
"/": "38afcbdb9f6feb6c016f10d3267c6f99",
"main.dart.js": "2089fe340ccb6df5d0bd43d99500e868",
"manifest.json": "808744013be38bee7bb57a7336cb1f88",
"version.json": "eed841b30b59458b788f060466883349"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
