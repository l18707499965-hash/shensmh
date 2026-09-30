/**
 * JSON-LD 结构化数据注入组件（无交互，服务端渲染为 script 标签）。
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
