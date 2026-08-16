# Esense TCO Engine

An interactive, enterprise-grade Total Cost of Ownership (TCO) and Return on Investment (ROI) financial calculation engine designed for evaluating infrastructure migration to **Azure KSA (Kingdom of Saudi Arabia)**.

---

## 🌟 Overview & Purpose

The **Esense TCO Engine** helps IT leaders, financial analysts, and cloud architects evaluate the financial impact of transitioning from on-premises infrastructure to Microsoft Azure. By comparing capital expenditures (CapEx) and operational expenditures (OpEx) across hardware, storage, power, datacenter real estate, and IT operations, the engine projects total cost differences, break-even timelines, and net ROI.

---

## ⚡ Technical Architecture (Static SPA)

This project is built as a **fully static client-side Single Page Application (SPA)**:
* **Frontend Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Build Tooling**: [Vite](https://vitejs.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Data Visualization**: [Recharts](https://recharts.org/)
* **Animations**: [Motion](https://motion.dev/)
* **Report Generation**: [jsPDF](https://github.com/parallax/jsPDF) & [html2canvas-pro](https://github.com/niklasvh/html2canvas)

Because it compiles to optimized static assets (`dist/` directory), it can be hosted seamlessly on any static web host, CDN, or **GitHub Pages**.

---

## ✨ Key Features

- **📊 Comprehensive TCO & ROI Modeling**:
  - Detailed side-by-side cost analysis comparing On-Premises vs. Azure Cloud over customizable projection years (3 to 10 years).
  - Factoring hardware refreshes, facility costs, power/cooling, storage, network bandwidth, and staff maintenance overhead.

- **🎛️ Interactive Financial Controls**:
  - Adjust server counts, RAM, CPU cores, storage capacity (TB), PUE (Power Usage Effectiveness), and electricity rates ($/kWh).
  - Configure Azure migration speeds, Reserved Instances discounts, and software licensing benefits (e.g., Azure Hybrid Benefit).

- **📈 Visual Analytics & Reports**:
  - Interactive stacked bar charts and break-even visualization graphs powered by Recharts.
  - One-click PDF Executive Summary and CSV data export functionality.

- **🔗 URL Parameter State Synchronization**:
  - Automatically serializes calculator inputs into URL parameters, allowing users to save, bookmark, and share specific calculation scenarios effortlessly.

- **🌙 Dark & Light Themes**:
  - Seamless theme toggle support adapted for enterprise accessibility and visual clarity.

---

## 🛠️ Local Development & Setup

### Prerequisites
* **Node.js**: `>= 24.0.0`
* **npm**: `>= 10.0.0`

### Installation
```bash
# Clone the repository
git clone https://github.com/your-org/esense-tco-engine.git

# Navigate to project directory
cd esense-tco-engine

# Install dependencies
npm install
```

### Running Locally
```bash
# Start Vite development server
npm run dev
```
Open `http://localhost:3000` in your browser to view the application.

### Building for Production
```bash
# Generate static production assets in dist/
npm run build

# Preview production build locally
npm run preview
```

---

## 🚀 CI/CD & Automated Workflows

The repository contains automated GitHub Actions workflows under `.github/workflows/`:

1. **GitHub Pages Static Deployment (`.github/workflows/deploy.yml`)**:
   - Automatically builds and deploys static site artifacts to GitHub Pages on pushes to the `main` branch.
   - Configured with Node.js 24 and the latest GitHub Actions runner components (`actions/checkout@v7`, `actions/setup-node@v7`, `actions/configure-pages@v6`, `actions/upload-pages-artifact@v5`, `actions/deploy-pages@v5`).

2. **Azure DevOps Mirroring (`.github/workflows/mirror-ado.yml`)**:
   - Runs on a **self-hosted Linux runner** tagged `[self-hosted, Linux, X64, mirror]`.
   - Automatically mirrors all branches, tags, ref updates, and deletions to an Azure DevOps (or on-prem TFS) repository using Personal Access Token (PAT) authentication (`ADO_REPO_URI` and `ADO_PAT`).

---

## 📄 License

Private & Proprietary — Developed for Esense Software. All rights reserved.
