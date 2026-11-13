import { Link } from "react-router-dom";

function PageNotfound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        color: "#e2e8f0",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "3rem 2rem",
          borderRadius: "20px",
          background: "rgba(15, 23, 42, 0.7)",
          boxShadow: "0 20px 45px rgba(0,0,0,0.25)",
          border: "1px solid rgba(148, 163, 184, 0.2)",
          maxWidth: "540px",
          width: "90%",
        }}
      >
        <div style={{ fontSize: "6rem", marginBottom: "0.5rem" }}>🌍</div>
        <h1 style={{ fontSize: "4rem", margin: 0, letterSpacing: "-0.08em" }}>404</h1>
        <h2 style={{ margin: "0.75rem 0 0.5rem", fontSize: "2rem" }}>Page not found</h2>
        <p style={{ margin: "0 0 2rem", color: "#cbd5e1", lineHeight: 1.6 }}>
          The page you are looking for does not exist or has been moved.
        </p>

        <Link
          to="/"
          style={{
            display: "inline-block",
            padding: "0.9rem 1.5rem",
            borderRadius: "999px",
            background: "linear-gradient(135deg, #22c55e, #16a34a)",
            color: "white",
            textDecoration: "none",
            fontWeight: 700,
            boxShadow: "0 10px 25px rgba(34, 197, 94, 0.35)",
          }}
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
}

export default PageNotfound;
