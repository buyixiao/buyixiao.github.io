if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let b={};const l=e=>a(e,c),s={module:{uri:c},exports:b,require:l};i[c]=Promise.all(d.map((e=>s[e]||l(e)))).then((e=>(r(...e),b)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"1b58ef6503a35bc9f993cfb078df3b64"},{url:"about/index.html",revision:"5f70e297e3fee1962b6604f2c387d50e"},{url:"archives/2022/01/index.html",revision:"331dbf5bb5ee2751d6a8a5fa0c5baef4"},{url:"archives/2022/01/page/2/index.html",revision:"551581172e2959ad7f660e0191de1563"},{url:"archives/2022/02/index.html",revision:"0db8ae81f1563e4408dd0deb4711d7dc"},{url:"archives/2022/03/index.html",revision:"7fd2c0f925b14ed910cda72229f5b928"},{url:"archives/2022/04/index.html",revision:"d1ff601b0dfbad7b61b96c645c461597"},{url:"archives/2022/05/index.html",revision:"9b54800a84f3bcdc74a73ff9f8c61cc6"},{url:"archives/2022/06/index.html",revision:"6fb56189abba1c3297380fdac4820503"},{url:"archives/2022/index.html",revision:"0c442f686b5114fb44febc4a486fd64f"},{url:"archives/2022/page/2/index.html",revision:"46fc1ba0017665cd2c3715f922f6ac71"},{url:"archives/2022/page/3/index.html",revision:"bfbe89e63dfbfedb2ee4b4164f6590a4"},{url:"archives/index.html",revision:"9180613d20674c597f7bbd659079d1a7"},{url:"archives/page/2/index.html",revision:"02ca202992ca4fd589e7cc0f84ad3651"},{url:"archives/page/3/index.html",revision:"eded34c87154c6101c95986405e0b578"},{url:"baidu_verify_code-RpYkRXhb8f.html",revision:"faa355733a3de1b446a6c595e672d7f9"},{url:"blog/all-news-spider.html",revision:"8542f324c65ba9b1e83e926dc06a5e2c"},{url:"blog/android-camera2.html",revision:"b9d78e9df74d121e0078edc89d989c24"},{url:"blog/butterfly-beauty-quick-start.html",revision:"9ee21ea8374fa609651bf097be3d0c03"},{url:"blog/client-real-ip-proxy-by-nginx.html",revision:"7e5181e1a7ea7f30e7e310cbd169f879"},{url:"blog/domainname-to-nginx-default-but-ip-to-ours.html",revision:"f34f0122f27b8ee694bf7da9ad1a7489"},{url:"blog/follow-your-heart-by-likaifu.html",revision:"fb3cd224e094fdc5c8f586e6c780d490"},{url:"blog/merge-csv-with-same-columns.html",revision:"2002ad4241155624716f2314f88dd636"},{url:"blog/new-weibo-notify-chrome-extension.html",revision:"ab80b8bdb20b99815d0e0a9e902de68a"},{url:"blog/one-stop-weibo-visualization.html",revision:"97feef335585ee070955311c3984cf1a"},{url:"blog/pandas-groupby-frequency-statistics.html",revision:"97b1f15d06790e7669e8dc63f11ceb2c"},{url:"blog/pandas-stratified-sampling.html",revision:"1cab7d626e413e6add03087ab30f72b0"},{url:"blog/pip-install-success-import-fail.html",revision:"614d09c0d9a29c525aa028b7a062ef9f"},{url:"blog/pyd-pyc-summary.html",revision:"478f2c4a90da8456d32f2837b82b865e"},{url:"blog/qualitative-news-dataset.html",revision:"874cd0e841c2bd376c4b7d905b685738"},{url:"blog/something-about-rain.html",revision:"61e972afa45205d23f7d0c4bd428387c"},{url:"blog/weibo-ads-filter-keyword-blocker.html",revision:"7e1140a8c9edc29d4a291badd0967bcc"},{url:"blog/weibo-comment-robot-analysis.html",revision:"a765eb5a75c7fcdd90ddb479cb6bf1ed"},{url:"blog/weibo-forward-network-visual.html",revision:"cd8aab4e32619c7e78738d65b335becd"},{url:"blog/weibo-super-spider.html",revision:"a910fae9b83e422cde7328a453cea2c7"},{url:"blog/weibo-superstar-relation-network-visual.html",revision:"5525252cc261845287da6d2b08b7c999"},{url:"blog/weibo-user-backup.html",revision:"7ed027b307aad94c94b41dd21835cc12"},{url:"blog/what-i-have-lived-for-by-russell.html",revision:"95f57c173fbc52654684276726f36887"},{url:"blog/why-buyixiao-blog-start.html",revision:"6c6c5228da92664a761cfe4aeb7040c1"},{url:"categories/Android/index.html",revision:"b2b7d56b1e5777fdca60e551cb249d6e"},{url:"categories/Butterfly/index.html",revision:"45bc64a88a2dfebd13bfee43dbcebfd9"},{url:"categories/Chrome-Extension/index.html",revision:"26e4afcf35154da6d80708b75808f91e"},{url:"categories/index.html",revision:"4328072d04ae2c367f4db335a04c40c5"},{url:"categories/nginx/index.html",revision:"cc83434b4397917902feaeb369043982"},{url:"categories/Python/index.html",revision:"6814ac8d852213508e974c64d26c150e"},{url:"categories/励志/index.html",revision:"ac61bcff8e03475a389f3756b6a4e5d4"},{url:"categories/可视化/index.html",revision:"cb5bf69d047cab7d7eadf302a37ba61c"},{url:"categories/爬虫/index.html",revision:"3739c67a3701c838a882bb14bf222a12"},{url:"categories/随笔/index.html",revision:"a575bbaafb63db45edf41a177327e27e"},{url:"comment/index.html",revision:"10e97a3182f2be4ae6e9ab30ea353979"},{url:"css/custom.css",revision:"45a31ed0a78e1af3c2e0c7b43c182866"},{url:"css/index.css",revision:"4263eaf3eb832cba97d0a2d30d22437a"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay-min.png",revision:"4f62aa8a6df9224a7f53bafc6cde8e3a"},{url:"img/avatar.png",revision:"c957c73b001aee6a2728f9516d67d745"},{url:"img/favicon.png",revision:"a127918a85c3c6d695fa2e84c0512a09"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index.jpg",revision:"83ece8c3f1c04cce2699c72983db2bdd"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/wechat-min.png",revision:"37911d934ea3bdf74ab3096f27f1006a"},{url:"index.html",revision:"0bb8442b25fe303a7041a117298d7196"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"link/index.html",revision:"97f1fbb68478999295b8b60985916737"},{url:"page/2/index.html",revision:"0c946fe0eda0bb8368fde33ec2f6cfb2"},{url:"page/3/index.html",revision:"d561823cfdd5c07a1c9c53fee68fa4fe"},{url:"tags/android/index.html",revision:"874fdf6c942e1456f25ee3bc714e8170"},{url:"tags/bbcnews/index.html",revision:"95950f2ec53353cba497e43bc68db978"},{url:"tags/beauty/index.html",revision:"95d159ff1f4148628450d24d2c2ac5f8"},{url:"tags/butterfly/index.html",revision:"73ab3ab04ed90c7e41c3f49953ea22c0"},{url:"tags/buyixiao/index.html",revision:"bb0146e7eceb222799b4f71aa5b03381"},{url:"tags/camera2/index.html",revision:"b64caf69207b46073f0f9aae06aeb57a"},{url:"tags/chrome-扩展/index.html",revision:"3f46e384c42a0ed47deddff48351c423"},{url:"tags/csv-合并/index.html",revision:"0401583e519098a41eb93afe3033c6d5"},{url:"tags/default-server/index.html",revision:"956ca7405e6cd492694f562456d62cba"},{url:"tags/echarts/index.html",revision:"de8aff05c04e5413fa3ee27629e0486c"},{url:"tags/flask/index.html",revision:"77c4a57e6a18c03d8bf854a0b60e8423"},{url:"tags/frequency/index.html",revision:"108a7366c0419117b0376730ddf91204"},{url:"tags/groupby/index.html",revision:"20f79313a64caf6b948624dc98ae1709"},{url:"tags/hexo/index.html",revision:"dcdca164e783b15c44323e657974fa8a"},{url:"tags/index.html",revision:"8884d5e192b9e72ce67d23fb51315756"},{url:"tags/inspurer/index.html",revision:"da2a1bed7f43618b718a991c4bbcadbe"},{url:"tags/ip/index.html",revision:"2d9f4460264fc9e3ead8356daa064900"},{url:"tags/nginx/index.html",revision:"24f228622c229fc2fecfb8de537d6b7b"},{url:"tags/nytimes/index.html",revision:"95f31ab76226becb5bc211fccf74e822"},{url:"tags/pandas/index.html",revision:"e8baf4b5000ecf264c6da74f3bf8598e"},{url:"tags/pengpai/index.html",revision:"677343f4b539eae60d0117f012302c2f"},{url:"tags/pip/index.html",revision:"e4b229dd9b01cb426979fe3a630b7500"},{url:"tags/pyc/index.html",revision:"174aeccaaab70d40cf1cb00b479806ac"},{url:"tags/pycharm/index.html",revision:"118f5a6d93e0b624b84028545987b85a"},{url:"tags/pyd/index.html",revision:"4358d0392f95f5d2e5f961d7d3f390ac"},{url:"tags/python/index.html",revision:"b910bef75f87641b53db40c496d52939"},{url:"tags/requests/index.html",revision:"1c6744163d68b47bc3bdd8eb31714bee"},{url:"tags/sina/index.html",revision:"3de5d8513653bc8e0302c2e7f24416b3"},{url:"tags/tencent/index.html",revision:"63ed8233bca846f96881a72c7086ce86"},{url:"tags/thetimes/index.html",revision:"3689740ad441830d878d76f4be077f67"},{url:"tags/weibosuperspider/index.html",revision:"abcaac57e67c8ca5ff41b0da74cabdcc"},{url:"tags/关系网络/index.html",revision:"900c299252b6e0027e9d5aab3b65257f"},{url:"tags/分层抽样/index.html",revision:"1efb30586f95ce3ce0a1038c04a4cddd"},{url:"tags/去广告/index.html",revision:"4261c8ca906c88655643102b660cdac2"},{url:"tags/可视化/index.html",revision:"9aebe3d3d2eaf361fd8ba08e2dda9d1b"},{url:"tags/域名解析/index.html",revision:"1f403fdee3155f1bb6444366caf20df9"},{url:"tags/微博/index.html",revision:"a74ed6a9bd336f1aff987ab522fd6eba"},{url:"tags/微博关系网络/index.html",revision:"1ff9a9f5eeec733fe057d24568e54fa4"},{url:"tags/微博备份/index.html",revision:"2a78ac6813dfdaac1962181877e16a4a"},{url:"tags/微博点赞/index.html",revision:"3a0cf3481c8870bd5a2b845f909ec520"},{url:"tags/微博用户爬虫/index.html",revision:"06537007e550edb6b6d00200f310ca20"},{url:"tags/微博签到/index.html",revision:"93f0eab3d0c5b34f3254d57038b1f680"},{url:"tags/微博评论/index.html",revision:"4fd98a7307b8d8fabaf76632389433b1"},{url:"tags/微博转发/index.html",revision:"eecbb9d81a67da2b6876c07c9f610d56"},{url:"tags/换源/index.html",revision:"7cf45794b042d545fc4b0e840bd94bba"},{url:"tags/数据集/index.html",revision:"7571790770a431ad6f39e682b49be626"},{url:"tags/新闻/index.html",revision:"ff6a3bc72d23d921071de3c8b9e008b1"},{url:"tags/李开复/index.html",revision:"62281649647338a3f54db8a99c06a071"},{url:"tags/水军/index.html",revision:"47b5ebf4ddc6882491fddec3c53b5ed7"},{url:"tags/爬虫/index.html",revision:"fa2866d890f9446e48b48c9bee74ff94"},{url:"tags/用户微博/index.html",revision:"2c08f0e12221942987901dc9576f3296"},{url:"tags/罗素/index.html",revision:"e6a2a7bf879b088fe454dcad1acbb880"},{url:"tags/营销号/index.html",revision:"25bc0d723628640f1bb8a283975ad781"},{url:"tags/连拍/index.html",revision:"ed11b25f5d7df748c0d8923d11823f13"},{url:"tags/雨/index.html",revision:"1e27b2340b50425edce7d6375f9db01c"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
