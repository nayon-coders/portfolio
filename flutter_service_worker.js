'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "ce7dfeff52295d6e67cec44f639ff6d2",
"/": "ce7dfeff52295d6e67cec44f639ff6d2",
"main.dart.js": "dfd4f8ce5e52d060e0f60dda6aeb2314",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"README.md": "40b2e4a510bcc1cf8044d2df6c14f9c7",
"favicon.png": "b7a86846fa410a419fb084c475a1adef",
"icons/Icon-192.png": "45ccc3c17e417eb1ae5cf520c65d3f90",
"icons/Icon-maskable-192.png": "45ccc3c17e417eb1ae5cf520c65d3f90",
"icons/Icon-maskable-512.png": "8e7d731479c8e7407e6cc7a4038518fb",
"icons/Icon-512.png": "8e7d731479c8e7407e6cc7a4038518fb",
"manifest.json": "1fdfc04f6ec0173e569796c6db6f8342",
".git/ORIG_HEAD": "42e8bb096ef41322e6918e06c6419df3",
".git/config": "699f1910fe45177b01d3344885e2b29c",
".git/objects/95/1df3254760b7405979379a446d570e5b674b18": "cd2d486b41954d35f9143c9a7bff3bb7",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/3b/04c5c4810c046ddca9c7b3d1308e96381f4a98": "bf1288b2e15f28560e37d3cde3318712",
".git/objects/9e/eb930e4b1d93e893f5265cfac4cfa058d3f0a7": "98be54a3bce25a0b8914c3fc05e9fa64",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/35/4a4c75cd288db75cb42573442a99390724e8ea": "e71b7ed0636ecbd43e391fabd1370ce0",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/0e/6c79c1351fcb1d475c391f44f547129d907921": "06d2a888cf7fa28ecdbd567451c1050e",
".git/objects/60/8f6a012db1cbd10e3c9f45403a5b3d8daa3d4e": "5ba103afad2956c2724c379bcefbab1b",
".git/objects/9c/50abec50c5d9127b460f495cdf396d81e0e478": "c14aa21e2a37720e7846f1bc68047000",
".git/objects/a4/a4f4b21a5b5d459dec6726b7f9bb3a4710a783": "ccd5721686735ca5f11721d831284a86",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/df/0ee2dbce52bbed01b56fff0ef4f048a7c71b6f": "6b7813243b19b9f3cb7753361b0da27a",
".git/objects/da/c93745a0f5d845f089e50f1b6a5e11a4bf03e2": "7b6213a6acde46a29583a60cb660f083",
".git/objects/b4/14166b8ff2790ced44fa17f2f11b3b20cf7939": "3017aae7b86d494043845a653acf91cc",
".git/objects/a2/34eaf2056451387652e5724eb0ed1f268f47a1": "524f7ca469da8d46e7c151e2672f4764",
".git/objects/a5/b5ba32b2b614380c0f606ded8f0c4edc67a06b": "c8509419bedf87c61b1202d34952aad2",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/fab32f2cbf88efdd244dc9079f23f0c6556c40": "a8e4f77851d3b453af7d16c0b8c66d48",
".git/objects/c7/fd7d86e171aa5a14bf2d5c21c1253b883bef89": "fe5a7e2c0c97b32cee59c0cfd5678d59",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/fe/55320e157966f619a07aa49d7d28023c58d748": "1b3e89d25957ef5d6b09ea0298bc6216",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4b/c8e347bdea192817570bc61a408f5af08e9465": "111667fc5ff350692cdbe039bb2bbb53",
".git/objects/11/734375c6fa3afd7d6aa9e2b55c2c259c9bc655": "aad371911ccda5cbc9aff4b0fa49c19f",
".git/objects/11/ff6b93bb812eded195a0c5f0b90c4dc27f9217": "e472169081512a152145f4bcb6ad4f78",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/16/4a218a7ef6309d18f56b6fbc042bf8a8995cdc": "7b78469664b6f3dfdd96cbef0feb2c1d",
".git/objects/45/1b796812e740beee378765c8185aa96aad50c4": "632c18bf249528bdf7fce88a095a288d",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/87/bd99e02c05938425d6f85a9e269f094b00cb08": "bb98e1207b2d1840a52a7e886cb0de4e",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/28/298999cdbd1855e34a76dca812c2dba63bf2c6": "a35d4cc855fa14bc3057c3a642d65376",
".git/objects/17/58116030d57acfc02c0f56f02b56684c273d49": "22bb84cecabc1ca5cae127da64d7e0f9",
".git/objects/7e/db2433d58df541ef563c419a70593f783e26e4": "770b1b096c77e84dce658ec4cba73bcc",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/26/839357e7d8ba412db982cde6c6e8ba44cddf14": "8fbe62f2026f4b1be4c5a599a676e340",
".git/objects/21/a39eb6a096027bf15848cb6f45845bae8c9f71": "ff1f6f38465c8a28bb741e8af5db8f03",
".git/objects/86/2cb37e406218bb6ce81693378cdf14d0194e83": "59a9a7818911d070aed2876cf3d413f2",
".git/objects/86/ff4b25f60f9c585848db987ba74c24498073a7": "2434db12b4f150237e3f84b65e0f455e",
".git/objects/43/91fd939f51027110bcd54ce9ad9f381c9b18b1": "5d5f33578c9a006f43a6c87e1b53cb8f",
".git/objects/43/07adf201433c2664c7b80a0ceaf2874e2cebeb": "3525e4bf5c374a2e593557a844a3b5ff",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/9a/56bdb8ca020ecc8f512071ff74c1c05f8c55b2": "9aca14e3d43a215f95811c493c240b3a",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/96/dcd9913d2de0e9465cde30f2c2c8edc0c9482a": "d0b3ed3f1516bbe4d0aff726acc1f46a",
".git/objects/98/430c2565619b29c6430c002bf6721a5b2383a8": "febfcb2efffbf9599a7153b8ab31449d",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/99/86d5c2b5dd9d9afbc1c2505e0d234faf6fe89b": "3ca8c3f5613761b1160aefe47762217a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/b74915d08b30e229ce31315b1bf4f5189cca84": "0fed8de36fbab50db8ab129b241a4260",
".git/objects/55/3f6ee43e0da4e396254beb3f08057bac18e436": "eb28010cea65dc268b1ecf23bd6eac68",
".git/objects/97/acba418280047229eb7a12e224253c326a1baf": "f18f3c5ab3271674a4cf479f8908e728",
".git/objects/63/9900d13c6182e452e33a3bd638e70a0146c785": "488924a8ec51457535ebf377a60e23c8",
".git/objects/0f/41a01212b2112b890412ba00ef11f48827eb4e": "6e4c108dbbb23983c0ecdde2214b748c",
".git/objects/bf/2c2d3db3736584752c2c65636882edb48a4be7": "1327713fcbf9ff0fa9da5dd8fcc2c34f",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/aa/47a4287523c30705f2d46168a0a161a71ccddb": "06f0cb04f66499caa81dc432cf60a407",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/0a52ec307942a39e588560b526256b1b50ec44": "07cde0ebb9b30cc7fb372159b048160f",
".git/objects/cd/98b881bcf679f6b5349f841db1bcf6ccd8a5cf": "8e408f39a4b3f5699992242bf54c3877",
".git/objects/f0/3acf80d10ef5db2ba0b45d5a213f22442d7497": "d10343c2a67a497e393990d922843187",
".git/objects/e9/d334b8ec4908176548d48e273e94e5200fbdc6": "c5fb718dae2aab1808775bc0e92edaa4",
".git/objects/f1/b51d52f3ff1395497b9c2184d3c927e5428308": "5d85caf55673d87263d603f74a39ab8f",
".git/objects/f1/6ac67e15f747faad8c6b0c99fdeeaa427a8057": "ad78afc45a924483c8acb697783259aa",
".git/objects/ce/8a0407af949b72ec28bc97f6e702c47be0e22b": "741c0973cfb90f73ec84b9b587b2014c",
".git/objects/e0/ef718fbccb19574b7685619c6e4e127f86ef4d": "6cc4202bc370f9308ea9c14b655a9730",
".git/objects/46/d55d1440b2b2db85c0c9cdfe32b6488d11a773": "49e04db10a0622a32b0079b6d4bfaf34",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/12546e58c524f65040598e341d80d1051e2096": "5fb8eeb8f21c703cdd7479bbed21cd74",
".git/objects/1b/993b092fe46dfcebce368a11ebd93856c5bcc2": "aa1c0567ab10083351abc3edb3d835d6",
".git/objects/4a/bb6df924ca996a8f79ec725b8a0ddfab8d2e2b": "92d145942895f4de15efa8b5295991ba",
".git/objects/4f/22e7030db1b5e9d99f1d45833b6b34e1d10f9c": "e48966da348c274067100e761fa16003",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/40/ddea80c3189bbdbee1f21dd3e5ba721268b70e": "75dc30d3102b65a8af48cfb285276026",
".git/objects/47/ec04d270ad14218f08c06f3c3a37a2347f8d61": "4b18b8fd36cf1f35b40718bdf8166960",
".git/objects/8b/9f5d7b463f9b6652f36087f78a5b71a44b7efe": "3de0149be2c466be88e9d80c7da67d9c",
".git/objects/14/007bd6a935e39b1b0143f70cc1fc4c7090ef95": "f410e72c2f8befffda3bd5446f2ab180",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7fcb126d2ea364420e885f195c1ba295",
".git/logs/refs/heads/main": "98b3853ddfb3800891c3985a66e63985",
".git/logs/refs/remotes/origin/main": "a174e906685a557e5a3c6cc5fc8e6c39",
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
".git/refs/heads/main": "42e8bb096ef41322e6918e06c6419df3",
".git/refs/remotes/origin/main": "42e8bb096ef41322e6918e06c6419df3",
".git/index": "7ea9bd62489974dbc16d3b1c41bba141",
".git/COMMIT_EDITMSG": "972f09e957fd9afd190157bf6182fa98",
".git/FETCH_HEAD": "f6b98d3622b85550c32fcbe68dc393fe",
"assets/AssetManifest.json": "ab12dc128c42d8cdcfef6568233b3841",
"assets/loading.gif": "602efadf1bcfb2d6b7ac7bf3c91430a2",
"assets/NOTICES": "214758e8ab7a44775868c67b26be8385",
"assets/FontManifest.json": "9079600dd6cc1457502d9273b45170aa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/10.jpeg": "8fec35eaa29d8d382162959a1b109baa",
"assets/assets/images/android.svg": "0a04451ad3b5886234ef80268c803e46",
"assets/assets/images/1.jpeg": "a2b289a60142cf833a1f6e563db6af62",
"assets/assets/images/11.jpeg": "3dbe4b28c60340c6492fdaa23daa7cec",
"assets/assets/images/dev_img.png": "690977dc34bb0e1bd9e6a14df83752e8",
"assets/assets/images/14.png": "8a6ffc1c24291211cd3814450431662c",
"assets/assets/images/portfolio_icon.png": "7cb8fcd768c7538bd9c9efd457a0df18",
"assets/assets/images/6.jpeg": "725a6aa88d56f3d05291a26b9d117e42",
"assets/assets/images/7.jpeg": "b8b292755ac00b61df3004b995bb82cf",
"assets/assets/images/13.png": "2cac48612f6ea29d9f95eb9ceab5f273",
"assets/assets/images/ruler.svg": "4791ae452335f1ba68a2787f872f3e5f",
"assets/assets/images/slider.svg": "a4fc3ee8b34de4bfab375880f4297c49",
"assets/assets/images/8.jpeg": "12d70514184c6d5fe548d33e155cdf3c",
"assets/assets/images/dev_img.jpeg": "e9686621e99f22e7aa1fc4d993ed51aa",
"assets/assets/images/4.jpeg": "a0502115ba2eb81c0f8700a7ec7e9485",
"assets/assets/images/5.jpeg": "ec647c165aba6bf69bcd4a67af83d4b2",
"assets/assets/images/9.jpeg": "3a5e88ee8e5feb594a1cad04b96ce88f",
"assets/assets/images/2.jpeg": "f6953473da55d90ba2e6ce4e9541a051",
"assets/assets/images/3.jpeg": "7bfb00aab5ff06f8b92c73d0a6ab96f4",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
".idea/workspace.xml": "b31617147c69aad9a09765b94033f9a2"
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
