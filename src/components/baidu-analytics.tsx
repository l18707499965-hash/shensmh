import Script from 'next/script';
import { SITE } from '@/lib/site';

/**
 * 百度统计代码。hm.js 仅在生产环境加载，避免开发期污染统计数据。
 */
export function BaiduAnalytics() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <Script id="baidu-tongji" strategy="afterInteractive">
      {`var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?${SITE.baiduTongjiId}";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();`}
    </Script>
  );
}
