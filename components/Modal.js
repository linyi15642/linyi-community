export default function Modal({ open, onClose }) {
  if (!open) return null;

  return (
    <div style={styles.bg} onClick={onClose}>
      <div style={styles.box} onClick={(e) => e.stopPropagation()}>

        <h2>💬 QQ交流群</h2>

        <img
          src="/qq.png"
          alt="qq"
          style={styles.img}
        />

        <p>QQ：1740655842</p>

        <button style={styles.btn} onClick={onClose}>
          关闭
        </button>

      </div>
    </div>
  );
}

const styles = {
  bg: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99999
  },

  box: {
    width: 320,
    background: "#fff",
    padding: 20,
    borderRadius: 16,
    textAlign: "center"
  },

  img: {
    width: 220,
    height: 220,
    marginTop: 10
  },

  btn: {
    marginTop: 10,
    padding: "8px 16px",
    border: "none",
    background: "#000",
    color: "#fff",
    borderRadius: 8
  }
};