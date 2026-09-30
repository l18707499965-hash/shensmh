import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { BaiduAnalytics } from '@/components/baidu-analytics';
import { JsonLd } from '@/components/json-ld';
import { SITE, getSiteUrl } from '@/lib/site';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      '绅士漫画_安卓版漫画App官方下载_海量高清漫画免费在线阅读',
    template: `绅士漫画_%s`,
  },
  description:
    '绅士漫画官方网站，提供绅士漫画安卓版App最新安装包下载。绅士漫画汇聚海量高清正版漫画、韩漫与条漫资源，每日更新连载，支持手机在线阅读与离线缓存，追漫更快更清晰。',
  keywords: [
    '绅士漫画',
    '绅士漫画下载',
    '绅士漫画app',
    '绅士漫画安卓版',
    '绅士漫画apk',
    '绅士漫画官网',
    '漫画app',
    '免费漫画',
    '高清漫画',
    '韩漫',
    '在线漫画',
    '漫画阅读器',
    '条漫',
    '离线漫画',
    '手机看漫画',
  ],
  applicationName: SITE.brand,
  authors: [{ name: SITE.brand }],
  generator: 'Next.js',
  category: '娱乐',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: ['/icon.svg'],
    apple: [{ url: '/logo.svg', type: 'image/svg+xml' }],
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '绅士漫画_安卓版漫画App官方下载_海量高清漫画免费在线阅读',
    description:
      '绅士漫画安卓版App官方下载：海量高清漫画、韩漫、条漫每日更新，在线阅读与离线缓存，追漫随时随地。',
    url: siteUrl,
    siteName: SITE.brand,
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: '绅士漫画 - 海量高清漫画随身畅读',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '绅士漫画_安卓版漫画App官方下载',
    description:
      '绅士漫画安卓版App官方下载：海量高清漫画每日更新，在线阅读与离线缓存。',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.brand,
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description:
      '绅士漫画是一款安卓漫画阅读App，提供海量高清漫画在线阅读与离线缓存。',
  };

  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.brand,
    url: siteUrl,
    inLanguage: 'zh-CN',
    description: '绅士漫画官方网站 - 安卓版漫画App下载',
  };

  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          跳转到主要内容
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <BaiduAnalytics />
        <JsonLd data={organizationLd} />
        <JsonLd data={websiteLd} />
      </body>
    </html>
  );
}
