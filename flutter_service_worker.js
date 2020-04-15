'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "768647c616c68872b6afab7e551e22f6",
"/": "768647c616c68872b6afab7e551e22f6",
"main.dart.js": "36fde4acfb1e9b736761004899653a81",
"README.md": "9938bc98cea34e4dd46512ced40349be",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "90429e89de58cfca8f025ed8b460774a",
".git/ORIG_HEAD": "fb9111d988116a362b217dcd8f1c1369",
".git/config": "d5b4c515b78b26e65a151d244afe7c08",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/92/c4b2bd878d2ec808b55f532665a4d8223528c9": "1d04344dda763817c03b56215a26fc9b",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/5a/56604da6e8771a40909cf93afb579668e0f02b": "816ba60b18f58f94d2cecc027b00f869",
".git/objects/02/91f0c2cf03a15dbd8bd0df2a57ed2d799b5491": "4cefbf4d4962221ba10b7770debf6d16",
".git/objects/ac/437715f3a4bc4cbfd32623bec7bd3364970691": "9fb1ee534c52aa6d2e25851e90336aed",
".git/objects/d7/c667c095b296dd3847fdcb432a8362c8ebeff6": "ff881d178ba4e4dd4279f4fc313573a7",
".git/objects/df/6112acd7efab52a86142fcb48bfc0dc2c8fb4a": "ce85fd49c7d6af7b44ae8230fb7b4b73",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/ed/c940857c838a133be5277b5282c8dfec2a4f48": "18011b8fd67a58d5c801690721451584",
".git/objects/4e/5cbcd1bdb7dffa8fea3a5b60a2647d0e26e18c": "2b82585d887264a8d96e3e486fa095d9",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/46712fede8f9f5b5362742342ae4575c2a5e7b": "1784c16260e7577835af2db63c2b65c4",
".git/objects/7c/cea221e15aa2e3e5be043045d2db8fa553b6ab": "8c3e533132630a91be77de7821bed870",
".git/objects/1f/2f718f033a209a2e37375058bee87af0b83ccd": "e5bff7849c907df02e565da15abc4f9e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/083eeda5546df0fc88964a2355cd6f84461816": "771ed409497bdc6ecf9c3f418fde3e09",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/62/5ddb540d30422b47b1e44663f319431d2cb347": "af0b24856f06a11d1973d3da4271feff",
".git/objects/30/510e98d94e205211ce1e63e0276cc32cded2ba": "a3d452398648483a2d484f23dde39f6a",
".git/objects/5e/93c5f16c332c7435bc28555b62bc432c51fc63": "e2440bf51529f7bd0f9a80dacdd2ae56",
".git/objects/39/258061e0b9aa624ea1365cf6cd4a030e5137dd": "4eca5742ce4df31812391c0fae31c5d2",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/a9/377a7a553ad8220c84368845a8d02ca607fd2a": "81390f6c7a02bb22b47eb7bc78d06d97",
".git/objects/af/771c435d4739d640611bab3fe2f41d6f30c948": "2ebcb59ea79be77ac122a0ee8b3c1360",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/17e3fb74961237712352b7df195dbed601874a": "ad86a8683dec6488818d90d6e5e6cebc",
".git/objects/f9/dce9250dd41260f6c31a4c8f41c550fa409ab4": "3d89bd31526a017b3e22ad9a90c610f8",
".git/objects/fa/274abd7dd91daa110bae764a6dd93a7bfbdcc2": "6d534ec9d38939ab6543744b8a2fdfb8",
".git/objects/e9/8186f61b037b3bec8a6b7dc31bbe80aeee39be": "f889c89fd1dfff18307e1f916fd63bae",
".git/objects/cb/6f25c0bbf51db835a25217b3c4ddb3b1f1d233": "b679181956c5440c2fa95e160f481c5a",
".git/objects/83/eb085e9efe2eff4b67a2e8e9f0e095b7ca264d": "d2b56eb5af61f698e67a6483e7e0008c",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/2e/ca59da06a54280642e700cfc77f337399f7492": "fad4ad91738d090f5717c62f4120e46a",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/7a/62b9d5927af02ab29f9e53646ad147d278045e": "353b27ea7170aff952db85e87c42f329",
".git/objects/14/daf3a55a4d8d51d9a61d744ba7919e5c85ea3e": "71067e98f991e41b464cdeda95b37a58",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "670b8175526a76ea2d41ceb9c5303b7c",
".git/logs/refs/heads/master": "670b8175526a76ea2d41ceb9c5303b7c",
".git/logs/refs/remotes/origin/master": "a254b6f14d7a3205e04433928aae74c7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "3ff6ba9cf6d8e5332978e057559b5562",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "7dfe15854212a30f346da5255c1d794b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "fb9111d988116a362b217dcd8f1c1369",
".git/refs/remotes/origin/master": "fb9111d988116a362b217dcd8f1c1369",
".git/index": "67fb05382f1e8b968be5a98158911411",
".git/COMMIT_EDITMSG": "e90b49face650927862c5d13384da374",
".git/FETCH_HEAD": "076f601b03432a7a4412d6cc64472a81",
"assets/LICENSE": "eb88b7f078ab7b78af977444f9ce1605",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
