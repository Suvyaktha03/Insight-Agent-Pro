from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from agents import generate_company_brief, predict_competitor

app = FastAPI(title="SalesBrief AI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"status": "running"}

@app.get("/brief/{company}")
def brief(company: str):
    return generate_company_brief(company)

@app.get("/competitor/{company}")
def competitor(company: str):
    return predict_competitor(company)