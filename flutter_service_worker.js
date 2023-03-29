'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js.orig": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"version.json": "092d09e9eacc3bbfac1779c7e237a933",
"index.html": "51cddb12a116e66a23669873ec7c5af1",
"/": "51cddb12a116e66a23669873ec7c5af1",
"main.dart.js": "6cbd93b6e52aefda3a04f42dd8148d31",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_service_worker.js.orig": "4b59aa6de71370a8c82add46b02d04e3",
"flutter_service_worker.js.rej": "a35227314bc1f77b4c54b85a213ea4c2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b20d09a47901cab00fc82425184828b9",
".git/config": "aca18a1cce166ee81819b32e424261dc",
".git/objects/61/0f1a9b8048e418e1da8984f258fad355b20ca6": "c0730be3af0722ca75151f32fd4771c6",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/0b/2be32887d80ef40ca17e4d03485f31b8391336": "010a645e145e692af4db9ef6ae97f0c3",
".git/objects/93/e42879134013d9725178ad87763a2c262438ea": "a2d50971e6172848e772305eea087e9b",
".git/objects/0e/18ce0c35a973cbb9d5f4d31ca0a7ea6041cbb9": "beb06c226bfe5020ec9d520747715576",
".git/objects/0e/1876528f31383a62b4956a6c756877af74ae32": "ff6003df6e4a9cf0033b507bb02deb6a",
".git/objects/60/505aed8634fd2c336dea550695aea39a7c01eb": "b8edfc7f8c2f8e2d1bbb2af879cf00a4",
".git/objects/a3/d73c8d65fe11d9cfc2021a89b9ec1e6c298979": "2073c1da229ac0621bf5437c620f1873",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/ac8d1a0580d482a380591929ca02ad54571b94": "99792f546ad8f23efab809f4def51216",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c8/af8f6e7ff48ca34b8695b2df0cbddc6cde62bb": "03dec7614e75f795eb996c4ea0fccf99",
".git/objects/20/a6e4caf37fec048f89035c8c746835d592095c": "8b1353c013163300f4cfb02d6eb0b573",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "d47b406b850ce1df0ae8a6dd89727768",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/7d/c5f037819a07f0926337f531318bceb6934aba": "8986b12b248d0801a2bdb3f54694498f",
".git/objects/7c/2d67d95688776859aace21a0cea5508af943c6": "f2ed1d53d640d80b79c729d9e324d5e8",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/80/0bb0f2f8e97b1dae4f3d2da9301b7ff6481f5e": "641e423db229f0575a70e1d8f81a2802",
".git/objects/1a/350c8ca7291baaa1fccca2d7d965decc4b52cc": "7a38e87100ee1bceacb3daaa0f497ac2",
".git/objects/28/2e88b06ce6d459f91213143a16e611fd1901f4": "3cfbf7ceb9fdfce0f3b66e3d87adf205",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/db64f2d23800be080bebb77cd64159af2ebd7d": "f53b2a7754733d2bfcfe3d8e49b3696f",
".git/objects/4d/23e6bc735c02e78cc4edd779f245c39cb28481": "dca35141c2f0359f87efd2b66c8a5c93",
".git/objects/81/89788e47f36329a5b94dd046b1fd7836feeef6": "0082bd62cec1d5ff38f82e5b7a6e9c88",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/a0de1a61660bf33dba9ef705e7a49049188e64": "3d7418fafd952152ca08bc264bb5fc4a",
".git/objects/36/fc020b53b341a0cb8422d236fba9577d346f39": "e80fe887a83577a4f9c19f25117cc6a4",
".git/objects/53/f96318bab3160806fcdf2929e044a8b43adf3d": "8229acac5c26f1e255baed8e6f55bdf5",
".git/objects/3f/6bca56e9aea98a5efc6045b4166cace2cc1fe5": "935e86fd1ab290a729baa55e132e2671",
".git/objects/30/bc40528c0ac368cacdceec42296dba065d305b": "ab8ddec6addda311a2c0d55dd058aca5",
".git/objects/5b/b6e03c7a51db354e2468afe4fe3ef79e12a5b8": "bd6d7cfcadb33581c0fe2354bde29966",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/6d/6a951d7d6ee6c2ed6a8f146a21873a2383de52": "2f55e560a1ef6b50699ae1715b9463da",
".git/objects/39/77b287f2e635977b0a63525d93ae4917eb3ea0": "c94392f996b63e4167f90cbb4f6fd6f8",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/0a/ed61dfe83fbad918ebb8a0f1fd994046adde58": "7f1daffc41c27871b1372727f8c2bbe6",
".git/objects/d5/88970785d913d7dd9df20e707f218ec5f54996": "a829dbda1f081f4023904aef2255cc25",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/a3f227c6b5ed53888d1ade8a5af55a83834fbe": "e1e434967782c2b42e9cfa29d932e2a5",
".git/objects/e6/883a9245111688efed4b442545fb983e2f62d8": "12db88aae85c5d29bc7e1fde27a3cba1",
".git/objects/e0/f10f9424953a94d246bfe87d3dcc97b2094f6a": "9fac52cfcbb0c7d75dc6655e03440398",
".git/objects/46/0a8413d2eee84438e014771f61ce581879bf4e": "fc21c0baf73d5ad1102eb5da1e82a917",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/77/ddc0ba35b24e1e67fc769137c85ea8e0f24709": "9b9227900838f52c812d0d9ab85ed77f",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/76/59a04a2bcbc925246d1adb35d65bf7dddb0977": "dec778ae37c54b93cd4fcf37e42ab998",
".git/objects/49/b1f2ab510cabc15ac257d0946cbc88c56cb216": "f232c081f97d0c6d2845e35dab5c63cb",
".git/objects/40/315103964144010b6336f30a32c2c23acc27a3": "0b7d2c426233cf30c9391a8e05b1e174",
".git/objects/47/c713dc5c4d4a6f5ffe329b179aedb74953e941": "51e9daa1c84b470bcf61000fba0204b5",
".git/objects/7f/5ec8cc78d560aa6b559a727b58672f79c7a48b": "fa0549c995805d175e58267bb0a68ef6",
".git/objects/22/9e7d04e8b37ab4aafe0168cf5d206aa5bb56a9": "1cf6441b2e4b4cf13122d4770b251bb6",
".git/HEAD": "77eb0fbfaa6d40bd4200905d8f30e434",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8eb1c7f2e35d33b02bd20318bc780e49",
".git/logs/refs/heads/web_flutter": "8eb1c7f2e35d33b02bd20318bc780e49",
".git/logs/refs/remotes/origin/web_flutter": "a2d2f150bedfa16e0b47541b142173e8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/web_flutter": "855cb468b1ae5702b86320fae50ec5ab",
".git/refs/remotes/origin/web_flutter": "855cb468b1ae5702b86320fae50ec5ab",
".git/index": "9d580051db6c8c5e9ce459806d7f21b8",
".git/COMMIT_EDITMSG": "4d8a70d04f5cf4bccfbb499123a12758",
"assets/AssetManifest.json": "0e869b9e5e1b054ba14c719798bf4217",
"assets/NOTICES": "386bc7c33291fe3e482515db8aab43d7",
"assets/FontManifest.json": "c2e19ce589558c9c9da084baa7d28d13",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/fonts/GoogleSans-Italic.ttf": "b08c7421b2d5350ea3003c8f38932601",
"assets/fonts/GoogleSans-Bold.ttf": "c0370e8a74992bab73461f8348e3b369",
"assets/fonts/GoogleSans-BoldItalic.ttf": "aebc8fe5e393970fa3d468524e64b670",
"assets/fonts/GoogleSans-Regular.ttf": "51134713ade7b1f137e06ce395d39d40",
"assets/fonts/GoogleSans-MediumItalic.ttf": "fb674b7b0ac8b18da163673c10081610",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/GoogleSans-Medium.ttf": "6e8db86fe091d16a432715917e040f29",
"assets/assets/tag.svg": "c30964a589457cf7eb9771bfe43f9710",
"assets/assets/reset_image.svg": "b512e78cddf8e6d836f1c07b4387f4be",
"assets/assets/keyboard.svg": "00c743118469190deeb6f1e2878d63da",
"assets/assets/pen.svg": "efcb3560bf144e8fe33d14ca8851613b",
"assets/assets/instagram.svg": "cf2e1e98a16b2ead3cec7acda92e9baa",
"assets/assets/share_plus.png": "c33c3597f9614a6407badab75aabcbc4",
"assets/assets/badge-generator.png": "a73e6842a3f0f6038b5d947c8b267e35",
"assets/assets/iwd_svg.svg": "b7cdec1b96359360a6e2dc6b5778d03e",
"assets/assets/gdg_manas.png": "11e942100306e8170c7002d3d37a1d66",
"assets/assets/youtube.svg": "bd480dd3ed20adc2803bd5eae9758b53",
"assets/assets/wtm_logo.png": "c4796f1018e60ab626a7b55dc3b7a67d",
"assets/assets/resources.svg": "f2c994a553912ef8e3a46e28480b0a89",
"assets/assets/twitter.svg": "9586a882d12b5f5e63597368bf8bc42b",
"assets/assets/wtm_logo_grad.png": "64ce58a66082eea1cec3d9e96a8a1b01",
"assets/assets/%2523iwd.svg": "cce1408ecfb57f9d3d8c5f4bc9e8a711",
"canvaskit/skwasm.js": "f5e03c14bc3b3f086b8efd6dfc2b4cad",
"canvaskit/skwasm.wasm": "a19be7c8a24a3c5af75b8fd8695a95da",
"canvaskit/chromium/canvaskit.js": "cc1b69a365ddc1241a9cad98f28dd9b6",
"canvaskit/chromium/canvaskit.wasm": "120bc539e00664ceb2e882a058588088",
"canvaskit/canvaskit.js": "73df95dcc5f14b78d234283bf1dd2fa7",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "661858bed36773957d3dad4cc3e167b0",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"
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
