from collections import Counter
from sqlmodel import Session, select

from app.models import Prediction


def get_dashboard_stats(session: Session):
    predictions = session.exec(
        select(Prediction).order_by(Prediction.id)
    ).all()

    total = len(predictions)

    churn = sum(
        1
        for item in predictions
        if item.prediction == "Churn"
    )

    no_churn = total - churn

    average_risk = (
        round(
            sum(item.churn_probability for item in predictions) / total,
            2,
        )
        if total
        else 0
    )

    retention_rate = (
        round((no_churn / total) * 100, 2)
        if total
        else 0
    )

    trend_counter = Counter()

    for item in predictions:
        date = item.date.split(" ")[0]
        trend_counter[date] += 1

    trend = [
        {
            "date": date,
            "total": total_prediction,
        }
        for date, total_prediction in sorted(trend_counter.items())
    ]

    top_risk = sorted(
        predictions,
        key=lambda x: x.churn_probability,
        reverse=True,
    )[:5]

    return {
        "summary": {
            "total_predictions": total,
            "churn_customers": churn,
            "retention_rate": retention_rate,
            "average_risk": average_risk,
        },
        "distribution": {
            "churn": churn,
            "no_churn": no_churn,
        },
        "trend": trend,
        "top_risk": [
            {
                "customer": item.customer,
                "risk": item.churn_probability,
            }
            for item in top_risk
        ],
    }