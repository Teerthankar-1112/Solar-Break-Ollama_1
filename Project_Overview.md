# SolarBreak Project Documentation

## Project Overview
SolarBreak is a tool/system designed to help overseas companies (specifically Global Capability Centres - GCCs) evaluate the ROI and incentive landscape for installing solar power systems in India. It focuses on comparing different states (e.g., Maharashtra, Gujarat, Karnataka, Telangana, and Leh) based on factors like talent, cost, incentives, and power costs.

The system generates detailed **Solar ROI and Incentive Reports** that provide a comprehensive analysis of the financial and regulatory feasibility of solar installations.

## Technical Specifications
*Refer to `SolarBreak_TechSpec.pdf` for full details.*

### Key Analysis Dimensions:
- **Mandatory Requirements:** Analysis of local solar mandates based on premises size (e.g., Bengaluru's ~2,000 sq m threshold).
- **Site Solar Resource:** Estimation of specific yield (kWh/kWp/yr), yearly generation, and optimal tilt/orientation.
- **ROI Comparison:** Comparison of Levelised Cost of Energy (LCOE) across solar, grid, and diesel power.
- **Financial Metrics:** Calculation of Year-1 savings, Simple Payback, After-tax Payback, IRR (Internal Rate of Return), and NPV (Net Present Value).
- **Government Incentives:** 
    - Accelerated Depreciation (e.g., 40% under the Income-tax Act).
    - GST rates (e.g., 5% for solar cells and modules).
    - State-specific policies (e.g., Karnataka Industrial Policy 2025-30).
- **Vendor Analysis:** Shortlisting MNRE-approved vendors and comparing module pricing/warranties.

## Data Structure
The project utilizes the following data sources:
- **`Data/Solar Break Data.xlsx`**: Core financial and technical parameters for ROI calculations.
- **`Data/solar_panel_vendors.csv`**: Database of solar panel vendors, pricing, and approvals.
- **`Data/solar_regions_climate_geography.xlsx`**: Regional data on solar yield and geographical constraints.
- **`Data/SolarBreak_Schemes_RAG.pdf`**: Detailed information on government schemes and policies for RAG (Retrieval-Augmented Generation) processing.

## Input & Output Workflow
### User Inputs (`Input_Output/Question Bank.txt`)
The system gathers information via a structured questionnaire covering:
1. Company Name
2. Location/State preference and priorities (Talent, Cost, Incentives, etc.)
3. Premises details (Build type, area, available roof/land)
4. Power profile (Connected load, supply type, operation hours, backup)
5. Funding model (Capex vs RESCO/PPA)
6. Tax position (Legal entity, GST registration, profitability)
7. Sustainability targets (Net-zero, RE100, ESG)
8. Target operational date

### Expected Output (`Input_Output/Sample Output.txt`)
The output is a professional report featuring:
- **Summary:** High-level ROI and decision guidance.
- **Mandatory Requirements:** Legal obligations for solar installation.
- **Solar Resource Analysis:** Technical generation estimates.
- **Detailed ROI Tables:** Side-by-side cost comparison (Solar vs Grid vs Diesel).
- **Incentive Breakdown:** Quantitative impact of tax benefits and subsidies.
- **Vendor Recommendations:** Shortlist of suitable hardware providers.
- **Regional Comparison:** Comparative analysis across potential states.
- **Data Conflict Resolution:** Clarifications on differing data sources.
- **Assumptions & Next Steps:** Transparency on model inputs and a roadmap for implementation.
