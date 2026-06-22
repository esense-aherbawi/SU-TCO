import React, { useState, useEffect } from 'react';
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
  Sun
} from 'lucide-react';

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
  if (currency === 'USD') {
    return "$" + Math.round(val / 3.75).toLocaleString();
  }
  return "SAR " + Math.round(val).toLocaleString();
};

const formatNum = (val: number) => val.toLocaleString();

export default function App() {
  const [currency, setCurrency] = useUrlStateString('currency', 'SAR');
  const [b5, setB5] = useUrlState('vms', 50);
  const [b6, setB6] = useUrlState('storage', 100);
  const [b7, setB7] = useUrlState('power', 600);
  const [b8, setB8] = useUrlState('hours', 120);
  const [b9, setB9] = useUrlState('rate', 100);

  const [b12, setB12] = useUrlState('onPremVmCost', 25000);
  const [b13, setB13] = useUrlState('onPremStorageCost', 3200);
  const [b14, setB14] = useUrlState('azureVmCost', 15000);
  const [b15, setB15] = useUrlState('azureStorageCost', 2200);

  const [showConstants, setShowConstants] = useState(false);

  // Dark mode toggle
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  // Calculations
  const onPremHw = (b5 * b12) + (b6 * b13);
  const azureHw = (b5 * b14) + (b6 * b15);
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

  return (
    <div className="min-h-screen bg-[#f4f6f8] dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-sans selection:bg-blue-100 dark:selection:bg-blue-900 p-4 md:p-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <header className="flex flex-col gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex flex-wrap justify-between items-center gap-4 w-full">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-blue-700 dark:text-blue-400 uppercase bg-blue-100/80 dark:bg-blue-900/40 px-3 py-1 rounded-full">
                <Server size={14} />
                <span className="hidden sm:inline">Sovereign Financial Sandbox</span>
                <span className="sm:hidden">Sandbox</span>
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-200/50 dark:bg-slate-800/50 px-2.5 py-1 rounded-full border border-slate-200/50 dark:border-slate-700/50">
                Ver 2026.1
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden text-[10px] md:text-sm font-bold">
                <button 
                  onClick={() => setCurrency('SAR')} 
                  className={`px-3 md:px-4 py-1.5 md:py-2 transition-colors ${currency === 'SAR' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'}`}>
                  SAR
                </button>
                <button 
                  onClick={() => setCurrency('USD')} 
                  className={`px-3 md:px-4 py-1.5 md:py-2 transition-colors ${currency === 'USD' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'}`}>
                  USD
                </button>
              </div>
              <button 
                onClick={() => setIsDark(!isDark)}
                className="p-2 md:p-2.5 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full shadow-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors focus:outline-none"
              >
                {isDark ? <Sun size={18} className="md:w-5 md:h-5" /> : <Moon size={18} className="md:w-5 md:h-5" />}
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 w-full">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 tracking-tight">
                On-Premise to Azure KSA Cloud <span className="text-blue-600 dark:text-blue-400">TCO Engine</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
                Dynamic CFO model tracking structural cost-abatement ledger parameters and payback structures against SDAIA PDPL & NCA governance standards.
              </p>
            </div>
            
            <div className="flex items-center gap-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl shadow-sm w-full lg:w-auto">
              <div className="h-12 w-12 shrink-0 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
                <Calculator size={24} />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Regulatory Target</div>
                <div className="text-sm text-slate-800 dark:text-slate-200 font-semibold flex items-center gap-1.5 mt-0.5">
                  <ShieldCheck size={16} className="text-blue-600 dark:text-blue-400" />
                  Localized KSA Sovereignty
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column Controls */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Input Parameters M3 Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[24px] p-6 shadow-sm flex flex-col gap-6 relative overflow-hidden transition-colors duration-300">
              <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-4">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <Settings2 size={20} className="text-blue-600 dark:text-blue-400" />
                  Business Assumptions
                </h3>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 font-bold bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded-lg">Blueprint</span>
              </div>

              <Slider label="On-Premise Servers (VMs)" code="B5" min={10} max={300} step={10} value={b5} onChange={setB5} format={(v: number) => v + " VMs"} />
              <Slider label="Enterprise Storage (TB)" code="B6" min={10} max={1000} step={10} value={b6} onChange={setB6} format={(v: number) => v + " TB"} />
              <MoneySlider label="Power & Support per VM/Mo" code="B7" min={100} max={1500} step={50} value={b7} onChange={setB7} currency={currency} />
              <Slider label="IT Management Support Hours" code="B8" min={20} max={500} step={10} value={b8} onChange={setB8} format={(v: number) => v + " hrs"} />
              <MoneySlider label="IT Admin Base Hourly Rate" code="B9" min={50} max={250} step={10} value={b9} onChange={setB9} currency={currency} />
            </div>

            {/* Constants Accordion M3 Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[24px] p-2 shadow-sm transition-colors duration-300">
              <button 
                onClick={() => setShowConstants(!showConstants)} 
                className="w-full flex justify-between items-center text-left p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors focus:outline-none"
              >
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <Cog size={18} className="text-slate-400 dark:text-slate-500" />
                  Constant Multipliers
                </span>
                <ChevronDown size={18} className={`text-slate-400 dark:text-slate-500 transition-transform duration-300 ${showConstants ? 'rotate-180' : ''}`} />
              </button>
              
              {showConstants && (
                <div className="flex flex-col gap-5 p-4 pt-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 rounded-b-xl mx-2 mb-2">
                  <MoneyMiniSlider label="On-Prem VM Cost" code="B12" min={10000} max={50000} step={1000} value={b12} onChange={setB12} currency={currency} />
                  <MoneyMiniSlider label="On-Prem Storage Cost / TB" code="B13" min={1000} max={8000} step={100} value={b13} onChange={setB13} currency={currency} />
                  <MoneyMiniSlider label="Azure VM Subscription" code="B14" min={8000} max={30000} step={500} value={b14} onChange={setB14} currency={currency} />
                  <MoneyMiniSlider label="Azure Storage / TB" code="B15" min={1000} max={5000} step={100} value={b15} onChange={setB15} currency={currency} />
                </div>
              )}
            </div>

            {/* Insight Card */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/50 rounded-[24px] p-6 shadow-sm transition-colors duration-300">
              <h4 className="text-sm font-bold text-blue-800 dark:text-blue-300 flex items-center gap-2 uppercase tracking-tight">
                <ShieldCheck size={18} />
                Zero Sovereign Risk Mandate
              </h4>
              <p className="text-sm text-blue-900/80 dark:text-blue-100/70 mt-3 leading-relaxed">
                Hosting sensitive national profiles on unauthorized platforms violates <strong className="dark:text-white">SDAIA PDPL</strong>. Repatriating to Local KSA Azure regions eliminates up to <strong className="text-blue-700 dark:text-blue-400">SAR 5,000,000</strong> in potential fines and secures large government tender biddings.
              </p>
            </div>
          </div>

          {/* Right Column Engine */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* KPI Metrics - Material 3 Style elevated surfaces with primary roles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <KpiCard 
                title="3-Yr Net Savings" 
                value={formatMoney(netSavings, currency)} 
                subtitle="Net Value Gain (=D22)" 
                icon={<TrendingUp size={14} />} 
                highlight 
              />
              <KpiCard 
                title="Return on Investment" 
                value={`${roi.toFixed(1)}%`} 
                subtitle="Computed Ratio (=B25/C22)" 
              />
              <KpiCard 
                title="Payback Period" 
                value={`${payback} Months`} 
                subtitle="Bounded Amortization" 
                icon={<Info size={14} className="text-blue-500 dark:text-blue-400" />} 
              />
            </div>

            {/* Data Table */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[24px] overflow-hidden shadow-sm transition-colors duration-300">
              <div className="bg-slate-50 dark:bg-slate-800/80 px-6 py-5 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center flex-wrap gap-4">
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100 tracking-tight flex items-center gap-2">
                  <TableIcon size={18} className="text-blue-600 dark:text-blue-400" />
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
                      <th className="py-5 px-4 text-right">Legacy On-Premise</th>
                      <th className="py-5 px-4 text-right">Azure KSA Cloud</th>
                      <th className="py-5 px-6 text-right text-blue-700 dark:text-blue-400">3-Yr Variance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                    
                    <TableRow 
                      title="Hardware & Subscriptions" 
                      onPrem={onPremHw} 
                      azure={azureHw} 
                      variance={hwSavings} 
                      formulaOnPrem="=(B5*B12)+(B6*B13)" 
                      formulaAzure="=(B5*B14)+(B6*B15)"
                      currency={currency}
                    />
                    
                    <TableRow 
                      title="Power, Cooling, & Facilities" 
                      onPrem={onPremPower} 
                      azure={azurePower} 
                      variance={powerSavings} 
                      formulaOnPrem="=B5*B7*36" 
                      formulaAzure="0"
                      currency={currency}
                    />

                    <TableRow 
                      title="Support & Maintenance" 
                      onPrem={onPremLabor} 
                      azure={azureLabor} 
                      variance={laborSavings} 
                      formulaOnPrem="=B8*B9*36" 
                      formulaAzure="=B21*0.75"
                      currency={currency}
                    />

                    <tr className="bg-slate-50 dark:bg-slate-800/40 font-bold border-t border-slate-200 dark:border-slate-700">
                      <td className="py-6 px-6 text-slate-900 dark:text-slate-100 uppercase text-xs tracking-wider">
                        <div>Total Cost of Ownership</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 font-normal normal-case">Cumulative 36-month horizon</div>
                      </td>
                      <td className="py-6 px-4 text-right font-mono text-slate-700 dark:text-slate-300">{formatMoney(onPremTco, currency)}</td>
                      <td className="py-6 px-4 text-right font-mono text-slate-700 dark:text-slate-300">{formatMoney(azureTco, currency)}</td>
                      <td className="py-6 px-6 text-right font-mono text-blue-700 dark:text-blue-400 text-lg">{formatMoney(tcoSavings, currency)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Explanation Boxes */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[24px] p-6 shadow-sm transition-colors duration-300">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 tracking-tight mb-5 flex items-center gap-2">
                <GraduationCap size={18} className="text-blue-600 dark:text-blue-400" />
                Payback Equation Logic
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InfoBox label="Term 1" title="Upfront Setup" desc="Professional migration fees modeled at 25% of your target Azure budget." code="C22 * 0.25" />
                <InfoBox label="Term 2" title="Monthly Yield" desc="Divides cumulative net savings over 36 months to calculate monthly operational yield." code="B25 / 36" />
                <InfoBox label="Bounds" title="Boundary Cap" desc="Keeps outputs bounded between realistic 6-month and 24-month corporate horizons." code="MAX(6, MIN(24))" />
              </div>
            </div>

            {/* Footer Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-[24px] shadow-sm flex items-start gap-4 transition-colors duration-300">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-slate-800 dark:text-slate-100 font-bold text-sm">Strategic De-Risking</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 leading-relaxed">Transitioning from legacy "Technical Debt" to a secure, localized foundation.</p>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-[24px] shadow-sm flex items-start gap-4 transition-colors duration-300">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl">
                  <Cloud size={24} />
                </div>
                <div>
                  <h4 className="text-slate-800 dark:text-slate-100 font-bold text-sm">Velocity Optimization</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 leading-relaxed">Transitioning to continuous automated pipelines ready for rapid digital service scaling.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// UI Components
// ----------------------------------------------------

const Slider = ({ label, code, value, min, max, step, onChange, format = (v: number) => v.toString() }: any) => (
  <div className="flex flex-col gap-3">
    <div className="flex justify-between items-end">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
          {label}
        </label>
        <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-md w-max font-mono font-bold border border-slate-200/50 dark:border-slate-700/50">{code}</span>
      </div>
      <span className="text-blue-700 dark:text-blue-300 font-bold bg-blue-50/80 dark:bg-blue-900/30 px-3 py-1.5 rounded-xl border border-blue-100 dark:border-blue-800 text-sm">{format(value)}</span>
    </div>
    <div className="relative flex items-center">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:dark:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md hover:[&::-webkit-slider-thumb]:bg-blue-700 hover:[&::-webkit-slider-thumb]:dark:bg-blue-400 [&::-webkit-slider-thumb]:transition-colors"
      />
    </div>
  </div>
);

const MiniSlider = ({ label, code, value, min, max, step, onChange, format = (v: number) => v.toString() }: any) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs text-slate-600 dark:text-slate-400 flex justify-between font-medium">
      <span>{label} <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono ml-1">({code})</span></span>
      <span className="text-slate-800 dark:text-slate-200 font-bold">{format(value)}</span>
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
  <div className={`p-6 rounded-[24px] border ${highlight ? 'bg-blue-600 border-blue-500 text-white' : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-800 dark:text-slate-200'} shadow-sm flex flex-col gap-3 relative overflow-hidden group transition-colors duration-300`}>
    <div className={`text-xs font-bold uppercase tracking-wider flex justify-between ${highlight ? 'text-blue-200' : 'text-slate-500 dark:text-slate-400'}`}>
      <span>{title}</span>
    </div>
    <div className={`text-3xl font-extrabold tracking-tight ${highlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{value}</div>
    <div className={`text-[11px] font-medium flex items-center gap-1.5 ${highlight ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
      {icon}
      <span>{subtitle}</span>
    </div>
  </div>
);

const TableRow = ({ title, onPrem, azure, variance, formulaOnPrem, formulaAzure, currency }: any) => (
  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
    <td className="py-5 px-6">
      <div className="font-semibold text-slate-800 dark:text-slate-200 mb-1">{title}</div>
      <div className="text-[10px] text-slate-400 dark:text-slate-500 font-mono flex flex-col sm:flex-row gap-x-2 gap-y-1">
        <span>Prem: {formulaOnPrem}</span>
        <span className="hidden sm:inline text-slate-300 dark:text-slate-600">|</span>
        <span>Asz: {formulaAzure}</span>
      </div>
    </td>
    <td className="py-5 px-4 text-right font-mono font-medium text-slate-600 dark:text-slate-400">{formatMoney(onPrem, currency)}</td>
    <td className="py-5 px-4 text-right font-mono font-medium text-slate-600 dark:text-slate-400">{formatMoney(azure, currency)}</td>
    <td className="py-5 px-6 text-right font-mono font-bold text-blue-600 dark:text-blue-400">{formatMoney(variance, currency)}</td>
  </tr>
);

const InfoBox = ({ label, title, desc, code }: any) => (
  <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl">
    <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex flex-col items-start gap-2">
      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100/50 dark:bg-blue-900/30 px-2 py-0.5 rounded-lg border border-blue-200/50 dark:border-blue-800/30">{label}</span>
      <span className="text-sm">{title}</span>
    </h4>
    <div className="text-[10px] font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 px-2 py-1 rounded w-max mb-2">{code}</div>
    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
      {desc}
    </p>
  </div>
);

const MoneySlider = ({ label, code, value, min, max, step, onChange, currency }: any) => {
  const isUSD = currency === 'USD';
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

  const format = (v: number) => isUSD ? "$" + v.toLocaleString() : "SAR " + v.toLocaleString();

  return <Slider 
    label={label} 
    code={code} 
    min={cMin} 
    max={cMax} 
    step={cStep} 
    value={cValue} 
    onChange={handleChange} 
    format={format} 
  />;
}

const MoneyMiniSlider = ({ label, code, value, min, max, step, onChange, currency }: any) => {
  const isUSD = currency === 'USD';
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

  const format = (v: number) => isUSD ? "$" + v.toLocaleString() : "SAR " + v.toLocaleString();

  return <MiniSlider 
    label={label} 
    code={code} 
    min={cMin} 
    max={cMax} 
    step={cStep} 
    value={cValue} 
    onChange={handleChange} 
    format={format} 
  />;
}


