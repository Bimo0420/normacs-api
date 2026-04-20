import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SearchForm } from "./components/SearchForm";
import { DocumentCard } from "./components/DocumentCard";
import { fetchDocument } from "./api/documents";

export function App() {
  const [searchNumber, setSearchNumber] = useState("");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["document", searchNumber],
    queryFn: () => fetchDocument(searchNumber),
    enabled: !!searchNumber,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "32px 16px" }}>
      <h1 style={{ marginBottom: 24, fontSize: 24, fontWeight: 700 }}>NormaCS — поиск документов</h1>

      <SearchForm onSearch={setSearchNumber} loading={isLoading} />

      {isLoading && <p style={{ color: "#555" }}>Поиск…</p>}

      {isError && (
        <div style={{ padding: "12px 16px", background: "#fff0f0", borderRadius: 6, color: "#c00", border: "1px solid #fcc" }}>
          Ошибка: {(error as Error)?.message ?? "Нет соединения с сервером"}
        </div>
      )}

      {data && !isLoading && (
        <>
          {data.count === 0 ? (
            <p style={{ color: "#666" }}>Документы не найдены.</p>
          ) : (
            <>
              <p style={{ color: "#555", marginBottom: 16 }}>Найдено: {data.count}</p>
              {data.documents.map((doc) => (
                <DocumentCard key={doc.id10 || doc.url || doc.designation} doc={doc} />
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}
