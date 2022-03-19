'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "659bcd73200167016a81b38f4db325e6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "09b4a9badec804a822958e609b430f05",
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
".git/index": "69085b16226a571799ecc60a9259743a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6f4c19fb8e55df6ca2fad35d17d50e08",
".git/logs/refs/heads/master": "6f4c19fb8e55df6ca2fad35d17d50e08",
".git/logs/refs/remotes/origin/master": "47748ae58df23e58a5ac022533004426",
".git/objects/06/2fe1ce89d0a0a848ad344513314bc2aba5145a": "5b69e6e90602e850f9e4873a342dcdc1",
".git/objects/09/10db286aa4ff637b6ce117086099a32b72436d": "ce5105f82d0cff754b6e7e7401c2e6a8",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/22/cd9003b31c4d02e409a90eeb0b6c1ac4ed6609": "b5abaec00fc3180ae5f9019ae06bdb5a",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/79514050c6636a9114cffce6e9c1de9da06512": "ac3f1615cc30191f84a430a63e382ba7",
".git/objects/2a/951d787da8ddbea2e0fe15c07371bdd87ac344": "886ac206fb597ddfcbef181adb1bc203",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/41/0267a6633c4119a75175f2568f9f6cffc9dbae": "b54ef26e0908738f4f0ec89be0f09a2d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/406d5b6b30d27a4b35c4538fb87fb800b7af63": "0fd4a91a25b038bd686c67117f603d76",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/52/dd0cdf8b6eba014959c99fa464ae6e1c8071d8": "584fc9d10d3296c48a2aa46ec38770b8",
".git/objects/57/1f877d9d85a32e01a43db3a4bd67153349e3cd": "bf368ee276e871359fec416facb50034",
".git/objects/5c/16d2f0bcb1af7a2fed9c99943720d2eb5c736f": "9615055426e40a867baa6814daf73fa8",
".git/objects/60/7d91fbf0ea72a4e6835114241e7fa36ec74e9f": "c841364cfdb394301c62f8dbd825a509",
".git/objects/60/cf629bfcf5287b9ef264263d7eb74f25f315d4": "62e63281642c9d7b11aa97bbc473ae76",
".git/objects/65/4cec6b47bbf452c9ae11059a7fe023c268ee15": "e4d5dc7a3ec5301e33e6b1001d5266ca",
".git/objects/6b/c415a8dda586208865d6c091043a6a2bdf8d31": "d3e706f09e48baf889d5b2166be3cbeb",
".git/objects/6d/cbc43a3d2f7d2eaad3a5ac44d7f9c0e6c7577f": "619a427477c63e810842f7035147e682",
".git/objects/6f/9da56bbae00cbaccf58bb068d466bba0a6b516": "e94e73b75c5f3a6066653bd316c5ab02",
".git/objects/74/2ac9d1a6ba5d9dff4ebdc0dee63580146cce47": "5187dbdace7278b1e00d2206eb49cc55",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/0e84207d74181967e7710bc9103ca30ac48bd2": "bfda502f0b4e02db3ca48b359fd89fef",
".git/objects/87/d9efb95f2171ecf70d6f2209be2cdb69107a5e": "b10dbda8627a3c787dcd9c283849a696",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/6e64eb7a2f287e2cbd152c6e8855124bae23f6": "23ce16322f174ffa66ede6ed2c5a7dac",
".git/objects/8e/ff5786f21217788c3200a9c98501310b46a977": "152c06b70382eaa400672072614b73ac",
".git/objects/97/ef62ecd01be1bf7850fb9a33a69a49266257b3": "48c2f6474e6a9877fd8b25a70f7a606a",
".git/objects/98/fcb9669c8ad695a9ee9e8b75fbad12c462a91b": "91acc376de770dbbfc5f56429e7e31f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/cce4d84d0854d0fa5906e5a93b55afb6a615d1": "f1fa8d2117142f0fd5b1761d77f691c9",
".git/objects/a8/eb4627894b7461d006b03b8c07f693aade85df": "5ac7f1e9e444b4eb1cbc8e38023e385f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/da19dababe1b30acad24ca8f2df29f9d99f439": "032ffa4e9607b7f22cda3ab1fdc74357",
".git/objects/ae/3523fd3da71a54cc2d202073675b96bcf38e10": "08b0aaf39c010edf04049f787c88d8a7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8a0cf4d9b4bab810c50c9fd04d93f4a8c0c0c0": "398065650f543f06870deb68b41f7334",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/9f56d173411ae07197638ecbe8db41295e8e19": "5ac95aeba77161bf1d981a470dc8d0f8",
".git/objects/be/b767b7ad269ab54adb5a3bc3df4000f50c5065": "7f753f24b83e22b471f0806a7481541c",
".git/objects/c3/4ee93236a1e04005822a7b31329be64cd413ae": "94e274862b25e2b35738b1659b68ce6a",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/d5/f2eda1f4fd2c31c39a11ab5767ea812cc71385": "9534e876ff29020f2497c66fb06164e2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/78e0a2201800cc91ebbd540936d400f3020865": "a59764276e80acc438f4663420510e84",
".git/objects/e3/c4c9910c9d936cad3cb6246a3f08a79e3f139c": "4fc58075895df1af47bdff785d7269fb",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f9/ba580e36de15e965ec4f30fad7ff42ab5f9b79": "dc862e188ca7705a17e3e75eb1076af8",
".git/objects/fc/e87d5ca621fe553d9f53eeeee1d0c3c619d328": "b533b2cb791e9945d65dcd3e02c0e66b",
".git/refs/heads/master": "141e6697dcefa2bdd4865262e2c55706",
".git/refs/remotes/origin/master": "141e6697dcefa2bdd4865262e2c55706",
"assets/AssetManifest.json": "22721a487bb2028217e1a35f6049ce03",
"assets/assets/svgs/mobile_interface.svg": "86c7a862bdfed8cef0be65daee2e2587",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "370e9dab90d2b1a25994c9ff1dfaf612",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ad682597a515ddc18c8ba6be37559632",
"/": "ad682597a515ddc18c8ba6be37559632",
"main.dart.js": "e98a3f436ed33b616d283271b3da247e",
"manifest.json": "808744013be38bee7bb57a7336cb1f88",
"version.json": "eed841b30b59458b788f060466883349"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
