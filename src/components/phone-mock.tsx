import { SITE } from '@/lib/site';

/**
 * 纯 CSS/SVG 的 App 界面样机装饰图（非真实截图，仅作视觉呈现）。
 */
export function PhoneMock() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]">
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-primary/15 blur-2xl" aria-hidden="true" />
      <div className="rounded-[2.75rem] border-[6px] border-night bg-night p-2 shadow-2xl">
        <div className="overflow-hidden rounded-[2.25rem] bg-background">
          <div className="flex items-center justify-between bg-primary px-5 py-3">
            <span className="font-display text-base text-primary-foreground">
              {SITE.brand}
            </span>
            <span className="h-2 w-2 rounded-full bg-primary-foreground/70" aria-hidden="true" />
          </div>
          <div className="space-y-3 p-4">
            <div className="flex h-24 items-end rounded-xl bg-gradient-to-br from-primary/80 to-accent p-3">
              <span className="text-xs font-bold text-white">每日推荐</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="aspect-[3/4] rounded-lg bg-muted"
                  style={{
                    background:
                      i % 2 === 0
                        ? 'linear-gradient(135deg, oklch(0.62 0.2 357 / 0.35), oklch(0.95 0.02 355))'
                        : 'linear-gradient(135deg, oklch(0.78 0.13 70 / 0.35), oklch(0.95 0.02 355))',
                  }}
                />
              ))}
            </div>
            <div className="space-y-2">
              <div className="h-2 w-3/4 rounded-full bg-muted" />
              <div className="h-2 w-1/2 rounded-full bg-muted" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
