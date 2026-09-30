import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/lib/site';

const FOOTER_LINKS = [
  { href: '/', label: '首页' },
  { href: '/features', label: '产品功能' },
  { href: '/download', label: '下载安装' },
  { href: '/faq', label: '常见问题' },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-night text-white/80">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.svg"
                alt="绅士漫画 Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-display text-2xl text-white">
                {SITE.brand}
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/60">
              绅士漫画是一款专为漫画爱好者打造的安卓阅读应用，海量高清漫画资源每日更新，条漫、页漫随心阅读，支持离线缓存，让追漫随时随地。
            </p>
          </div>

          <nav aria-label="页脚导航">
            <h2 className="text-sm font-semibold tracking-wider text-white">
              快速导航
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs leading-6 text-white/40">
            本站为绅士漫画官方网站，仅提供 Android 安卓版安装包下载。应用内漫画资源均来自互联网公开内容，版权归原作者及出版方所有。
            请在遵守当地法律法规的前提下使用，未成年人请在监护人指导下使用并合理安排阅读时间。
          </p>
          <p className="mt-3 text-xs text-white/40">
            © {new Date().getFullYear()} {SITE.brand} 版权所有
          </p>
        </div>
      </div>
    </footer>
  );
}
