'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "71ccc646d850172ceb0c5ef8da0734dd",
"index.html": "cfb28c4c7c85d3910c94b2427e656bd6",
"/": "cfb28c4c7c85d3910c94b2427e656bd6",
"main.dart.js": "7d66e9bb487752e12f728ae57dbeb586",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6bbd1fcb001443a9eebcd725af9fc87d",
"assets/AssetManifest.json": "24683fd5e604374eb7dc9cf709c5d476",
"assets/NOTICES": "6543dda8183c2a020841f796b4f695b6",
"assets/FontManifest.json": "8cddb4cc476135f2d111c411e4c92412",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/ProductSans-Light.ttf": "5ea2ab343da06f7eb96ea959895665ea",
"assets/fonts/ProductSans-Medium.ttf": "9c51beb79b8ab173abd924ce39178f0b",
"assets/fonts/ProductSans-Bold.ttf": "a19a7b108b2e3961fc855c6ea5a6546f",
"assets/fonts/ProductSans-Italic.ttf": "af05b47de35fd5a5960ad1e440a4c0c7",
"assets/fonts/ProductSans-Thin.ttf": "3c36b2574c62d41428b496b7512e952d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/ProductSans-Regular.ttf": "b61c0ab33a818a0162f3e868babcef4b",
"assets/assets/Chukka%2520Keerthi.png": "0dee701937aab5b4b3d204a5e733cb09",
"assets/assets/Sai%2520Chandana%2520Behara.png": "61c5717a7a431156d00b30b091f505cb",
"assets/assets/Vaishnavi%2520Gurrapusala.png": "8e71901b1c98d3183bd9f453e62b5a9a",
"assets/assets/Maanvitha%2520Allampalli.png": "41af0c313570f0e1c2f9ceb0a06dabed",
"assets/assets/Praseeda%2520Saripalle.png": "575105f907aa3c1cabe2a3d70a77b26e",
"assets/assets/Sai%2520Charan%2520Grandhi.png": "870ebde05f863a09a081cf2537b00857",
"assets/assets/Kumbha%2520Sarath%2520Chandra.png": "88cc5b8dbff9dff20251eac4f558fae7",
"assets/assets/D.karthik.png": "441b79bdccb3e1ea45b49464ba6bda9a",
"assets/assets/Ramesh%2520Kanuri.png": "6eabf6ec2029f2a84271bde59df5c646",
"assets/assets/Abhishek%2520Dusi.png": "82278e8faf8c74706ef4b50bdcafdefb",
"assets/assets/Divyanjali%2520Madhupada.png": "74192c962709ace353326942a2216ec0",
"assets/assets/Piyush%2520Mishra.png": "0daa695729c6f0257cb36e8f70255614",
"assets/assets/Aparanjani%2520Balaga.png": "d21d8d2953428e007f4a90fb24a6baee",
"assets/assets/celebrate_technology.png": "aaf93c5edfad20bff02e8b66e8052fb8",
"assets/assets/Sumanth%2520Paila.png": "3978be7de38337c95b8313078eb366b3",
"assets/assets/Harsha%2520Sri%2520Sameera.png": "40f5bb9e56d362fc4b02a477d53bb0b0",
"assets/assets/P%2520Kiran%2520Kumar.png": "fd7d52bbc99cf06a342ed433da027f26",
"assets/assets/Sowjanya%2520Tammana.png": "4654f0fd9d3255721209358b12c69df8",
"assets/assets/Manas%2520Malla.png": "def95cf9926b566329515784596d203e",
"assets/assets/Naladeega%2520Amrutha.png": "43908f58a1fd47551b0f0569260c9c70",
"assets/assets/P.%2520Sasank%2520Raj.png": "2ca19dbb076b472084ffa10270118f8b",
"assets/assets/Pedada%2520Durga%2520Venkata%2520Sai%2520Kowshik.png": "46d76b129c59b32bda9b3640d25696db",
"assets/assets/Kanakala%2520Bhuvana%2520Gayathri.png": "6b189ef940932027ae630b4ce636caec",
"assets/assets/Ganesh%2520Kumar.png": "aa6dd9ba76fd13290536fa8b755727f4",
"assets/assets/Bala%2520Tripura%2520Sundari.png": "22740abbac896e147b2efffb45586216",
"assets/assets/Vintha%2520Vigna%2520Venkata%2520Sai%2520Anjani.png": "bbc471faf267d9aa75ebf3932a36c27e",
"assets/assets/Swapna%2520Dande.png": "88879497b3606e9da4381791f3334280",
"assets/assets/Gadepalli%2520Satwika.png": "9603f7eca10f5fd08ac4d88486ed8c4e",
"assets/assets/Jiya%2520Ull%2520Haq%2520Shaik.png": "ef6f50426615914fe24783aed4f649df",
"assets/assets/Pillalamarri%2520S%2520S%2520S%2520L%2520N%2520Sri%2520Harsha.png": "41c7ac8e8dcd30ecc6dba0824de29e94",
"assets/assets/Sandeep%2520Guttula.png": "e07c039336aafe0cf3767a021d6a471b",
"assets/assets/Pravallika%2520Gundubilli.png": "33dfa998818ad4a528319d0238ce80ef",
"assets/assets/Syed%2520Farooq%2520Ahmed%2520(from%2520Adikavi%2520Nannaya%2520University).png": "5cd6fdb051ceddb2af68cff0a6638bf0",
"assets/assets/P.sai%2520Likhith.png": "822dee1f4adb8d34e5927c82e16727ad",
"assets/assets/S.r.n.himavarsha.png": "eca3be2b771e659279b8cbe688b5e032",
"assets/assets/J.meghana.png": "9d830653d0bf6a935593d1a1c4ec51b4",
"assets/assets/Akella%2520Amruta.png": "ef7b99baac59e23dc69c0b8e5fef376e",
"assets/assets/Kevin%2520Mathew.png": "882469a052446bd2312f512b2963ce02",
"assets/assets/Pudi%2520Pratyusha%2520Naidu.png": "dc54444788c11ad5e0a7ce3f4bbb1088",
"assets/assets/celebrate_technology.svg": "ed13388730e39f610feb3dd7d6ae581f",
"assets/assets/B.%2520Chandrasekhar.png": "6fdcae8de3d62887ba2ced534f2c573d",
"assets/assets/Karthik%2520Vaddadi.png": "3d082f5272d24eb7766a19095c66e090",
"assets/assets/Thangudu%2520Dhilleswara%2520Rao.png": "499c704d3c33cf657befae4e9e204941",
"assets/assets/Kusumanchi%2520Yaswanth.png": "2ade31b1c8bd052fde79c576da4bb598",
"assets/assets/Cheepulla%2520Kiret%2520Jagan.png": "3369fdc89a125788321844f0f6b0c2f7",
"assets/assets/Diksha%2520Patro%2520B.png": "bafdfe5917fa159e01df44ec78ef4e90",
"assets/assets/Pratapa%2520Sri%2520Venkata%2520Sushrita.png": "ca310c652eb3d58c8e679d34c3ec2a30",
"assets/assets/Monika%2520Kusumanchi.png": "07bf626ab0e979fa78c63ac7aabe25ce",
"assets/assets/Tammana%2520Uma%2520Prathima.png": "30e6f373fa40182dafd9eeaa96ae2852",
"assets/assets/P%2520J%2520Kumar.png": "eb3d6ed30f2a6927129b40aed57ebfad",
"assets/assets/Dabbiru%2520Alekhya.png": "58e6a4eb69bcfb1e14cc68ed419a1bb4",
"assets/assets/Karlapudi%2520Bhagya%2520Sree.png": "274b6681389f75ca2fcad8542afa6406",
"assets/assets/Jayanth%2520Tadikonda.png": "370c8a9d27641fcc1d9850e3a26d373a",
"assets/assets/Doddi%2520Reshma.png": "291400c2d71206bbbd57885a9c101f6a",
"assets/assets/Chandini%2520Ravada.png": "d23d622aadbcc5f5a37b5fb281e0d9e5",
"assets/assets/Mule%2520Sai%2520Krishna%2520Reddy.png": "899883844f3410d21143a7d0195cadb1",
"assets/assets/Sai%2520Kiran%2520Kopparthi.png": "fa4c7178d402290e7590a197e70deb16",
"assets/assets/Kondeti%2520Sandeep.png": "1100f103fed7e078db55808a97195ce6",
"assets/assets/Laasya%2520Kss.png": "fca0e1012d198e1f406c5ac237663525",
"assets/assets/Donkada%2520Sowmya.png": "a59a77f3643a7f52ccd2e4198747a2e8",
"assets/assets/Annam%2520Sai%2520Kiran.png": "9490349bad733dba78947a3b503b128e",
"assets/assets/Maddala%2520Sravani.png": "281e029f1c468d2b025224914312476e",
"assets/assets/Lakshit%2520Malla.png": "10b93b447c1462663ff9b4dde59202e3",
"assets/assets/Shaik%2520Mohammad%2520Anas.png": "efec2f45c38f796caa8a703cbabe7744",
"assets/assets/Lakshmi%2520Praveena%2520Bhallamudi.png": "1f69d7b20ca9219903b5cec90b5b2f89",
"assets/assets/Soniya.png": "db18607ca8abace7ec7c8ddd1e36920b",
"assets/assets/Sreenidhi%2520Bulusu.png": "1091e3878689b064c42a290a6e7b8fd6",
"assets/assets/large_tshirt.png": "80cf75e4110b0ff1225645dc82c43d03",
"assets/assets/medium_tshirt.png": "701b9917c86944009f058bc13d4eb2c0",
"assets/assets/Venkata%2520Sai%2520Revanth.png": "925add03bb401f540f6fb5f212d29cae",
"assets/assets/Mahati%2520Lakshmi%2520Mithipati.png": "495c96133ec2202b94baf49afaf62cc5",
"assets/assets/Bhagyasree%2520Sanapala.png": "4a39c09c58e473f0f0189243668dc414",
"assets/assets/Lathifunnisha..png": "df44b11032d8d10dee2e6c8c68fad7c4",
"assets/assets/Chandrika.png": "f1a28a7d04a1921fb7e2f2d696fcf769",
"assets/assets/Anand%2520Yamarthi.png": "cf44672c20e3088933cc38755179ca54",
"assets/assets/Jahnavi%2520Gullipalli.png": "e8074ef2cae4c528589fa99744ed9579",
"assets/assets/Nadiminty%2520Surya%2520Venkata%2520Rama%2520Kaundinya.png": "7bd63647015d42691ab60f663fc6663e",
"assets/assets/N.v.s.%2520Aditya.png": "db81c2b79c9b217fb1ce0bc942e7c563",
"assets/assets/Bollapragada%2520Vinay%2520Sree%2520Sudheer.png": "1fe37eca1cfdd50a094aa9960dccdf3d",
"assets/assets/Pilla%2520Shanmukh%2520Venkat%2520Sai%2520Kumar.png": "fbca93e91e8196145baa7bb7a39060bb",
"assets/assets/Nani%2520Samireddy.png": "b3b8e0ff87aef36c9734d63b258fe401",
"assets/assets/sundar_pichai.png": "b5c51f224ab304ed93fcda77ddd0887a",
"assets/assets/Jagadeswar%2520Rao.png": "3ba93cf14d5b8679cd8d73b10342439c",
"assets/assets/N.%2520G.%2520K.%2520E.%2520Mohith.png": "0abe708f8ef82068fd1e3dc329951e02",
"assets/assets/Gautami%2520Mamidala.png": "71742e5f950c8607f5e214c5042a5cac",
"assets/assets/S.%2520Sandeep%2520Kumar.png": "1695efc990d86de275ea4eac9cc6583e",
"assets/assets/N.venkata%2520Raghu%2520Charan.png": "4cc38b610bb02c5a52032e3f5ef9b765",
"assets/assets/Charitha%2520Dakavarapu.png": "f3d31f863a173e9539480edf0ab12389",
"assets/assets/Vinnakota%2520Lakshmi%2520Sahithi.png": "1576d88eb66ec7e0ec7535f7afbfc638",
"assets/assets/Sushmita%2520Pratapa.png": "b11816030a6bdc08010d1ded549ff5f9",
"assets/assets/Marykoti.png": "2802b7cf4be72b2da70b99999140d937",
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
