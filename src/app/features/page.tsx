import type { Metadata } from 'next';
import { DownloadButton } from '@/components/download-button';
import { Reveal } from '@/components/reveal';
import { JsonLd } from '@/components/json-ld';
import { FEATURES } from '@/lib/content';
import { getSiteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: '产品功能介绍_海量高清漫画阅读器有哪些特色',
  description:
    '绅士漫画产品功能介绍：海量漫画书库、每日更新、页漫条漫切换、离线缓存、自动续读、夜间护眼与个性化推荐，全面了解绅士漫画 App 的阅读体验。',
  alternates: { canonical: '/features' },
};

const EXTRA_HIGHLIGHTS = [
  {
    title: '搜索分类，快速找书',
    desc: '支持按题材、状态、字母等方式检索与筛选，热门榜单定期更新，找新作、补旧作都高效。',
  },
  {
    title: '书架收藏管理',
    desc: '喜欢的作品一键加入书架，连载更新在书架内直观呈现，管理你的追更清单一目了然。',
  },
  {
    title: '画质自适应',
    desc: '根据网络情况智能加载合适清晰度的图片，兼顾画质与速度，流量环境下也能放心阅读。',
  },
  {
    title: '横竖屏自由读',
    desc: '适配竖屏条漫与横屏页漫，支持翻页方向与滑动方向设置，按自己的习惯读最舒服。',
  },
] as const;

export default function FeaturesPage() {
  const siteUrl = getSiteUrl();

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首页', item: siteUrl },
      {
        '@type': 'ListItem',
        position: 2,
        name: '产品功能',
        item: `${siteUrl}/features`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbLd} />

      <section className="border-b border-border/60 bg-card/40">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 md:py-20">
          <nav aria-label="面包屑" className="text-sm text-muted-foreground">
            首页 / <span className="text-foreground">产品功能</span>
          </nav>
          <h1 className="mt-5 font-display text-4xl text-foreground sm:text-5xl">
            绅士漫画功能全览
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
            围绕"找得到、看得爽、追得上"打造的漫画阅读体验，每一项功能都为长时间阅读而设计。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <li key={feature.title}>
              <Reveal delay={index * 50}>
                <article className="h-full rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-shadow hover:shadow-lg">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <feature.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 text-base font-bold text-foreground">
                    {feature.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {feature.desc}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-card/40 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
              更多为阅读考虑的细节
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {EXTRA_HIGHLIGHTS.map((item, index) => (
              <li key={item.title}>
                <Reveal delay={index * 60}>
                  <article className="h-full rounded-2xl border border-border/70 bg-background p-7">
                    <h3 className="text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {item.desc}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl bg-night px-6 py-14 text-center">
            <h2 className="font-display text-3xl text-white">
              功能好不好，用了就知道
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-white/60">
              下载绅士漫画安卓版，亲自体验流畅的漫画阅读之旅。
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
