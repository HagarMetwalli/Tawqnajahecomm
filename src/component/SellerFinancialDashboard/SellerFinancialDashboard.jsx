import React from 'react';
import '../SellerFinancialDashboard/SellerFinancialDashboard.css';

// Chart.js
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

// ====== Chart Data ======
const data = {
  labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
  datasets: [
    {
      label: 'عدد الطلبات',
      data: [120, 190, 150, 220, 180, 240],
      backgroundColor: '#ff7a00',
      borderRadius: 8,
    },
  ],
};

// ====== Chart Options ======
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'عدد الطلبات الشهرية',
    },
  },
};

export default function SellerFinancialDashboard() {
  return (
    <div className="fin-page  ">
      <div className="fin-container ">

        {/* ===== Breadcrumb ===== */}
        <div className="fin-breadcrumb">
          <span className="fin-breadcrumb-main">الرئيسية</span>
          <span className="fin-breadcrumb-sep"> / </span>
          <span className="fin-breadcrumb-current">الحسابات المالية</span>
        </div>

        {/* ===== Title ===== */}
        <h2 className="fin-page-title">الحسابات المالية</h2>

        {/* ===== Summary Card ===== */}
        <div className="fin-summary-card">
          <div className="fin-summary-text">
            <span className="fin-summary-label">الحسابات المالية</span>
            <span className="fin-summary-amount">212.00 ر.س</span>
          </div>

          <div className="fin-summary-icon">
            <span>$</span>
          </div>
        </div>

        {/* ===== Chart Card ===== */}
        <div className="fin-chart-card mb-5">
          <Bar data={data} options={options} />
        </div>

      </div>
    </div>
  );
}
