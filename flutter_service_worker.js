'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "60a1abc9c4ca5a042f515a7f91ec7b3a",
".git/config": "224a778b77fcc2231e78ee31d7ee0348",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3e4faaebdbb13bc0a18b1a6a595ddc86",
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
".git/index": "0bed645ee406e194a4313a3bd0e3cd30",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dc7dc4ae44c92b49b6eac87ce6debfac",
".git/logs/refs/heads/master": "c174d2a349689a3abeb1f0764c9f0dbf",
".git/logs/refs/remotes/origin/master": "4b562d82e4e4540f0ba85b26465ec592",
".git/logs/refs/stash": "5a35891e98ad29ef8000b2443cf04598",
".git/objects/00/6b86b093caa32dbd630ffaebe74f966843cbc8": "a643ba07a308a964d6f8b96c0fe7aabd",
".git/objects/01/0e99ef711f6bb535fbe26220e3427528790e12": "2f467bf873d47025b2b58aa23b5eabdc",
".git/objects/01/33ba19d89f8fe38307f5e093db841f1532b21f": "2f3bb3d58cad2d396c6b812e048b2717",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/05/b7b4fc6b40efe2322fd10909e879b34bc2e4b7": "296c854e892c99be4fa9dcaa7ee4a115",
".git/objects/06/2fe1ce89d0a0a848ad344513314bc2aba5145a": "5b69e6e90602e850f9e4873a342dcdc1",
".git/objects/06/95b49d103d54dc05e3af499bd99b69eefd8d1b": "e160c35abbae0f83148f57479ea6dfe1",
".git/objects/09/10db286aa4ff637b6ce117086099a32b72436d": "ce5105f82d0cff754b6e7e7401c2e6a8",
".git/objects/09/24de8a1b6a7ed4187d062efdc761f6cbd2522f": "786796f60459d41e817423c9b438e411",
".git/objects/09/c323321391dc1ffd63a46018b7718630899fa8": "538768dbb31bc9c42aa1487b92604fda",
".git/objects/0a/1af2ab23fc0a0dec4ffb1c7660a5e306061e95": "1e2cde1a6d793d06d3672fd99e3381c6",
".git/objects/0b/ecaf907136ac2d5eed208d45fbe0481aa0c920": "aae2172f766e807580cd7d6a49760b87",
".git/objects/0c/76787a732704c6d1853ac37392bb41934538d7": "7f1e6bbe883f93d51b92950e58243543",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/2d0a74adc265d0f7fdee1df2a38c99747c5427": "a66fc6cf9d0701c6d31f4a8003198cb3",
".git/objects/0d/94a408ed94acd2b73c346adc68f6e1b6d29bda": "f5845a6bf6d16122375ba28e5f2531fb",
".git/objects/0d/c165a1927da8fac1ecf01a0dd97c0276acec57": "c616bc27313dbebc7372cc4731b4d8cc",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/10/615c3b044cff1ebe833f1bc2b3e8f1604f9e5f": "5469a2161f896bf45a3e126688dd11ad",
".git/objects/10/c618d0d96845fa6f8dd00c8ad302b5d84f4c6b": "f5cb502ac9127d8cab8a8133b8828ae6",
".git/objects/11/e7b38a0bcdb6ae996997b1e2d4fb0a4d7dcde9": "e2083182a68060c093417a3219d84145",
".git/objects/12/2e27d9d184c1e4378c53a9eda61d4967d79130": "42f898fa32918f4ddd466f64952a1432",
".git/objects/14/4340a4633be2a0c8f70190149dae8abaf087d1": "b32c820db7108bd16f128dbe3ab10ebc",
".git/objects/17/ba01a278470b7528028f54f6b4696f8fc7c2b5": "78efe7ec3fb681e1669aceb0db4d8d08",
".git/objects/19/84f5ca5b6e16817d8638f13dafd28a1efb808f": "082c7376b93a5ef31854a1f04ad90cd2",
".git/objects/1b/5c715ca4d293e141ed8b4b6cac7693ffa7c752": "fb43f0d0922adaf74d807f7e2755987c",
".git/objects/1c/310befd68f544e5d85fb3a5c35d4f14b9ea49a": "5e925409858d3812e5c799fa7161ddbc",
".git/objects/1c/b0d8603e6f6df7aae0416d3a551c03155af8a7": "a4146efe4551088f0ca94476e2ce4b18",
".git/objects/1d/68d23f2b8c55b63780fb827d19317c6e80364b": "964d99ba8e2122372ce1eeef5ef43e11",
".git/objects/1f/40d0f274495c977f1bf49d2ccf03d0a47ee3ed": "c4b4a5c84adcc3b626d9eb15d541cd87",
".git/objects/20/9cae438ca08e724a7fb261c30bc6de5f8da078": "95ddf0f16aa92af7f777591525eb52ea",
".git/objects/22/3db193c9de5ff07e4afa1a3ec874221f48f728": "68d461e710b2c7b7b43d697fd96813e8",
".git/objects/22/4903bf1a974adbcae7255b8ea9f0e8aaeb0fa4": "0938b60e3ed1e770ace68b3f3c9f6d85",
".git/objects/22/aecab01ebd055a57c2eaae0e46177519ec0e36": "fcb3cff8dcd784fc2925add485d6966a",
".git/objects/22/b10482f745aad93146c6d6e6031ca2b610ede1": "1cd40310855c978b76981db7b3c0ea16",
".git/objects/22/cd9003b31c4d02e409a90eeb0b6c1ac4ed6609": "b5abaec00fc3180ae5f9019ae06bdb5a",
".git/objects/22/fa4eefff57297a9dfb29a533523867556f2acf": "2c215ae21662c47da8f61f82a6948ef9",
".git/objects/24/af4c6a7ab7dfc6f7707636a81e2efd72ea04b2": "3bc2e5737ee0a963772d752094ebaaee",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/b31463e82d77dcea401f799b4fdb4f0ef99736": "0f1a6b4e9d44ed898db2a0d83732b214",
".git/objects/26/49f23cc2c25ec0063a0ebb7c9343978ceae8e8": "bc1de55884f008e8140ba2c429dbbe37",
".git/objects/27/79514050c6636a9114cffce6e9c1de9da06512": "ac3f1615cc30191f84a430a63e382ba7",
".git/objects/27/7e4d09eecca0a30c06b00fa5f427c8dde4bb5e": "5b826f15040ecc5b2ff7b2827fbf2420",
".git/objects/28/7ccfbcde0430050b1fce9668e01875bf148edf": "f8d34295349cc1167f27827b6da756e5",
".git/objects/2a/951d787da8ddbea2e0fe15c07371bdd87ac344": "886ac206fb597ddfcbef181adb1bc203",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/19155f6d179afeb6e5ee72f63f96ae616fe530": "4786eebcb41bb2711b20c08dc1714492",
".git/objects/2e/1f1e63dd70d74eb62f0ddba4f59d776ee9996f": "d5cc6a2248dd3b95e6b2204685b751af",
".git/objects/2e/dba6164f1a8638b687a812fbfe477a422a3bd7": "356a87f3633794480be7092ed4db47eb",
".git/objects/2f/e87f87d75c74e1fb9b0f019a63c3851ce09388": "f3acc0254e4ad6b65e48892ad0b94d06",
".git/objects/31/b4b8d1df7a1b658afce87083998119878e9d71": "bb36b62e878562990c2112eaf351142a",
".git/objects/31/f2ecaf003399272f5b50467ee8361197d8960c": "30be63cbfb42996f1bacb3de3343bde8",
".git/objects/32/d73807a19d25eac658a305ada220ad03858077": "21bb627137291ef76fc21ad9ae1cbc59",
".git/objects/35/781c0b7bb87671bedf8de5f4c532e771d5f071": "68fdff750256c440a0a00069b4d68da4",
".git/objects/36/d01a00ee88df1f6ca46b87930b6fa918e26a6b": "3dde365a038d08a0f8996e67a202cb6e",
".git/objects/38/18bb743fd95e788319a15da19d2c97e6564644": "ab7136d9143c243a7d49cc3f350d3ad0",
".git/objects/3a/1309e15aeda82823b5372b16828a6b0e72a1c0": "b5c4553c0f77810a9e273e8a3cd2189d",
".git/objects/3c/4a938baa183e4791132a6689755dcae5fe39c6": "dcebc99b89c964644652dab3532fddf9",
".git/objects/3e/ba493ac49ea533f3941cfe820ccd9cfb5683c3": "f8aa0feb59c31778040085b8b1b9a19f",
".git/objects/3f/c59778c9b3274978a37a278f1fa54b289827ac": "6a110fc292bf287c32fe2d1068ced56b",
".git/objects/40/a10cb9839b582ad4f095c8f5dbcd9c7de8c762": "fba4f9f0bc996d96946fa09e8107826a",
".git/objects/41/0267a6633c4119a75175f2568f9f6cffc9dbae": "b54ef26e0908738f4f0ec89be0f09a2d",
".git/objects/41/40f5e91e715fdf32b7d861b0606f1b81ae1569": "e8084db1046322c3373c2b9f58e7b385",
".git/objects/42/9f4864fd68850c4bf9456c6be4fae2b0048626": "d2ffb4d77ba33462ae07ab8490d9787e",
".git/objects/42/e37b4cb8079a3d7b35e2bf8d1e2fc78eedebb3": "2d8c091e308781f0f110c288d46ba691",
".git/objects/44/55cb4291e6c145ccf7bbd3df977704da0db0fc": "af095f39336506ae72340db343158c13",
".git/objects/45/b18723a5439e116f0e985f293a8fb772b1c874": "06b870314a894c79cebdf2477bf82fde",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/594881c54b4fc8d14b6de5dc3956a79c94d29d": "4b357409d3796180563e7faf1782dc58",
".git/objects/4a/1143cbd5e34fc52acbb5e079031754f43c4e56": "7491ba56380b51843803cae81615c78a",
".git/objects/4d/406d5b6b30d27a4b35c4538fb87fb800b7af63": "0fd4a91a25b038bd686c67117f603d76",
".git/objects/4d/d1fb183b32311ff94e3a9a934b3a8d90763a65": "21e55c2474ecea480c942240e4f59fe6",
".git/objects/4d/ee049f8cfc7e22b8db820175c179edf65d3771": "4a991d9d2387b7b85061f3f31ef07f22",
".git/objects/4e/6c1c5c6f6feb6602bcb5af949ca05408248291": "7df4f2064ce9c038bf75f7ba96ef6a67",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/cde5774ddd553ac4752e7b6cc297c159b253ac": "b415f9952e4bfa2b183b95808fbddb9b",
".git/objects/50/ae61a400c3ebf9aad180727c2c26aba5d449ec": "2a28681b9dfe88d12e12d27c21b35231",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/52/59f1091b9271bc7dee9954dd9408a78cd45972": "b5176d2ad357487db40663f71c8dbcd4",
".git/objects/52/dd0cdf8b6eba014959c99fa464ae6e1c8071d8": "584fc9d10d3296c48a2aa46ec38770b8",
".git/objects/54/eff79c95923e4927243c137fd0c771560a32b1": "665570d5cc258ac5abc863c46610a5c6",
".git/objects/56/35c942195c05e34e402ce7d088479ccb8a604b": "c0fbe4b298d94a4c0557dd8090f4d602",
".git/objects/57/1f877d9d85a32e01a43db3a4bd67153349e3cd": "bf368ee276e871359fec416facb50034",
".git/objects/58/eb8fdc05534156231d2041b06ccabfe107b7ff": "87de5027ecfd34fdc62e110e69e36da5",
".git/objects/5a/2fd238482ffbe997eb50482a5cb2c25226d6a3": "99a15ded6d293b9d641cac1e5f391c36",
".git/objects/5a/5598666eab01eb37e5bd1f03f0165b3a8ca379": "da56ea32f3bc27a454d203e4e90d7d10",
".git/objects/5b/85ead9831d6e3bd3ad3dcc7b66fc8df44cc2b3": "ca062eac7c83f97885e11bb9fbef084b",
".git/objects/5c/16d2f0bcb1af7a2fed9c99943720d2eb5c736f": "9615055426e40a867baa6814daf73fa8",
".git/objects/5c/3c499963919e74fcc1770b71562a40699031c3": "ff29fc84e6fb3a0c091117dbdf2e6b8b",
".git/objects/60/7d91fbf0ea72a4e6835114241e7fa36ec74e9f": "c841364cfdb394301c62f8dbd825a509",
".git/objects/60/cf629bfcf5287b9ef264263d7eb74f25f315d4": "62e63281642c9d7b11aa97bbc473ae76",
".git/objects/63/c150d3ff704f6c0b639affc344e2329b77d19b": "e735449d22132de1e1360c06df2849cd",
".git/objects/64/a87f86a824a0fea27c605903570a04a4679743": "9102f800d15ca87152bc49e2ef62d4a1",
".git/objects/65/1ab7ae557722116296d23c3b6aea462fb09bf8": "70ce25fdd8db8e2bc48621b18c19381b",
".git/objects/65/4cec6b47bbf452c9ae11059a7fe023c268ee15": "e4d5dc7a3ec5301e33e6b1001d5266ca",
".git/objects/68/5790141b469131caca1a93c6cf49fe420882a1": "d553fad747a116f1ee48a16b0b4be187",
".git/objects/68/78c393b892483079f8398fa464817f6419b43e": "5e63de69c117041e8b75e17246737277",
".git/objects/6a/a6b99a6ce8138479bfd5b043b2454ee38bc1dc": "8084a83e69714c1c0526a9b19148e391",
".git/objects/6b/42749e0699e535719a5ab2a14c11113b621bec": "15d910b068c81f9b82441a573c4bb322",
".git/objects/6b/c415a8dda586208865d6c091043a6a2bdf8d31": "d3e706f09e48baf889d5b2166be3cbeb",
".git/objects/6c/9022eb2b7237e2314bd841c5a796d77b70997c": "a2d472b1418110d84e7366e84e8780bd",
".git/objects/6d/1c5d6cb47348425c6d1abda4ea3adad5269979": "0efbff5090435be945a2a1a0198c7d87",
".git/objects/6d/cbc43a3d2f7d2eaad3a5ac44d7f9c0e6c7577f": "619a427477c63e810842f7035147e682",
".git/objects/6e/1863e17f517965e8b6ebef841c625346ab1456": "d20ae666ab267b83400b0e86d09f3dd7",
".git/objects/6e/1cb209760758c6f2150cc0ef036ad07ffd60f5": "32cf7b02e05793a9705a6a160a79ba49",
".git/objects/6e/795c2b9e66689cccd8872ee6f196dd376a3bd9": "62e252e4c9b1c82e16c62a94d48d419f",
".git/objects/6f/9da56bbae00cbaccf58bb068d466bba0a6b516": "e94e73b75c5f3a6066653bd316c5ab02",
".git/objects/73/9cb7d9cd4e5b7fbdbce65e85e10425a44ddae1": "cc5b3d4d45cb41d48b8a4211a91fae77",
".git/objects/74/2ac9d1a6ba5d9dff4ebdc0dee63580146cce47": "5187dbdace7278b1e00d2206eb49cc55",
".git/objects/74/8d0c222638336f9ad90cd7c98c9a5f2650adec": "1fa58c377309039f7532228ad5127afc",
".git/objects/74/8e8f0bbe4ba394e8bd3bb97302d36200defbf3": "fef3e6bce78dbd788f817d447a0a543d",
".git/objects/74/f0fafc57207eddae5b967ebf82233a1de88c16": "15bc9be28469b543a98225a5b69215e9",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/a56b90184dfca496f01b025a3ededf1d6f6ace": "18e6babc20a5dc00f66455dae3f56048",
".git/objects/78/66eb4fb6f1f4bce465d2fd4cf4e703088a4116": "78fca685ff9869699128d3000712b72c",
".git/objects/78/77abd889d0b2524f3b5a0528ef7c6c18e01990": "c08af4b05239919a2bc11be8a0fc4fb6",
".git/objects/78/aedae6c4d7c91e5b71eeee498bf9d6619c5a4d": "10df830476f0092b5833277abd1973e7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/0ccef2ddc812c784462ed80c476e9dd3ee1b6a": "e2bf9cd0cca53201f2e06c3027bd291d",
".git/objects/7b/4acee0428f4213988cf19c8b4e76093e840762": "83e8454eaec234f134bcba8e37a5d770",
".git/objects/7b/b675b2f80adbe557a17c4d66634800321d3a0a": "b22f58390573adf10ba9b6d1f07a7875",
".git/objects/7b/d2a36cb17459ba7922ae75271d6dc00f04fc00": "4875a8f53520cd4adbd4fa67f5ac12b3",
".git/objects/7c/e4593819cbbee61f4fd2f78f125be10fccf626": "48bcfbae2915d48d49d3e9d0354d8762",
".git/objects/7e/2df2a13a461ef30f46600b7aaadf8b0da7a553": "2d5a938683b874d41afdc49985f781dc",
".git/objects/7f/0e84207d74181967e7710bc9103ca30ac48bd2": "bfda502f0b4e02db3ca48b359fd89fef",
".git/objects/7f/9ff66cd0a58c7a792344dc05d6f7f53f7ab4ff": "c4353177d5a3562f66250081c1a3fd05",
".git/objects/81/17acbbe6782369730d9129ff95d83969107e44": "97a8c5d2ad4f6a8bc1eaf32cb3645596",
".git/objects/81/45e41d137084062265ec0cbc129db263987143": "cd0957fcfa58189585f8caf29291cf5d",
".git/objects/81/51acb8bab65c80f505fdf21c92496a2d9ca8e3": "f5c2f6ba17c675454b04eccee6277ef3",
".git/objects/81/b92a9ab20e309fdc0a91960dffaf8f6c7edd88": "fe07adb82e27656b40d328b989d0ac5c",
".git/objects/82/068d4c7e3682a1575f00dad43ac11482aabffe": "3655983925f56c9d250fd243f9f7b2dc",
".git/objects/84/ca362fd967b1ee7a090013f1a85cc20f73acad": "57104569616fd4e1ba0c2c81f1653b7a",
".git/objects/84/df2cfa6493be9e257da7ce23bab3f2a0df93a5": "2c11474623e57765e065eca6137ebedd",
".git/objects/84/e4d4263958a56b8f89af6fa1c1c8cc0991baeb": "ee0e83f383f72da4e21a64716c43ac1d",
".git/objects/85/486f4e8eb308c02ccda17e23140ad4d855ab5c": "523e544ad01bbfe6dc8e177830bff5cb",
".git/objects/86/c4d6f4fb967b37370f58d1499af2b8ccf8d6bc": "cd27054aebad6263c17c1a474e5b6e1d",
".git/objects/87/d9efb95f2171ecf70d6f2209be2cdb69107a5e": "b10dbda8627a3c787dcd9c283849a696",
".git/objects/88/b4fac2494af456ca8098d08fcdf85723042a7a": "deedf4c5309d86ba95daa4ffd5916e7f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/efcd7caab7f870aa5a5b86bb580f27785efb9a": "1bd9f393de245cca597ffd3f1ef84b6c",
".git/objects/8a/853fe3ca04a4395c805cdf90193efa69449851": "c3be86a80b54e809eb7e07fbae6e08f1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/6e64eb7a2f287e2cbd152c6e8855124bae23f6": "23ce16322f174ffa66ede6ed2c5a7dac",
".git/objects/8d/89c942208d5ec9c3eff6529e9f02e4d497d7e6": "66a96f6c5d8de9d7c056d1729080fa99",
".git/objects/8e/ff5786f21217788c3200a9c98501310b46a977": "152c06b70382eaa400672072614b73ac",
".git/objects/92/6f53923bba4194bbf008d4428ad73023704659": "4837d4d2a82d2f056efc6dcceaca6afe",
".git/objects/92/ee6245d9ec9f596443be1695a19d6332c2b687": "c86b3666a29a4f4618a4ff2fecf0e11e",
".git/objects/93/72ba88db3c1e2e0859daa48188a8ab552def4f": "610d36d168c0638c373e746c30baa09b",
".git/objects/97/eaafbfd159bb855ac32400f9eec37ec2a0a6a0": "393ff49cfcf6a1da5990cdcf01facbea",
".git/objects/97/ef62ecd01be1bf7850fb9a33a69a49266257b3": "48c2f6474e6a9877fd8b25a70f7a606a",
".git/objects/98/244add3694cceed47b66973fd330361cabae89": "03c9a4460ac11b727ce1cd6d01aecbaf",
".git/objects/98/29669b6d56aeccb4abd96d876397e586bd6fc5": "6729cb92b7eacca26198ed50b9e31d3e",
".git/objects/98/a861236e338e6e130696c3585a2e5275be2ff3": "08c8a620af79baf3d4e1c8d1c4e402a2",
".git/objects/98/fcb9669c8ad695a9ee9e8b75fbad12c462a91b": "91acc376de770dbbfc5f56429e7e31f3",
".git/objects/99/159d17539a3f68518bfbbd30fa92d6c3756d1e": "68ed40451b273d67baa5f7a466325053",
".git/objects/9c/a58cedfdcf3993fec6ad81fbc5656dc2f6c5b9": "5bb35ccaebc2de9575a97fbdb6484b22",
".git/objects/9d/f70c95cc19c608781be6bf650b5239961b3867": "630bced0cda2cb14e9752194877c5061",
".git/objects/9f/432366c12c4d8eb1d394ac7f1d5483aa8fc761": "609ededf7437bd8b91c5ba99b08110ed",
".git/objects/a0/0db02e67838f2c804b7d50e9c72f6e1c09719f": "ffe0e69bca12739c6ee00455ce3c32ad",
".git/objects/a0/4adc992a4f58bd85e30ceea450d6234fe66bcc": "ece56bf4fc7e339b213108c5e87ceb80",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/0936ac907b370630b7bc636cce9c5a3a87489c": "e7722880dfc7499381b1873817aac2ee",
".git/objects/a2/9423e4c0656e68bd8386b2ee6d263c7b4262ba": "f6c073d55462939447280c1e90bac475",
".git/objects/a3/1cde120b0928f8019d83034e4044423d0b2a99": "2d374d2740f23e10bcc4b57a2cf0678a",
".git/objects/a3/cce4d84d0854d0fa5906e5a93b55afb6a615d1": "f1fa8d2117142f0fd5b1761d77f691c9",
".git/objects/a6/4a51941a51871ada7f3227c8f20f1c091d8243": "469adfffdf951586b2da9151415db1f9",
".git/objects/a7/f08a0aa3e0568bfbb9871c1fde7a30ac40be07": "7928eb9f4cd886690978e86be029e641",
".git/objects/a8/eb4627894b7461d006b03b8c07f693aade85df": "5ac7f1e9e444b4eb1cbc8e38023e385f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/6b3516f6f5bd842af50dcf789fc86463a4b3db": "4ce6a6a685eae0aaca8e3e1197e4b039",
".git/objects/ab/8924c6e860999d3c65cdba4e6fd74fc324d4ab": "548bf22819846c5ca958c50a995fbb97",
".git/objects/ac/da19dababe1b30acad24ca8f2df29f9d99f439": "032ffa4e9607b7f22cda3ab1fdc74357",
".git/objects/ae/3523fd3da71a54cc2d202073675b96bcf38e10": "08b0aaf39c010edf04049f787c88d8a7",
".git/objects/b1/ea313c5af3d3dd7a04fbeba767f0fcf87d2544": "b8c5ca8282818472922ab8957ae5cb1d",
".git/objects/b4/4d985c75e28e9ee29f51ef245c6dfd19f6e3fe": "8826e6bc4244d070195c2726584bf556",
".git/objects/b4/6af9392365d0d54db5b54b967ebfea600e66c4": "94268df994932c71599fcb0e855a7068",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/59c3d0422a778df2469ace062c221d3d7ea5ff": "f2c3ffc29d6d318066cf9ee8e572f4a6",
".git/objects/b7/6080672365d0e0352bde72dba5c537c4e23bc9": "dec5a45117229c2c609313d78c2724fe",
".git/objects/b7/8a0cf4d9b4bab810c50c9fd04d93f4a8c0c0c0": "398065650f543f06870deb68b41f7334",
".git/objects/b7/dcb59b2f871f81ae6fec8224de4e05dbad5ecd": "47f9d2ef9a15ac39a973060a7f1357c3",
".git/objects/b8/8fe23987aa385fdbbc0962918682a7162fe4d0": "e7d159f1e2be5935a3298ab3bafbce9e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/451ca7b82fe270d582cd513f0e6640ff9f0a57": "b10de08203ba196c622d64c44601d990",
".git/objects/b9/7528be9f362fcaf75825c0f6e3de4d59643c5c": "5b9805db083fdceaf0ef36bb2ba91a00",
".git/objects/ba/50c4323446b2d8ceeaef62719b244165969abc": "2e6e9a3fb919cdb72f4e0b36b31cb0e1",
".git/objects/bb/d4f177ce8c5034108cbd2e619a052d2848f68e": "45a8929cb2eabc787721790c0496ec62",
".git/objects/bd/9f56d173411ae07197638ecbe8db41295e8e19": "5ac95aeba77161bf1d981a470dc8d0f8",
".git/objects/be/b767b7ad269ab54adb5a3bc3df4000f50c5065": "7f753f24b83e22b471f0806a7481541c",
".git/objects/bf/1e8b6df7e980f87e393ffba09622db14fe6be4": "82033fc2fba383a4c8add6fe5aefc062",
".git/objects/c1/3a9620dd90fe69f1eb12895eff9053a7471e90": "0c918fcbe3045fffeb9614330eb0887b",
".git/objects/c1/8cfb9167e1375d61a4317358a191c4b700d115": "4a3b2c30139a7fee56b09f088283c5d9",
".git/objects/c1/dda8c1db4ca97cc12c382d0204d1bd7bc0e16e": "260c0b408c1fb3097bc0c70f2ebe02b0",
".git/objects/c2/0331842f5f140a86f6ad9d2570a7049e13b59b": "c8fd9e9aece5ed2c4e778505fa0a59ea",
".git/objects/c3/4ee93236a1e04005822a7b31329be64cd413ae": "94e274862b25e2b35738b1659b68ce6a",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/6faea9ce74d98d92c6011fbfbb8735887914a7": "01f602025ffc0b7488b329df99ecc90f",
".git/objects/c4/c8d7025b697bfdd56180a010e08db9f6e69fb0": "31e08e93f5c1c7bc855803c1414a73c0",
".git/objects/c5/b2bb7c414848e5350f12536bdd106d3b60c32a": "e789048dff7556e03424dfb5939b1127",
".git/objects/c7/32cddf9c384fdb99037501ac3bfd1400f7293c": "62b4ce3be8fe9944a158477638999b98",
".git/objects/c7/e0f7f780af650615055228718c614a902c8993": "05ec5441a6ca7d6a16a32655919f8a89",
".git/objects/c8/e159fc923c3666cfdd910fcd33f89cd02f9ea4": "411609f9f69b35d930a1984fae3f0eb7",
".git/objects/c9/28d2bf039b12ff4b60a10a34cc2adbe51e6f1d": "85146a82a51240adaf3daa36c78f7873",
".git/objects/ca/be5d78b1fda9437b1d9453959bef4548f089ed": "d9ab932eb8587e45632027269b2906a4",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/2c7f056e9a4bb3a2f589427a42dd11efe5701a": "fca3d31b04050d01b72307bae52b1f54",
".git/objects/ce/bc3c821cc91e8a4fec2c475240d5bd216ba6fb": "8d9459d0fb7977a55368cc62642ca0fb",
".git/objects/ce/bd8c3b044bbdb4b6a70e195442d7d1346af56b": "24aa89486738dba958767bc8f4c9001a",
".git/objects/d0/6f02ee6d4f2a715e2410ada22cb1d9d6598ab4": "1b0e0dd4513084e6e729e51c289f7c60",
".git/objects/d1/d5d4a64da9730ca3c5de2c13ebd5cca023b85d": "982d1d023127f1085bb90091f08ccdc5",
".git/objects/d3/839e484fdfe7b726ce432b50ab9a1e3204eae7": "91dd32a63d75a10c5e566a5febbc959a",
".git/objects/d3/caa87ecdb9a9c9e6bc6a820ccefcc464bbe3e4": "81186e4ccc894dfcffa2936dfd6cd73d",
".git/objects/d5/1444015dfe03d30700671543113a17ae2beda6": "8c2e84c7c6029377c01c1eb86700ac58",
".git/objects/d5/20309391f53296fbbb632c6f3c94be55717be9": "1b6852c73b07d035bb82cc017b328734",
".git/objects/d5/8f906ba44b937867ddcf43fbef897ab4f0d107": "b1e4365836add60c1f059e4183c44001",
".git/objects/d5/f2eda1f4fd2c31c39a11ab5767ea812cc71385": "9534e876ff29020f2497c66fb06164e2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/5e0564f7526e13c1141e55371dbe60c301c3ff": "f9430638c501b0f0d110090c9453c9ef",
".git/objects/d8/d001d684aa56d660b5cb2c847a8581a41f3bc8": "86ff6c783016c0658972affea3428956",
".git/objects/d9/e945a3ec775ad8eb07a3e462020f3a062ddf60": "837719c3e1479f347e9e902954b1790b",
".git/objects/db/376ac0a0bca0cfcd484c7020d0c1cef37f9061": "31a8ceda1357dac4ae662ad75d77aadf",
".git/objects/db/8a0b66fb2494bfa5282c74461ca9478640d2c4": "abb5f344d3eebb4d857e9bfac71f52bd",
".git/objects/dd/213c26532523749a6bf5da33055bd7784a7b93": "27f6cc9ee85bc217400cfb9a21b16ee9",
".git/objects/dd/346b2f97119d151ffbcc313cef18748335c0cf": "3016e4dee8ef8252d1ca0d7072c36166",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/78e0a2201800cc91ebbd540936d400f3020865": "a59764276e80acc438f4663420510e84",
".git/objects/df/c74607593b0cf6516ffa20ba1826e9943620a5": "adf58b8e8cbebe4a70554d27fe4c83e6",
".git/objects/e2/a6125b64be4709377b44b20326b95393e243b3": "0849c450689bf97fe27b1c60f5399462",
".git/objects/e3/c4c9910c9d936cad3cb6246a3f08a79e3f139c": "4fc58075895df1af47bdff785d7269fb",
".git/objects/e4/01e27607f0de95dfd105f7a3e1caccf80a2878": "2b3d5a7960047e0400da4cb49a498df5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/032db75a28e0947ca05ffe739bd2f71749c45e": "e65b0acc316c3f52029dd92341e32f0e",
".git/objects/e8/afa53fd0305a02bfcad90df6df6567fb2071f7": "a3997c589b586adbd16e8d1055662eef",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/7a2e76ebf62e8e96d7a881ecc51b358fd2d1c1": "e25a3e6b91630c6d17bb98f8c16925d9",
".git/objects/ed/c2af4d25cadbba8576ccef3f34bbe6b65d47c2": "b6b54383f8fe7271c62c0ad48d7b1716",
".git/objects/f2/b78f16730851093602fd6c32b7026de0ffb38b": "fcbe04cf9a0fa7cf10f030acb040406d",
".git/objects/f3/c88d7355c73003c9fa2049673025a6c1074863": "13aaccb4530e79967bd5a8eba08f3238",
".git/objects/f6/1593bbe2ea6b9d7ebfa3bb0fb450376d2a08a2": "e4fd0aa0a52e05ff717f3571ff851aff",
".git/objects/f7/8c9be5a854e91d5195d96e9c6ba90afb60e818": "479a2620cde4ae720f155d3bf333644b",
".git/objects/f8/900f995c15c07750affe1a07e0221b322e9096": "c7559fdf2e66b2ac4fd20ff349042083",
".git/objects/f9/7b0d5e19601a090037fe402c49a4f34be85ece": "fb80efa66b8af36afff305fe3f21b19d",
".git/objects/f9/a758e97e2d0385cde5cb276b20376fb6ee0407": "d2c2ef0dd91b3d0c511379213ff812e3",
".git/objects/f9/ba580e36de15e965ec4f30fad7ff42ab5f9b79": "dc862e188ca7705a17e3e75eb1076af8",
".git/objects/fa/14ce64e9ff5dfb9358ec765fa7bb046c56f7e0": "72fd0f8063cf3ea7f5d745a42ff22d5c",
".git/objects/fb/231cb1743755cfa25ed1e849faef60862e2d50": "153cce0031f6d49415a1ae7ba82829b6",
".git/objects/fc/e87d5ca621fe553d9f53eeeee1d0c3c619d328": "b533b2cb791e9945d65dcd3e02c0e66b",
".git/objects/fd/8c9aee26e34ea34438cf93aa973e14f64a90ae": "10f3bcca4f40b7f322d12129d592287d",
".git/objects/fd/eb6916b6087877009ebee8152c37d695a89905": "e5b5649b36b3911204fad21033b533a4",
".git/ORIG_HEAD": "7881594cf650b07dbc7b4cf8f90a46a1",
".git/refs/heads/master": "5fc7462e332ee96442a97bc09620fb49",
".git/refs/remotes/origin/master": "5fc7462e332ee96442a97bc09620fb49",
".git/refs/stash": "c359d57ff42969dba7cebe044ddc0e7f",
"assets/AssetManifest.json": "22721a487bb2028217e1a35f6049ce03",
"assets/assets/svgs/mobile_interface.svg": "86c7a862bdfed8cef0be65daee2e2587",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "08972a5877e4f5ee5648d12a8cab0e24",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "766c8cc582887d79fd06bb0d7caf09e0",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f3eff88afcab9b738b3c950e0c6129cc",
"/": "f3eff88afcab9b738b3c950e0c6129cc",
"main.dart.js": "483a108f43ed9977b4d2ed86e5cbcf8e",
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
