IMAGE FILES — DROP HERE, THEN REFERENCE IN content.js
======================================================

Images are managed in  content.js  (the project's `images` array).
Dropping a file here does nothing on its own — you also need to add
a line to the project in content.js. See the instructions at the top
of that file.

CURRENT FILE → PROJECT MAPPING
------------------------------------------------
shim-kit.jpg            → A.01  Shim Kit Production Optimization
fixture.png             → A.02  Point Fixe Servo — Drilling Fixture
interface-volant.jpg    → A.03  Interface Volant — Multi-Axis Machining Study
vase.jpg                → B.01  Organic Vase Series — Published
robot-arm.png           → B.02  6-Axis Robotic Arm — CAD Study
pladevogn.jpg           → B.03  Pladevogn Plug — Production Run
calibration.png         → B.04  Pellet Printer Calibration
tracker.png             → C.01  3D Print Management System
silverhand.png          → C.02  V Silverhand — AI Companion PWA
automation.png          → C.03  Internal Workflow Automation

TO ADD A NEW IMAGE
------------------
1. Drop the file in this folder (any name, .jpg / .png / .webp).
2. Open content.js, find the project, add a line to its images array:
      { src: "img/yourfile.jpg", caption: "What it shows", fit: "cover" }
3. Save content.js, git push → Vercel redeploys automatically.

TO ADD MULTIPLE IMAGES TO ONE PROJECT
--------------------------------------
Just add more objects to the project's images array in content.js:
    images: [
      { src: "img/vase.jpg",   caption: "Front view",   fit: "cover" },
      { src: "img/vase-2.jpg", caption: "Side view",    fit: "cover" },
      { src: "img/vase-3.jpg", caption: "Detail shot",  fit: "cover" }
    ]
They appear side by side in the card viewport, equal width.

FIT OPTIONS
-----------
  fit: "cover"                → fills the frame, crops edges
                                 use for photos of real objects
  fit: "contain"              → shows the whole image, no crop
                                 use for CAD renders, screenshots,
                                 technical drawings, spreadsheets
  fit: "contain", mobile:true → centred phone mockup
                                 use for portrait/vertical screenshots
