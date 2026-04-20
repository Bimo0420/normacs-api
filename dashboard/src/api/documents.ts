import axios from "axios";
import type { DocumentsResponse } from "../types";

export async function fetchDocument(number: string, limit = 10): Promise<DocumentsResponse> {
  const { data } = await axios.get<DocumentsResponse>("/api/document", {
    params: { number, limit },
  });
  return data;
}
