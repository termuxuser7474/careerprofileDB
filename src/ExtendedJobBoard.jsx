import { useState, useEffect } from "react";

const ALL_JOBS = [
  // EV & Auto
  { num:21, company:"Ather Energy", type:"EV", role:"Manufacturing/R&D Engineer (GET)", location:"Hosur/Bengaluru", salary:"₹4–5.5 LPA", match:90, level:"Easy", link:"https://www.atherenergy.com/careers" },
  { num:22, company:"Ola Electric", type:"EV", role:"Manufacturing Eng. Trainee", location:"Krishnagiri, TN", salary:"₹4–6 LPA", match:80, level:"Easy", link:"https://www.olaelectric.com/careers" },
  { num:23, company:"Altigreen Propulsion", type:"EV", role:"Embedded / Electronics Eng.", location:"Bengaluru", salary:"₹4–5.5 LPA", match:83, level:"Easy", link:"https://www.altigreen.com/careers" },
  { num:24, company:"Karaka eDrives", type:"EV", role:"Electronics Engineer (Fresher)", location:"Coimbatore", salary:"₹3.5–4.5 LPA", match:87, level:"Easy", link:"https://in.linkedin.com/company/karaka-edrives" },
  { num:25, company:"Virya Mobility 5.0", type:"EV", role:"Mechatronics / Product Eng.", location:"Bengaluru", salary:"₹4–5 LPA", match:80, level:"Easy", link:"https://in.linkedin.com/company/virya-mobility" },
  { num:26, company:"Mahindra & Mahindra", type:"Auto", role:"GET – Mechatronics/Electronics", location:"Chennai / Hosur", salary:"₹4–10 LPA", match:76, level:"Medium", link:"https://careers.mahindra.com" },
  { num:27, company:"Ashok Leyland", type:"Auto", role:"GET / NEEM Trainee", location:"Hosur / Chennai", salary:"₹3.5–5 LPA", match:84, level:"Easy", link:"https://www.ashokleyland.com/en/careers" },
  { num:28, company:"Renault Nissan India", type:"Auto", role:"Production / Manufacturing Trainee", location:"Oragadam, Chennai", salary:"₹3.5–5 LPA", match:74, level:"Medium", link:"https://careers.renault.com" },
  { num:29, company:"Royal Enfield", type:"Auto", role:"GET – Manufacturing / Design", location:"Chennai (Vallam Vadagal)", salary:"₹4–5.5 LPA", match:75, level:"Medium", link:"https://jobs.royalenfield.com" },
  { num:30, company:"Bajaj Auto", type:"Auto", role:"Graduate Engineer Trainee", location:"Hosur / Pune", salary:"₹4–6 LPA", match:72, level:"Medium", link:"https://www.bajajautocareers.com" },
  { num:31, company:"Aptiv India", type:"MNC", role:"Embedded / Wiring Harness Engineer", location:"Chennai / Bengaluru", salary:"₹4–6 LPA", match:73, level:"Medium", link:"https://www.aptiv.com/en/careers" },
  { num:32, company:"Daimler Commercial Vehicles", type:"MNC", role:"GET – Production / Quality", location:"Chennai (Oragadam)", salary:"₹4–5.5 LPA", match:70, level:"Medium", link:"https://www.daimler-india.com/careers" },
  { num:33, company:"BMW Group India", type:"MNC", role:"GET – Engineering", location:"Chennai", salary:"₹5–7 LPA", match:62, level:"Hard", link:"https://www.bmwgroup.jobs/in" },
  { num:34, company:"Komatsu India", type:"Mfg", role:"GET – Mechatronics / Automation", location:"Hosur, TN", salary:"₹3.5–5 LPA", match:79, level:"Easy", link:"https://www.komatsu.com/en/careers" },
  { num:35, company:"Mercedes-Benz R&D India", type:"MNC", role:"Embedded Software Eng. (Entry)", location:"Bengaluru", salary:"₹5–8 LPA", match:68, level:"Hard", link:"https://group.mercedes-benz.com/careers" },
  // Embedded & IoT
  { num:36, company:"Novatek Microsystems", type:"Startup", role:"IoT / Firmware Engineer (Fresher)", location:"Hosur, TN", salary:"₹3.5–5 LPA", match:86, level:"Easy", link:"https://in.linkedin.com/company/novatek-microsystems" },
  { num:37, company:"Surinova Pvt Ltd", type:"Startup", role:"Jr. Robotics / Mechatronics Engineer", location:"Chennai (Alandur)", salary:"₹2.4–4.2 LPA", match:92, level:"Easy", link:"https://in.indeed.com/cmp/Surinova-Private-Limited" },
  { num:38, company:"Benir E Store Solutions", type:"Startup", role:"Junior Electronics / Arduino Developer", location:"Chennai (Velachery)", salary:"₹3–4 LPA", match:88, level:"Easy", link:"https://in.linkedin.com/company/benir" },
  { num:39, company:"Blackbird Solutions", type:"Startup", role:"Jr. Service Engineer – Electronics", location:"Chennai (Vadapalani)", salary:"₹3–4 LPA", match:82, level:"Easy", link:"https://in.linkedin.com/company/blackbird-solutions" },
  { num:40, company:"E Zone Electronics", type:"SME", role:"Embedded Developer", location:"Tiruchirappalli, TN", salary:"₹2.5–3.5 LPA", match:90, level:"Easy", link:"https://in.indeed.com/cmp/E-Zone-Electronics" },
  { num:41, company:"Exovian Robotics", type:"Startup", role:"Robotics & AI Trainee", location:"Nagercoil, TN", salary:"₹3–4 LPA", match:85, level:"Easy", link:"https://in.linkedin.com/company/exovian-robotics" },
  { num:42, company:"Microshare Software", type:"SME", role:"C++ / IoT Developer", location:"Chennai", salary:"₹3.5–5 LPA", match:78, level:"Medium", link:"https://in.linkedin.com/company/microshare" },
  { num:43, company:"Vi Microsystems", type:"SME", role:"Production / Embedded Engineer", location:"Chennai", salary:"₹3.5–5 LPA", match:80, level:"Easy", link:"https://in.linkedin.com/company/vi-microsystems" },
  { num:44, company:"Qantom Software", type:"Startup", role:"Junior Embedded Developer", location:"Bengaluru", salary:"₹3.5–5 LPA", match:82, level:"Easy", link:"https://in.linkedin.com/company/qantom-software" },
  { num:45, company:"GSAS Micro Systems", type:"SME", role:"Field Application Engineer (Fresher)", location:"Bengaluru", salary:"₹3–5 LPA", match:79, level:"Easy", link:"https://in.linkedin.com/company/gsas-micro-systems" },
  { num:46, company:"Seetharam Mechatronics", type:"SME", role:"Firmware / Embedded Engineer", location:"Chennai (Ambattur)", salary:"₹3–4 LPA", match:83, level:"Easy", link:"https://in.indeed.com/cmp/Seetharam-Mechatronics" },
  { num:47, company:"1 Crore Projects", type:"Startup", role:"Electronics / IoT Graduate", location:"Chennai (Vadapalani)", salary:"₹2.5–3.5 LPA", match:84, level:"Easy", link:"https://1croreprojects.com" },
  { num:48, company:"Predigle (Esper Group)", type:"Startup", role:"IoT Engineer", location:"Chennai", salary:"₹3.5–5 LPA", match:81, level:"Easy", link:"https://in.linkedin.com/company/esper-group" },
  { num:49, company:"Freshot Robotics", type:"Startup", role:"Design / Embedded Engineer", location:"Bengaluru", salary:"₹3.5–5 LPA", match:87, level:"Easy", link:"https://in.linkedin.com/company/freshot-robotics" },
  { num:50, company:"Doozy Robotics", type:"Startup", role:"Fresher Robotics Engineer", location:"Chennai", salary:"₹3–4 LPA", match:86, level:"Easy", link:"https://in.linkedin.com/company/doozy-robotics" },
  { num:51, company:"ARKMINDS Infotech", type:"Startup", role:"Mechatronics Engineer (Fresher)", location:"Chennai", salary:"₹3–4 LPA", match:90, level:"Easy", link:"https://in.linkedin.com/company/arkminds-infotech" },
  { num:52, company:"Crestclimber Software", type:"Startup", role:"IoT/Embedded Robotics Engineer", location:"Chennai / Bengaluru", salary:"₹3.5–5 LPA", match:86, level:"Easy", link:"https://in.linkedin.com/company/crestclimber" },
  { num:53, company:"XSub Technologies", type:"Defence", role:"Embedded Electronics Engineer", location:"Chennai", salary:"₹4–6 LPA", match:82, level:"Medium", link:"https://in.linkedin.com/company/xsub-technologies" },
  { num:54, company:"Anok Media (PCB Design)", type:"Startup", role:"PCB Design Intern → Full Time", location:"Bengaluru", salary:"₹2.4–4.8 LPA", match:76, level:"Easy", link:"https://in.linkedin.com/company/anok-media" },
  { num:55, company:"Convergix Automation", type:"MNC", role:"Automation Engineer (Entry)", location:"Bengaluru / Chennai", salary:"₹4–5 LPA", match:79, level:"Medium", link:"https://convergix.com/careers" },
  { num:56, company:"Zenjade Automation", type:"Startup", role:"Fresher Engineer – Automation", location:"Chennai", salary:"₹3–4 LPA", match:87, level:"Easy", link:"https://in.linkedin.com/company/zenjade-automation" },
  { num:57, company:"CONSYST Technologies", type:"Startup", role:"Mechatronics / Automation Eng.", location:"Coimbatore", salary:"₹3.5–5 LPA", match:88, level:"Easy", link:"https://in.linkedin.com/company/consyst-technologies" },
  { num:58, company:"Svaya Robotics", type:"Startup", role:"Robotics Engineer (Fresher)", location:"Bengaluru", salary:"₹3.5–5 LPA", match:88, level:"Easy", link:"https://svayarobotics.com/careers" },
  { num:59, company:"Hindiko Solution India", type:"Mfg", role:"Mechatronics Technician", location:"Chennai", salary:"₹3.4–4 LPA", match:83, level:"Easy", link:"https://in.linkedin.com/company/hindiko-solution-india" },
  { num:60, company:"Qtek Mechatronics", type:"SME", role:"Junior Mechatronics Engineer", location:"Chennai", salary:"₹3.5–4.5 LPA", match:87, level:"Easy", link:"https://in.linkedin.com/company/qtek-mechatronics" },
  // CAD & Design
  { num:61, company:"Preuss Powertrain", type:"Auto", role:"Jr. Engineer – Design (Creo)", location:"Bengaluru", salary:"₹3.5–4.5 LPA", match:85, level:"Easy", link:"https://in.linkedin.com/company/preuss-powertrain" },
  { num:62, company:"777Trinity Technologies", type:"SME", role:"Design Engineer – SolidWorks", location:"Chennai", salary:"₹3.5–5 LPA", match:84, level:"Easy", link:"https://in.linkedin.com/company/777trinity" },
  { num:63, company:"Advenser Engineering", type:"SME", role:"BIM / CAD Drafter (Mechanical)", location:"Bengaluru / Remote", salary:"₹3–4.5 LPA", match:74, level:"Easy", link:"https://www.advenser.com/careers" },
  { num:64, company:"Phoenix Aerospace", type:"SME", role:"Aircraft Interior Design Trainee", location:"Bengaluru", salary:"₹3.5–5 LPA", match:72, level:"Medium", link:"https://in.linkedin.com/company/phoenix-aerospace" },
  { num:65, company:"Abtyche Alfotec", type:"Startup", role:"GET (Graduate Engineer Trainee)", location:"Bengaluru", salary:"₹3–4.5 LPA", match:80, level:"Easy", link:"https://in.linkedin.com/company/abtyche-alfotec" },
  { num:66, company:"AAVIS Engineering", type:"SME", role:"Trainee Engineer (Mechatronics)", location:"Bengaluru", salary:"₹3–4.5 LPA", match:79, level:"Easy", link:"https://in.linkedin.com/company/aavis-engineering" },
  { num:67, company:"Frido (R&D GET)", type:"Startup", role:"GET Mechatronics – R&D", location:"Remote eligible", salary:"₹3.5–5 LPA", match:86, level:"Easy", link:"https://frido.in/careers" },
  { num:68, company:"Milacron India", type:"Mfg", role:"Graduate Engineer Trainee", location:"Bengaluru", salary:"₹3.5–4.5 LPA", match:78, level:"Easy", link:"https://www.milacron.com/careers" },
  { num:69, company:"SKF India", type:"MNC", role:"Engineering Trainee – Mechatronics", location:"Bengaluru / Coimbatore", salary:"₹3.5–5 LPA", match:75, level:"Medium", link:"https://www.skf.com/in/footer/careers" },
  { num:70, company:"GEA Group India", type:"MNC", role:"Associate Mechanical Design Engineer", location:"Bengaluru", salary:"₹3.5–5 LPA", match:79, level:"Medium", link:"https://www.gea.com/en/careers" },
  { num:71, company:"Zeus Numerix", type:"Startup", role:"Simulation / R&D Engineer", location:"Bengaluru", salary:"₹3.5–5 LPA", match:72, level:"Medium", link:"https://www.zeusnumerix.com/careers" },
  { num:72, company:"Electroingenum", type:"Startup", role:"Power Electronics / Embedded Eng.", location:"Bengaluru", salary:"₹3.5–5 LPA", match:80, level:"Easy", link:"https://in.linkedin.com/company/electroingenum" },
  { num:73, company:"Posh Automats", type:"SME", role:"Automation / Robotics Trainee", location:"Chennai", salary:"₹3–4 LPA", match:85, level:"Easy", link:"https://in.linkedin.com/company/posh-automats" },
  { num:74, company:"YALI Mobility", type:"EV Startup", role:"Mechatronics / EV Engineer", location:"Chennai", salary:"₹3.5–5 LPA", match:80, level:"Easy", link:"https://yalimobility.com/careers" },
  { num:75, company:"Hya Tech Pvt Ltd", type:"SME", role:"Junior Robotics Engineer", location:"Chennai / Coimbatore", salary:"₹3–4.5 LPA", match:88, level:"Easy", link:"https://in.linkedin.com/company/hya-tech" },
  { num:76, company:"Pumo Technovation", type:"Startup", role:"Mechatronics/Product Engineer", location:"Coimbatore / Chennai", salary:"₹3.5–5 LPA", match:86, level:"Easy", link:"https://in.linkedin.com/company/pumo-technovation" },
  { num:77, company:"Edali Systems", type:"Startup", role:"Mechatronics/Automation Engineer", location:"Bengaluru / Coimbatore", salary:"₹3.5–5 LPA", match:85, level:"Easy", link:"https://in.linkedin.com/company/edali-systems" },
  { num:78, company:"Adroitec Engineering", type:"SME", role:"Technical Support / CAD Engineer", location:"Bengaluru", salary:"₹3–4.5 LPA", match:76, level:"Easy", link:"https://www.adroitec.com/careers" },
  { num:79, company:"Copes Tech India", type:"SME", role:"Design Engineer Trainee", location:"Bengaluru", salary:"₹3–4.5 LPA", match:78, level:"Easy", link:"https://in.linkedin.com/company/copes-tech-india" },
  { num:80, company:"Unitherm Engineers Ltd", type:"SME", role:"Graduate Engineering Trainee", location:"Bengaluru (Bommasandra)", salary:"₹3–4.5 LPA", match:75, level:"Easy", link:"https://in.linkedin.com/company/unitherm-engineers" },
  // Mfg & Quality
  { num:81, company:"Shanmuga Precision Forging", type:"Mfg", role:"Quality/Manufacturing Engineer", location:"Tamil Nadu", salary:"₹3.5 LPA", match:85, level:"Easy", link:"https://in.indeed.com/cmp/Shanmuga-Precision-Forging" },
  { num:82, company:"SAC Engine Components", type:"Mfg", role:"GET – QA / Metrology / R&D", location:"Tamil Nadu", salary:"₹3–4 LPA", match:78, level:"Easy", link:"https://in.linkedin.com/company/sac-engine-components" },
  { num:83, company:"Reva Phoenix Labs", type:"Cal Lab", role:"Calibration Engineer (Fresher)", location:"Tamil Nadu", salary:"₹3.5–4 LPA", match:79, level:"Easy", link:"https://in.linkedin.com/company/reva-phoenix-labs" },
  { num:84, company:"Tata Motors", type:"Auto", role:"Graduate Engineer Trainee", location:"Hosur / Pune", salary:"₹4–5.5 LPA", match:73, level:"Medium", link:"https://www.tatamotorscareers.com" },
  { num:85, company:"Hyundai Motor India", type:"Auto", role:"Manufacturing GET", location:"Chennai (Sriperumbudur)", salary:"₹4–5 LPA", match:72, level:"Medium", link:"https://www.hyundai.com/in/careers" },
  { num:86, company:"Lucas TVS", type:"Auto", role:"Graduate Engineer Trainee", location:"Chennai / Mysuru", salary:"₹3.5–4.5 LPA", match:82, level:"Easy", link:"https://www.lucastvs.com/careers" },
  { num:87, company:"Ojas Automation Systems", type:"SME", role:"PLC Automation Engineer", location:"Coimbatore", salary:"₹3.5–5 LPA", match:83, level:"Easy", link:"https://in.linkedin.com/company/ojas-automation-systems" },
  { num:88, company:"Siddhan Intelligence", type:"Startup", role:"Project Mgmt Trainee / Cloud", location:"Chennai", salary:"₹3.5 LPA", match:65, level:"Medium", link:"https://in.linkedin.com/company/siddhan-intelligence" },
  { num:89, company:"Matrix Solutions", type:"SME", role:"Fresher Mechanical Engineer GET", location:"Bengaluru", salary:"₹3–4 LPA", match:82, level:"Easy", link:"https://in.linkedin.com/company/matrix-solutions-pvt-ltd" },
  { num:90, company:"ShobhaGlobs Engineers Hub", type:"SME", role:"GET – Production Engineering", location:"Bengaluru", salary:"₹3–4 LPA", match:80, level:"Easy", link:"https://in.linkedin.com/company/shobhaglobs-engineers-hub" },
  { num:91, company:"AADITYA Mechatronics", type:"SME", role:"Mech GET – Design/Production/Quality", location:"Bengaluru", salary:"₹3.5–4 LPA", match:84, level:"Easy", link:"https://in.linkedin.com/company/aaditya-mechatronics" },
  { num:92, company:"Autotek Systems", type:"Mfg", role:"Graduate Engineer Trainee (Mech)", location:"Bengaluru", salary:"₹3–4.5 LPA", match:82, level:"Easy", link:"https://in.linkedin.com/company/autotek-systems" },
  { num:93, company:"Schneider Electric", type:"MNC", role:"Junior Mechanical Engineer", location:"Hosur, TN", salary:"₹4–5 LPA", match:80, level:"Medium", link:"https://www.se.com/in/en/about-us/careers" },
  { num:94, company:"Bosch India", type:"MNC", role:"GET – Engineering & Technology", location:"Bengaluru / Chennai", salary:"₹4–5.5 LPA", match:78, level:"Medium", link:"https://www.bosch.in/careers" },
  { num:95, company:"Honeywell Aerospace", type:"MNC", role:"Engineering Graduate Trainee", location:"Bengaluru / Chennai", salary:"₹4.5–6 LPA", match:72, level:"Medium", link:"https://careers.honeywell.com" },
  { num:96, company:"ABB India", type:"MNC", role:"R&D Associate Engineer", location:"Bengaluru", salary:"₹4–5.5 LPA", match:74, level:"Medium", link:"https://new.abb.com/careers" },
  { num:97, company:"Rolls-Royce India", type:"MNC", role:"Graduate Engineer (Mech/Mechatronics)", location:"Bengaluru", salary:"₹5–7 LPA", match:68, level:"Hard", link:"https://careers.rolls-royce.com" },
  { num:98, company:"Micron Technology", type:"MNC", role:"Manufacturing Engineering Trainee", location:"Bengaluru", salary:"₹4.5–6 LPA", match:70, level:"Medium", link:"https://www.micron.com/careers" },
  { num:99, company:"Valeo India", type:"Auto", role:"Trainee Engineer (Mechatronics)", location:"Chennai", salary:"₹3.5–5 LPA", match:80, level:"Medium", link:"https://valeo.com/en/our-group/careers" },
  { num:100, company:"Siemens India", type:"MNC", role:"Graduate Trainee Engineer", location:"Bengaluru", salary:"₹6–10 LPA", match:88, level:"Medium", link:"https://www.siemens.com/in/en/company/jobs.html" },
  // Tech Support
  { num:101, company:"Cloudkampus", type:"Startup", role:"Embedded Systems Engineer (Fresher)", location:"Chennai (Mylapore)", salary:"₹3 LPA+", match:90, level:"Easy", link:"https://cloudkampus.com/careers" },
  { num:102, company:"Zoho Corporation", type:"Product", role:"Technical Support Engineer", location:"Chennai", salary:"₹3.5–5 LPA", match:70, level:"Easy", link:"https://careers.zohocorp.com" },
  { num:103, company:"Freshworks", type:"Product", role:"Customer Engineering (Fresher)", location:"Chennai", salary:"₹4–6 LPA", match:65, level:"Medium", link:"https://careers.freshworks.com" },
  { num:104, company:"Tata Elxsi", type:"MNC", role:"GET – Embedded / Automotive", location:"Bengaluru / Chennai", salary:"₹4–6 LPA", match:82, level:"Medium", link:"https://www.tataelxsi.com/careers" },
  { num:105, company:"KPIT Technologies", type:"MNC", role:"Software Trainee – Automotive Embedded", location:"Bengaluru / Chennai", salary:"₹3.5–5 LPA", match:79, level:"Medium", link:"https://www.kpit.com/careers" },
  { num:106, company:"Hexagon Manufacturing", type:"MNC", role:"Application Engineer (Fresher)", location:"Bengaluru", salary:"₹3.5–5 LPA", match:78, level:"Easy", link:"https://hexagon.com/careers" },
  { num:107, company:"PTC India (Creo/ThingWorx)", type:"MNC", role:"Application Support Engineer", location:"Chennai / Bengaluru", salary:"₹4–6 LPA", match:80, level:"Medium", link:"https://www.ptc.com/en/careers" },
  { num:108, company:"Ansys India", type:"MNC", role:"Application Engineer – Simulation", location:"Bengaluru", salary:"₹4–6 LPA", match:72, level:"Medium", link:"https://www.ansys.com/careers" },
  { num:109, company:"Dassault Systèmes", type:"MNC", role:"Value Solutions Engineer (GET)", location:"Bengaluru", salary:"₹5–7 LPA", match:70, level:"Hard", link:"https://www.3ds.com/careers" },
  { num:110, company:"Robert Bosch Engineering", type:"MNC", role:"Associate Software Engineer – IoT", location:"Bengaluru", salary:"₹4.5–6 LPA", match:75, level:"Medium", link:"https://www.bosch.in/careers" },
  { num:111, company:"Wipro PARI", type:"MNC", role:"Robotics Automation Engineer (Fresher)", location:"Chennai", salary:"₹3.5–5 LPA", match:83, level:"Easy", link:"https://pari.wipro.com/careers" },
  { num:112, company:"Cognizant IoT Practice", type:"MNC", role:"Programmer Analyst Trainee – IoT", location:"Chennai", salary:"₹4 LPA", match:68, level:"Medium", link:"https://careers.cognizant.com" },
  { num:113, company:"Capgemini India", type:"MNC", role:"GET – Engineering & Industrial IoT", location:"Chennai / Bengaluru", salary:"₹4 LPA", match:67, level:"Medium", link:"https://www.capgemini.com/in-en/careers" },
  { num:114, company:"L&T Technology Services", type:"MNC", role:"GET (Mechatronics-eligible) ⭐", location:"Chennai / Bengaluru / Mysuru", salary:"₹4 LPA + ₹25K stipend", match:95, level:"Easy", link:"https://www.ltts.com/careers" },
  { num:115, company:"Infosys BPM", type:"MNC", role:"Operations Analyst (Tech Support)", location:"Bengaluru / Chennai", salary:"₹3.5–4.5 LPA", match:60, level:"Easy", link:"https://careers.infosys.com" },
  { num:116, company:"HCL Technologies", type:"MNC", role:"GET – Hardware / Embedded", location:"Chennai", salary:"₹3.5–5 LPA", match:72, level:"Medium", link:"https://www.hcltech.com/careers" },
  { num:117, company:"Mphasis", type:"MNC", role:"Fresher Engineer – IoT/Systems", location:"Bengaluru", salary:"₹3.5–4.5 LPA", match:65, level:"Easy", link:"https://careers.mphasis.com" },
  { num:118, company:"TVS Motor Company", type:"Auto", role:"Graduate Apprentice Trainee ⭐", location:"Hosur, TN", salary:"₹3.5–4.5 LPA", match:93, level:"Easy", link:"https://www.tvsmotor.com/careers" },
  { num:119, company:"Titan Company Ltd", type:"Mfg", role:"Engineer 1 – Mechanical Assembly", location:"Hosur, TN", salary:"₹3.5–4.5 LPA", match:82, level:"Easy", link:"https://careers.titan.co.in" },
  { num:120, company:"Toyota Kirloskar Motor", type:"Auto", role:"Graduate Engineer Trainee", location:"Bengaluru (Bidadi)", salary:"₹4–5 LPA", match:80, level:"Medium", link:"https://www.toyotabharat.com/career" },
];

const DIFF = {
  Easy:   { bg:"#052e16", border:"#16a34a", text:"#4ade80", dot:"#22c55e", label:"EASY" },
  Medium: { bg:"#1c1200", border:"#d97706", text:"#fbbf24", dot:"#f59e0b", label:"MEDIUM" },
  Hard:   { bg:"#1a0000", border:"#dc2626", text:"#f87171", dot:"#ef4444", label:"HARD" },
};

const TABS = ["All","Easy","Medium","Hard"];
const SECTORS = ["All Sectors","EV & Auto","Embedded & IoT","CAD & Design","Mfg & Quality","Tech Support"];

const sectorMap = {
  "EV & Auto": j => j.num >= 21 && j.num <= 35,
  "Embedded & IoT": j => j.num >= 36 && j.num <= 60,
  "CAD & Design": j => j.num >= 61 && j.num <= 80,
  "Mfg & Quality": j => j.num >= 81 && j.num <= 100,
  "Tech Support": j => j.num >= 101 && j.num <= 120,
};

export default function ExtendedJobBoard() {
  const [diffFilter, setDiffFilter] = useState("All");
  const [sector, setSector] = useState("All Sectors");
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setTimeout(() => setMounted(true), 50); }, []);

  const filtered = ALL_JOBS.filter(j => {
    const dOk = diffFilter === "All" || j.level === diffFilter;
    const sOk = sector === "All Sectors" || (sectorMap[sector] && sectorMap[sector](j));
    const q = search.toLowerCase();
    const tOk = !q || j.company.toLowerCase().includes(q) || j.role.toLowerCase().includes(q) || j.location.toLowerCase().includes(q);
    return dOk && sOk && tOk;
  });

  const counts = { Easy: ALL_JOBS.filter(j=>j.level==="Easy").length, Medium: ALL_JOBS.filter(j=>j.level==="Medium").length, Hard: ALL_JOBS.filter(j=>j.level==="Hard").length };

  return (
    <div style={{
      fontFamily:"'DM Mono','Courier New',monospace",
      background:"#080c14",
      minHeight:"100vh",
      color:"#c9d1d9",
      padding:"0 0 40px 0",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@700;800&display=swap');
        * { box-sizing:border-box; }
        ::-webkit-scrollbar{width:4px;background:#0d1117}
        ::-webkit-scrollbar-thumb{background:#30363d;border-radius:2px}
        .job-row { transition: all 0.18s ease; }
        .job-row:hover { transform: translateX(3px); background: rgba(255,255,255,0.04) !important; }
        .apply-btn { transition: all 0.15s ease; }
        .apply-btn:hover { transform: scale(1.08); }
        .tab-btn { transition: all 0.15s ease; }
        .tab-btn:hover { opacity: 1 !important; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        .fade-up { animation: fadeUp 0.4s ease both; }
      `}</style>

      {/* Top bar */}
      <div style={{
        background:"linear-gradient(90deg,#0d1117 0%,#161b22 100%)",
        borderBottom:"1px solid #21262d",
        padding:"20px 24px 16px",
        position:"sticky", top:0, zIndex:10,
      }}>
        <div style={{fontFamily:"'Syne',sans-serif",fontSize:20,fontWeight:800,color:"#f0f6ff",letterSpacing:-0.5,marginBottom:2}}>
          DEEBISHAA S — Extended Job Board
        </div>
        <div style={{fontSize:11,color:"#484f58",letterSpacing:1.5,textTransform:"uppercase",marginBottom:14}}>
          100 Additional Companies · TN / Karnataka · 3.4+ LPA · Fresher 2026
        </div>

        {/* Difficulty summary pills */}
        <div style={{display:"flex",gap:8,marginBottom:14,flexWrap:"wrap"}}>
          {["Easy","Medium","Hard"].map(d => {
            const c = DIFF[d];
            return (
              <div key={d} style={{
                padding:"5px 14px", borderRadius:4,
                background: c.bg, border:`1px solid ${c.border}`,
                fontSize:12, fontWeight:500, color:c.text,
                display:"flex",alignItems:"center",gap:6,
              }}>
                <span style={{width:6,height:6,borderRadius:"50%",background:c.dot,display:"inline-block"}}/>
                {d} — {counts[d]} roles
              </div>
            );
          })}
          <div style={{padding:"5px 14px",borderRadius:4,background:"#161b22",border:"1px solid #30363d",fontSize:12,color:"#6e7681",display:"flex",alignItems:"center",gap:6}}>
            Total — {ALL_JOBS.length} roles
          </div>
        </div>

        {/* Filters row */}
        <div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
          {/* Difficulty tabs */}
          <div style={{display:"flex",gap:4,background:"#0d1117",border:"1px solid #21262d",borderRadius:6,padding:3}}>
            {TABS.map(t => {
              const active = diffFilter === t;
              const c = t !== "All" ? DIFF[t] : null;
              return (
                <button key={t} className="tab-btn" onClick={() => setDiffFilter(t)} style={{
                  padding:"5px 12px", borderRadius:4, border:"none", cursor:"pointer",
                  fontSize:11, fontWeight:500, letterSpacing:0.5,
                  background: active ? (c ? c.border : "#30363d") : "transparent",
                  color: active ? (c ? "#000" : "#f0f6ff") : "#6e7681",
                  opacity: active ? 1 : 0.8,
                }}>
                  {t === "All" ? "ALL" : DIFF[t].label}
                </button>
              );
            })}
          </div>

          {/* Sector select */}
          <select value={sector} onChange={e=>setSector(e.target.value)} style={{
            padding:"6px 10px", borderRadius:6, border:"1px solid #30363d",
            background:"#0d1117", color:"#8b949e", fontSize:11, cursor:"pointer", outline:"none",
          }}>
            {SECTORS.map(s=><option key={s}>{s}</option>)}
          </select>

          {/* Search */}
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="⌕  search company / role / city..."
            style={{
              flex:1, minWidth:180, padding:"6px 12px", borderRadius:6,
              border:"1px solid #30363d", background:"#0d1117",
              color:"#c9d1d9", fontSize:11, outline:"none",
            }}
          />
        </div>
      </div>

      {/* Results count */}
      <div style={{padding:"10px 24px",fontSize:11,color:"#484f58",borderBottom:"1px solid #161b22"}}>
        Showing {filtered.length} of {ALL_JOBS.length} openings
        {diffFilter !== "All" && <span style={{color:DIFF[diffFilter].text}}> · {diffFilter} only</span>}
        {sector !== "All Sectors" && <span style={{color:"#58a6ff"}}> · {sector}</span>}
      </div>

      <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", paddingBottom: 8 }}>
        <div style={{ minWidth: 800 }}>
          {/* Column headers */}
          <div style={{
            display:"grid", gridTemplateColumns:"44px 28px 1fr 1fr 100px 80px 90px 64px",
            gap:0, padding:"8px 24px", borderBottom:"1px solid #161b22",
            fontSize:10, color:"#484f58", letterSpacing:1.5, textTransform:"uppercase",
            fontWeight:500,
          }}>
            <span>#</span><span></span><span>COMPANY</span><span>ROLE</span><span>LOCATION</span><span>SALARY</span><span>DIFFICULTY</span><span>APPLY</span>
          </div>

          {/* Job rows */}
          <div>
            {filtered.map((j, i) => {
              const c = DIFF[j.level];
              return (
                <div key={j.num} className="job-row fade-up" style={{
                  display:"grid",
                  gridTemplateColumns:"44px 28px 1fr 1fr 100px 80px 90px 64px",
                  gap:0,
                  padding:"11px 24px",
                  borderBottom:"1px solid #0d1117",
                  background: i % 2 === 0 ? "#0a0e18" : "#080c14",
                  alignItems:"center",
                  animationDelay:`${Math.min(i * 18, 400)}ms`,
                  cursor:"default",
                }}>
                  {/* # */}
                  <span style={{fontSize:11,color:"#30363d",fontWeight:500}}>{j.num}</span>

                  {/* Match dot */}
                  <div style={{
                    width:8, height:8, borderRadius:"50%",
                    background: j.match >= 88 ? "#22c55e" : j.match >= 75 ? "#f59e0b" : "#6e7681",
                    boxShadow: j.match >= 88 ? "0 0 6px #22c55e88" : "none",
                  }}/>

                  {/* Company */}
                  <div>
                    <div style={{fontSize:13,fontWeight:500,color:"#e6edf3",lineHeight:1.2}}>{j.company}</div>
                    <div style={{fontSize:10,color:"#484f58",marginTop:2,letterSpacing:0.5}}>{j.type} · {j.match}% match</div>
                  </div>

                  {/* Role */}
                  <span style={{fontSize:12,color:"#8b949e",paddingRight:8}}>{j.role}</span>

                  {/* Location */}
                  <span style={{fontSize:11,color:"#6e7681"}}>{j.location}</span>

                  {/* Salary */}
                  <span style={{fontSize:12,color:"#58a6ff",fontWeight:500}}>{j.salary}</span>

                  {/* Difficulty badge — THE STAR OF THE SHOW */}
                  <div style={{
                    display:"inline-flex", alignItems:"center", gap:5,
                    padding:"4px 10px", borderRadius:4,
                    background:c.bg, border:`1px solid ${c.border}`,
                    width:"fit-content",
                  }}>
                    <span style={{width:5,height:5,borderRadius:"50%",background:c.dot,flexShrink:0}}/>
                    <span style={{fontSize:10,fontWeight:500,color:c.text,letterSpacing:0.8}}>{c.label}</span>
                  </div>

                  {/* Apply */}
                  <a href={j.link} target="_blank" rel="noopener noreferrer" className="apply-btn" style={{
                    display:"inline-block", padding:"5px 12px", borderRadius:4,
                    background:"#1f6feb22", border:"1px solid #1f6feb",
                    color:"#58a6ff", fontSize:11, fontWeight:500, textDecoration:"none",
                    textAlign:"center", letterSpacing:0.3,
                  }}>
                    Apply ↗
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {filtered.length === 0 && (
        <div style={{padding:40, textAlign:"center", color:"#484f58", fontSize:13}}>
          No results match your filters. Try a different combination.
        </div>
      )}

      {/* Footer */}
      <div style={{margin:"24px 24px 0",padding:"14px 20px",background:"#0d1117",border:"1px solid #21262d",borderRadius:8,fontSize:11,color:"#484f58",display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
        <span>⭐ Priority: L&T Technology Services (#114, Easy) · TVS Motor (#118, Easy) · Siemens India (#100, Medium)</span>
        <span style={{color:"#22c55e"}}>Easy = apply via company portal directly to bypass ATS CGPA filters</span>
      </div>
    </div>
  );
}
