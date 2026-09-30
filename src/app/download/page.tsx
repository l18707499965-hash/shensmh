import type { Metadata } from 'next';
import Image from 'next/image';
import { FileWarning, Info, ShieldCheck } from 'lucide-react';
import { DownloadButton } from '@/components/download-button';
import { Reveal } from '@/components/reveal';
import { JsonLd } from '@/components/json-ld';
import { DOWNLOAD_STEPS } from '@/lib/content';
import { SITE, getSiteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: '下载安装_安卓版APK官方下载地址_安装教程',
  description:
    '绅士漫画安卓版官方下载页面，点击获取绅士漫画 APK 最新安装包下载地址，附安卓手机详细安装教程与未知来源应用设置说明，下载安装安全放心。',
  keywords: [
    '绅士漫画下载',
    '绅士漫画apk',
    '绅士漫画安卓版下载',
    '绅士漫画安装教程',
    '绅士漫画下载地址',
  ],
  alternates: { canonical: '/download' },
};

export default function DownloadPage() {
  const siteUrl = getSiteUrl();

  const softwareLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE.brand,
    operatingSystem: 'Android',
    applicationCategory: 'EntertainmentApplication',
    url: `${siteUrl}/download`,
    downloadUrl: SITE.downloadUrl,
    softwareType: 'MobileApplication',
    fileFormat: 'APK',
    inLanguage: 'zh-CN',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首页', item: siteUrl },
      {
        '@type': 'ListItem',
        position: 2,
        name: '下载安装',
        item: `${siteUrl}/download`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={softwareLd} />
      <JsonLd data={breadcrumbLd} />

      <section className="relative overflow-hidden border-b border-border/60 bg-card/40">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 md:py-20">
          <nav aria-label="面包屑" className="text-sm text-muted-foreground">
            首页 / <span className="text-foreground">下载安装</span>
          </nav>
          <Image
            src="/logo.svg"
            alt="绅士漫画 Logo"
            width={88}
            height={88}
            className="mx-auto mt-8 rounded-full shadow-lg shadow-primary/20"
            priority
          />
          <h1 className="mt-6 font-display text-4xl text-foreground sm:text-5xl">
            下载绅士漫画安卓版
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted-foreground">
            点击下方按钮即可获取官方下载地址，获取绅士漫画 APK 安装包，安卓手机与平板均可安装。
          </p>
          <div className="mt-9 flex justify-center">
            <DownloadButton />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">
            四步完成安装
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            按照以下步骤操作，几分钟即可在手机上使用绅士漫画。
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DOWNLOAD_STEPS.map((item, index) => (
            <li key={item.step}>
              <Reveal delay={index * 70}>
                <article className="h-full rounded-2xl border border-border/70 bg-card p-6">
                  <span className="font-display text-3xl text-primary/30">
                    {item.step}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {item.desc}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-card/40 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
              <Info className="h-6 w-6 text-primary" aria-hidden="true" />
              安装注意事项
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                '安装前请确认手机留有足够的存储空间，并连接稳定的网络下载安装包。',
                '安卓系统出于安全考虑，默认禁止安装非应用商店来源的应用，按提示开启对应权限即可，这是安装 APK 的正常步骤。',
                '如系统弹出风险提示，请核对安装包来源为绅士漫画官方下载地址后继续安装。',
                '安装完成后，可在系统设置中重新关闭"安装未知应用"权限，不影响应用正常使用。',
              ].map((text) => (
                <li
                  key={text}
                  className="flex gap-3 rounded-xl border border-border/70 bg-background p-4 text-sm leading-7 text-muted-foreground"
                >
                  <ShieldCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  {text}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-12 flex items-center gap-2 text-2xl font-bold text-foreground">
              <FileWarning className="h-6 w-6 text-gold" aria-hidden="true" />
              下载失败或无法安装？
            </h2>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
              <li>切换 Wi-Fi 或手机网络后，重新点击按钮下载安装包。</li>
              <li>检查手机是否开启了 VPN、代理或安全软件拦截，必要时临时关闭后重试。</li>
              <li>删除未下载完整的安装包，重新从官方地址下载后再次安装。</li>
              <li>更多问题可前往「常见问题」页面查找解决方案。</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl bg-primary px-6 py-14 text-center shadow-xl shadow-primary/25">
            <h2 className="font-display text-3xl text-primary-foreground">
              准备好开始看漫画了吗
            </h2>
            <div className="mt-8 flex justify-center">
              <DownloadButton />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
