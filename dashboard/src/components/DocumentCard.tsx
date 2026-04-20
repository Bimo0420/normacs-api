import type { Document } from "../types";
import { AmendmentsList } from "./AmendmentsList";
import { RevisionsList } from "./RevisionsList";
import { DetailsHtml } from "./DetailsHtml";

interface Props {
  doc: Document;
}

function Field({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div style={{ marginBottom: 6 }}>
      <span style={{ color: "#666", fontSize: 13, minWidth: 150, display: "inline-block" }}>{label}:</span>
      <span style={{ marginLeft: 8 }}>{value}</span>
    </div>
  );
}

export function DocumentCard({ doc }: Props) {
  const mainDev = doc.developers.find((d) => d.isMain)?.name ?? doc.developers[0]?.name ?? "";

  return (
    <article
      style={{
        background: "#fff",
        borderRadius: 8,
        border: "1px solid #dde3ee",
        padding: "20px 24px",
        marginBottom: 16,
        boxShadow: "0 1px 3px rgba(0,0,0,.06)",
      }}
    >
      <h2 style={{ margin: "0 0 4px", fontSize: 18 }}>{doc.designation}</h2>
      <p style={{ margin: "0 0 12px", color: "#444" }}>{doc.title}</p>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
        {doc.status && (
          <span style={{ padding: "2px 10px", background: "#eef2ff", borderRadius: 12, fontSize: 13, color: "#3730a3" }}>
            {doc.status}
          </span>
        )}
        {doc.keywords.map((kw) => (
          <span key={kw} style={{ padding: "2px 10px", background: "#f1f5f9", borderRadius: 12, fontSize: 12, color: "#555" }}>
            {kw}
          </span>
        ))}
      </div>

      <Field label="Дата утверждения" value={doc.approveDate} />
      <Field label="Утверждён" value={doc.approver} />
      <Field label="Разработчик" value={mainDev} />
      <Field label="Введён в действие" value={doc.issued} />
      <Field label="Область применения" value={doc.area} />
      {doc.revoked && <Field label="Отменён" value={doc.revoked} />}
      {doc.comment && <Field label="Примечание" value={doc.comment} />}

      {doc.publications.length > 0 && (
        <Field
          label="Публикации"
          value={doc.publications.map((p) => [p.name, p.number, p.year].filter(Boolean).join(", ")).join("; ")}
        />
      )}

      <AmendmentsList amendments={doc.amendments} />
      <RevisionsList revisions={doc.revisions} />
      <DetailsHtml html={doc.detailsHtml} />
    </article>
  );
}
