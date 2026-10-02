"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// ----------------------------------------------------------------------
// Code Timeline Definition: Progressive Visual Software Sequence
// (Scroll-controlled progressive reveal of software concepts)
// ----------------------------------------------------------------------

interface CodeLineDef {
  num: string;
  text: string;
  color: string;
  start: number;
  end: number;
}

const CODE_TIMELINE: CodeLineDef[] = [
  // STATE 1: Hero Start (0.00 -> 0.09) - Initial system shell
  { num: "01", text: "const system = {", color: "#f0ece4", start: 0.00, end: 0.03 },
  { num: "02", text: "  modules: []", color: "#8ea3bf", start: 0.02, end: 0.06 },
  { num: "03", text: "};", color: "#f0ece4", start: 0.05, end: 0.09 },

  // STATE 2: Mount Modules (0.09 -> 0.22) - Frontend & Backend modules mount
  { num: "04", text: "", color: "#8ea3bf", start: 0.09, end: 0.10 },
  { num: "05", text: "// Define application structure", color: "#4d607b", start: 0.10, end: 0.13 },
  { num: "06", text: "system.modules.push(\"frontend\");", color: "#8ea3bf", start: 0.13, end: 0.17 },
  { num: "07", text: "system.modules.push(\"backend\");", color: "#8ea3bf", start: 0.17, end: 0.21 },

  // STATE 3: Connect Services (0.21 -> 0.36) - Database & Network pathways connect
  { num: "08", text: "", color: "#8ea3bf", start: 0.21, end: 0.22 },
  { num: "09", text: "// Connect data and network layers", color: "#4d607b", start: 0.22, end: 0.25 },
  { num: "10", text: "system.connect(\"database\");", color: "#a3b5ca", start: 0.25, end: 0.29 },
  { num: "11", text: "system.connect(\"network\");", color: "#a3b5ca", start: 0.29, end: 0.34 },

  // STATE 4: Data Processing (0.34 -> 0.50) - Route & process
  { num: "12", text: "", color: "#8ea3bf", start: 0.34, end: 0.35 },
  { num: "13", text: "// Validate input and process data", color: "#4d607b", start: 0.35, end: 0.39 },
  { num: "14", text: "request.validate();", color: "#8ea3bf", start: 0.39, end: 0.44 },
  { num: "15", text: "data.process();", color: "#8ea3bf", start: 0.44, end: 0.49 },

  // STATE 5: Security Validation (0.49 -> 0.65) - Protected boundary & verify
  { num: "16", text: "", color: "#8ea3bf", start: 0.49, end: 0.50 },
  { num: "17", text: "// Verify security parameters", color: "#c0392b", start: 0.50, end: 0.54 },
  { num: "18", text: "security.check();", color: "#c0392b", start: 0.54, end: 0.59 },
  { num: "19", text: "access.verify();", color: "#c0392b", start: 0.59, end: 0.64 },

  // STATE 6: Projects Presentation (0.64 -> 0.82) - Real application layers
  { num: "20", text: "", color: "#8ea3bf", start: 0.64, end: 0.65 },
  { num: "21", text: "// Application presentation layer", color: "#4d607b", start: 0.65, end: 0.69 },
  { num: "22", text: "project.render(\"ThreatIntel\");", color: "#f0ece4", start: 0.69, end: 0.75 },
  { num: "23", text: "project.deploy(\"SentinelShield\");", color: "#f0ece4", start: 0.75, end: 0.81 },

  // STATE 7: Final System Complete (0.81 -> 1.00) - Unified architecture
  { num: "24", text: "", color: "#8ea3bf", start: 0.81, end: 0.82 },
  { num: "25", text: "system.status = \"READY\";", color: "#22c55e", start: 0.82, end: 0.88 },
  { num: "26", text: "export default system;", color: "#8ea3bf", start: 0.88, end: 0.94 },
];

// ----------------------------------------------------------------------
// Dynamic Code Canvas: Updates texture in real time with scroll position
// ----------------------------------------------------------------------

function drawCodeCanvas(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  p: number
) {
  const width = canvas.width;
  const height = canvas.height;

  // Background foundation
  ctx.fillStyle = "#0c1017";
  ctx.fillRect(0, 0, width, height);

  // Subtle code background grid
  ctx.strokeStyle = "#131a26";
  ctx.lineWidth = 1;
  for (let y = 48; y < height - 36; y += 28) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // Window title bar
  ctx.fillStyle = "#121824";
  ctx.fillRect(0, 0, width, 44);

  // Window control dots
  ctx.fillStyle = "#c0392b";
  ctx.beginPath();
  ctx.arc(24, 22, 4.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#8ea3bf";
  ctx.beginPath();
  ctx.arc(40, 22, 4.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#334155";
  ctx.beginPath();
  ctx.arc(56, 22, 4.5, 0, Math.PI * 2);
  ctx.fill();

  // Tab
  ctx.fillStyle = "#1a2333";
  ctx.fillRect(78, 6, 170, 38);
  ctx.fillStyle = "#f0ece4";
  ctx.font = "bold 13px 'Courier New', monospace";
  ctx.fillText("system.ts", 96, 29);

  // Language spec
  ctx.fillStyle = "#64748b";
  ctx.font = "12px 'Courier New', monospace";
  ctx.fillText("TypeScript // Visual Spec", width - 210, 28);

  // Gutter line
  ctx.strokeStyle = "#1a2333";
  ctx.beginPath();
  ctx.moveTo(60, 44);
  ctx.lineTo(60, height - 36);
  ctx.stroke();

  // Draw code lines based on scroll progress p
  const startY = 72;
  const lineH = 26;
  ctx.font = "bold 14px 'Courier New', monospace";

  CODE_TIMELINE.forEach((item, index) => {
    if (p < item.start) {
      // Line not yet reached on the scroll timeline
      return;
    }

    const y = startY + index * lineH;
    if (y > height - 42) return;

    // Line number
    ctx.fillStyle = "#2d3d52";
    ctx.fillText(item.num, 20, y);

    if (item.text === "") return;

    if (p >= item.end) {
      // Fully revealed line
      ctx.fillStyle = item.color;
      ctx.fillText(item.text, 78, y);
    } else {
      // Actively typing line (scroll-progress controlled character reveal)
      const progressFraction = (p - item.start) / (item.end - item.start);
      const charsToShow = Math.max(1, Math.floor(item.text.length * progressFraction));
      const partialText = item.text.substring(0, charsToShow);

      // Active line subtle highlight
      ctx.fillStyle = "rgba(192, 57, 43, 0.12)";
      ctx.fillRect(61, y - 18, width - 70, 24);

      // Active line edge marker
      ctx.fillStyle = "#c0392b";
      ctx.fillRect(60, y - 18, 3, 24);

      // Text with typing block cursor
      ctx.fillStyle = item.color;
      ctx.fillText(partialText + " ▋", 78, y);
    }
  });

  // Footer bar with dynamic system status
  ctx.fillStyle = "#121824";
  ctx.fillRect(0, height - 34, width, 34);

  // Status indicator dot
  ctx.fillStyle = p >= 0.82 ? "#22c55e" : p >= 0.50 ? "#c0392b" : "#8ea3bf";
  ctx.beginPath();
  ctx.arc(24, height - 17, 4.5, 0, Math.PI * 2);
  ctx.fill();

  let statusText = "SYSTEM ARCHITECTURE // INITIALIZING";
  if (p >= 0.88) {
    statusText = "SYSTEM COMPLETE // ARCHITECTURE READY";
  } else if (p >= 0.82) {
    statusText = "STATUS: READY // ALL MODULES STABILIZED";
  } else if (p >= 0.65) {
    statusText = "PROJECTS PRESENTED // THREAT INTEL & SENTINEL SHIELD";
  } else if (p >= 0.50) {
    statusText = "SECURITY VALIDATION // ACCESS VERIFIED";
  } else if (p >= 0.35) {
    statusText = "DATA ROUTE // REQUEST VALIDATED & PROCESSED";
  } else if (p >= 0.22) {
    statusText = "SERVICES CONNECTED // DATABASE & NETWORK BUS";
  } else if (p >= 0.10) {
    statusText = "MODULES ATTACHED // FRONTEND & BACKEND STRUCTURE";
  }

  ctx.fillStyle = "#8ea3bf";
  ctx.font = "11px 'Courier New', monospace";
  ctx.fillText(statusText, 40, height - 13);

  // Timeline progress indicator
  ctx.fillStyle = "#64748b";
  ctx.fillText(`SCROLL_P: ${(p * 100).toFixed(0)}%`, width - 150, height - 13);
}

// ----------------------------------------------------------------------
// Procedural Secondary Canvas: Data Structure & Route Topology
// ----------------------------------------------------------------------

function createDataTopologyCanvas(): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;

  ctx.fillStyle = "#0a0e16";
  ctx.fillRect(0, 0, 1024, 640);

  // Subtle grid
  ctx.strokeStyle = "#141c2a";
  ctx.lineWidth = 1;
  for (let x = 0; x < 1024; x += 44) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 640);
    ctx.stroke();
  }
  for (let y = 0; y < 640; y += 44) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(1024, y);
    ctx.stroke();
  }

  // Header
  ctx.fillStyle = "#111724";
  ctx.fillRect(0, 0, 1024, 48);

  ctx.fillStyle = "#c0392b";
  ctx.beginPath();
  ctx.arc(28, 24, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 13px 'Courier New', monospace";
  ctx.fillText("DATA STRUCTURE & ROUTE TOPOLOGY", 52, 30);

  ctx.fillStyle = "#8ea3bf";
  ctx.font = "12px 'Courier New', monospace";
  ctx.fillText("GRAPH: DIRECTED ACYCLIC", 780, 30);

  // Conceptual algorithmic pipeline representation
  ctx.font = "bold 14px 'Courier New', monospace";

  // Flow nodes
  const flowNodes = [
    { title: "INPUT_STREAM", sub: "request.stream", x: 60, y: 90, color: "#8ea3bf" },
    { title: "AUTH_GATEWAY", sub: "security.guard", x: 300, y: 90, color: "#c0392b" },
    { title: "ROUTE_MATRIX", sub: "network.router", x: 540, y: 90, color: "#8ea3bf" },
    { title: "DISPATCH_NODE", sub: "system.output", x: 780, y: 90, color: "#ffffff" },
  ];

  flowNodes.forEach((node, i) => {
    // Node box
    ctx.fillStyle = "#121926";
    ctx.fillRect(node.x, node.y, 170, 70);
    ctx.strokeStyle = node.color === "#c0392b" ? "#c0392b" : "#243347";
    ctx.lineWidth = 1;
    ctx.strokeRect(node.x, node.y, 170, 70);

    ctx.fillStyle = node.color;
    ctx.font = "bold 12px 'Courier New', monospace";
    ctx.fillText(node.title, node.x + 14, node.y + 30);

    ctx.fillStyle = "#64748b";
    ctx.font = "11px 'Courier New', monospace";
    ctx.fillText(node.sub, node.x + 14, node.y + 52);

    // Connector arrow
    if (i < flowNodes.length - 1) {
      ctx.strokeStyle = "#384b64";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(node.x + 170, node.y + 35);
      ctx.lineTo(flowNodes[i + 1].x, node.y + 35);
      ctx.stroke();

      // Arrowhead
      ctx.fillStyle = "#384b64";
      ctx.beginPath();
      ctx.moveTo(flowNodes[i + 1].x, node.y + 35);
      ctx.lineTo(flowNodes[i + 1].x - 6, node.y + 31);
      ctx.lineTo(flowNodes[i + 1].x - 6, node.y + 39);
      ctx.fill();
    }
  });

  // Lower section: Hierarchy tree
  ctx.fillStyle = "#f0ece4";
  ctx.font = "bold 13px 'Courier New', monospace";
  ctx.fillText("MODULE SPECIFICATION MAP", 60, 220);

  const treeLines = [
    { text: "├── core.engine (computational pipeline)", state: "ACTIVE", color: "#8ea3bf" },
    { text: "├── security.boundary (authentication & pattern validation)", state: "ENFORCED", color: "#c0392b" },
    { text: "├── network.protocol (packet routing & socket abstraction)", state: "ROUTED", color: "#8ea3bf" },
    { text: "└── data.structure (normalized indicator schema)", state: "INDEXED", color: "#a3b5ca" },
  ];

  let treeY = 260;
  ctx.font = "13px 'Courier New', monospace";

  treeLines.forEach((line) => {
    ctx.fillStyle = "#cbd5e1";
    ctx.fillText(line.text, 60, treeY);

    ctx.fillStyle = line.color;
    ctx.fillText(line.state, 860, treeY);

    ctx.strokeStyle = "#162030";
    ctx.beginPath();
    ctx.moveTo(60, treeY + 16);
    ctx.lineTo(960, treeY + 16);
    ctx.stroke();

    treeY += 50;
  });

  return canvas;
}

// ----------------------------------------------------------------------
// Micro Panel Canvas for Frontend Module
// ----------------------------------------------------------------------
function createFrontendModuleCanvas(): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 320;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;

  ctx.fillStyle = "#0e1420";
  ctx.fillRect(0, 0, 512, 320);

  ctx.fillStyle = "#162032";
  ctx.fillRect(0, 0, 512, 36);

  ctx.fillStyle = "#8ea3bf";
  ctx.font = "bold 14px 'Courier New', monospace";
  ctx.fillText("MODULE // FRONTEND_INTERFACE", 16, 24);

  // Wireframe UI elements
  ctx.strokeStyle = "#25354c";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(20, 56, 472, 80);
  ctx.strokeRect(20, 150, 220, 140);
  ctx.strokeRect(260, 150, 232, 140);

  ctx.fillStyle = "#4a6282";
  ctx.font = "12px 'Courier New', monospace";
  ctx.fillText("COMPONENT: PRESENTATION_LAYER", 32, 82);
  ctx.fillText("VIEW: REACT // NEXT.JS", 32, 104);
  ctx.fillText("RENDER_STATE: MOUNTED", 32, 126);

  return canvas;
}

// ----------------------------------------------------------------------
// Micro Panel Canvas for Backend Module
// ----------------------------------------------------------------------
function createBackendModuleCanvas(): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 320;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;

  ctx.fillStyle = "#0e1420";
  ctx.fillRect(0, 0, 512, 320);

  ctx.fillStyle = "#162032";
  ctx.fillRect(0, 0, 512, 36);

  ctx.fillStyle = "#8ea3bf";
  ctx.font = "bold 14px 'Courier New', monospace";
  ctx.fillText("MODULE // BACKEND_PROCESSING", 16, 24);

  // Wireframe Server elements
  ctx.strokeStyle = "#25354c";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(20, 56, 472, 50);
  ctx.strokeRect(20, 120, 472, 80);
  ctx.strokeRect(20, 214, 472, 80);

  ctx.fillStyle = "#4a6282";
  ctx.font = "12px 'Courier New', monospace";
  ctx.fillText("SERVICE: API_DISPATCHER", 32, 86);
  ctx.fillText("STACK: PYTHON // TYPESCRIPT", 32, 150);
  ctx.fillText("PROTOCOL: HTTP / REST / WEBSOCKET", 32, 172);
  ctx.fillText("DISPATCH: ASYNC EVENT_LOOP", 32, 244);

  return canvas;
}

// ----------------------------------------------------------------------
// Main 3D Component: Scroll-Controlled Code Timeline & Computational System
// ----------------------------------------------------------------------

export default function Scene3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Scene & Atmosphere
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x090b10, 0.022);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0.1, 0.1, 7.8);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, width < 768 ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    // ------------------------------------------------------------------
    // Lighting
    // ------------------------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0x161e2b, 2.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x9db3d2, 2.8);
    keyLight.position.set(6, 8, 8);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xc0392b, 3.2);
    rimLight.position.set(-6, -4, -3);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(0x354459, 1.4, 26);
    fillLight.position.set(0, 2, 7);
    scene.add(fillLight);

    // ------------------------------------------------------------------
    // Dynamic Code Canvas & Textures
    // ------------------------------------------------------------------
    const codeCanvas = document.createElement("canvas");
    codeCanvas.width = 1024;
    codeCanvas.height = 768;
    const codeCtx = codeCanvas.getContext("2d")!;
    drawCodeCanvas(codeCanvas, codeCtx, 0);

    const codeTex = new THREE.CanvasTexture(codeCanvas);
    codeTex.colorSpace = THREE.SRGBColorSpace;
    codeTex.minFilter = THREE.LinearFilter;

    const topoCanvas = createDataTopologyCanvas();
    const topoTex = new THREE.CanvasTexture(topoCanvas);
    topoTex.colorSpace = THREE.SRGBColorSpace;
    topoTex.minFilter = THREE.LinearFilter;

    const feCanvas = createFrontendModuleCanvas();
    const feTex = new THREE.CanvasTexture(feCanvas);
    feTex.colorSpace = THREE.SRGBColorSpace;

    const beCanvas = createBackendModuleCanvas();
    const beTex = new THREE.CanvasTexture(beCanvas);
    beTex.colorSpace = THREE.SRGBColorSpace;

    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x111622,
      roughness: 0.35,
      metalness: 0.65,
    });

    const edgeMat = new THREE.LineBasicMaterial({
      color: 0x3d4f68,
      linewidth: 1,
    });

    const crimsonAccentMat = new THREE.MeshBasicMaterial({ color: 0xc0392b });

    // ------------------------------------------------------------------
    // Computational System Group
    // ------------------------------------------------------------------
    const compSystem = new THREE.Group();
    scene.add(compSystem);

    // 1. Primary Code Interface Surface (Displays the live typing code timeline)
    const codePlaneGeo = new THREE.BoxGeometry(2.9, 2.0, 0.05);
    const codeMaterials = [
      chassisMat,
      chassisMat,
      chassisMat,
      chassisMat,
      new THREE.MeshBasicMaterial({ map: codeTex }),
      chassisMat,
    ];
    const codeSurface = new THREE.Mesh(codePlaneGeo, codeMaterials);
    codeSurface.add(new THREE.LineSegments(new THREE.EdgesGeometry(codePlaneGeo), edgeMat));
    codeSurface.position.set(0, 0.35, 0);
    compSystem.add(codeSurface);

    // 2. Secondary Data Structure & Topology Surface (Offset layered plane)
    const topoPlaneGeo = new THREE.BoxGeometry(2.5, 1.4, 0.03);
    const topoMaterials = [
      chassisMat,
      chassisMat,
      chassisMat,
      chassisMat,
      new THREE.MeshBasicMaterial({ map: topoTex, transparent: true, opacity: 0.88 }),
      chassisMat,
    ];
    const topoSurface = new THREE.Mesh(topoPlaneGeo, topoMaterials);
    topoSurface.add(new THREE.LineSegments(new THREE.EdgesGeometry(topoPlaneGeo), edgeMat));
    topoSurface.position.set(0.65, -0.2, 0.35);
    compSystem.add(topoSurface);

    // 3. Central Computational Logic Engine (Horizontal isometric core)
    const coreGeo = new THREE.BoxGeometry(2.4, 0.3, 1.6);
    const logicCore = new THREE.Mesh(coreGeo, chassisMat);
    logicCore.add(new THREE.LineSegments(new THREE.EdgesGeometry(coreGeo), edgeMat));
    logicCore.position.set(0, -0.85, -0.2);
    compSystem.add(logicCore);

    // 4. Reactive Module 1: Frontend Architecture Module
    // Materializes when "frontend" appears in code
    const feGeo = new THREE.BoxGeometry(0.85, 0.55, 0.12);
    const feMaterials = [
      chassisMat, chassisMat, chassisMat, chassisMat,
      new THREE.MeshBasicMaterial({ map: feTex }), chassisMat
    ];
    const frontendModule = new THREE.Mesh(feGeo, feMaterials);
    frontendModule.add(new THREE.LineSegments(new THREE.EdgesGeometry(feGeo), edgeMat));
    frontendModule.position.set(-1.6, -0.35, 0.2);
    frontendModule.scale.set(0.001, 0.001, 0.001); // hidden until revealed
    compSystem.add(frontendModule);

    // 5. Reactive Module 2: Backend Processing Module
    // Materializes when "backend" appears in code
    const beGeo = new THREE.BoxGeometry(0.85, 0.55, 0.12);
    const beMaterials = [
      chassisMat, chassisMat, chassisMat, chassisMat,
      new THREE.MeshBasicMaterial({ map: beTex }), chassisMat
    ];
    const backendModule = new THREE.Mesh(beGeo, beMaterials);
    backendModule.add(new THREE.LineSegments(new THREE.EdgesGeometry(beGeo), edgeMat));
    backendModule.position.set(1.6, -0.35, 0.2);
    backendModule.scale.set(0.001, 0.001, 0.001); // hidden until revealed
    compSystem.add(backendModule);

    // 6. Reactive Module 3: Persistent Database Storage Module
    // Materializes when system.connect("database") appears
    const dbGroup = new THREE.Group();
    const dbCylinderGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.14, 24);
    const dbPlateMat = new THREE.MeshStandardMaterial({ color: 0x182232, metalness: 0.7, roughness: 0.3 });
    const ringMat = new THREE.LineBasicMaterial({ color: 0x8ea3bf });

    for (let i = 0; i < 3; i++) {
      const plate = new THREE.Mesh(dbCylinderGeo, dbPlateMat);
      plate.position.y = (i - 1) * 0.18;
      plate.add(new THREE.LineSegments(new THREE.EdgesGeometry(dbCylinderGeo), ringMat));
      dbGroup.add(plate);
    }
    dbGroup.position.set(-1.2, -0.85, -0.7);
    dbGroup.scale.set(0.001, 0.001, 0.001);
    compSystem.add(dbGroup);

    // 7. Reactive Module 4: Network Gateway & Routing Node
    // Materializes when system.connect("network") appears
    const netGeo = new THREE.BoxGeometry(0.55, 0.45, 0.55);
    const networkGateway = new THREE.Mesh(netGeo, chassisMat);
    networkGateway.add(new THREE.LineSegments(new THREE.EdgesGeometry(netGeo), edgeMat));
    networkGateway.position.set(1.2, -0.85, -0.7);
    networkGateway.scale.set(0.001, 0.001, 0.001);
    compSystem.add(networkGateway);

    // 8. Subtle Protected Security Boundary & Authentication Node
    // Activates vividly when security.check() and access.verify() appear in code
    const boundaryGeo = new THREE.BoxGeometry(0.7, 0.4, 0.7);
    const securityBoundaryMat = new THREE.LineBasicMaterial({
      color: 0x334155, // starts dormant
      transparent: true,
      opacity: 0.3,
    });
    const securityBoundary = new THREE.LineSegments(
      new THREE.EdgesGeometry(boundaryGeo),
      securityBoundaryMat
    );
    securityBoundary.position.set(0.5, 0.22, 0.3);
    logicCore.add(securityBoundary);

    const authNodeGeo = new THREE.BoxGeometry(0.18, 0.18, 0.18);
    const authNodeMat = new THREE.MeshBasicMaterial({ color: 0x485c78 }); // starts dormant
    const authNode = new THREE.Mesh(authNodeGeo, authNodeMat);
    authNode.position.set(0.5, 0.22, 0.3);
    authNode.scale.set(0.3, 0.3, 0.3);
    logicCore.add(authNode);

    // 9. Project Presentation Portal Brackets
    const gateGroup = new THREE.Group();
    compSystem.add(gateGroup);

    const gateBarGeoV = new THREE.BoxGeometry(0.08, 4.2, 0.08);
    const gateBarGeoH = new THREE.BoxGeometry(1.4, 0.08, 0.08);

    const gateLeft = new THREE.Group();
    const gvL = new THREE.Mesh(gateBarGeoV, chassisMat);
    gvL.add(new THREE.LineSegments(new THREE.EdgesGeometry(gateBarGeoV), edgeMat));
    const ghL1 = new THREE.Mesh(gateBarGeoH, chassisMat);
    ghL1.add(new THREE.LineSegments(new THREE.EdgesGeometry(gateBarGeoH), edgeMat));
    ghL1.position.set(0.65, 2.05, 0);
    const ghL2 = new THREE.Mesh(gateBarGeoH, chassisMat);
    ghL2.add(new THREE.LineSegments(new THREE.EdgesGeometry(gateBarGeoH), edgeMat));
    ghL2.position.set(0.65, -2.05, 0);
    gateLeft.add(gvL, ghL1, ghL2);
    gateGroup.add(gateLeft);

    const gateRight = new THREE.Group();
    const gvR = new THREE.Mesh(gateBarGeoV, chassisMat);
    gvR.add(new THREE.LineSegments(new THREE.EdgesGeometry(gateBarGeoV), edgeMat));
    const ghR1 = new THREE.Mesh(gateBarGeoH, chassisMat);
    ghR1.add(new THREE.LineSegments(new THREE.EdgesGeometry(gateBarGeoH), edgeMat));
    ghR1.position.set(-0.65, 2.05, 0);
    const ghR2 = new THREE.Mesh(gateBarGeoH, chassisMat);
    ghR2.add(new THREE.LineSegments(new THREE.EdgesGeometry(gateBarGeoH), edgeMat));
    ghR2.position.set(-0.65, -2.05, 0);
    gateRight.add(gvR, ghR1, ghR2);
    gateGroup.add(gateRight);

    // 10. Data Pathways & Moving Data Packets
    const busGroup = new THREE.Group();
    compSystem.add(busGroup);

    const busPointsA = [
      new THREE.Vector3(1.5, 0.8, 0.4),
      new THREE.Vector3(2.0, 0.8, 0.4),
      new THREE.Vector3(2.0, -0.85, 0.4),
      new THREE.Vector3(1.2, -0.85, 0.4),
    ];
    const busLineA = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(busPointsA),
      new THREE.LineBasicMaterial({ color: 0x485c78 })
    );
    busGroup.add(busLineA);

    const busPointsB = [
      new THREE.Vector3(-1.5, 0.8, -0.4),
      new THREE.Vector3(-2.0, 0.8, -0.4),
      new THREE.Vector3(-2.0, -0.85, -0.4),
      new THREE.Vector3(-1.2, -0.85, -0.4),
    ];
    const busLineB = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(busPointsB),
      new THREE.LineBasicMaterial({ color: 0x485c78 })
    );
    busGroup.add(busLineB);

    const packetGeo = new THREE.BoxGeometry(0.12, 0.12, 0.12);
    const packetA = new THREE.Mesh(packetGeo, crimsonAccentMat);
    packetA.position.set(2.0, 0, 0.4);
    busGroup.add(packetA);

    const packetB = new THREE.Mesh(
      packetGeo,
      new THREE.MeshBasicMaterial({ color: 0x8ea3bf })
    );
    packetB.position.set(-2.0, 0, -0.4);
    busGroup.add(packetB);

    // ------------------------------------------------------------------
    // Scroll & Mouse Interaction Listeners
    // ------------------------------------------------------------------
    let targetProgress = 0;
    let currentProgress = 0;
    let lastRenderedProgress = -1;

    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const onScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        targetProgress = Math.min(Math.max(window.scrollY / scrollHeight, 0), 1);
        setScrollPercent(Math.round(targetProgress * 100));
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, width < 768 ? 1.5 : 2));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", onResize);
    onScroll();

    // ------------------------------------------------------------------
    // Continuous Camera & Spatial Choreography Loop
    // ------------------------------------------------------------------
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth scroll & mouse easing
      currentProgress += (targetProgress - currentProgress) * 0.085;
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      const p = currentProgress;
      const isMobile = width < 768;

      // Update dynamic code canvas texture when progress changes
      if (Math.abs(p - lastRenderedProgress) > 0.001) {
        drawCodeCanvas(codeCanvas, codeCtx, p);
        codeTex.needsUpdate = true;
        lastRenderedProgress = p;
      }

      if (!prefersReducedMotion) {
        // Data packet transit along bus lanes
        const packetSpeed = p >= 0.35 && p <= 0.65 ? 2.8 : 1.6;
        packetA.position.y = Math.sin(elapsedTime * packetSpeed) * 0.65;
        packetB.position.y = -Math.sin(elapsedTime * packetSpeed) * 0.65;

        // Mobile scaling
        if (isMobile) {
          compSystem.scale.set(0.65, 0.65, 0.65);
        } else {
          compSystem.scale.set(1.0, 1.0, 1.0);
        }

        const baseRightX = isMobile ? 0 : 2.4;

        // ==============================================================
        // CODE-REACTIVE ARCHITECTURAL EVOLUTION
        // Modules assemble and activate based on code reveal state
        // ==============================================================

        // 1. Frontend & Backend Modules: React to lines 06 & 07 (0.09 -> 0.22)
        const feScale = THREE.MathUtils.clamp((p - 0.10) / 0.08, 0, 1);
        frontendModule.scale.set(feScale, feScale, feScale);

        const beScale = THREE.MathUtils.clamp((p - 0.14) / 0.08, 0, 1);
        backendModule.scale.set(beScale, beScale, beScale);

        // 2. Database & Network Modules: React to lines 10 & 11 (0.22 -> 0.36)
        const dbScale = THREE.MathUtils.clamp((p - 0.22) / 0.09, 0, 1);
        dbGroup.scale.set(dbScale, dbScale, dbScale);

        const netScale = THREE.MathUtils.clamp((p - 0.26) / 0.09, 0, 1);
        networkGateway.scale.set(netScale, netScale, netScale);

        // 3. Security Boundary & Authentication Node: React to lines 18 & 19 (0.49 -> 0.65)
        if (p >= 0.49) {
          const secT = THREE.MathUtils.clamp((p - 0.49) / 0.12, 0, 1);
          // Boundary bracket locks into place and glows crimson
          securityBoundaryMat.color.setHex(0xc0392b);
          securityBoundaryMat.opacity = THREE.MathUtils.lerp(0.3, 1.0, secT);

          // Authentication core illuminates and expands
          authNodeMat.color.setHex(0xc0392b);
          const authScale = THREE.MathUtils.lerp(0.3, 1.25, secT);
          authNode.scale.set(authScale, authScale, authScale);
        } else {
          securityBoundaryMat.color.setHex(0x334155);
          securityBoundaryMat.opacity = 0.3;
          authNodeMat.color.setHex(0x485c78);
          authNode.scale.set(0.3, 0.3, 0.3);
        }

        // ==============================================================
        // 8 SCROLL STAGES: CAMERA & SPATIAL TIMELINE
        // ==============================================================

        if (p < 0.15) {
          // ============================================================
          // STAGE 1: HERO (0.00 -> 0.15)
          // Code interface begins typing. Camera slowly approaches.
          // Frontend & Backend modules emerge onto the logic engine.
          // ============================================================
          const t = p / 0.15;

          camera.position.x = THREE.MathUtils.lerp(0.1, 0.42, t) + currentMouseX * 0.15;
          camera.position.y = THREE.MathUtils.lerp(0.1, 0.28, t) + currentMouseY * 0.15;
          camera.position.z = THREE.MathUtils.lerp(7.8, 5.4, t);
          camera.lookAt(0.2, 0.1, 0);

          compSystem.position.set(baseRightX, 0, 0);
          compSystem.rotation.set(
            THREE.MathUtils.lerp(0.32, 0.38, t),
            THREE.MathUtils.lerp(-0.42, -0.26, t),
            0
          );

          codeSurface.position.set(0, 0.35, 0);
          codeSurface.rotation.set(0, 0, 0);

          topoSurface.position.set(0.65, -0.2, 0.35);
          logicCore.position.set(0, -0.85, -0.2);

          gateLeft.position.set(-8.0, 0, -5.0);
          gateRight.position.set(8.0, 0, -5.0);

        } else if (p < 0.30) {
          // ============================================================
          // STAGE 2: HERO -> ABOUT (0.15 -> 0.30)
          // Code types service connections. Layers separate in depth.
          // Camera glides directly between the code and topology layers!
          // ============================================================
          const t = (p - 0.15) / 0.15;

          camera.position.x = THREE.MathUtils.lerp(0.42, 0.85, t) + currentMouseX * 0.12;
          camera.position.y = THREE.MathUtils.lerp(0.28, 0.1, t) + currentMouseY * 0.12;
          camera.position.z = THREE.MathUtils.lerp(5.4, 2.7, t);
          camera.lookAt(THREE.MathUtils.lerp(0.2, 0.5, t), 0, 0);

          // Code interface lifts up
          const liftY = THREE.MathUtils.lerp(0.35, 2.1, t);
          codeSurface.position.set(0, liftY, THREE.MathUtils.lerp(0, -0.8, t));
          codeSurface.rotation.set(THREE.MathUtils.lerp(0, -0.22, t), 0, 0);

          // Data structure topology plane slides outward
          topoSurface.position.set(
            THREE.MathUtils.lerp(0.65, 2.6, t),
            THREE.MathUtils.lerp(-0.2, 0.45, t),
            THREE.MathUtils.lerp(0.35, 0.95, t)
          );

          // Logic core drops down
          logicCore.position.set(
            0,
            THREE.MathUtils.lerp(-0.85, -2.1, t),
            THREE.MathUtils.lerp(-0.2, 0.55, t)
          );

        } else if (p < 0.45) {
          // ============================================================
          // STAGE 3: ABOUT -> SKILLS (0.30 -> 0.45)
          // Components reorganize into a connected computational cluster.
          // Camera orbits to an elevated perspective viewing all modules.
          // ============================================================
          const t = (p - 0.30) / 0.15;

          camera.position.x = THREE.MathUtils.lerp(0.85, -0.85, t) + currentMouseX * 0.12;
          camera.position.y = THREE.MathUtils.lerp(0.1, 1.0, t) + currentMouseY * 0.12;
          camera.position.z = THREE.MathUtils.lerp(2.7, 7.0, t);
          camera.lookAt(0, 0, 0);

          compSystem.position.set(0, 0, 0);
          compSystem.rotation.set(0.28, THREE.MathUtils.lerp(-0.26, 0.15, t), 0);

          // Station 1: Code Interface (left)
          codeSurface.position.set(
            THREE.MathUtils.lerp(baseRightX, -2.5, t),
            THREE.MathUtils.lerp(2.1, 0.85, t),
            THREE.MathUtils.lerp(-0.8, 0.2, t)
          );
          codeSurface.rotation.set(0.18, 0.32, 0);

          // Station 2: Data Structure Topology (center)
          topoSurface.position.set(
            THREE.MathUtils.lerp(2.6, 0, t),
            THREE.MathUtils.lerp(0.45, 0, t),
            THREE.MathUtils.lerp(0.95, 0.2, t)
          );

          // Station 3: Logic Core & Protected Boundary (right)
          logicCore.position.set(
            THREE.MathUtils.lerp(0, 2.5, t),
            THREE.MathUtils.lerp(-2.1, -0.85, t),
            THREE.MathUtils.lerp(0.55, -0.2, t)
          );

          gateLeft.position.set(THREE.MathUtils.lerp(-8.0, -5.5, t), 0, -2.5);
          gateRight.position.set(THREE.MathUtils.lerp(8.0, 5.5, t), 0, -2.5);

        } else if (p < 0.70) {
          // ============================================================
          // STAGE 4: SKILLS -> PROJECTS (0.45 -> 0.70)
          // Security boundary activates (lines 18 & 19).
          // Presentation wings open wide, framing the real project showcases.
          // ============================================================
          if (p < 0.58) {
            // --- Phase 4A: Threat Intelligence Aggregator ---
            const t = (p - 0.45) / 0.13;

            camera.position.x = THREE.MathUtils.lerp(-0.85, 0.4, t) + currentMouseX * 0.1;
            camera.position.y = THREE.MathUtils.lerp(1.0, 0.1, t);
            camera.position.z = THREE.MathUtils.lerp(7.0, 5.0, t);
            camera.lookAt(0.2, 0, 0);

            codeSurface.position.set(THREE.MathUtils.lerp(-2.5, -5.2, t), 0.9, -2.0);
            topoSurface.position.set(THREE.MathUtils.lerp(0, 5.2, t), -0.5, -2.0);
            logicCore.position.set(0, 0, THREE.MathUtils.lerp(-0.9, -4.5, t));

            gateLeft.position.set(THREE.MathUtils.lerp(-5.5, -4.2, t), 0, -1.2);
            gateRight.position.set(THREE.MathUtils.lerp(5.5, 4.2, t), 0, -1.2);

          } else {
            // --- Phase 4B: SentinelShield ---
            const t = (p - 0.58) / 0.12;

            camera.position.x = THREE.MathUtils.lerp(0.4, -0.55, t) + currentMouseX * 0.1;
            camera.position.y = THREE.MathUtils.lerp(0.1, -0.15, t);
            camera.position.z = THREE.MathUtils.lerp(5.0, 5.4, t);
            camera.lookAt(-0.2, 0, 0);

            codeSurface.position.set(-5.2, 0.9, -2.0);
            topoSurface.position.set(5.2, -0.5, -2.0);
            logicCore.position.set(0, 0, -4.5);

            gateLeft.position.set(-4.2, 0, -1.2);
            gateRight.position.set(4.2, 0, -1.2);
          }

        } else if (p < 0.82) {
          // ============================================================
          // STAGE 5: PROJECTS -> EXPERIENCE (0.70 -> 0.82)
          // System simplifies and pulls back into structured depth.
          // ============================================================
          const t = (p - 0.70) / 0.12;

          camera.position.x = THREE.MathUtils.lerp(-0.55, 0.3, t) + currentMouseX * 0.08;
          camera.position.y = THREE.MathUtils.lerp(-0.15, 1.2, t);
          camera.position.z = THREE.MathUtils.lerp(5.4, 9.2, t);
          camera.lookAt(0, 0, 0);

          codeSurface.position.set(THREE.MathUtils.lerp(-5.2, -2.8, t), -1.2, -6.5);
          topoSurface.position.set(THREE.MathUtils.lerp(5.2, 2.8, t), -1.2, -6.5);
          logicCore.position.set(0, -1.2, -6.5);

          gateLeft.position.set(-4.2, 0, THREE.MathUtils.lerp(-1.2, -9.0, t));
          gateRight.position.set(4.2, 0, THREE.MathUtils.lerp(-1.2, -9.0, t));

        } else if (p < 0.90) {
          // ============================================================
          // STAGE 6: EXPERIENCE -> EDUCATION (0.82 -> 0.90)
          // Modules converge and align into balanced order.
          // Code marks system.status = "READY".
          // ============================================================
          const t = (p - 0.82) / 0.08;

          camera.position.x = THREE.MathUtils.lerp(0.3, -0.35, t) + currentMouseX * 0.08;
          camera.position.y = THREE.MathUtils.lerp(1.2, 0.4, t);
          camera.position.z = THREE.MathUtils.lerp(9.2, 8.4, t);
          camera.lookAt(0, 0, 0);

          codeSurface.position.set(-2.8, THREE.MathUtils.lerp(-1.2, -0.6, t), -5.5);
          topoSurface.position.set(2.8, THREE.MathUtils.lerp(-1.2, -0.6, t), -5.5);
          logicCore.position.set(0, THREE.MathUtils.lerp(-1.2, -0.6, t), -5.5);

        } else if (p < 0.95) {
          // ============================================================
          // STAGE 7: EDUCATION -> CERTIFICATIONS (0.90 -> 0.95)
          // Elements lock into unified symmetry.
          // ============================================================
          const t = (p - 0.90) / 0.05;

          camera.position.x = THREE.MathUtils.lerp(-0.35, 0.1, t) + currentMouseX * 0.08;
          camera.position.y = THREE.MathUtils.lerp(0.4, 0.0, t);
          camera.position.z = THREE.MathUtils.lerp(8.4, 7.8, t);
          camera.lookAt(0, 0, 0);

          codeSurface.position.set(THREE.MathUtils.lerp(-2.8, -1.6, t), -0.5, -4.5);
          topoSurface.position.set(THREE.MathUtils.lerp(2.8, 1.6, t), -0.5, -4.5);
          logicCore.position.set(0, -0.5, -4.5);

        } else {
          // ============================================================
          // STAGE 8: CERTIFICATIONS -> CONTACT (0.95 -> 1.0)
          // Complete, stable, unified computational system.
          // Settles elegantly in balanced desktop perspective.
          // ============================================================
          const t = (p - 0.95) / 0.05;

          camera.position.x = THREE.MathUtils.lerp(0.1, 0.0, t) + currentMouseX * 0.12;
          camera.position.y = THREE.MathUtils.lerp(0.0, 0.0, t) + currentMouseY * 0.12;
          camera.position.z = THREE.MathUtils.lerp(7.8, 7.4, t);
          camera.lookAt(0, 0, 0);

          const rightX = isMobile ? 0 : 2.4;
          compSystem.position.set(
            THREE.MathUtils.lerp(0, rightX, t),
            0,
            0
          );
          compSystem.rotation.set(0.32, THREE.MathUtils.lerp(0.15, -0.32, t), 0);

          codeSurface.position.set(0, 0.35, 0);
          codeSurface.rotation.set(0, 0, 0);

          topoSurface.position.set(
            THREE.MathUtils.lerp(1.6, 0.65, t),
            THREE.MathUtils.lerp(-0.5, -0.2, t),
            THREE.MathUtils.lerp(-4.5, 0.35, t)
          );
          logicCore.position.set(0, -0.85, -0.2);
        }

      } else {
        // Reduced Motion Fallback
        camera.position.set(0, 0, 7.8);
        camera.lookAt(0, 0, 0);
        compSystem.position.set(width < 768 ? 0 : 2.4, 0, 0);
        compSystem.rotation.set(0.32, -0.42, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    // ------------------------------------------------------------------
    // Cleanup
    // ------------------------------------------------------------------
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);

      renderer.dispose();
      codeTex.dispose();
      topoTex.dispose();
      feTex.dispose();
      beTex.dispose();
      codePlaneGeo.dispose();
      topoPlaneGeo.dispose();
      coreGeo.dispose();
      feGeo.dispose();
      beGeo.dispose();
      dbCylinderGeo.dispose();
      netGeo.dispose();
      boundaryGeo.dispose();
      authNodeGeo.dispose();
      gateBarGeoV.dispose();
      gateBarGeoH.dispose();
      packetGeo.dispose();
    };
  }, []);

  // Compute active narrative stage label based on scroll percentage
  const getStageLabel = (percent: number) => {
    if (percent < 15) return "01 // SYSTEM INITIALIZE";
    if (percent < 30) return "02 // MODULES MOUNTED";
    if (percent < 45) return "03 // SERVICES CONNECTED";
    if (percent < 60) return "04 // DATA PROCESSED";
    if (percent < 75) return "05 // SECURITY VALIDATED";
    if (percent < 90) return "06 // APPS PRESENTED";
    return "07 // SYSTEM READY";
  };

  return (
    <>
      {/* Background Visual Layer (Fixed, non-blocking) */}
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Subtle Scroll Progress Indicator (Top edge, 2px) */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-transparent"
      >
        <div
          className="h-full bg-gradient-to-r from-[#c0392b] via-[#e74c3c] to-[#8ea3bf] transition-all duration-150 ease-out"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      {/* Editorial Scroll Progress Micro-Spec (Bottom-right, understated) */}
      <div
        aria-hidden="true"
        className="fixed bottom-5 right-6 z-40 hidden md:flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-[#64748b] bg-[#0c0f14]/85 border border-[#1f242d] px-3.5 py-1.5 rounded-sm backdrop-blur-sm pointer-events-none"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#c0392b] animate-pulse" />
        <span>{getStageLabel(scrollPercent)} // {scrollPercent}%</span>
      </div>
    </>
  );
}
