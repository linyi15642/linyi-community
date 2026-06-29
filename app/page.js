"use client";

import { useState } from "react";
import Modal from "../components/Modal";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div style={styles.page}>

      {/* ================= 顶部 ================= */}
      <header style={styles.header}>
        <h1 style={styles.title}>🏠 林一自由社区</h1>
        <p style={styles.sub}>
          Crypto Learning Hub ｜ 币圈学习 / 交易所教程 / 工具导航
        </p>
      </header>

      <hr style={styles.hr} />

      {/* ================= 核心入口 ================= */}
      <section>
        <h2 style={styles.h2}>🚀 核心入口</h2>

        <div style={styles.list}>

          <a href="/exchange/binance" style={styles.card}>
            📈 交易所教程
            <p style={styles.desc}>Binance / 注册 / 入金 / 操作教学</p>
          </a>

          <a href="/learn" style={styles.card}>
            📚 币圈科普
            <p style={styles.desc}>比特币 / USDT / 区块链基础知识</p>
          </a>

          <a href="/kol" style={styles.card}>
            🧠 KOL观点
            <p style={styles.desc}>市场分析 / 交易策略 / 热点解读</p>
          </a>

        </div>
      </section>

      <hr style={styles.hr} />

      {/* ================= 工具区 ================= */}
      <section>
        <h2 style={styles.h2}>🔥 常用工具</h2>

        <div style={styles.list}>

          <a
            href="https://ios123.xyz/"
            target="_blank"
            style={styles.button}
          >
            🍎 苹果商店海外ID
          </a>

          <a
            href="https://vip.44s4.vip/pages/appleid"
            target="_blank"
            style={styles.button}
          >
            🍏 苹果ID备用入口
          </a>

          <a
            href="https://www.bsmkweb.cc/register?ref=BIAN25"
            target="_blank"
            style={styles.button}
          >
            💰 币安注册返佣（bian25）
          </a>

          <a
            href="https://www.turboflow.xyz/join/?r=777888"
            target="_blank"
            style={styles.button}
          >
            🔗 TU去中心化交易所
          </a>

          <button
            onClick={() => setOpen(true)}
            style={styles.buttonBlack}
          >
            💬 QQ交流群（扫码加入）
          </button>

        </div>
      </section>

      {/* ================= QQ弹窗 ================= */}
      <Modal open={open} onClose={() => setOpen(false)} />

      {/* ================= Footer ================= */}
      <footer style={styles.footer}>
        © 2026 林一自由社区 · All Rights Reserved
      </footer>

    </div>
  );
}

/* ================= 样式 ================= */
const styles = {
  page: {
    maxWidth: 900,
    margin: "0 auto",
    padding: 30,
    fontFamily: "Arial",
    background: "#fff",
  },

  header: {
    textAlign: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

  sub: {
    color: "#666",
    marginTop: 6,
  },

  hr: {
    margin: "25px 0",
  },

  h2: {
    marginBottom: 12,
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  card: {
    padding: 16,
    border: "1px solid #eee",
    borderRadius: 12,
    textDecoration: "none",
    color: "#000",
    background: "#fff",
  },

  desc: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
  },

  button: {
    padding: 12,
    border: "1px solid #ddd",
    borderRadius: 10,
    textDecoration: "none",
    color: "#000",
    background: "#fff",
  },

  buttonBlack: {
    padding: 12,
    border: "none",
    borderRadius: 10,
    background: "#000",
    color: "#fff",
    cursor: "pointer",
  },

  footer: {
    marginTop: 40,
    textAlign: "center",
    color: "#999",
    fontSize: 12,
  },
};