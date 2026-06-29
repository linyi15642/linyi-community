import { articles } from "../articles";

export default function ArticlePage({ params }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return <h1 style={{ padding: "40px" }}>文章不存在</h1>;
  }

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "40px" }}>

      <h1 style={{ fontSize: "30px" }}>
        {article.title}
      </h1>

      <p style={{ color: "#666" }}>
        {article.desc}
      </p>

      <hr style={{ margin: "20px 0" }} />

      <p style={{ lineHeight: "1.8", fontSize: "16px" }}>
        {article.content}
      </p>

      <hr style={{ margin: "30px 0" }} />

      <a href="/exchange/binance" style={{ color: "blue" }}>
        👉 去注册币安（邀请码：bian25）
      </a>

    </main>
  );
}