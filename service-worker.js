if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let l={};const b=e=>a(e,c),s={module:{uri:c},exports:l,require:b};i[c]=Promise.all(d.map((e=>s[e]||b(e)))).then((e=>(r(...e),l)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"a0968692d52ccc62755b6ddde3bc221c"},{url:"about/index.html",revision:"23878c228885853003acd874893e35b9"},{url:"archives/2022/01/index.html",revision:"009417e7dfc59fa893b116aff640efab"},{url:"archives/2022/01/page/2/index.html",revision:"67146c22fa6d3ba0ab0aaee05fa0d4f5"},{url:"archives/2022/02/index.html",revision:"7d372490a3df1ae4c92fda805f40ae3d"},{url:"archives/2022/03/index.html",revision:"6cd5697a266f00403729170e50443391"},{url:"archives/2022/04/index.html",revision:"648f70019847744b80f4b8cd719dd9d9"},{url:"archives/2022/05/index.html",revision:"9f5dd04ddbe1d0ac4c9ad18d21f6e68c"},{url:"archives/2022/06/index.html",revision:"2e044c081e7073abe6e5d3fe49d41f82"},{url:"archives/2022/index.html",revision:"b65dbc38a49263e44703def90fdaaf07"},{url:"archives/2022/page/2/index.html",revision:"55d0e83e81709b64d2cfb6c58821b31e"},{url:"archives/2022/page/3/index.html",revision:"f92b7fdff9e51a6f6dec7e118d3053b7"},{url:"archives/index.html",revision:"87e66114ac0721714119c3e4d165683b"},{url:"archives/page/2/index.html",revision:"321bb2a0f175c986bb0d911e1b7c3a74"},{url:"archives/page/3/index.html",revision:"75339b3ca372cddd78f3d7ba9ba5fd9a"},{url:"baidu_verify_code-RpYkRXhb8f.html",revision:"faa355733a3de1b446a6c595e672d7f9"},{url:"blog/all-news-spider.html",revision:"8542f324c65ba9b1e83e926dc06a5e2c"},{url:"blog/android-camera2.html",revision:"b9d78e9df74d121e0078edc89d989c24"},{url:"blog/butterfly-beauty-quick-start.html",revision:"9ee21ea8374fa609651bf097be3d0c03"},{url:"blog/client-real-ip-proxy-by-nginx.html",revision:"7e5181e1a7ea7f30e7e310cbd169f879"},{url:"blog/domainname-to-nginx-default-but-ip-to-ours.html",revision:"f34f0122f27b8ee694bf7da9ad1a7489"},{url:"blog/follow-your-heart-by-likaifu.html",revision:"fb3cd224e094fdc5c8f586e6c780d490"},{url:"blog/merge-csv-with-same-columns.html",revision:"2002ad4241155624716f2314f88dd636"},{url:"blog/new-weibo-notify-chrome-extension.html",revision:"ab80b8bdb20b99815d0e0a9e902de68a"},{url:"blog/one-stop-weibo-visualization.html",revision:"97feef335585ee070955311c3984cf1a"},{url:"blog/pandas-groupby-frequency-statistics.html",revision:"97b1f15d06790e7669e8dc63f11ceb2c"},{url:"blog/pandas-stratified-sampling.html",revision:"1cab7d626e413e6add03087ab30f72b0"},{url:"blog/pip-install-success-import-fail.html",revision:"614d09c0d9a29c525aa028b7a062ef9f"},{url:"blog/pyd-pyc-summary.html",revision:"478f2c4a90da8456d32f2837b82b865e"},{url:"blog/qualitative-news-dataset.html",revision:"874cd0e841c2bd376c4b7d905b685738"},{url:"blog/something-about-rain.html",revision:"61e972afa45205d23f7d0c4bd428387c"},{url:"blog/weibo-ads-filter-keyword-blocker.html",revision:"7e1140a8c9edc29d4a291badd0967bcc"},{url:"blog/weibo-comment-robot-analysis.html",revision:"a765eb5a75c7fcdd90ddb479cb6bf1ed"},{url:"blog/weibo-forward-network-visual.html",revision:"cd8aab4e32619c7e78738d65b335becd"},{url:"blog/weibo-super-spider.html",revision:"2cd131cb12b557691131742c95c0b4f7"},{url:"blog/weibo-superstar-relation-network-visual.html",revision:"5525252cc261845287da6d2b08b7c999"},{url:"blog/weibo-user-backup.html",revision:"7ed027b307aad94c94b41dd21835cc12"},{url:"blog/what-i-have-lived-for-by-russell.html",revision:"95f57c173fbc52654684276726f36887"},{url:"blog/why-buyixiao-blog-start.html",revision:"6c6c5228da92664a761cfe4aeb7040c1"},{url:"categories/Android/index.html",revision:"c98ea22f9fa27661f16b9ca32323d85f"},{url:"categories/Butterfly/index.html",revision:"43aff72ae7374ecac2f6d85644c4c6a6"},{url:"categories/Chrome-Extension/index.html",revision:"920b54381b84642242934fd9912b8894"},{url:"categories/index.html",revision:"801550a8adb92d7ee0d1b931ac3563ee"},{url:"categories/nginx/index.html",revision:"30d1c23019e75e53062ae251f1d3b059"},{url:"categories/Python/index.html",revision:"0bad210f0c26dcaca5fa8857a54ac577"},{url:"categories/励志/index.html",revision:"e425a74030e263c51aef729d58a0c8d4"},{url:"categories/可视化/index.html",revision:"a3a71122b8e607a083bbe57267ba125f"},{url:"categories/爬虫/index.html",revision:"7eba121841bc6d91f3646c728c07a816"},{url:"categories/随笔/index.html",revision:"f24cf7bd74639c24b57802472e9ef024"},{url:"comment/index.html",revision:"9de3c50cc160cfddae88970cd38d60eb"},{url:"css/custom.css",revision:"45a31ed0a78e1af3c2e0c7b43c182866"},{url:"css/index.css",revision:"4263eaf3eb832cba97d0a2d30d22437a"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay-min.png",revision:"4f62aa8a6df9224a7f53bafc6cde8e3a"},{url:"img/avatar.png",revision:"c957c73b001aee6a2728f9516d67d745"},{url:"img/favicon.png",revision:"a127918a85c3c6d695fa2e84c0512a09"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index.jpg",revision:"83ece8c3f1c04cce2699c72983db2bdd"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/wechat-min.png",revision:"37911d934ea3bdf74ab3096f27f1006a"},{url:"index.html",revision:"5ce82a2b7ffca8b82ce6d18fe5473309"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"link/index.html",revision:"93f2414d89d9028be5f319f2292b48c0"},{url:"page/2/index.html",revision:"91dead849a8b3287004ff3b06929487a"},{url:"page/3/index.html",revision:"5555c968906f1dd0a6847bb76a947d59"},{url:"tags/android/index.html",revision:"479cbb4cb67d4cdf5ede6091e334f8b2"},{url:"tags/bbcnews/index.html",revision:"13c06230fbb2f8718165d1bcb47c8c7e"},{url:"tags/beauty/index.html",revision:"50a263e0ebb56b1d1cc11bd3ec9fb9e3"},{url:"tags/butterfly/index.html",revision:"f0094a940631fa8cc9e11b69b750f4fe"},{url:"tags/buyixiao/index.html",revision:"f93b7ad5a6c7114fc2462abd58d67214"},{url:"tags/camera2/index.html",revision:"314ce63d271c6131dbeffa4df9b4994f"},{url:"tags/chrome-扩展/index.html",revision:"c0664674659cd15b026bbc0f5ed32838"},{url:"tags/csv-合并/index.html",revision:"9690b5744908ca4c2eed9c2456fbca1a"},{url:"tags/default-server/index.html",revision:"a5b8a6c1e2f91783de0372a74ff6b094"},{url:"tags/echarts/index.html",revision:"09a5254feb5f0a95e955c6b7120d93ee"},{url:"tags/flask/index.html",revision:"8140446c73c95d4b1bb13851963ce518"},{url:"tags/frequency/index.html",revision:"cc1b26681c497a823060e1d9de7a456a"},{url:"tags/groupby/index.html",revision:"ce694f8f7b3392c99eb3d047ec3838ee"},{url:"tags/hexo/index.html",revision:"26e2f00be780b4aa82af593115fc428d"},{url:"tags/index.html",revision:"321ecd158144a539587cfe23732d6da3"},{url:"tags/inspurer/index.html",revision:"8ecb1684389a8fd6d28ec339f21dd152"},{url:"tags/ip/index.html",revision:"2d12a3fc377704ea94fb4173b9474717"},{url:"tags/nginx/index.html",revision:"afb37ca0b3ad6deb431f3cda4ba172fa"},{url:"tags/nytimes/index.html",revision:"b782af8aebed0ddc11100ee6d5849549"},{url:"tags/pandas/index.html",revision:"0c84400476191c38906dd08660e98a5e"},{url:"tags/pengpai/index.html",revision:"48b6f556538ea238afbe8cb79821788a"},{url:"tags/pip/index.html",revision:"6380b7b8b7e5098b3b8c1407f8f1918f"},{url:"tags/pyc/index.html",revision:"5f3cbf5e7081cc65523afee426e4b0e4"},{url:"tags/pycharm/index.html",revision:"3a5200261161cd23335e5c6ea44a1ab5"},{url:"tags/pyd/index.html",revision:"d7ad92a66bd6345de5b93d7abea271ba"},{url:"tags/python/index.html",revision:"83ef4535ea092a8d74c487bca54c78f8"},{url:"tags/requests/index.html",revision:"1c0b7ec89500c044e71509bad67002f6"},{url:"tags/sina/index.html",revision:"06cd80a7eb3d21b050e068173d64de45"},{url:"tags/tencent/index.html",revision:"f661cbf5f2dff5a6f4ce201542c452fd"},{url:"tags/thetimes/index.html",revision:"1fbbea8b93fa8e5f6d171013090aaee8"},{url:"tags/weibosuperspider/index.html",revision:"921b577d8c5e1b9fb4470a5927778ce5"},{url:"tags/关系网络/index.html",revision:"1b913bcba7f4051d8734f5fca4dce690"},{url:"tags/分层抽样/index.html",revision:"b1563313dcafd42ba482151cb0c2ddeb"},{url:"tags/去广告/index.html",revision:"f204fb759dfe1579ba339b5adf4e3d8e"},{url:"tags/可视化/index.html",revision:"36000023f18e67422117bfe9eeead592"},{url:"tags/域名解析/index.html",revision:"b126de842570e315d5e3f8c58069f3ea"},{url:"tags/微博/index.html",revision:"958e6ba915ec722ae17c64a606a62fad"},{url:"tags/微博关系网络/index.html",revision:"55bbfc1027982b0f89b2c785b00d38cc"},{url:"tags/微博备份/index.html",revision:"ff83c866f3fdd21de98b03774f1cbba2"},{url:"tags/微博点赞/index.html",revision:"e8917aa36062067999dde56d79a6a9bf"},{url:"tags/微博用户爬虫/index.html",revision:"07975f382ea4cbf9280737058d3cdd2b"},{url:"tags/微博签到/index.html",revision:"02855ab88161acd4965c2c8d09aaf779"},{url:"tags/微博评论/index.html",revision:"1387b5a45e33dce7fb36763a3116bea9"},{url:"tags/微博转发/index.html",revision:"c9746a6f86e4cdcf600a82bd88f0101d"},{url:"tags/换源/index.html",revision:"9bd5c89d1475cdbd55a2200d9d933f95"},{url:"tags/数据集/index.html",revision:"264199089ff9cf46d1aa61e47ec4d0bb"},{url:"tags/新闻/index.html",revision:"867cdb250a3aa29fd44dc664d47c0f84"},{url:"tags/李开复/index.html",revision:"2208e233569e8cc9650c2e0c5c3f9e2f"},{url:"tags/水军/index.html",revision:"31cdb4299bc0d3de4de7d50bbb4bf755"},{url:"tags/爬虫/index.html",revision:"dcadae74d406e9672170a886f1aa036a"},{url:"tags/用户微博/index.html",revision:"65d0d57d056a7d13fc8808f00a10f515"},{url:"tags/罗素/index.html",revision:"cbdb471893f76c05e925ffa5e9beb9af"},{url:"tags/营销号/index.html",revision:"71e2929e869955fe4dc6b57ca6dfe4cb"},{url:"tags/连拍/index.html",revision:"7db5acba6de699f8511d22ab8ba64704"},{url:"tags/雨/index.html",revision:"63025b57f61f8d31f5280f5e84bc63b4"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
