import type { Metadata } from 'next';
import { ChevronDown } from 'lucide-react';
import { DownloadButton } from '@/components/download-button';
import { Reveal } from '@/components/reveal';
import { JsonLd } from '@/components/json-ld';
import { FAQ_ITEMS } from '@/lib/content';
import { getSiteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: '常见问题_下载安装使用帮助中心',
  description:
    '绅士漫画常见问题帮助中心：绅士漫画免费吗、如何下载安装 APK、提示未知来源应用怎么办、能否离线看漫画、安装失败如何处理等问题的详细解答。',
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {
  const siteUrl = getSiteUrl();

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
      { '@type': 'ListItem', position: 1, name: '首页', item: siteUrl },
      {
        '@type': 'ListItem',
        position: 2,
        name: '常见问题',
        item: `${siteUrl}/faq`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqLd} />
      <JsonLd data={breadcrumbLd} />

      <section className="border-b border-border/60 bg-card/40">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 md:py-20">
          <nav aria-label="面包屑" className="text-sm text-muted-foreground">
            首页 / <span className="text-foreground">常见问题</span>
          </nav>
          <h1 className="mt-5 font-display text-4xl text-foreground sm:text-5xl">
            绅士漫画常见问题
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
            汇总下载、安装与使用绅士漫画时的高频问题。如果这里没有解决你的疑问，可重新下载最新版安装包尝试。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
        <ul className="space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <li key={item.question}>
              <Reveal delay={Math.min(index, 6) * 40}>
                <details className="group rounded-xl border border-border/70 bg-card p-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground">
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
            </li>
          ))}
        </ul>
      </section>

      <section className="px-4 pb-20 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl bg-night px-6 py-14 text-center">
            <h2 className="font-display text-3xl text-white">
              还有疑问？先下载体验
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-white/60">
              绅士漫画安装简单、使用方便，点击按钮获取下载地址，亲自体验再做判断。
            </p>
            <div className="mt-8 flex justify-center">
              <DownloadButton />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
