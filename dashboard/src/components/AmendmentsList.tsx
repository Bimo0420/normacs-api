import { useState } from "react";
import type { Amendment } from "../types";

interface Props {
  amendments: Amendment[];
}

export function AmendmentsList({ amendments }: Props) {
  const [open, setOpen] = useState(false);
  if (!amendments.length) return null;

  return (
    <section style={{ marginTop: 16 }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{ background: "none", border: "none", cursor: "pointer", fontSize: 15, fontWeight: 600, padding: 0, color: "#2563eb" }}
      >
        {open ? "▾" : "▸"} Изменения ({amendments.length})
      </button>
      {open && (
        <ul style={{ margin: "8px 0 0 16px", padding: 0, listStyle: "none" }}>
          {amendments.map((am, i) => (
            <li key={i} style={{ marginBottom: 8, padding: "8px 12px", background: "#fff", borderRadius: 4, border: "1px solid #e2e8f0" }}>
              <strong>{am.designation}</strong>
              {am.issued && <span style={{ marginLeft: 8, color: "#555" }}>вв. {am.issued}</span>}
              {am.revoked && <span style={{ marginLeft: 8, color: "#c00" }}>отм. {am.revoked}</span>}
              {am.comment && <div style={{ marginTop: 4, color: "#666", fontSize: 13 }}>{am.comment}</div>}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
