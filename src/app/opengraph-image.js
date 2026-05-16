import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Portfolio de Mathieu Crosnier";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #111827 0%, #0f2a4a 60%, #1e3a5f 100%)",
                    fontFamily: "sans-serif",
                    padding: "60px",
                }}
            >
                <p
                    style={{
                        fontSize: 18,
                        color: "#60a5fa",
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        margin: "0 0 24px 0",
                    }}
                >
                    Portfolio
                </p>
                <h1
                    style={{
                        fontSize: 80,
                        fontWeight: 700,
                        color: "#ffffff",
                        margin: "0 0 16px 0",
                        textAlign: "center",
                        lineHeight: 1.1,
                    }}
                >
                    Mathieu Crosnier
                </h1>
                <p
                    style={{
                        fontSize: 34,
                        color: "#94a3b8",
                        margin: "0 0 40px 0",
                    }}
                >
                    Développeur Fullstack
                </p>
                <div style={{ display: "flex", gap: "16px" }}>
                    <span
                        style={{
                            background: "rgba(30, 64, 175, 0.4)",
                            color: "#93c5fd",
                            padding: "10px 24px",
                            borderRadius: "9999px",
                            fontSize: 20,
                            border: "1px solid rgba(96, 165, 250, 0.3)",
                        }}
                    >
                        Nantes
                    </span>
                    <span
                        style={{
                            background: "rgba(30, 64, 175, 0.4)",
                            color: "#93c5fd",
                            padding: "10px 24px",
                            borderRadius: "9999px",
                            fontSize: 20,
                            border: "1px solid rgba(96, 165, 250, 0.3)",
                        }}
                    >
                        EPSI · Cloudity
                    </span>
                    <span
                        style={{
                            background: "rgba(30, 64, 175, 0.4)",
                            color: "#93c5fd",
                            padding: "10px 24px",
                            borderRadius: "9999px",
                            fontSize: 20,
                            border: "1px solid rgba(96, 165, 250, 0.3)",
                        }}
                    >
                        Next.js · Salesforce
                    </span>
                </div>
            </div>
        ),
        { ...size }
    );
}
