/* ============================================================
   Sample Data Layer
   ============================================================ */

const JEB = {};

// ── Shop profile & defaults ──────────────────────────────
JEB.shopProfile = {
  name: "Prototype CNC Shop",
  sqft: 26000,
  machineCount: 18,
  operatorCount: 8,
  shopType: "High-mix low-volume CNC job shop",
  erp: "Global Shop Systems",
  scheduleType: "Static schedule with weekly human review"
};

JEB.defaults = {
  setupCostPerHour: 85,
  inventoryCarryingPct: 18,
  maxMachinesPerOperator: 2.5,
  batchExtensionThresholdPct: 30,
  expeditePenaltyMultiplier: 1.4,
  overtimePenaltyMultiplier: 1.2,
  machineSubstitutionPenaltyPct: 12,
  attentionDilutionFactor: 0.15,
  microStopFactorMin: 0.05,
  microStopFactorMax: 0.2,
  overtimeRateMultiplier: 1.5,
  latenessPenaltyPerDay: 200
};

// ── Operators ───────────────────────────────────────────
JEB.operators = [
  {
    id: "O1", name: "Joe", skillTier: "Expert",
    certifiedMachines: ["VMC1","VMC2","VMC3","VMC4","VMC5","VMC6","VMC7"],
    preferredMachines: ["VMC1"],
    maxMachines: 3, otEligible: true,
    setupProficiency: "Fast", learningCurveStrength: 0.9,
    weeklyPlannedHours: 42, weeklyActualHours: 46, weeklySetupHours: 6.5,
    avgMachinesCovered: 3.0, risk: "Overload"
  },
  {
    id: "O2", name: "Sam", skillTier: "Advanced",
    certifiedMachines: ["Lathe1","Lathe2","VMC3"],
    preferredMachines: ["Lathe1"],
    maxMachines: 3, otEligible: true,
    setupProficiency: "Average", learningCurveStrength: 0.8,
    weeklyPlannedHours: 40, weeklyActualHours: 41, weeklySetupHours: 5.0,
    avgMachinesCovered: 2.5, risk: "OK"
  },
  {
    id: "O3", name: "Alex", skillTier: "Journeyman",
    certifiedMachines: ["VMC4","VMC5","VMC6","Manual1"],
    preferredMachines: ["VMC4"],
    maxMachines: 2, otEligible: true,
    setupProficiency: "Average", learningCurveStrength: 0.7,
    weeklyPlannedHours: 40, weeklyActualHours: 40, weeklySetupHours: 4.0,
    avgMachinesCovered: 2.0, risk: "OK"
  },
  {
    id: "O4", name: "Chris", skillTier: "Advanced",
    certifiedMachines: ["Lathe1","Lathe2","Lathe3","VMC7"],
    preferredMachines: ["Lathe2"],
    maxMachines: 3, otEligible: false,
    setupProficiency: "Fast", learningCurveStrength: 0.85,
    weeklyPlannedHours: 40, weeklyActualHours: 39, weeklySetupHours: 5.5,
    avgMachinesCovered: 2.8, risk: "OK"
  },
  {
    id: "O5", name: "Maya", skillTier: "Expert",
    certifiedMachines: ["VMC5","VMC6","VMC7","Lathe3"],
    preferredMachines: ["VMC5"],
    maxMachines: 3, otEligible: true,
    setupProficiency: "Fast", learningCurveStrength: 0.92,
    weeklyPlannedHours: 40, weeklyActualHours: 48, weeklySetupHours: 7.0,
    avgMachinesCovered: 3.0, risk: "Overload"
  },
  {
    id: "O6", name: "Dan", skillTier: "Journeyman",
    certifiedMachines: ["Manual1","Manual2","VMC3"],
    preferredMachines: ["Manual1"],
    maxMachines: 2, otEligible: true,
    setupProficiency: "Slow", learningCurveStrength: 0.6,
    weeklyPlannedHours: 40, weeklyActualHours: 38, weeklySetupHours: 3.0,
    avgMachinesCovered: 1.8, risk: "Under"
  },
  {
    id: "O7", name: "Pat", skillTier: "Advanced",
    certifiedMachines: ["VMC1","VMC2","VMC3","Lathe1"],
    preferredMachines: ["VMC2"],
    maxMachines: 2, otEligible: false,
    setupProficiency: "Average", learningCurveStrength: 0.75,
    weeklyPlannedHours: 40, weeklyActualHours: 42, weeklySetupHours: 4.5,
    avgMachinesCovered: 2.2, risk: "Watch"
  },
  {
    id: "O8", name: "Lee", skillTier: "Journeyman",
    certifiedMachines: ["Lathe2","Lathe3","Manual2"],
    preferredMachines: ["Lathe3"],
    maxMachines: 2, otEligible: true,
    setupProficiency: "Average", learningCurveStrength: 0.65,
    weeklyPlannedHours: 40, weeklyActualHours: 40, weeklySetupHours: 3.5,
    avgMachinesCovered: 2.0, risk: "OK"
  }
];

// ── Machines ────────────────────────────────────────────
JEB.machines = [
  { id:"VMC1", type:"CNC Mill", ageClass:"New",    cycleBandMin:6,  cycleBandMax:10, setupHours:1.5, precision:"High",   babysitting:0.10, varRisk:"Low",    utilization:0.82 },
  { id:"VMC2", type:"CNC Mill", ageClass:"New",    cycleBandMin:6,  cycleBandMax:10, setupHours:1.5, precision:"High",   babysitting:0.10, varRisk:"Low",    utilization:0.78 },
  { id:"VMC3", type:"CNC Mill", ageClass:"Mid",    cycleBandMin:8,  cycleBandMax:13, setupHours:1.8, precision:"Medium", babysitting:0.20, varRisk:"Medium", utilization:0.75 },
  { id:"VMC4", type:"CNC Mill", ageClass:"Old",    cycleBandMin:10, cycleBandMax:15, setupHours:2.0, precision:"Medium", babysitting:0.30, varRisk:"High",   utilization:0.68 },
  { id:"VMC5", type:"CNC Mill", ageClass:"Mid",    cycleBandMin:7,  cycleBandMax:12, setupHours:1.6, precision:"High",   babysitting:0.15, varRisk:"Low",    utilization:0.80 },
  { id:"VMC6", type:"CNC Mill", ageClass:"Old",    cycleBandMin:11, cycleBandMax:16, setupHours:2.2, precision:"Low",    babysitting:0.35, varRisk:"High",   utilization:0.60 },
  { id:"VMC7", type:"CNC Mill", ageClass:"New",    cycleBandMin:5,  cycleBandMax:9,  setupHours:1.4, precision:"High",   babysitting:0.08, varRisk:"Low",    utilization:0.88 },
  { id:"Lathe1",type:"CNC Lathe",ageClass:"New",   cycleBandMin:4,  cycleBandMax:8,  setupHours:1.2, precision:"High",   babysitting:0.12, varRisk:"Low",    utilization:0.79 },
  { id:"Lathe2",type:"CNC Lathe",ageClass:"Mid",   cycleBandMin:6,  cycleBandMax:11, setupHours:1.5, precision:"Medium", babysitting:0.22, varRisk:"Medium", utilization:0.72 },
  { id:"Lathe3",type:"CNC Lathe",ageClass:"Old",   cycleBandMin:8,  cycleBandMax:14, setupHours:1.8, precision:"Low",    babysitting:0.28, varRisk:"High",   utilization:0.65 },
  { id:"Manual1",type:"Manual Mill",ageClass:"Old",cycleBandMin:15, cycleBandMax:25, setupHours:0.5, precision:"Low",    babysitting:0.60, varRisk:"Very High",utilization:0.45 },
  { id:"Manual2",type:"Manual Lathe",ageClass:"Old",cycleBandMin:18,cycleBandMax:30,setupHours:0.5, precision:"Low",    babysitting:0.65, varRisk:"Very High",utilization:0.40 }
];

// ── Jobs ─────────────────────────────────────────────────
JEB.jobs = [
  { id:"J101", customer:"OEMA",  marginClass:"High",  qtyRemaining:120, dueBucket:"This Week",  setupRequired:true,  preferredMachine:"VMC1", altMachine:"VMC2", strategic:true,  canSplit:true,  inventoryToleranceDays:5, idealBatch:80,  lcSensitivity:"Medium", expedite:false, urgencyScore:9, strategicScore:9 },
  { id:"J102", customer:"OEMB",  marginClass:"Medium",qtyRemaining:60,  dueBucket:"This Week",  setupRequired:false, preferredMachine:"Lathe1",altMachine:"Lathe2",strategic:true, canSplit:false, inventoryToleranceDays:3, idealBatch:60,  lcSensitivity:"High",   expedite:true,  urgencyScore:10,strategicScore:8 },
  { id:"J103", customer:"OEMC",  marginClass:"Low",   qtyRemaining:200, dueBucket:"Next Week",  setupRequired:true,  preferredMachine:"VMC3", altMachine:"VMC4", strategic:false, canSplit:true,  inventoryToleranceDays:7, idealBatch:100, lcSensitivity:"Low",    expedite:false, urgencyScore:5, strategicScore:3 },
  { id:"J104", customer:"OEMA",  marginClass:"High",  qtyRemaining:45,  dueBucket:"This Week",  setupRequired:true,  preferredMachine:"VMC2", altMachine:"VMC1", strategic:true,  canSplit:false, inventoryToleranceDays:2, idealBatch:45,  lcSensitivity:"High",   expedite:true,  urgencyScore:10,strategicScore:9 },
  { id:"J105", customer:"OEMD",  marginClass:"Medium",qtyRemaining:80,  dueBucket:"Next Week",  setupRequired:false, preferredMachine:"Lathe2",altMachine:"Lathe3",strategic:false,canSplit:true,  inventoryToleranceDays:8, idealBatch:80,  lcSensitivity:"Low",    expedite:false, urgencyScore:4, strategicScore:4 },
  { id:"J106", customer:"OEME",  marginClass:"Low",   qtyRemaining:300, dueBucket:"Two+ Weeks", setupRequired:true,  preferredMachine:"VMC4", altMachine:"VMC5", strategic:false, canSplit:true,  inventoryToleranceDays:10,idealBatch:150, lcSensitivity:"Low",    expedite:false, urgencyScore:2, strategicScore:2 },
  { id:"J107", customer:"OEMB",  marginClass:"High",  qtyRemaining:30,  dueBucket:"This Week",  setupRequired:true,  preferredMachine:"VMC5", altMachine:"VMC6", strategic:true,  canSplit:false, inventoryToleranceDays:1, idealBatch:30,  lcSensitivity:"Medium", expedite:false, urgencyScore:8, strategicScore:8 },
  { id:"J108", customer:"OEMC",  marginClass:"Medium",qtyRemaining:90,  dueBucket:"Next Week",  setupRequired:false, preferredMachine:"VMC7", altMachine:"VMC3", strategic:false, canSplit:true,  inventoryToleranceDays:6, idealBatch:90,  lcSensitivity:"Low",    expedite:false, urgencyScore:6, strategicScore:5 }
];

// ── Weekly assignments & metrics ─────────────────────────
JEB.weeklyAssignments = [
  { operator:"Joe",   primary:"VMC1",   secondary:"VMC2",   tertiary:null,    loadRisk:"Medium" },
  { operator:"Sam",   primary:"Lathe1", secondary:"Lathe2", tertiary:null,    loadRisk:"Medium" },
  { operator:"Alex",  primary:"VMC4",   secondary:"VMC5",   tertiary:null,    loadRisk:"Low" },
  { operator:"Chris", primary:"Lathe2", secondary:"Lathe3", tertiary:null,    loadRisk:"Low" },
  { operator:"Maya",  primary:"VMC5",   secondary:"VMC7",   tertiary:"VMC6",  loadRisk:"High" },
  { operator:"Dan",   primary:"Manual1",secondary:"VMC3",   tertiary:null,    loadRisk:"Low" },
  { operator:"Pat",   primary:"VMC2",   secondary:"VMC1",   tertiary:null,    loadRisk:"Medium" },
  { operator:"Lee",   primary:"Lathe3", secondary:"Manual2",tertiary:null,    loadRisk:"Low" }
];

JEB.weeklyMetrics = {
  plannedOutput: 485,
  setupHours: 36,
  overtimeForecast: 12,
  onTimeProbability: 0.94,
  inventoryDeltaDays: 1.2,
  setupCostTotal: 3060,
  overtimeCostTotal: 1530,
  expediteCostTotal: 840
};

JEB.decisionFlags = [
  { type:"warning", text:"Extend J103 run to avoid second setup — saves 2h setup at cost of +1.2 inventory days",   action:"Extend batch" },
  { type:"danger",  text:"Reassign Maya from 3 machines to 2 — current load 48h vs 40h planned, overload risk high", action:"Reduce coverage" },
  { type:"accent",  text:"Move J107 to VMC6 as fallback if VMC5 is occupied — +8% cycle penalty but avoids delay",   action:"Machine swap" },
  { type:"success", text:"Schedule overtime on Lathe2 Thursday — covers J102 expedite without missing OEMB deadline", action:"Approve OT" }
];

// ── Scenario outputs ─────────────────────────────────────
JEB.scenarios = {
  minSetups: {
    label: "Min Setups",
    setupHours: 22, overtimeHours: 18, onTimePct: 91, inventoryDays: 2.8,
    riskFlags: 2, savingsVsBase: 1190,
    description: "Consolidate runs, extend batches where inventory allows. Reduces changeover disruption."
  },
  minInventory: {
    label: "Min Inventory",
    setupHours: 44, overtimeHours: 8, onTimePct: 92, inventoryDays: 0.4,
    riskFlags: 3, savingsVsBase: -340,
    description: "Split runs, reduce batch extension. Frees working capital but increases setup burden."
  },
  maxOTD: {
    label: "Max On-Time",
    setupHours: 36, overtimeHours: 20, onTimePct: 98, inventoryDays: 1.5,
    riskFlags: 1, savingsVsBase: -680,
    description: "Prioritize due and strategic jobs. High confidence delivery at cost of overtime."
  },
  balanced: {
    label: "Operator-Friendly",
    setupHours: 30, overtimeHours: 6, onTimePct: 93, inventoryDays: 1.8,
    riskFlags: 2, savingsVsBase: 420,
    description: "Reduce tertiary assignments, limit short-cycle mixing. Sustainable pace, moderate trade-offs."
  }
};

// ── Same/Similar parts ───────────────────────────────────
JEB.parts = [
  {
    partId:"P201", partFamily:"Bearing Ring", material:"4140 Steel",
    diameterMm:120, lengthMm:28, toleranceClass:"Tight",
    machineFamily:"CNC Lathe", routingFamily:"Turn-Grind-Inspect",
    setupFamily:"Ring Soft Jaw", historicalSetupH:1.8, historicalCycleMin:7.2,
    repeatRuns:5, imageFamily:"ring_like",
    candidates:[
      { partId:"P188", score:0.93, reasons:["Same material","Same setup family","Similar diameter ±5mm"] },
      { partId:"P176", score:0.87, reasons:["Same routing family","Tight tolerance","Lathe-compatible"] },
      { partId:"P142", score:0.79, reasons:["Same machine family","Similar batch size","4140 material"] },
      { partId:"P195", score:0.74, reasons:["Ring geometry","Close diameter","Same inspect step"] },
      { partId:"P167", score:0.68, reasons:["Same material family","Similar tolerances"] }
    ]
  },
  {
    partId:"P202", partFamily:"Shaft", material:"17-4 PH",
    diameterMm:42, lengthMm:240, toleranceClass:"Medium",
    machineFamily:"CNC Mill + Lathe", routingFamily:"Turn-Mill-Deburr-Inspect",
    setupFamily:"Shaft Collet", historicalSetupH:2.4, historicalCycleMin:11.5,
    repeatRuns:2, imageFamily:"shaft_like",
    candidates:[
      { partId:"P165", score:0.89, reasons:["Same geometry family","Similar routing","Close part length ±20mm"] },
      { partId:"P178", score:0.82, reasons:["17-4 PH material","Collet setup","Turn-mill routing"] },
      { partId:"P151", score:0.71, reasons:["Shaft family","Similar diameter","Mill+Lathe compatible"] },
      { partId:"P190", score:0.65, reasons:["Same deburr step","Close dimensions"] },
      { partId:"P144", score:0.58, reasons:["Similar tolerance class","CNC lathe-compatible"] }
    ]
  },
  {
    partId:"P203", partFamily:"Flange", material:"304 SS",
    diameterMm:85, lengthMm:18, toleranceClass:"Medium",
    machineFamily:"CNC Mill", routingFamily:"Face-Mill-Drill-Deburr-Inspect",
    setupFamily:"Flange Face Fixture", historicalSetupH:1.4, historicalCycleMin:9.8,
    repeatRuns:8, imageFamily:"flange_like",
    candidates:[
      { partId:"P177", score:0.91, reasons:["Same material","Same setup family","Similar OD"] },
      { partId:"P183", score:0.85, reasons:["Flange geometry","304 SS","Same routing"] },
      { partId:"P159", score:0.76, reasons:["CNC Mill family","Same fixturing class","Medium tolerance"] },
      { partId:"P171", score:0.69, reasons:["Similar diameter","Drill step reuse","SS family"] },
      { partId:"P146", score:0.62, reasons:["Face fixture reuse","Similar part weight"] }
    ]
  },
  {
    partId:"P204", partFamily:"Housing", material:"6061 Aluminum",
    diameterMm:140, lengthMm:55, toleranceClass:"Loose",
    machineFamily:"CNC Mill", routingFamily:"Face-Bore-Mill-Inspect",
    setupFamily:"Box Fixture", historicalSetupH:3.2, historicalCycleMin:18.5,
    repeatRuns:1, imageFamily:"housing_like",
    candidates:[
      { partId:"P169", score:0.84, reasons:["Aluminum housing family","Same routing","Box fixture"] },
      { partId:"P175", score:0.77, reasons:["Similar OD","Bore step reuse","6061 material"] },
      { partId:"P160", score:0.68, reasons:["Box fixture family","Loose tolerance","CNC Mill"] },
      { partId:"P148", score:0.61, reasons:["Housing geometry","Similar weight class"] },
      { partId:"P139", score:0.54, reasons:["Aluminum","Same machining family"] }
    ]
  },
  {
    partId:"P205", partFamily:"Bracket", material:"A36 Steel",
    diameterMm:0, lengthMm:120, toleranceClass:"Loose",
    machineFamily:"Manual Mill", routingFamily:"Saw-Face-Drill-Inspect",
    setupFamily:"Vise", historicalSetupH:0.8, historicalCycleMin:25.0,
    repeatRuns:12, imageFamily:"bracket_like",
    candidates:[
      { partId:"P193", score:0.88, reasons:["Same material","Vise setup","Same routing"] },
      { partId:"P180", score:0.81, reasons:["A36 steel","Bracket family","Drill step"] },
      { partId:"P162", score:0.72, reasons:["Manual Mill family","Similar length","Loose tolerance"] },
      { partId:"P147", score:0.65, reasons:["Same fixture","Similar run history"] },
      { partId:"P133", score:0.57, reasons:["A36 family","Saw step reuse"] }
    ]
  }
];

// ── Image family mapping ─────────────────────────────────
JEB.imageFamilyMap = {
  ring_like:    { label:"Bearing Ring / Race",   routing:"Turn-Grind-Inspect",  setup:"Soft Jaw",     machines:["CNC Lathe"],         confidence:0.88 },
  shaft_like:   { label:"Shaft / Spindle",       routing:"Turn-Mill-Deburr",    setup:"Collet/Chuck", machines:["CNC Lathe","CNC Mill"],confidence:0.85 },
  flange_like:  { label:"Flange / Plate",        routing:"Face-Mill-Drill",     setup:"Face Fixture", machines:["CNC Mill"],           confidence:0.82 },
  housing_like: { label:"Housing / Block",       routing:"Face-Bore-Mill",      setup:"Box Fixture",  machines:["CNC Mill"],           confidence:0.79 },
  bracket_like: { label:"Bracket / Weldment",    routing:"Saw-Face-Drill",      setup:"Vise",         machines:["Manual Mill"],        confidence:0.75 }
};

// ── Helper functions ─────────────────────────────────────

/** Compute operator load score (0-10) */
JEB.operatorLoadScore = function(op) {
  const loadRatio = op.weeklyActualHours / op.weeklyPlannedHours;
  const machineContrib = op.avgMachinesCovered * 0.4;
  const setupContrib   = op.weeklySetupHours / 10;
  return Math.min(10, ((loadRatio - 1) * 5 + machineContrib + setupContrib) * 2 + 3).toFixed(1);
};

/** Compute job risk score */
JEB.jobRiskScore = function(job, params) {
  const p = params || JEB.defaults;
  let score = 0;
  if (job.dueBucket === "This Week")   score += 4;
  if (job.dueBucket === "Next Week")   score += 2;
  if (job.expedite) score += p.expeditePenaltyMultiplier;
  if (job.setupRequired) score += 1.5;
  if (!job.canSplit) score += 1;
  if (job.strategic) score -= 2;
  if (job.marginClass === "High") score -= 1;
  return Math.max(0, Math.min(10, score)).toFixed(1);
};

/** Compute similarity score */
JEB.similarityScore = function(part, query) {
  let score = 0;
  if (part.material === query.material) score += 0.20;
  else if (part.material.split(" ")[0] === query.material.split(" ")[0]) score += 0.10;
  if (part.setupFamily === query.setupFamily) score += 0.20;
  if (part.routingFamily === query.routingFamily) score += 0.15;
  if (part.machineFamily === query.machineFamily) score += 0.15;
  const diamDiff = Math.abs(part.diameterMm - query.diameterMm);
  score += 0.10 * Math.max(0, 1 - diamDiff / 100);
  if (part.imageFamily === query.imageFamily) score += 0.10;
  score += 0.10 * Math.min(1, part.repeatRuns / 5);
  return Math.min(1, score);
};

/** Format number with comma separators */
JEB.fmt = (n) => n.toLocaleString();

/** Format percentage */
JEB.pct = (n) => (n * 100).toFixed(0) + "%";

/** Risk badge HTML */
JEB.riskBadge = function(risk) {
  const map = {
    "Overload": "danger", "Watch": "warning", "Under": "accent",
    "OK": "success", "High": "danger", "Medium": "warning",
    "Low": "success", "Very High": "danger"
  };
  const cls = map[risk] || "muted";
  return `<span class="badge badge-${cls} badge-dot">${risk}</span>`;
};
