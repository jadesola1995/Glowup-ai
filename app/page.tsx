"use client";
export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0b0f",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 16px",
            borderRadius: "30px",
            background: "#1c1c25",
            color: "#d4af37",
            marginBottom: "25px",
          }}
        >
          ✨ Glowup-ai
        </div>

        <h1
          style={{
            fontSize: "clamp(42px, 8vw, 78px)",
            lineHeight: 1.05,
            margin: "10px 0 20px",
          }}
        >
          Your Beauty.
          <br />
          <span style={{ color: "#d4af37" }}>Powered by AI.</span>
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.6,
            color: "#b8b8c2",
            maxWidth: "650px",
            margin: "0 auto 35px",
          }}
        >
          Discover your perfect beauty look with Glowup-ai.
          Get personalized makeup, skincare and beauty recommendations
          designed around you.
        </p>

        <button
          style={{
            background: "#d4af37",
            color: "#111",
            border: "none",
            borderRadius: "12px",
            padding: "16px 30px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => alert("Your Glowup is starting! ✨")}
        >
          Start Your Glowup ✨
        </button>

        <div
          style={{
            marginTop: "70px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#15151c",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid #292933",
            }}
          >
            <div style={{ fontSize: "35px" }}>💄</div>
            <h2>Makeup</h2>
            <p style={{ color: "#aaa" }}>
              Get beauty looks tailored to your style.
            </p>
          </div>

          <div
            style={{
              background: "#15151c",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid #292933",
            }}
          >
            <div style={{ fontSize: "35px" }}>✨</div>
            <h2>Glowup</h2>
            <p style={{ color: "#aaa" }}>
              Discover ideas to enhance your natural beauty.
            </p>
          </div>

          <div
            style={{
              background: "#15151c",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid #292933",
            }}
          >
            <div style={{ fontSize: "35px" }}>🤖</div>
            <h2>AI Beauty</h2>
            <p style={{ color: "#aaa" }}>
              Get smart recommendations powered by AI.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
