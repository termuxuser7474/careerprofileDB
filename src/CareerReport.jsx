import { useState } from "react";

const sections = [
  { id: "profile", label: "📊 Profile Analysis" },
  { id: "resume", label: "📄 Resume Review" },
  { id: "career", label: "🚀 Career Paths" },
  { id: "content", label: "✍️ ATS Content" },
  { id: "opportunities", label: "🌍 Opportunities" },
  { id: "salary", label: "💰 Salary & Growth" },
  { id: "skillgap", label: "🧠 Skill Gap" },
  { id: "roadmap", label: "🗺️ Roadmap" },
  { id: "interview", label: "🎯 Interview Prep" },
  { id: "strategy", label: "📡 Job Strategy" },
  { id: "hustle", label: "💡 Side Hustles" },
];

const data = {
  profile: {
    title: "Deep Profile Analysis",
    subtitle: "Deebishaa S — Mechatronics Engineer, SASTRA University (2026)",
    blocks: [
      {
        heading: "🔬 Strongest Technical Skills",
        color: "#00e5ff",
        items: [
          "Arduino & Embedded C/C++ — core hands-on strength backed by 2 internships + 3+ projects",
          "SolidWorks & Creo — CAD design proficiency with 3D printing prototyping experience",
          "MATLAB & Simulink — academic modeling and simulation skills",
          "STM32 Microcontroller — HAL library usage (GPIO, ADC, PWM, USART, OLED) — rare for freshers",
          "Sensor Integration & IoT — practical project exposure",
          "PLC Programming & Automation Studio — industrial automation fundamentals",
          "Robotic Systems — 3-DOF manipulator, pipeline robot, line follower robot",
        ],
      },
      {
        heading: "💪 Practical Strengths",
        color: "#69ff47",
        items: [
          "3 industrial internships before graduation — above average for Indian engineering freshers",
          "Diverse exposure: heavy manufacturing (BHEL), embedded systems (Code Bind), precision engineering (Shanmuga)",
          "Hardware + software balance — rare combination that most CS graduates lack",
          "3D printing + CAD + robotics = strong product prototyping ability",
          "ESP32-based robotics work shows awareness of modern microcontrollers",
          "Real industrial safety + quality inspection exposure from factory floor",
        ],
      },
      {
        heading: "🏆 Most Valuable Projects (Ranked)",
        color: "#ffb300",
        items: [
          "#1 — STM32 Embedded Lab: Most technically advanced; signals low-level hardware expertise",
          "#2 — 3-DOF Pick & Place Robot (ESP32): Industry-relevant automation concept",
          "#3 — Vertical Pipeline Inspection Robot: Practical application with real-world problem",
          "#4 — 3D Printing + SolidWorks Prototyping: Shows design-to-manufacture pipeline",
          "#5 — Line Follower Robot: Entry-level but proves embedded basics",
        ],
      },
      {
        heading: "📈 Employability Assessment",
        color: "#ff6b6b",
        items: [
          "Employability Score: 6.5/10 (above average for mechatronics freshers in India)",
          "CGPA 6.17 — will be filtered by some mass recruiters (TCS, Infosys cutoff: 6.5–7.0)",
          "Strong practical portfolio compensates for average academic scores",
          "No GitHub/portfolio link = major missed opportunity",
          "Project depth is good but documentation (GitHub, videos) is absent",
          "International readiness: 4/10 — needs certifications and English-medium project demos",
        ],
      },
      {
        heading: "🏭 Industries Best Suited For You",
        color: "#c77dff",
        items: [
          "Robotics & Automation (core fit — highest salary growth)",
          "Embedded Systems & Firmware (strong foundation)",
          "IoT Product Development (growing rapidly in India + globally)",
          "Industrial Automation / Industry 4.0",
          "3D Printing / Additive Manufacturing",
          "Defense & Space (DRDO, ISRO, HAL — long-term)",
          "Automotive Electronics (Bosch, Continental, Visteon)",
          "Consumer Electronics Hardware",
        ],
      },
    ],
  },

  resume: {
    title: "Professional Resume Review",
    subtitle: "ATS Analysis, Recruiter Perspective & Improvement Guide",
    blocks: [
      {
        heading: "🚨 ATS Issues (Fix Immediately)",
        color: "#ff6b6b",
        items: [
          "No GitHub or portfolio URL — recruiters and ATS expect this for technical roles",
          "No measurable metrics — '% improvement', 'reduced by X hours', 'accuracy of X%' missing throughout",
          "Photo on resume — ATS systems cannot parse this; it wastes space and causes parsing errors in international applications",
          "Objective statement uses vague language — 'Interested in robotics' doesn't differentiate you",
          "No certifications section — even free NPTEL/Coursera certs boost ATS score significantly",
          "Missing: programming languages listed explicitly (C, C++ buried in a sentence)",
          "Missing: Tools table or skills matrix — ATS keyword scanners prefer structured skills lists",
          "CGPA below 7.0 will auto-filter in many company ATS systems",
        ],
      },
      {
        heading: "❌ Missing Keywords (Add These)",
        color: "#ff9f43",
        items: [
          "Firmware Development, Real-Time Systems, RTOS",
          "I2C, SPI, UART, CAN Bus (communication protocols)",
          "FreeRTOS, Bare-metal programming",
          "ROS (Robot Operating System) — critical for robotics roles",
          "Python (even basic — add it if you know it)",
          "Git & Version Control — essential for all tech roles",
          "PCB Design / Altium / KiCad (add if applicable)",
          "Industry 4.0, Digital Twin, Smart Manufacturing",
          "SCADA, HMI — for automation/industrial roles",
          "Edge Computing, MQTT, Raspberry Pi",
        ],
      },
      {
        heading: "⚠️ Weak Sections",
        color: "#ffd32a",
        items: [
          "Projects: No GitHub links, no demo videos, no measurable outcomes — biggest weakness",
          "Work Experience: Too descriptive, not achievement-oriented. Use 'Built X that achieved Y' format",
          "Education: No relevant coursework, no academic projects tied to curriculum listed",
          "Extracurricular: 'Industrial Visits | Team Collaboration' is too vague — remove or expand",
          "Hobbies: Pet Care, Photography are fine but add 'Open Source Contributor' or 'Robotics Competitions' if applicable",
        ],
      },
      {
        heading: "✅ What Recruiters Will Like",
        color: "#69ff47",
        items: [
          "3 internships before final year — signals initiative and real-world exposure",
          "BHEL internship — prestigious, well-recognized name in Indian industry",
          "Hardware + software combination — very marketable in embedded/robotics roles",
          "STM32 experience — specific microcontroller knowledge impresses embedded recruiters",
          "3D printing + SolidWorks — useful in product/manufacturing roles",
          "Diverse project portfolio spanning robotics, IoT, CAD, automation",
        ],
      },
      {
        heading: "🔧 Formatting Improvements",
        color: "#00e5ff",
        items: [
          "Remove photo for international applications; keep for Indian government/PSU applications only",
          "Add a 2-column skills table: Left = Technical Skills, Right = Tools/Software",
          "Rewrite every work experience bullet using: Action Verb + What You Did + Result/Impact",
          "Add a Certifications section (even if empty now — fill it within 30 days)",
          "Rename 'Objective' to 'Professional Summary' — more ATS-friendly",
          "Increase project descriptions to 3 bullets each with technical specifics",
          "Add GitHub URL next to LinkedIn URL at the top",
          "Use consistent date format: Month Year (e.g., Jun 2025, not June 2025)",
          "Keep to 1 page strictly until you have 2+ years of experience",
        ],
      },
    ],
  },

  career: {
    title: "Best Career Paths For You",
    subtitle: "Ranked by salary potential, demand, and fit with your profile",
    blocks: [
      {
        heading: "🥇 Tier 1 — Highest Fit + Highest Growth",
        color: "#69ff47",
        items: [
          "Embedded Systems Engineer — Direct match: Arduino, STM32, C/C++. Highest demand in automotive, IoT, defense",
          "Robotics Engineer / ROS Developer — Your robotic projects are a foundation; learn ROS2 to unlock this",
          "IoT Product Engineer — ESP32, sensors, Arduino experience directly maps here",
          "Automation Engineer / PLC Engineer — BHEL internship + PLC knowledge = industrial automation entry",
        ],
      },
      {
        heading: "🥈 Tier 2 — Strong Fit, Learn 1–2 Skills to Enter",
        color: "#ffb300",
        items: [
          "Firmware Engineer — Add: RTOS, communication protocols (I2C/SPI/UART/CAN), bare-metal programming",
          "CAD/Product Design Engineer — Strengthen SolidWorks + add GD&T, DFM knowledge",
          "Systems Integration Engineer — Already have hardware + software; add documentation + testing skills",
          "Hardware Test Engineer — Quality inspection background from Shanmuga Forging is useful here",
        ],
      },
      {
        heading: "🥉 Tier 3 — Long-Term Transition (6–12 months learning)",
        color: "#c77dff",
        items: [
          "AI/ML for Robotics — Add Python + TensorFlow Lite + Computer Vision for premium roles",
          "Digital Twin Engineer — MATLAB + SolidWorks foundation; add Ansys or Siemens NX",
          "SCADA/HMI Engineer — PLC background useful; add Siemens TIA Portal or Rockwell Studio 5000",
          "Aerospace/Defense R&D — DRDO, ISRO, HAL — requires patience but extremely prestigious",
        ],
      },
    ],
  },

  content: {
    title: "ATS Content & Personal Branding",
    subtitle: "Ready-to-use text for LinkedIn, emails, cover letters, GitHub",
    blocks: [
      {
        heading: "📝 ATS-Friendly Resume Summary",
        color: "#00e5ff",
        isLong: true,
        content: `Final-year Mechatronics Engineering student at SASTRA Deemed University with hands-on experience in embedded systems, robotics, and industrial automation. Proficient in C/C++, Arduino, STM32, SolidWorks, MATLAB, and PLC programming. Completed 3 industry internships including BHEL (heavy electrical manufacturing) and embedded systems development. Built robotic systems including a 3-DOF manipulator (ESP32), pipeline inspection robot, and STM32-based embedded lab applications. Seeking full-time or internship roles in embedded systems, robotics, or IoT product development.`,
      },
      {
        heading: "💼 LinkedIn Headline",
        color: "#69ff47",
        isLong: true,
        content: `Mechatronics Engineer | Embedded Systems • Robotics • IoT | Arduino • STM32 • SolidWorks | BHEL Intern | SASTRA '26`,
      },
      {
        heading: "🔗 LinkedIn About Section",
        color: "#ffb300",
        isLong: true,
        content: `I'm a final-year Mechatronics Engineering student at SASTRA Deemed University, passionate about building intelligent systems that sit at the intersection of hardware and software.

My journey spans robotics, embedded systems, industrial automation, and product design — backed by 3 industry internships (BHEL, Code Bind Technologies, Shanmuga Precision Forging) and hands-on academic projects.

🔧 What I build:
• Embedded systems with Arduino, STM32, ESP32 (GPIO, ADC, PWM, UART, I2C, SPI)
• Robotic systems: 3-DOF pick-and-place manipulator, pipeline inspection robot
• CAD designs + 3D printed prototypes using SolidWorks + FDM printing
• IoT applications with sensor integration and motor control

🛠️ Tools I work with:
C | C++ | MATLAB | Simulink | SolidWorks | Creo | PLC | Automation Studio | Arduino IDE | STM32CubeIDE

🎯 I'm actively looking for:
• Embedded Systems / Firmware Engineer roles
• Robotics Engineer / ROS Developer positions
• IoT Product Development internships
• Remote opportunities in hardware/software integration

📬 Open to collaborations, internships, and full-time roles. Let's connect!`,
      },
      {
        heading: "📧 Cold Email to Recruiter",
        color: "#ff6b6b",
        isLong: true,
        content: `Subject: Embedded Systems / Robotics Engineer Application — Final Year Mechatronics, SASTRA University

Dear [Recruiter Name],

I'm Deebishaa S, a final-year Mechatronics Engineering student at SASTRA Deemed University (graduating 2026), reaching out regarding embedded systems or robotics engineering opportunities at [Company Name].

My background:
• Hands-on experience with STM32, Arduino, ESP32 — including UART, I2C, SPI, ADC, PWM interfaces
• Built a 3-DOF robotic manipulator and pipeline inspection robot as academic projects
• Interned at BHEL (manufacturing) and Code Bind Technologies (embedded systems)
• Proficient in SolidWorks, MATLAB, C/C++, PLC programming

I'm particularly interested in [Company Name] because [specific reason — their product, their robotics division, their IoT work].

I'd love the opportunity to contribute to your team. I've attached my resume and welcome a brief call at your convenience.

Best regards,
Deebishaa S
+91 9843414377 | deebishaa07@gmail.com
LinkedIn: linkedin.com/in/deebishaa-s-477407373`,
      },
      {
        heading: "🐙 GitHub Bio",
        color: "#c77dff",
        isLong: true,
        content: `🎓 Mechatronics Engineering Student @ SASTRA University (2026)
⚙️ Building at the intersection of hardware and software
🤖 Robotics | 🔌 Embedded Systems | 📡 IoT | 🖨️ 3D Printing
🛠️ Arduino • STM32 • ESP32 • SolidWorks • MATLAB • C/C++
🔬 3 industry internships | 5+ robotics & embedded projects
📍 Tiruchirappalli, India | Open to remote & relocation`,
      },
    ],
  },

  opportunities: {
    title: "Job Opportunities & Global Career Map",
    subtitle: "Internships, remote roles, international paths, visa sponsorship",
    blocks: [
      {
        heading: "🎯 Best Job Roles to Apply For (India)",
        color: "#00e5ff",
        items: [
          "Junior Embedded Engineer — Bosch, Continental, Texas Instruments India, STMicroelectronics",
          "Robotics Engineer / ROS Developer — Ati Motors, GreyOrange, Addverb Technologies, Systemantics",
          "IoT Product Engineer — Siemens India, Schneider Electric, Honeywell",
          "Automation Engineer — ABB, Rockwell Automation, Mitsubishi Electric India",
          "CAD / Product Design Engineer — Tata Technologies, Cyient, KPIT, Wipro GE Healthcare",
          "Graduate Engineer Trainee (GET) — BHEL, L&T, NTPC, BEL (PSU stable option)",
          "Hardware Test Engineer — Qualcomm India, NXP Semiconductors, Mphasis",
        ],
      },
      {
        heading: "🌍 International Opportunities",
        color: "#69ff47",
        items: [
          "🇩🇪 Germany — Highest demand for mechatronics engineers globally; many companies sponsor visas; Job Seeker Visa available",
          "🇨🇦 Canada — Express Entry + Provincial Nominee Programs favor STEM engineers; growing robotics sector",
          "🇦🇺 Australia — Skills shortage list includes mechatronics; 482 Temporary Skill Shortage visa pathway",
          "🇸🇬 Singapore — Strong advanced manufacturing + IoT hub; MNC hiring very active",
          "🇦🇪 UAE/Dubai — Expanding automation sector; no income tax; Indian engineers highly recruited",
          "🇯🇵 Japan — Severe engineering shortage; JASSO scholarships + company-sponsored visas available",
          "🇳🇱 Netherlands — ASML, Philips, NXP headquartered here; Dutch Highly Skilled Migrant Visa accessible",
        ],
      },
      {
        heading: "💻 Remote Opportunities",
        color: "#ffb300",
        items: [
          "Embedded Systems Consultant (remote) — Upwork, Toptal, Gun.io",
          "CAD/SolidWorks Designer — Freelance on Fiverr, Upwork (₹500–₹2,000/hour)",
          "PCB/Hardware Review Consultant — after gaining PCB design skills",
          "Technical Documentation Writer — IoT/embedded manuals (good English + technical knowledge)",
          "Online Tutor — Arduino, SolidWorks, MATLAB on Chegg, Vedantu, Unacademy",
          "Remote IoT Developer — many US/EU startups hire globally for firmware roles",
        ],
      },
      {
        heading: "🏢 Beginner-Friendly & Startup Companies (India)",
        color: "#ff6b6b",
        items: [
          "Ati Motors (Bengaluru) — autonomous mobile robots, actively hiring freshers",
          "Addverb Technologies (Noida) — warehouse robotics, GET program",
          "Planys Technologies (Chennai) — pipeline/underwater robotics, great fit for your pipeline robot project",
          "Systemantics (Bengaluru) — industrial robots, fresher-friendly",
          "CynLr (Bengaluru) — visual robotics startup, cutting-edge",
          "Niqo Robotics (Coimbatore) — cotton-picking robots, Tamil Nadu based",
          "Detect Technologies (Chennai) — industrial inspection AI+sensors, perfect fit",
          "SigTuple (Bengaluru) — medical robotics + AI",
        ],
      },
    ],
  },

  salary: {
    title: "Salary & Growth Intelligence",
    subtitle: "Realistic compensation data for India and global markets",
    blocks: [
      {
        heading: "💰 India Salary Expectations (Fresher)",
        color: "#69ff47",
        items: [
          "Embedded Systems Engineer: ₹4–7 LPA (core companies), ₹8–12 LPA (product companies)",
          "Robotics Engineer: ₹4–8 LPA fresher; ₹15–25 LPA with 3 years + ROS",
          "Automation/PLC Engineer: ₹3.5–6 LPA fresher; PSUs offer ₹7–9 LPA",
          "IoT Developer: ₹4–8 LPA; startups may offer ESOPs on top",
          "CAD/Design Engineer: ₹3–5 LPA at service firms; ₹6–10 LPA at product companies",
          "GET (PSU — BHEL, BEL, NTPC): ₹7–10 LPA with job security + benefits",
        ],
      },
      {
        heading: "🌍 International Salary Benchmarks",
        color: "#00e5ff",
        items: [
          "🇩🇪 Germany: €35,000–€50,000/year entry-level mechatronics engineer",
          "🇨🇦 Canada: CAD 55,000–75,000/year embedded/robotics engineer",
          "🇸🇬 Singapore: SGD 3,500–5,500/month for embedded engineer",
          "🇦🇺 Australia: AUD 65,000–85,000/year manufacturing/robotics engineer",
          "🇺🇸 USA: USD 70,000–90,000/year embedded systems (after MS or with exceptional skills)",
          "🇦🇪 UAE: AED 8,000–15,000/month, tax-free, for hardware engineers",
        ],
      },
      {
        heading: "📈 Highest-Paying & Most Future-Proof Fields",
        color: "#c77dff",
        items: [
          "#1 AI Robotics / ROS2 + Machine Learning — ₹20–50 LPA in 3–5 years",
          "#2 Autonomous Systems (automotive/drone) — Bosch, Mobileye, Tesla hiring aggressively",
          "#3 Semiconductor Embedded (VLSI + Firmware) — Texas Instruments, Qualcomm, NXP",
          "#4 Industrial IoT / Industry 4.0 — Siemens, ABB, Honeywell huge demand",
          "#5 Medical Device Engineering — FDA-regulated, high salary, stable demand",
          "#6 Space & Defense Embedded — ISRO, DRDO, private space startups (Agnikul, Skyroot)",
        ],
      },
    ],
  },

  skillgap: {
    title: "Skill Gap Analysis",
    subtitle: "What you're missing vs. what top companies expect",
    blocks: [
      {
        heading: "🔴 Critical Missing Skills (Learn in 30–60 Days)",
        color: "#ff6b6b",
        items: [
          "Python — Mandatory for robotics (ROS), AI, automation scripting; learn basics in 2 weeks",
          "ROS / ROS2 — The #1 skill gap for robotics engineers globally; free tutorials on ros.org",
          "Git & GitHub — Version control is expected by 100% of tech employers",
          "Communication Protocols depth — I2C, SPI, UART, CAN Bus implementation (not just theory)",
          "RTOS basics — FreeRTOS with STM32; you already have the hardware knowledge",
          "Linux/Bash basics — Most embedded development happens on Linux environments",
        ],
      },
      {
        heading: "🟡 Important Gaps (Learn in 60–90 Days)",
        color: "#ffb300",
        items: [
          "PCB Design — KiCad (free) or EasyEDA; major differentiator for hardware roles",
          "MQTT / Node-RED — IoT communication stack; pairs with your ESP32 knowledge",
          "Computer Vision basics — OpenCV + Python; unlocks robotics + inspection automation roles",
          "Docker basics — Increasingly expected for embedded Linux and ROS projects",
          "Technical Documentation — Datasheets, schematics, BOMs; critical for product roles",
          "MATLAB Simulink Model-Based Design — Deepen this for automotive (Bosch, Continental)",
        ],
      },
      {
        heading: "🎓 Certifications to Complete (Priority Order)",
        color: "#69ff47",
        items: [
          "#1 NPTEL: Embedded Systems Design (free, IIT professor, adds strong credibility)",
          "#2 Coursera: Introduction to the Internet of Things — UC Irvine (free audit)",
          "#3 Coursera: Robotics Specialization — UPenn (highly respected globally)",
          "#4 Texas Instruments: TI-RSLK Robotics System Learning Kit (free)",
          "#5 Autodesk: SolidWorks CSWA Certification (paid ~₹8,000 but globally recognized)",
          "#6 Siemens: Totally Integrated Automation (TIA) Portal — free online modules",
          "#7 AWS IoT / Google Cloud IoT fundamentals (free tiers available)",
        ],
      },
      {
        heading: "🏗️ Projects You Should Build Next",
        color: "#c77dff",
        items: [
          "Smart Home IoT Dashboard — ESP32 + MQTT + Node-RED + mobile app; showcases full IoT stack",
          "ROS2 Differential Drive Robot Simulation — Use Gazebo; essential for robotics job applications",
          "STM32 FreeRTOS Project — Multi-task embedded system with UART + sensor data logging",
          "Automated Quality Inspection System — Camera + OpenCV + servo actuator; directly job-relevant",
          "SolidWorks Assembly + FEA Analysis — Shows product engineering depth for CAD roles",
          "GitHub Portfolio — Document ALL existing projects with README, circuit diagrams, demo videos",
        ],
      },
    ],
  },

  roadmap: {
    title: "90-Day + 6-Month Career Roadmap",
    subtitle: "Week-by-week execution plan tailored to your profile",
    blocks: [
      {
        heading: "📅 Days 1–30: Foundation & Online Presence",
        color: "#00e5ff",
        items: [
          "Week 1: Create GitHub account → upload ALL existing projects with proper READMEs + circuit diagrams",
          "Week 1: Update LinkedIn with new headline, About section, and all internships + projects",
          "Week 2: Learn Python basics (2 hrs/day) — variables, loops, functions, lists; use freeCodeCamp or CS50P",
          "Week 2: Start NPTEL Embedded Systems course (register for current semester)",
          "Week 3: Learn Git & GitHub fundamentals — branching, commits, pull requests (1 hr/day)",
          "Week 3: Rewrite resume using STAR format for every experience bullet",
          "Week 4: Build first GitHub project from scratch: STM32 FreeRTOS sensor logger (document thoroughly)",
          "Week 4: Apply to 10+ internships/jobs on LinkedIn, Internshala, Naukri with updated resume",
          "Daily: Solve 1 embedded/electronics problem on StackExchange or forums; 30 min LinkedIn engagement",
        ],
      },
      {
        heading: "📅 Days 31–60: Skill Building & Project Creation",
        color: "#69ff47",
        items: [
          "Week 5–6: Install ROS2 on Ubuntu (use VM or WSL2) → complete official beginner tutorials",
          "Week 5–6: Learn communication protocols deeply: implement I2C + SPI on STM32 with real sensors",
          "Week 7: Build IoT project: ESP32 + DHT11 + MQTT + Node-RED dashboard (post on GitHub + LinkedIn)",
          "Week 7: Start Coursera Robotics Specialization (audit for free)",
          "Week 8: Begin KiCad PCB design — design a simple breakout board for a sensor you've used",
          "Week 8: Apply for CSWA SolidWorks certification exam; use official prep materials",
          "Daily: 45 min Python, 30 min embedded practice, 30 min LinkedIn networking",
          "Target: 5+ GitHub repositories with documentation, 500+ LinkedIn connections",
        ],
      },
      {
        heading: "📅 Days 61–90: Project Showcase & Job Hunting",
        color: "#ffb300",
        items: [
          "Week 9: Build ROS2 simulation project in Gazebo — differential drive robot with obstacle avoidance",
          "Week 9–10: Create portfolio website (free on GitHub Pages) — show projects with videos + code",
          "Week 10: Record 60-second demo videos for top 3 projects → post on LinkedIn (huge engagement)",
          "Week 11: Prepare for technical interviews — practice STM32, Arduino, C/C++ questions daily",
          "Week 11: Cold email 5 target companies per week (use template provided above)",
          "Week 12: Apply aggressively: 15–20 applications/week on LinkedIn, Naukri, Internshala, AngelList",
          "Week 12: Reach out to BHEL contacts for referrals — you already have a name there",
          "Target: 3+ interview calls, 1+ offer in hand or advanced stage",
        ],
      },
      {
        heading: "📅 Months 4–6: Acceleration & Specialization",
        color: "#c77dff",
        items: [
          "Choose your primary specialization: Embedded Systems OR Robotics (dual-tracking dilutes focus)",
          "If Embedded: Deep dive into automotive embedded (AUTOSAR, CAN Bus, MISRA C) — massive demand",
          "If Robotics: Complete UPenn Robotics Specialization + build 3 ROS2 projects",
          "Build a capstone project combining robotics + AI: object-detecting pick-and-place robot",
          "Start preparing for Germany/Singapore job market: research visa requirements, update resume to international format",
          "Complete CSWA certification; add to resume, LinkedIn",
          "Network actively: attend IEEE events, robotics meetups, online hackathons (Hackerearth, DevPost)",
          "Target: Secured job/internship offer, clear specialization path, international application shortlist",
        ],
      },
    ],
  },

  interview: {
    title: "Interview Preparation Guide",
    subtitle: "Technical, HR, and project-based questions with answers",
    blocks: [
      {
        heading: "🔧 Technical Interview Questions (Embedded/Robotics)",
        color: "#00e5ff",
        items: [
          "Q: What is the difference between microcontroller and microprocessor? — Know: MCU has CPU+RAM+Flash+peripherals; MPU is CPU only",
          "Q: Explain I2C vs SPI vs UART — Know: speeds, pin counts, master-slave topology differences",
          "Q: What is PWM and how is it used for motor control? — Duty cycle, frequency, H-bridge",
          "Q: What is an interrupt and why is it used? — vs polling; ISR; priority; latency",
          "Q: Explain volatile keyword in C — compiler optimization prevention for hardware registers",
          "Q: What is RTOS? Difference between task, thread, process? — Know FreeRTOS concepts",
          "Q: How does a servo motor differ from a stepper motor? — Position control, torque, feedback",
          "Q: What is a watchdog timer? — System reliability, auto-reset on hang",
          "Q: Explain DMA and why it's used? — CPU-free data transfer, improves performance",
          "Q: How would you debug a microcontroller that's not responding? — Systematic: power, clock, JTAG/SWD, oscilloscope",
        ],
      },
      {
        heading: "👥 HR Interview Questions",
        color: "#69ff47",
        items: [
          "Q: Tell me about yourself — Lead with SASTRA + mechatronics + 3 internships + key projects; end with career goal",
          "Q: Why mechatronics? — Genuine answer: hardware+software bridge; real-world systems; robotics passion",
          "Q: Your CGPA is 6.17 — how do you address this? — Redirect: 3 internships, hands-on projects, BHEL, practical skills compensate",
          "Q: Where do you see yourself in 5 years? — Senior embedded engineer or robotics tech lead; working on intelligent autonomous systems",
          "Q: Why do you want to join our company? — Research the company! Mention specific product/project you admire",
          "Q: What is your biggest weakness? — 'I haven't yet gone deep on ROS2 but I've started learning it actively'",
          "Q: Are you open to relocation? — Say yes for India; research Germany/Singapore options honestly",
          "Q: What salary do you expect? — Quote: ₹5–7 LPA for India fresher roles; 'open to discussion based on role'",
        ],
      },
      {
        heading: "🤖 Project Explanation Questions",
        color: "#ffb300",
        items: [
          "Q: Explain your pipeline inspection robot — Problem (manual inspection risks), Solution (sensors + embedded control), Outcome (reduced manual intervention)",
          "Q: What challenges did you face in the 3-DOF manipulator? — ESP32 servo timing, kinematics calculation, mechanical calibration",
          "Q: How does your line follower work? — IR sensors detect contrast, PID control (if used), Arduino PWM for motor speed",
          "Q: What did you learn from STM32 lab work? — Low-level register access, HAL abstraction, peripheral configuration workflow",
          "Q: How did your BHEL internship add value? — Industrial scale manufacturing exposure, safety protocols, understanding production constraints",
          "PREP TIP: For each project, prepare: Problem → Your Role → Technology Used → Challenges → Outcome → What You Learned",
        ],
      },
      {
        heading: "🚫 Common Fresher Mistakes to Avoid",
        color: "#ff6b6b",
        items: [
          "Don't say 'I know everything about Arduino' — say 'I have strong foundations and keep expanding'",
          "Don't apologize for your CGPA — redirect to practical achievements confidently",
          "Don't say 'I'm a quick learner' without proof — always follow with a specific example",
          "Don't negotiate salary in first interview round — wait for HR round",
          "Don't forget to research the company — saying 'I don't know much about your company' is an instant reject",
          "Don't list skills you can't defend — every item on your resume is interview territory",
          "Don't forget to ask questions at the end — shows genuine interest; ask about team, product, learning opportunities",
        ],
      },
    ],
  },

  strategy: {
    title: "Job Search Strategy",
    subtitle: "Portals, LinkedIn tactics, networking, recruiter outreach",
    blocks: [
      {
        heading: "🌐 Best Job Portals by Category",
        color: "#00e5ff",
        items: [
          "India Core Tech: Naukri.com (largest), LinkedIn Jobs, IIMjobs (premium roles)",
          "Startups: AngelList/Wellfound, WorkAtAStartup, HasJob",
          "Internships: Internshala (best for students), LinkedIn, LetsIntern, Unstop",
          "Remote/Global: LinkedIn, Indeed, Glassdoor, Remote.co, We Work Remotely",
          "Germany Specific: Make-it-in-Germany.com, StepStone.de, Indeed.de, LinkedIn",
          "Campus Recruitment: Register on your college's CCPD portal; attend job fairs",
          "Freelance: Upwork (embedded/CAD), Fiverr (SolidWorks), Toptal (for later)",
        ],
      },
      {
        heading: "🔍 LinkedIn Search Strategy",
        color: "#69ff47",
        items: [
          "Search: 'Embedded Systems Engineer fresher 2026' — filter by India, posted this week",
          "Search: 'Graduate Engineer Trainee Mechatronics' for GET programs",
          "Follow: Companies of interest → turn on 'All notifications' → apply on day 1 of posting",
          "Connect with: HR managers + hiring managers at target companies (send note with connection request)",
          "Join groups: 'Embedded Systems Engineers', 'Robotics & Automation India', 'IoT Professionals'",
          "Post weekly: 1 technical post about your projects/learnings — builds visibility with recruiters",
          "Alumni network: Find SASTRA alumni at target companies → reach out for referral",
        ],
      },
      {
        heading: "📊 Best Resume Keywords by Role",
        color: "#ffb300",
        items: [
          "Embedded: Firmware, RTOS, bare-metal, HAL, device drivers, interrupt, DMA, I2C, SPI, UART, CAN",
          "Robotics: ROS/ROS2, kinematics, path planning, servo control, SLAM, Gazebo, trajectory",
          "IoT: MQTT, ESP32, edge computing, cloud connectivity, sensor fusion, Node-RED, AWS IoT",
          "Automation: PLC, SCADA, HMI, Ladder Logic, Industry 4.0, MODBUS, OPC-UA",
          "CAD: SolidWorks, GD&T, DFM, FEA, assembly design, BOM, tolerance analysis",
          "General Tech: C/C++, Python, Git, Linux, real-time systems, debugging, oscilloscope",
        ],
      },
      {
        heading: "🤝 Networking Strategy",
        color: "#c77dff",
        items: [
          "BHEL Contact: Your BHEL supervisor is your most powerful contact — maintain relationship, ask for referral",
          "LinkedIn Outreach Formula: 'Hi [Name], I'm a final-year mechatronics student interested in [role] at [Company]. I noticed [specific thing]. Would you be open to a 15-minute call?' — 30–40% reply rate",
          "Attend: IEEE conferences, robotics hackathons, NASSCOM events, college tech fests as visitor",
          "Contribute: Comment thoughtfully on posts by engineers in your target field — builds visibility",
          "Give before you ask: Share useful resources, answer questions on forums before asking for referrals",
          "Track outreach: Use a spreadsheet — Company, Contact, Date, Response, Follow-up Date",
        ],
      },
    ],
  },

  hustle: {
    title: "Side Hustles, Freelance & Startup Ideas",
    subtitle: "Ways to earn, build credibility, and explore entrepreneurship",
    blocks: [
      {
        heading: "💸 Freelance Services You Can Start This Week",
        color: "#69ff47",
        items: [
          "SolidWorks/CAD Drafting — Mechanical designers are scarce on Fiverr; ₹2,000–₹15,000/project",
          "Arduino/ESP32 Custom Projects — Hobbyists, students, small businesses need custom embedded solutions",
          "3D Model Design for 3D Printing — Product designers, cosplay creators, entrepreneurs need STL files",
          "Technical Assignment Help — Help engineering students (ethically) with MATLAB, SolidWorks",
          "Embedded Systems Tutoring — Teach Arduino, STM32 on Superprof, Urban Pro, LinkedIn Learning",
          "Technical Documentation — Write user manuals, datasheet summaries for small hardware companies",
        ],
      },
      {
        heading: "🚀 Startup Ideas Based on Your Skills",
        color: "#00e5ff",
        items: [
          "Agricultural IoT Sensors — Tamil Nadu farming context: soil moisture + weather + GSM alert systems; huge government grants available (NABARD, ICAR)",
          "Industrial Inspection Drone/Robot — Your pipeline robot project can become a product; Detect Technologies proved this market",
          "Smart Warehouse Automation Kit — Low-cost AMR (autonomous mobile robot) for small Indian warehouses",
          "Embedded Systems Training Platform — Hardware kit + online course for engineering students; EdTech + hardware",
          "3D Printing as a Service (3PaaS) — Custom part printing for local manufacturers in Tiruchirappalli industrial belt",
          "IoT-based Predictive Maintenance — For small manufacturing units; fits your BHEL + Shanmuga Forging exposure perfectly",
        ],
      },
      {
        heading: "📚 Platforms to Monetize Your Knowledge",
        color: "#ffb300",
        items: [
          "Udemy: Create a course on 'Arduino + STM32 for Beginners' — ₹30,000–₹2,00,000/year passive income potential",
          "YouTube: Project demo channel — 'Mechatronics with Deebishaa' builds portfolio + income",
          "Instructables / Hackster.io: Publish project tutorials — builds international reputation",
          "Thingiverse / Printables: Share SolidWorks + 3D print designs — builds design portfolio",
          "GitHub Sponsors: Once you have popular open-source embedded projects",
          "Toptal / Gun.io: Premium freelance platforms once you have 1+ year experience",
        ],
      },
    ],
  },
};

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      style={{
        background: copied ? "#69ff47" : "rgba(255,255,255,0.1)",
        color: copied ? "#000" : "#fff",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: "6px",
        padding: "4px 12px",
        fontSize: "11px",
        cursor: "pointer",
        marginTop: "8px",
        transition: "all 0.2s",
        fontFamily: "inherit",
      }}
    >
      {copied ? "✓ Copied!" : "Copy"}
    </button>
  );
}

function Block({ block }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${block.color}33`,
        borderLeft: `3px solid ${block.color}`,
        borderRadius: "10px",
        padding: "18px 20px",
        marginBottom: "14px",
      }}
    >
      <div
        style={{
          fontSize: "13px",
          fontWeight: "700",
          color: block.color,
          marginBottom: "12px",
          letterSpacing: "0.03em",
          fontFamily: "'Space Mono', monospace",
        }}
      >
        {block.heading}
      </div>

      {block.isLong ? (
        <div>
          <pre
            style={{
              fontFamily: "'DM Mono', 'Courier New', monospace",
              fontSize: "12px",
              color: "#d0d0d0",
              whiteSpace: "pre-wrap",
              lineHeight: "1.8",
              margin: 0,
              background: "rgba(0,0,0,0.3)",
              padding: "14px",
              borderRadius: "8px",
            }}
          >
            {block.content}
          </pre>
          <CopyButton text={block.content} />
        </div>
      ) : (
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {block.items.map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                marginBottom: "8px",
                fontSize: "12.5px",
                color: "#c8c8c8",
                lineHeight: "1.6",
              }}
            >
              <span style={{ color: block.color, flexShrink: 0, marginTop: "2px" }}>▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function CareerReport() {
  const [active, setActive] = useState("profile");
  const current = data[active];

  return (
    <>
      <style>{`
        .career-container {
          min-height: 100vh;
          background: #0a0a0f;
          font-family: 'DM Sans', 'Segoe UI', sans-serif;
          color: #e8e8e8;
          display: flex;
          flex-direction: row;
        }
        .career-sidebar {
          width: 220px;
          flex-shrink: 0;
          background: #0f0f18;
          border-right: 1px solid rgba(255,255,255,0.07);
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
        }
        .career-sidebar-header {
          padding: 24px 16px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .career-nav {
          padding: 12px 8px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .career-content {
          flex: 1;
          padding: 40px;
          max-width: 900px;
        }
        @media (max-width: 768px) {
          .career-container {
            flex-direction: column;
          }
          .career-sidebar {
            width: 100%;
            height: auto;
            position: relative;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.07);
          }
          .career-sidebar-header {
            padding: 16px;
          }
          .career-nav {
            flex-direction: row;
            overflow-x: auto;
            padding: 12px 16px;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
          }
          .career-nav button {
            flex-shrink: 0;
            margin-bottom: 0 !important;
            margin-right: 8px;
          }
          .career-content {
            padding: 20px 16px;
          }
        }
      `}</style>
    <div className="career-container">
      {/* Sidebar */}
      <div className="career-sidebar">
        <div className="career-sidebar-header">
          <div style={{ fontSize: "13px", fontWeight: "800", color: "#00e5ff", letterSpacing: "0.1em", fontFamily: "'Space Mono', monospace" }}>
            DEEBISHAA S
          </div>
          <div style={{ fontSize: "10px", color: "#666", marginTop: "4px" }}>Career Intelligence Report</div>
        </div>
        <nav className="career-nav">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "10px 12px",
                marginBottom: "2px",
                background: active === s.id ? "rgba(0,229,255,0.08)" : "transparent",
                border: active === s.id ? "1px solid rgba(0,229,255,0.2)" : "1px solid transparent",
                borderRadius: "8px",
                color: active === s.id ? "#00e5ff" : "#888",
                fontSize: "11.5px",
                cursor: "pointer",
                transition: "all 0.15s",
                fontFamily: "inherit",
              }}
            >
              {s.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="career-content" style={{ overflowY: "auto", maxHeight: "100vh" }}>
        {/* Header */}
        <div style={{ marginBottom: "28px" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(0,229,255,0.08)",
              border: "1px solid rgba(0,229,255,0.2)",
              borderRadius: "6px",
              padding: "3px 10px",
              fontSize: "10px",
              color: "#00e5ff",
              letterSpacing: "0.1em",
              marginBottom: "10px",
              fontFamily: "'Space Mono', monospace",
            }}
          >
            CAREER INTELLIGENCE REPORT — 2026
          </div>
          <h1
            style={{
              margin: "0 0 6px",
              fontSize: "26px",
              fontWeight: "800",
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            {current.title}
          </h1>
          <p style={{ margin: 0, fontSize: "13px", color: "#666" }}>{current.subtitle}</p>
        </div>

        {/* Blocks */}
        {current.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>
    </div>
    </>
  );
}

