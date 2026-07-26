from typing import Optional
from sqlmodel import SQLModel, Field


class Prediction(SQLModel, table=True):
    __tablename__ = "predictions"

    id: Optional[int] = Field(default=None, primary_key=True)

    customer: str
    prediction: str
    churn_probability: float
    date: str