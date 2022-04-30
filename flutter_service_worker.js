'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "eed841b30b59458b788f060466883349",
"index.html": "5967f5bddaa407b9d64c6f215526d6e9",
"/": "5967f5bddaa407b9d64c6f215526d6e9",
"main.dart.js": "af0bb3f75127ac83d857b5a58e532958",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f2deb8e5e1482b68a2231617fdaf97b0",
".git/ORIG_HEAD": "b5c7764d0ffc516c93f64b6ce3d03329",
".git/config": "b69f7209e9ead8e327e1baefad73d630",
".git/objects/0d/c165a1927da8fac1ecf01a0dd97c0276acec57": "c616bc27313dbebc7372cc4731b4d8cc",
".git/objects/92/6f53923bba4194bbf008d4428ad73023704659": "4837d4d2a82d2f056efc6dcceaca6afe",
".git/objects/0c/76787a732704c6d1853ac37392bb41934538d7": "7f1e6bbe883f93d51b92950e58243543",
".git/objects/3e/ba493ac49ea533f3941cfe820ccd9cfb5683c3": "f8aa0feb59c31778040085b8b1b9a19f",
".git/objects/35/781c0b7bb87671bedf8de5f4c532e771d5f071": "68fdff750256c440a0a00069b4d68da4",
".git/objects/56/35c942195c05e34e402ce7d088479ccb8a604b": "c0fbe4b298d94a4c0557dd8090f4d602",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/d0/6f02ee6d4f2a715e2410ada22cb1d9d6598ab4": "1b0e0dd4513084e6e729e51c289f7c60",
".git/objects/df/c74607593b0cf6516ffa20ba1826e9943620a5": "adf58b8e8cbebe4a70554d27fe4c83e6",
".git/objects/ab/8924c6e860999d3c65cdba4e6fd74fc324d4ab": "548bf22819846c5ca958c50a995fbb97",
".git/objects/ab/6b3516f6f5bd842af50dcf789fc86463a4b3db": "4ce6a6a685eae0aaca8e3e1197e4b039",
".git/objects/e2/a6125b64be4709377b44b20326b95393e243b3": "0849c450689bf97fe27b1c60f5399462",
".git/objects/f3/c88d7355c73003c9fa2049673025a6c1074863": "13aaccb4530e79967bd5a8eba08f3238",
".git/objects/c7/32cddf9c384fdb99037501ac3bfd1400f7293c": "62b4ce3be8fe9944a158477638999b98",
".git/objects/c7/e0f7f780af650615055228718c614a902c8993": "05ec5441a6ca7d6a16a32655919f8a89",
".git/objects/fd/8c9aee26e34ea34438cf93aa973e14f64a90ae": "10f3bcca4f40b7f322d12129d592287d",
".git/objects/f2/b78f16730851093602fd6c32b7026de0ffb38b": "fcbe04cf9a0fa7cf10f030acb040406d",
".git/objects/e4/01e27607f0de95dfd105f7a3e1caccf80a2878": "2b3d5a7960047e0400da4cb49a498df5",
".git/objects/c1/3a9620dd90fe69f1eb12895eff9053a7471e90": "0c918fcbe3045fffeb9614330eb0887b",
".git/objects/c1/dda8c1db4ca97cc12c382d0204d1bd7bc0e16e": "260c0b408c1fb3097bc0c70f2ebe02b0",
".git/objects/ec/7a2e76ebf62e8e96d7a881ecc51b358fd2d1c1": "e25a3e6b91630c6d17bb98f8c16925d9",
".git/objects/4e/cde5774ddd553ac4752e7b6cc297c159b253ac": "b415f9952e4bfa2b183b95808fbddb9b",
".git/objects/pack/pack-1f545f407ca0657076f1b5792cd8dc652055e610.idx": "486e96d0b61914e4b1fb65d6b3362cdc",
".git/objects/pack/pack-1f545f407ca0657076f1b5792cd8dc652055e610.pack": "7cab9f1ff7f4c211af6730b86c7d1dd1",
".git/objects/7c/e4593819cbbee61f4fd2f78f125be10fccf626": "48bcfbae2915d48d49d3e9d0354d8762",
".git/objects/42/e37b4cb8079a3d7b35e2bf8d1e2fc78eedebb3": "2d8c091e308781f0f110c288d46ba691",
".git/objects/1f/40d0f274495c977f1bf49d2ccf03d0a47ee3ed": "c4b4a5c84adcc3b626d9eb15d541cd87",
".git/objects/74/f0fafc57207eddae5b967ebf82233a1de88c16": "15bc9be28469b543a98225a5b69215e9",
".git/objects/74/8d0c222638336f9ad90cd7c98c9a5f2650adec": "1fa58c377309039f7532228ad5127afc",
".git/objects/7b/0ccef2ddc812c784462ed80c476e9dd3ee1b6a": "e2bf9cd0cca53201f2e06c3027bd291d",
".git/objects/8a/853fe3ca04a4395c805cdf90193efa69449851": "c3be86a80b54e809eb7e07fbae6e08f1",
".git/objects/10/c618d0d96845fa6f8dd00c8ad302b5d84f4c6b": "f5cb502ac9127d8cab8a8133b8828ae6",
".git/objects/19/84f5ca5b6e16817d8638f13dafd28a1efb808f": "082c7376b93a5ef31854a1f04ad90cd2",
".git/objects/26/49f23cc2c25ec0063a0ebb7c9343978ceae8e8": "bc1de55884f008e8140ba2c429dbbe37",
".git/objects/81/51acb8bab65c80f505fdf21c92496a2d9ca8e3": "f5c2f6ba17c675454b04eccee6277ef3",
".git/objects/86/c4d6f4fb967b37370f58d1499af2b8ccf8d6bc": "cd27054aebad6263c17c1a474e5b6e1d",
".git/objects/9f/432366c12c4d8eb1d394ac7f1d5483aa8fc761": "609ededf7437bd8b91c5ba99b08110ed",
".git/objects/6b/42749e0699e535719a5ab2a14c11113b621bec": "15d910b068c81f9b82441a573c4bb322",
".git/objects/38/18bb743fd95e788319a15da19d2c97e6564644": "ab7136d9143c243a7d49cc3f350d3ad0",
".git/objects/6e/1cb209760758c6f2150cc0ef036ad07ffd60f5": "32cf7b02e05793a9705a6a160a79ba49",
".git/objects/6e/795c2b9e66689cccd8872ee6f196dd376a3bd9": "62e252e4c9b1c82e16c62a94d48d419f",
".git/objects/36/d01a00ee88df1f6ca46b87930b6fa918e26a6b": "3dde365a038d08a0f8996e67a202cb6e",
".git/objects/09/c323321391dc1ffd63a46018b7718630899fa8": "538768dbb31bc9c42aa1487b92604fda",
".git/objects/65/1ab7ae557722116296d23c3b6aea462fb09bf8": "70ce25fdd8db8e2bc48621b18c19381b",
".git/objects/54/eff79c95923e4927243c137fd0c771560a32b1": "665570d5cc258ac5abc863c46610a5c6",
".git/objects/98/244add3694cceed47b66973fd330361cabae89": "03c9a4460ac11b727ce1cd6d01aecbaf",
".git/objects/5b/85ead9831d6e3bd3ad3dcc7b66fc8df44cc2b3": "ca062eac7c83f97885e11bb9fbef084b",
".git/objects/06/95b49d103d54dc05e3af499bd99b69eefd8d1b": "e160c35abbae0f83148f57479ea6dfe1",
".git/objects/6c/9022eb2b7237e2314bd841c5a796d77b70997c": "a2d472b1418110d84e7366e84e8780bd",
".git/objects/97/eaafbfd159bb855ac32400f9eec37ec2a0a6a0": "393ff49cfcf6a1da5990cdcf01facbea",
".git/objects/64/a87f86a824a0fea27c605903570a04a4679743": "9102f800d15ca87152bc49e2ef62d4a1",
".git/objects/bf/1e8b6df7e980f87e393ffba09622db14fe6be4": "82033fc2fba383a4c8add6fe5aefc062",
".git/objects/d3/caa87ecdb9a9c9e6bc6a820ccefcc464bbe3e4": "81186e4ccc894dfcffa2936dfd6cd73d",
".git/objects/d3/839e484fdfe7b726ce432b50ab9a1e3204eae7": "91dd32a63d75a10c5e566a5febbc959a",
".git/objects/a7/f08a0aa3e0568bfbb9871c1fde7a30ac40be07": "7928eb9f4cd886690978e86be029e641",
".git/objects/dd/346b2f97119d151ffbcc313cef18748335c0cf": "3016e4dee8ef8252d1ca0d7072c36166",
".git/objects/dd/213c26532523749a6bf5da33055bd7784a7b93": "27f6cc9ee85bc217400cfb9a21b16ee9",
".git/objects/d5/1444015dfe03d30700671543113a17ae2beda6": "8c2e84c7c6029377c01c1eb86700ac58",
".git/objects/b7/59c3d0422a778df2469ace062c221d3d7ea5ff": "f2c3ffc29d6d318066cf9ee8e572f4a6",
".git/objects/db/8a0b66fb2494bfa5282c74461ca9478640d2c4": "abb5f344d3eebb4d857e9bfac71f52bd",
".git/objects/db/376ac0a0bca0cfcd484c7020d0c1cef37f9061": "31a8ceda1357dac4ae662ad75d77aadf",
".git/objects/a6/4a51941a51871ada7f3227c8f20f1c091d8243": "469adfffdf951586b2da9151415db1f9",
".git/objects/c4/c8d7025b697bfdd56180a010e08db9f6e69fb0": "31e08e93f5c1c7bc855803c1414a73c0",
".git/objects/f7/8c9be5a854e91d5195d96e9c6ba90afb60e818": "479a2620cde4ae720f155d3bf333644b",
".git/objects/e8/afa53fd0305a02bfcad90df6df6567fb2071f7": "a3997c589b586adbd16e8d1055662eef",
".git/objects/fa/14ce64e9ff5dfb9358ec765fa7bb046c56f7e0": "72fd0f8063cf3ea7f5d745a42ff22d5c",
".git/objects/c5/b2bb7c414848e5350f12536bdd106d3b60c32a": "e789048dff7556e03424dfb5939b1127",
".git/objects/ce/bd8c3b044bbdb4b6a70e195442d7d1346af56b": "24aa89486738dba958767bc8f4c9001a",
".git/objects/ce/bc3c821cc91e8a4fec2c475240d5bd216ba6fb": "8d9459d0fb7977a55368cc62642ca0fb",
".git/objects/1b/5c715ca4d293e141ed8b4b6cac7693ffa7c752": "fb43f0d0922adaf74d807f7e2755987c",
".git/objects/84/e4d4263958a56b8f89af6fa1c1c8cc0991baeb": "ee0e83f383f72da4e21a64716c43ac1d",
".git/objects/84/ca362fd967b1ee7a090013f1a85cc20f73acad": "57104569616fd4e1ba0c2c81f1653b7a",
".git/objects/24/b31463e82d77dcea401f799b4fdb4f0ef99736": "0f1a6b4e9d44ed898db2a0d83732b214",
".git/objects/12/2e27d9d184c1e4378c53a9eda61d4967d79130": "42f898fa32918f4ddd466f64952a1432",
".git/objects/85/486f4e8eb308c02ccda17e23140ad4d855ab5c": "523e544ad01bbfe6dc8e177830bff5cb",
".git/objects/78/77abd889d0b2524f3b5a0528ef7c6c18e01990": "c08af4b05239919a2bc11be8a0fc4fb6",
".git/objects/7f/9ff66cd0a58c7a792344dc05d6f7f53f7ab4ff": "c4353177d5a3562f66250081c1a3fd05",
".git/objects/22/4903bf1a974adbcae7255b8ea9f0e8aaeb0fa4": "0938b60e3ed1e770ace68b3f3c9f6d85",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f0fcf418bd7a69f14f113a1a1be47471",
".git/logs/refs/heads/master": "f0fcf418bd7a69f14f113a1a1be47471",
".git/logs/refs/remotes/origin/master": "d667ebd575665c074d1666c773b3ada9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "b5c7764d0ffc516c93f64b6ce3d03329",
".git/refs/remotes/origin/master": "b5c7764d0ffc516c93f64b6ce3d03329",
".git/index": "77a7e3fa22f5af01343e2234a63ae1c8",
".git/COMMIT_EDITMSG": "4c63661d7e782f1bd6540a6eabdc8b5a",
".git/FETCH_HEAD": "89e8b3e671223ae7e13321d6f00bba5c",
"assets/AssetManifest.json": "22721a487bb2028217e1a35f6049ce03",
"assets/NOTICES": "be31fd80a986ded2b6dc462d3aadfea4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/svgs/mobile_interface.svg": "86c7a862bdfed8cef0be65daee2e2587",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
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
