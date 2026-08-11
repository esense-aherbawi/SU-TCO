import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Server,
  Calculator,
  ShieldCheck,
  Settings2,
  Cog,
  ChevronDown,
  TrendingUp,
  Info,
  Table as TableIcon,
  GraduationCap,
  Cloud,
  Moon,
  Sun,
  Download,
  FileSpreadsheet,
  FileText,
  Loader2,
  CheckCircle2,
} from "lucide-react";

function EsenseLogo({
  className = "h-10 w-auto",
  path1ClassName = "fill-[#1b3d6d] dark:fill-white",
  path2ClassName = "fill-primary-950 dark:fill-[#7b88d2]",
}: {
  className?: string;
  path1ClassName?: string;
  path2ClassName?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 79.269 27.811"
      className={className}
      overflow="visible"
    >
      <path
        className={path1ClassName}
        d="M 43.099 5.19 C 43.099 2.324 45.422 0 48.289 0 C 51.156 0 53.479 2.324 53.479 5.19 C 53.479 8.057 51.156 10.381 48.289 10.381 C 45.422 10.381 43.099 8.057 43.099 5.19 Z M 25.769 5.19 C 25.769 2.324 28.093 0 30.96 0 C 33.826 0 36.15 2.324 36.15 5.19 C 36.15 8.057 33.826 10.381 30.96 10.381 C 28.093 10.381 25.769 8.057 25.769 5.19 Z M 42.173 0 L 42.173 10.381 C 39.312 10.381 36.982 8.051 36.982 5.19 C 36.982 2.33 39.312 0 42.173 0 Z M 68.889 5.19 C 68.889 2.324 71.212 0 74.079 0 C 76.946 0 79.269 2.324 79.269 5.19 C 79.269 8.057 76.946 10.381 74.079 10.381 C 71.212 10.381 68.889 8.057 68.889 5.19 Z M 60.445 1.517 C 62.468 3.54 62.468 6.83 60.445 8.853 L 53.109 1.517 C 55.132 -0.506 58.422 -0.506 60.445 1.517 Z M 68.005 0.005 L 68.005 10.386 C 65.144 10.386 62.815 8.056 62.815 5.196 C 62.815 2.335 65.144 0.005 68.005 0.005 Z"
      />
      <path
        className={path2ClassName}
        d="M 6.416 14.713 C 10.626 14.713 12.628 17.492 12.628 21.374 C 12.628 21.558 12.588 21.926 12.588 22.11 L 3.086 22.11 C 3.086 24.296 4.7 25.502 7.152 25.502 C 8.726 25.502 10.033 25.073 11.096 24.521 L 12.199 26.381 C 11.545 26.81 9.645 27.811 6.866 27.811 C 2.105 27.811 0 24.95 0 21.333 C -0.02 17.635 2.187 14.713 6.416 14.713 Z M 3.086 20.128 L 9.666 20.128 C 9.522 18.084 8.235 16.879 6.416 16.879 C 4.557 16.879 3.249 18.125 3.086 20.128 Z M 17.717 18.227 C 17.717 20.496 23.867 19.474 23.867 23.888 C 23.867 26.585 21.599 27.729 18.943 27.729 C 17.287 27.729 15.285 27.402 14.161 26.769 L 14.897 24.726 C 16 25.155 17.349 25.522 18.616 25.522 C 20.005 25.522 20.986 25.012 20.986 23.99 C 20.986 21.579 14.815 22.743 14.815 18.289 C 14.815 15.694 16.94 14.713 19.494 14.713 C 20.986 14.713 22.355 15.04 23.663 15.673 L 22.968 17.676 C 22.008 17.247 20.782 16.899 19.76 16.899 C 18.595 16.92 17.717 17.308 17.717 18.227 Z M 32.184 14.713 C 36.394 14.713 38.396 17.492 38.396 21.374 C 38.396 21.558 38.355 21.926 38.355 22.11 L 28.874 22.11 C 28.874 24.296 30.488 25.502 32.94 25.502 C 34.514 25.502 35.821 25.073 36.884 24.521 L 37.987 26.381 C 37.333 26.81 35.433 27.811 32.654 27.811 C 27.893 27.811 25.788 24.95 25.788 21.333 C 25.768 17.635 27.954 14.713 32.184 14.713 Z M 28.874 20.128 L 35.454 20.128 C 35.31 18.084 34.023 16.879 32.204 16.879 C 30.325 16.879 29.017 18.125 28.874 20.128 Z M 43.954 27.443 L 40.93 27.443 L 40.93 15.081 L 43.954 15.081 L 43.954 16.797 C 44.506 15.632 45.936 14.713 48.041 14.713 C 51.106 14.713 52.863 16.695 52.863 20.516 L 52.863 27.423 L 49.839 27.423 L 49.839 20.7 C 49.839 18.289 48.92 17.124 46.978 17.124 C 45.078 17.124 43.954 18.289 43.954 20.7 Z M 58.585 18.227 C 58.585 20.496 64.736 19.474 64.736 23.888 C 64.736 26.585 62.468 27.729 59.811 27.729 C 58.176 27.729 56.153 27.402 55.03 26.769 L 55.765 24.726 C 56.869 25.155 58.217 25.522 59.484 25.522 C 60.874 25.522 61.855 25.012 61.855 23.99 C 61.855 21.579 55.683 22.743 55.683 18.289 C 55.683 15.694 57.809 14.713 60.363 14.713 C 61.855 14.713 63.224 15.04 64.531 15.673 L 63.837 17.676 C 62.876 17.247 61.65 16.899 60.628 16.899 C 59.464 16.92 58.585 17.308 58.585 18.227 Z M 73.052 14.713 C 77.262 14.713 79.265 17.492 79.265 21.374 C 79.265 21.558 79.224 21.926 79.224 22.11 L 69.742 22.11 C 69.742 24.296 71.356 25.502 73.809 25.502 C 75.382 25.502 76.69 25.073 77.752 24.521 L 78.856 26.381 C 78.202 26.81 76.302 27.811 73.522 27.811 C 68.761 27.811 66.657 24.95 66.657 21.333 C 66.616 17.635 68.823 14.713 73.052 14.713 Z M 69.742 20.128 L 76.322 20.128 C 76.179 18.084 74.892 16.879 73.073 16.879 C 71.193 16.879 69.885 18.125 69.742 20.128 Z"
      />
    </svg>
  );
}

function useUrlState(key: string, initialValue: number) {
  const [val, setVal] = useState<number>(() => {
    const params = new URLSearchParams(window.location.search);
    const param = params.get(key);
    if (param !== null && !isNaN(Number(param))) {
      return Number(param);
    }
    return initialValue;
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set(key, val.toString());
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }, [key, val]);

  return [val, setVal] as const;
}

function useUrlStateString(key: string, initialValue: string) {
  const [val, setVal] = useState<string>(() => {
    const params = new URLSearchParams(window.location.search);
    const param = params.get(key);
    if (param !== null) {
      return param;
    }
    return initialValue;
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set(key, val);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }, [key, val]);

  return [val, setVal] as const;
}

const formatMoney = (val: number, currency: string) => {
  if (currency === "USD") {
    return "$" + Math.round(val / 3.75).toLocaleString();
  }
  return "SAR " + Math.round(val).toLocaleString();
};

const formatNum = (val: number) => val.toLocaleString();

export default function App() {
  const [currency, setCurrency] = useUrlStateString("currency", "SAR");
  const [b5, setB5] = useUrlState("vms", 50);
  const [b6, setB6] = useUrlState("storage", 100);
  const [b7, setB7] = useUrlState("power", 600);
  const [b8, setB8] = useUrlState("hours", 120);
  const [b9, setB9] = useUrlState("rate", 100);

  const [b12, setB12] = useUrlState("onPremVmCost", 16000);
  const [b13, setB13] = useUrlState("onPremStorageCost", 3500);
  const [b14, setB14] = useUrlState("azureVmCost", 13800);
  const [b15, setB15] = useUrlState("azureStorageCost", 3240);

  const [egressCost, setEgressCost] = useUrlState("egress", 10000);
  const [complianceCost, setComplianceCost] = useUrlState("compliance", 50000);
  const [euVmCost, setEuVmCost] = useUrlState("euVmCost", 11500);
  const [euStorageCost, setEuStorageCost] = useUrlState("euStorageCost", 2700);
  const [ksaVmCost, setKsaVmCost] = useUrlState("ksaVmCost", 13800);
  const [ksaStorageCost, setKsaStorageCost] = useUrlState(
    "ksaStorageCost",
    3240,
  );

  const [migratorMode, setMigratorMode] = useUrlStateString("mode", "onprem");

  const [showConstants, setShowConstants] = useState(true);

  // Dark mode toggle
  const [isDark, setIsDark] = useState(false);

  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  // Calculations for On-Premise
  const isUSD = currency === "USD";
  const onPremHw = b5 * b12 + b6 * b13;
  const azureHw = b5 * b14 + b6 * b15;
  const hwSavings = onPremHw - azureHw;

  const onPremPower = b5 * b7 * 36;
  const azurePower = 0;
  const powerSavings = onPremPower - azurePower;

  const onPremLabor = b8 * b9 * 36;
  const azureLabor = onPremLabor * 0.75;
  const laborSavings = onPremLabor - azureLabor;

  const onPremTco = onPremHw + onPremPower + onPremLabor;
  const azureTco = azureHw + azurePower + azureLabor;
  const tcoSavings = onPremTco - azureTco;

  const netSavings = tcoSavings;
  const roi = azureTco === 0 ? 0 : (netSavings / azureTco) * 100;

  const upfrontCost = azureTco * 0.25;
  const monthlySavings = netSavings / 36;
  const rawPayback = upfrontCost / (monthlySavings || 1);
  const payback = Math.max(6, Math.min(24, Math.round(rawPayback)));

  // Calculations for Azure EU
  const baseEUEnergy = b5 * euVmCost + b6 * euStorageCost;
  const baseKSAEnergy = b5 * ksaVmCost + b6 * ksaStorageCost;
  const varHwEu = baseEUEnergy - baseKSAEnergy;

  const totalEUNetwork = egressCost * 36;
  const totalKSANetwork = egressCost * 0.15 * 36;
  const varPowerEu = totalEUNetwork - totalKSANetwork;

  const totalEUCompliance = complianceCost * 3;
  const totalKSACompliance = 0;
  const varLaborEu = totalEUCompliance - totalKSACompliance;

  const totalOnPremEu = baseEUEnergy + totalEUNetwork + totalEUCompliance;
  const totalAzureKsa = baseKSAEnergy + totalKSANetwork + totalKSACompliance;
  const totalSavingsEu = totalOnPremEu - totalAzureKsa;

  const roiEu =
    totalAzureKsa === 0 ? 0 : (totalSavingsEu / totalAzureKsa) * 100;
  const upfrontMigrationEu = totalAzureKsa * 0.15;
  const monthlySavingsEu = totalSavingsEu / 36;
  const rawPaybackEu = upfrontMigrationEu / (monthlySavingsEu || 1);
  const paybackMonthsEu = Math.max(3, Math.min(24, Math.round(rawPaybackEu)));

  // Display variables
  const displayNetSavings =
    migratorMode === "azure-eu" ? totalSavingsEu : netSavings;
  const displayRoi = migratorMode === "azure-eu" ? roiEu : roi;
  const displayPayback =
    migratorMode === "azure-eu" ? paybackMonthsEu : payback;

  const displayLegacyHw = migratorMode === "azure-eu" ? baseEUEnergy : onPremHw;
  const displayTargetHw = migratorMode === "azure-eu" ? baseKSAEnergy : azureHw;
  const displayVarHw = migratorMode === "azure-eu" ? varHwEu : hwSavings;

  const displayLegacyPower =
    migratorMode === "azure-eu" ? totalEUNetwork : onPremPower;
  const displayTargetPower =
    migratorMode === "azure-eu" ? totalKSANetwork : azurePower;
  const displayVarPower =
    migratorMode === "azure-eu" ? varPowerEu : powerSavings;

  const displayLegacyLabor =
    migratorMode === "azure-eu" ? totalEUCompliance : onPremLabor;
  const displayTargetLabor =
    migratorMode === "azure-eu" ? totalKSACompliance : azureLabor;
  const displayVarLabor =
    migratorMode === "azure-eu" ? varLaborEu : laborSavings;

  const displayLegacyTco =
    migratorMode === "azure-eu" ? totalOnPremEu : onPremTco;
  const displayTargetTco =
    migratorMode === "azure-eu" ? totalAzureKsa : azureTco;
  const displayTcoSavings =
    migratorMode === "azure-eu" ? totalSavingsEu : tcoSavings;

  const [isExportingPdf, setIsExportingPdf] = useState(false);
  const [exportNotification, setExportNotification] = useState<string | null>(
    null,
  );

  const handleExportCSV = () => {
    const isEu = migratorMode === "azure-eu";
    const currLabel = currency;
    const currRate = isUSD ? 3.75 : 1;

    const fmtVal = (val: number) => Math.round(val / currRate);
    const fmt = (val: number) =>
      `"${currLabel} ${fmtVal(val).toLocaleString()}"`;

    const rows: string[][] = [
      ["Saudi Arabia Azure Sovereign Cloud - TCO & Migration Report"],
      [
        "Report Date",
        new Date().toLocaleDateString() +
          " " +
          new Date().toLocaleTimeString(),
      ],
      [
        "Migration Scenario",
        isEu ? "Azure West Europe to Azure KSA" : "On-Premises to Azure KSA",
      ],
      ["Selected Currency", currLabel],
      [""],
      ["INPUT PARAMETERS AND CONFIGURATION"],
      ["Active Workloads (VMs)", b5.toString()],
      ["Hot Storage (TB)", b6.toString()],
      ...(isEu
        ? [
            ["Monthly Egress & Trans-border VPN (SAR)", egressCost.toString()],
            ["Annual Sovereign Audit Overhead (SAR)", complianceCost.toString()],
            ["Azure EU VM Cost / Mo (SAR)", euVmCost.toString()],
            ["Azure EU Storage Cost / TB / Mo (SAR)", euStorageCost.toString()],
            ["Azure KSA VM Cost / Mo (SAR)", ksaVmCost.toString()],
            ["Azure KSA Storage Cost / TB / Mo (SAR)", ksaStorageCost.toString()],
          ]
        : [
            ["Power & Facilities / VM / Mo (SAR)", b7.toString()],
            ["IT Management Hours / Mo", b8.toString()],
            ["IT Admin Hourly Rate (SAR)", b9.toString()],
            ["On-Prem VM Unit Cost (SAR)", b12.toString()],
            ["On-Prem Storage Unit Cost / TB (SAR)", b13.toString()],
            ["Azure KSA VM Unit Cost (SAR)", b14.toString()],
            ["Azure KSA Storage Unit Cost / TB (SAR)", b15.toString()],
          ]),
      [""],
      ["FINANCIAL EXECUTIVE KPI SUMMARY"],
      ["Net 3-Year Savings", fmt(displayNetSavings)],
      ["Return on Investment (ROI)", `${displayRoi.toFixed(1)}%`],
      ["Payback Horizon", `${displayPayback} Months`],
      ["Monthly Cost Reduction", fmt(displayNetSavings / 36)],
      [""],
      ["3-YEAR COST LEDGER MATRIX"],
      [
        "Cost Vector",
        isEu ? "Azure Europe (Legacy)" : "Legacy On-Premise",
        "Azure KSA Cloud",
        "3-Year Savings / Variance",
      ],
      [
        isEu ? "Core Cloud Compute & Storage" : "Hardware & Subscriptions",
        fmt(displayLegacyHw),
        fmt(displayTargetHw),
        fmt(displayVarHw),
      ],
      [
        isEu
          ? "Intl. Networking & Packet Egress"
          : "Power, Cooling & Facilities",
        fmt(displayLegacyPower),
        fmt(displayTargetPower),
        fmt(displayVarPower),
      ],
      [
        isEu ? "Compliance & Sovereignty Audits" : "Support & Maintenance",
        fmt(displayLegacyLabor),
        fmt(displayTargetLabor),
        fmt(displayVarLabor),
      ],
      [
        "TOTAL 3-YEAR TCO",
        fmt(displayLegacyTco),
        fmt(displayTargetTco),
        fmt(displayTcoSavings),
      ],
    ];

    const csvString =
      "\uFEFF" +
      rows
        .map((row) =>
          row.map((cell) => `"${(cell || "").replace(/"/g, '""')}"`).join(","),
        )
        .join("\n");

    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.setAttribute(
      "download",
      `Azure_KSA_TCO_${isEu ? "EU_Migrator" : "OnPrem_Migrator"}_${currLabel}.csv`,
    );
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setExportNotification(`CSV file exported successfully in ${currLabel}!`);
    setTimeout(() => setExportNotification(null), 4000);
  };

  const handleExportPDF = async () => {
    setIsExportingPdf(true);
    setExportNotification("Generating structured single-page executive PDF report...");

    await new Promise((resolve) => setTimeout(resolve, 300));

    try {
      const html2canvas = (await import("html2canvas-pro")).default;
      const { jsPDF } = await import("jspdf");

      const element = document.getElementById("pdf-executive-report-template");
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      const isEu = migratorMode === "azure-eu";
      pdf.save(
        `Azure_KSA_TCO_Executive_Report_${isEu ? "EU_Migrator" : "OnPrem_Migrator"}_${currency}.pdf`,
      );

      setExportNotification("Executive PDF report exported successfully!");
      setTimeout(() => setExportNotification(null), 4000);
    } catch (err) {
      console.error("PDF export error:", err);
      setExportNotification("Failed to export PDF report. Please try again.");
      setTimeout(() => setExportNotification(null), 4000);
    } finally {
      setIsExportingPdf(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-primary-950 text-slate-800 dark:text-slate-200 font-sans selection:bg-primary-100 dark:selection:bg-primary-900 p-4 md:p-8 transition-colors duration-300 relative">
      {/* Toast Notification Banner */}
      {exportNotification && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-5 right-5 z-50 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-700 dark:border-slate-300 text-xs md:text-sm font-semibold"
        >
          <CheckCircle2 size={18} className="text-emerald-400 dark:text-emerald-600 shrink-0" />
          <span>{exportNotification}</span>
        </motion.div>
      )}

      <motion.div
        id="tco-report-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto space-y-8 bg-slate-50 dark:bg-primary-950 p-2 md:p-4 rounded-3xl"
      >
        {/* Header Section */}
        <header className="flex flex-col gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex flex-wrap justify-between items-center gap-4 w-full">
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <EsenseLogo className="h-10 w-auto" />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200 dark:border-slate-700 shadow-inner text-[11px] md:text-xs font-semibold">
                <button
                  onClick={() => setMigratorMode("onprem")}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${migratorMode === "onprem" ? "bg-white dark:bg-slate-700 text-primary-700 dark:text-primary-300 shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`}
                >
                  On-Premises
                </button>
                <button
                  onClick={() => setMigratorMode("azure-eu")}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${migratorMode === "azure-eu" ? "bg-white dark:bg-slate-700 text-primary-700 dark:text-primary-300 shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`}
                >
                  Azure EU
                </button>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden text-[11px] md:text-xs font-bold p-1">
                  <button
                    onClick={() => setCurrency("SAR")}
                    className={`px-3 md:px-4 py-1.5 md:py-1.5 rounded-lg transition-all ${currency === "SAR" ? "bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`}
                  >
                    SAR
                  </button>
                  <button
                    onClick={() => setCurrency("USD")}
                    className={`px-3 md:px-4 py-1.5 md:py-1.5 rounded-lg transition-all ${currency === "USD" ? "bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`}
                  >
                    USD
                  </button>
                </div>
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2.5 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors focus:outline-none"
                >
                  {isDark ? (
                    <Sun size={18} className="md:w-4 md:h-4" />
                  ) : (
                    <Moon size={18} className="md:w-4 md:h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 w-full mt-2">
            <div className="max-w-2xl">
              {migratorMode === "onprem" ? (
                <>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 tracking-tight">
                    On-Premise to Azure KSA Cloud{" "}
                    <span className="text-primary-600 dark:text-primary-400">
                      TCO Engine
                    </span>
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
                    Hosting sensitive national personal data on unauthorized
                    platforms constitutes a violation of SDAIA’s Personal Data
                    Protection Law (PDPL). Migrating data to local Azure regions
                    within the Kingdom of Saudi Arabia avoids potential fines
                    and secures major government contracts.
                  </p>
                </>
              ) : (
                <>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 tracking-tight">
                    Azure Europe to Azure KSA{" "}
                    <span className="text-primary-600 dark:text-primary-400">
                      Migrator
                    </span>
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
                    Hosting sensitive national personal data on unauthorized
                    platforms constitutes a violation of SDAIA’s Personal Data
                    Protection Law (PDPL). Migrating data to local Azure regions
                    within the Kingdom of Saudi Arabia avoids potential fines
                    and secures major government contracts.
                  </p>
                </>
              )}
            </div>

            <div className="flex items-center gap-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl shadow-sm w-full lg:w-auto">
              <div className="h-12 w-12 shrink-0 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-xl flex items-center justify-center">
                <Calculator size={24} />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                  Regulatory Target
                </div>
                <div className="text-sm text-slate-800 dark:text-slate-200 font-semibold flex items-center gap-1.5 mt-0.5">
                  <ShieldCheck
                    size={16}
                    className="text-primary-600 dark:text-primary-400"
                  />
                  Localized KSA Sovereignty
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            {/* Input Parameters M3 Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[24px] p-6 shadow-sm flex flex-col gap-6 relative overflow-hidden transition-colors duration-300">
              <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-4">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <Settings2
                    size={20}
                    className="text-primary-600 dark:text-primary-400"
                  />
                  Business Assumptions
                </h3>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 font-bold bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded-lg">
                  Blueprint
                </span>
              </div>

              {migratorMode === "onprem" ? (
                <>
                  <Slider
                    label="On-Premise Servers (VMs)"
                    code="B5"
                    min={10}
                    max={300}
                    step={10}
                    value={b5}
                    onChange={setB5}
                    format={(v: number) => v + " VMs"}
                  />
                  <Slider
                    label="Enterprise Storage (TB)"
                    code="B6"
                    min={10}
                    max={1000}
                    step={10}
                    value={b6}
                    onChange={setB6}
                    format={(v: number) => v + " TB"}
                  />
                  <MoneySlider
                    label="Power & Support per VM/Mo"
                    code="B7"
                    min={100}
                    max={1500}
                    step={50}
                    value={b7}
                    onChange={setB7}
                    currency={currency}
                  />
                  <Slider
                    label="IT Management Support Hours"
                    code="B8"
                    min={20}
                    max={500}
                    step={10}
                    value={b8}
                    onChange={setB8}
                    format={(v: number) => v + " hrs"}
                  />
                  <MoneySlider
                    label="IT Admin Base Hourly Rate"
                    code="B9"
                    min={50}
                    max={250}
                    step={10}
                    value={b9}
                    onChange={setB9}
                    currency={currency}
                  />
                </>
              ) : (
                <>
                  <Slider
                    label="Active Workload Size (VMs)"
                    code="S1"
                    min={10}
                    max={300}
                    step={10}
                    value={b5}
                    onChange={setB5}
                    format={(v: number) => v + " VMs"}
                  />
                  <Slider
                    label="European Hot Storage (TB)"
                    code="S2"
                    min={10}
                    max={1000}
                    step={10}
                    value={b6}
                    onChange={setB6}
                    format={(v: number) => v + " TB"}
                  />
                  <MoneySlider
                    label="Monthly Trans-border Egress & VPN"
                    code="S3"
                    min={1000}
                    max={80000}
                    step={1000}
                    value={egressCost}
                    onChange={setEgressCost}
                    currency={currency}
                  />
                  <MoneySlider
                    label="Annual Sovereign Audit Overhead"
                    code="S4"
                    min={10000}
                    max={500000}
                    step={10000}
                    value={complianceCost}
                    onChange={setComplianceCost}
                    currency={currency}
                  />
                </>
              )}
            </div>

            {/* Constants Accordion M3 Card */}
            {showDetails && (
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[24px] p-2 shadow-sm transition-colors duration-300">
                <button
                  onClick={() => setShowConstants(!showConstants)}
                  className="w-full flex justify-between items-center text-left p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors focus:outline-none"
                >
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-2">
                    <Cog
                      size={18}
                      className="text-slate-400 dark:text-slate-500"
                    />
                    Constant Multipliers
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 dark:text-slate-500 transition-transform duration-300 ${showConstants ? "rotate-180" : ""}`}
                  />
                </button>

                {showConstants && (
                  <div className="flex flex-col gap-5 p-4 pt-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 rounded-b-xl mx-2 mb-2">
                    {migratorMode === "onprem" ? (
                      <>
                        <MoneyMiniSlider
                          label="On-Prem VM Cost"
                          code="B12"
                          min={10000}
                          max={50000}
                          step={1000}
                          value={b12}
                          onChange={setB12}
                          currency={currency}
                        />
                        <MoneyMiniSlider
                          label="On-Prem Storage Cost / TB"
                          code="B13"
                          min={1000}
                          max={8000}
                          step={100}
                          value={b13}
                          onChange={setB13}
                          currency={currency}
                        />
                        <MoneyMiniSlider
                          label="Azure VM Subscription"
                          code="B14"
                          min={8000}
                          max={30000}
                          step={500}
                          value={b14}
                          onChange={setB14}
                          currency={currency}
                        />
                        <MoneyMiniSlider
                          label="Azure Storage / TB"
                          code="B15"
                          min={1000}
                          max={5000}
                          step={100}
                          value={b15}
                          onChange={setB15}
                          currency={currency}
                        />
                      </>
                    ) : (
                      <>
                        <MoneyMiniSlider
                          label="Azure EU VM Cost"
                          code="C12"
                          min={10000}
                          max={50000}
                          step={1000}
                          value={euVmCost}
                          onChange={setEuVmCost}
                          currency={currency}
                        />
                        <MoneyMiniSlider
                          label="Azure EU Storage Cost / TB"
                          code="C13"
                          min={1000}
                          max={8000}
                          step={100}
                          value={euStorageCost}
                          onChange={setEuStorageCost}
                          currency={currency}
                        />
                        <MoneyMiniSlider
                          label="Azure KSA VM Cost"
                          code="C14"
                          min={10000}
                          max={50000}
                          step={1000}
                          value={ksaVmCost}
                          onChange={setKsaVmCost}
                          currency={currency}
                        />
                        <MoneyMiniSlider
                          label="Azure KSA Storage Cost / TB"
                          code="C15"
                          min={1000}
                          max={8000}
                          step={100}
                          value={ksaStorageCost}
                          onChange={setKsaStorageCost}
                          currency={currency}
                        />
                      </>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Insight Card */}
            {showDetails && (
              <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-900/50 rounded-[24px] p-6 shadow-sm transition-colors duration-300">
                <h4 className="text-sm font-bold text-primary-800 dark:text-primary-300 flex items-center gap-2 uppercase tracking-tight">
                  <ShieldCheck size={18} />
                  Zero Sovereign Risk Mandate
                </h4>
                <p className="text-sm text-primary-900/80 dark:text-primary-100/70 mt-3 leading-relaxed">
                  Hosting sensitive national personal data on unauthorized
                  platforms constitutes a violation of SDAIA’s Personal Data
                  Protection Law (PDPL). Migrating data to local Azure regions
                  within the Kingdom of Saudi Arabia avoids potential fines and
                  secures major government contracts.
                </p>
              </div>
            )}
          </motion.div>

          {/* Right Column Engine */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-8 flex flex-col gap-6"
          >
            {/* Export Actions Bar */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-[20px] shadow-sm flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-primary-50 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 rounded-xl flex items-center justify-center shrink-0">
                  <Download size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                    Export Financial Analysis & Reports
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Download custom CSV spreadsheets or PDF report with chart visualizers for {migratorMode === "azure-eu" ? "Azure EU to Azure KSA" : "On-Premises to Azure KSA"} in {currency}.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={handleExportCSV}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200/80 dark:border-emerald-800/80 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
                >
                  <FileSpreadsheet size={16} />
                  Export CSV
                </button>

                <button
                  onClick={handleExportPDF}
                  disabled={isExportingPdf}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-600 dark:bg-primary-500 text-white hover:bg-primary-700 dark:hover:bg-primary-600 disabled:opacity-50 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
                >
                  {isExportingPdf ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Generating PDF...
                    </>
                  ) : (
                    <>
                      <FileText size={16} />
                      Export PDF Report
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* KPI Metrics - Material 3 Style elevated surfaces with primary roles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <KpiCard
                title="3-Yr Net Savings"
                value={formatMoney(displayNetSavings, currency)}
                subtitle={
                  migratorMode === "azure-eu"
                    ? "Absolute Cost Reduction"
                    : "Net Value Gain (=D22)"
                }
                icon={<TrendingUp size={14} />}
                highlight
              />
              <KpiCard
                title={
                  migratorMode === "azure-eu"
                    ? "Strategic Return (ROI)"
                    : "Return on Investment"
                }
                value={`${displayRoi.toFixed(1)}%`}
                subtitle={
                  migratorMode === "azure-eu"
                    ? "Cross-region repatriation yield"
                    : "Computed Ratio (=B25/C22)"
                }
              />
              <KpiCard
                title={
                  migratorMode === "azure-eu"
                    ? "Breakeven Horizon"
                    : "Payback Period"
                }
                value={`${displayPayback} Months`}
                subtitle={
                  migratorMode === "azure-eu"
                    ? "Frictionless cloud-to-cloud transition"
                    : "Bounded Amortization"
                }
                icon={
                  <Info
                    size={14}
                    className="text-primary-500 dark:text-primary-400"
                  />
                }
              />
            </div>

            {/* Visualizer Chart */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[24px] p-6 shadow-sm transition-colors duration-300 h-80">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 tracking-tight mb-5 flex items-center gap-2">
                <TrendingUp
                  size={18}
                  className="text-primary-600 dark:text-primary-400"
                />
                3-Year Cumulative Cost Comparison
              </h3>
              <div className="h-64 w-full text-xs">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      {
                        name:
                          migratorMode === "azure-eu"
                            ? "Azure Europe"
                            : "On-Premise",
                        value: isUSD
                          ? displayLegacyTco / 3.75
                          : displayLegacyTco,
                      },
                      {
                        name: "Azure KSA",
                        value: isUSD
                          ? displayTargetTco / 3.75
                          : displayTargetTco,
                      },
                    ]}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      opacity={0.2}
                      vertical={false}
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: isDark ? "#94a3b8" : "#64748b" }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: isDark ? "#94a3b8" : "#64748b" }}
                      tickFormatter={(val) => `${val / 1000}k`}
                    />
                    <Tooltip
                      formatter={(val: number) => [
                        formatMoney(isUSD ? val * 3.75 : val, currency),
                        "TCO",
                      ]}
                      contentStyle={{
                        borderRadius: "12px",
                        border: "none",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                        backgroundColor: isDark ? "#0f172a" : "#ffffff",
                        color: isDark ? "#f8fafc" : "#0f172a",
                      }}
                    />
                    <Bar
                      dataKey="value"
                      fill={isDark ? "#7b88d2" : "#0A0D36"}
                      radius={[6, 6, 0, 0]}
                      maxBarSize={60}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="flex justify-center my-6">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              >
                {showDetails
                  ? "Hide Ledger & Details"
                  : "Show Ledger & Details"}
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${showDetails ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {showDetails && (
              <>
                {/* Data Table */}
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[24px] overflow-hidden shadow-sm transition-colors duration-300">
                  <div className="bg-slate-50 dark:bg-slate-800/80 px-6 py-5 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center flex-wrap gap-4">
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-100 tracking-tight flex items-center gap-2">
                      <TableIcon
                        size={18}
                        className="text-primary-600 dark:text-primary-400"
                      />
                      3-Year TCO Cost Ledger Matrix
                    </span>
                    <span className="text-[11px] bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-300 px-3 py-1.5 rounded-full shadow-sm border border-slate-100 dark:border-slate-600 font-mono font-medium">
                      Calculated in {currency}
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">
                          <th className="py-5 px-6">Cost Vector</th>
                          <th className="py-5 px-4 text-right">
                            {migratorMode === "azure-eu"
                              ? "Azure Europe (Legacy)"
                              : "Legacy On-Premise"}
                          </th>
                          <th className="py-5 px-4 text-right">
                            Azure KSA Cloud
                          </th>
                          <th className="py-5 px-6 text-right text-primary-700 dark:text-primary-400">
                            3-Yr Variance
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                        <TableRow
                          title={
                            migratorMode === "azure-eu"
                              ? "Core Cloud Compute & Storage"
                              : "Hardware & Subscriptions"
                          }
                          onPrem={displayLegacyHw}
                          azure={displayTargetHw}
                          variance={displayVarHw}
                          formulaOnPrem={
                            migratorMode === "azure-eu"
                              ? "=(S1*C12)+(S2*C13)"
                              : "=(B5*B12)+(B6*B13)"
                          }
                          formulaAzure={
                            migratorMode === "azure-eu"
                              ? "=(S1*C14)+(S2*C15)"
                              : "=(B5*B14)+(B6*B15)"
                          }
                          currency={currency}
                        />

                        <TableRow
                          title={
                            migratorMode === "azure-eu"
                              ? "Intl. Networking & Packet Egress"
                              : "Power, Cooling, & Facilities"
                          }
                          onPrem={displayLegacyPower}
                          azure={displayTargetPower}
                          variance={displayVarPower}
                          formulaOnPrem={
                            migratorMode === "azure-eu" ? "=S3*36" : "=B5*B7*36"
                          }
                          formulaAzure={
                            migratorMode === "azure-eu" ? "=(S3*0.15)*36" : "0"
                          }
                          currency={currency}
                        />

                        <TableRow
                          title={
                            migratorMode === "azure-eu"
                              ? "Compliance & Sovereignty Audits"
                              : "Support & Maintenance"
                          }
                          onPrem={displayLegacyLabor}
                          azure={displayTargetLabor}
                          variance={displayVarLabor}
                          formulaOnPrem={
                            migratorMode === "azure-eu" ? "=S4*3" : "=B8*B9*36"
                          }
                          formulaAzure={
                            migratorMode === "azure-eu" ? "0" : "=B21*0.75"
                          }
                          currency={currency}
                        />

                        <tr className="bg-slate-50 dark:bg-slate-800/40 font-bold border-t border-slate-200 dark:border-slate-700">
                          <td className="py-6 px-6 text-slate-900 dark:text-slate-100 uppercase text-xs tracking-wider">
                            <div>Total Cost of Ownership</div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 font-normal normal-case">
                              Cumulative 36-month horizon
                            </div>
                          </td>
                          <td className="py-6 px-4 text-right font-mono text-slate-700 dark:text-slate-300">
                            {formatMoney(displayLegacyTco, currency)}
                          </td>
                          <td className="py-6 px-4 text-right font-mono text-slate-700 dark:text-slate-300">
                            {formatMoney(displayTargetTco, currency)}
                          </td>
                          <td className="py-6 px-6 text-right font-mono text-primary-700 dark:text-primary-400 text-lg">
                            {formatMoney(displayTcoSavings, currency)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Explanation Boxes */}
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[24px] p-6 shadow-sm transition-colors duration-300">
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 tracking-tight mb-5 flex items-center gap-2">
                    <GraduationCap
                      size={18}
                      className="text-primary-600 dark:text-primary-400"
                    />
                    Payback Equation Logic
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <InfoBox
                      label="Term 1"
                      title="Upfront Setup"
                      desc="Professional migration fees modeled at 25% of your target Azure budget."
                      code="C22 * 0.25"
                    />
                    <InfoBox
                      label="Term 2"
                      title="Monthly Yield"
                      desc="Divides cumulative net savings over 36 months to calculate monthly operational yield."
                      code="B25 / 36"
                    />
                    <InfoBox
                      label="Bounds"
                      title="Boundary Cap"
                      desc="Keeps outputs bounded between realistic 6-month and 24-month corporate horizons."
                      code="MAX(6, MIN(24))"
                    />
                  </div>
                </div>

                {/* Footer Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-[24px] shadow-sm flex items-start gap-4 transition-colors duration-300">
                    <div className="p-3 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-2xl">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="text-slate-800 dark:text-slate-100 font-bold text-sm">
                        Strategic De-Risking
                      </h4>
                      <p className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 leading-relaxed">
                        Transitioning from legacy "Technical Debt" to a secure,
                        localized foundation.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-[24px] shadow-sm flex items-start gap-4 transition-colors duration-300">
                    <div className="p-3 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-2xl">
                      <Cloud size={24} />
                    </div>
                    <div>
                      <h4 className="text-slate-800 dark:text-slate-100 font-bold text-sm">
                        Velocity Optimization
                      </h4>
                      <p className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 leading-relaxed">
                        Transitioning to continuous automated pipelines ready
                        for rapid digital service scaling.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>

        {/* Footer Version */}
        <div className="mt-8 text-center text-[11px] text-slate-400 dark:text-slate-500 font-mono">
          Ver June 2026
        </div>
      </motion.div>

      {/* Off-screen Structured Executive PDF Document Template (A4 Single-Page Fit) */}
      <div
        id="pdf-executive-report-template"
        className="fixed -left-[9999px] -top-[9999px] w-[794px] min-h-[1123px] bg-white text-slate-900 p-8 font-sans flex flex-col justify-between border border-slate-200"
        style={{ boxSizing: "border-box" }}
      >
        <div className="space-y-6">
          {/* Report Header with Official Company Branding */}
          <div className="border-b-2 border-primary-600 pb-3 space-y-2.5">
            {/* Top Bar: Brand, Scope Badge, Date & Currency */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200 flex items-center justify-center">
                  <EsenseLogo className="h-7 w-auto" path1ClassName="fill-[#1b3d6d]" path2ClassName="fill-[#0f172a]" />
                </div>
                <div className="h-4 w-[1px] bg-slate-300"></div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary-800">
                  Azure KSA Sovereign Cloud
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-primary-50 text-primary-800 rounded-md text-[11px] font-bold border border-primary-200 whitespace-nowrap">
                  {migratorMode === "azure-eu"
                    ? "Azure West Europe → Azure KSA"
                    : "On-Premises → Azure KSA"}
                </span>
                <span className="text-[11px] text-slate-500 font-medium whitespace-nowrap">
                  {new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                </span>
                <span className="text-[11px] text-slate-800 font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-200 whitespace-nowrap">
                  {currency}
                </span>
              </div>
            </div>

            {/* Title & Feasibility Subtitle */}
            <div className="pt-0.5">
              <h1 className="text-xl font-black text-slate-900 tracking-tight">
                Executive TCO & Migration Feasibility Report
              </h1>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Financial analysis and cost optimization study for enterprise workload deployment in KSA
              </p>
            </div>
          </div>

          {/* Executive Summary Cards */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              1. Executive Financial Highlights
            </h2>
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-emerald-50/80 border border-emerald-200 p-3.5 rounded-xl">
                <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-wide">
                  Net 3-Yr Savings
                </div>
                <div className="text-lg font-black text-emerald-700 mt-0.5">
                  {formatMoney(displayNetSavings, currency)}
                </div>
                <div className="text-[9px] text-emerald-600 font-medium mt-0.5">
                  Cost Reduction Gain
                </div>
              </div>

              <div className="bg-primary-50/80 border border-primary-200 p-3.5 rounded-xl">
                <div className="text-[10px] font-bold text-primary-800 uppercase tracking-wide">
                  Return on Investment
                </div>
                <div className="text-lg font-black text-primary-700 mt-0.5">
                  {displayRoi.toFixed(1)}%
                </div>
                <div className="text-[9px] text-primary-600 font-medium mt-0.5">
                  Efficiency Yield
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                <div className="text-[10px] font-bold text-slate-600 uppercase tracking-wide">
                  Payback Horizon
                </div>
                <div className="text-lg font-black text-slate-800 mt-0.5">
                  {displayPayback} Months
                </div>
                <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                  Breakeven Period
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                <div className="text-[10px] font-bold text-slate-600 uppercase tracking-wide">
                  Monthly Savings
                </div>
                <div className="text-lg font-black text-slate-800 mt-0.5">
                  {formatMoney(displayNetSavings / 36, currency)}
                </div>
                <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                  OPEX Monthly Variance
                </div>
              </div>
            </div>
          </div>

          {/* Scope & Parameters Table */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              2. Migration Scope & Workload Profile
            </h2>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 grid grid-cols-4 gap-3 text-xs">
              <div>
                <div className="text-[10px] text-slate-500 font-medium">Active Compute Workloads</div>
                <div className="font-bold text-slate-900 text-sm mt-0.5">{b5} Virtual Machines</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-medium">Hot Cloud Storage</div>
                <div className="font-bold text-slate-900 text-sm mt-0.5">{b6} TB</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-medium">Baseline Environment</div>
                <div className="font-bold text-slate-900 text-sm mt-0.5">
                  {migratorMode === "azure-eu" ? "Azure West Europe" : "On-Premises Data Center"}
                </div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-medium">Target Sovereign Cloud</div>
                <div className="font-bold text-primary-700 text-sm mt-0.5">Azure Saudi Arabia (KSA)</div>
              </div>
            </div>
          </div>

          {/* Financial Ledger Matrix */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              3. Three-Year Total Cost of Ownership (TCO) Comparison Matrix
            </h2>
            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
                  <tr>
                    <th className="p-2.5">Cost Vector / Category</th>
                    <th className="p-2.5 text-right">
                      {migratorMode === "azure-eu" ? "Azure EU (Legacy)" : "On-Premise (Legacy)"}
                    </th>
                    <th className="p-2.5 text-right text-primary-800">Azure KSA (Target)</th>
                    <th className="p-2.5 text-right text-emerald-700">3-Yr Net Variance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  <tr>
                    <td className="p-2.5 font-medium">
                      {migratorMode === "azure-eu" ? "Core Compute & Storage Services" : "Hardware & Subscriptions"}
                    </td>
                    <td className="p-2.5 text-right">{formatMoney(displayLegacyHw, currency)}</td>
                    <td className="p-2.5 text-right font-medium">{formatMoney(displayTargetHw, currency)}</td>
                    <td className="p-2.5 text-right font-bold text-emerald-700">{formatMoney(displayVarHw, currency)}</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-medium">
                      {migratorMode === "azure-eu"
                        ? "Intl. Network & Cross-Border Packet Egress"
                        : "Power, Cooling & Facilities"}
                    </td>
                    <td className="p-2.5 text-right">{formatMoney(displayLegacyPower, currency)}</td>
                    <td className="p-2.5 text-right font-medium">{formatMoney(displayTargetPower, currency)}</td>
                    <td className="p-2.5 text-right font-bold text-emerald-700">{formatMoney(displayVarPower, currency)}</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-medium">
                      {migratorMode === "azure-eu"
                        ? "Sovereignty Compliance & Annual Audits"
                        : "IT Support & System Management"}
                    </td>
                    <td className="p-2.5 text-right">{formatMoney(displayLegacyLabor, currency)}</td>
                    <td className="p-2.5 text-right font-medium">{formatMoney(displayTargetLabor, currency)}</td>
                    <td className="p-2.5 text-right font-bold text-emerald-700">{formatMoney(displayVarLabor, currency)}</td>
                  </tr>
                  <tr className="bg-slate-50 font-black text-slate-900 border-t-2 border-slate-300">
                    <td className="p-3 text-sm">TOTAL 3-YEAR TCO</td>
                    <td className="p-3 text-right text-sm">{formatMoney(displayLegacyTco, currency)}</td>
                    <td className="p-3 text-right text-sm text-primary-700">{formatMoney(displayTargetTco, currency)}</td>
                    <td className="p-3 text-right text-sm text-emerald-600">{formatMoney(displayTcoSavings, currency)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Business Drivers & Value Proposition */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              4. Strategic Value & Sovereign Benefits
            </h2>
            <div className="grid grid-cols-3 gap-3">
              <div className="border border-slate-200 p-3 rounded-xl bg-slate-50/50">
                <div className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-primary-600"></span>
                  Data Sovereignty Compliance
                </div>
                <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                  Zero trans-border egress risk & direct compliance with NCA, NDMO, and Kingdom data localization frameworks.
                </p>
              </div>
              <div className="border border-slate-200 p-3 rounded-xl bg-slate-50/50">
                <div className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
                  Ultra-Low Local Latency
                </div>
                <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                  Sub-10ms latency across KSA networks, significantly enhancing enterprise application and database response times.
                </p>
              </div>
              <div className="border border-slate-200 p-3 rounded-xl bg-slate-50/50">
                <div className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                  OPEX Cost Optimization
                </div>
                <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                  Predictable cloud expenditure model yielding {displayRoi.toFixed(1)}% ROI and {displayPayback} months breakeven horizon.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Report Footer */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500">
          <div className="flex items-center gap-2">
            <EsenseLogo className="h-4 w-auto opacity-70" path1ClassName="fill-[#1b3d6d]" path2ClassName="fill-[#0f172a]" />
            <span>Saudi Arabia Azure Sovereign Cloud Migration Calculator</span>
          </div>
          <div className="font-medium">Esense • Confidential Executive Summary</div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// UI Components
// ----------------------------------------------------

const Slider = ({
  label,
  code,
  value,
  min,
  max,
  step,
  onChange,
  format = (v: number) => v.toString(),
}: any) => (
  <div className="flex flex-col gap-3">
    <div className="flex justify-between items-end">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
          {label}
        </label>
        <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-md w-max font-mono font-bold border border-slate-200/50 dark:border-slate-700/50">
          {code}
        </span>
      </div>
      <span className="text-primary-700 dark:text-primary-300 font-bold bg-primary-50/80 dark:bg-primary-900/30 px-3 py-1.5 rounded-xl border border-primary-100 dark:border-primary-800 text-sm">
        {format(value)}
      </span>
    </div>
    <div className="relative flex items-center">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500/50 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-primary-600 [&::-webkit-slider-thumb]:dark:bg-primary-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md hover:[&::-webkit-slider-thumb]:bg-primary-700 hover:[&::-webkit-slider-thumb]:dark:bg-primary-400 [&::-webkit-slider-thumb]:transition-colors"
      />
    </div>
  </div>
);

const MiniSlider = ({
  label,
  code,
  value,
  min,
  max,
  step,
  onChange,
  format = (v: number) => v.toString(),
}: any) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs text-slate-600 dark:text-slate-400 flex justify-between font-medium">
      <span>
        {label}{" "}
        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono ml-1">
          ({code})
        </span>
      </span>
      <span className="text-slate-800 dark:text-slate-200 font-bold">
        {format(value)}
      </span>
    </label>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full appearance-none cursor-pointer focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:bg-slate-500 [&::-webkit-slider-thumb]:dark:bg-slate-400 [&::-webkit-slider-thumb]:rounded-full hover:[&::-webkit-slider-thumb]:bg-slate-600 hover:[&::-webkit-slider-thumb]:dark:bg-slate-300"
    />
  </div>
);

const KpiCard = ({ title, value, subtitle, icon, highlight = false }: any) => (
  <div
    className={`p-6 rounded-[24px] border ${highlight ? "bg-primary-600 border-primary-500 text-white" : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-800 dark:text-slate-200"} shadow-sm flex flex-col gap-3 relative overflow-hidden group transition-colors duration-300`}
  >
    <div
      className={`text-xs font-bold uppercase tracking-wider flex justify-between ${highlight ? "text-primary-200" : "text-slate-500 dark:text-slate-400"}`}
    >
      <span>{title}</span>
    </div>
    <div
      className={`text-3xl font-extrabold tracking-tight ${highlight ? "text-white" : "text-slate-900 dark:text-white"}`}
    >
      {value}
    </div>
    <div
      className={`text-[11px] font-medium flex items-center gap-1.5 ${highlight ? "text-primary-100" : "text-slate-500 dark:text-slate-400"}`}
    >
      {icon}
      <span>{subtitle}</span>
    </div>
  </div>
);

const TableRow = ({
  title,
  onPrem,
  azure,
  variance,
  formulaOnPrem,
  formulaAzure,
  currency,
}: any) => (
  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
    <td className="py-5 px-6">
      <div className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
        {title}
      </div>
      <div className="text-[10px] text-slate-400 dark:text-slate-500 font-mono flex flex-col sm:flex-row gap-x-2 gap-y-1">
        <span>Prem: {formulaOnPrem}</span>
        <span className="hidden sm:inline text-slate-300 dark:text-slate-600">
          |
        </span>
        <span>Asz: {formulaAzure}</span>
      </div>
    </td>
    <td className="py-5 px-4 text-right font-mono font-medium text-slate-600 dark:text-slate-400">
      {formatMoney(onPrem, currency)}
    </td>
    <td className="py-5 px-4 text-right font-mono font-medium text-slate-600 dark:text-slate-400">
      {formatMoney(azure, currency)}
    </td>
    <td className="py-5 px-6 text-right font-mono font-bold text-primary-600 dark:text-primary-400">
      {formatMoney(variance, currency)}
    </td>
  </tr>
);

const InfoBox = ({ label, title, desc, code }: any) => (
  <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl">
    <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex flex-col items-start gap-2">
      <span className="text-[10px] font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 bg-primary-100/50 dark:bg-primary-900/30 px-2 py-0.5 rounded-lg border border-primary-200/50 dark:border-primary-800/30">
        {label}
      </span>
      <span className="text-sm">{title}</span>
    </h4>
    <div className="text-[10px] font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 px-2 py-1 rounded w-max mb-2">
      {code}
    </div>
    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
      {desc}
    </p>
  </div>
);

const MoneySlider = ({
  label,
  code,
  value,
  min,
  max,
  step,
  onChange,
  currency,
}: any) => {
  const isUSD = currency === "USD";
  const cRate = 3.75;

  const cMin = isUSD ? Math.floor(min / cRate) : min;
  const cMax = isUSD ? Math.ceil(max / cRate) : max;

  let cStep = step;
  if (isUSD) {
    if (step >= 1000) cStep = 250;
    else if (step >= 500) cStep = 100;
    else if (step >= 100) cStep = 25;
    else if (step >= 50) cStep = 10;
    else cStep = 5;
  }

  const cValue = isUSD ? Math.round(value / cRate) : value;

  const handleChange = (newVal: number) => {
    onChange(isUSD ? newVal * cRate : newVal);
  };

  const format = (v: number) =>
    isUSD ? "$" + v.toLocaleString() : "SAR " + v.toLocaleString();

  return (
    <Slider
      label={label}
      code={code}
      min={cMin}
      max={cMax}
      step={cStep}
      value={cValue}
      onChange={handleChange}
      format={format}
    />
  );
};

const MoneyMiniSlider = ({
  label,
  code,
  value,
  min,
  max,
  step,
  onChange,
  currency,
}: any) => {
  const isUSD = currency === "USD";
  const cRate = 3.75;

  const cMin = isUSD ? Math.floor(min / cRate) : min;
  const cMax = isUSD ? Math.ceil(max / cRate) : max;

  let cStep = step;
  if (isUSD) {
    if (step >= 1000) cStep = 250;
    else if (step >= 500) cStep = 100;
    else if (step >= 100) cStep = 25;
    else if (step >= 50) cStep = 10;
    else cStep = 5;
  }

  const cValue = isUSD ? Math.round(value / cRate) : value;

  const handleChange = (newVal: number) => {
    onChange(isUSD ? newVal * cRate : newVal);
  };

  const format = (v: number) =>
    isUSD ? "$" + v.toLocaleString() : "SAR " + v.toLocaleString();

  return (
    <MiniSlider
      label={label}
      code={code}
      min={cMin}
      max={cMax}
      step={cStep}
      value={cValue}
      onChange={handleChange}
      format={format}
    />
  );
};
