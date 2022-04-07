'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e9570bfc5abadd0d1eb2b0606ccdbd85",
".git/config": "224a778b77fcc2231e78ee31d7ee0348",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bf57db1f8c7122032f7a632859b2e890",
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
".git/index": "6619f6ec6acdce151e4ffdf309a8f887",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "769bab6fa06ffd11ac55f6d4ef96c9f3",
".git/logs/refs/heads/master": "769bab6fa06ffd11ac55f6d4ef96c9f3",
".git/logs/refs/remotes/origin/master": "319c38f77f715631a37c86efac00a096",
".git/objects/00/6b86b093caa32dbd630ffaebe74f966843cbc8": "a643ba07a308a964d6f8b96c0fe7aabd",
".git/objects/05/b7b4fc6b40efe2322fd10909e879b34bc2e4b7": "296c854e892c99be4fa9dcaa7ee4a115",
".git/objects/06/2fe1ce89d0a0a848ad344513314bc2aba5145a": "5b69e6e90602e850f9e4873a342dcdc1",
".git/objects/09/10db286aa4ff637b6ce117086099a32b72436d": "ce5105f82d0cff754b6e7e7401c2e6a8",
".git/objects/0b/ecaf907136ac2d5eed208d45fbe0481aa0c920": "aae2172f766e807580cd7d6a49760b87",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/1c/b0d8603e6f6df7aae0416d3a551c03155af8a7": "a4146efe4551088f0ca94476e2ce4b18",
".git/objects/22/cd9003b31c4d02e409a90eeb0b6c1ac4ed6609": "b5abaec00fc3180ae5f9019ae06bdb5a",
".git/objects/22/fa4eefff57297a9dfb29a533523867556f2acf": "2c215ae21662c47da8f61f82a6948ef9",
".git/objects/24/af4c6a7ab7dfc6f7707636a81e2efd72ea04b2": "3bc2e5737ee0a963772d752094ebaaee",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/79514050c6636a9114cffce6e9c1de9da06512": "ac3f1615cc30191f84a430a63e382ba7",
".git/objects/27/7e4d09eecca0a30c06b00fa5f427c8dde4bb5e": "5b826f15040ecc5b2ff7b2827fbf2420",
".git/objects/2a/951d787da8ddbea2e0fe15c07371bdd87ac344": "886ac206fb597ddfcbef181adb1bc203",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/dba6164f1a8638b687a812fbfe477a422a3bd7": "356a87f3633794480be7092ed4db47eb",
".git/objects/31/b4b8d1df7a1b658afce87083998119878e9d71": "bb36b62e878562990c2112eaf351142a",
".git/objects/3f/c59778c9b3274978a37a278f1fa54b289827ac": "6a110fc292bf287c32fe2d1068ced56b",
".git/objects/41/0267a6633c4119a75175f2568f9f6cffc9dbae": "b54ef26e0908738f4f0ec89be0f09a2d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/406d5b6b30d27a4b35c4538fb87fb800b7af63": "0fd4a91a25b038bd686c67117f603d76",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/ae61a400c3ebf9aad180727c2c26aba5d449ec": "2a28681b9dfe88d12e12d27c21b35231",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/52/59f1091b9271bc7dee9954dd9408a78cd45972": "b5176d2ad357487db40663f71c8dbcd4",
".git/objects/52/dd0cdf8b6eba014959c99fa464ae6e1c8071d8": "584fc9d10d3296c48a2aa46ec38770b8",
".git/objects/57/1f877d9d85a32e01a43db3a4bd67153349e3cd": "bf368ee276e871359fec416facb50034",
".git/objects/5c/16d2f0bcb1af7a2fed9c99943720d2eb5c736f": "9615055426e40a867baa6814daf73fa8",
".git/objects/60/7d91fbf0ea72a4e6835114241e7fa36ec74e9f": "c841364cfdb394301c62f8dbd825a509",
".git/objects/60/cf629bfcf5287b9ef264263d7eb74f25f315d4": "62e63281642c9d7b11aa97bbc473ae76",
".git/objects/65/4cec6b47bbf452c9ae11059a7fe023c268ee15": "e4d5dc7a3ec5301e33e6b1001d5266ca",
".git/objects/68/78c393b892483079f8398fa464817f6419b43e": "5e63de69c117041e8b75e17246737277",
".git/objects/6b/c415a8dda586208865d6c091043a6a2bdf8d31": "d3e706f09e48baf889d5b2166be3cbeb",
".git/objects/6d/1c5d6cb47348425c6d1abda4ea3adad5269979": "0efbff5090435be945a2a1a0198c7d87",
".git/objects/6d/cbc43a3d2f7d2eaad3a5ac44d7f9c0e6c7577f": "619a427477c63e810842f7035147e682",
".git/objects/6f/9da56bbae00cbaccf58bb068d466bba0a6b516": "e94e73b75c5f3a6066653bd316c5ab02",
".git/objects/73/9cb7d9cd4e5b7fbdbce65e85e10425a44ddae1": "cc5b3d4d45cb41d48b8a4211a91fae77",
".git/objects/74/2ac9d1a6ba5d9dff4ebdc0dee63580146cce47": "5187dbdace7278b1e00d2206eb49cc55",
".git/objects/74/8e8f0bbe4ba394e8bd3bb97302d36200defbf3": "fef3e6bce78dbd788f817d447a0a543d",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/aedae6c4d7c91e5b71eeee498bf9d6619c5a4d": "10df830476f0092b5833277abd1973e7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/4acee0428f4213988cf19c8b4e76093e840762": "83e8454eaec234f134bcba8e37a5d770",
".git/objects/7f/0e84207d74181967e7710bc9103ca30ac48bd2": "bfda502f0b4e02db3ca48b359fd89fef",
".git/objects/81/17acbbe6782369730d9129ff95d83969107e44": "97a8c5d2ad4f6a8bc1eaf32cb3645596",
".git/objects/81/b92a9ab20e309fdc0a91960dffaf8f6c7edd88": "fe07adb82e27656b40d328b989d0ac5c",
".git/objects/82/068d4c7e3682a1575f00dad43ac11482aabffe": "3655983925f56c9d250fd243f9f7b2dc",
".git/objects/84/df2cfa6493be9e257da7ce23bab3f2a0df93a5": "2c11474623e57765e065eca6137ebedd",
".git/objects/87/d9efb95f2171ecf70d6f2209be2cdb69107a5e": "b10dbda8627a3c787dcd9c283849a696",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/efcd7caab7f870aa5a5b86bb580f27785efb9a": "1bd9f393de245cca597ffd3f1ef84b6c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/6e64eb7a2f287e2cbd152c6e8855124bae23f6": "23ce16322f174ffa66ede6ed2c5a7dac",
".git/objects/8e/ff5786f21217788c3200a9c98501310b46a977": "152c06b70382eaa400672072614b73ac",
".git/objects/97/ef62ecd01be1bf7850fb9a33a69a49266257b3": "48c2f6474e6a9877fd8b25a70f7a606a",
".git/objects/98/fcb9669c8ad695a9ee9e8b75fbad12c462a91b": "91acc376de770dbbfc5f56429e7e31f3",
".git/objects/a0/4adc992a4f58bd85e30ceea450d6234fe66bcc": "ece56bf4fc7e339b213108c5e87ceb80",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/0936ac907b370630b7bc636cce9c5a3a87489c": "e7722880dfc7499381b1873817aac2ee",
".git/objects/a3/1cde120b0928f8019d83034e4044423d0b2a99": "2d374d2740f23e10bcc4b57a2cf0678a",
".git/objects/a3/cce4d84d0854d0fa5906e5a93b55afb6a615d1": "f1fa8d2117142f0fd5b1761d77f691c9",
".git/objects/a8/eb4627894b7461d006b03b8c07f693aade85df": "5ac7f1e9e444b4eb1cbc8e38023e385f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/da19dababe1b30acad24ca8f2df29f9d99f439": "032ffa4e9607b7f22cda3ab1fdc74357",
".git/objects/ae/3523fd3da71a54cc2d202073675b96bcf38e10": "08b0aaf39c010edf04049f787c88d8a7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8a0cf4d9b4bab810c50c9fd04d93f4a8c0c0c0": "398065650f543f06870deb68b41f7334",
".git/objects/b8/8fe23987aa385fdbbc0962918682a7162fe4d0": "e7d159f1e2be5935a3298ab3bafbce9e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/7528be9f362fcaf75825c0f6e3de4d59643c5c": "5b9805db083fdceaf0ef36bb2ba91a00",
".git/objects/bd/9f56d173411ae07197638ecbe8db41295e8e19": "5ac95aeba77161bf1d981a470dc8d0f8",
".git/objects/be/b767b7ad269ab54adb5a3bc3df4000f50c5065": "7f753f24b83e22b471f0806a7481541c",
".git/objects/c1/8cfb9167e1375d61a4317358a191c4b700d115": "4a3b2c30139a7fee56b09f088283c5d9",
".git/objects/c3/4ee93236a1e04005822a7b31329be64cd413ae": "94e274862b25e2b35738b1659b68ce6a",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/6faea9ce74d98d92c6011fbfbb8735887914a7": "01f602025ffc0b7488b329df99ecc90f",
".git/objects/c8/e159fc923c3666cfdd910fcd33f89cd02f9ea4": "411609f9f69b35d930a1984fae3f0eb7",
".git/objects/d5/f2eda1f4fd2c31c39a11ab5767ea812cc71385": "9534e876ff29020f2497c66fb06164e2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/5e0564f7526e13c1141e55371dbe60c301c3ff": "f9430638c501b0f0d110090c9453c9ef",
".git/objects/d9/e945a3ec775ad8eb07a3e462020f3a062ddf60": "837719c3e1479f347e9e902954b1790b",
".git/objects/df/78e0a2201800cc91ebbd540936d400f3020865": "a59764276e80acc438f4663420510e84",
".git/objects/e3/c4c9910c9d936cad3cb6246a3f08a79e3f139c": "4fc58075895df1af47bdff785d7269fb",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f9/ba580e36de15e965ec4f30fad7ff42ab5f9b79": "dc862e188ca7705a17e3e75eb1076af8",
".git/objects/fb/231cb1743755cfa25ed1e849faef60862e2d50": "153cce0031f6d49415a1ae7ba82829b6",
".git/objects/fc/e87d5ca621fe553d9f53eeeee1d0c3c619d328": "b533b2cb791e9945d65dcd3e02c0e66b",
".git/objects/fd/eb6916b6087877009ebee8152c37d695a89905": "e5b5649b36b3911204fad21033b533a4",
".git/ORIG_HEAD": "9aac2be91747b752d5e429f9c720db19",
".git/refs/heads/master": "362214d3b33ce7c4848ca020c7306bd3",
".git/refs/remotes/origin/master": "362214d3b33ce7c4848ca020c7306bd3",
"assets/AssetManifest.json": "22721a487bb2028217e1a35f6049ce03",
"assets/assets/svgs/mobile_interface.svg": "86c7a862bdfed8cef0be65daee2e2587",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "3adc7e70e6afd8f11aebbcc640c01625",
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
"index.html": "7ed5552863e462a1fd066d513b49bfde",
"/": "7ed5552863e462a1fd066d513b49bfde",
"main.dart.js": "fae754269fdcb011bfe01147a329faac",
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
