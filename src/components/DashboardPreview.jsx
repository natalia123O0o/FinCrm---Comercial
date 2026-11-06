import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { dashboardData } from '../data/content.js';
import CountUp from './CountUp.jsx';
import Logo from './Logo.jsx';

const path = 'M0,82 L20,72 L40,76 L60,60 L80,64 L100,48 L120,52 L140,40 L160,44 L180,32 L200,36 L220,26 L240,30 L260,18 L280,22 L300,14 L320,18 L340,10 L360,14 L380,6 L400,10';
const area = `${path} L400,100 L0,100 Z`;
const labels = ['1 oct', '8 oct', '15 oct', '22 oct', '30 oct'];

function MockRows({ rows }) {
  return (
    <div className="dash__table" aria-label="Clientes ficticios de demostración">
      <div className="table-header"><span>Cliente</span><span>Saldo</span><span>Estado</span><span>Último pago</span></div>
      {rows.map(row => (
        <div className="table-row" key={row.cliente}>
          <span>{row.cliente}</span>
          <span className="mono">{row.saldo}</span>
          <span className={`badge badge--${row.estado === 'Pagado' ? 'paid' : row.estado === 'Vencido' ? 'overdue' : 'pending'}`}>{row.estado}</span>
          <span className="mono">{row.pago}</span>
        </div>
      ))}
    </div>
  );
}

export { MockRows };

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState('resumen');
  const reduced = useReducedMotion();
  const data = dashboardData[activeTab];

  return (
    <div className="dash" aria-label="Panel de FinCRM con datos ficticios">
      <div className="dash__topbar">
        <Logo compact />
        <div className="dash__tabs" role="tablist" aria-label="Secciones del panel de demostración">
          {Object.keys(dashboardData).map(tab => (
            <button
              key={tab} type="button" role="tab"
              aria-selected={activeTab === tab}
              className={`dash__tab ${activeTab === tab ? 'is-active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >{tab[0].toUpperCase() + tab.slice(1)}</button>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeTab} className="dash__body" role="tabpanel"
          initial={reduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: reduced ? 0 : 0.22 }}
        >
          <div className="kpi-grid">
            {data.kpis.map((kpi, index) => (
              <div className="kpi-card" key={`${activeTab}-${kpi.label}`}>
                <span className="kpi-label">{kpi.label}</span>
                <div className="kpi-value-row">
                  <CountUp value={kpi.value} decimals={kpi.decimals || 0} prefix={kpi.prefix || ''} suffix={kpi.suffix || ''} />
                  <span className={`kpi-badge ${kpi.pending ? 'kpi-badge--pending' : 'kpi-badge--up'}`}>{kpi.badge}</span>
                </div>
                {index < 3 && (
                  <svg className="sparkline" viewBox="0 0 80 24" preserveAspectRatio="none" aria-hidden="true">
                    <motion.path d={index % 2 ? 'M0,18 L15,15 L30,16 L45,10 L60,12 L80,6' : 'M0,20 L12,17 L24,19 L36,12 L48,14 L60,7 L72,9 L80,4'} stroke="#4ADE80" strokeWidth="1.5" fill="none" strokeLinecap="round"
                      initial={reduced ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduced ? 0 : 0.9, delay: 0.1 }} />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <div className="dash__chart">
            <div className="chart-header"><span className="chart-title">{data.title}</span></div>
            <svg className="chart-svg" viewBox="0 0 400 100" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="fincrmChartGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#FF7A1A" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#FF7A1A" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path d={area} fill="url(#fincrmChartGrad)" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduced ? 0 : 0.8 }} />
              <motion.path d={path} stroke="#FF7A1A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
                initial={reduced ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduced ? 0 : 1.1 }} />
            </svg>
            <div className="chart-axis" aria-hidden="true">{labels.map(label => <span key={label}>{label}</span>)}</div>
          </div>
          <MockRows rows={data.rows} />
        </motion.div>
      </AnimatePresence>
      <div className="dash-demo-label">VISTA ILUSTRATIVA · DATOS FICTICIOS</div>
    </div>
  );
}
