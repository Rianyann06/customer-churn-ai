from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import SQLModel

from app.database import engine
from app.models import Prediction

from app.routers.health import router as health_router
from app.routers.metrics import router as metrics_router
from app.routers.prediction import router as prediction_router
from app.routers.history import router as history_router
from app.routers.dashboard import router as dashboard_router

app = FastAPI(
    title="Customer Churn API",
    version="1.0.0",
)

SQLModel.metadata.create_all(engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Customer Churn Prediction API"}

app.include_router(health_router)
app.include_router(metrics_router)
app.include_router(prediction_router)
app.include_router(history_router)
app.include_router(dashboard_router)