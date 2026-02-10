"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [health, setHealth] = useState<any>(null);
  const [info, setInfo] = useState<any>(null);

  useEffect(() => {
    fetch("/api/health")
      .then(res => res.json())
      .then(setHealth);

    fetch("/api/info")
      .then(res => res.json())
      .then(setInfo);
  }, []);

  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>🚀 DevOps CI/CD Dashboard</h1>
      <p>Next.js + Docker + Jenkins + AWS EC2</p>

      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        <div style={{ flex: 1, border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
          <h3>Application Health</h3>
          {health ? (
            <pre>{JSON.stringify(health, null, 2)}</pre>
          ) : (
            <p>Checking health...</p>
          )}
        </div>

        <div style={{ flex: 1, border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
          <h3>Deployment Info</h3>
          {info ? (
            <pre>{JSON.stringify(info, null, 2)}</pre>
          ) : (
            <p>Loading deployment info...</p>
          )}
        </div>
      </div>
    </main>
  );
}
