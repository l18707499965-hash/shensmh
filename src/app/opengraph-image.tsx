import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/site';

export const runtime = 'edge';
export const alt = '绅士漫画 - 海量高清漫画随身畅读';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const logoSvg = `<svg width="200" height="200" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="g" cx="0.38" cy="0.32" r="0.85"><stop offset="0" stop-color="#f45b87"/><stop offset="1" stop-color="#e03e70"/></radialGradient></defs><circle cx="256" cy="256" r="248" fill="url(#g)" stroke="#f4b441" stroke-width="8"/><g fill="#ffffff"><circle cx="168" cy="152" r="37"/><circle cx="256" cy="110" r="40"/><circle cx="344" cy="152" r="37"/><ellipse cx="258" cy="218" rx="80" ry="68"/></g><path d="M94 396 L157 296 L223 404 L289 404 L355 296 L418 396" stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #2a1520 0%, #3d1c2c 55%, #e03e70 160%)',
          gap: 28,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(logoSvg)}`}
          width={150}
          height={150}
          alt=""
        />
        <div
          style={{
            display: 'flex',
            fontSize: 76,
            color: '#ffffff',
            letterSpacing: 4,
          }}
        >
          绅士漫画
        </div>
        <div style={{ display: 'flex', fontSize: 34, color: '#f4b441' }}>
          {SITE.tagline}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            color: 'rgba(255,255,255,0.65)',
          }}
        >
          安卓版官方下载 · 海量高清漫画每日更新
        </div>
      </div>
    ),
    size,
  );
}
