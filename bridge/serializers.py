from typing import Any


def iter_com_collection(col) -> list:
    return [col.Item(i) for i in range(col.Count)]


def serialize_document(doc) -> dict:
    status_name = ""
    try:
        status_name = doc.Status.DisplayName if doc.Status else ""
    except Exception:
        pass

    return {
        "designation": _str(doc.Designation),
        "title": _str(doc.Title),
        "status": status_name,
        "approveDate": _str(doc.ApproveDateStr),
        "approver": _str(doc.Approver),
        "issued": _str(doc.Issued),
        "revoked": _str(doc.Revoked),
        "area": _str(doc.Area),
        "comment": _str(doc.Comment),
        "url": _str(doc.URL),
        "id10": _str(doc.Id10),
        "developers": _serialize_developers(doc.Developers),
        "publications": _serialize_publications(doc.Publications),
        "keywords": _serialize_keywords(doc.Keywords),
        "amendments": _serialize_amendments(doc.Amendments),
        "revisions": _serialize_revisions(doc.Revisions),
        "detailsHtml": _get_details_html(doc),
    }


def _str(val) -> str:
    if val is None:
        return ""
    return str(val)


def _get_details_html(doc) -> str:
    try:
        return str(doc.GetDetailsHtml(10))
    except Exception:
        return ""


def _serialize_developers(col) -> list[dict]:
    result = []
    try:
        for dev in iter_com_collection(col):
            result.append({
                "name": _str(dev.Name),
                "isMain": bool(dev.IsMain),
                "address": _str(dev.Address),
            })
    except Exception:
        pass
    return result


def _serialize_publications(col) -> list[dict]:
    result = []
    try:
        for pub in iter_com_collection(col):
            result.append({
                "name": _str(pub.Name),
                "number": _str(pub.Number),
                "year": _str(pub.Year),
            })
    except Exception:
        pass
    return result


def _serialize_keywords(col) -> list[str]:
    result = []
    try:
        for kw in iter_com_collection(col):
            result.append(_str(kw.Text))
    except Exception:
        pass
    return result


def _serialize_amendments(col) -> list[dict]:
    result = []
    try:
        for am in iter_com_collection(col):
            result.append({
                "designation": _str(am.Designation),
                "issued": _str(am.Issued),
                "revoked": _str(am.Revoked),
                "comment": _str(am.Comment),
                "url": _str(am.URL),
                "id10": _str(am.Id10),
            })
    except Exception:
        pass
    return result


def _serialize_revisions(col) -> list[dict]:
    result = []
    try:
        for rev in iter_com_collection(col):
            status_name = ""
            try:
                status_name = rev.Status.DisplayName if rev.Status else ""
            except Exception:
                pass
            result.append({
                "name": _str(rev.Name),
                "type": _str(rev.Type),
                "isMain": bool(rev.IsMain),
                "dateStart": _str(rev.DateStart),
                "dateFinish": _str(rev.DateFinish),
                "issued": _str(rev.Issued),
                "status": status_name,
                "url": _str(rev.URL),
            })
    except Exception:
        pass
    return result
