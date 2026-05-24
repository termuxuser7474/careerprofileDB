import { useState } from 'react';
import CareerReport from './CareerReport';
import JobOpenings from './JobOpenings';
import AdditionalJobs from './AdditionalJobs';
import ExtendedJobBoard from './ExtendedJobBoard';

export default function App() {
  const [view, setView] = useState('career');

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', color: '#e8e8e8', fontFamily: "'DM Sans', sans-serif", display: 'flex', flexDirection: 'column' }}>
      {/* Top Navigation Bar */}
      <div style={{ background: '#0d0d1a', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '16px 24px', display: 'flex', gap: '16px', justifyContent: 'center', zIndex: 10 }}>
        <button 
          onClick={() => setView('career')}
          style={{
            background: view === 'career' ? '#00e5ff22' : 'transparent',
            border: view === 'career' ? '1px solid #00e5ff' : '1px solid rgba(255,255,255,0.2)',
            color: view === 'career' ? '#00e5ff' : '#aaa',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px',
            transition: 'all 0.2s ease',
            fontFamily: "inherit"
          }}
        >
          📊 Career Intelligence Report
        </button>
        <button 
          onClick={() => setView('jobs')}
          style={{
            background: view === 'jobs' ? '#69ff4722' : 'transparent',
            border: view === 'jobs' ? '1px solid #69ff47' : '1px solid rgba(255,255,255,0.2)',
            color: view === 'jobs' ? '#69ff47' : '#aaa',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px',
            transition: 'all 0.2s ease',
            fontFamily: "inherit"
          }}
        >
          🏢 Live Job Intelligence
        </button>
        <button 
          onClick={() => setView('static')}
          style={{
            background: view === 'static' ? '#ffb30022' : 'transparent',
            border: view === 'static' ? '1px solid #ffb300' : '1px solid rgba(255,255,255,0.2)',
            color: view === 'static' ? '#ffb300' : '#aaa',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px',
            transition: 'all 0.2s ease',
            fontFamily: "inherit"
          }}
        >
          📄 Static Job Report
        </button>
        <button 
          onClick={() => setView('active')}
          style={{
            background: view === 'active' ? '#ff7b7222' : 'transparent',
            border: view === 'active' ? '1px solid #ff7b72' : '1px solid rgba(255,255,255,0.2)',
            color: view === 'active' ? '#ff7b72' : '#aaa',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px',
            transition: 'all 0.2s ease',
            fontFamily: "inherit"
          }}
        >
          🚀 Active Jobs (May 2026)
        </button>
        <button 
          onClick={() => setView('dashboard')}
          style={{
            background: view === 'dashboard' ? '#1D9E7522' : 'transparent',
            border: view === 'dashboard' ? '1px solid #1D9E75' : '1px solid rgba(255,255,255,0.2)',
            color: view === 'dashboard' ? '#1D9E75' : '#aaa',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px',
            transition: 'all 0.2s ease',
            fontFamily: "inherit"
          }}
        >
          🖥️ Command Center
        </button>
        <button 
          onClick={() => setView('additional_jobs')}
          style={{
            background: view === 'additional_jobs' ? '#3b82f622' : 'transparent',
            border: view === 'additional_jobs' ? '1px solid #3b82f6' : '1px solid rgba(255,255,255,0.2)',
            color: view === 'additional_jobs' ? '#3b82f6' : '#aaa',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px',
            transition: 'all 0.2s ease',
            fontFamily: "inherit"
          }}
        >
          📂 +100 Additional Jobs
        </button>
        <button 
          onClick={() => setView('extended_board')}
          style={{
            background: view === 'extended_board' ? '#a855f722' : 'transparent',
            border: view === 'extended_board' ? '1px solid #a855f7' : '1px solid rgba(255,255,255,0.2)',
            color: view === 'extended_board' ? '#a855f7' : '#aaa',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px',
            transition: 'all 0.2s ease',
            fontFamily: "inherit"
          }}
        >
          📈 Extended Job Board
        </button>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column' }}>
        {view === 'career' && <CareerReport />}
        {view === 'jobs' && <JobOpenings />}
        {view === 'additional_jobs' && <AdditionalJobs />}
        {view === 'extended_board' && <ExtendedJobBoard />}
        {view === 'static' && (
          <iframe 
            src="/JobSearchReport.html" 
            style={{ width: '100%', flex: 1, border: 'none', backgroundColor: '#0b0f1a' }} 
            title="Static Job Report"
          />
        )}
        {view === 'active' && (
          <iframe 
            src="/Deebishaa_ActiveJobs_May2026.html" 
            style={{ width: '100%', flex: 1, border: 'none', backgroundColor: '#0d1117' }} 
            title="Active Jobs Report"
          />
        )}
        {view === 'dashboard' && (
          <iframe 
            src="/Deebishaa_Job_Search_Dashboard.html" 
            style={{ width: '100%', flex: 1, border: 'none', backgroundColor: '#0b0f1a' }} 
            title="Job Search Dashboard"
          />
        )}
      </div>
    </div>
  );
}
