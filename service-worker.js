if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let b={};const l=e=>a(e,c),s={module:{uri:c},exports:b,require:l};i[c]=Promise.all(d.map((e=>s[e]||l(e)))).then((e=>(r(...e),b)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"1/index.html",revision:"5ada973b88d4bee25f35a3370fba403c"},{url:"404.html",revision:"be3c5aef10d5677598df4d22c4fcf3e6"},{url:"about/index.html",revision:"05cac6f691b76dc92425bdbead8c0eba"},{url:"archives/2022/01/index.html",revision:"1b066949a1b7af9b118ab7cd1031b1af"},{url:"archives/2022/01/page/2/index.html",revision:"4f60d098fa17f95c31bf6719a860816b"},{url:"archives/2022/02/index.html",revision:"741fa8abcb0965de1efe97e3c98a1d8b"},{url:"archives/2022/03/index.html",revision:"a02e6009face413a2a1bb9db34b66971"},{url:"archives/2022/04/index.html",revision:"ce8596d1928ec14deebeb61fdbf0e26d"},{url:"archives/2022/05/index.html",revision:"ba9db36bbb11c27ef34900485f4c6c9f"},{url:"archives/2022/06/index.html",revision:"850cd0ab755827a6a9718921270d44a1"},{url:"archives/2022/index.html",revision:"269adf4acba95e1ae464034d5f95cccf"},{url:"archives/2022/page/2/index.html",revision:"cbe648b6d12cb127a54523f95f4b5b12"},{url:"archives/2022/page/3/index.html",revision:"85464246fc2670a62f26ca3aed4ed68c"},{url:"archives/2023/01/index.html",revision:"cb9b427a5a3ccd3874635adfe8a3dd66"},{url:"archives/2023/02/index.html",revision:"1d18492c42768ea78f2c594d5aa42efc"},{url:"archives/2023/03/index.html",revision:"7891ddacea7043f0362e57ff7ff7f3bd"},{url:"archives/2023/04/index.html",revision:"b0eab7c9a986a1db0cb3cbb76b546b45"},{url:"archives/2023/index.html",revision:"d219fc8f719f2a1f546679271aa295d3"},{url:"archives/index.html",revision:"6353e4c52912c3113fe30fb13f2a7df7"},{url:"archives/page/2/index.html",revision:"1100c0884fdcb7ccd91266a46ffdd961"},{url:"archives/page/3/index.html",revision:"c2dddd9829bfe5d1da29ae17aed2277c"},{url:"archives/page/4/index.html",revision:"3e62a390694cf4cee28902e4fb0601b7"},{url:"baidu_verify_code-RpYkRXhb8f.html",revision:"faa355733a3de1b446a6c595e672d7f9"},{url:"blog/all-news-spider.html",revision:"536451d26c07fc0d96e7e2942ee526be"},{url:"blog/android-camera2.html",revision:"f8866ab93348c03c6d09b82b283c004d"},{url:"blog/butterfly-beauty-quick-start.html",revision:"0b8c61997b0569d0604a5e1983694a19"},{url:"blog/client-real-ip-proxy-by-nginx.html",revision:"88dfbb2bd56cf0d05f0565a0a0199bd6"},{url:"blog/crontab-python.html",revision:"749fd2184508bf2ac7410a28d085874a"},{url:"blog/domainname-to-nginx-default-but-ip-to-ours.html",revision:"ee34e2d6f2bebb0d50c5a8b7c9d11c06"},{url:"blog/dynamic-programming-notes.html",revision:"5164af1d2d8eed788709a08d91f5558a"},{url:"blog/follow-your-heart-by-likaifu.html",revision:"f4f6e9be941fc276cc1e116bd542113b"},{url:"blog/historical-figure-visual.html",revision:"79e2f38a2fdc6cbea7527a6e7bc8b102"},{url:"blog/merge-csv-with-same-columns.html",revision:"94e9c71ccf8acba15c867aadd00e3c7a"},{url:"blog/new-weibo-notify-chrome-extension.html",revision:"aa58e2c32a55c0417592b3d6726abcb3"},{url:"blog/one-stop-weibo-visualization.html",revision:"932325fe40b0b423ec523663ffbe5feb"},{url:"blog/pandas-groupby-filter.html",revision:"601d057586d928e71038e7564b735327"},{url:"blog/pandas-groupby-frequency-statistics.html",revision:"02dc47bd97befa57228869b116bb37c2"},{url:"blog/pandas-na-tricks.html",revision:"2fa6123537aab9d7eeb916595c5b9c6e"},{url:"blog/pandas-stratified-sampling.html",revision:"9fc7efcdcb8663b3bbac59da836a7e95"},{url:"blog/pandas-value-counts.html",revision:"fae7ea66d74222d192fce849dcbaea8a"},{url:"blog/pip-install-success-import-fail.html",revision:"a2ac3cd57c6858c4532cae2f15c5c8a7"},{url:"blog/pyd-pyc-summary.html",revision:"175b946f3c7e608c499d4a9813646a29"},{url:"blog/qualitative-news-dataset.html",revision:"a2d51d6e9468c68fe0e50b64dbc1989a"},{url:"blog/something-about-rain.html",revision:"87b85cf1e30302b5402b70f9bfe1d13c"},{url:"blog/split-csv-with-same-columns.html",revision:"f8b0aea1a801633eff3d486ae9056117"},{url:"blog/weibo-ads-filter-keyword-blocker.html",revision:"ab28297b3538fd414877c69330be1016"},{url:"blog/weibo-comment-robot-analysis.html",revision:"7bd3be9799e0f292bbd4df562499de2e"},{url:"blog/weibo-forward-network-visual.html",revision:"316d8a701d4f5cc7ca5cc36ee2a87b72"},{url:"blog/weibo-super-spider.html",revision:"8f59d4fbaa922b8f455ff59339cdde10"},{url:"blog/weibo-superstar-relation-network-visual.html",revision:"e08eef03c21388a1fe6e4d8fd6d7b781"},{url:"blog/weibo-user-backup.html",revision:"ba33c322f9c13accfc53a2139bc66d30"},{url:"blog/what-i-have-lived-for-by-russell.html",revision:"8d722902c2af47f7771820f715f9a283"},{url:"blog/why-buyixiao-blog-start.html",revision:"595648dd2012537bf9fa0c817ba1b9a4"},{url:"blog/youth-by-samuel-ullman.html",revision:"168782bdbc9eb5191883cdfc3e4b1b42"},{url:"categories/Android/index.html",revision:"556ced17eb404520c2e4e096b54d61af"},{url:"categories/Butterfly/index.html",revision:"7b379f53a142174f27bd3d6c697ca7eb"},{url:"categories/Chrome-Extension/index.html",revision:"1857506c325eb0ea1aa9b5a341eff660"},{url:"categories/index.html",revision:"79333ecbf4f851cc3b9129ef5794f7a7"},{url:"categories/Linux/index.html",revision:"e2b131eaa783058038609a0d677b68e9"},{url:"categories/nginx/index.html",revision:"8c9964f13955626153f586a62c4d894a"},{url:"categories/Python/index.html",revision:"171a8b29b31eb9f5fadfa9d9730cc069"},{url:"categories/励志/index.html",revision:"44141ed88985a17d27a1d5f6548b218d"},{url:"categories/可视化/index.html",revision:"152621d6db455a59278d26ae4f63a5c3"},{url:"categories/爬虫/index.html",revision:"bafb0ec34e131be7f85cd3789478f4f1"},{url:"categories/算法笔记/index.html",revision:"2819e06e8922fcda49c7524b0656257d"},{url:"categories/随笔/index.html",revision:"8db7ad51b5eee1420396ba422b7aeead"},{url:"comment/index.html",revision:"34553e4497ef4ffa465660458a9e2658"},{url:"css/custom.css",revision:"45a31ed0a78e1af3c2e0c7b43c182866"},{url:"css/index.css",revision:"4263eaf3eb832cba97d0a2d30d22437a"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay-min.png",revision:"4f62aa8a6df9224a7f53bafc6cde8e3a"},{url:"img/avatar.png",revision:"c957c73b001aee6a2728f9516d67d745"},{url:"img/favicon.png",revision:"a127918a85c3c6d695fa2e84c0512a09"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index.jpg",revision:"83ece8c3f1c04cce2699c72983db2bdd"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/wechat-min.png",revision:"37911d934ea3bdf74ab3096f27f1006a"},{url:"index.html",revision:"9055c2f1d8f5772b347a834bc74c68fe"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"link/index.html",revision:"7f996a4300f3d72c478c1bae48f463b4"},{url:"page/2/index.html",revision:"04d91f7c198b865d48eb4bca30128463"},{url:"page/3/index.html",revision:"02f740c7a3fc0da198b7990646d5b62f"},{url:"page/4/index.html",revision:"2318c6a3fa451e3a7af02cce2f70b26a"},{url:"tags/android/index.html",revision:"17bf236e2343c1853d9264475fba1d7c"},{url:"tags/bbcnews/index.html",revision:"514ae464f7c6d392cbe8b20643a35015"},{url:"tags/beauty/index.html",revision:"cf5e1fa400801a707c3e1a253a679725"},{url:"tags/butterfly/index.html",revision:"984a097221be5d20c6711fdd6ac0af61"},{url:"tags/buyixiao/index.html",revision:"5ee973d807581e6b6bd1a1547172280b"},{url:"tags/camera2/index.html",revision:"15997f07c52c3d02484767059d6db48a"},{url:"tags/CBDB/index.html",revision:"21160de2db5d90b7dabc47b3b2ce6ab7"},{url:"tags/chrome-扩展/index.html",revision:"5df6d6f9dc6a02cd20bca1dc0df94de4"},{url:"tags/crontab/index.html",revision:"018fb1c16ae356900f4a8bf6e6f7e262"},{url:"tags/csv-合并/index.html",revision:"5b31a9027d34365fba87746b0a4fbf82"},{url:"tags/csv-拆分/index.html",revision:"80d5c78d575c3dc180cce2fdcebd8fe3"},{url:"tags/default-server/index.html",revision:"be6f7e894db31fb6c61dea2c66526860"},{url:"tags/echarts/index.html",revision:"bfd8fe339f3dffaf73e2dd7105dfc709"},{url:"tags/filter/index.html",revision:"c3ba66cf33c34c88480994dc9adab4c1"},{url:"tags/flask/index.html",revision:"19860027fb726a68cdfb5a5798d7bb65"},{url:"tags/frequency/index.html",revision:"84575139539afcf9104ad9bfb038940a"},{url:"tags/groupby/index.html",revision:"50ba5e4f501706b9266482e239015ffe"},{url:"tags/hexo/index.html",revision:"09b72210f463a258e03375b17962823c"},{url:"tags/index.html",revision:"4cf834c000b4a489042fa054e1f46700"},{url:"tags/inspurer/index.html",revision:"6447df930fed9e073cff6f1e10db5dc8"},{url:"tags/interpolate/index.html",revision:"2b41f9f98bf23b3189b5b2a7e3e2229b"},{url:"tags/ip/index.html",revision:"8bb5c72c312057e58420b4939fbdeca7"},{url:"tags/NA/index.html",revision:"7fedca134dc71d8b82faa30a5a2d60cc"},{url:"tags/nginx/index.html",revision:"ff155be72efa3bde7b0681f9ef27cd2d"},{url:"tags/nytimes/index.html",revision:"8b13a8eac21b12041612af42990969a8"},{url:"tags/pandas/index.html",revision:"cd3a651604699ce4c692752425927451"},{url:"tags/pengpai/index.html",revision:"3827dfdd6df541042acd7a249aa9e17e"},{url:"tags/pip/index.html",revision:"02972b921df8d91dbf814bbfda8886fa"},{url:"tags/pyc/index.html",revision:"57f3ec56babceb7257b80e58b0f4b386"},{url:"tags/pycharm/index.html",revision:"d20ba21b96f2c9ecd9fd47970d6b8e32"},{url:"tags/pyd/index.html",revision:"ae13af90f9914bdcdf3da7c899ba0bb1"},{url:"tags/python/index.html",revision:"6cd4dc9b82463b2f3366f8e3e95675b9"},{url:"tags/requests/index.html",revision:"0ef9fe360c2dddc97bed0ccb90c36a4c"},{url:"tags/sina/index.html",revision:"722859e04d340937fcf27b9b3cff1a38"},{url:"tags/tencent/index.html",revision:"58466ed062ab81ae205233d522ccf5c9"},{url:"tags/thetimes/index.html",revision:"d321cb8d7bd00afce0b8e5bceced1f06"},{url:"tags/value-counts/index.html",revision:"98d125cb31de98415318f08d1b97fb84"},{url:"tags/weibosuperspider/index.html",revision:"7c3850520e9ee88c27e61efa48f97a4f"},{url:"tags/关系网络/index.html",revision:"42e979fb9eb35fbc39f24f5881927a22"},{url:"tags/分层抽样/index.html",revision:"27d90c21d7131130751a823e78a6f90f"},{url:"tags/动态规划/index.html",revision:"40d0e7fb22b1986788e6e69be3262416"},{url:"tags/历史人物/index.html",revision:"01a0feae12baa64ae939e890f0ac3fda"},{url:"tags/去广告/index.html",revision:"ea7f3b0132db61bf8a6d3a9de32266aa"},{url:"tags/可视化/index.html",revision:"eb1854d0c18d99e64a226b85ed25c550"},{url:"tags/域名解析/index.html",revision:"e3e753a1c5fade0410e672de739949f1"},{url:"tags/微博/index.html",revision:"dd38a1b356702cb81448eef159470a89"},{url:"tags/微博关系网络/index.html",revision:"0ea2ed1308d613bfe51b972e026c7832"},{url:"tags/微博备份/index.html",revision:"02e9ca5a182b5519510ae9381edc9776"},{url:"tags/微博点赞/index.html",revision:"fbfdf196d614d69e9ce511a11418dea6"},{url:"tags/微博用户爬虫/index.html",revision:"2f5e67e98fdb5ec49bb93fd2c9e685fa"},{url:"tags/微博签到/index.html",revision:"cf8a8374bb462fe748d65c055a15f1f2"},{url:"tags/微博评论/index.html",revision:"8128baf884edc837c27a33bbfde66e52"},{url:"tags/微博转发/index.html",revision:"1fc409054f8ec7eb710ec49bc628015a"},{url:"tags/换源/index.html",revision:"5a49ffe99d0fb4a63b29e7d20d0fd7eb"},{url:"tags/数据集/index.html",revision:"cbf36b95d677fedfead6a5b83155d98a"},{url:"tags/新闻/index.html",revision:"421d0cecdd34cf2e19a5410aa388a5c3"},{url:"tags/李开复/index.html",revision:"2190b3dfd4594702ead9d4c4e3198da2"},{url:"tags/水军/index.html",revision:"9d1c85187b20f81c7bdd3586855ece63"},{url:"tags/爬虫/index.html",revision:"40967ca8fed7b87d3b6500ce49506a7b"},{url:"tags/生平足迹/index.html",revision:"e31fdfa4afd077b1f27727c0b9b9c47b"},{url:"tags/用户微博/index.html",revision:"c51ca92b55a7bd29893672c1e1abbc9f"},{url:"tags/算法/index.html",revision:"9b2c556eb110d5945f48e92f2141190c"},{url:"tags/罗素/index.html",revision:"a715e8f487d0c5860264a4f883f9f029"},{url:"tags/营销号/index.html",revision:"ac151355d69c11ca5a9d02a900f5b65e"},{url:"tags/连拍/index.html",revision:"012a5bf87a0537073f633473e168dc93"},{url:"tags/雨/index.html",revision:"067bc61d02a0614786664e560de97127"},{url:"tags/青春/index.html",revision:"d15801a989699107761cb0ac8f32e83d"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
