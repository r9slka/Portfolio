/* ============================================================================
   PORTFOLIO CONTENT — this is the ONLY file you need to edit.
   The website reads this data and builds itself. Never touch index.html.
   ----------------------------------------------------------------------------

   [ HOW TO EDIT INFO ]
     Change the text value after the colon. Quote marks stay.
       status: "Available — Jun 2026"  →  status: "Hired — Sep 2026"

   [ HOW TO ADD / CHANGE AN IMAGE ]
     Drop the file in the  img/  folder, then add a line in the project's
     `images` array:
         { src: "img/myfile.jpg", caption: "What it shows", fit: "cover" }

     fit: "cover"               → fills the frame, crops edges
                                  use for PHOTOS of real objects
     fit: "contain"             → shows the full image, no crop
                                  use for CAD renders, screenshots,
                                  technical drawings, spreadsheets, diagrams
     fit: "contain", mobile:true → centred phone mockup
                                  use for portrait/vertical screenshots

     Multiple images: add more { } objects to the array — they appear
     side by side inside the card viewport.

     If a file is missing, the striped placeholder shows automatically.
     No image at all? Leave  images: []  and the placeholder stays.

   [ HOW TO ADD A PROJECT ]
     Copy one full  { id: "...", ... }  block from the projects list below.
     Paste it at the end of the right section (A, B, or C).
     Change every field. Give it a unique `id` (lowercase, no spaces).
     Add  wide: true  to make it span the full width (good for wide images).

   [ HOW TO HIGHLIGHT TEXT IN THE PROFILE ]
     Wrap the phrase with:  <span class="hl">your words</span>

   ============================================================================ */


/* ---- Site-wide info ---- */
const siteInfo = {
  name:      "Ronaldo Plamadeala",
  role:      "Production & Design Engineer",
  tagline:   "Aerospace methods / Additive manufacturing / Product design / Workflow automation",
  subtitle:  "Junior — Class of 2025<br>BTS CPRP · Erasmus+ DK",
  location:  "Hedehusene, DK",
  status:    "Available — Jun 2026",
  email:     "ronaldoplamadeala@gmail.com",
  languages: "FR · RO native · EN C1 · PT B2 · ES B1",
  rev:       "2026.06",
  profile:   `Junior engineer with hands-on experience across <span class="hl">aerospace machining methods</span>, additive manufacturing (FDM + pellet extrusion), parametric CAD, and AI-assisted workflow automation. I build things that work — from aerospace fixtures to production tooling and internal apps — and I learn fast in small, high-ownership teams. Currently finishing an Erasmus+ placement in Denmark; seeking a full-time role in <span class="hl">production, design, or industrial methods</span>.`,
  links: {
    cults3d:  "https://cults3d.com/en/users/Ronaldo3D",   // ← check this is your profile
    github:   "",                                          // ← paste your URL or leave ""
    linkedin: ""                                           // ← paste your URL or leave ""
  }
};


/* ---- Section headers (the dimension-line dividers) ---- */
const sections = {
  A: "Aerospace & Precision Machining",
  B: "Additive Manufacturing & Product Design",
  C: "Production Tools & Automation"
};


/* ---- Work experience ---- */
const experience = [
  {
    company: "Strategic Sales International ApS",
    meta:    "PRODUCT DESIGN & MFG · ERASMUS+ · ROSKILDE, DK · 2026",
    points: [
      "Operate 3 industrial 3D printers (pellet FGF + FDM filament)",
      "Design mechanical parts & production tooling in FreeCAD / Fusion 360",
      "Manage full print workflow: slicing, calibration, dimensional QC",
      "Build internal production tools & automation (Apps Script, Python)"
    ]
  },
  {
    company: "STAERO",
    badge:   "· EN 9100 / ISO 9001",
    meta:    "METHODS TECHNICIAN · ALTERNANCE · BAYONNE, FR · 2024–25",
    points: [
      "3D models & assemblies in TopSolid 7 for aerospace components",
      "Machining routes & operation sequences (milling / turning)",
      "3D dimensional control, CMM inspection, drawing revision",
      "Clients: Dassault Aviation, Thales, Safran"
    ]
  }
];


/* ============================  PROJECTS  ==================================== */
const projects = [

  /* ---- A · AEROSPACE & PRECISION MACHINING ---- */
  {
    id: "shim-kit", ref: "A.01", section: "A",
    title:   "Shim Kit Production Optimization",
    tags:    "TopSolid 7.17 · HELIOS ERP · Excel · 2024",
    summary: "Redesigned shim-kit production management. Modelled 258+ shim variants, organised them into 9 classification families, and built structured .STP data packs for subcontractors. Created an automated Excel system for inventory and sheet-cut optimization.",
    results: ["258+ variants · 9 families", "Zero-rework handoffs", "Waste minimised"],
    images: [
      { src: "img/shim-kit.jpg", caption: "Shim families — TopSolid model", fit: "contain" }
    ]
  },

  {
    id: "fixture", ref: "A.02", section: "A",
    title:   "Point Fixe Servo — Drilling Fixture",
    tags:    "TopSolid · Manual drill · Ø8 bushings · 2024–25",
    summary: "Designed a cost-optimised manual drilling fixture for an aerospace bracket — 10 precision drillings within ±0.1 mm. CNC was uneconomical for a non-recurring 10-piece run, so I built a modular fixture with a 2-position clamping strategy and 180° part rotation.",
    results: ["All 10 holes ±0.1 mm", "Cost-optimised vs CNC"],
    images: [
      { src: "img/fixture.png", caption: "Fixture — CAD assembly", fit: "contain" }
    ]
  },

  {
    id: "interface-volant", ref: "A.03", section: "A", wide: true,
    title:   "Interface Volant — Multi-Axis Machining Study",
    tags:    "TopSolid 7.16 FAO/CAM · DOOSAN · MAZAK INTEGREX 35 & 50 · CMM · 2025",
    summary: "Full process-engineering study for the Interface Volant. Defined a 5-phase manufacturing process, programmed FAO toolpaths, and ran a process-improvement study identifying tooling changes that cut cycle time significantly. Produced a complete production schedule and cost analysis for a 900-piece batch.",
    results: ["−40% cycle time · 15:09 → 09:08", "~15 h saved / 62 h run", "900-piece batch costed"],
    images: [
      { src: "img/interface-volant.jpg", caption: "FAO toolpath / CNC simulation", fit: "contain" }
    ]
  },


  /* ---- B · ADDITIVE MANUFACTURING & PRODUCT DESIGN ---- */
  {
    id: "vase", ref: "B.01", section: "B",
    title:   "Organic Vase Series — Published",
    tags:    "Blender · FreeCAD · OrcaSlicer · Cults3D · 2026",
    summary: "Designed an organic fluted vase, modelled in Blender (vase mode) and printed in transparent PLA. Published and listed for sale on Cults3D — my first end-to-end product, designed, manufactured and sold. Followed by a wider design exploration: hourglass forms, multi-lobe silhouettes, helical textures across 4+ physical iterations.",
    results: ["First commercial listing", "4+ iterations"],
    link: "https://cults3d.com/en/users/Ronaldo3D",
    images: [
      { src: "img/vase.jpg", caption: "Fluted vase — transparent PLA", fit: "cover" }
    ]
  },

  {
    id: "robot-arm", ref: "B.02", section: "B",
    firstChipAccent: false,
    title:   "6-Axis Robotic Arm — CAD Study",
    tags:    "Autodesk Fusion 360 · Kinematics · 2026",
    summary: "Designed and articulated a 6-axis industrial robotic arm in Fusion 360 — rotating base, main arm, forearm and two-finger gripper. Modelled each part to be functional and assemblable, and defined the kinematics and degrees of freedom of every joint, inspired by real industrial arms.",
    results: ["6 DOF modelled", "Print-ready next phase"],
    images: [
      { src: "img/robot-arm.png", caption: "6-axis arm / Fusion assembly", fit: "contain" }
    ]
  },

  {
    id: "pladevogn", ref: "B.03", section: "B",
    title:   "Pladevogn Plug — Production Run",
    tags:    "FreeCAD · OrcaSlicer · Ender 5 S1 · 2025",
    summary: "Designed a custom structural plug for the Pladevogn assembly from dimensional constraints in FreeCAD. Validated in ABS on a pellet printer, then run in series on filament — generating and validating production G-code for a dual-plug layout.",
    results: ["Series production", "Settings validated"],
    images: [
      { src: "img/pladevogn.jpg", caption: "Plug — production part", fit: "cover" }
    ]
  },

  {
    id: "calibration", ref: "B.04", section: "B",
    title:   "Pellet Printer Calibration",
    tags:    "Piocreat G5 Ultra & G5 Pro · PLA / PETG · 2026",
    summary: "Developed systematic calibration protocols for two pellet extruders. G5 Ultra (PLA): 3×3 test matrix across temperature and Z-height. G5 Pro (PETG): cross-shaped layout over 5 temperature steps with a 65 °C / 8 h drying protocol. Locked baseline parameters integrated into the production workflow.",
    results: ["Locked baselines", "Drying protocol in prod"],
    images: [
      { src: "img/calibration.png", caption: "Calibration test matrix", fit: "contain" }
    ]
  },


  /* ---- C · PRODUCTION TOOLS & AUTOMATION ---- */
  {
    id: "tracker", ref: "C.01", section: "C", wide: true,
    title:   "3D Print Management System",
    tags:    "Google Sheets · Apps Script · JavaScript · 2026",
    summary: "Built a complete production tracking & management system. Reactive onEdit triggers update data in real time; dynamic dropdowns drive material & machine selection; automatic per-print cost tracking feeds three production dashboards. A separate Apps Script handles G-code import and the price catalogue to avoid code conflicts.",
    results: ["Real-time cost tracking", "3 live dashboards", "G-code import"],
    note: "Built using AI-assisted development.",
    images: [
      { src: "img/tracker.png", caption: "Dashboard / Google Sheets system", fit: "contain" }
    ]
  },

  {
    id: "silverhand", ref: "C.02", section: "C",
    title:   "V Silverhand — AI Companion PWA",
    tags:    "LLM API · Supabase · Vercel · PWA · 2026",
    summary: "A personal AI assistant built as an installable PWA: persistent conversation memory, an editable personal-notes system for context, and in-chat PDF / image analysis. Integrates an LLM API into a full app with a real-time user database and continuous deployment on Vercel — each code change ships live automatically.",
    results: ["Deployed · CI/CD", "LLM + DB integration"],
    note: "Built using AI-assisted development.",
    images: [
      { src: "img/silverhand.png", caption: "PWA screenshot", fit: "contain", mobile: true }
    ]
  },

  {
    id: "automation", ref: "C.03", section: "C",
    title:   "Internal Workflow Automation",
    tags:    "Google Apps Script · Make · 2026",
    summary: "Designed internal automations to remove repetitive work: scripted tooling, structured production workflows, and an automatic weekly report of the best-performing prints delivered every Monday at 08:00. Lets functional tools ship far faster than conventional development would allow.",
    results: ["Auto weekly reporting", "Faster delivery"],
    note: "Built using AI-assisted development.",
    images: [
      { src: "img/automation.png", caption: "Workflow / automation diagram", fit: "contain" }
    ]
  }

];


/* ---- Skills grid (4 columns) ---- */
const capabilities = [
  {
    title: "CAD & Design",
    items: ["TopSolid 7.17", "FreeCAD (Part Design)", "Autodesk Fusion 360", "Blender", "Parametric modelling", "Technical drawings"]
  },
  {
    title: "Manufacturing Methods",
    items: ["Process planning", "FAO / CAM programming", "Milling & turning", "Jig & fixture design", "CMM / MMT inspection", "Aerospace tolerances"]
  },
  {
    title: "Additive",
    items: ["FDM filament", "Pellet extrusion (FGF)", "Printer calibration", "OrcaSlicer", "Dimensional QC", "Materials: PLA/PETG/ABS/TPU"]
  },
  {
    title: "Tools & Automation",
    items: ["HELIOS ERP", "Excel (advanced)", "Google Sheets + Apps Script", "Python", "AI-assisted development", "Cost analysis"]
  }
];
