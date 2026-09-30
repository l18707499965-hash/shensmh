import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, ChevronDown } from 'lucide-react';
import { DownloadButton } from '@/components/download-button';
import { PhoneMock } from '@/components/phone-mock';
import { Reveal } from '@/components/reveal';
import { JsonLd } from '@/components/json-ld';
import { FAQ_ITEMS, FEATURES } from '@/lib/content';
import { SITE, getSiteUrl } from '@/lib/site';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const HOME_STATS = [
  { value: '海量', label: '漫画书库' },
  { value: '每日', label: '同步更新' },
  { value: '高清', label: '画质呈现' },
  { value: '免费', label: '下载安装' },
] as const;

export default function HomePage() {
  const siteUrl = getSiteUrl();

  const softwareLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE.brand,
    operatingSystem: 'Android',
    applicationCategory: 'EntertainmentApplication',
    applicationSubCategory: '漫画阅读',
    url: siteUrl,
    downloadUrl: SITE.downloadUrl,
    softwareType: 'MobileApplication',
    inLanguage: 'zh-CN',
    description:
      '绅士漫画是一款安卓漫画阅读App，海量高清漫画每日更新，支持条漫页漫切换、离线缓存与自动续读。',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CNY',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.brand,
      url: siteUrl,
    },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '首页',
        item: siteUrl,
      },
    ],
  };

  return (
    <>
      <JsonLd data={softwareLd} />
      <JsonLd data={faqLd} />
      <JsonLd data={breadcrumbLd} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute -top-24 right-[-10%] h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-[-20%] left-[-5%] h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="animate-rise inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-accent-foreground">
              <BadgeCheck className="h-4 w-4 text-primary" aria-hidden="true" />
              官方网站 · 安卓版安全下载
            </span>

            <h1
              className="animate-rise mt-6 font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl"
              style={{ animationDelay: '80ms' }}
            >
              绅士漫画
              <span className="mt-2 block text-primary">
                海量高清漫画 随身畅读
              </span>
            </h1>

            <p
              className="animate-rise mx-auto mt-6 max-w-lg text-base leading-8 text-muted-foreground lg:mx-0"
              style={{ animationDelay: '160ms' }}
            >
              绅士漫画汇聚热门漫画、韩漫与条漫资源，每日同步连载更新。高清画质、流畅加载、离线缓存，手机上打开就能看，让追漫变成一种享受。
            </p>

            <div
              className="animate-rise mt-9 flex justify-center lg:justify-start"
              style={{ animationDelay: '240ms' }}
            >
              <DownloadButton />
            </div>
          </div>

          <div className="animate-fade" style={{ animationDelay: '200ms' }}>
            <PhoneMock />
          </div>
        </div>
      </section>

      {/* 数据条 */}
      <section aria-label="产品亮点数据" className="border-y border-border/60 bg-card/60">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-4 sm:px-6 md:grid-cols-4">
          {HOME_STATS.map((item) => (
            <div
              key={item.label}
              className="py-7 text-center"
            >
              <p className="font-display text-3xl text-primary">{item.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 功能特色 */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">
            为什么漫画爱好者选择绅士漫画
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
            从找书、看书到追更，绅士漫画把阅读体验做到流畅顺手，让你只管沉浸在好故事里。
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <li key={feature.title}>
              <Reveal delay={index * 60}>
                <article className="group h-full rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <feature.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {feature.desc}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-12 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            查看全部产品功能
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      {/* 阅读场景 */}
      <section className="bg-night py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">
              任何时刻，<span className="text-gold">漫画都在身边</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-white/65">
              通勤路上缓存几话，午休时间追一话连载，深夜窝在被窝里用夜间模式看完结大作。绅士漫画让碎片时间变成值得期待的阅读时光。
            </p>
            <ul className="mt-8 space-y-4">
              {[
                '离线缓存，没网也能看',
                '自动续读，连看不用找位置',
                '夜间模式，久看不刺眼',
                '更新提醒，追更快人一步',
              ].map((text) => (
                <li key={text} className="flex items-center gap-3 text-sm text-white/80">
                  <BadgeCheck className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="font-display text-2xl text-white">现在开始看漫画</p>
              <p className="mt-3 text-sm leading-7 text-white/60">
                下载绅士漫画安卓版，安装简单，几分钟即可进入你的专属漫画世界。
              </p>
              <div className="mt-8">
                <DownloadButton showHint={false} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 首页 FAQ 精简展示 */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">
            关于绅士漫画的常见问题
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            下载、安装、使用过程中最常被问到的问题，答案都在这里。
          </p>
        </Reveal>

        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.slice(0, 4).map((item, index) => (
            <Reveal key={item.question} delay={index * 50}>
              <details className="group rounded-xl border border-border/70 bg-card p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-foreground">
                  {item.question}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            查看全部常见问题
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      {/* 底部 CTA */}
      <section className="px-4 pb-20 sm:px-6">
        <Reveal>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center shadow-xl shadow-primary/25 sm:px-12">
            <h2 className="font-display text-3xl text-primary-foreground sm:text-4xl">
              立即下载绅士漫画
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-primary-foreground/85">
              一个按钮获取官方下载地址，海量高清漫画马上开看。
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href={SITE.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-8 text-lg font-bold text-primary shadow-lg transition-transform hover:-translate-y-0.5"
              >
                获取下载地址
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
