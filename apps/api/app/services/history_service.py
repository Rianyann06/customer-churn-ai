from datetime import datetime

from sqlmodel import Session, select

from app.models import Prediction


def add_prediction(session: Session, result):
    total = len(session.exec(select(Prediction)).all()) + 1

    prediction = Prediction(
        customer=f"CUST-{total:03}",
        prediction=result["prediction_label"],
        churn_probability=round(
            result["probability"]["churn"] * 100,
            2,
        ),
        date=datetime.now().strftime("%Y-%m-%d %H:%M"),
    )

    session.add(prediction)
    session.commit()
    session.refresh(prediction)

    return prediction


def get_history(session: Session):
    statement = (
        select(Prediction)
        .order_by(Prediction.id.desc())
    )

    return session.exec(statement).all()