import { useState, useEffect, useRef } from "react";

interface Props {
  onSearch: (number: string) => void;
  loading: boolean;
}

export function SearchForm({ onSearch, loading }: Props) {
  const [value, setValue] = useState("");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = e.target.value;
    setValue(v);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (v.trim()) {
      debounceRef.current = setTimeout(() => onSearch(v.trim()), 300);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (value.trim()) onSearch(value.trim());
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, marginBottom: 24 }}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Номер документа, например ГОСТ 12.1.004-91"
        style={{
          flex: 1,
          padding: "10px 14px",
          fontSize: 16,
          border: "1px solid #ccd0d9",
          borderRadius: 6,
          outline: "none",
        }}
      />
      <button
        type="submit"
        disabled={loading || !value.trim()}
        style={{
          padding: "10px 20px",
          fontSize: 16,
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: loading ? "wait" : "pointer",
        }}
      >
        {loading ? "Поиск…" : "Найти"}
      </button>
    </form>
  );
}
