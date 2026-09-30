export const SITE = {
  brand: '绅士漫画',
  tagline: '海量高清漫画 随身畅读',
  downloadUrl:
    'https://bos.liao-hai.chat/manhua/%e7%bb%85%e5%a3%ab%e6%bc%ab%e7%94%bb.apk',
  baiduTongjiId: 'cc1ecba0e11697d33b5382fca4f4ce44',
} as const;

/**
 * 站点对外绝对地址。
 * 优先使用 NEXT_PUBLIC_SITE_URL（绑定自有域名后可配置），
 * 否则使用沙箱注入的 COZE_PROJECT_DOMAIN_DEFAULT。
 */
export function getSiteUrl(): string {
  const custom = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const raw =
    custom && custom.length > 0
      ? custom
      : process.env.COZE_PROJECT_DOMAIN_DEFAULT ?? 'http://localhost:5000';
  return raw.replace(/\/+$/, '');
}
