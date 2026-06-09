from ddgs import DDGS
import yfinance as yf
import requests
from bs4 import BeautifulSoup


def get_news(company):
    try:
        with DDGS() as ddgs:
            return list(
                ddgs.text(
                    f"{company} company news",
                    max_results=10
                )
            )
    except Exception as e:
        print(f"News fetch error: {e}")
        return []


def get_financials(symbol):

    try:

        ticker = yf.Ticker(symbol)

        info = ticker.info

        return {
            "sector": info.get("sector"),
            "industry": info.get("industry"),
            "market_cap": info.get("marketCap"),
            "employees": info.get("fullTimeEmployees")
        }

    except:

        return {
            "type": "Private Company"
        }


def get_website_summary(company):

    try:

        url = f"https://www.{company}.com"

        html = requests.get(
            url,
            timeout=5
        ).text

        soup = BeautifulSoup(
            html,
            "html.parser"
        )

        title = soup.title.text

        return {
            "website": url,
            "title": title
        }

    except:

        return {}