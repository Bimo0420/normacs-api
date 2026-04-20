export interface Developer {
  name: string;
  isMain: boolean;
  address: string;
}

export interface Publication {
  name: string;
  number: string;
  year: string;
}

export interface Amendment {
  designation: string;
  issued: string;
  revoked: string;
  comment: string;
  url: string;
  id10: string;
}

export interface Revision {
  name: string;
  type: string;
  isMain: boolean;
  dateStart: string;
  dateFinish: string;
  issued: string;
  status: string;
  url: string;
}

export interface Document {
  designation: string;
  title: string;
  status: string;
  approveDate: string;
  approver: string;
  issued: string;
  revoked: string;
  area: string;
  comment: string;
  url: string;
  id10: string;
  developers: Developer[];
  publications: Publication[];
  keywords: string[];
  amendments: Amendment[];
  revisions: Revision[];
  detailsHtml: string;
}

export interface DocumentsResponse {
  count: number;
  documents: Document[];
}
