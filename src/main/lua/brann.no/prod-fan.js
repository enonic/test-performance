-- The chrome extension has recorded all your HTTP traffic to generate this user scenario script.
-- You can use this user scenario in your load tests to simulate your user traffic.


-- You will likely have to modify this script to:
--   1) Rename the page name `http.page_start/http.page_end` to help during result analysis.
--   2) Setup more accurate sleep time `client.sleep`. Sleep time is important, because real users do go idle on pages, depending on content.
--   3) Extracting and correlating CSRF tokens or dynamic values.
--   4) Adding custom metrics, logs, custom logic...


-- A script validation launches 1 Virtual User to run your user scenario; it shows logs, warnings and errors.


http.page_start("Page 1")
responses = http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/", auto_decompress=true, response_body_bytes=1024}
})




-- Use `response_body_bytes` parameter to access response body or use `http.set_option()`
-- ** Feel free to remove the line of code below
log.debug("FirstRequestBody: "..responses[1].body)

-- Report any specific data with `result.custom_metric`
-- ** Feel free to remove the line of code below
result.custom_metric("TTFB-FirstRequest", responses[1].time_to_first_byte)



http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/js/jquery.js", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/logo/ran/logo.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/logo/bra/logo.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/eliteserien.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/logo/odd/logo.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/image/09fb5003-78f2-4670-824f-77b0e81d956c:556dc63d25fa403ba9666ae6c50abe0db42725c8/wide-1160-652/16-mai-kampanje-annonse10.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/image/3f24c814-6473-4c00-b2ff-b24d3a45f1e7:382e5a6f00fa870b84da3f2ee473efdca5d2b85f/wide-1160-652/sammen_om_sesong2.png.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/image/1fe91cab-ee30-4f16-9cbc-c8c31b46fa74:6df1ed2fccbe20a4269c749b23e3c879b4aaae6d/wide-1160-652/23%20april%202.png.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/image/9d1ba5d6-96b3-40c7-b0d1-cd5a50dc4f8b:09bb493b355f924eff1afe9c9fedc06e9045f417/wide-1160-652/Nyttarslunsj_marked-99.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/image/51264c47-df14-4c97-9303-c44aa9850397:aa6f979da957021703ce136e5ad1a58989dc3632/height-100/sparebankenvest_borgermester.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/image/7e94b818-b0de-43ba-b9c6-0bc0f76a847f:05e677458c7f57bd639a1c3abef4cfaa2e41f553/height-100/Fra%20gammel%20pc%20008.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/partnere/konsul-logo/Fra%20gammel%20pc%20022.gif", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/image/723465e5-2f51-44ee-87ac-12ce496f4a58:fc1108b47547ca19ae6448896dbe78cf8bc00f16/height-100/Fra%20gammel%20pc%20017.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/image/f3b92499-1395-4182-b854-1a1305a7207f:e442f351781b15568fc4e5f647a618cceffbbc83/height-100/Fra%20gammel%20pc%20012.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/image/8390a29f-e1ae-406a-aa35-3b4fa437b550:63be0b7e4299b697427c61f9a643b3caee1db2f8/height-100/BT_Logo_RGB_sort.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/image/174457ed-a362-4b6b-8bef-22adb175575e:61b06c940919ee5361c01b8df0fe3fd3e17bbca6/height-100/NIKE.svg.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/image/fbfb3954-bd93-418b-b0f5-0403df4d711b:0d0b444fa35b50bcee8c5a29dd37198047ca9140/height-100/leroy2.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/image/cd9e6460-585c-4208-80e1-23b413a4e943:13e7468758bc48dce81d86fdbb0cd43d1fb9a927/height-100/Tide_Brann-700x200_v2.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/image/73cfbbcd-6544-43e5-8910-75fc5ab93913:bcc0e3843ca1b79c5a7316dfc5c2b3b1751bfc31/height-100/torshovsport-en-linje-blue.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/js/app.bundle.js", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/js/blazy.js", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/patterns/bra-2.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/patterns/bra-1.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/image/24c82a08-d459-4b6d-aaac-fbcdc026db8d:18958d677eec7aebf59a9a494a8a432fb820a9a5/block-590-440/Molde-Brann2017-18.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/image/b447eaab-a49d-463e-aa0d-114661e93574:632a0394b3a5834c45004518e8f3acafd9ad5c79/block-590-440/Steffen%20jubel%20mot%20Ranheim.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/image/4bd3d11d-df59-4337-b88d-2e2b0eb3d634:f3862b2fc1abdf4e4532f19a1afb47e3b506bcc6/block-590-440/Jubel%20mot%20Ranheim.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/image/f4283bad-d65a-4af3-ad76-9ba5465fb593:66a7ba88a272acefe8153d713e17b69e641cbfc5/block-590-440/Ranheim%20Brann%20Steffen%20action.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/image/27fb186b-53f8-44a7-8c1d-3eff8daddd86:01a49d3ae85a3144f4735afc0b8d631855c594f6/width-1600/bortekamp%20Sogndal.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/ticket/eliteserien-bg.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/fonts/76b8cda6-0ded-4197-acab-e314297eb90f.woff2", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/fonts/b7952e68-ebbf-4bb8-be04-eec334679561.woff2", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/fonts/44e7b0fa-6c8d-43c2-b19e-f1e3ce9ea57c.woff2", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/fonts/acbfa600-0449-44a4-b773-d281b71044d8.woff2", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/arrow.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/fonts/121784c1-863c-4e49-b682-625ea7de55b0.woff2", auto_decompress=true}
})

http.page_end("Page 1")

client.sleep(4)

http.page_start("Page 2")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/nyheter", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/_/image/f4283bad-d65a-4af3-ad76-9ba5465fb593:66a7ba88a272acefe8153d713e17b69e641cbfc5/width-300/Ranheim%20Brann%20Steffen%20action.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/_/image/4bd3d11d-df59-4337-b88d-2e2b0eb3d634:f3862b2fc1abdf4e4532f19a1afb47e3b506bcc6/width-300/Jubel%20mot%20Ranheim.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/_/image/b447eaab-a49d-463e-aa0d-114661e93574:632a0394b3a5834c45004518e8f3acafd9ad5c79/width-300/Steffen%20jubel%20mot%20Ranheim.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/_/image/24c82a08-d459-4b6d-aaac-fbcdc026db8d:18958d677eec7aebf59a9a494a8a432fb820a9a5/width-300/Molde-Brann2017-18.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/_/image/95d6eabb-01b0-4a80-9548-56fae03488be:8856790f7ce85acaa555f43d9b183cb808a831f9/width-300/Sandviken%20Brann%20Andreas%20Mj%C3%B8s.JPG.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/_/image/db513298-daa4-41ac-ab1b-46950a6d8953:efecf60c31043f8be1d6b77102673c8a7113e145/width-300/Brann%20Stab%C3%A6k%202018%20innmarsj%20bluss.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/_/image/d6e0427f-4539-425f-9b83-b516ed8d0db0:e91437e08fe090bc8aeae72119e6e12abac903c4/width-300/Brann%20Stab%C3%A6k%202018%20Orry.JPG.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/_/image/e6aecac1-dbeb-43ef-a747-8573f24af44e:69b91da4b8349897400d2f9494bb417e0a857698/width-300/Brann%20Stab%C3%A6k%202018%20Vito.JPG.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/_/image/0b86cfe5-f8b7-4e56-bbd1-cbd1b20e48cb:28d12e228230a5424ea33c936e3130970381369a/width-300/Brann%20Stab%C3%A6k%202018%20Gilli.JPG.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/_/image/587533bd-d486-4819-a467-69c905f9ed08:54fab75a16f1060f1b48b5de81cf6a1446b65252/width-300/Str%C3%B8msgodset-Brann2017-6171.jpg", auto_decompress=true}
})

http.page_end("Page 2")

client.sleep(4)

http.page_start("Page 3")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/steffen-jeg-hadde-bestemt-meg", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/steffen-jeg-hadde-bestemt-meg/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/steffen-jeg-hadde-bestemt-meg/_/image/f4283bad-d65a-4af3-ad76-9ba5465fb593:66a7ba88a272acefe8153d713e17b69e641cbfc5/wide-1600-900/Ranheim%20Brann%20Steffen%20action.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/fonts/9ef359c1-4458-4560-874a-1f40df1c01d1.woff2", auto_decompress=true}
})

http.page_end("Page 3")

client.sleep(7)

http.page_start("Page 4")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/tv-slik-ble-ranheim-senket", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/css/video.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/tv-slik-ble-ranheim-senket/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/tv-slik-ble-ranheim-senket/_/image/4bd3d11d-df59-4337-b88d-2e2b0eb3d634:f3862b2fc1abdf4e4532f19a1afb47e3b506bcc6/wide-1600-900/Jubel%20mot%20Ranheim.jpg", auto_decompress=true}
})

http.page_end("Page 4")

client.sleep(1)

http.page_start("Page 5")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/lag", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/288aca07-8897-47fe-ad9f-f02dc4346720:044f6121b5f06ec58ea22b080453a7c3b5e3794d/width-800/Sanden.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/b4183e5a-bd6f-498e-9bdd-1aa54f863d0d:e7e86284af59292c34c904ae4b6164237690d343/width-800/V%C3%A5gene.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/b3f34e06-c2e9-41b1-8a3c-4868e6382a9d:721c9a0528ed262d9ec06aaab9298a8189e55c91/width-800/Skramest%C3%B8.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/47ca94b9-b1ca-4add-a592-09be5d5899a8:e87ad3ef26289a5753d7df4932492afa40c44a09/width-800/Monsen.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/7b596d49-ddb6-4e8b-a3e6-e71057ab0768:569aa5516622721eea3d0608f8c9b4677c3818f7/width-800/Insteb%C3%B8.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/66030f78-1f08-4d34-b7c5-c7fa0d8d2793:fd868217da790347f91396a73617259ae31d03d2/width-800/Riisnes.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/ba3c86ac-47a9-4b17-9eab-7ce23945ee07:90478b6babb36b4471befe836ee18f988178c703/width-800/HelgeHaugen.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/07b60248-508d-4d2c-89e0-2768eb4fa4c3:5e73c7501ef6b50a9f63b97bcdfd9df8a0c3cb48/width-800/Torres.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/6d790f21-0fb2-40df-bc28-8813621f1a20:642cd9423b5d39e0a9425da136e15075e525fd00/width-800/Hauge.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/e65411d7-cf68-4803-89b1-a4f8a61c7d43:d8de1d4413862655bd6fee18d6ab2b44fb529393/width-800/LANilsen.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/72eb7b03-0242-448d-9900-df441250fbad:410dbaa35d1291d5a36213cd334c92ef3485ebd0/width-800/Soltvedt.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/937897c3-afd7-4358-815d-e067c755b8de:1d74ae74ec64b44a83e806c29b61d929973a814d/width-800/25_Braaten.png.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/b7087387-1d52-477c-9342-6c4400db2d2e:8c0d9a0a56db41750ac86bd2d7ca9b46c75b29a0/width-800/19_Vega.png.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/e7710a17-924d-41f7-8bf0-8918cab5874e:8f109eacbaf74ec2c2d998f3edd491d254c84f12/width-800/18_Karadas.png.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/51c0cdc2-a705-489d-834c-27e83363e500:c004aea3f18f6153225ffa8680207b1abeddfe97/width-800/11_Skalevik.png.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/8209f01e-3564-4d19-9dda-02a8432336a6:0f6e6dc20b446fdb33a7130370ea2f933822c576/width-800/14_Marengo.png.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/78f9adff-e7a8-4f55-aa20-74eaf45dc5d3:c34718dc1b2c5ea004f8b7115f4731886e7f0048/width-800/Gilbert%20Koomson%202018.png.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/e0c27922-c49e-40c4-88fc-2ff1197026cf:0e911af9af559f5c4257e2cbdc3c0eb3a828963b/width-800/henrik%202018.png.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/17c9a889-05c0-4224-89aa-a41fcf04bc11:66edcb8ddc2b7026053c86ff6ae6d566f5bd22ce/width-800/29_Barmen.png.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/8dd065d0-951c-4169-82f0-7a3a35ada1b2:1d44b2fdf358069820ca6399772249627c0c3593/width-800/23_Nilsen.png.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/192bdbd5-1690-4790-86ba-ef8c58e22a44:b05562a22054e1894549513ab0cbc469a1adda6a/width-800/8_Haugen.png.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/3c3003e7-c9cc-4567-a926-dc9724b8c250:26ec53bab7d5a20bb600367d2baddbed26debe4d/width-800/7_Larsen.png.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/b2bfe172-0691-49e2-8e8b-b96189815ae7:2ea8e393a562e7bbd313cb84e27638d118dc940a/width-800/Amer%20Ordagic2%202018.png.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/7e2fea5a-3750-4d0c-a8a5-287f39d4d7f5:d9744d034fbbf62e657c54877d5512cba4cd7b7b/width-800/21_Kristiansen.png.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/6cf48b79-9481-43cf-a38b-c7aab0714f87:ca59fae61e7ef0e87ba458bdd0824a4211f12627/width-800/17_Rolantsson.png.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/63dda4f2-2d55-4f20-a7e3-7af2e04fd9c0:4a253c089278da1022f74fbe2803c13c9fd89fd7/width-800/15_Acosta.png.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/89cde773-5c7a-447c-9478-0445e4e961bf:e170d96a0c71b389995c5cdc9830d1cb6067e4a4/width-800/5_Gronner.png.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/7888d16e-ce77-452d-8177-93c58bd4fba2:34858749a642552c52f9bcb79aa052aae63d1ec6/width-800/3_Wormgoor.png.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/8ca0555e-5bcf-49f5-bd1b-e9fe078dfc1c:6da29d2814c6c6ff17ad2bf23baaad6b94c50b94/width-800/Taijo%20Teniste%202018.png.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/9ad71a3f-ff5c-4eb5-a315-84872ae167a0:2c3280f034b2911972744c270f7b2d7d6e6f9029/width-800/12_Pettersen.png.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/_/image/bfcbee9e-933b-4b51-8b5e-92355bf58234:050055664e97aee8a8b05885d648c2e9e0f36f25/width-800/Samuel%20Sahin-Radlinger%202018.png.jpg", auto_decompress=true}
})

http.page_end("Page 5")

client.sleep(7)

http.page_start("Page 6")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/terminliste", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/terminliste/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/logo/odd/logo.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/logo/bra/logo.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/eliteserien.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/terminliste/_/image/8a011b12-8204-45b3-88d4-59a9647b3ae1:58eea90e2dfc74dbf933d6829d97fd28320e9b5e/width-400/max", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/terminliste/_/image/c54c2036-3d70-424a-8fb9-1269a31904d5:f8878e23ab4e6d4eb9a8f88496c62ca70308e679/width-400/eurosport-norge", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/terminliste/_/image/9be82595-b26e-44f1-a1aa-9f1757c7b11b:652d24baac30dcdbe2d6880171f442d922368fd9/width-400/eurosport-player", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/patterns/bra-1.svg", auto_decompress=true}
})

http.page_end("Page 6")

client.sleep(17)

http.page_start("Page 7")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/video", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/video/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/css/video.css", auto_decompress=true}
})

http.page_end("Page 7")

client.sleep(18)

http.page_start("Page 9")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/video?c=&offset=7", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/css/video.css", auto_decompress=true}
})

http.page_end("Page 9")

client.sleep(0.46)

http.page_start("Page 11")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/video?o=mest-sette&c=", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/css/video.css", auto_decompress=true}
})

http.page_end("Page 11")

client.sleep(1)

http.page_start("Page 13")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/resultater", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/resultater/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/eliteserien.svg", auto_decompress=true}
})

http.page_end("Page 13")

http.page_start("Page 14")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/resultater/kamp?id=8fdbmwgy0ejjusefmkjkqsfe", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/resultater/kamp/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/logo/ran/logo.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/logo/bra/logo.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/eliteserien.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/js/app.bundle.js", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/js/blazy.js", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/patterns/bra-4.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/fonts/76b8cda6-0ded-4197-acab-e314297eb90f.woff2", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/fonts/b7952e68-ebbf-4bb8-be04-eec334679561.woff2", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/fonts/44e7b0fa-6c8d-43c2-b19e-f1e3ce9ea57c.woff2", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/fonts/acbfa600-0449-44a4-b773-d281b71044d8.woff2", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/arrow.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/fonts/121784c1-863c-4e49-b682-625ea7de55b0.woff2", auto_decompress=true}
})

http.page_end("Page 14")

client.sleep(5)

http.page_start("Page 15")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/resultater", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/resultater/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true}
})

http.page_end("Page 15")

client.sleep(6)

http.page_start("Page 16")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/resultater/kamp?id=pqxt23a2unz9ya6r6p9es0a2", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/resultater/kamp/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/logo/s08/logo.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/logo/bra/logo.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/patterns/bra-4.svg", auto_decompress=true}
})

http.page_end("Page 16")

client.sleep(5)

http.page_start("Page 17")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/resultater", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/resultater/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true}
})

http.page_end("Page 17")

client.sleep(14)

http.page_start("Page 18")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/resultater/kamp?id=ebdz1xh0fzez7u25o1i9r4ve", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/resultater/kamp/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/logo/bra/logo.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/logo/bod/logo.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/patterns/bra-4.svg", auto_decompress=true}
})

http.page_end("Page 18")

client.sleep(9)

http.page_start("Page 19")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "https://www.googletagservices.com/tag/js/gpt.js", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/9d1ba5d6-96b3-40c7-b0d1-cd5a50dc4f8b:09bb493b355f924eff1afe9c9fedc06e9045f417/wide-1600-900/Nyttarslunsj_marked-99.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/51264c47-df14-4c97-9303-c44aa9850397:aa6f979da957021703ce136e5ad1a58989dc3632/height-100/sparebankenvest_borgermester.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/7e94b818-b0de-43ba-b9c6-0bc0f76a847f:05e677458c7f57bd639a1c3abef4cfaa2e41f553/height-100/Fra%20gammel%20pc%20008.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/partnere/konsul-logo/Fra%20gammel%20pc%20022.gif", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/723465e5-2f51-44ee-87ac-12ce496f4a58:fc1108b47547ca19ae6448896dbe78cf8bc00f16/height-100/Fra%20gammel%20pc%20017.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/f3b92499-1395-4182-b854-1a1305a7207f:e442f351781b15568fc4e5f647a618cceffbbc83/height-100/Fra%20gammel%20pc%20012.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/8390a29f-e1ae-406a-aa35-3b4fa437b550:63be0b7e4299b697427c61f9a643b3caee1db2f8/height-100/BT_Logo_RGB_sort.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/174457ed-a362-4b6b-8bef-22adb175575e:61b06c940919ee5361c01b8df0fe3fd3e17bbca6/height-100/NIKE.svg.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/fbfb3954-bd93-418b-b0f5-0403df4d711b:0d0b444fa35b50bcee8c5a29dd37198047ca9140/height-100/leroy2.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/cd9e6460-585c-4208-80e1-23b413a4e943:13e7468758bc48dce81d86fdbb0cd43d1fb9a927/height-100/Tide_Brann-700x200_v2.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/73cfbbcd-6544-43e5-8910-75fc5ab93913:bcc0e3843ca1b79c5a7316dfc5c2b3b1751bfc31/height-100/torshovsport-en-linje-blue.png", auto_decompress=true}
})

http.page_end("Page 19")

client.sleep(5)

http.page_start("Page 21")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/nettverks-og-relasjonsarenaer", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/nettverks-og-relasjonsarenaer/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/nettverks-og-relasjonsarenaer/_/image/ac542a4e-a0a5-4a40-a3b4-ae50fdbe69bd:537a37875a77acca755c37b5dcdd8ce65c2aec00/wide-1600-900/Nytt%C3%A5rslunsjMarked-94.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/nettverks-og-relasjonsarenaer/_/image/99c0876e-91b1-42e4-8466-a053c9bd79bd:e92164082750a1cabc3e8867b181e9b25d3d3ef3/full/Steinar2_240px.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/nettverks-og-relasjonsarenaer/_/image/153c7a81-0d5b-4417-a891-e3e48c5c637a:7bc408273dc790f0f81a8689412272ded680ead4/full/MonicaSandvik_240px-222.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/nettverks-og-relasjonsarenaer/_/image/3de6fd71-c042-4582-ae95-3d269d35267d:1e5eb939070681baa5b2ab1616c10248802b7335/full/lars-petter-2_240px.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/nettverks-og-relasjonsarenaer/_/image/51264c47-df14-4c97-9303-c44aa9850397:aa6f979da957021703ce136e5ad1a58989dc3632/height-100/sparebankenvest_borgermester.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/nettverks-og-relasjonsarenaer/_/image/7e94b818-b0de-43ba-b9c6-0bc0f76a847f:05e677458c7f57bd639a1c3abef4cfaa2e41f553/height-100/Fra%20gammel%20pc%20008.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/partnere/konsul-logo/Fra%20gammel%20pc%20022.gif", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/nettverks-og-relasjonsarenaer/_/image/723465e5-2f51-44ee-87ac-12ce496f4a58:fc1108b47547ca19ae6448896dbe78cf8bc00f16/height-100/Fra%20gammel%20pc%20017.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/nettverks-og-relasjonsarenaer/_/image/f3b92499-1395-4182-b854-1a1305a7207f:e442f351781b15568fc4e5f647a618cceffbbc83/height-100/Fra%20gammel%20pc%20012.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/nettverks-og-relasjonsarenaer/_/image/8390a29f-e1ae-406a-aa35-3b4fa437b550:63be0b7e4299b697427c61f9a643b3caee1db2f8/height-100/BT_Logo_RGB_sort.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/nettverks-og-relasjonsarenaer/_/image/174457ed-a362-4b6b-8bef-22adb175575e:61b06c940919ee5361c01b8df0fe3fd3e17bbca6/height-100/NIKE.svg.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/nettverks-og-relasjonsarenaer/_/image/fbfb3954-bd93-418b-b0f5-0403df4d711b:0d0b444fa35b50bcee8c5a29dd37198047ca9140/height-100/leroy2.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/nettverks-og-relasjonsarenaer/_/image/cd9e6460-585c-4208-80e1-23b413a4e943:13e7468758bc48dce81d86fdbb0cd43d1fb9a927/height-100/Tide_Brann-700x200_v2.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/nettverks-og-relasjonsarenaer/_/image/73cfbbcd-6544-43e5-8910-75fc5ab93913:bcc0e3843ca1b79c5a7316dfc5c2b3b1751bfc31/height-100/torshovsport-en-linje-blue.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/fonts/9ef359c1-4458-4560-874a-1f40df1c01d1.woff2", auto_decompress=true}
})

http.page_end("Page 21")

client.sleep(4)

http.page_start("Page 23")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/9d1ba5d6-96b3-40c7-b0d1-cd5a50dc4f8b:09bb493b355f924eff1afe9c9fedc06e9045f417/wide-1600-900/Nyttarslunsj_marked-99.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/51264c47-df14-4c97-9303-c44aa9850397:aa6f979da957021703ce136e5ad1a58989dc3632/height-100/sparebankenvest_borgermester.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/7e94b818-b0de-43ba-b9c6-0bc0f76a847f:05e677458c7f57bd639a1c3abef4cfaa2e41f553/height-100/Fra%20gammel%20pc%20008.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/723465e5-2f51-44ee-87ac-12ce496f4a58:fc1108b47547ca19ae6448896dbe78cf8bc00f16/height-100/Fra%20gammel%20pc%20017.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/f3b92499-1395-4182-b854-1a1305a7207f:e442f351781b15568fc4e5f647a618cceffbbc83/height-100/Fra%20gammel%20pc%20012.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/8390a29f-e1ae-406a-aa35-3b4fa437b550:63be0b7e4299b697427c61f9a643b3caee1db2f8/height-100/BT_Logo_RGB_sort.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/174457ed-a362-4b6b-8bef-22adb175575e:61b06c940919ee5361c01b8df0fe3fd3e17bbca6/height-100/NIKE.svg.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/fbfb3954-bd93-418b-b0f5-0403df4d711b:0d0b444fa35b50bcee8c5a29dd37198047ca9140/height-100/leroy2.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/cd9e6460-585c-4208-80e1-23b413a4e943:13e7468758bc48dce81d86fdbb0cd43d1fb9a927/height-100/Tide_Brann-700x200_v2.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/73cfbbcd-6544-43e5-8910-75fc5ab93913:bcc0e3843ca1b79c5a7316dfc5c2b3b1751bfc31/height-100/torshovsport-en-linje-blue.png", auto_decompress=true}
})

http.page_end("Page 23")

client.sleep(1)

http.page_start("Page 24")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/knytt-tettere-relasjoner-med-kundene", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/css/video.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/knytt-tettere-relasjoner-med-kundene/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/knytt-tettere-relasjoner-med-kundene/_/image/02593d62-e6cf-48e1-9884-06e0d0a537de:aec1877c905652d0f56455be2efd09b428294e82/wide-1600-900/kremmerhuset.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/knytt-tettere-relasjoner-med-kundene/_/image/99c0876e-91b1-42e4-8466-a053c9bd79bd:e92164082750a1cabc3e8867b181e9b25d3d3ef3/full/Steinar2_240px.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/knytt-tettere-relasjoner-med-kundene/_/image/153c7a81-0d5b-4417-a891-e3e48c5c637a:7bc408273dc790f0f81a8689412272ded680ead4/full/MonicaSandvik_240px-222.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/knytt-tettere-relasjoner-med-kundene/_/image/3de6fd71-c042-4582-ae95-3d269d35267d:1e5eb939070681baa5b2ab1616c10248802b7335/full/lars-petter-2_240px.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/knytt-tettere-relasjoner-med-kundene/_/image/51264c47-df14-4c97-9303-c44aa9850397:aa6f979da957021703ce136e5ad1a58989dc3632/height-100/sparebankenvest_borgermester.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/knytt-tettere-relasjoner-med-kundene/_/image/7e94b818-b0de-43ba-b9c6-0bc0f76a847f:05e677458c7f57bd639a1c3abef4cfaa2e41f553/height-100/Fra%20gammel%20pc%20008.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/partnere/konsul-logo/Fra%20gammel%20pc%20022.gif", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/knytt-tettere-relasjoner-med-kundene/_/image/723465e5-2f51-44ee-87ac-12ce496f4a58:fc1108b47547ca19ae6448896dbe78cf8bc00f16/height-100/Fra%20gammel%20pc%20017.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/knytt-tettere-relasjoner-med-kundene/_/image/f3b92499-1395-4182-b854-1a1305a7207f:e442f351781b15568fc4e5f647a618cceffbbc83/height-100/Fra%20gammel%20pc%20012.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/knytt-tettere-relasjoner-med-kundene/_/image/8390a29f-e1ae-406a-aa35-3b4fa437b550:63be0b7e4299b697427c61f9a643b3caee1db2f8/height-100/BT_Logo_RGB_sort.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/knytt-tettere-relasjoner-med-kundene/_/image/174457ed-a362-4b6b-8bef-22adb175575e:61b06c940919ee5361c01b8df0fe3fd3e17bbca6/height-100/NIKE.svg.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/knytt-tettere-relasjoner-med-kundene/_/image/fbfb3954-bd93-418b-b0f5-0403df4d711b:0d0b444fa35b50bcee8c5a29dd37198047ca9140/height-100/leroy2.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/knytt-tettere-relasjoner-med-kundene/_/image/cd9e6460-585c-4208-80e1-23b413a4e943:13e7468758bc48dce81d86fdbb0cd43d1fb9a927/height-100/Tide_Brann-700x200_v2.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/knytt-tettere-relasjoner-med-kundene/_/image/73cfbbcd-6544-43e5-8910-75fc5ab93913:bcc0e3843ca1b79c5a7316dfc5c2b3b1751bfc31/height-100/torshovsport-en-linje-blue.png", auto_decompress=true}
})

http.page_end("Page 24")

client.sleep(1)

http.page_start("Page 26")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/9d1ba5d6-96b3-40c7-b0d1-cd5a50dc4f8b:09bb493b355f924eff1afe9c9fedc06e9045f417/wide-1600-900/Nyttarslunsj_marked-99.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/51264c47-df14-4c97-9303-c44aa9850397:aa6f979da957021703ce136e5ad1a58989dc3632/height-100/sparebankenvest_borgermester.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/7e94b818-b0de-43ba-b9c6-0bc0f76a847f:05e677458c7f57bd639a1c3abef4cfaa2e41f553/height-100/Fra%20gammel%20pc%20008.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/723465e5-2f51-44ee-87ac-12ce496f4a58:fc1108b47547ca19ae6448896dbe78cf8bc00f16/height-100/Fra%20gammel%20pc%20017.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/f3b92499-1395-4182-b854-1a1305a7207f:e442f351781b15568fc4e5f647a618cceffbbc83/height-100/Fra%20gammel%20pc%20012.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/8390a29f-e1ae-406a-aa35-3b4fa437b550:63be0b7e4299b697427c61f9a643b3caee1db2f8/height-100/BT_Logo_RGB_sort.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/174457ed-a362-4b6b-8bef-22adb175575e:61b06c940919ee5361c01b8df0fe3fd3e17bbca6/height-100/NIKE.svg.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/fbfb3954-bd93-418b-b0f5-0403df4d711b:0d0b444fa35b50bcee8c5a29dd37198047ca9140/height-100/leroy2.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/cd9e6460-585c-4208-80e1-23b413a4e943:13e7468758bc48dce81d86fdbb0cd43d1fb9a927/height-100/Tide_Brann-700x200_v2.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/_/image/73cfbbcd-6544-43e5-8910-75fc5ab93913:bcc0e3843ca1b79c5a7316dfc5c2b3b1751bfc31/height-100/torshovsport-en-linje-blue.png", auto_decompress=true}
})

http.page_end("Page 26")

client.sleep(3)

http.page_start("Page 27")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/ok-kjennskap-til-din-bedrift-og-bedriftens-produkter", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/ok-kjennskap-til-din-bedrift-og-bedriftens-produkter/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/ok-kjennskap-til-din-bedrift-og-bedriftens-produkter/_/image/07b2335f-8f65-4589-9a00-756c12e4e86b:91ca4ed55ca0fddb24bd51abb6ad8f6971ae4735/wide-1600-900/skilt%20og%20digitale%20boards.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/ok-kjennskap-til-din-bedrift-og-bedriftens-produkter/_/image/99c0876e-91b1-42e4-8466-a053c9bd79bd:e92164082750a1cabc3e8867b181e9b25d3d3ef3/full/Steinar2_240px.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/ok-kjennskap-til-din-bedrift-og-bedriftens-produkter/_/image/153c7a81-0d5b-4417-a891-e3e48c5c637a:7bc408273dc790f0f81a8689412272ded680ead4/full/MonicaSandvik_240px-222.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/ok-kjennskap-til-din-bedrift-og-bedriftens-produkter/_/image/3de6fd71-c042-4582-ae95-3d269d35267d:1e5eb939070681baa5b2ab1616c10248802b7335/full/lars-petter-2_240px.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/ok-kjennskap-til-din-bedrift-og-bedriftens-produkter/_/image/51264c47-df14-4c97-9303-c44aa9850397:aa6f979da957021703ce136e5ad1a58989dc3632/height-100/sparebankenvest_borgermester.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/ok-kjennskap-til-din-bedrift-og-bedriftens-produkter/_/image/7e94b818-b0de-43ba-b9c6-0bc0f76a847f:05e677458c7f57bd639a1c3abef4cfaa2e41f553/height-100/Fra%20gammel%20pc%20008.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/partnere/konsul-logo/Fra%20gammel%20pc%20022.gif", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/ok-kjennskap-til-din-bedrift-og-bedriftens-produkter/_/image/723465e5-2f51-44ee-87ac-12ce496f4a58:fc1108b47547ca19ae6448896dbe78cf8bc00f16/height-100/Fra%20gammel%20pc%20017.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/ok-kjennskap-til-din-bedrift-og-bedriftens-produkter/_/image/f3b92499-1395-4182-b854-1a1305a7207f:e442f351781b15568fc4e5f647a618cceffbbc83/height-100/Fra%20gammel%20pc%20012.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/ok-kjennskap-til-din-bedrift-og-bedriftens-produkter/_/image/8390a29f-e1ae-406a-aa35-3b4fa437b550:63be0b7e4299b697427c61f9a643b3caee1db2f8/height-100/BT_Logo_RGB_sort.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/ok-kjennskap-til-din-bedrift-og-bedriftens-produkter/_/image/174457ed-a362-4b6b-8bef-22adb175575e:61b06c940919ee5361c01b8df0fe3fd3e17bbca6/height-100/NIKE.svg.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/ok-kjennskap-til-din-bedrift-og-bedriftens-produkter/_/image/fbfb3954-bd93-418b-b0f5-0403df4d711b:0d0b444fa35b50bcee8c5a29dd37198047ca9140/height-100/leroy2.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/ok-kjennskap-til-din-bedrift-og-bedriftens-produkter/_/image/cd9e6460-585c-4208-80e1-23b413a4e943:13e7468758bc48dce81d86fdbb0cd43d1fb9a927/height-100/Tide_Brann-700x200_v2.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/ok-kjennskap-til-din-bedrift-og-bedriftens-produkter/_/image/73cfbbcd-6544-43e5-8910-75fc5ab93913:bcc0e3843ca1b79c5a7316dfc5c2b3b1751bfc31/height-100/torshovsport-en-linje-blue.png", auto_decompress=true}
})

http.page_end("Page 27")

client.sleep(4)

http.page_start("Page 29")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/kommende-arrangementer-for-vare-samarbeidspartnere/Arrangementer%202018", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/kommende-arrangementer-for-vare-samarbeidspartnere/Arrangementer%202018/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/kommende-arrangementer-for-vare-samarbeidspartnere/Arrangementer%202018/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/kommende-arrangementer-for-vare-samarbeidspartnere/Arrangementer%202018/_/asset/no.seeds.app.football:1528888397/js/jquery.js", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/kommende-arrangementer-for-vare-samarbeidspartnere/Arrangementer%202018/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/kommende-arrangementer-for-vare-samarbeidspartnere/Arrangementer%202018/_/image/8866dd6d-1cca-4572-bd0f-023d2a6f1f19:feb98c2d3e2a2aa0924e4be20f501d8fe6b8e29f/wide-1600-900/Nyttarslunsj_marked-69.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/kommende-arrangementer-for-vare-samarbeidspartnere/Arrangementer%202018/_/asset/no.seeds.app.football:1528888397/compiled/js/app.bundle.js", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/kommende-arrangementer-for-vare-samarbeidspartnere/Arrangementer%202018/_/asset/no.seeds.app.football:1528888397/js/blazy.js", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/kommende-arrangementer-for-vare-samarbeidspartnere/Arrangementer%202018/_/asset/no.seeds.app.football:1528888397/fonts/76b8cda6-0ded-4197-acab-e314297eb90f.woff2", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/kommende-arrangementer-for-vare-samarbeidspartnere/Arrangementer%202018/_/asset/no.seeds.app.football:1528888397/fonts/b7952e68-ebbf-4bb8-be04-eec334679561.woff2", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/kommende-arrangementer-for-vare-samarbeidspartnere/Arrangementer%202018/_/asset/no.seeds.app.football:1528888397/fonts/44e7b0fa-6c8d-43c2-b19e-f1e3ce9ea57c.woff2", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/kommende-arrangementer-for-vare-samarbeidspartnere/Arrangementer%202018/_/asset/no.seeds.app.football:1528888397/fonts/9ef359c1-4458-4560-874a-1f40df1c01d1.woff2", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/kommende-arrangementer-for-vare-samarbeidspartnere/Arrangementer%202018/_/asset/no.seeds.app.football:1528888397/img/arrow.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/kommende-arrangementer-for-vare-samarbeidspartnere/Arrangementer%202018/_/asset/no.seeds.app.football:1528888397/fonts/121784c1-863c-4e49-b682-625ea7de55b0.woff2", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/kommersiell-avdeling/muligheter-for-din-bedrift/kommende-arrangementer-for-vare-samarbeidspartnere/Arrangementer%202018/_/asset/no.seeds.app.football:1528888397/fonts/acbfa600-0449-44a4-b773-d281b71044d8.woff2", auto_decompress=true}
})

http.page_end("Page 29")

client.sleep(4)

http.page_start("Page 30")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/om-klubben", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/js/jquery.js", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-klubben/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/js/app.bundle.js", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/js/blazy.js", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/patterns/bra-4.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/fonts/76b8cda6-0ded-4197-acab-e314297eb90f.woff2", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/fonts/acbfa600-0449-44a4-b773-d281b71044d8.woff2", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/fonts/9ef359c1-4458-4560-874a-1f40df1c01d1.woff2", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/arrow.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/fonts/b7952e68-ebbf-4bb8-be04-eec334679561.woff2", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/fonts/44e7b0fa-6c8d-43c2-b19e-f1e3ce9ea57c.woff2", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/fonts/121784c1-863c-4e49-b682-625ea7de55b0.woff2", auto_decompress=true}
})

http.page_end("Page 30")

client.sleep(4)

http.page_start("Page 31")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/om-klubben/Bli%20medlem%20i%20Brann", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/om-klubben/Bli%20medlem%20i%20Brann/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-klubben/Bli%20medlem%20i%20Brann/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-klubben/Bli%20medlem%20i%20Brann/_/asset/no.seeds.app.football:1528888397/js/jquery.js", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-klubben/Bli%20medlem%20i%20Brann/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-klubben/Bli%20medlem%20i%20Brann/_/asset/no.seeds.app.football:1528888397/compiled/js/app.bundle.js", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-klubben/Bli%20medlem%20i%20Brann/_/asset/no.seeds.app.football:1528888397/js/blazy.js", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-klubben/Bli%20medlem%20i%20Brann/_/asset/no.seeds.app.football:1528888397/img/patterns/bra-4.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-klubben/Bli%20medlem%20i%20Brann/_/asset/no.seeds.app.football:1528888397/fonts/76b8cda6-0ded-4197-acab-e314297eb90f.woff2", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-klubben/Bli%20medlem%20i%20Brann/_/asset/no.seeds.app.football:1528888397/fonts/b7952e68-ebbf-4bb8-be04-eec334679561.woff2", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-klubben/Bli%20medlem%20i%20Brann/_/asset/no.seeds.app.football:1528888397/fonts/44e7b0fa-6c8d-43c2-b19e-f1e3ce9ea57c.woff2", auto_decompress=true}
})

http.page_end("Page 31")

http.page_start("Page 32")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/om-klubben/Bli%20medlem%20i%20Brann/_/asset/no.seeds.app.football:1528888397/img/arrow.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-klubben/Bli%20medlem%20i%20Brann/_/asset/no.seeds.app.football:1528888397/fonts/121784c1-863c-4e49-b682-625ea7de55b0.woff2", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-klubben/Bli%20medlem%20i%20Brann/_/asset/no.seeds.app.football:1528888397/fonts/acbfa600-0449-44a4-b773-d281b71044d8.woff2", auto_decompress=true}
})

http.page_end("Page 32")

client.sleep(3)

http.page_start("Page 33")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/om-stadion", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-stadion/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-stadion/_/image/5669077b-104c-47cc-be69-9284e45dbf80:0e7df48362c387edfc0e960eb5c657d6dc7c28b5/wide-1600-900/Brann%20Stadion%20Granli.JPG", auto_decompress=true}

})

http.page_end("Page 33")

client.sleep(3)

http.page_start("Page 34")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/om-stadion/fakta-om-stadion", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-stadion/fakta-om-stadion/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-stadion/fakta-om-stadion/_/image/9eadabf4-3565-496e-ae71-4c9d4dbf0b06:7e21ad749a19f1479572e0fe46c611ba7ee18f03/width-700/1wpbl8o80to6h1nfo3n9swz55y", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-stadion/fakta-om-stadion/_/image/e831b9b9-e3d6-4e51-b3e5-dd900aab3261:2673002e243e692ae39a93451dd8285c0c8a77e8/width-700/BOB-tribune_700px-0335.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-stadion/fakta-om-stadion/_/image/c8303f44-c9d9-4b97-93d8-586738ec3500:e54fde3069eb6280cb6cef46cbed2b40b0d4abc0/full/Frydenbo_tribunen_700px.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/patterns/bra-4.svg", auto_decompress=true}
})

http.page_end("Page 34")

client.sleep(4)

http.page_start("Page 36")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/om-stadion", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-stadion/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-stadion/_/image/5669077b-104c-47cc-be69-9284e45dbf80:0e7df48362c387edfc0e960eb5c657d6dc7c28b5/wide-1600-900/Brann%20Stadion%20Granli.JPG", auto_decompress=true}
})

http.page_end("Page 36")

client.sleep(3)

http.page_start("Page 37")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/om-stadion/stadions-historie", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-stadion/stadions-historie/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-stadion/stadions-historie/_/image/f79c09fa-b677-4428-accf-b7e27c172c68:3467990e2a087e91d86bfeb1217299b07d375697/wide-1600-900/1nzctnhvgetje1ldt8asefcf9u", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-stadion/stadions-historie/_/image/fec51a96-33ae-457a-aee4-ed83b005f304:300e5a5d130872bf357161005eda6c615b937151/full/y83ypyc7qeyo1qqwq1ddmtiuj", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-stadion/stadions-historie/_/image/9eadabf4-3565-496e-ae71-4c9d4dbf0b06:7e21ad749a19f1479572e0fe46c611ba7ee18f03/full/1wpbl8o80to6h1nfo3n9swz55y", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-stadion/stadions-historie/_/image/0c5695d7-cb5d-4ffc-a6c6-8089fe90dd25:e6005a96bf85a6736c2919245147d5dfc92b07fd/full/6iei7c0z84kc1dxczeqfbtvr6", auto_decompress=true}
})

http.page_end("Page 37")

client.sleep(2)

http.page_start("Page 38")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/om-stadion", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-stadion/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/om-stadion/_/image/5669077b-104c-47cc-be69-9284e45dbf80:0e7df48362c387edfc0e960eb5c657d6dc7c28b5/wide-1600-900/Brann%20Stadion%20Granli.JPG", auto_decompress=true}
})

http.page_end("Page 38")

client.sleep(2)

http.page_start("Page 39")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/resultater", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/resultater/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/eliteserien.svg", auto_decompress=true}
})

http.page_end("Page 39")

client.sleep(2)

http.page_start("Page 40")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/patterns/bra-4.svg", auto_decompress=true}
})

http.page_end("Page 40")

client.sleep(4)

http.page_start("Page 41")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-g19_old", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-g19_old/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-g19_old/_/image/c3fbdafa-d0dd-45d7-82aa-4f23fae0aad7:6c045c27bb3e937ece14f196e5dd7e2d48a06782/wide-1600-900/lagbildeG19_2017-32.jpg", auto_decompress=true}
})

http.page_end("Page 41")

client.sleep(37)

http.page_start("Page 42")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/img/patterns/bra-4.svg", auto_decompress=true}
})

http.page_end("Page 42")

client.sleep(7)

http.page_start("Page 43")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-menn-senior-b", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-menn-senior-b/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-menn-senior-b/_/image/c3fbdafa-d0dd-45d7-82aa-4f23fae0aad7:6c045c27bb3e937ece14f196e5dd7e2d48a06782/wide-1600-900/lagbildeG19_2017-32.jpg", auto_decompress=true}
})

http.page_end("Page 43")

client.sleep(18)

http.page_start("Page 44")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-menn-senior-b/spillere", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-menn-senior-b/spillere/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-menn-senior-b/spillere/_/image/7379777e-7318-4d49-8560-d5b8c6afccbe:3fe8100d099e9bc2e70d3848b32bbdce16e820ed/width-800/SveinPedersen-92.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-menn-senior-b/spillere/_/image/64d5ca97-1af3-4c45-a1fc-19e46fc85de6:b399c7874129275bf40236631f893694f2214cd1/width-800/MartinDalsg%C3%A5rd-85.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-menn-senior-b/spillere/_/image/70a65bad-e913-4613-aa45-977689664e4d:88e1206c7cfee0e2d86fc452be92850a4f33aab9/width-800/Lone.png", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-menn-senior-b/spillere/_/image/8b6c371d-a73b-47eb-88aa-fee5956a70eb:417c51212fbc20136beabdf376a4ba64b2b1454a/width-800/MortenKalvenes-90.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-menn-senior-b/spillere/_/image/e18b6a8d-37ec-44e8-92d3-a1f869d7016b:60fd97ea2996e14f223eeefbb6f35313c90770ef/width-800/H%C3%B8viskeland-61.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-menn-senior-b/spillere/_/image/ea07c98b-83a2-4a8d-95d4-8a11eae8b8c3:1025b5eb3e82cb97c16787a199f8d33fa1114bd7/width-800/Fossnes-79.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-menn-senior-b/spillere/_/image/c9eec164-be6c-4ed8-88a6-70208a93abfa:def8e6fda53f9c9d31f651a97a83ab13e5296e26/width-800/Bildoy.png.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-menn-senior-b/spillere/_/image/bd3d2a83-1c1b-4af2-bc01-82e7d042bd03:e308561a514eb43e206c34468e0798b1483fa524/width-800/Mj%C3%B8s-60.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-menn-senior-b/spillere/_/image/96477513-7fe5-4abb-9714-b30948ca3a05:bfc15d43ef5c29074df037f346fcaca82f8c9106/width-800/Gjerstad-57.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-menn-senior-b/spillere/_/image/0c29b40c-05ba-42d1-9f30-215d6f48e6d4:a76d227d224f3495949953d20cb76e3d5fec95f3/width-800/t%C3%B8rum-51.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-menn-senior-b/spillere/_/image/5c91b75b-e1c8-45d1-9080-539a1f9b5368:e36b113bd9a1f26a47403b7b5b4eb8c268ca56cc/width-800/S_Marthinussen-70.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-menn-senior-b/spillere/_/image/b72af789-e5ff-442a-8644-e31aa81f1a1d:1c3a360c64f2dae39b9d44953cf7cf68a630fb3a/width-800/TobiasAkse-130.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-menn-senior-b/spillere/_/image/98d7e523-3f83-4ecc-88ec-31b03b3cb7bd:4d049328dd78e2bb43bf3c682898aa27e47fe471/width-800/Kleppe-65.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-menn-senior-b/spillere/_/image/86b51c59-a3cd-41d4-a500-dd938d87b225:189f0c7fa482eace6d42d5a752524789b6b23954/width-800/Foldnes-69.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-menn-senior-b/spillere/_/image/c824f926-9916-4d21-8cfc-07ab947f409a:d120d16807dd0b7ad49613cf88e904881d433175/width-800/misje-42.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/lag/akademiet/brann-menn-senior-b/spillere/_/image/30bd2c86-497e-42ee-b62e-18b42cbe1bdd:2b0cbb9c72fdf544b5b61c1dce3ab0e801475c27/width-800/krumsvik-54.jpg", auto_decompress=true}
})

http.page_end("Page 44")

client.sleep(2)

http.page_start("Page 45")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/nyheter", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/_/image/f4283bad-d65a-4af3-ad76-9ba5465fb593:66a7ba88a272acefe8153d713e17b69e641cbfc5/width-300/Ranheim%20Brann%20Steffen%20action.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/_/image/4bd3d11d-df59-4337-b88d-2e2b0eb3d634:f3862b2fc1abdf4e4532f19a1afb47e3b506bcc6/width-300/Jubel%20mot%20Ranheim.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/_/image/b447eaab-a49d-463e-aa0d-114661e93574:632a0394b3a5834c45004518e8f3acafd9ad5c79/width-300/Steffen%20jubel%20mot%20Ranheim.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/_/image/24c82a08-d459-4b6d-aaac-fbcdc026db8d:18958d677eec7aebf59a9a494a8a432fb820a9a5/width-300/Molde-Brann2017-18.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/_/image/95d6eabb-01b0-4a80-9548-56fae03488be:8856790f7ce85acaa555f43d9b183cb808a831f9/width-300/Sandviken%20Brann%20Andreas%20Mj%C3%B8s.JPG.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/_/image/db513298-daa4-41ac-ab1b-46950a6d8953:efecf60c31043f8be1d6b77102673c8a7113e145/width-300/Brann%20Stab%C3%A6k%202018%20innmarsj%20bluss.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/_/image/d6e0427f-4539-425f-9b83-b516ed8d0db0:e91437e08fe090bc8aeae72119e6e12abac903c4/width-300/Brann%20Stab%C3%A6k%202018%20Orry.JPG.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/_/image/e6aecac1-dbeb-43ef-a747-8573f24af44e:69b91da4b8349897400d2f9494bb417e0a857698/width-300/Brann%20Stab%C3%A6k%202018%20Vito.JPG.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/_/image/0b86cfe5-f8b7-4e56-bbd1-cbd1b20e48cb:28d12e228230a5424ea33c936e3130970381369a/width-300/Brann%20Stab%C3%A6k%202018%20Gilli.JPG.jpg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/_/image/587533bd-d486-4819-a467-69c905f9ed08:54fab75a16f1060f1b48b5de81cf6a1446b65252/width-300/Str%C3%B8msgodset-Brann2017-6171.jpg", auto_decompress=true}
})

http.page_end("Page 45")

client.sleep(1)

http.page_start("Page 46")
http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/kristiansen-er-tilbake-pa-laget", auto_decompress=true}
})

http.request_batch({
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/bra.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/_/asset/no.seeds.app.football:1528888397/compiled/css/seeds.css", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/kristiansen-er-tilbake-pa-laget/_/image/405ca125-7c3e-4052-88c0-ef89865ed4b1:410b729c5e9affefa4f2386528ae9bb502db9861/wide-72-72/Brann_logo_141616.svg", auto_decompress=true},
	{"GET", "http://ntf-test.customer.enonic.io/nyheter/kristiansen-er-tilbake-pa-laget/_/image/24c82a08-d459-4b6d-aaac-fbcdc026db8d:18958d677eec7aebf59a9a494a8a432fb820a9a5/wide-1600-900/Molde-Brann2017-18.jpg", auto_decompress=true}
})

http.page_end("Page 46")

client.sleep(math.random(20, 40))
