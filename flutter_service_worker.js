'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "eed841b30b59458b788f060466883349",
"index.html": "7e00e8f303b1ecd6137c6e77089c570d",
"/": "7e00e8f303b1ecd6137c6e77089c570d",
"main.dart.js": "d294a3c0ae3050eaeac48304a190aa9e",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f2deb8e5e1482b68a2231617fdaf97b0",
".git/ORIG_HEAD": "863666ad0162eb4f7c9401ba4cf68718",
".git/config": "b69f7209e9ead8e327e1baefad73d630",
".git/objects/0d/94a408ed94acd2b73c346adc68f6e1b6d29bda": "f5845a6bf6d16122375ba28e5f2531fb",
".git/objects/0d/c2f1183252a7421023cca9d68e96e8bc4ee3fe": "b6e2f960f003b594a3006c83c4a1b6f4",
".git/objects/0d/29dd8ea05fcaf0033e81bcf7c79d9422b644b4": "9ae124dfa9651dca20fd38ffba7f1bc5",
".git/objects/0d/c165a1927da8fac1ecf01a0dd97c0276acec57": "c616bc27313dbebc7372cc4731b4d8cc",
".git/objects/95/ee97cd82117e29ffeae40b8412ca48f6c29ddc": "a7f6fc79c6031a0ac163240c8a25242d",
".git/objects/92/6f53923bba4194bbf008d4428ad73023704659": "4837d4d2a82d2f056efc6dcceaca6afe",
".git/objects/0c/76787a732704c6d1853ac37392bb41934538d7": "7f1e6bbe883f93d51b92950e58243543",
".git/objects/3e/ba493ac49ea533f3941cfe820ccd9cfb5683c3": "f8aa0feb59c31778040085b8b1b9a19f",
".git/objects/68/1e6e5ba3027eb199bd46ab2a7689d2d1fc9fd3": "436fd7655bf53a48ed78c23290e45175",
".git/objects/68/5790141b469131caca1a93c6cf49fe420882a1": "d553fad747a116f1ee48a16b0b4be187",
".git/objects/35/781c0b7bb87671bedf8de5f4c532e771d5f071": "68fdff750256c440a0a00069b4d68da4",
".git/objects/3c/4a938baa183e4791132a6689755dcae5fe39c6": "dcebc99b89c964644652dab3532fddf9",
".git/objects/3c/5227759a18bba7f8d7f22798858d2e31411d31": "8b4bd69a3fd58ba19a008c4054425eea",
".git/objects/56/35c942195c05e34e402ce7d088479ccb8a604b": "c0fbe4b298d94a4c0557dd8090f4d602",
".git/objects/3d/3398efbde5c472e66ff0883c6d483501c35dae": "10df38e0ef020d2aab328fb0028cb5f9",
".git/objects/58/eb8fdc05534156231d2041b06ccabfe107b7ff": "87de5027ecfd34fdc62e110e69e36da5",
".git/objects/67/558f0bc879ff39145a2fde3c5bd8d501c31ca0": "44168d0acd73e9feae7b2b1ebb50d7bd",
".git/objects/0b/8f07fadae996592040229a9c2e6eacd5b60742": "a194a44247c04e70079d4fc498b6d22e",
".git/objects/94/080113c6ac95129278948ab762bd3cc6654d16": "74e18940ca2df7ddcece056e5bd47758",
".git/objects/0e/3db3d3b2612df286cf340f9ef2ea69eecea4f4": "c7092b86842e41c4f7de93c3575ba633",
".git/objects/60/200387bf0b9fa599f9804de0e21902185dcc87": "2eecdc780fede55abf2d93f58720a0b8",
".git/objects/34/db241b61ee420af12b674d831c33d620d41a97": "55407d2ced7ef7bf608789480e017bb6",
".git/objects/34/05a9c3111313a60bbb2cfa430238226fb5ae78": "2cc67508a627f2e7dd87cf007de4f018",
".git/objects/5a/2fd238482ffbe997eb50482a5cb2c25226d6a3": "99a15ded6d293b9d641cac1e5f391c36",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/02/2c3f7be720a2f22963c1d69414e3619841b3e6": "0dc2427177f8cfc1dcc05da20923b0f5",
".git/objects/a4/4ccfa0e850ddfda60587899a8b5801eada6854": "887339f4887735244769bb81d31ab750",
".git/objects/a3/fcae25917ef2ad73bbb3f18477888dd43e7bfa": "470a36f43ee677f6d29fc524a5ac778d",
".git/objects/b5/6b44784af4a0be6f4157850b8d006e6b4dd7e5": "ea3377bba6b93dbaa880ebc6c0f8d101",
".git/objects/ad/2a10badb8aa931f2cbcb788139750c7ba36adb": "75767b9d30099ced81cf50c2e6f3944d",
".git/objects/bb/1c88cb04ec1c1db03caa0cfb65d5971f8cb3c8": "c8222e18cea84c28469b729d86445491",
".git/objects/bb/d4f177ce8c5034108cbd2e619a052d2848f68e": "45a8929cb2eabc787721790c0496ec62",
".git/objects/d0/6f02ee6d4f2a715e2410ada22cb1d9d6598ab4": "1b0e0dd4513084e6e729e51c289f7c60",
".git/objects/b3/993725073e3aadefcecc79de32f4f09ee94979": "0c698d3b716b8f68fdbc9ab7720ad5d4",
".git/objects/df/c74607593b0cf6516ffa20ba1826e9943620a5": "adf58b8e8cbebe4a70554d27fe4c83e6",
".git/objects/df/0e0137f22676f02d48261d6d3bd8f223bae1d6": "ab35d6cf2af377c6e295e83b10b501e0",
".git/objects/b4/4d985c75e28e9ee29f51ef245c6dfd19f6e3fe": "8826e6bc4244d070195c2726584bf556",
".git/objects/b4/d0f615b415f1a454fdd6840ef65dfbdcbbbd73": "215753d10a1cbd0b159830a4605960b6",
".git/objects/b4/3b5ff80181d34d4320c47cd02f366afc862bca": "6702d0aff5244a4fa65e99c06b2ef370",
".git/objects/a2/9423e4c0656e68bd8386b2ee6d263c7b4262ba": "f6c073d55462939447280c1e90bac475",
".git/objects/a5/83c4ab0c7a4ac0140297ee61bc08a8396e6bf5": "27b286f92ed9c261054e4ae6a76875df",
".git/objects/d1/d5d4a64da9730ca3c5de2c13ebd5cca023b85d": "982d1d023127f1085bb90091f08ccdc5",
".git/objects/bc/f0b3a003d80a1ecc6e7b0602cad2f40460d066": "6d6a58bf7652956880a25112394f415d",
".git/objects/ae/1c7271a2c3b7b7023fd4e6a2c7d11e347a61af": "5b5847d0afbed005a396c95c4d98f888",
".git/objects/ab/8924c6e860999d3c65cdba4e6fd74fc324d4ab": "548bf22819846c5ca958c50a995fbb97",
".git/objects/ab/6b3516f6f5bd842af50dcf789fc86463a4b3db": "4ce6a6a685eae0aaca8e3e1197e4b039",
".git/objects/e2/a6125b64be4709377b44b20326b95393e243b3": "0849c450689bf97fe27b1c60f5399462",
".git/objects/f4/a47f43d0110ecb9aa1ed7468a04e3cb98ef855": "ffa86e58e56cbdf6c38a25b2b3586680",
".git/objects/f3/c88d7355c73003c9fa2049673025a6c1074863": "13aaccb4530e79967bd5a8eba08f3238",
".git/objects/c7/32cddf9c384fdb99037501ac3bfd1400f7293c": "62b4ce3be8fe9944a158477638999b98",
".git/objects/c7/e0f7f780af650615055228718c614a902c8993": "05ec5441a6ca7d6a16a32655919f8a89",
".git/objects/c7/15155adb4ba10a29af9b9f4ab578fc14f91574": "0a384fd4c949c74e8231b29d9002a634",
".git/objects/c7/b6593d96a42c2b7cc52a042a3a79569dd039d9": "2029a96105eebbd0745a4c475e79b72f",
".git/objects/c0/c1b013fed92131a5bd3643b160de1017396094": "6f6c0305b7d108965d53f41280122db9",
".git/objects/ee/53316a77e809598a851e97028d02e0a727d8eb": "14678706e0d4baa2f1c18e96b4fb74cc",
".git/objects/c9/bb5ee463cd8fc6259e583d851cae802b3e5a27": "3c01e01b45f68f9541dcc4b1b27f0304",
".git/objects/c9/4cf5f67134bb38f9922c57acbdd321e50c2cba": "030862dd5e5f1df702f3bcf187666efe",
".git/objects/c9/4169980dae4e9773184248f08ac7562ac27ad5": "3245da6cc6682e4c0617ddb247191248",
".git/objects/fd/8c9aee26e34ea34438cf93aa973e14f64a90ae": "10f3bcca4f40b7f322d12129d592287d",
".git/objects/f2/55852c3b1f54d428577adf84ad374063e5fe89": "ae2ad8145819e2fc6cc235293d2f7412",
".git/objects/f2/b78f16730851093602fd6c32b7026de0ffb38b": "fcbe04cf9a0fa7cf10f030acb040406d",
".git/objects/cf/1704143085f4e13ed768fcddd62c07b693351b": "0c98bb75d0ea5fe589163a88969f1ddc",
".git/objects/ca/8ea288a42398e30b7e87d4676a5a6a6b4535d8": "47005f874c945c0e987791e37c6393a0",
".git/objects/ca/70a5b529e76364781165f65e736e0a453013e2": "7837045a413e396139295fbd5b6074d0",
".git/objects/e4/01e27607f0de95dfd105f7a3e1caccf80a2878": "2b3d5a7960047e0400da4cb49a498df5",
".git/objects/c8/61df1663ad866bb7a5f4c142fb2e20a8867fde": "7f5ff824c01eeda6bb073a7940a06888",
".git/objects/ed/8d12d0f8b8d002ef998e38e03723d5fd077671": "866a7d077cf28f31c4d17f7faea3c816",
".git/objects/ed/c2af4d25cadbba8576ccef3f34bbe6b65d47c2": "b6b54383f8fe7271c62c0ad48d7b1716",
".git/objects/c1/3a9620dd90fe69f1eb12895eff9053a7471e90": "0c918fcbe3045fffeb9614330eb0887b",
".git/objects/c1/dda8c1db4ca97cc12c382d0204d1bd7bc0e16e": "260c0b408c1fb3097bc0c70f2ebe02b0",
".git/objects/ec/7a2e76ebf62e8e96d7a881ecc51b358fd2d1c1": "e25a3e6b91630c6d17bb98f8c16925d9",
".git/objects/4e/e6b0ce2dc1ac4c206ff7632723d1e3f541362b": "cf0db6a3e772dab2e4e3207c8f2b187a",
".git/objects/4e/6c1c5c6f6feb6602bcb5af949ca05408248291": "7df4f2064ce9c038bf75f7ba96ef6a67",
".git/objects/4e/cde5774ddd553ac4752e7b6cc297c159b253ac": "b415f9952e4bfa2b183b95808fbddb9b",
".git/objects/20/9cae438ca08e724a7fb261c30bc6de5f8da078": "95ddf0f16aa92af7f777591525eb52ea",
".git/objects/pack/pack-1f545f407ca0657076f1b5792cd8dc652055e610.idx": "486e96d0b61914e4b1fb65d6b3362cdc",
".git/objects/pack/pack-1f545f407ca0657076f1b5792cd8dc652055e610.pack": "7cab9f1ff7f4c211af6730b86c7d1dd1",
".git/objects/7c/7bb7bc97f2e57a047c0d3fac4f3ca417d47719": "ccf29e0b7c4d3770be85b443d7a3dea4",
".git/objects/7c/e4593819cbbee61f4fd2f78f125be10fccf626": "48bcfbae2915d48d49d3e9d0354d8762",
".git/objects/42/e37b4cb8079a3d7b35e2bf8d1e2fc78eedebb3": "2d8c091e308781f0f110c288d46ba691",
".git/objects/42/4529ac235294a87b3a8a8f6b2d80d47c464224": "b7668433b5b30738ce64b8ecc37470a2",
".git/objects/45/b18723a5439e116f0e985f293a8fb772b1c874": "06b870314a894c79cebdf2477bf82fde",
".git/objects/1f/40d0f274495c977f1bf49d2ccf03d0a47ee3ed": "c4b4a5c84adcc3b626d9eb15d541cd87",
".git/objects/73/6b512824acdd2de58ed4cb602f8e54a8324ea6": "92fd9b3ec33c9ee5979586c80e93b3d7",
".git/objects/74/f0fafc57207eddae5b967ebf82233a1de88c16": "15bc9be28469b543a98225a5b69215e9",
".git/objects/74/8d0c222638336f9ad90cd7c98c9a5f2650adec": "1fa58c377309039f7532228ad5127afc",
".git/objects/28/58fba80563d546880d5f63f3b2ae442bb7e484": "8a1131e1b1d12cd4f70e8e9db50bee03",
".git/objects/28/0aad146e2bd0e251b74676f0c7905f13443333": "bec1c75dd935ec747c011fdebe59c952",
".git/objects/28/c4a0dea858f1f0a629dcb9e32e66d2c585b22a": "08f9715c2faf1fdd96caf98c79813b76",
".git/objects/28/a812d8a82bc5903fad9d13d2736fc1dee22d70": "8aea671afebc24436e66a0b504c09888",
".git/objects/7b/0ccef2ddc812c784462ed80c476e9dd3ee1b6a": "e2bf9cd0cca53201f2e06c3027bd291d",
".git/objects/8f/b503ed0c03e6ba584828dfbb06a0ab6e799863": "c3cbfd25a74df42996b22c784f38b379",
".git/objects/8a/853fe3ca04a4395c805cdf90193efa69449851": "c3be86a80b54e809eb7e07fbae6e08f1",
".git/objects/7e/2df2a13a461ef30f46600b7aaadf8b0da7a553": "2d5a938683b874d41afdc49985f781dc",
".git/objects/10/8a21f386d7f308ab1a61a8ec1b3bf8dfc0132a": "d4830fa464689fb51017143ddfc7f992",
".git/objects/10/c618d0d96845fa6f8dd00c8ad302b5d84f4c6b": "f5cb502ac9127d8cab8a8133b8828ae6",
".git/objects/10/06f7d21e03d3173d876e71312dc26c76b447f3": "dd906222cc5f621d8817c53d61c6272f",
".git/objects/19/84f5ca5b6e16817d8638f13dafd28a1efb808f": "082c7376b93a5ef31854a1f04ad90cd2",
".git/objects/26/49f23cc2c25ec0063a0ebb7c9343978ceae8e8": "bc1de55884f008e8140ba2c429dbbe37",
".git/objects/26/2d4d2c56cfb6a5241a8edc0e2075f05d79a943": "43f35bb61f7cca086dd8c794e5a62b0b",
".git/objects/4d/ee049f8cfc7e22b8db820175c179edf65d3771": "4a991d9d2387b7b85061f3f31ef07f22",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/75/cbfa5f639afa07bd5381b5b72580488aff3647": "0fff26e3fb43da8f44ddcbcaa10575fa",
".git/objects/81/45e41d137084062265ec0cbc129db263987143": "cd0957fcfa58189585f8caf29291cf5d",
".git/objects/81/51acb8bab65c80f505fdf21c92496a2d9ca8e3": "f5c2f6ba17c675454b04eccee6277ef3",
".git/objects/86/c4d6f4fb967b37370f58d1499af2b8ccf8d6bc": "cd27054aebad6263c17c1a474e5b6e1d",
".git/objects/72/f43addb5dde4fe13833c07541129e8c93ef866": "889fa9964b4aa0e6d46526ec33e244e3",
".git/objects/72/94d9602d65f21302527e6b7bbeb60eca3c44f3": "2b6cf68ac9bc36e679fb997ec743944a",
".git/objects/2f/e87f87d75c74e1fb9b0f019a63c3851ce09388": "f3acc0254e4ad6b65e48892ad0b94d06",
".git/objects/43/90995168a596db04af58c48438481b3d408b3d": "4b07056e59fe4f4027c46fbc6729283f",
".git/objects/88/b4fac2494af456ca8098d08fcdf85723042a7a": "deedf4c5309d86ba95daa4ffd5916e7f",
".git/objects/88/d51e47919cd12acaee62268edceaf416b91c7a": "21e36a2ff15c066ade4f42c6c81121f5",
".git/objects/9f/432366c12c4d8eb1d394ac7f1d5483aa8fc761": "609ededf7437bd8b91c5ba99b08110ed",
".git/objects/6b/968341c7e09a1a77733153e99f2fdc2d2d1bde": "2dc69c0682faceae326f9662e9432267",
".git/objects/6b/42749e0699e535719a5ab2a14c11113b621bec": "15d910b068c81f9b82441a573c4bb322",
".git/objects/07/690fbad32f83d03ae7c03d38c0df397cd7ae1c": "1bc46b9626f65bcde31ec74a8f91a75a",
".git/objects/38/18bb743fd95e788319a15da19d2c97e6564644": "ab7136d9143c243a7d49cc3f350d3ad0",
".git/objects/6e/1cb209760758c6f2150cc0ef036ad07ffd60f5": "32cf7b02e05793a9705a6a160a79ba49",
".git/objects/6e/795c2b9e66689cccd8872ee6f196dd376a3bd9": "62e252e4c9b1c82e16c62a94d48d419f",
".git/objects/36/d01a00ee88df1f6ca46b87930b6fa918e26a6b": "3dde365a038d08a0f8996e67a202cb6e",
".git/objects/36/525f8f981642039f0b25223bec100c2728b6c5": "df5ee5590629ec72ec55b30161383674",
".git/objects/09/5d88fac4448d08124db2097c01594ac45c7813": "aadf93106f547ef41bdc3aaa2e2d327e",
".git/objects/09/24de8a1b6a7ed4187d062efdc761f6cbd2522f": "786796f60459d41e817423c9b438e411",
".git/objects/09/c323321391dc1ffd63a46018b7718630899fa8": "538768dbb31bc9c42aa1487b92604fda",
".git/objects/65/599cbb9280477df2748165191f8f565382793c": "aecf7c9fd15bbaae01c1d6f50f55fa87",
".git/objects/65/1ab7ae557722116296d23c3b6aea462fb09bf8": "70ce25fdd8db8e2bc48621b18c19381b",
".git/objects/62/dc245104d60c729e27cb6d33f2eb647ba93f97": "8b20bdbe95bf12847d726da5ad7cb7d2",
".git/objects/62/5665653430f4dcb57ec179c822c95ad1062492": "9030669570d89027099a4c247b598569",
".git/objects/96/e8603e6565a69c46caf338cf7b2672728a6a73": "30292a9b0008b92d8c6e778695062fd6",
".git/objects/96/1ff87adbccd8a2ec9e345eb8fb351691f8f9a1": "4ec10a4b0b95d6fb986105c1221adce7",
".git/objects/54/eff79c95923e4927243c137fd0c771560a32b1": "665570d5cc258ac5abc863c46610a5c6",
".git/objects/98/244add3694cceed47b66973fd330361cabae89": "03c9a4460ac11b727ce1cd6d01aecbaf",
".git/objects/53/ecf0a259994dea8230713ac8b3af80b2e55737": "529e41f63c79732824cfcc20ff0347c4",
".git/objects/3f/00c2301d8b48cf75c0c5b2fcd163aefc4fa632": "b17a48f4f904a07d4ec12ca88d064c42",
".git/objects/5b/85ead9831d6e3bd3ad3dcc7b66fc8df44cc2b3": "ca062eac7c83f97885e11bb9fbef084b",
".git/objects/08/19b573ad2714460b163015d0c56b387a77e8f3": "d0e41898c8801a43b14a8c59b33be4fe",
".git/objects/6d/5fd5af40f89742d080c32323cba9cde3d8c260": "8089051dc597d913131d9d217cd50eac",
".git/objects/01/93e01e28847e4e92b56c2152b62a868a731034": "45cef36cdd20a2b68439b645b7401b63",
".git/objects/01/33ba19d89f8fe38307f5e093db841f1532b21f": "2f3bb3d58cad2d396c6b812e048b2717",
".git/objects/06/95b49d103d54dc05e3af499bd99b69eefd8d1b": "e160c35abbae0f83148f57479ea6dfe1",
".git/objects/6c/9022eb2b7237e2314bd841c5a796d77b70997c": "a2d472b1418110d84e7366e84e8780bd",
".git/objects/99/9684f7a24f0f43a3f694fff065140d648645ee": "ff043ccbacbab4e1b7fed92f77234072",
".git/objects/55/e973390c8ca26f10542e661b696538ba1653e5": "2ef28db4c05b5bcfe436088f73864330",
".git/objects/55/8851486a8ac6beb1ae1671f4266bed5813162c": "60475fc988698e1e55b24e3281864f3f",
".git/objects/97/eaafbfd159bb855ac32400f9eec37ec2a0a6a0": "393ff49cfcf6a1da5990cdcf01facbea",
".git/objects/0a/1af2ab23fc0a0dec4ffb1c7660a5e306061e95": "1e2cde1a6d793d06d3672fd99e3381c6",
".git/objects/64/a87f86a824a0fea27c605903570a04a4679743": "9102f800d15ca87152bc49e2ef62d4a1",
".git/objects/90/c3cdaee88852b56e7fc92db2f9b1f246f190f0": "15f546a6d499f2a4087c78c6e4c7b79b",
".git/objects/bf/74a91a42a0015b7654ba11eb86dcfdaac4a279": "018efdbf9be620a8b89b6d90d12cd048",
".git/objects/bf/1e8b6df7e980f87e393ffba09622db14fe6be4": "82033fc2fba383a4c8add6fe5aefc062",
".git/objects/bf/346bea15800367402e4d2575197df3927bf12f": "16c2254a4c64e3f14fafcf17a4d485cc",
".git/objects/d3/caa87ecdb9a9c9e6bc6a820ccefcc464bbe3e4": "81186e4ccc894dfcffa2936dfd6cd73d",
".git/objects/d3/839e484fdfe7b726ce432b50ab9a1e3204eae7": "91dd32a63d75a10c5e566a5febbc959a",
".git/objects/d4/1bdac6987399f20e08cb1034d636df3ba876ec": "f468feb23e8f9fcd2676bda5dde00d26",
".git/objects/a7/f08a0aa3e0568bfbb9871c1fde7a30ac40be07": "7928eb9f4cd886690978e86be029e641",
".git/objects/b1/5085ba4c84e10023bea08ee4b2173e200c0250": "f1ef2839e33f1fdab654c5f6a5a75374",
".git/objects/b1/ea313c5af3d3dd7a04fbeba767f0fcf87d2544": "b8c5ca8282818472922ab8957ae5cb1d",
".git/objects/b1/9194ee13178611325fba924e1469a80e1b52d8": "d49315866baec5f4e458b190e75d2f12",
".git/objects/b1/82394f4f90f28858104bd539a4c5624b05e7df": "c5fe1dd8284a291a4be4348db342b227",
".git/objects/dd/346b2f97119d151ffbcc313cef18748335c0cf": "3016e4dee8ef8252d1ca0d7072c36166",
".git/objects/dd/213c26532523749a6bf5da33055bd7784a7b93": "27f6cc9ee85bc217400cfb9a21b16ee9",
".git/objects/dc/1b2345f78bb6804ca854ec690485104cd0a642": "ac1b57126331610d6790b03cc60523f2",
".git/objects/d5/1444015dfe03d30700671543113a17ae2beda6": "8c2e84c7c6029377c01c1eb86700ac58",
".git/objects/b7/59c3d0422a778df2469ace062c221d3d7ea5ff": "f2c3ffc29d6d318066cf9ee8e572f4a6",
".git/objects/b7/6080672365d0e0352bde72dba5c537c4e23bc9": "dec5a45117229c2c609313d78c2724fe",
".git/objects/db/8a0b66fb2494bfa5282c74461ca9478640d2c4": "abb5f344d3eebb4d857e9bfac71f52bd",
".git/objects/db/ce3a7e44484fdfa4ff1f9b0123fa1f2f610051": "8213d347381aaac80d0f6b8f75e863a0",
".git/objects/db/376ac0a0bca0cfcd484c7020d0c1cef37f9061": "31a8ceda1357dac4ae662ad75d77aadf",
".git/objects/b0/e0562da656764a7f33316c9021fd1c8d3e5601": "71cb5a8bc88dbedfbd713cf808484cf4",
".git/objects/a6/4a51941a51871ada7f3227c8f20f1c091d8243": "469adfffdf951586b2da9151415db1f9",
".git/objects/a6/cda2f070330e31ec5bab526e8c2a25b9d3ea19": "f8a443217abb00e91e3673bb8ec7b006",
".git/objects/b9/248737d04238e1d686e1134652fb96aeb6de89": "90f8901d62a82992c4f4ea2b94a5ef6c",
".git/objects/a1/74fedf360a7c665da3372c4aca122e838d8cb0": "4ab2a7050516da5906b39e6de2349045",
".git/objects/a1/b6247eb064afd3265f9a2da4b8e4f081f4623e": "1d83bb88ca4069f0a798f1efb18f1906",
".git/objects/c4/c8d7025b697bfdd56180a010e08db9f6e69fb0": "31e08e93f5c1c7bc855803c1414a73c0",
".git/objects/cd/2c7f056e9a4bb3a2f589427a42dd11efe5701a": "fca3d31b04050d01b72307bae52b1f54",
".git/objects/cd/9c8a37dbcca40e148d30eb767e4f47e40cd131": "349cf07293482a7f66b8b3a9c858bd02",
".git/objects/cc/c5a3219e5a5fc59d239fd145926ca132a3ff1f": "e32c5fed6ea0bb9e0a2c95ba53c717e1",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f9/8ed8597c4c919937620b3c4bd248743b76a3bd": "8beaf59bfc9107d63b6e295e4e83c8d3",
".git/objects/f0/0c547074a823730491c8e38691000b204c0877": "8ed7c8dfefde527b7fc3f037e75482c9",
".git/objects/f7/8c9be5a854e91d5195d96e9c6ba90afb60e818": "479a2620cde4ae720f155d3bf333644b",
".git/objects/f7/5003f423dbd4a2fa33bf74d9731bd654f033ab": "0bb5c1ebcb3b8caa2edc186d7c57d34a",
".git/objects/e8/afa53fd0305a02bfcad90df6df6567fb2071f7": "a3997c589b586adbd16e8d1055662eef",
".git/objects/fa/d373b53375a98b74b73fe22dda4c0eb45c0cc1": "de43c33464ffbb3647c7111d168a6d67",
".git/objects/fa/5bee8e6319a3dac66d69057ec3c3ae234a9fbf": "c1612f9d4eecc86cb17023f2eb5b24ec",
".git/objects/fa/14ce64e9ff5dfb9358ec765fa7bb046c56f7e0": "72fd0f8063cf3ea7f5d745a42ff22d5c",
".git/objects/c5/228b2c4fbe74f415fab623046e3d90d88da880": "81fb97b8f6bc9c8ac3fcfd0bfe2ce576",
".git/objects/c5/63d181be5d68ecbb8e28a72e94177fd19b464d": "a065d11512813a15eb8b982d71fc8426",
".git/objects/c5/b2bb7c414848e5350f12536bdd106d3b60c32a": "e789048dff7556e03424dfb5939b1127",
".git/objects/c5/67b7896553b7795caa530e0d320f79328d09c9": "aa931565ba451ed80cef99b95f5476f8",
".git/objects/c2/0331842f5f140a86f6ad9d2570a7049e13b59b": "c8fd9e9aece5ed2c4e778505fa0a59ea",
".git/objects/cb/c8f87d33334d91f16244b781cdeefae6d05369": "da0e51fb4b0558256cedc31c74df8897",
".git/objects/ce/bd8c3b044bbdb4b6a70e195442d7d1346af56b": "24aa89486738dba958767bc8f4c9001a",
".git/objects/ce/c3d1d7973867c3383ab3aeb3e43f81ec6e3afa": "c8508fabb3fa52c05ed5dae0de958f61",
".git/objects/ce/bc3c821cc91e8a4fec2c475240d5bd216ba6fb": "8d9459d0fb7977a55368cc62642ca0fb",
".git/objects/2c/334a629ebe66e7c4c656881bbd51912a4cd597": "a6a3ba1ac99b81173614bbb83801e305",
".git/objects/79/39d74f544b70cb639dc5914d9092694658ae40": "b0cb208cf8dd83f989219b94f9180a76",
".git/objects/41/36160b03946d570da1192f27a525fd45558784": "edc8daf0b8220185b6173de6cdc077ca",
".git/objects/41/40f5e91e715fdf32b7d861b0606f1b81ae1569": "e8084db1046322c3373c2b9f58e7b385",
".git/objects/1b/5c715ca4d293e141ed8b4b6cac7693ffa7c752": "fb43f0d0922adaf74d807f7e2755987c",
".git/objects/1b/6f112fb452c4fbbab9250d0eb917e6e284cf0a": "7fd6c4145410e95bdb5a2851c1726ded",
".git/objects/70/0c4177d3951ccef5b43cf034f7739ab011b8c0": "ed887cad24e0c1583b4e52da2bf78ecb",
".git/objects/1e/72962ded9eecc36e77d3d66ca6bce02554ea2e": "15fe90f14453f6a373e1b5d601489ba8",
".git/objects/1e/19efaf5d4f61539e1e8e1218c8d6f224f8e3da": "c8bea9102423c136bea89809f22cccc9",
".git/objects/84/18b99c2a7f8def279d1c165c21f2c107a315ca": "bbe14ff8d422161fac1350d38886a494",
".git/objects/84/e4d4263958a56b8f89af6fa1c1c8cc0991baeb": "ee0e83f383f72da4e21a64716c43ac1d",
".git/objects/84/ca362fd967b1ee7a090013f1a85cc20f73acad": "57104569616fd4e1ba0c2c81f1653b7a",
".git/objects/4a/1143cbd5e34fc52acbb5e079031754f43c4e56": "7491ba56380b51843803cae81615c78a",
".git/objects/4a/03b59e9575aa048b68df5ebcc5cc27f38093f6": "bb1038a05cd3879d83cbfbe7af8fd351",
".git/objects/24/b31463e82d77dcea401f799b4fdb4f0ef99736": "0f1a6b4e9d44ed898db2a0d83732b214",
".git/objects/8d/09d52c2eab12d18d16f85403afabe82cae6835": "01ba36e30b02b45852f474081490cafc",
".git/objects/8d/8e554d3d2e418c6a44bd79dcdcb384b993b41d": "5aa43ed480adf2df29cf302827c32146",
".git/objects/8d/912776d9ca1d1b335be3e62ae5280da6bb81a3": "ac36ead96738e512d6e3e1c5fde238ab",
".git/objects/12/2e27d9d184c1e4378c53a9eda61d4967d79130": "42f898fa32918f4ddd466f64952a1432",
".git/objects/8c/01d89bd2944f5016ae0efccb220ca54868d66a": "302234637b546558f6c00291fd3056fa",
".git/objects/85/486f4e8eb308c02ccda17e23140ad4d855ab5c": "523e544ad01bbfe6dc8e177830bff5cb",
".git/objects/85/1035aec7eb2f4137bf7656cf91df0ea68524cc": "1f1e5ea33345bcaa9628ab5fa570f7f2",
".git/objects/1d/68d23f2b8c55b63780fb827d19317c6e80364b": "964d99ba8e2122372ce1eeef5ef43e11",
".git/objects/71/25aae6c44a3634780f12ae6d25c80fa68f9651": "c06dbd5e7ce89f8e64b0c867c1da1552",
".git/objects/76/972bfca6d18ec22b8062750d7fd14a90b6044e": "4364acfdfebecf548ae33d1461f3d13d",
".git/objects/76/3452a4431f39e35ed4a56fccd77b56bb69c468": "78847dd4ccd8a910fe010fc43b4249d9",
".git/objects/1c/7c2b1fbd06400abcfac813535085ec978e4898": "f4264500c255bedc1ea5e4dad45f6bd7",
".git/objects/49/820c779f4c3aab4f4e36873768899254e6172b": "cc90e3d280d5bd069372bc98564760e9",
".git/objects/78/5c63989461a028977d5d9dc98903617c32cb33": "8c5b48b9f93f5d5d488b20b12022da3c",
".git/objects/78/77abd889d0b2524f3b5a0528ef7c6c18e01990": "c08af4b05239919a2bc11be8a0fc4fb6",
".git/objects/7f/9ff66cd0a58c7a792344dc05d6f7f53f7ab4ff": "c4353177d5a3562f66250081c1a3fd05",
".git/objects/14/15fef04977c1effe991a19657e370946721cea": "a14b4fdbb00dbd09da3a4f77021bbb65",
".git/objects/22/4903bf1a974adbcae7255b8ea9f0e8aaeb0fa4": "0938b60e3ed1e770ace68b3f3c9f6d85",
".git/objects/22/aecab01ebd055a57c2eaae0e46177519ec0e36": "fcb3cff8dcd784fc2925add485d6966a",
".git/objects/25/75e24110c38f4c399b578a18f9800c6ebcb239": "1826874339bfd7bb528ee4bf0d3167b2",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f347a9b3091d1c09175040a3c5917bec",
".git/logs/refs/heads/master": "0355c1faacd0e1654a8a7bd63bc8a9c5",
".git/logs/refs/remotes/origin/master": "8c8763f88817840f10ca6278db33ed52",
".git/logs/refs/stash": "ab0df0177422feb322b4687e44a74291",
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
".git/refs/heads/master": "71a7e3261edfa0933d96211e3a5fdf09",
".git/refs/remotes/origin/master": "71a7e3261edfa0933d96211e3a5fdf09",
".git/refs/stash": "e2fa4649ef2d10a0121f8b99b977774a",
".git/index": "134eb21056dcb2d419171278c82478be",
".git/COMMIT_EDITMSG": "29b57c9738ca6a611ca17b58f2b7aa48",
".git/FETCH_HEAD": "af8319e808c754fcaa30017e4a7083c1",
"assets/AssetManifest.json": "22721a487bb2028217e1a35f6049ce03",
"assets/NOTICES": "19eb7ffa503525c09e5eaf9a68ac339c",
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
