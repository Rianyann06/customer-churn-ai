from fastapi import APIRouter, Depends
from sqlmodel import Session

from app.database import get_session
from app.services.history_service import get_history

router = APIRouter(
    prefix="/history",
    tags=["History"],
)


@router.get("")
def history(
    session: Session = Depends(get_session),
):
    return get_history(session)