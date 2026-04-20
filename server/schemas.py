from pydantic import BaseModel


class Developer(BaseModel):
    name: str
    isMain: bool
    address: str


class Publication(BaseModel):
    name: str
    number: str
    year: str


class Amendment(BaseModel):
    designation: str
    issued: str
    revoked: str
    comment: str
    url: str
    id10: str


class Revision(BaseModel):
    name: str
    type: str
    isMain: bool
    dateStart: str
    dateFinish: str
    issued: str
    status: str
    url: str


class Document(BaseModel):
    designation: str
    title: str
    status: str
    approveDate: str
    approver: str
    issued: str
    revoked: str
    area: str
    comment: str
    url: str
    id10: str
    developers: list[Developer]
    publications: list[Publication]
    keywords: list[str]
    amendments: list[Amendment]
    revisions: list[Revision]
    detailsHtml: str


class DocumentsResponse(BaseModel):
    count: int
    documents: list[Document]
