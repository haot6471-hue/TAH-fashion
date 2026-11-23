import Image from "next/image";
import { SAMPLE_PRODUCTS } from "@/lib/catalog";

export default function Home() {
  return (
    <main className="container" style={{ paddingBlock: "64px", textAlign: "center", display: "grid", gap: 24, justifyItems: "center" }}>
      <span className="brand" style={{ fontSize: 28 }}>TAH Fashion</span>
      <p className="muted">Website đang được xây dựng. Sắp ra mắt.</p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        {SAMPLE_PRODUCTS.map((p) => (
          <Image key={p.id} src={p.image} alt={p.name} width={120} height={160} style={{ objectFit: "cover", borderRadius: 3 }} />
        ))}
      </div>
    </main>
  );
}
