responses = http.request_batch({
	{"GET", "https://qa.enonic.com/", auto_decompress=true, response_body_bytes=1024}
})


-- Use `response_body_bytes` parameter to access response body or use `http.set_option()`
-- ** Feel free to remove the line of code below
log.debug("FirstRequestBody: "..responses[1].body)

-- Report any specific data with `result.custom_metric`
-- ** Feel free to remove the line of code below
result.custom_metric("TTFB-FirstRequest", responses[1].time_to_first_byte)


http.request_batch({
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/css/critical.css", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/acc85b5c-0887-4416-9c69-889d1dae0616:e2eecbe0f4bdf83fb6fd9b7ee7d7f627ad5f65b3/full/pwa.svg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/5bf9117e-8205-42a7-bac4-d93f50e563c3:2fe008595e6b8abc65385094b623e730fdb412b3/full/Content%20Driven%20Websites.svg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/23900a8e-ba0b-4bcd-8da4-8c4ff75b1d0d:be2248c7f60f73800b9687a64d28e9a0f8c28295/full/Self%20Service.svg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/e81576fe-ce6e-46da-a7d0-b8f9708a9b42:3355938a81886a0baa73166982409aa29b221fc6/block-400-226-0.5-0/Office%20League%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/f11d77e4-289f-4d39-ab3e-35ce5fde6fdb:c706fca6e8184dc3562869ee612bd47270696611/block-214-376-0.5-0/Office%20League%20mobile.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/d446d182-180b-4eb5-9526-5f631b3de808:9d71225e0ac93b0507624a5eec285e83b7f56d56/block-400-226-0.5-0/gjensidige%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/af1ba475-4abb-4038-876c-0da92254dfb6:ea7c6ec5085b5f86effccfa389653021b38619c5/block-214-376-0.5-0/gjensidige%20iphone.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/2d6e54e8-5506-4e78-896a-0db175e26e81:3e64a4921fc796fa622e38b34e526fe4039b65ab/block-400-226-0.5-0/Bring%20Desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/86b06088-7e2d-412b-97b6-40024404d738:45925bd07b0519c650d7b39e13e8b46c2c913f8a/block-214-376-0.5-0/Bring%20Mobile.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/1547e307-e538-4a2e-afbb-c63976d7cde4:7ea96f98d4b4e8316c85eafc44fd6c9eb6d856ff/block-400-226-0.5-0/nav.no%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/7c46ee0c-7a30-48da-823c-8d321715ac55:15e341e7d04e9fff6b2b7d384974c46f159d4258/block-214-376-0.5-0/nav.no%20iphone%206.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/ed4df576-9663-419f-b974-d0d4b4f54417:fb74743d4e9076dd1e647d92be09955f9922c1ae/block-400-226-0.5-0/Mindful%20monsters%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/93dff5d7-63fa-480c-942f-f93dd7b9297d:18a0f00f9bf42ac15e8fa91261663895dcd18115/block-214-376-0.5-0/Mindful%20monsters%20mobile.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/991f9aa7-1976-4adc-91a8-a5d9a91a8803:9b519a8ad853c2ca02bad46c1375e284959b7c1e/block-400-226-0.5-0/h%C3%B6egh%20autoliners%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/bd044995-1dd6-43ef-9bd7-3bb72fcbe2c1:add284b5076e8b4d975680763b79fc87e4b3692a/block-214-376-0.5-0/h%C3%B6egh%20autoliners%20iphone.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/cda41397-13ff-40e2-a223-afbcbb869bb7:7ddde246090efbdec7873d52827347878a717bab/block-400-226-0.5-0/Eliteserien%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/e61bb1a1-b4c9-4687-aae1-75d8104efe24:bf9bf2e38dedeb64d6555120636fd8cc4e9bc154/block-214-376-0.5-0/Eliteserien%20mobile.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/72e3e49c-7ced-4d5c-9e41-e18e2e144694:38cd4a394971a67361f4d1f9f9bb09c801e90fe4/block-400-226-0.5-0/ssb.no%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/76d05c5b-1d6a-4414-82b0-1795ba9a006c:e581eda9d5f59c4b1615addf9852716e5d47ba16/block-214-376-0.5-0/ssb.no%20iphone.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/5cc078ce-d265-4560-8b6a-0218c8c1ce92:13f40752bf86adcb903756f2300388929874f12e/block-400-226-0.5-0/jotulgroup.com%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/57bb19a9-902f-459f-83a6-7d24ff1ebb0e:b30c653e46167f354710b99f1cef9496c161248d/block-214-376-0.5-0/jotulgroup.com%20iphone.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/9558058a-ce7c-49da-ae9c-36a32ca3c085:cf8cc19acb7e61a1e6d4f82bc56d0c0f4328d964/block-167-167/tafjord.jpg.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/1bc2df5a-8c58-4e38-993c-e1c719f89770:b791a7c533a72ff4521fa7146dd751385bca8b0e/block-167-167/torstein-aas-hansen.jpg.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/9d9b7cef-3ec4-47bb-b3e3-374dbcbb0fc6:7ead487df7bedee166c451e9cc538199114841bf/block-167-167/espen-bergh.jpg.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/45867a78-6da0-4009-abdf-040a0dff75e8:677a83342278b17feaeeaa90a62f38e99ce63ed6/block-167-167/mariust_20aug2013.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/js/main.min.js", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/css/non-critical.css", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/img/footer/webagility.svg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/img/footer/youtube.svg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/img/footer/gplus.svg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/img/footer/linkedin.svg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/img/footer/facebook.svg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/img/footer/twitter.svg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/image/098a6549-9fe7-4027-8756-f7fd4254e43a:230f2cb322385f72149e4343dced3e3b225aaed3/max-1280/audience.jpg.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/fonts/lineto-akkurat-regular.woff", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/fonts/GT-Pressura-Light.woff", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/fonts/GT-Pressura-Regular.woff", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/fonts/GT-Pressura-Bold.woff", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/img/device-laptop.svg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/img/device-phone.svg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/img/iso-stamp.svg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/fonts/lineto-akkurat-light.woff", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/img/favicon.ico", auto_decompress=true}
})

http.request_batch({
	{"GET", "https://qa.enonic.com/developer-tour", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/css/critical.css", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/4669677f-c994-40e9-a6fc-cc38749f1ce9:4d5da390908819935057bc64a911db73584d6895/block-800-450/Screen%20Shot%202016-11-29%20at%2000.29.07.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/ce56f2a7-243a-41cc-a34b-ada93fd7dd86:e7df3951d8414819c7f8dd292840df9ee7aebde3/block-800-450/feature%20-%20module%20app.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/b0e83bfd-acdd-453d-9c6c-694757988f19:ee38e47727701cba5b6c3a7b242abe501069310a/block-800-450/feature%20-%20developer%20friendly.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/507ec2d9-87a7-4eca-b619-23cbc59a85e2:1c310a98ab3d69465d19929d7fac847981dfc513/block-800-450/enonic%20xp%20on%20github.com.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/43b51ed2-7b38-4097-93eb-b0d3f774e732:1fddb98f2703f0675b099be9ca7e51af9a93943a/block-800-450/office-league-idprovider.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/e1526fc2-12aa-4683-bc48-49d3293571f3:a364454678e440ce75650df70ddef0c734736670/block-800-450/data-toolbox-screenshot.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/416a55ca-4a4b-4411-8f9c-21042deaf9f9:9956a31a2b59258472d93f093b7fe35cf656d50a/block-800-450/repository-xplorer-screenshot.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/0557d1f6-8e5c-4bf5-900b-5864531a763e:254e9047aab8fe09307e327a382a7369565d6f10/block-800-450/content-studio-access-rights.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/886bd364-b96b-4185-b4b3-67e5d110802b:363fe6a396adb2c217e63deb49c2df046e21aceb/block-800-450/mobile-ui.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/d8d0cf41-5565-43f4-b1f8-e1b5fe76756c:181d499bbc0bf86013fdd6b5c888b9c68e3c6afc/block-800-450/launcher.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/68798226-096a-4dfc-8035-a236fba562ec:e488b3bd654db8da7a711f53754dec92f96d80a2/block-800-450/headless-giraffe.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/d007e4fd-963d-4e94-b22d-c1aa1c9faff9:b633d33f9ffcde94e10e7d2b3283733b0b31eac8/block-800-450/giraffe-autofocus.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/09e1d7fb-0852-4691-9309-46ee97f45a91:9a30c6e261ce023b433c8e5afcf9b565c5f6133c/block-800-450/blog-application.jpg.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/fa1406b1-ed46-4635-913d-646440c36e77:ccf6ce55f19c8d2121cefbea3e82ba898c5ee400/block-800-450/feature%20-%20live%20split%20screen%20mode.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/c04d96bf-c9fd-4c8f-9441-ce810e6028a5:1db466222903bbe5397dc0b9396f24587946adcc/block-800-450/feature%20-%20content%20authoring%20form.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/2c783d75-6170-4086-a697-f5bea5baeede:dbf8765139b8ca24dab0f16abef576dd9c43039e/block-800-450/giraffe%20focal%20point%20black.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/6c291a12-7344-4053-8307-8378026db477:7d25624227fe66ed13d8907a89e3cec18e2c72f9/block-800-450/giraffe%20cropping.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/78a433cb-d60b-45cd-b77e-97878b3f8f69:ed97bbc5bb3352906189cae12d2c4dd2e138b4c5/block-800-450/giraffe%20preview.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/960d6cc4-e136-4da1-8804-dc1fda1c127f:ff5f4846ac865492eca005cdc16eaa8834fa9ebe/block-800-450/feature%20-%20media%20upload.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/975ed9b1-5881-4687-a51d-07c44b967c02:f0d49dc5e4bf2af8e8c1265c65510da562371f41/block-800-450/feature%20-%20image%20header.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/01aa8297-d1fc-4c27-b012-d92453afd45f:8b8501f90805e6a5fa7ba4f4b01c41b75cea8edb/block-800-450/Wireframe%20teaser%20screenshot.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/61115d2c-128a-4332-b3ea-aa923e2cf1b7:0fbc33084b037828de4eb320a0eb6165cf2defcf/block-800-450/feature%20-%20live%20edit%20context%20bar.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/03f3455a-4f28-42f5-a65f-76d48f068c0d:035ca6ad68c7081ec0a7d84f0ac36ae9c76c589a/block-800-450/feature%20-%20live%20edit%20part%20configuration.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/c466a435-080c-448d-8de3-86ac3b395e4d:a6e1c10183f51ff2e6530179bd50e478f3de4bf8/block-800-450/feature%20-%20responsive%20emulator%20iphone.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/15cf45e0-4c84-47fe-abc4-ab91f4826d45:036dca9da60e4ba30823cf0678bd58b348351977/block-800-450/feature%20-%20responsive%20emulator%20ipad.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/a5898d87-b7e9-477c-97e4-80e76f688615:4dad22d448f00c171c93dceb105d6b317d7a8af9/block-800-450/feature%20-%20user%20manager%20edit%20user.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/f0ffbb41-0b88-4e73-be5f-0f1da28f2208:035ca6ad68c7081ec0a7d84f0ac36ae9c76c589a/block-800-450/feature%20-%20live%20edit%20part%20configuration.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/2208182d-ec1d-4f82-bcd3-71fa1242c80c:7c080f809abed54ebabf41ece34a4d05b3b4adb6/block-800-450/feature%20-%20tags.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/0e709922-b003-4788-a270-20b36b6cbe66:876b1d9b8b0bfd6f61d71d907b8de65a9dcfbf50/block-800-450/feature%20-%20faceted%20navigation.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/e4da4cd5-3576-4264-b6f3-e6c118e07330:626ca412c3629e096ab314709a2455b80867134f/block-800-450/feature%20-%20navigation%20and%20preview.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/developer-tour/_/image/bf526fd2-b630-4028-a870-81bc3760bcb4:f4fd3367a6b358e25813a36a6ec1db2320ec1a48/block-800-450/feature%20-%20sorting.png.jpg?quality=90", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/js/main.min.js", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/img/carousel-next.svg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/img/carousel-prev.svg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/img/favicon.ico", auto_decompress=true}
})

http.request_batch({
	{"GET", "https://qa.enonic.com/downloads", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/css/critical.css", auto_decompress=true},
	{"GET", "https://qa.enonic.com/downloads/_/image/bb3fb556-e4e3-46e7-a873-9a8cf3cef4e4:121feb5629d1807438a18a1cea3f071d1dc26b24/block-310-175/macos-dnd-xp-installation.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/downloads/_/image/7116f00a-512f-4232-935a-ca3bba5a6a08:080c475360ece3a1856a3c80e27ba8cbc3c0904c/block-310-175/windows-installer-xp.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/downloads/_/image/639089b2-836c-4899-b70b-c766174a8999:fc2cdd3ccc97cdbc5ef8fcd3412113ad3e30de1e/block-310-175/java-distribution-xp.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/js/main.min.js", auto_decompress=true},
	{"GET", "https://qa.enonic.com/pricing", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/css/critical.css", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/js/main.min.js", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/img/carousel-next.svg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/img/carousel-prev.svg", auto_decompress=true}
})

http.request_batch({
	{"GET", "https://qa.enonic.com/pricing/buy?pr=ecp&co=undefined&ac=gq", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/css/critical.css", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/js/main.min.js", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/img/dropdown-arrow.svg", auto_decompress=true}
})

http.request_batch({
	{"POST", "https://qa.enonic.com/pricing/buy/_/component/main/0", headers={["X-Requested-With"]="XMLHttpRequest",["Content-Type"]="application/x-www-form-urlencoded; charset=UTF-8"}, data="company=Enonic+Test&email=jsi%40enonic.com&message=Tes+test+tes+tes+et+set+s+et&name=J%C3%B8rgen+Sivesind+(QA+test)&phone=%2B47+55555555&product=ecp&support=gold", auto_decompress=true},
	{"GET", "https://qa.enonic.com/company/events", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/css/critical.css", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/js/main.min.js", auto_decompress=true}
})

http.request_batch({
	{"GET", "https://qa.enonic.com/case-studies", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/css/critical.css", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/5cc078ce-d265-4560-8b6a-0218c8c1ce92:13f40752bf86adcb903756f2300388929874f12e/block-1024-578-0.5-0/jotulgroup.com%20desktop.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/57bb19a9-902f-459f-83a6-7d24ff1ebb0e:b30c653e46167f354710b99f1cef9496c161248d/block-214-376-0.5-0/jotulgroup.com%20iphone.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/ab530606-e209-4ddf-a67a-c3ba551bf2f4:9a3b15db32c5c6a2647013bc1fa97265430d8c35/block-1024-578-0.5-0/Office%20League%20Desktop%20Screenshot3.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/b50aa293-14b5-4a62-af6c-2cf4280a32aa:81ef72a3602cb6c53935de5140fc34a4cb0f6161/block-614-817-0.5-0/Office%20League%20Tablet%20Screenshot.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/48220a56-158d-4079-9a15-2a6d1cf00f8d:cacdc04f4b04252eeb811f97b84279434f338ec8/block-214-376-0.5-0/Office%20Leauge%20Mobile%20Screenshot.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/d446d182-180b-4eb5-9526-5f631b3de808:9d71225e0ac93b0507624a5eec285e83b7f56d56/block-1024-578-0.5-0/gjensidige%20desktop.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/52e1ca43-b418-422f-a0ac-19436583e2c8:db7444f4d2f7eebaa0c3e4247f39cf7ce9989a32/block-614-817-0.5-0/gjensidige%20ipad.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/af1ba475-4abb-4038-876c-0da92254dfb6:ea7c6ec5085b5f86effccfa389653021b38619c5/block-214-376-0.5-0/gjensidige%20iphone.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/f5e45230-1619-4c89-809e-180d82be7e73:690b14d17f63a40d4302f2f79155dda6106f416a/block-1024-578-0.5-0/Posten.no%20desktop.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/7c7a7bdc-be47-47fa-95dd-5db9436a76df:a64f07256f62fd2d5d52520ae806b221b53a0e4a/block-214-376-0.5-0/Posten.no%20mobil.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/1547e307-e538-4a2e-afbb-c63976d7cde4:7ea96f98d4b4e8316c85eafc44fd6c9eb6d856ff/block-400-226-0.5-0/nav.no%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/7c46ee0c-7a30-48da-823c-8d321715ac55:15e341e7d04e9fff6b2b7d384974c46f159d4258/block-214-376-0.5-0/nav.no%20iphone%206.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/c1e995bb-d356-43fc-8578-5b352b6bbeb3:ae543966b862be7f526abfbaac91e9d1f1f75da1/block-400-226-0.5-0/Arkivverket%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/2e54aabe-e296-455b-a039-ce92380d7331:e7f745afcb7d4196bd6b37888639e5ccabc19685/block-214-376-0.5-0/Arkivverket%20mobile.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/ce183e59-898b-49dd-9ab1-6018db4d6136:ba65baf1649c19622cb41c1ad764826a41ff038a/block-400-226-0.5-0/Bouvet%20Desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/9b5fb35d-9465-454d-b617-1675191bf7e0:e72c8b92accf5825d99e47d6bf9fff1c6fd14c61/block-214-376-0.5-0/Bouvet%20Mobile.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/ed4df576-9663-419f-b974-d0d4b4f54417:fb74743d4e9076dd1e647d92be09955f9922c1ae/block-400-226-0.5-0/Mindful%20monsters%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/93dff5d7-63fa-480c-942f-f93dd7b9297d:18a0f00f9bf42ac15e8fa91261663895dcd18115/block-214-376-0.5-0/Mindful%20monsters%20mobile.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/e81576fe-ce6e-46da-a7d0-b8f9708a9b42:3355938a81886a0baa73166982409aa29b221fc6/block-400-226-0.5-0/Office%20League%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/f11d77e4-289f-4d39-ab3e-35ce5fde6fdb:c706fca6e8184dc3562869ee612bd47270696611/block-214-376-0.5-0/Office%20League%20mobile.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/a298fb58-d9fb-4cc5-a09d-9f7647776097:2b02df5ae813f94b283c6397e5d48d202a135947/block-400-226-0.5-0/Rett24%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/9099865d-da6a-434b-90cb-4b56565fa1f0:59632791e4f6046dedb3602a8ac14f0b7c060fea/block-214-376-0.5-0/Rett24%20mobil.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/bddfc6b5-4f82-45cd-abf3-b89ed52f0319:cd3f1465459edaa98ca5fcb0cdde675713e3307e/block-400-226-0.5-0/Obos-ligaen%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/c4d1c131-4566-41de-8437-11fcb176761c:4bf59a6779ffbe3a5714d82c57bf8bd92180ed43/block-214-376-0.5-0/Obos-ligaen%20mobile.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/b7b240c9-76d8-4e15-bc9f-36385a3526f9:3ff9a5f478a3ff6a7780706cfac1e49a127df7ec/block-400-226-0.5-0/UiB%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/ef6599ae-d036-4b6d-8920-4097643e4238:25534d24253e763d6f9d05b0aa98c677a2d98b53/block-214-376-0.5-0/UiB%20mobile.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/633e5687-2c59-41b2-91b9-515ad9b77d4e:d78ef32587e967a438a725a0c6cb6a872f768674/block-400-226-0.5-0/PostenNorge%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/d569ff6d-0e27-4699-94fa-6ace3f161e7f:9b393e38b9d673d609ad0aec8e7427cd19044ce7/block-214-376-0.5-0/PostenNorge%20mobil.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/js/main.min.js", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/img/case-study-carousel-bg.svg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/img/device-laptop.svg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/img/device-phone.svg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/img/device-monitor.svg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/img/device-tablet.svg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/img/carousel-next.svg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/img/carousel-prev.svg", auto_decompress=true}
})

http.request_batch({
	{"GET", "https://qa.enonic.com/case-studies/_/component/main/1?s=9", headers={["X-Requested-With"]="XMLHttpRequest"}, auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/2d6e54e8-5506-4e78-896a-0db175e26e81:3e64a4921fc796fa622e38b34e526fe4039b65ab/block-400-226-0.5-0/Bring%20Desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/86b06088-7e2d-412b-97b6-40024404d738:45925bd07b0519c650d7b39e13e8b46c2c913f8a/block-214-376-0.5-0/Bring%20Mobile.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/e2948f05-547f-44cb-994f-fde6b2f8558a:daebff4afe5efeafc9efca9176c51fed758a0091/block-400-226-0.5-0/nLogic%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/5cbf9e92-e482-476c-8352-cb1beae2febb:26b5d7de752b44ccc33f57cad6ed107a2d4268e3/block-214-376-0.5-0/nLogic%20mobile.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/32ffacbc-9f35-42e8-8c30-b56ccbc651a1:593593737c3146eab9c87fccaac1a6fab5584859/block-400-226-0.5-0/VIF%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/7e1eeabe-f6dc-492d-a2e3-0ed63084c856:7f1f50116fdc7ae70ef9e00149da4d42268a321a/block-214-376-0.5-0/VIF%20mobile.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/667a386b-a928-4d5c-a38c-79ddedf226f8:35e195560b5f23da614e3207e8c679598a37fcf0/block-400-226-0.5-0/Met%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/ecf34547-7b0a-4f7d-893e-eb77792873de:20636bd211dc7ebe1eaecf3072fa67d5825be51a/block-214-376-0.5-0/Met%20mobil.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/5de8a34e-2f61-4923-a223-6400d87df36f:06a2f0fb1ced89648a92385c6164e5afc5230939/block-400-226-0.5-0/Autopass%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/f3d1b037-6c10-48ed-9e87-6aa1e73348c5:e61b8c59ad9c511eaeac8a75e64d24ebdb6331d0/block-400-226-0.5-0/Gouda%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/21bb5863-570f-4031-a24a-d09721160b37:efe3643f2a27ff14c8b807df4e70d673d498aee5/block-214-376-0.5-0/Gouda%20mobile.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/e372fcae-77df-4d80-bc3e-bc7095f0ff9e:317c2abd4f855b7c1b76a31b4e8de5c0b1db4abb/block-400-226-0.5-0/Horizon%20Terminal%20Services%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/c4b7459c-9e88-4746-90cf-83575f87b729:a1c90d63e45cfb7494735a201a8bded4d1cf629a/block-214-376-0.5-0/Horizon%20Terminal%20Services%20mobil.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/2bc25250-439d-4fad-b7ac-e173f3f240d4:8dd13c8a2554f51147f126e75ea59d1a4b048038/block-400-226-0.5-0/Senterpartiet.no%20Desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/ef37f1fb-c94f-4385-afc5-f49a9cdc915c:ff6943e8096c839fb086a9f5f28be0a972d095b3/block-214-376-0.5-0/Senterpartiet.no%20Mobile.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/9eaa7983-2a45-4eea-82d9-6dd6f4ced065:2362550495b18799215c2d5894f260df7d76d000/block-400-226-0.5-0/Enonic%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/3ccb8d84-fe51-45fd-a768-1e6024634fce:25fafa68446863da2a89fe31a75d17568a1bee81/block-214-376-0.5-0/Enonic%20mobil.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/component/main/1?s=18", headers={["X-Requested-With"]="XMLHttpRequest"}, auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/6e85683a-8592-4447-955f-65797d69a41f:08e94bae957dec08150e2b937ee8132d323b7309/block-400-226-0.5-0/RfD%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/6e4b0fa6-9ed5-4e20-b2bf-20ef2e772f70:0446674008250bcb0ebf2963682e8fb2252eb929/block-214-376-0.5-0/RfD%20mobile.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/cda41397-13ff-40e2-a223-afbcbb869bb7:7ddde246090efbdec7873d52827347878a717bab/block-400-226-0.5-0/Eliteserien%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/e61bb1a1-b4c9-4687-aae1-75d8104efe24:bf9bf2e38dedeb64d6555120636fd8cc4e9bc154/block-214-376-0.5-0/Eliteserien%20mobile.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/8a8e9019-9fca-4d23-aa81-272df8b59f34:10eea8ab09ace0199067fc12c48055e3ff1d95ca/block-400-226-0.5-0/sio%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/b61bae77-92fb-407e-8445-b1b7f78ad83d:2ccb04908ba45945c13efcc971b5a3a489f66342/block-214-376-0.5-0/sio%20mobile.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/3472f479-5a4e-425e-88a7-bebe0dc5cc8e:089a79bd1f7bba4fd2da061055cb61b82c74d137/block-400-226-0.5-0/NLB.no%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/384a50c4-2df4-4dad-bf21-c6cce54e3976:aca6180d8bc07cd791ad9733a1d416492e5de9f8/block-214-376-0.5-0/NLB.no%20mobile.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/f5e45230-1619-4c89-809e-180d82be7e73:690b14d17f63a40d4302f2f79155dda6106f416a/block-400-226-0.5-0/Posten.no%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/a2588562-8008-4377-891f-b5df09924b8c:faffa84f72d32d1ea0d50d02f22b685c4a205cbb/block-400-226-0.5-0/filadelfiakirken.org%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/faf3c806-b2b2-436c-9d93-d9b095902373:25dfb52c9eabfbe6b8aa47adcadc9bef6231215e/block-214-376-0.5-0/filadelfiakirken.org%20iphone4.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/00194100-08a7-4bda-900b-5ac79747206f:5dbd72731fa7a001e71bb257738129a2bb76bd96/block-400-226-0.5-0/Delta%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/028beef1-e432-4e27-8b53-6f44a7c60958:7b35e724af4e913b43644088a076106b938615e5/block-214-376-0.5-0/Delta%20mobile.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/d2160a79-b3f6-4b9d-8c33-64cfe6a88034:19e8e088614baa2b08990d5dc41db48cc4b307e2/block-400-226-0.5-0/Vetinst%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/f3ca9194-baf8-4452-b5b4-b183e1bb2f13:b158618e241ac4ef96ca356569fad948f14589bd/block-214-376-0.5-0/Vetinst%20mobil.png.jpeg", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/275a12ba-d07e-4c40-a6fe-ae38a8985f59:08d0790a63fe9f635f8b1f31dbf06a71033516f6/block-400-226-0.5-0/Infotorg.no%20desktop.png.jpeg?quality=85", auto_decompress=true},
	{"GET", "https://qa.enonic.com/case-studies/_/image/04d5448a-e3e0-4c72-af21-a9e3b9d5bec1:9e1b1c63a64b399a1bda9be889598eba1d1b5c8b/block-214-376-0.5-0/Infotorg.no%20mobile.png.jpeg", auto_decompress=true}
})

http.request_batch({
	{"GET", "https://qa.enonic.com/partners", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/css/critical.css", auto_decompress=true},
	{"GET", "https://qa.enonic.com/partners/_/image/d0e00149-69e1-4cbe-89dd-0a4b4ced92ec:b0a922ca7667e87587891319466900abeca19c9e/width-200/seeds%20consulting.png", auto_decompress=true},
	{"GET", "https://qa.enonic.com/partners/_/image/0a35c765-bb87-4a25-9999-fb07eacd8efd:735ac44774daaa055d5779612e799b31a8d8e8c6/width-200/bouvet%20logo.png", auto_decompress=true},
	{"GET", "https://qa.enonic.com/partners/_/image/cb43da17-5ed6-4773-bcca-aaa947553cb1:d330cc2d557b3752d146dcec2a0ea6cf6f271be7/width-200/Capgemini.png", auto_decompress=true},
	{"GET", "https://qa.enonic.com/partners/_/image/8f6638b9-678b-448a-8c83-48742c7c8212:36a94ea7532143f15b5f7a02f3d76e5049f2d4d9/width-200/Capra-logo_black.png", auto_decompress=true},
	{"GET", "https://qa.enonic.com/partners/_/image/3a0b3fdd-75e5-41e4-9b18-2ff20859c52f:64ca187d3021c3ea6f323df0b1b4ade71f91f26e/width-200/Inmeta_logo_svart_web_png.png", auto_decompress=true},
	{"GET", "https://qa.enonic.com/partners/_/image/c589961f-9c1c-44fe-bb66-40b1eb4867aa:7fbf56a5597abe183ea42a37709c32d5e49bf8aa/width-200/item%20consulting.png", auto_decompress=true},
	{"GET", "https://qa.enonic.com/partners/_/image/4f2290f6-bc72-452c-83f9-9f42f8f5d1bb:527a06cde3e4fc2a53e08c125acfcfa7a98a1d81/width-200/Itera_logo_red_large.png", auto_decompress=true},
	{"GET", "https://qa.enonic.com/partners/_/image/b3f5dd7f-3809-424b-910a-4f2d731438d7:83906854ee33c0ed38109ba7b266672bb31ed202/width-200/Norse%20logo%20ny.png", auto_decompress=true},
	{"GET", "https://qa.enonic.com/partners/_/image/61601830-30a3-4384-ac5e-ce05492a1af0:80823a7bd9861a2831fc1a3a9c5c11ce69b38f8c/width-200/uppercase%20logo.png", auto_decompress=true},
	{"GET", "https://qa.enonic.com/partners/_/image/89cafdc7-7804-42fc-bc03-383ae3f0f220:ad8e3f5a0c53fd8d324bf50fcb64f2ebdc7933f7/width-200/Vector%20media%20group.png", auto_decompress=true},
	{"GET", "https://qa.enonic.com/partners/_/image/e7a0f22e-d7ce-47c5-bef2-5db504a98257:18d684390d53768cd4e8102f5c89d6732ba367ec/width-200/seeds%20consulting.png", auto_decompress=true},
	{"GET", "https://qa.enonic.com/partners/_/image/2db3c696-a124-4a8b-a77f-8895bf358973:bdb6073627d542642ea87c57c5dff01f1838b895/width-200/dock9.jpg.png", auto_decompress=true},
	{"GET", "https://qa.enonic.com/partners/_/image/4f7242ac-355c-430b-aa95-7f1d2604f062:7e72874c122883baef9f8c88a6d6560340fdee2b/width-200/Alchemy%20Digital.png", auto_decompress=true},
	{"GET", "https://qa.enonic.com/partners/_/image/5451197f-d857-43b0-8f62-8f1b7d1727cf:c76ab31c96a788ef7ff5c112d8e6dec302f74581/width-200/Sharad-Tech-Logo.png", auto_decompress=true},
	{"GET", "https://qa.enonic.com/partners/_/image/cb3146d9-1a8a-4020-9cc8-48263f1bf9dd:ad8e3f5a0c53fd8d324bf50fcb64f2ebdc7933f7/width-200/Vector%20media%20group.png", auto_decompress=true},
	{"GET", "https://qa.enonic.com/partners/_/image/04463aae-2ad2-4f69-861f-54660cd67a36:03662c4686ccedda50db7788561dc05b2b98ae57/width-200/Plativo%20Logo.png", auto_decompress=true},
	{"GET", "https://qa.enonic.com/_/asset/com.enonic.web.enonic.com:1526307782/js/main.min.js", auto_decompress=true}
})

client.sleep(math.random(20, 40))
