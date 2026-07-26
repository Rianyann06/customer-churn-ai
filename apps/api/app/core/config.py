from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[4]

print("BASE_DIR =", BASE_DIR)

MODEL_PATH = BASE_DIR / "ml" / "models" / "customer_churn_model.pkl"
print("MODEL_PATH =", MODEL_PATH)

METRICS_PATH = BASE_DIR / "ml" / "models" / "metrics.json"