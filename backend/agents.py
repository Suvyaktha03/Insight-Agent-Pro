from collectors import (
    get_news,
    get_financials
)


def generate_company_brief(company):

    news = get_news(company)

    return {
        "company": company,

        "summary":
        f"{company} is an organization currently showing activity across public sources.",

        "products": [
            "AI Sales Briefing",
            "Competitor Intelligence"
        ],

        "customers": [
            "Sales Teams",
            "Business Development",
            "Founders"
        ],

        "opportunities": [
            "Enterprise Expansion",
            "Sales Automation",
            "Market Intelligence"
        ],

        "pitch":
        f"{company} helps teams make better sales decisions using AI-powered insights.",

        "risks": [
            "Limited brand awareness",
            "Competitive market"
        ],

        "confidence": 85,

        "news": news
    }


def predict_competitor(company):

    return {
        "company": company,

        "competitors": [

            {
                "name": "Crayon",

                "what_they_do":
                "Competitive intelligence platform",

                "strengths": [
                    "Enterprise Focus",
                    "Market Monitoring"
                ],

                "weaknesses": [
                    "Complex Setup"
                ],

                "threat": "High"
            },

            {
                "name": "Klue",

                "what_they_do":
                "Sales enablement and competitor tracking",

                "strengths": [
                    "Battlecards",
                    "Sales Insights"
                ],

                "weaknesses": [
                    "Pricing"
                ],

                "threat": "Medium"
            }

        ]
    }