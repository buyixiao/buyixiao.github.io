if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let b={};const c=e=>a(e,l),s={module:{uri:l},exports:b,require:c};i[l]=Promise.all(d.map((e=>s[e]||c(e)))).then((e=>(r(...e),b)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"f506239e489d282b470935f2c17d3c04"},{url:"about/index.html",revision:"9012ba099da72377ed56ee4fec18e081"},{url:"archives/2022/01/index.html",revision:"3c9368ee063413ee625bcac31994c42f"},{url:"archives/2022/01/page/2/index.html",revision:"e59db90e74e10d875afdbbbd0f2f412b"},{url:"archives/2022/02/index.html",revision:"bb18cfeb48542ce2efb7bedf1b14131e"},{url:"archives/2022/03/index.html",revision:"624d9067b51767471b40f4a8c24120c1"},{url:"archives/2022/04/index.html",revision:"f46dd066eb5a657d6fde9e59f41dbb6c"},{url:"archives/2022/index.html",revision:"bb7776f9db4570116621c31d049a1e3c"},{url:"archives/2022/page/2/index.html",revision:"155d013f63124867bb2d4b80e69d3655"},{url:"archives/index.html",revision:"80444623065d71529455327129ac9787"},{url:"archives/page/2/index.html",revision:"3006e225ff79aec1f6eacc1d4998c293"},{url:"baidu_verify_code-RpYkRXhb8f.html",revision:"faa355733a3de1b446a6c595e672d7f9"},{url:"blog/all-news-spider.html",revision:"956f1cd2652912bcf0ab8e24f5d0265a"},{url:"blog/butterfly-beauty-quick-start.html",revision:"63989852144db17b2b416541850ad8bf"},{url:"blog/client-real-ip-proxy-by-nginx.html",revision:"b7317612bbc252f7e607b99d94a639f3"},{url:"blog/domainname-to-nginx-default-but-ip-to-ours.html",revision:"066a1246dc595ba13b1718163ab1fbae"},{url:"blog/follow-your-heart-by-likaifu.html",revision:"c8c6ce24fa14c3546341729977a76b54"},{url:"blog/merge-csv-with-same-columns.html",revision:"fb339c6b736f4b8554993903da9fb607"},{url:"blog/new-weibo-notify-chrome-extension.html",revision:"a4c11acf73d65803ea6758eef15cacc6"},{url:"blog/one-stop-weibo-visualization.html",revision:"7926d2044202b77319f52bd31d9247e7"},{url:"blog/pandas-stratified-sampling.html",revision:"331a45700c682cae11732194b6c73b10"},{url:"blog/pip-install-success-import-fail.html",revision:"7856848d6ab8317baa45225a0b76464c"},{url:"blog/pyd-pyc-summary.html",revision:"272b565f94cffcd7f828ad3a52f72266"},{url:"blog/weibo-ads-filter-keyword-blocker.html",revision:"aba7b3662dbcafa88d97440003264841"},{url:"blog/weibo-comment-robot-analysis.html",revision:"555147ab4d69c9ebd0f988e16743720a"},{url:"blog/weibo-forward-network-visual.html",revision:"894a48b4308692c9a22a7a95f6d19d6a"},{url:"blog/weibo-super-spider.html",revision:"80cca81a7cc078e6de9506a182e0e551"},{url:"blog/weibo-superstar-relation-network-visual.html",revision:"7749ff9da4ef197b5656d4ea3ccb3f38"},{url:"blog/weibo-user-backup.html",revision:"0c0a35e59b825215a26d7eeb40170f50"},{url:"blog/what-i-have-lived-for-by-russell.html",revision:"7bd8d551ba701eb6ca68a554d0c97a64"},{url:"blog/why-buyixiao-blog-start.html",revision:"9144bbccfd78fc350d54d467e7c60201"},{url:"categories/Butterfly/index.html",revision:"9578f930d3dddb5a4378b0b6ace0db8c"},{url:"categories/Chrome-Extension/index.html",revision:"59a3975001977fed6e4b1a22f5c5d828"},{url:"categories/index.html",revision:"41fbcd863b730471324b2d60ff8aab12"},{url:"categories/nginx/index.html",revision:"65dad5a8759ddb39e714d524237ead25"},{url:"categories/Python/index.html",revision:"d039783584a525d630d0ef08833f56a2"},{url:"categories/励志/index.html",revision:"6f4b7946c5ba5c562a72b0adea1b7fbb"},{url:"categories/可视化/index.html",revision:"c640d9d33e809f6d392678265f1f7448"},{url:"categories/爬虫/index.html",revision:"bc0c1ad44b9c453321f08a71b6c81f3b"},{url:"categories/随笔/index.html",revision:"d68205fa95d639daf0dd295ba17632e9"},{url:"comment/index.html",revision:"14b52b948bf0e72153fad4413ce1ce0d"},{url:"css/custom.css",revision:"45a31ed0a78e1af3c2e0c7b43c182866"},{url:"css/index.css",revision:"4263eaf3eb832cba97d0a2d30d22437a"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay-min.png",revision:"4f62aa8a6df9224a7f53bafc6cde8e3a"},{url:"img/avatar.png",revision:"c957c73b001aee6a2728f9516d67d745"},{url:"img/favicon.png",revision:"a127918a85c3c6d695fa2e84c0512a09"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index.jpg",revision:"83ece8c3f1c04cce2699c72983db2bdd"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/wechat-min.png",revision:"37911d934ea3bdf74ab3096f27f1006a"},{url:"index.html",revision:"1f90a65e51e865ef2aa00f53c7ca492e"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"link/index.html",revision:"3622659af5ea16fb75f8f7f259d63133"},{url:"page/2/index.html",revision:"5263a0bed038e43132e1260420a82e21"},{url:"tags/bbcnews/index.html",revision:"bdacb54d12708eed46f72dac31b38429"},{url:"tags/beauty/index.html",revision:"b546017554fd26de6570456e891d5126"},{url:"tags/butterfly/index.html",revision:"804853abf78431230abad60e3e1d77bf"},{url:"tags/buyixiao/index.html",revision:"68ceb0e3145154b4795a3c025f85d8b0"},{url:"tags/chrome-扩展/index.html",revision:"10457321721f4ecf774fd55fd95459fa"},{url:"tags/csv-合并/index.html",revision:"6ea1dc4d7b070f2b78bcae3d5defc142"},{url:"tags/default-server/index.html",revision:"d84e8a909a0f13bb3a1a9a917e976131"},{url:"tags/echarts/index.html",revision:"2102e129e39556788323e3d88770a2ea"},{url:"tags/flask/index.html",revision:"166465bf538b0f2e3fd59cc39a181413"},{url:"tags/hexo/index.html",revision:"dc7f0805829deebb66abba3dd80ea2ca"},{url:"tags/index.html",revision:"c01fad7b4c286e3b28d010b6d0b293c5"},{url:"tags/inspurer/index.html",revision:"6c4b5d60105bcbfa75d6c67b6cc67638"},{url:"tags/ip/index.html",revision:"07ab6d6339298ebc31ce97de1917a987"},{url:"tags/nginx/index.html",revision:"0fd8b2c1f94624b0afbeba8c2d2365ac"},{url:"tags/nytimes/index.html",revision:"c3fb512ae9b5397509a45a76a0387601"},{url:"tags/pandas/index.html",revision:"cb662139412d34c808d484ce6d26cfe8"},{url:"tags/pengpai/index.html",revision:"4ae4e92769d3ecfc2c2b650b014490de"},{url:"tags/pip/index.html",revision:"9429afe41ef10d3b2252aa64de6c0b07"},{url:"tags/pyc/index.html",revision:"a3a0a16b1c6fe8a97d9c8b9b87003f55"},{url:"tags/pycharm/index.html",revision:"ab039d937d388eeee8b7834672b6861b"},{url:"tags/pyd/index.html",revision:"ab8316ef3f687ad0b66ec19dc80a703a"},{url:"tags/python/index.html",revision:"27cc1162aedf2e1e9b6a0e2fca37da2e"},{url:"tags/requests/index.html",revision:"ee3e3b2dd7933414b88b5eac296ce28e"},{url:"tags/sina/index.html",revision:"9a31ce3053b2b1ab5cf0c2a34a0f1044"},{url:"tags/tencent/index.html",revision:"2525d03290e6d98fc61c87464ac6793c"},{url:"tags/thetimes/index.html",revision:"dd9799ac49512ec1a24c7d6c88f2c531"},{url:"tags/weibosuperspider/index.html",revision:"c2d193a45e9238556928109bd9db9be6"},{url:"tags/关系网络/index.html",revision:"1a4afc9499cc27bcec6d44b3dd55d867"},{url:"tags/分层抽样/index.html",revision:"dfb7d582d12e72389790ac5340ece0c2"},{url:"tags/去广告/index.html",revision:"782b357e37160645563543f7061ce26b"},{url:"tags/可视化/index.html",revision:"d30a31fb15ab515132d481f5a853c19e"},{url:"tags/域名解析/index.html",revision:"69857f3b75dab7a966b5e08844e39fd1"},{url:"tags/微博/index.html",revision:"f0bb1e28d9ba00a351f5e99325962cea"},{url:"tags/微博关系网络/index.html",revision:"b22a467b9e8ff399f75350a9efcd69d0"},{url:"tags/微博备份/index.html",revision:"eaf39fff5d4ca8d8e34d9a04cd52e89d"},{url:"tags/微博点赞/index.html",revision:"9c61741680e2a280dd1644b34811d675"},{url:"tags/微博用户爬虫/index.html",revision:"288c98084bbaf69b8c93949beab6e5fb"},{url:"tags/微博签到/index.html",revision:"b88154264ac3792b4ae29af93aa6c068"},{url:"tags/微博评论/index.html",revision:"4909542089018645da286dad3596ed66"},{url:"tags/微博转发/index.html",revision:"dcec0974f1e40af4e3e3f782282c9f53"},{url:"tags/换源/index.html",revision:"fe36ca101492f55d763183ee443055ec"},{url:"tags/李开复/index.html",revision:"4ac0ece02eb14e321880a25d65381390"},{url:"tags/水军/index.html",revision:"33b653d8ef2f89eca10c2cefb39e3912"},{url:"tags/爬虫/index.html",revision:"b195430ba2dcb5fe33076441f21efd0c"},{url:"tags/用户微博/index.html",revision:"1217bebcb1e0d9e635cdd485a8423623"},{url:"tags/罗素/index.html",revision:"d0bb78f551f7d250890c9537ee7081ae"},{url:"tags/营销号/index.html",revision:"2081d7a482d7f4cc8349eb69dbdecf15"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
