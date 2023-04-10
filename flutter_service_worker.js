'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e0f01185025df5ae543f19dca72325db",
"index.html": "7a280996ce350077138f074f11ac9273",
"/": "7a280996ce350077138f074f11ac9273",
"main.dart.js": "649d4f6a1c26b295a493016a99213308",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4e81f4281785bf4138c87439195eb8ea",
".git/config": "612209decdc40a857ea444a2b08c472a",
".git/objects/0d/578c2d790e0840614022a91ecc50a41a5e53f9": "1b6ed49b7f59b6e20b51f15bb03e3fb5",
".git/objects/66/e7cdfaeb2ccd1e2e3a5a3c92edf75b66a8fec1": "0547d1a4bccb93aef24b8cbdd2d95103",
".git/objects/3e/dd62327f31b129b91c85c24f2e0f17853b2543": "fd66f7d116aa73efaf957b67e034c63e",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/3d/912fcc47a63990f372d5a067f72f847a5411a9": "25130721fd6cd0fd245790b9952dc552",
".git/objects/67/6959642fc45458a5906f5bb3b0b889f051e8ab": "386900ee5094e0a8f1092ae91962473c",
".git/objects/5a/40a2f840df6841922ef2c7df45dadb2ae38127": "515dbe466798dd0915ac7f997a989b44",
".git/objects/5f/1b21bd4c958702b9e19ec53dc00b42ddf87104": "7ff67020452e990b7de7f562e3e67dcf",
".git/objects/ad/682bd0f2c7fd4f58dd91b4ee505a4547fe1be0": "517c631601877fb23ea9fb9d15753e91",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c8/ddbf999071d2489be7a358540e97a3d9adb830": "4fb020932279ab0fae1583ee646bc42b",
".git/objects/4e/8a1d6a49cf4cd49f68e370bcec4359477bafcc": "70df328025742493174637ab6f2cc460",
".git/objects/4b/4c0887fdc3cbcef8e3e4564eeeeaf850fa041b": "b38f59aa29a8e2d1fdd4b3d3735ee2e5",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/1f/9288aea80d372b6f5a1c62d7bd815d9ebcfa52": "d4a66169d67209b522e19e98c2dc65be",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/17/2b2a419b90db6f843176663752124312e1d6d9": "2e40d078c66343fdd34cf222168bf6d3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/985b44750de2ed9b729b6e6877eb43eef795fa": "f6137309706f36db7a92f67fb222205a",
".git/objects/19/52f29f6f48c20a43ff6a5f7c22724d016ee84d": "77ed66f70f7cd4b3b07fe5c1a27f73c0",
".git/objects/21/0b1f5e3c7a7b37408a9f13feab6af74896691c": "5c18e96125463e724efd5abf957ef69a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/09594606e2b76620f7102d8c9db001e60eba42": "b09938d6ba16fccf545ab6d080610d84",
".git/objects/9a/3b4ca7a40100cd34a72fb70a10145553dd0b36": "b57d5045349176dc12d054851bb5e2d9",
".git/objects/09/0410d37e176ff1eac1b9281a2b50c12ea898c3": "69b221530d2e2a62f13d7bdc7e022a73",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/08/5d5740d945aa8ad61a6c86d9764ec712447143": "19cc0564090ef20f62359366ea435e6b",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/97/b4e6df686a660d7264238c16b45e275e5cd134": "1c8b0961e847b2fae0455c2c93189097",
".git/objects/bf/c10498c977022bd5f4ce3b6145cf320fb9be27": "762582ac2fb4cafc15e196a5f60386a7",
".git/objects/bf/fab7e3cda41e248fa2a235c9dc15c96197ca14": "993ea95d9caa75ea37afb0f940192d8d",
".git/objects/d3/3d3893a6dbc05dfcb578648f44ec8667b4ef32": "0b7de027acd9880713d92a3d3f3e4b59",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/e5211bd289346b38f389ce721d900820669c86": "81ff5535a911dae9dbec47c64b5f136e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/cab9810a87ff07c6411a127e76fba5166591ca": "40ed9de2614b28449515d6325260a847",
".git/objects/f7/c1c1e73ad1af0621979d634a4cc5e23e01e016": "2c93d6bc2d21395fde62dbf983cbfebd",
".git/objects/f6/1ae821fcbc0c67e7ad46c07b05384aa07c8294": "a5da3f0d8aecbe54e26296967208cdd1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1b/6cd2d2be3780cc5d7f8a6879bc05ccbcbbcaf2": "613383cddb9a6dd5335cd281cb8ada1d",
".git/objects/24/aaa85401cf2d94c3591ac4192c896f34288cfb": "d8d2d4ef44c40ba53c23103f47f593f5",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/49/96843457116c555cf113e8e108887e84dc1e19": "39976401fc0a6ab73bcd5f993758a368",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9f815c38ef406f62c8133f7f4f4c762d",
".git/logs/refs/heads/master": "9f815c38ef406f62c8133f7f4f4c762d",
".git/logs/refs/remotes/origin/master": "1432bd9887dfaf846e76c9bae9c1a3a2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "dc9319712df96e4b8b7d80aaf6a89a3a",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "bff22a56cae99e478ac195d3729ac799",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "17967e392f65fc1a3ab49d5a4fa33ab6",
".git/refs/remotes/origin/master": "17967e392f65fc1a3ab49d5a4fa33ab6",
".git/index": "94b456b6f0580d7eb7f560311ac634a5",
".git/COMMIT_EDITMSG": "d2508118d0d39e198d1129d87d692d59",
"assets/asset/images/background.png": "6e8b67c91b1bf0d3b0432714acb5f979",
"assets/asset/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/AssetManifest.json": "d9b178431817b9052d18365959151dd6",
"assets/NOTICES": "8c631b43d47cac94d0bbc5b519653e71",
"assets/FontManifest.json": "851c77823b0ef8f37ac8bb8ca48e19be",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
