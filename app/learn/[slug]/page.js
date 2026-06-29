export const runtime = "edge";

import { articles } from "../articles";

export default function ArticlePage({ params }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return (
      <main style={{ padding: "40px", fontSize: "18px" }}>
        ❌ 文章不存在
      </main>
    );
  }

  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* 标题 */}
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        {article.title}
      </h1>

      {/* 描述 */}
      <p style={{ color: "#666", marginBottom: "20px" }}>
        {article.desc}
      </p>

      <hr style={{ margin: "20px 0" }} />

      {/* 正文 */}
      <div style={{ lineHeight: "1.8", fontSize: "16px", whiteSpace: "pre-wrap" }}>
        {article.content}
      </div>

      <hr style={{ margin: "30px 0" }} />

      {/* CTA按钮 */}
      <a
        href="/exchange/binance"
        style={{
          display: "inline-block",
          padding: "10px 16px",
          background: "#1677ff",
          color: "#fff",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        👉 去注册币安（邀请码：bian25）
      </a>
    </main>
  );
}