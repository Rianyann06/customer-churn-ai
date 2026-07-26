import pandas as pd

from app.core.model_loader import model


def predict_customer(data):
    df = pd.DataFrame([data])

    prediction = model.predict(df)[0]
    probability = model.predict_proba(df)[0]

    return {
        "prediction": int(prediction),
        "prediction_label": "Churn" if prediction == 1 else "No Churn",
        "probability": {
            "no_churn": round(float(probability[0]), 4),
            "churn": round(float(probability[1]), 4),
        },
    }