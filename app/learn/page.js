export default function LearnPage() {

  const articles = [
    { slug: "bitcoin", title: "什么是比特币？", desc: "基础入门" },
    { slug: "usdt", title: "什么是USDT？", desc: "稳定币解析" },
    { slug: "binance", title: "币安注册教程", desc: "交易所使用" },
    { slug: "risk", title: "风险控制", desc: "避免亏损" }
  ];

  return (
    <div>
      <h1>📚 币圈学习中心</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "15px",
        marginTop: "20px"
      }}>
        {articles.map(item => (
          <a key={item.slug} href={`/learn/${item.slug}`}
            style={{
              padding: "15px",
              background: "white",
              borderRadius: "10px",
              textDecoration: "none",
              color: "black",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
            }}>
            
            <h3>{item.title}</h3>
            <p style={{ color: "gray" }}>{item.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}