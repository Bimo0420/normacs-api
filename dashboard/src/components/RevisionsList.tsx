import { useState } from "react";
import type { Revision } from "../types";

interface Props {
  revisions: Revision[];
}

export function RevisionsList({ revisions }: Props) {
  const [open, setOpen] = useState(false);
  if (!revisions.length) return null;

  return (
    <section style={{ marginTop: 16 }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{ background: "none", border: "none", cursor: "pointer", fontSize: 15, fontWeight: 600, padding: 0, color: "#2563eb" }}
      >
        {open ? "▾" : "▸"} Редакции ({revisions.length})
      </button>
      {open && (
        <ul style={{ margin: "8px 0 0 16px", padding: 0, listStyle: "none" }}>
          {revisions.map((rev, i) => (
            <li key={i} style={{ marginBottom: 8, padding: "8px 12px", background: "#fff", borderRadius: 4, border: "1px solid #e2e8f0" }}>
              <strong>{rev.name || `Редакция ${i + 1}`}</strong>
              {rev.isMain && <span style={{ marginLeft: 8, color: "#2563eb", fontSize: 12 }}>[основная]</span>}
              {rev.status && <span style={{ marginLeft: 8, color: "#555" }}>{rev.status}</span>}
              {rev.dateStart && <span style={{ marginLeft: 8, color: "#666", fontSize: 13 }}>с {rev.dateStart}</span>}
              {rev.dateFinish && <span style={{ marginLeft: 4, color: "#666", fontSize: 13 }}>по {rev.dateFinish}</span>}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
