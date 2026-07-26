from fastapi import APIRouter, Depends
from sqlmodel import Session

from app.database import get_session
from app.schemas.customer import CustomerData
from app.services.history_service import add_prediction
from app.services.prediction_service import predict_customer

router = APIRouter(tags=["Prediction"])


@router.post("/predict")
def predict(
    data: CustomerData,
    session: Session = Depends(get_session),
):
    customer_data = data.model_dump()

    result = predict_customer(customer_data)

    add_prediction(session, result)

    return result