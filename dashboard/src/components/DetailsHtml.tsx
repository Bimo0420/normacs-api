import DOMPurify from "dompurify";

interface Props {
  html: string;
}

export function DetailsHtml({ html }: Props) {
  if (!html) return null;
  const clean = DOMPurify.sanitize(html);
  return (
    <div
      style={{ marginTop: 16, padding: "12px 16px", background: "#f0f4ff", borderRadius: 6 }}
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}
