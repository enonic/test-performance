import { group, sleep } from 'k6';
import { Trend, Rate, Counter, Gauge } from "k6/metrics";
import http from 'k6/http';

// Version: 1.3
// Creator: Load Impact URL test analyzer

// export let options = { maxRedirects: 0 };

export let options = {
    linger: true,
    stages: [
        { duration: "10s", target: "40" },
        { duration: "30s", target: "50" },
        { duration: "10s", target: "0" }
    ],
    thresholds: {
        "failed requests": ["rate<0.01"],
        "http_req_duration": ["p(95)<3000", "avg<1000"],
        "http_req_connecting": ["max<3"]
    },
    ext: {
        loadimpact: {
            projectID : 3114611,
            name : "Enonic cluster with K6",
            distribution: {
                scenarioLabel1: { loadZone: "amazon:kr:seoul", percent: 50 },
                scenarioLabel2: { loadZone: "amazon:ie:dublin", percent: 50 }
            }
        }
    }
};


export default function() {

	group("page_1 - http://cluster-test.enonic.cloud/", function() {
		let req, res;
		req = [{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/",
			"params": {
				"headers": {
					"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
					"Connection": "keep-alive",
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"Upgrade-Insecure-Requests": "1",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36"
				}
			}
		}];
		res = http.batch(req);
		sleep(0.98);
		req = [{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/css/critical.css",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "text/css,*/*;q=0.1",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/acc85b5c-0887-4416-9c69-889d1dae0616:e2eecbe0f4bdf83fb6fd9b7ee7d7f627ad5f65b3/full/pwa.svg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/5bf9117e-8205-42a7-bac4-d93f50e563c3:2fe008595e6b8abc65385094b623e730fdb412b3/full/Content%20Driven%20Websites.svg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/23900a8e-ba0b-4bcd-8da4-8c4ff75b1d0d:be2248c7f60f73800b9687a64d28e9a0f8c28295/full/Self%20Service.svg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/e81576fe-ce6e-46da-a7d0-b8f9708a9b42:3355938a81886a0baa73166982409aa29b221fc6/block-400-226-0.5-0/Office%20League%20desktop.png.jpeg?quality=85",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/f11d77e4-289f-4d39-ab3e-35ce5fde6fdb:c706fca6e8184dc3562869ee612bd47270696611/block-214-376-0.5-0/Office%20League%20mobile.png.jpeg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/d446d182-180b-4eb5-9526-5f631b3de808:9d71225e0ac93b0507624a5eec285e83b7f56d56/block-400-226-0.5-0/gjensidige%20desktop.png.jpeg?quality=85",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/af1ba475-4abb-4038-876c-0da92254dfb6:ea7c6ec5085b5f86effccfa389653021b38619c5/block-214-376-0.5-0/gjensidige%20iphone.png.jpeg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/2d6e54e8-5506-4e78-896a-0db175e26e81:3e64a4921fc796fa622e38b34e526fe4039b65ab/block-400-226-0.5-0/Bring%20Desktop.png.jpeg?quality=85",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/86b06088-7e2d-412b-97b6-40024404d738:45925bd07b0519c650d7b39e13e8b46c2c913f8a/block-214-376-0.5-0/Bring%20Mobile.png.jpeg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/1547e307-e538-4a2e-afbb-c63976d7cde4:7ea96f98d4b4e8316c85eafc44fd6c9eb6d856ff/block-400-226-0.5-0/nav.no%20desktop.png.jpeg?quality=85",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/cda41397-13ff-40e2-a223-afbcbb869bb7:7ddde246090efbdec7873d52827347878a717bab/block-400-226-0.5-0/Eliteserien%20desktop.png.jpeg?quality=85",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/ed4df576-9663-419f-b974-d0d4b4f54417:fb74743d4e9076dd1e647d92be09955f9922c1ae/block-400-226-0.5-0/Mindful%20monsters%20desktop.png.jpeg?quality=85",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/93dff5d7-63fa-480c-942f-f93dd7b9297d:18a0f00f9bf42ac15e8fa91261663895dcd18115/block-214-376-0.5-0/Mindful%20monsters%20mobile.png.jpeg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/7c46ee0c-7a30-48da-823c-8d321715ac55:15e341e7d04e9fff6b2b7d384974c46f159d4258/block-214-376-0.5-0/nav.no%20iphone%206.png.jpeg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/bd044995-1dd6-43ef-9bd7-3bb72fcbe2c1:add284b5076e8b4d975680763b79fc87e4b3692a/block-214-376-0.5-0/h%C3%B6egh%20autoliners%20iphone.png.jpeg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/991f9aa7-1976-4adc-91a8-a5d9a91a8803:9b519a8ad853c2ca02bad46c1375e284959b7c1e/block-400-226-0.5-0/h%C3%B6egh%20autoliners%20desktop.png.jpeg?quality=85",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/css/non-critical.css",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "text/css,*/*;q=0.1",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/e61bb1a1-b4c9-4687-aae1-75d8104efe24:bf9bf2e38dedeb64d6555120636fd8cc4e9bc154/block-214-376-0.5-0/Eliteserien%20mobile.png.jpeg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/72e3e49c-7ced-4d5c-9e41-e18e2e144694:38cd4a394971a67361f4d1f9f9bb09c801e90fe4/block-400-226-0.5-0/ssb.no%20desktop.png.jpeg?quality=85",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/76d05c5b-1d6a-4414-82b0-1795ba9a006c:e581eda9d5f59c4b1615addf9852716e5d47ba16/block-214-376-0.5-0/ssb.no%20iphone.png.jpeg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/5cc078ce-d265-4560-8b6a-0218c8c1ce92:13f40752bf86adcb903756f2300388929874f12e/block-400-226-0.5-0/jotulgroup.com%20desktop.png.jpeg?quality=85",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/57bb19a9-902f-459f-83a6-7d24ff1ebb0e:b30c653e46167f354710b99f1cef9496c161248d/block-214-376-0.5-0/jotulgroup.com%20iphone.png.jpeg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/9558058a-ce7c-49da-ae9c-36a32ca3c085:cf8cc19acb7e61a1e6d4f82bc56d0c0f4328d964/block-167-167/tafjord.jpg.jpeg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/b46bbf33-f8d8-4146-a804-a58e78cc05f8:af67d872e07e8c13f8f6087dd927b8b42be7508c/full/signs-time-change-cms.jpg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/1bc2df5a-8c58-4e38-993c-e1c719f89770:b791a7c533a72ff4521fa7146dd751385bca8b0e/block-167-167/torstein-aas-hansen.jpg.jpeg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/9d9b7cef-3ec4-47bb-b3e3-374dbcbb0fc6:7ead487df7bedee166c451e9cc538199114841bf/block-167-167/espen-bergh.jpg.jpeg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/js/main.min.js",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "*/*",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/image/098a6549-9fe7-4027-8756-f7fd4254e43a:230f2cb322385f72149e4343dced3e3b225aaed3/max-1280/audience.jpg.jpeg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/img/device-laptop.svg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/css/critical.css",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/img/device-phone.svg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/css/critical.css",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/img/iso-stamp.svg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/css/critical.css",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/img/footer/gplus.svg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/css/critical.css",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/img/footer/twitter.svg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/css/critical.css",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/img/footer/linkedin.svg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/css/critical.css",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/img/footer/facebook.svg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/css/critical.css",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/img/footer/youtube.svg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/css/critical.css",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/img/footer/webagility.svg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/css/critical.css",
					"Connection": "keep-alive"
				}
			}
		}];
		res = http.batch(req);
		sleep(0.50);
		req = [{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/fonts/lineto-akkurat-regular.woff",
			"params": {
				"headers": {
					"Origin": "http://cluster-test.enonic.cloud",
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "*/*",
					"Referer": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/css/non-critical.css",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/fonts/lineto-akkurat-light.woff",
			"params": {
				"headers": {
					"Origin": "http://cluster-test.enonic.cloud",
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "*/*",
					"Referer": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/css/non-critical.css",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/fonts/GT-Pressura-Regular.woff",
			"params": {
				"headers": {
					"Origin": "http://cluster-test.enonic.cloud",
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "*/*",
					"Referer": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/css/non-critical.css",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/fonts/GT-Pressura-Bold.woff",
			"params": {
				"headers": {
					"Origin": "http://cluster-test.enonic.cloud",
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "*/*",
					"Referer": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/css/non-critical.css",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/fonts/GT-Pressura-Light.woff",
			"params": {
				"headers": {
					"Origin": "http://cluster-test.enonic.cloud",
					"Accept-Encoding": "gzip, deflate",
					"Host": "cluster-test.enonic.cloud",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "*/*",
					"Referer": "http://cluster-test.enonic.cloud/_/asset/com.enonic.web.enonic.com:1530714899/css/non-critical.css",
					"Connection": "keep-alive"
				}
			}
		}];
		res = http.batch(req);
		// Random sleep between 5s and 10s
		sleep(Math.floor(Math.random()*5+5));
	});

}
