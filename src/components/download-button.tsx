import Link from 'next/link';
import { Download } from 'lucide-react';
import { SITE } from '@/lib/site';
import { cn } from '@/lib/utils';

interface DownloadButtonProps {
  size?: 'default' | 'lg';
  className?: string;
  showHint?: boolean;
}

/**
 * 全站唯一转化按钮：获取下载地址
 * 指向官方 APK 直链，整站仅承担"获取下载地址"一个动作。
 */
export function DownloadButton({
  size = 'lg',
  className,
  showHint = true,
}: DownloadButtonProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <Link
        href={SITE.downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="获取绅士漫画 App 下载地址（Android APK）"
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-0',
          size === 'lg' ? 'h-14 text-lg' : 'h-11 px-6 text-base',
          className,
        )}
      >
        <Download className="h-5 w-5" aria-hidden="true" />
        获取下载地址
      </Link>
      {showHint && (
        <p className="text-sm text-muted-foreground">
          Android 安卓版安装包 · 点击即可获取下载地址
        </p>
      )}
    </div>
  );
}
