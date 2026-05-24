import { useState } from "react";

const tabs = [
  { id: "jobs", label: "🏢 India Jobs" },
  { id: "international", label: "🌍 International" },
  { id: "internships", label: "🎓 Internships" },
  { id: "keywords", label: "🔍 Search Keywords" },
  { id: "templates", label: "📧 Templates" },
  { id: "action", label: "🚀 Action Plan" },
];

const Tag = ({ text, color }) => (
  <span style={{
    background: color + "22", color, border: `1px solid ${color}44`,
    borderRadius: 4, padding: "2px 8px", fontSize: 10, fontWeight: 700,
    letterSpacing: "0.04em", whiteSpace: "nowrap"
  }}>{text}</span>
);

const diffColor = { Easy: "#69ff47", Medium: "#ffb300", Hard: "#ff6b6b" };

const indiaJobs = [
  {
    rank: 1, company: "Frido (Health-tech Startup)", role: "GET – Mechatronics Engineer (R&D)",
    location: "Pune", salary: "₹4–6 LPA", skills: "SolidWorks, Arduino, ESP32, 3D Printing, FEA basics",
    exp: "Fresher", mode: "On-site", diff: "Easy",
    link: "https://internshala.com/fresher-jobs/embedded-systems-jobs/",
    why: "Exact match: needs SolidWorks + Arduino + ESP32 + 3D printing — you tick every box. Startup = less CGPA filter.",
    portal: "Internshala"
  },
  {
    rank: 2, company: "Surinova Pvt Ltd", role: "Embedded Engineer (ECE/Mechatronics)",
    location: "Chennai, Tamil Nadu", salary: "₹3–5 LPA", skills: "Embedded C, Microcontrollers, Arduino, sensors",
    exp: "0–3 years", mode: "On-site", diff: "Easy",
    link: "https://in.indeed.com/q-embedded-engineer-fresher-jobs.html",
    why: "Chennai-based, accepts Mechatronics, no CGPA filter mentioned. Your Arduino + embedded C background is a direct hit.",
    portal: "Indeed"
  },
  {
    rank: 3, company: "Matel Motion & Energy Solutions", role: "Trainee Engineer – Embedded Software",
    location: "Pune", salary: "₹3–5 LPA", skills: "Arduino IDE, embedded platforms, C programming",
    exp: "Fresher", mode: "On-site", diff: "Easy",
    link: "https://in.indeed.com/q-embedded-engineer-fresher-jobs.html",
    why: "Explicitly says 'Freshers Welcome' + Arduino experience required. You are their ideal candidate.",
    portal: "Indeed"
  },
  {
    rank: 4, company: "Ekzen Robotics", role: "Robotics Engineer Trainee",
    location: "Multiple cities", salary: "₹3–5 LPA", skills: "STM32, Raspberry Pi, PLC, 3D modeling, Python",
    exp: "Fresher/1 yr preferred", mode: "On-site", diff: "Medium",
    link: "https://internshala.com/jobs/mechatronics-jobs/",
    why: "Your STM32 + PLC + 3D modeling combination is nearly perfect. ROS exposure is 'preferred not required'.",
    portal: "Internshala"
  },
  {
    rank: 5, company: "Technoculture Research", role: "Robotics Engineer (Fresher)",
    location: "Bengaluru", salary: "₹4–7 LPA", skills: "SolidWorks/Fusion360, 3D printing, mechatronics, embedded systems",
    exp: "Fresher with strong projects", mode: "On-site", diff: "Medium",
    link: "https://internshala.com/job/detail/fresher-robotics-engineer-job-in-bangalore-at-technoculture-research1777706096",
    why: "Explicitly says 'freshers with strong projects welcome'. Your pipeline robot + 3-DOF arm + 3D printing work qualifies you.",
    portal: "Internshala"
  },
  {
    rank: 6, company: "Quest Innovative Solutions", role: "Junior Embedded Systems Engineer / Trainer",
    location: "Kochi / Thiruvananthapuram, Kerala", salary: "₹3–5 LPA", skills: "Arduino, ESP32, Raspberry Pi, embedded basics",
    exp: "Fresher", mode: "On-site", diff: "Easy",
    link: "https://in.indeed.com/q-embedded-systems-fresher-jobs.html",
    why: "Trains + engineers freshers. Your embedded knowledge + 3 internships = you can teach what you know too.",
    portal: "Indeed"
  },
  {
    rank: 7, company: "GSAS Mi (Bengaluru)", role: "Embedded Engineer",
    location: "Bengaluru, Karnataka", salary: "₹0–5 LPA", skills: "Embedded C, microcontrollers, sensors",
    exp: "Fresher", mode: "On-site", diff: "Easy",
    link: "https://in.indeed.com/q-embedded-engineer-fresher-jobs.html",
    why: "Entry-level semiconductor company role in Bengaluru. Low barrier, good learning environment.",
    portal: "Indeed"
  },
  {
    rank: 8, company: "Bosch India", role: "Graduate Apprentice Program",
    location: "Bengaluru / Pune / Coimbatore", salary: "₹3–5 LPA (stipend)", skills: "Mechatronics, embedded systems, MATLAB",
    exp: "Fresher – Final year", mode: "On-site", diff: "Medium",
    link: "https://www.bosch.in/careers/students-and-graduates/",
    why: "Bosch's Graduate Apprentice Program is open to non-IIT engineers. Great brand name for your resume. Apply via bosch.in/careers.",
    portal: "Bosch Careers"
  },
  {
    rank: 9, company: "ABB India", role: "Graduate Engineer Trainee – Automation",
    location: "Bengaluru / Mumbai / Vadodara", salary: "₹4–7 LPA", skills: "PLC, automation, electrical/mechatronics",
    exp: "Fresher", mode: "On-site", diff: "Medium",
    link: "https://careers.abb.com/global/en",
    why: "Your PLC + automation studio + BHEL industrial exposure is exactly what ABB looks for in automation GETs.",
    portal: "ABB Careers / LinkedIn"
  },
  {
    rank: 10, company: "Patvin Engineering (Navi Mumbai)", role: "Graduate Engineer Trainee – Automation",
    location: "Navi Mumbai", salary: "₹3–5 LPA", skills: "Automation, PLC basics, mechatronics",
    exp: "Fresher", mode: "On-site", diff: "Easy",
    link: "https://in.indeed.com/q-plc-automation-fresher-jobs.html",
    why: "Automotive manufacturing automation GET role; your PLC + BHEL internship makes this very accessible.",
    portal: "Indeed"
  },
  {
    rank: 11, company: "SP Ultraflex (Mumbai)", role: "Automation & Service Engineer",
    location: "Mumbai", salary: "₹3–5 LPA", skills: "PLC, HMI, SCADA, VFD, servo motors",
    exp: "Fresher with training",  mode: "On-site", diff: "Easy",
    link: "https://in.indeed.com/q-plc-automation-fresher-jobs.html",
    why: "Explicitly considers freshers with good PLC/HMI knowledge. Your PLC + servo motor + motor control background fits.",
    portal: "Indeed"
  },
  {
    rank: 12, company: "Hypertangent Technologies", role: "Mechatronics Intern → Full-time",
    location: "Delhi / Remote", salary: "₹15,000–25,000/mo (intern) → ₹4–6 LPA",
    skills: "Arduino, SolidWorks, Python, Robotics", exp: "Fresher", mode: "Hybrid",
    diff: "Easy",
    link: "https://internshala.com/internships/mechatronics-internship/",
    why: "Needs exactly your stack: Arduino + SolidWorks + Python basics + robotics. Internship-to-hire pathway.",
    portal: "Internshala"
  },
];

const intlJobs = [
  {
    country: "🇩🇪 Germany", company: "Various (Siemens, Bosch, KUKA, Festo)",
    role: "Mechatronics / Embedded Engineer", salary: "€35,000–€50,000/yr",
    skills: "SolidWorks, PLC, embedded C, MATLAB, German (A2+ helpful)", visa: "Job Seeker Visa / EU Blue Card",
    diff: "Medium", timeline: "6–12 months",
    link: "https://www.arbeitnow.com/visa-sponsorship-jobs",
    note: "Germany has 207+ mechatronics openings on Glassdoor alone. English-speaking companies exist. Apply via LinkedIn, StepStone.de, Arbeitnow.com"
  },
  {
    country: "🇸🇬 Singapore", company: "Illumina, ST Engineering, DSO, IME",
    role: "Graduate Trainee – Mechatronics / Manufacturing Equipment",
    salary: "SGD 3,500–5,500/mo", skills: "SolidWorks, PCB, CAD, C++, mechatronics",
    visa: "Employment Pass (company-sponsored)", diff: "Medium", timeline: "6–12 months",
    link: "https://www.glassdoor.sg/Job/singapore-mechatronics-engineer-jobs",
    note: "Singapore has 340+ mechatronics openings (Glassdoor). Graduate trainee programs at semiconductor/manufacturing companies. Apply via LinkedIn + company career portals."
  },
  {
    country: "🇦🇪 UAE / Dubai", company: "ONFUSION, Bureau Veritas, Eaton, Fives Services Gulf",
    role: "Mechanical / Mechatronics Fresher Engineer",
    salary: "AED 5,000–10,000/mo (tax-free)", skills: "Mechanical, CAD, automation basics",
    visa: "Work Visa (employer-sponsored)", diff: "Easy–Medium", timeline: "3–6 months",
    link: "https://ae.indeed.com/q-mechatronics-engineer-jobs.html",
    note: "UAE has 42+ active vacancies on GulfTalent, 50+ on Indeed. Fresher roles available in Dubai/Sharjah. Apply via Bayt.com, NaukriGulf, GulfTalent, Indeed UAE."
  },
  {
    country: "🇦🇪 Saudi Arabia", company: "Aramco, SABIC, Siemens KSA",
    role: "Graduate Engineer / Trainee – Automation/Mechanical",
    salary: "SAR 8,000–15,000/mo (tax-free)", skills: "Automation, PLC, mechanical systems",
    visa: "Work Visa", diff: "Medium", timeline: "6–12 months",
    link: "https://www.bayt.com/en/saudi-arabia/jobs/mechatronics-engineer-jobs/",
    note: "Vision 2030 driving massive industrial investment. Good for automation/PLC engineers with 1+ year experience."
  },
  {
    country: "🇨🇦 Canada", company: "Magna International, ATS Automation, ABB Canada",
    role: "Mechatronics / Embedded Engineer",
    salary: "CAD 55,000–75,000/yr", skills: "Embedded C, robotics, PLC, SolidWorks",
    visa: "Express Entry / Provincial Nominee Program", diff: "Hard", timeline: "12–24 months",
    link: "https://ca.indeed.com/jobs?q=mechatronics+engineer+fresher",
    note: "Best path: 1–2 years India experience → Canada Express Entry. NOC code 2141 (Industrial and Manufacturing Engineers) is in-demand list."
  },
  {
    country: "🇦🇺 Australia", company: "Various automotive/manufacturing companies",
    role: "Graduate Mechatronics / Automation Engineer",
    salary: "AUD 65,000–80,000/yr", skills: "Mechatronics, embedded systems, SolidWorks",
    visa: "482 TSS Visa (skills shortage) / 189 Skilled Independent",
    diff: "Hard", timeline: "12–18 months",
    link: "https://au.indeed.com/jobs?q=mechatronics+engineer+fresher",
    note: "Mechatronics on the Skills in Demand list. Pathway: India experience → Australian employer sponsorship or Skilled migration."
  },
];

const internships = [
  {
    company: "Bosch India", role: "Engineering Intern (Mechatronics/Automation)",
    location: "Bengaluru/Pune/Coimbatore", stipend: "₹15,000–25,000/mo",
    duration: "3–6 months", skills: "SolidWorks, MATLAB, embedded systems",
    link: "https://www.bosch.in/careers/students-and-graduates/internships/",
    diff: "Medium", note: "Apply 3 months before semester end. Use bosch.in/careers directly."
  },
  {
    company: "Hypertangent Technologies", role: "Mechatronics Intern",
    location: "Delhi / Remote possible", stipend: "₹10,000–20,000/mo",
    duration: "3–6 months", skills: "Arduino, SolidWorks, Python, robotics",
    link: "https://internshala.com/internships/mechatronics-internship/",
    diff: "Easy", note: "On Internshala now. Needs your exact tech stack. Apply immediately."
  },
  {
    company: "Various Robotics Startups", role: "Robotics Intern (Arduino / ROS)",
    location: "Bengaluru / Remote", stipend: "₹8,000–20,000/mo",
    duration: "2–6 months", skills: "Arduino, Python, ROS basics, sensors",
    link: "https://internshala.com/internships/robotics-internship-in-delhi/",
    diff: "Easy", note: "Filter 'Robotics internship' on Internshala. New postings weekly. Apply on day of posting."
  },
  {
    company: "Detect Technologies (Chennai)", role: "Engineering Intern – Industrial Inspection",
    location: "Chennai (Tamil Nadu advantage)", stipend: "₹15,000–25,000/mo",
    duration: "3–6 months", skills: "Sensors, embedded systems, computer vision basics",
    link: "https://careers.detecttechnologies.com",
    diff: "Medium", note: "Your pipeline inspection robot project is DIRECTLY relevant. Cold-email them with your project demo."
  },
  {
    company: "Planys Technologies (Chennai)", role: "Robotics / Embedded Intern",
    location: "Chennai", stipend: "₹15,000–20,000/mo",
    duration: "3–6 months", skills: "Embedded C, robotics, underwater/pipeline systems",
    link: "https://planystech.com/careers",
    diff: "Medium", note: "Pipeline + underwater inspection robots company. Your pipeline robot project is a perfect conversation starter."
  },
  {
    company: "BHEL (revisit)", role: "Project Intern / Extended Apprenticeship",
    location: "Tiruchirappalli / Trichy Plant (home city)",
    stipend: "₹10,000–15,000/mo", duration: "3–6 months",
    skills: "Industrial engineering, automation, manufacturing",
    link: "https://www.bhel.com/career",
    diff: "Easy", note: "You already have a BHEL internship — follow up with your supervisor for a reference or extended role. Home advantage!"
  },
];

const keywords = {
  linkedin: [
    "Embedded Systems Engineer fresher 2026",
    "Graduate Engineer Trainee Mechatronics India",
    "Robotics Engineer fresher Bengaluru",
    "IoT Engineer fresher Chennai",
    "PLC Automation trainee India",
    "CAD Engineer SolidWorks fresher",
    "Firmware Engineer entry level India",
    "Mechatronics GET program 2026",
  ],
  naukri: [
    "Embedded Systems fresher Mechatronics 0–2 years",
    "Graduate Engineer Trainee automation",
    "IoT Developer fresher",
    "Robotics Engineer trainee",
    "PLC Engineer fresher",
    "SolidWorks Design Engineer fresher",
    "STM32 Arduino embedded C fresher",
    "Hardware Engineer fresher",
  ],
  ats: [
    "Firmware Development", "Embedded C/C++", "STM32", "Arduino", "ESP32",
    "MATLAB Simulink", "PLC Programming", "SCADA", "HMI", "SolidWorks",
    "Creo", "FDM 3D Printing", "Sensor Integration", "IoT", "UART", "I2C", "SPI",
    "Motor Control", "Servo Motors", "Microcontroller", "Automation Studio",
    "Robotics", "CAD Design", "Real-Time Systems", "Embedded Systems",
    "Industry 4.0", "Prototype Development",
  ],
  avoid: [
    "Software Engineer (IT/SDLC roles — wrong domain for you)",
    "Data Analyst / Data Science (no Python/ML background yet)",
    "VLSI / Chip Design (requires Electronics, not Mechatronics)",
    "Cyber Security (very different domain, no foundation)",
    "Full Stack Developer (no web dev background)",
  ]
};

const templates = {
  recruiter: `Hi [Recruiter Name],

I'm Deebishaa S, a final-year Mechatronics Engineering student at SASTRA University (2026) with hands-on experience in embedded systems, robotics, and industrial automation.

I came across the [Job Title] role at [Company] and believe I'm a strong match:
✅ Hands-on: Arduino, STM32, ESP32, C/C++, SolidWorks
✅ Projects: 3-DOF robot manipulator, pipeline inspection robot, STM32 embedded lab
✅ Industry: 3 internships including BHEL (heavy electrical) + Code Bind (embedded systems)

I'd love to connect about this opportunity. Happy to share my resume or discuss further.

Best regards,
Deebishaa S
📞 +91 9843414377 | 📧 deebishaa07@gmail.com
🔗 linkedin.com/in/deebishaa-s-477407373`,

  cold: `Subject: Application – [Job Role] | Mechatronics Engineer | SASTRA University 2026

Dear [Hiring Manager Name],

I'm writing to express my interest in the [Job Role] position at [Company Name].

I'm a final-year Mechatronics Engineering student at SASTRA Deemed University with a strong foundation in embedded systems, robotics, and industrial automation. Here's why I'd be a strong addition:

🔧 Technical Match:
• Embedded systems: STM32, Arduino, ESP32, Embedded C/C++
• Robotics: 3-DOF pick-and-place manipulator, pipeline inspection robot
• CAD/Design: SolidWorks, Creo, FDM 3D printing
• Industrial: PLC, Automation Studio, MATLAB/Simulink

🏭 Industry Experience:
• BHEL – manufacturing + industrial safety (June 2025)
• Code Bind Technologies – embedded systems development (Jul 2024)
• Shanmuga Precision Forging – CNC, additive manufacturing (Jul–Nov 2024)

I'm particularly drawn to [Company Name] because [specific reason about their product/mission].

I've attached my resume and would welcome a conversation at your convenience.

Best regards,
Deebishaa S
+91 9843414377 | deebishaa07@gmail.com
linkedin.com/in/deebishaa-s-477407373`,
};

const actionPlan = [
  { day: "Day 1–2", action: "Apply NOW on Internshala", detail: "Frido GET, Technoculture Research Robotics, Hypertangent Mechatronics — all active this week", priority: "🔴 URGENT" },
  { day: "Day 1–2", action: "Apply on Indeed India", detail: "Search 'embedded engineer fresher Chennai/Bengaluru' — Surinova, Matel Motion, GSAS Mi roles are live", priority: "🔴 URGENT" },
  { day: "Day 3", action: "Apply on Naukri.com", detail: "Create profile + set job alerts: 'Embedded Systems Fresher', 'Graduate Engineer Trainee Mechatronics'", priority: "🔴 URGENT" },
  { day: "Day 3", action: "Apply to Bosch Graduate Apprentice", detail: "Go to bosch.in/careers → Students & Graduates → Graduate Apprentice Program. Apply directly.", priority: "🟠 HIGH" },
  { day: "Day 4", action: "Email Detect Technologies + Planys", detail: "Cold email with your pipeline robot project description. These Chennai companies are your DREAM early employers.", priority: "🟠 HIGH" },
  { day: "Day 5", action: "LinkedIn Profile Update + Connections", detail: "Update headline, add all projects. Send 20 connection requests to: HR managers at Addverb, Ati Motors, Detect Tech, Planys", priority: "🟠 HIGH" },
  { day: "Day 6", action: "ABB India Graduate Engineer Trainee", detail: "Apply at careers.abb.com — search 'Graduate Engineer Trainee India'. Your PLC + BHEL background fits perfectly.", priority: "🟡 MEDIUM" },
  { day: "Day 7", action: "NaukriGulf + Bayt.com (UAE)", detail: "Create profile on NaukriGulf. Apply to 5 Mechatronics/Mechanical Fresher roles in Dubai/Sharjah.", priority: "🟡 MEDIUM" },
  { day: "Week 2", action: "LinkedIn Jobs — Germany/Singapore", detail: "Search 'mechatronics engineer graduate trainee Singapore' and 'embedded engineer Germany English'. Apply to 5 roles.", priority: "🟡 MEDIUM" },
  { day: "Week 2", action: "BHEL Referral", detail: "Contact your BHEL internship supervisor directly for a referral or recommendation letter. This is your strongest existing connection.", priority: "🟡 MEDIUM" },
];

const dailyStrategy = [
  { time: "Morning (30 min)", task: "Apply to 3–5 fresh job postings on Internshala + Naukri + LinkedIn. Sort by 'Most Recent'." },
  { time: "Afternoon (20 min)", task: "Send 5 LinkedIn connection requests to HR/hiring managers at target companies with a personalised note." },
  { time: "Evening (30 min)", task: "Work on 1 GitHub project README or LinkedIn post about your embedded/robotics work. Visibility = inbound interest." },
  { time: "Weekly", task: "Send 5 cold emails to target companies using the template above. Track in a spreadsheet." },
  { time: "Weekend", task: "Skill-building: Python basics OR ROS2 tutorial. 2 hours per day. Document progress publicly on LinkedIn." },
];

export default function JobOpenings() {
  const [active, setActive] = useState("jobs");
  const [copiedIdx, setCopiedIdx] = useState(null);

  const copy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#07070f", color: "#e0e0e0", fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>
      {/* Top bar */}
      <div style={{ background: "#0d0d1a", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "16px 24px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <div>
          <div style={{ fontSize: 11, color: "#00e5ff", fontFamily: "monospace", letterSpacing: "0.12em" }}>LIVE JOB INTELLIGENCE — MAY 2026</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>DEEBISHAA S — Real Job Openings Report</div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8, flexWrap: "wrap" }}>
          {[`${indiaJobs.length} India Jobs`, `${intlJobs.length} International`, `${internships.length} Internships`].map(t => (
            <Tag key={t} text={t} color="#00e5ff" />
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background: "#0d0d1a", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "0 24px", display: "flex", gap: 4, overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setActive(t.id)} style={{
            background: active === t.id ? "rgba(0,229,255,0.1)" : "transparent",
            border: "none", borderBottom: active === t.id ? "2px solid #00e5ff" : "2px solid transparent",
            color: active === t.id ? "#00e5ff" : "#666", fontSize: 12, fontWeight: 600,
            padding: "12px 16px", cursor: "pointer", whiteSpace: "nowrap", fontFamily: "inherit",
          }}>{t.label}</button>
        ))}
      </div>

      <div style={{ padding: "24px", maxWidth: 1100, margin: "0 auto" }}>

        {/* ── INDIA JOBS ── */}
        {active === "jobs" && (
          <div>
            <div style={{ marginBottom: 20 }}>
              <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#fff" }}>🏢 India Job Openings — Active May 2026</h2>
              <p style={{ margin: "6px 0 0", color: "#666", fontSize: 12 }}>Sorted by ease of getting selected. Apply to rank 1–5 FIRST — these are your highest-chance opportunities.</p>
            </div>

            {/* Avoid section */}
            <div style={{ background: "#1a0a0a", border: "1px solid #ff6b6b33", borderLeft: "3px solid #ff6b6b", borderRadius: 8, padding: "14px 18px", marginBottom: 20 }}>
              <div style={{ color: "#ff6b6b", fontWeight: 700, fontSize: 12, marginBottom: 8 }}>❌ ROLES TO AVOID RIGHT NOW</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {keywords.avoid.map(a => <Tag key={a} text={a} color="#ff6b6b" />)}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {indiaJobs.map((job) => (
                <div key={job.rank} style={{
                  background: "#0f0f1c", border: `1px solid ${diffColor[job.diff]}22`,
                  borderLeft: `3px solid ${diffColor[job.diff]}`, borderRadius: 10, padding: "16px 20px"
                }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                    <div style={{ background: "#00e5ff22", color: "#00e5ff", borderRadius: 6, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 13, flexShrink: 0 }}>#{job.rank}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: 14, color: "#fff" }}>{job.role}</div>
                      <div style={{ color: "#00e5ff", fontSize: 12, marginTop: 2 }}>{job.company}</div>
                    </div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      <Tag text={job.diff} color={diffColor[job.diff]} />
                      <Tag text={job.mode} color="#c77dff" />
                      <Tag text={job.portal} color="#ffb300" />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10, marginBottom: 10 }}>
                    {[
                      ["📍 Location", job.location],
                      ["💰 Salary", job.salary],
                      ["📅 Experience", job.exp],
                    ].map(([k, v]) => (
                      <div key={k} style={{ background: "#ffffff08", borderRadius: 6, padding: "8px 12px" }}>
                        <div style={{ fontSize: 10, color: "#666", marginBottom: 2 }}>{k}</div>
                        <div style={{ fontSize: 12, color: "#e0e0e0", fontWeight: 600 }}>{v}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ background: "#ffffff05", borderRadius: 6, padding: "8px 12px", marginBottom: 10 }}>
                    <div style={{ fontSize: 10, color: "#666", marginBottom: 4 }}>🔧 REQUIRED SKILLS</div>
                    <div style={{ fontSize: 12, color: "#c8c8c8" }}>{job.skills}</div>
                  </div>

                  <div style={{ background: "#00e5ff08", borderRadius: 6, padding: "8px 12px", marginBottom: 12 }}>
                    <div style={{ fontSize: 10, color: "#00e5ff", marginBottom: 2 }}>✅ WHY YOU MATCH</div>
                    <div style={{ fontSize: 12, color: "#b0d8e0" }}>{job.why}</div>
                  </div>

                  <a href={job.link} target="_blank" rel="noopener noreferrer" style={{
                    display: "inline-block", background: "#00e5ff22", color: "#00e5ff",
                    border: "1px solid #00e5ff44", borderRadius: 6, padding: "7px 16px",
                    fontSize: 11, fontWeight: 700, textDecoration: "none", letterSpacing: "0.05em"
                  }}>APPLY NOW →</a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── INTERNATIONAL ── */}
        {active === "international" && (
          <div>
            <h2 style={{ margin: "0 0 6px", fontSize: 20, fontWeight: 800, color: "#fff" }}>🌍 International Opportunities</h2>
            <p style={{ margin: "0 0 20px", color: "#666", fontSize: 12 }}>UAE and Singapore are your fastest pathways. Germany and Canada are 12–24 month goals after India experience.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {intlJobs.map((job, i) => (
                <div key={i} style={{ background: "#0f0f1c", border: `1px solid ${diffColor[job.diff]}22`, borderLeft: `3px solid ${diffColor[job.diff]}`, borderRadius: 10, padding: "18px 20px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 12, alignItems: "center" }}>
                    <div style={{ fontSize: 22 }}>{job.country.split(" ")[0]}</div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 15, color: "#fff" }}>{job.country} — {job.role}</div>
                      <div style={{ color: "#00e5ff", fontSize: 12 }}>{job.company}</div>
                    </div>
                    <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
                      <Tag text={job.diff} color={diffColor[job.diff]} />
                      <Tag text={job.timeline} color="#c77dff" />
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10, marginBottom: 12 }}>
                    {[["💰 Salary", job.salary], ["📋 Visa", job.visa]].map(([k, v]) => (
                      <div key={k} style={{ background: "#ffffff08", borderRadius: 6, padding: "8px 12px" }}>
                        <div style={{ fontSize: 10, color: "#666", marginBottom: 2 }}>{k}</div>
                        <div style={{ fontSize: 12, color: "#e0e0e0", fontWeight: 600 }}>{v}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: "#69ff4710", borderRadius: 6, padding: "8px 12px", marginBottom: 12 }}>
                    <div style={{ fontSize: 11, color: "#c8c8c8" }}>💡 {job.note}</div>
                  </div>
                  <a href={job.link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#69ff4722", color: "#69ff47", border: "1px solid #69ff4744", borderRadius: 6, padding: "7px 16px", fontSize: 11, fontWeight: 700, textDecoration: "none" }}>EXPLORE JOBS →</a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── INTERNSHIPS ── */}
        {active === "internships" && (
          <div>
            <h2 style={{ margin: "0 0 6px", fontSize: 20, fontWeight: 800, color: "#fff" }}>🎓 Internship Openings</h2>
            <p style={{ margin: "0 0 20px", color: "#666", fontSize: 12 }}>If you haven't secured a job yet, internships convert to full-time offers 60–70% of the time in core engineering startups.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {internships.map((intern, i) => (
                <div key={i} style={{ background: "#0f0f1c", border: `1px solid ${diffColor[intern.diff]}22`, borderLeft: `3px solid ${diffColor[intern.diff]}`, borderRadius: 10, padding: "16px 20px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: 14, color: "#fff" }}>{intern.role}</div>
                      <div style={{ color: "#00e5ff", fontSize: 12 }}>{intern.company}</div>
                    </div>
                    <Tag text={intern.diff} color={diffColor[intern.diff]} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 10, marginBottom: 10 }}>
                    {[["📍", intern.location], ["💰", intern.stipend], ["⏱️", intern.duration]].map(([k, v]) => (
                      <div key={k} style={{ background: "#ffffff08", borderRadius: 6, padding: "7px 10px" }}>
                        <div style={{ fontSize: 11, color: "#c8c8c8" }}>{k} {v}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: "#ffb30010", borderRadius: 6, padding: "8px 12px", marginBottom: 10, fontSize: 11, color: "#c8c8c8" }}>💡 {intern.note}</div>
                  <a href={intern.link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#c77dff22", color: "#c77dff", border: "1px solid #c77dff44", borderRadius: 6, padding: "7px 16px", fontSize: 11, fontWeight: 700, textDecoration: "none" }}>APPLY →</a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── KEYWORDS ── */}
        {active === "keywords" && (
          <div>
            <h2 style={{ margin: "0 0 20px", fontSize: 20, fontWeight: 800, color: "#fff" }}>🔍 Search & ATS Keywords</h2>
            {[
              { title: "LinkedIn Search Queries", color: "#00e5ff", items: keywords.linkedin },
              { title: "Naukri.com Search Terms", color: "#69ff47", items: keywords.naukri },
              { title: "ATS Resume Keywords (Add to your resume)", color: "#ffb300", items: keywords.ats },
            ].map(section => (
              <div key={section.title} style={{ background: "#0f0f1c", border: `1px solid ${section.color}22`, borderLeft: `3px solid ${section.color}`, borderRadius: 10, padding: "16px 20px", marginBottom: 14 }}>
                <div style={{ color: section.color, fontWeight: 700, fontSize: 13, marginBottom: 12 }}>{section.title}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {section.items.map(item => <Tag key={item} text={item} color={section.color} />)}
                </div>
              </div>
            ))}
            <div style={{ background: "#0f0f1c", border: "1px solid #ff6b6b22", borderLeft: "3px solid #ff6b6b", borderRadius: 10, padding: "16px 20px" }}>
              <div style={{ color: "#ff6b6b", fontWeight: 700, fontSize: 13, marginBottom: 12 }}>❌ Roles/Keywords to Avoid</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {keywords.avoid.map(item => <Tag key={item} text={item} color="#ff6b6b" />)}
              </div>
            </div>
          </div>
        )}

        {/* ── TEMPLATES ── */}
        {active === "templates" && (
          <div>
            <h2 style={{ margin: "0 0 20px", fontSize: 20, fontWeight: 800, color: "#fff" }}>📧 Recruiter & Cold Email Templates</h2>
            {[
              { title: "LinkedIn Recruiter Message", color: "#00e5ff", key: "recruiter", content: templates.recruiter },
              { title: "Cold Email to Hiring Manager", color: "#69ff47", key: "cold", content: templates.cold },
            ].map((tmpl, i) => (
              <div key={i} style={{ background: "#0f0f1c", border: `1px solid ${tmpl.color}22`, borderLeft: `3px solid ${tmpl.color}`, borderRadius: 10, padding: "18px 20px", marginBottom: 14 }}>
                <div style={{ color: tmpl.color, fontWeight: 700, fontSize: 13, marginBottom: 12 }}>{tmpl.title}</div>
                <pre style={{ fontFamily: "monospace", fontSize: 12, color: "#c8c8c8", whiteSpace: "pre-wrap", background: "rgba(0,0,0,0.3)", padding: 14, borderRadius: 8, margin: 0 }}>{tmpl.content}</pre>
                <button onClick={() => copy(tmpl.content, i)} style={{ marginTop: 10, background: copiedIdx === i ? "#69ff47" : `${tmpl.color}22`, color: copiedIdx === i ? "#000" : tmpl.color, border: `1px solid ${tmpl.color}44`, borderRadius: 6, padding: "7px 16px", fontSize: 11, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
                  {copiedIdx === i ? "✓ Copied!" : "Copy Template"}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* ── ACTION PLAN ── */}
        {active === "action" && (
          <div>
            <h2 style={{ margin: "0 0 6px", fontSize: 20, fontWeight: 800, color: "#fff" }}>🚀 Final Action Plan</h2>
            <p style={{ margin: "0 0 20px", color: "#666", fontSize: 12 }}>Apply 5–10 jobs/day. Focus quality over quantity. Track every application.</p>

            <div style={{ marginBottom: 20 }}>
              <div style={{ color: "#ffb300", fontWeight: 700, marginBottom: 12, fontSize: 14 }}>📋 Top 10 Applications — Prioritized Order</div>
              {actionPlan.map((item, i) => (
                <div key={i} style={{ background: "#0f0f1c", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, padding: "12px 16px", marginBottom: 8, display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ fontFamily: "monospace", fontSize: 11, color: "#666", flexShrink: 0, minWidth: 70 }}>{item.day}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 13, color: "#fff", marginBottom: 3 }}>{item.action}</div>
                    <div style={{ fontSize: 12, color: "#aaa" }}>{item.detail}</div>
                  </div>
                  <Tag text={item.priority} color={item.priority.includes("URGENT") ? "#ff6b6b" : item.priority.includes("HIGH") ? "#ffb300" : "#69ff47"} />
                </div>
              ))}
            </div>

            <div>
              <div style={{ color: "#00e5ff", fontWeight: 700, marginBottom: 12, fontSize: 14 }}>📅 Daily Application Strategy</div>
              {dailyStrategy.map((item, i) => (
                <div key={i} style={{ background: "#0f0f1c", border: "1px solid rgba(0,229,255,0.1)", borderRadius: 8, padding: "12px 16px", marginBottom: 8, display: "flex", gap: 14 }}>
                  <div style={{ fontFamily: "monospace", fontSize: 11, color: "#00e5ff", flexShrink: 0, minWidth: 130 }}>{item.time}</div>
                  <div style={{ fontSize: 12, color: "#c8c8c8" }}>{item.task}</div>
                </div>
              ))}
            </div>

            <div style={{ background: "#0f0f1c", border: "1px solid #69ff4733", borderLeft: "3px solid #69ff47", borderRadius: 10, padding: "18px 20px", marginTop: 16 }}>
              <div style={{ color: "#69ff47", fontWeight: 700, fontSize: 14, marginBottom: 12 }}>💡 How to Stand Out From Other Applicants</div>
              {[
                "Apply within 24 hours of job posting — early applications get 3x more attention",
                "Customize your resume summary for EACH role (change 2–3 lines to match JD keywords)",
                "Add a GitHub link with your projects — 80% of applicants don't have one",
                "Record a 60-sec demo video of your robot projects and include the YouTube/drive link in your resume",
                "Always write a short cover note on Internshala/LinkedIn — even 3 sentences differentiates you",
                "Follow up with a LinkedIn message to the hiring manager 3 days after applying",
                "Mention your BHEL internship prominently — it's a recognized name that opens doors",
                "For Chennai/Tamil Nadu companies — mention you're from Tiruchirappalli (local candidates preferred)",
              ].map((tip, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, fontSize: 12, color: "#c8c8c8" }}>
                  <span style={{ color: "#69ff47", flexShrink: 0 }}>▸</span><span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

