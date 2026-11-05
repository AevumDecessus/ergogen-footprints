module.exports = {
  params: {
    designator: 'Q',
    side: 'F',
    reversible: false,
    include_traces_vias: false,
    P1: { type: 'net', value: undefined },
    P2: { type: 'net', value: undefined },
    P3: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "SOT-23"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(tags "SOT TO_SOT_SMD")`);
fp.push(`(attr smd)`);


// Pads
fp.push(`(pad "1" smd roundrect (at -0.9375 ${flipN(flip, -0.95)} ${flipR(flip, p.r + 0)}) (size 1.475 0.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.P1})`);
fp.push(`(pad "2" smd roundrect (at -0.9375 ${flipN(flip, 0.95)} ${flipR(flip, p.r + 0)}) (size 1.475 0.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.P2})`);
fp.push(`(pad "3" smd roundrect (at 0.9375 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 1.475 0.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.P3})`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start -1.93 ${flipN(flip, -1.5)}) (end -0.9 ${flipN(flip, -1.5)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);
fp.push(`(fp_line (start -1.93 ${flipN(flip, -0.39)}) (end -1.93 ${flipN(flip, -1.5)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);
fp.push(`(fp_line (start -1.93 ${flipN(flip, 0.39)}) (end -0.9 ${flipN(flip, 0.39)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);
fp.push(`(fp_line (start -1.93 ${flipN(flip, 1.5)}) (end -1.93 ${flipN(flip, 0.39)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);
fp.push(`(fp_line (start -0.9 ${flipN(flip, -1.7)}) (end 0.9 ${flipN(flip, -1.7)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);
fp.push(`(fp_line (start -0.9 ${flipN(flip, -1.5)}) (end -0.9 ${flipN(flip, -1.7)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);
fp.push(`(fp_line (start -0.9 ${flipN(flip, -0.39)}) (end -1.93 ${flipN(flip, -0.39)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);
fp.push(`(fp_line (start -0.9 ${flipN(flip, 0.39)}) (end -0.9 ${flipN(flip, -0.39)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);
fp.push(`(fp_line (start -0.9 ${flipN(flip, 1.5)}) (end -1.93 ${flipN(flip, 1.5)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);
fp.push(`(fp_line (start -0.9 ${flipN(flip, 1.7)}) (end -0.9 ${flipN(flip, 1.5)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);
fp.push(`(fp_line (start 0.9 ${flipN(flip, -1.7)}) (end 0.9 ${flipN(flip, -0.55)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);
fp.push(`(fp_line (start 0.9 ${flipN(flip, -0.55)}) (end 1.93 ${flipN(flip, -0.55)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);
fp.push(`(fp_line (start 0.9 ${flipN(flip, 0.55)}) (end 0.9 ${flipN(flip, 1.7)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);
fp.push(`(fp_line (start 0.9 ${flipN(flip, 1.7)}) (end -0.9 ${flipN(flip, 1.7)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);
fp.push(`(fp_line (start 1.93 ${flipN(flip, -0.55)}) (end 1.93 ${flipN(flip, 0.55)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);
fp.push(`(fp_line (start 1.93 ${flipN(flip, 0.55)}) (end 0.9 ${flipN(flip, 0.55)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);

//q Drawings on F.Fab
fp.push(`(fp_poly (pts (xy -0.325 ${flipN(flip, -1.45)}) (xy 0.65 ${flipN(flip, -1.45)}) (xy 0.65 ${flipN(flip, 1.45)}) (xy -0.65 ${flipN(flip, 1.45)}) (xy -0.65 ${flipN(flip, -1.125)})) (stroke (width 0.1) (type solid)) (fill no) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_text user "\${REFERENCE}" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 90) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 0.72 0.72) (thickness 0.11)) (justify${ flip ? " mirror" : ""})))`);

// Drawings on F.SilkS
fp.push(`(fp_line (start -0.76 ${flipN(flip, -1.56)}) (end 0.76 ${flipN(flip, -1.56)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start -0.76 ${flipN(flip, -1.51)}) (end -0.76 ${flipN(flip, -1.56)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start -0.76 ${flipN(flip, 0.39)}) (end -0.76 ${flipN(flip, -0.39)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start -0.76 ${flipN(flip, 1.56)}) (end -0.76 ${flipN(flip, 1.51)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start 0.76 ${flipN(flip, -1.56)}) (end 0.76 ${flipN(flip, -0.56)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start 0.76 ${flipN(flip, 0.56)}) (end 0.76 ${flipN(flip, 1.56)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start 0.76 ${flipN(flip, 1.56)}) (end -0.76 ${flipN(flip, 1.56)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_poly (pts (xy -1.3 ${flipN(flip, -0.38)}) (xy -1.06 ${flipN(flip, -0.05)}) (xy -1.54 ${flipN(flip, -0.05)})) (stroke (width 0.12) (type solid)) (fill yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);

// 3D Models
//fp.push(`(model "\${KICAD10_3DMODEL_DIR}/Package_TO_SOT_SMD.3dshapes/SOT-23.step" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`);

// Properties
// fp.push(`(property "Reference" "REF**" (at 0 ${flipN(flip, -2.4)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "SOT-23" (at 0 ${flipN(flip, 2.4)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "KiLib_Generator" "package/gullwing" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes) (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}
function normalizeAngle(angle) {
  angle = angle % 360;
  if (angle <= -180) angle += 360;
  else if (angle > 180) angle -= 360;
  return angle;
}
function flipR(flip, r) { return normalizeAngle(flip ? (180 - r) : r) }
function flipN(flip, n) { return flip ? -n : n }

