import json

from fastapi import APIRouter

from app.core.config import METRICS_PATH

router = APIRouter(tags=["Metrics"])


@router.get("/metrics")
def get_metrics():
    with open(METRICS_PATH, "r") as f:
        metrics = json.load(f)

    return metrics  