"use client";

import { useState } from "react";

const looks = [
  "Soft Glam",
  "Luxury Glam",
  "Nigerian Bridal",
  "Natural Glow",
  "Hairstyle",
  "Surprise Me"
];

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [look, setLook] = useState("Soft Glam");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function generate() {
    if (!file) {
      setError("Please choose a selfie first.");
      return;
    }

    setLoading(true);
    setError("");
    setResult("");

    const form = new FormData();
    form.append("photo", file);
    form.append("look", look);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        body: form
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Generation failed.");
      }

      setResult(data.image);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <h1>
        GlowUp <span>AI ✨</span>
      </h1>

      <p>See every version of you.</p>

      <section>
        <h2>1. Upload your selfie</h2>

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setFile(e.target.files?.[0] || null)
          }
        />

        <h2>2. Choose your look</h2>

        <select
          value={look}
          onChange={(e) => setLook(e.target.value)}
        >
          {looks.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <button onClick={generate} disabled={loading}>
          {loading
            ? "Creating your glow-up..."
            : "✨ Create My Glow-Up"}
        </button>

        {error && <p>{error}</p>}
      </section>

      {result && (
        <section>
          <h2>Your Glow-Up</h2>

          <img
            src={result}
            alt="AI GlowUp result"
          />

          <p>
            Next: Before/After slider, Save, Share and
            Try This Look.
          </p>
        </section>
      )}
    </main>
  );
}
