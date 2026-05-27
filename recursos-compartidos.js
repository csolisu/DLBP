// --- PALETAS EXACTAS ---
const palettesBase = {
    acid: ['#000000', '#ff00ff', '#00ffff', '#ccff00'],
    amber: ['#1a1100', '#ffb000'],
    amiga: ['#aaaaaa', '#000000', '#ffffff', '#6688bb', '#f58022', '#1144aa', '#fa3300', '#00ccef'],
    apple2: ['#000000', '#8a213e', '#453588', '#cf4ce7', '#0e5d48', '#808080', '#1c9ef0', '#95a1f6', '#526605', '#c87910', '#eaa6bd', '#11c419', '#bdf155', '#7dcda4', '#ffffff'],
    mac1: ['#000000', '#ffffff'],
    artdeco: ['#2e2925', '#d2a452', '#e5d8cd', '#805b38', '#5a6b5d'],
    atarist: ['#000000', '#ff0000', '#00ff00', '#ffff00', '#0000ff', '#ff00ff', '#00ffff', '#ffffff', '#555555', '#aa0000', '#00aa00', '#aaaa00', '#0000aa', '#aa00aa', '#00aaaa', '#aaaaaa'],
    bauhaus: ['#1a1a1a', '#e22c2a', '#f7d438', '#185a9d', '#e8e6e1'],
    c64subset: ['#000000', '#777777', '#cccccc', '#ffffff'],
    cga: ['#000000', '#55ffff', '#ff55ff', '#ffffff'],
    c64: ['#000000', '#ffffff', '#880000', '#aaffee', '#cc44cc', '#00cc55', '#0000aa', '#eeee77', '#dd8855', '#664400', '#ff7777', '#333333', '#777777', '#aaff66', '#0088ff', '#bbbbbb'],
    cyberpunk: ['#000000', '#ff003c', '#00f0ff', '#fcee0a'],
    db16: ['#140c1c', '#442434', '#30346d', '#4e4a4e', '#854c30', '#346524', '#d04648', '#757161', '#597dce', '#d27d2c', '#8595a1', '#6daa2c', '#d2aa99', '#6dc2ca', '#dad45e', '#deeed6'],
    db32: ['#000000', '#222034', '#45283c', '#663931', '#8f563b', '#df7126', '#d9a066', '#eec39a', '#fbf236', '#99e550', '#6abe30', '#37946e', '#4b692f', '#524b24', '#323c39', '#3f3f74', '#306082', '#5b6ee1', '#639bff', '#5fcde4', '#cbdbfc', '#ffffff', '#9badb7', '#847e87', '#696a6a', '#595652', '#76428a', '#ac3232', '#d95763', '#d77bba', '#8f974a', '#8a6f30'],
    deepsea: ['#000010', '#001a33', '#004080', '#0080ff', '#00ffff'],
    ega: ['#000000', '#0000aa', '#00aa00', '#00aaaa', '#aa0000', '#aa00aa', '#aa5500', '#aaaaaa', '#555555', '#5555ff', '#55ff55', '#55ffff', '#ff5555', '#ff55ff', '#ffff55', '#ffffff'],
    fireash: ['#111111', '#551111', '#aa3311', '#ff6600', '#ffcc00', '#ffffff'],
    galactic: ['#0b0c10', '#1f2833', '#c5c6c7', '#66fcf1', '#45a29e'],
    gameboy: ['#0f380f', '#306230', '#8bac0f', '#9bbc0f'],
    gbc: ['#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#000000'],
    gray4: ['#000000', '#555555', '#aaaaaa', '#ffffff'],
    gray8: ['#000000', '#242424', '#494949', '#6d6d6d', '#929292', '#b6b6b6', '#dbdbdb', '#ffffff'],
    greenCRT: ['#001100', '#33ff00'],
    gruvbox: ['#282828', '#cc241d', '#98971a', '#d79921', '#458588', '#b16286', '#689d6a', '#a89984', '#ebdbb2'],
    highcontrast: ['#000000', '#ffff00', '#00ffff', '#ff00ff', '#ffffff'],
    impressionist: ['#89a8b1', '#e3c4a6', '#c58d7c', '#6c7c64', '#444c55'],
    material: ['#f44336', '#e91e63', '#9c27b0', '#3f51b5', '#2196f3', '#00bcd4', '#009688', '#4caf50', '#ffeb3b', '#ff9800'],
    bw: ['#000000', '#ffffff'], 
    monokai: ['#272822', '#f92672', '#a6e22e', '#f4bf75', '#66d9ef', '#ae81ff'],
    msx: ['#000000', '#25c525', '#3aea3a', '#5454ff', '#7171ff', '#b74242', '#3cf4f4', '#ea5f5f', '#f47171', '#c5c525', '#eaea3a', '#258c25', '#c554b7', '#cccccc', '#ffffff'],
    neon: ['#000000', '#ff00ff', '#00ffff', '#00ff00', '#ffff00', '#ff0000'],
    nds: ['#ffffff', '#c0c0c0', '#808080', '#000000', '#ff0000', '#00ff00', '#0000ff', '#ffff00'],
    noir: ['#000000', '#1a1a1a', '#4d4d4d', '#999999', '#e6e6e6', '#ffffff'],
    nord: ['#2e3440', '#3b4252', '#434c5e', '#4c566a', '#88c0d0', '#81a1c1', '#5e81ac', '#bf616a', '#d08770', '#ebcb8b', '#a3be8c', '#b48ead'],
    pastel: ['#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff'],
    pico8: ['#000000', '#1d2b53', '#7e2553', '#008751', '#ab5236', '#5f574f', '#c2c3c7', '#fff1e8', '#ff004d', '#ffa300', '#ffec27', '#00e436', '#29adff', '#83769c', '#ff77a8', '#ffccaa'],
    retrowave: ['#000000', '#0f0f1b', '#ff0055', '#00eeff', '#ffee00'],
    sepia: ['#2b1a0a', '#4a3219', '#7a5a36', '#a6825c', '#d4bba0', '#fcf2e3'],
    solarpunk: ['#2d4030', '#567d46', '#88b04b', '#e0d8b0', '#f4a460'],
    solarized: ['#002b36', '#073642', '#586e75', '#657b83', '#839496', '#93a1a1', '#eee8d5', '#fdf6e3', '#b58900', '#cb4b16', '#dc322f', '#d33682', '#6c71c4', '#268bd2', '#2aa198', '#859900'],
    synthwave: ['#000000', '#241734', '#2e2157', '#fd3777', '#f706cf', '#fd1d53', '#f9c80e', '#ff4365'],
    tokyonight: ['#1a1b26', '#24283b', '#c0caf5', '#f7768e', '#9ece6a', '#e0af68', '#7aa2f7', '#bb9af7', '#7dcfff'],
    vaporwave: ['#000000', '#ff71ce', '#01cdfe', '#05ffa1', '#b967ff', '#fffb96'],
    websafe: ['#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'],
    win95: ['#000000', '#800000', '#008000', '#808000', '#000080', '#800080', '#008080', '#c0c0c0', '#808080', '#ff0000', '#00ff00', '#ffff00', '#0000ff', '#ff00ff', '#00ffff', '#ffffff'],
    zxspectrum: ['#000000', '#0000d7', '#d70000', '#d700d7', '#00d700', '#00d7d7', '#d7d700', '#d7d7d7', '#0000ff', '#ff0000', '#ff00ff', '#00ff00', '#00ffff', '#ffff00', '#ffffff'],
    custom: [] 
};

// --- COLOR HELPERS ---
function getNormalizedHex(c) {
    let hex = Array.isArray(c) ? '#' + c.map(x => x.toString(16).padStart(2, '0')).join('') : c;
    return hex.toLowerCase();
}

function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if(max === min){
        h = s = 0; 
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return [h, s, l];
}

function hslToRgb(h, s, l) {
    let r, g, b;
    if(s === 0){
        r = g = b = l; 
    } else {
        let hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }
        let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        let p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function applyPostHSL(rgb, hOffset, sOffset, lOffset) {
    let hsl = rgbToHsl(rgb[0], rgb[1], rgb[2]);
    let h = hsl[0] + (hOffset / 360);
    if (h < 0) h += 1;
    if (h > 1) h -= 1;
    let s = hsl[1] + (sOffset / 100);
    s = Math.max(0, Math.min(1, s));
    let l = hsl[2] + (lOffset / 100);
    l = Math.max(0, Math.min(1, l));
    return hslToRgb(h, s, l);
}

function hexToRgb(hex) {
    if (Array.isArray(hex)) return hex;
    const bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

// --- MATRICES ---
function generateNormalizedBayer(n) {
    if (n === 1) return [[0]];
    let prev = generateNormalizedBayer(n / 2);
    let base = prev.map(row => row.map(v => (v + 0.5) * ((n/2)*(n/2))));
    let size = base.length;
    let matrix = Array(n).fill().map(() => Array(n).fill(0));
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            let v = base[y][x] * 4;
            matrix[y][x] = v;
            matrix[y][x + size] = v + 2;
            matrix[y + size][x] = v + 3;
            matrix[y + size][x + size] = v + 1;
        }
    }
    let max = n * n;
    return matrix.map(row => row.map(v => (v + 0.5) / max - 0.5));
}

const matricesOrdenadas = {
    bayer2: generateNormalizedBayer(2),
    bayer4: generateNormalizedBayer(4),
    bayer8: generateNormalizedBayer(8),
    bayer16: generateNormalizedBayer(16),
    cluster4: [[12, 5, 6, 13], [4, 0, 1, 7], [11, 3, 2, 8], [15, 10, 9, 14]].map(r => r.map(v => (v + 0.5) / 16 - 0.5)),
    cluster8: [
        [24, 10, 12, 26, 35, 47, 49, 37], [8, 0, 2, 14, 45, 59, 61, 51],
        [22, 6, 4, 16, 31, 55, 57, 41], [30, 20, 18, 28, 33, 43, 53, 39],
        [34, 46, 48, 36, 25, 11, 13, 27], [44, 58, 60, 50, 9, 1, 3, 15],
        [32, 54, 56, 40, 23, 7, 5, 17], [42, 52, 41, 38, 29, 21, 19, 25]
    ].map(r => r.map(v => (v + 0.5) / 64 - 0.5))
};

const matricesDifusion = {
    floydSteinberg: { m: [[1,0,7], [-1,1,3], [0,1,5], [1,1,1]], d: 16 },
    jarvis: { m: [[1,0,7], [2,0,5], [-2,1,3], [-1,1,5], [0,1,7], [1,1,5], [2,1,3], [-2,2,1], [-1,2,3], [0,2,5], [1,2,3], [2,2,1]], d: 48 },
    stucki: { m: [[1,0,8], [2,0,4], [-2,1,2], [-1,1,4], [0,1,8], [1,1,4], [2,1,2], [-2,2,1], [-1,2,2], [0,2,4], [1,2,2], [2,2,1]], d: 42 },
    burkes: { m: [[1,0,8], [2,0,4], [-2,1,2], [-1,1,4], [0,1,8], [1,1,4], [2,1,2]], d: 32 },
    sierra3: { m: [[1,0,5], [2,0,3], [-2,1,2], [-1,1,4], [0,1,5], [1,1,4], [2,1,2], [-1,2,2], [0,2,3], [1,2,2]], d: 32 },
    sierra2: { m: [[1,0,4], [2,0,3], [-2,1,1], [-1,1,2], [0,1,3], [1,1,2], [2,1,1]], d: 16 },
    sierraLite: { m: [[1,0,2], [-1,1,1], [0,1,1]], d: 4 },
    atkinson: { m: [[1,0,1], [2,0,1], [-1,1,1], [0,1,1], [1,1,1], [0,2,1]], d: 8 },
// --- 50 ALGORITMOS DE DIFUSIÓN INÉDITOS ---
    // Ligeros y Rápidos
    difusion_ligera_1: { m: [[1,0,2], [0,1,1]], d: 3 },
    difusion_ligera_2: { m: [[1,0,3], [-1,1,1], [0,1,1]], d: 5 },
    micro_difusion_a: { m: [[1,0,4], [0,1,2], [1,1,1]], d: 7 },
    micro_difusion_b: { m: [[1,0,2], [-1,1,1], [0,1,2], [1,1,1]], d: 6 },
    eco_inmediato: { m: [[1,0,5], [2,0,1], [0,1,2]], d: 8 },
    paso_corto_1: { m: [[1,0,1], [0,1,1], [1,1,1]], d: 3 },
    paso_corto_2: { m: [[1,0,3], [0,1,3], [1,1,2]], d: 8 },
    suavizado_express: { m: [[1,0,2], [2,0,1], [-1,1,1], [0,1,2], [1,1,1]], d: 7 },
    difusion_puntual: { m: [[1,0,4], [0,1,4]], d: 8 },
    brisa_digital: { m: [[1,0,3], [2,0,1], [0,1,2], [0,2,1]], d: 7 },

    // Expandidos (Horizontales)
    horizonte_amplio: { m: [[1,0,4], [2,0,2], [3,0,1], [0,1,1]], d: 8 },
    barrido_lateral: { m: [[1,0,5], [2,0,3], [3,0,2], [4,0,1], [0,1,1]], d: 12 },
    difusion_panoramica: { m: [[1,0,8], [2,0,4], [3,0,2], [-1,1,1], [0,1,2], [1,1,1]], d: 18 },
    estela_ancha_1: { m: [[1,0,6], [2,0,3], [3,0,1], [0,1,2], [1,1,1]], d: 13 },
    estela_ancha_2: { m: [[1,0,4], [2,0,4], [3,0,4], [0,1,2]], d: 14 },
    viento_digital: { m: [[1,0,3], [2,0,2], [4,0,1], [0,1,1], [1,1,1]], d: 8 },
    arrastre_x: { m: [[1,0,8], [2,0,6], [3,0,4], [4,0,2], [0,1,2]], d: 22 },
    eco_horizontal: { m: [[1,0,3], [3,0,2], [5,0,1], [0,1,2]], d: 8 },
    suavizado_lateral: { m: [[1,0,5], [2,0,3], [3,0,1], [-2,1,1], [-1,1,2], [0,1,3], [1,1,2], [2,1,1]], d: 18 },
    difusion_plana: { m: [[1,0,6], [2,0,4], [3,0,2], [4,0,1]], d: 13 },

    // Profundos (Verticales)
    caida_libre: { m: [[1,0,1], [0,1,4], [0,2,2], [0,3,1]], d: 8 },
    gravedad_digital: { m: [[1,0,2], [0,1,6], [0,2,4], [0,3,2], [0,4,1]], d: 15 },
    cascada_1: { m: [[1,0,1], [-1,1,1], [0,1,4], [-1,2,1], [0,2,2], [0,3,1]], d: 10 },
    cascada_2: { m: [[1,0,2], [0,1,8], [0,2,6], [0,3,4]], d: 20 },
    goteo_profundo: { m: [[1,0,1], [0,1,3], [0,2,2], [0,4,1]], d: 7 },
    difusion_y: { m: [[1,0,2], [0,1,6], [0,2,4], [0,3,2]], d: 14 },
    eco_vertical: { m: [[1,0,1], [0,1,5], [0,3,3], [0,5,1]], d: 10 },
    lluvia_ligera: { m: [[1,0,1], [0,1,3], [0,2,1], [0,3,1]], d: 6 },
    desplome_suave: { m: [[1,0,2], [-1,1,1], [0,1,5], [1,1,1], [0,2,3], [0,3,1]], d: 13 },
    hilo_vertical: { m: [[1,0,1], [0,1,8], [0,2,8], [0,3,8]], d: 25 },

    // Asimétricos y Sesgados
    sesgo_derecho_1: { m: [[1,0,6], [2,0,2], [0,1,1], [1,1,4], [2,1,2]], d: 15 },
    sesgo_izquierdo_1: { m: [[1,0,2], [-2,1,2], [-1,1,4], [0,1,1], [-1,2,2]], d: 11 },
    viento_cruzado_der: { m: [[1,0,4], [2,0,2], [1,1,4], [2,1,2], [2,2,2]], d: 14 },
    viento_cruzado_izq: { m: [[1,0,1], [-2,1,2], [-1,1,4], [-3,2,1], [-2,2,2]], d: 10 },
    peso_asimetrico_a: { m: [[1,0,8], [-1,1,1], [0,1,2], [1,1,6], [2,1,3]], d: 20 },
    peso_asimetrico_b: { m: [[1,0,3], [-2,1,4], [-1,1,6], [0,1,2], [1,1,1]], d: 16 },
    difusion_oblicua_1: { m: [[1,0,2], [1,1,4], [2,2,2], [3,3,1]], d: 9 },
    difusion_oblicua_2: { m: [[1,0,2], [-1,1,4], [-2,2,2], [-3,3,1]], d: 9 },
    deriva_positiva: { m: [[1,0,5], [1,1,3], [2,1,2], [1,2,1]], d: 11 },
    deriva_negativa: { m: [[1,0,5], [-1,1,3], [-2,1,2], [-1,2,1]], d: 11 },

    // Caóticos y Experimentales
    ruido_disperso: { m: [[1,0,2], [3,0,1], [-2,1,1], [2,1,1], [0,2,2]], d: 7 },
    salto_cuantico_1: { m: [[2,0,4], [-2,1,2], [2,1,2], [0,2,4]], d: 12 },
    salto_cuantico_2: { m: [[1,0,1], [4,0,2], [-3,1,1], [3,1,1], [0,3,2]], d: 7 },
    difusion_hueca: { m: [[2,0,3], [3,0,2], [-2,1,2], [2,1,2], [0,2,3]], d: 12 },
    anillo_difuso: { m: [[1,0,2], [2,0,1], [-1,1,2], [1,1,2], [0,2,2], [-1,2,1], [1,2,1]], d: 11 },
    eco_tardio: { m: [[1,0,1], [5,0,3], [-4,1,1], [0,1,1], [4,1,2]], d: 8 },
    difusion_fractal_mini: { m: [[1,0,4], [-1,1,2], [1,1,2], [-2,2,1], [0,2,1], [2,2,1]], d: 11 },
    ajedrez_caotico: { m: [[2,0,3], [-1,1,2], [1,1,2], [-2,2,1], [0,2,3], [2,2,1]], d: 12 },
    salto_caballo: { m: [[2,1,4], [-2,1,4], [1,2,2], [-1,2,2]], d: 12 },
    estallido_estelar: { m: [[1,0,3], [2,0,1], [-1,1,3], [0,1,2], [1,1,3], [-2,2,1], [0,2,1], [2,2,1]], d: 15 }
};

// --- CURVAS ---
function getCurveY(pts, x) {
    if(x <= pts[0].x) return pts[0].y;
    if(x >= pts[pts.length-1].x) return pts[pts.length-1].y;
    for(let i=0; i<pts.length-1; i++) {
        if(x >= pts[i].x && x <= pts[i+1].x) {
            let p0 = pts[i]; let p1 = pts[i+1];
            let t = (x - p0.x) / (p1.x - p0.x);
            let y = p0.y + (p1.y - p0.y) * (1 - Math.cos(t * Math.PI)) / 2;
            return Math.max(0, Math.min(255, y));
        }
    }
    return x;
}

function getLUT(channel, curves) {
    let lut = new Uint8Array(256);
    let pts = curves[channel];
    for(let i=0; i<256; i++) lut[i] = getCurveY(pts, i);
    return lut;
}

// --- PALETTE MATCHING ---
function findClosestPaletteColorIndex(r, g, b, paletteArray) {
    let minDst = Infinity;
    let closestIdx = 0;
    for (let i = 0; i < paletteArray.length; i++) {
        let p = paletteArray[i];
        let rmean = (r + p[0]) / 2;
        let dr = r - p[0];
        let dg = g - p[1];
        let db = b - p[2];
        let dst = (((512 + rmean) * dr * dr) >> 8) + 4 * dg * dg + (((767 - rmean) * db * db) >> 8);
        if (dst < minDst) { minDst = dst; closestIdx = i; }
    }
    return closestIdx;
}

// --- SCAN PATHS ---
function getScanPath(w, h, pattern) {
    const path = new Int32Array(w * h * 3);
    let idx = 0;
    
    if (pattern === 'standard') {
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                path[idx++] = x; path[idx++] = y; path[idx++] = 1;
            }
        }
    } else if (pattern === 'zigzag') {
        for (let y = 0; y < h; y++) {
            let rtl = (y % 2 !== 0);
            for (let x0 = 0; x0 < w; x0++) {
                path[idx++] = rtl ? w - 1 - x0 : x0;
                path[idx++] = y;
                path[idx++] = rtl ? -1 : 1;
            }
        }
    } else if (pattern === 'vertical') {
        for (let x = 0; x < w; x++) {
            for (let y = 0; y < h; y++) {
                path[idx++] = x; path[idx++] = y; path[idx++] = 1;
            }
        }
    } else if (pattern === 'spiral') {
        let x = Math.floor(w / 2), y = Math.floor(h / 2);
        let dx = 1, dy = 0, segmentLength = 1, segmentPassed = 0;
        let processed = 0, total = w * h;
        
        while (processed < total) {
            if (x >= 0 && x < w && y >= 0 && y < h) {
                path[idx++] = x; path[idx++] = y; path[idx++] = dx === -1 ? -1 : 1;
                processed++;
            }
            x += dx; y += dy;
            segmentPassed++;
            if (segmentPassed === segmentLength) {
                segmentPassed = 0;
                let t = dx; dx = -dy; dy = t;
                if (dy === 0) segmentLength++;
            }
        }
    } else if (pattern === 'hilbert') {
        let maxDim = Math.max(w, h);
        let n = 1;
        while (n < maxDim) n *= 2;
        let processed = 0, total = w * h;
        
        function rot(n, x, y, rx, ry) {
            if (ry === 0) {
                if (rx === 1) { x = n - 1 - x; y = n - 1 - y; }
                return {x: y, y: x};
            }
            return {x: x, y: y};
        }
        
        for (let d = 0; d < n * n; d++) {
            if (processed >= total) break;
            let t = d, px = 0, py = 0;
            for (let s = 1; s < n; s *= 2) {
                let rx = 1 & (t / 2);
                let ry = 1 & (t ^ rx);
                let pt = rot(s, px, py, rx, ry);
                px = pt.x + s * rx;
                py = pt.y + s * ry;
                t = Math.floor(t / 4);
            }
            if (px < w && py < h) {
                path[idx++] = px; path[idx++] = py; path[idx++] = 1;
                processed++;
            }
        }
    }
    return path;
}

// --- ESTOCASTIC GROUP ---
const estocasticGroup = ['threshold', 'random', 'blueNoise', 'line', 'circles', 'diamonds', 'squares', 'triangles', 'voronoi', 'crossHatch', 'spiralWave', 'hilbertPattern', 'dtm',
    'lineas_45', 'lineas_135', 'lineas_v', 'lineas_h', 'malla_ortogonal', 'malla_diagonal', 'malla_hexagonal',
    'ondas_v', 'ondas_h', 'ondas_cruzadas', 'zigzag_v', 'zigzag_h', 'ladrillos', 'isometria', 'cuadricula_distorsionada',
    'espiral_simple', 'espiral_doble', 'espiral_cuadruple', 'anillos_concentricos', 'anillos_ondulados',
    'rayos_solares', 'rayos_ondulados', 'vortice', 'interferencia_ondas', 'moire_lineal', 'moire_radial',
    'ondas_sismicas', 'ruido_liquido', 'espiral_cuadrada', 'anillos_cuadrados', 'rombos_concentricos', 'espiral_poligonal',
    'madera', 'huella_dactilar', 'escamas', 'red_organica', 'topografia', 'marmol', 'cebra',
    'telar', 'malla_triangular', 'diamantes_delgados', 'cruz_celta', 'matriz_puntos', 'circuitos',
    'estrellas', 'telarana', 'ilusiones_opticas', 'fractal_basico', 'lluvia_matrix',
    'ht_punto_fino', 'ht_punto_grueso', 'ht_punto_invertido', 'ht_elipse_h', 'ht_elipse_v', 'ht_burbujas', 'ht_anillos_simples', 'ht_puntos_dobles', 'ht_puntos_desfasados', 'ht_micro_circulos',
    'ht_rombo_suave', 'ht_rombo_agudo', 'ht_diamante_estrella', 'ht_diamante_roto', 'ht_rombo_doble', 'ht_estrellas_4p', 'ht_estrellas_8p', 'ht_rombos_entrelazados', 'ht_cruces_diagonales', 'ht_diamante_invertido',
    'ht_cuadro_suave', 'ht_cuadro_estricto', 'ht_reticula_h', 'ht_reticula_v', 'ht_cuadros_rotados', 'ht_ajedrez_suave', 'ht_bloques_escalonados', 'ht_cuadricula_doble', 'ht_marcos_cuadrados', 'ht_ladrillos_halftone',
    'ht_hex_suave', 'ht_hex_estricto', 'ht_tri_entrelazado', 'ht_piramides', 'ht_octogonos', 'ht_engranajes', 'ht_ondas_senoidales', 'ht_cruces_ortogonales', 'ht_asteriscos', 'ht_malla_tejida',
    'ht_espirales_locales', 'ht_puntos_ondulados', 'ht_gotas', 'ht_manchas', 'ht_celulas', 'ht_ruido_geometrico', 'ht_trama_acida', 'ht_puntos_derretidos', 'ht_distorsion_viento', 'ht_interferencia',
    'frac_mandelbrot', 'frac_mandelcubic', 'frac_mandel5', 'frac_julia', 'frac_juliasin', 'frac_juliacos', 'frac_juliaburningship', 'frac_burningship', 'frac_tricorn', 'frac_buffalo', 'frac_celtic', 'frac_feather',
    'frac_henon', 'frac_clifford', 'frac_dejong', 'frac_ikeda', 'frac_lorenz', 'frac_duffing', 'frac_tinkerbell', 'frac_chirikov', 'frac_gumowskimira', 'frac_martin', 'frac_symmetricicon', 'frac_svensson', 'frac_kingsdream', 'frac_hopalong', 'frac_gingerbreadman', 'frac_rossler',
    'frac_newton3', 'frac_newton4', 'frac_newtonsin', 'frac_novamandelbrot', 'frac_novajulia', 'frac_secante',
    'frac_lyapunov', 'frac_popcorn', 'frac_fbm', 'frac_cantordust', 'frac_sierpinskicarpet', 'frac_sierpinskingasket', 'frac_mandelorbittrap', 'frac_juliaorbittrap', 'frac_cliffordorbittrap', 'frac_henonorbittrap', 'frac_logistic', 'frac_sinemap', 'frac_mandelbox', 'frac_mandelbulb', 'frac_tent', 'frac_arnoldcat',
    'exp_truchet', 'exp_worley', 'exp_worley_manhattan', 'exp_worley_chebyshev', 'exp_maze', 'exp_binary_carpet', 'exp_binary_mod', 'exp_ascii_cross', 'exp_ascii_dot', 'exp_ascii_square', 'exp_heart', 'exp_star_5p', 'exp_chromatic_halftone', 'exp_chromatic_wave', 'exp_glitch_v', 'exp_glitch_h', 'exp_crt_scan', 'exp_lcd_triad', 'exp_halftone_cmyk', 'exp_voronoi_manhattan', 'exp_voronoi_triangular', 'exp_chiral_wave', 'exp_interlaced_cross', 'exp_digit_matrix', 'exp_letter_dither', 'exp_bubble_wrap', 'exp_scales_dragon', 'exp_weave_basket', 'exp_polka_dots', 'exp_chevron', 'exp_hex_lattice', 'exp_celtic_knot', 'exp_noise_comb', 'exp_stripes_radial', 'exp_stripes_spiral', 'exp_halftone_sine', 'exp_fractal_noise', 'exp_tri_grid', 'exp_greek_key', 'exp_houndstooth', 'exp_checkered_shift', 'exp_ascii_hash', 'exp_ascii_at', 'exp_crescent_moon', 'exp_diamond_ring', 'exp_honeycomb', 'exp_dune', 'exp_camouflage', 'exp_circuit_lines', 'exp_crosshairs'];

// --- DITHER ENGINE CORE ---
function ditherEngineCore(imageData, w, h, params) {
    const data = imageData.data;
    const len = data.length;
    const {
        algo, chR, chG, chB, brightness, contrast, gamma, hlcomp,
        saturation, posterize, clipping, bias, errStrength, patScale,
        scanPattern, rotDeg, errBias, activePalette, renderPalette,
        lutM, lutR, lutG, lutB
    } = params;

    const contrastFactor = (259 * (contrast + 255)) / (255 * (259 - contrast));

    const f32 = new Float32Array(w * h * 3);

    for (let i = 0, fi = 0; i < len; i += 4, fi += 3) {
        let r = chR ? data[i] : 0;
        let g = chG ? data[i+1] : 0;
        let b = chB ? data[i+2] : 0;

        r = lutR[lutM[r]]; g = lutG[lutM[g]]; b = lutB[lutM[b]];

        r = contrastFactor * (r - 128) + 128 + brightness;
        g = contrastFactor * (g - 128) + 128 + brightness;
        b = contrastFactor * (b - 128) + 128 + brightness;

        if(gamma !== 1.0 || hlcomp !== 1.0) {
            let rn = Math.max(0, Math.min(1, r/255));
            let gn = Math.max(0, Math.min(1, g/255));
            let bn = Math.max(0, Math.min(1, b/255));
            
            if(gamma !== 1.0) { rn = Math.pow(rn, 1/gamma); gn = Math.pow(gn, 1/gamma); bn = Math.pow(bn, 1/gamma); }
            if(hlcomp !== 1.0) { rn = Math.pow(rn, hlcomp); gn = Math.pow(gn, hlcomp); bn = Math.pow(bn, hlcomp); }
            r = rn * 255; g = gn * 255; b = bn * 255;
        }

        if (saturation !== 1.0) {
            let L = 0.299 * r + 0.587 * g + 0.114 * b;
            r = L + (r - L) * saturation;
            g = L + (g - L) * saturation;
            b = L + (b - L) * saturation;
            r = Math.max(0, Math.min(255, r));
            g = Math.max(0, Math.min(255, g));
            b = Math.max(0, Math.min(255, b));
        }

        if (posterize < 255) {
            let step = 255 / (posterize - 1);
            r = Math.round(r / step) * step;
            g = Math.round(g / step) * step;
            b = Math.round(b / step) * step;
        }

        if (clipping > 0) {
            if (r < clipping) r = 0; else if (r > 255 - clipping) r = 255;
            if (g < clipping) g = 0; else if (g > 255 - clipping) g = 255;
            if (b < clipping) b = 0; else if (b > 255 - clipping) b = 255;
        }

        f32[fi] = r + bias;
        f32[fi+1] = g + bias;
        f32[fi+2] = b + bias;
    }

    if (estocasticGroup.includes(algo)) {
        let spread = errStrength * 128;
        const thin = (v) => Math.pow(Math.abs(Math.sin(v)), 30);
        const wHalfPatScale = w / (2 * patScale);
        const hHalfPatScale = h / (2 * patScale);
        const useCircleMath = ['ht_engranajes', 'spiralWave', 'espiral_simple', 'espiral_doble', 'espiral_cuadruple', 'anillos_concentricos', 'anillos_ondulados', 'rayos_solares', 'rayos_ondulados', 'vortice', 'moire_radial', 'espiral_cuadrada', 'anillos_cuadrados', 'rombos_concentricos', 'espiral_poligonal', 'madera', 'huella_dactilar', 'topografia', 'estrellas', 'telarana', 'exp_chiral_wave', 'exp_interlaced_cross', 'exp_stripes_radial', 'exp_stripes_spiral', 'frac_mandelbrot', 'frac_mandelcubic', 'frac_mandel5', 'frac_julia', 'frac_juliasin', 'frac_juliacos', 'frac_juliaburningship', 'frac_burningship', 'frac_tricorn', 'frac_buffalo', 'frac_celtic', 'frac_feather', 'frac_henon', 'frac_clifford', 'frac_dejong', 'frac_ikeda', 'frac_lorenz', 'frac_duffing', 'frac_tinkerbell', 'frac_chirikov', 'frac_gumowskimira', 'frac_martin', 'frac_symmetricicon', 'frac_svensson', 'frac_kingsdream', 'frac_hopalong', 'frac_gingerbreadman', 'frac_rossler', 'frac_newton3', 'frac_newton4', 'frac_newtonsin', 'frac_novamandelbrot', 'frac_novajulia', 'frac_secante', 'frac_lyapunov', 'frac_popcorn', 'frac_cantordust', 'frac_mandelorbittrap', 'frac_juliaorbittrap', 'frac_cliffordorbittrap', 'frac_henonorbittrap', 'frac_logistic', 'frac_sinemap', 'frac_mandelbox', 'frac_mandelbulb', 'frac_tent', 'frac_arnoldcat'].includes(algo);
        const useLuma = ['crossHatch', 'exp_truchet', 'exp_worley', 'exp_worley_manhattan', 'exp_worley_chebyshev', 'exp_maze', 'exp_binary_carpet', 'exp_binary_mod', 'exp_ascii_cross', 'exp_ascii_dot', 'exp_ascii_square', 'exp_heart', 'exp_star_5p', 'exp_glitch_v', 'exp_glitch_h', 'exp_crt_scan', 'exp_halftone_cmyk', 'exp_digit_matrix', 'exp_letter_dither', 'exp_scales_dragon', 'exp_weave_basket', 'exp_polka_dots', 'exp_stripes_radial', 'exp_stripes_spiral', 'exp_dune', 'exp_camouflage'].includes(algo);
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                let idx = (y * w + x) * 4;
                
                if (data[idx+3] < 128) {
                    data[idx] = 0; data[idx+1] = 0; data[idx+2] = 0; data[idx+3] = 0;
                    continue;
                }

                let fi = (y * w + x) * 3;
                let nx = x / patScale; let ny = y / patScale;
                let t = 0;
                let tr = null, tg = null, tb = null;
                let cx = 0, cy = 0, dist = 0, ang = 0;
                if (useCircleMath) {
                    cx = nx - wHalfPatScale;
                    cy = ny - hHalfPatScale;
                    dist = Math.sqrt(cx*cx + cy*cy);
                    ang = Math.atan2(cy, cx);
                }
                let luma = 0;
                if (useLuma) {
                    luma = (0.299*f32[fi] + 0.587*f32[fi+1] + 0.114*f32[fi+2]) / 255;
                    if (luma < 0) luma = 0; else if (luma > 1) luma = 1;
                }
                switch (algo) {
                    case 'random': t = Math.random() - 0.5; break;
                    case 'line': t = (Math.sin(nx * 1.5 + ny * 0.5) + 1) / 2 - 0.5; break;
                    case 'blueNoise':
                        { let ign = 52.9829189 * ((0.06711056 * x + 0.00583715 * y) % 1); t = (ign - Math.floor(ign)) - 0.5; }
                        break;
                    case 'circles': t = (Math.sin(nx * Math.PI) * Math.sin(ny * Math.PI)) / 2; break;
                    case 'diamonds': t = (Math.sin(nx * Math.PI) + Math.sin(ny * Math.PI)) / 4; break;
                    case 'squares': t = Math.max(Math.abs(Math.sin(nx * Math.PI)), Math.abs(Math.sin(ny * Math.PI))) - 0.5; break;
                    case 'triangles': { let sq3 = Math.sqrt(3); t = (Math.sin((nx + ny / sq3) * Math.PI) + Math.sin((nx - ny / sq3) * Math.PI) + Math.sin((ny * 2 / sq3) * Math.PI)) / 6; }
                // --- HALFTONE: Puntos y Círculos --- break;
                    case 'ht_punto_fino': t = Math.pow(Math.sin(nx * Math.PI) * Math.sin(ny * Math.PI), 2) - 0.5; break;
                    case 'ht_punto_grueso': t = (Math.sin(nx * Math.PI * 0.5) * Math.sin(ny * Math.PI * 0.5)) - 0.25; break;
                    case 'ht_punto_invertido': t = -((Math.sin(nx * Math.PI) * Math.sin(ny * Math.PI)) / 2); break;
                    case 'ht_elipse_h': t = (Math.sin(nx * Math.PI * 1.5) * Math.sin(ny * Math.PI)) / 2; break;
                    case 'ht_elipse_v': t = (Math.sin(nx * Math.PI) * Math.sin(ny * Math.PI * 1.5)) / 2; break;
                    case 'ht_burbujas': t = Math.abs(Math.sin(nx * Math.PI) * Math.sin(ny * Math.PI)) - 0.5; break;
                    case 'ht_anillos_simples': t = Math.sin(Math.sqrt(nx*nx + ny*ny) * Math.PI * 4) / 2; break;
                    case 'ht_puntos_dobles': t = (Math.sin(nx * Math.PI) * Math.sin(ny * Math.PI) + Math.sin(nx * Math.PI * 2) * Math.sin(ny * Math.PI * 2)) / 4; break;
                    case 'ht_puntos_desfasados': t = (Math.sin(nx * Math.PI + ny) * Math.sin(ny * Math.PI - nx)) / 2; break;
                    case 'ht_micro_circulos': t = (Math.sin(nx * Math.PI * 3) * Math.sin(ny * Math.PI * 3)) / 2;

                // --- HALFTONE: Rombos y Diamantes --- break;
                    case 'ht_rombo_suave': t = (Math.cos(nx * Math.PI) + Math.cos(ny * Math.PI)) / 4; break;
                    case 'ht_rombo_agudo': t = (Math.abs(Math.cos(nx * Math.PI)) + Math.abs(Math.cos(ny * Math.PI))) / 2 - 0.5; break;
                    case 'ht_diamante_estrella': t = (Math.pow(Math.sin(nx * Math.PI), 3) + Math.pow(Math.sin(ny * Math.PI), 3)) / 4; break;
                    case 'ht_diamante_roto': t = (Math.sin(nx * Math.PI) + Math.cos(ny * Math.PI)) / 4; break;
                    case 'ht_rombo_doble': t = (Math.sin(nx * Math.PI) * Math.cos(ny * Math.PI) + Math.cos(nx * Math.PI) * Math.sin(ny * Math.PI)) / 4; break;
                    case 'ht_estrellas_4p': t = Math.pow(Math.sin(nx * Math.PI) * Math.cos(ny * Math.PI), 2) - 0.5; break;
                    case 'ht_estrellas_8p': t = (Math.sin(nx * Math.PI) + Math.sin(ny * Math.PI) + Math.sin((nx+ny) * Math.PI)) / 6; break;
                    case 'ht_rombos_entrelazados': t = Math.sin((nx + ny) * Math.PI) * Math.sin((nx - ny) * Math.PI) / 2; break;
                    case 'ht_cruces_diagonales': t = (Math.abs(Math.sin((nx + ny) * Math.PI)) - Math.abs(Math.cos((nx - ny) * Math.PI))) / 2; break;
                    case 'ht_diamante_invertido': t = -((Math.sin(nx * Math.PI) + Math.sin(ny * Math.PI)) / 4);

                // --- HALFTONE: Cuadrados y Retículas --- break;
                    case 'ht_cuadro_suave': t = (Math.cos(nx * Math.PI * 2) * Math.cos(ny * Math.PI * 2)) / 2; break;
                    case 'ht_cuadro_estricto': t = Math.max(Math.sin(nx * Math.PI), Math.cos(ny * Math.PI)) - 0.5; break;
                    case 'ht_reticula_h': t = Math.sin(ny * Math.PI * 2) / 2; break;
                    case 'ht_reticula_v': t = Math.sin(nx * Math.PI * 2) / 2; break;
                    case 'ht_cuadros_rotados': t = Math.max(Math.abs(Math.sin((nx + ny) * Math.PI)), Math.abs(Math.sin((nx - ny) * Math.PI))) - 0.5; break;
                    case 'ht_ajedrez_suave': t = Math.sin((nx + ny) * Math.PI * 2) / 2; break;
                    case 'ht_bloques_escalonados': t = (Math.sin(nx * Math.PI) * Math.sin(ny * Math.PI + (nx % 2))) / 2; break;
                    case 'ht_cuadricula_doble': t = (Math.sin(nx * Math.PI * 2) + Math.sin(ny * Math.PI * 2)) / 4; break;
                    case 'ht_marcos_cuadrados': t = Math.abs(Math.max(Math.sin(nx * Math.PI), Math.sin(ny * Math.PI))) - 0.5; break;
                    case 'ht_ladrillos_halftone': t = Math.sin(ny * Math.PI) * Math.sin(nx * Math.PI + (Math.floor(ny) % 2) * Math.PI/2) / 2;

                // --- HALFTONE: Geometría Compleja --- break;
                    case 'ht_hex_suave': t = (Math.sin(nx * Math.PI) * Math.sin((nx * 0.5 + ny * 0.866) * Math.PI) * Math.sin((nx * 0.5 - ny * 0.866) * Math.PI)); break;
                    case 'ht_hex_estricto': t = Math.max(Math.sin(nx*Math.PI), Math.max(Math.sin((nx*0.5 + ny*0.866)*Math.PI), Math.sin((nx*0.5 - ny*0.866)*Math.PI))) - 0.5; break;
                    case 'ht_tri_entrelazado': t = (Math.sin(nx * Math.PI) + Math.sin((nx * 0.5 + ny * 0.866) * Math.PI)) / 4; break;
                    case 'ht_piramides': t = Math.min(Math.abs(Math.sin(nx * Math.PI)), Math.abs(Math.sin(ny * Math.PI))) - 0.5; break;
                    case 'ht_octogonos': t = Math.max(Math.abs(Math.sin(nx*Math.PI)), Math.max(Math.abs(Math.sin(ny*Math.PI)), Math.abs(Math.sin((nx+ny)*Math.PI*0.707)))) - 0.5; break;
                    case 'ht_engranajes': t = Math.sin(dist * Math.PI * 4 + Math.sin(ang * 6)) / 2; break;
                    case 'ht_ondas_senoidales': t = (Math.sin(nx * Math.PI * 2) + Math.cos(ny * Math.PI * 2 + nx)) / 4; break;
                    case 'ht_cruces_ortogonales': t = (Math.pow(Math.sin(nx * Math.PI), 4) + Math.pow(Math.sin(ny * Math.PI), 4)) / 4 - 0.25; break;
                    case 'ht_asteriscos': t = (Math.sin(nx * Math.PI) * Math.sin(ny * Math.PI) * Math.sin((nx+ny)*Math.PI)) / 2; break;
                    case 'ht_malla_tejida': t = Math.sin((nx * Math.cos(ny) + ny * Math.sin(nx)) * Math.PI) / 2;

                // --- HALFTONE: Distorsiones y Orgánicos --- break;
                    case 'ht_espirales_locales': t = Math.sin(Math.sqrt(nx*nx + ny*ny) * 10 + Math.atan2(ny, nx) * 3) / 2; break;
                    case 'ht_puntos_ondulados': t = (Math.sin(nx * Math.PI + Math.sin(ny)) * Math.sin(ny * Math.PI)) / 2; break;
                    case 'ht_gotas': t = Math.exp(-Math.pow(Math.sin(nx * Math.PI), 2) - Math.pow(Math.sin(ny * Math.PI), 2)) - 0.5; break;
                    case 'ht_manchas': t = (Math.sin(nx * 3 + Math.cos(ny * 2)) + Math.cos(ny * 3 + Math.sin(nx * 2))) / 4; break;
                    case 'ht_celulas': t = (Math.abs(Math.sin(nx * Math.PI * 1.5)) * Math.abs(Math.cos(ny * Math.PI * 1.5))) - 0.5; break;
                    case 'ht_ruido_geometrico': t = (Math.sin(nx * Math.PI * 2.5) * Math.sin(ny * Math.PI * 2.5) * Math.sin((nx+ny) * 10)) / 2; break;
                    case 'ht_trama_acida': t = (Math.sin(nx * Math.PI + Math.tan(ny)) * Math.cos(ny * Math.PI)) / 4; break;
                    case 'ht_puntos_derretidos': t = (Math.sin(nx * Math.PI) * Math.sin((ny + Math.sin(nx*2)) * Math.PI)) / 2; break;
                    case 'ht_distorsion_viento': t = Math.sin(nx * Math.PI * 2 + Math.cos(ny * Math.PI * 3)) / 2; break;
                    case 'ht_interferencia': t = (Math.sin(nx * Math.PI * 3) + Math.cos(ny * Math.PI * 3) + Math.sin((nx-ny) * Math.PI * 5)) / 6; break;
                    case 'crossHatch':
                        {
                    let luma = (0.299*f32[fi] + 0.587*f32[fi+1] + 0.114*f32[fi+2]) / 255;
                    let ang1 = Math.sin(nx + ny); let ang2 = Math.sin(nx - ny);
                    t = luma > 0.5 ? ang1*0.5 : (ang1+ang2)*0.25;
                }
                        break;
                    case 'spiralWave':
                        {
                    let cx = nx - w/(2*patScale); let cy = ny - h/(2*patScale);
                    let dist = Math.sqrt(cx*cx + cy*cy);
                    let ang = Math.atan2(cy, cx);
                    t = Math.sin(dist * 2.0 + ang * 8.0) * 0.5;
                }
                        break;
                    case 'voronoi':
                        {
                    let xi = Math.floor(nx); let yi = Math.floor(ny);
                    let xf = nx - xi; let yf = ny - yi;
                    let minDist = 1.0;
                    for(let j=-1; j<=1; j++) {
                        for(let i=-1; i<=1; i++) {
                            let ptX = (Math.sin((xi+i)*12.9898 + (yi+j)*78.233) * 43758.5453) % 1;
                            let ptY = (Math.cos((xi+i)*12.9898 + (yi+j)*78.233) * 43758.5453) % 1;
                            let dx = i + Math.abs(ptX) - xf;
                            let dy = j + Math.abs(ptY) - yf;
                            let d = Math.sqrt(dx*dx + dy*dy);
                            if (d < minDist) minDist = d;
                        }
                    }
                    t = minDist - 0.5;
                }
                        break;
                    case 'hilbertPattern':
                        {
                    let hX = Math.floor(nx) ^ Math.floor(ny);
                    t = ((hX * 0.61803398875) % 1) - 0.5;
                }
                        break;
                    case 'dtm': {
                    let mod = Math.sin(nx*0.05) * Math.cos(ny*0.05);
                    t = (Math.random() - 0.5) * mod;
                }
// --- LÍNEAS Y TRAMAS --- break;
                    case 'lineas_45': t = thin(nx + ny) - 0.5; break;
                    case 'lineas_135': t = thin(nx - ny) - 0.5; break;
                    case 'lineas_v': t = thin(nx * 2) - 0.5; break;
                    case 'lineas_h': t = thin(ny * 2) - 0.5; break;
                    case 'malla_ortogonal': t = Math.max(thin(nx * 2), thin(ny * 2)) - 0.5; break;
                    case 'malla_diagonal': t = Math.max(thin(nx + ny), thin(nx - ny)) - 0.5; break;
                    case 'malla_hexagonal': t = Math.max(thin(nx*1.732), Math.max(thin(nx*0.866 + ny*1.5), thin(nx*0.866 - ny*1.5))) - 0.5; break;
                    case 'ondas_v': t = thin(nx * 2 + Math.sin(ny * 1.5)) - 0.5; break;
                    case 'ondas_h': t = thin(ny * 2 + Math.sin(nx * 1.5)) - 0.5; break;
                    case 'ondas_cruzadas': t = Math.max(thin(nx * 2 + Math.sin(ny)), thin(ny * 2 + Math.sin(nx))) - 0.5; break;
                    case 'zigzag_v': t = thin(nx * 2 + Math.abs(Math.sin(ny * 2))) - 0.5; break;
                    case 'zigzag_h': t = thin(ny * 2 + Math.abs(Math.sin(nx * 2))) - 0.5; break;
                    case 'ladrillos': t = Math.max(thin(ny * 2), thin(nx * 2 + Math.floor(ny / Math.PI) * Math.PI)) - 0.5; break;
                    case 'isometria': t = Math.max(thin(ny*2), Math.max(thin(nx*1.732+ny), thin(nx*1.732-ny))) - 0.5; break;
                    case 'cuadricula_distorsionada': t = Math.max(thin(nx * 2 + ny * 0.5), thin(ny * 2 - nx * 0.5)) - 0.5;

                // --- ONDAS, ESPIRALES Y ANILLOS --- break;
                    case 'espiral_simple': t = thin(dist * 2 + ang) - 0.5; break;
                    case 'espiral_doble': t = thin(dist * 2 + ang * 2) - 0.5; break;
                    case 'espiral_cuadruple': t = thin(dist * 2 + ang * 4) - 0.5; break;
                    case 'anillos_concentricos': t = thin(dist * 3) - 0.5; break;
                    case 'anillos_ondulados': t = thin(dist * 3 + Math.sin(ang * 8) * 0.5) - 0.5; break;
                    case 'rayos_solares': t = thin(ang * 8) - 0.5; break;
                    case 'rayos_ondulados': t = thin(ang * 8 + Math.sin(dist * 2)) - 0.5; break;
                    case 'vortice': t = thin(ang * 6 + Math.log(dist + 0.1) * 3) - 0.5; break;
                    case 'interferencia_ondas': t = Math.max(thin(Math.hypot(nx-5, ny)*3), thin(Math.hypot(nx+5, ny)*3)) - 0.5; break;
                    case 'moire_lineal': t = thin(nx * 3) * thin(nx * 3.2) * 2 - 0.5; break;
                    case 'moire_radial': t = thin(dist * 3) * thin(Math.hypot(cx-2, cy)*3) * 2 - 0.5; break;
                    case 'ondas_sismicas': t = thin(ny * 3 + 2 * Math.sin(nx * 1.2 + Math.sin(ny * 0.8))) - 0.5; break;
                    case 'ruido_liquido': t = thin(nx * 1.5 + Math.sin(ny * 1.5) + Math.cos(nx * 0.5)) - 0.5; break;
                    case 'espiral_cuadrada': t = thin(Math.max(Math.abs(cx), Math.abs(cy)) * 4 + ang) - 0.5; break;
                    case 'anillos_cuadrados': t = thin(Math.max(Math.abs(cx), Math.abs(cy)) * 5) - 0.5; break;
                    case 'rombos_concentricos': t = thin((Math.abs(cx) + Math.abs(cy)) * 3) - 0.5; break;
                    case 'espiral_poligonal': t = thin(dist * 3 + Math.floor(ang * 3) / 3) - 0.5;

                // --- ORGÁNICOS Y MATERIALES --- break;
                    case 'madera': t = thin(dist * 1.5 + Math.sin(nx * 0.5) * 2) - 0.5; break;
                    case 'huella_dactilar': t = thin(dist * 2 + Math.sin(ang * 5) * 2) - 0.5; break;
                    case 'escamas': t = thin(nx * 2 + Math.cos(ny * 3) * 1.5) - 0.5; break;
                    case 'red_organica': t = thin(nx * 2 + 2 * Math.sin(ny * 1.5)) * thin(ny * 2 + 2 * Math.sin(nx * 1.5)) * 2 - 0.5; break;
                    case 'topografia': t = thin(dist * 2 + 2 * Math.sin(nx * 0.5) * Math.cos(ny * 0.5)) - 0.5; break;
                    case 'marmol': t = thin(nx * 2 + 3 * Math.sin(ny * 0.5 + 2 * Math.sin(nx * 0.2))) - 0.5; break;
                    case 'cebra': t = thin(nx * 3 + 2 * Math.sin(ny * 0.8)) - 0.5;

                // --- GEOMÉTRICOS Y ÓPTICOS --- break;
                    case 'telar': t = thin(nx * 2 * Math.sin(ny * 2)) - 0.5; break;
                    case 'malla_triangular': t = (thin(nx*2) + thin(nx+ny*1.732) + thin(nx-ny*1.732)) * 0.4 - 0.5; break;
                    case 'diamantes_delgados': t = thin(Math.abs(Math.sin(nx)) + Math.abs(Math.sin(ny))) - 0.5; break;
                    case 'cruz_celta': t = Math.pow(Math.abs(Math.sin(nx*2)*Math.cos(ny*2) + Math.cos(nx*2)*Math.sin(ny*2)), 15) - 0.5; break;
                    case 'matriz_puntos': t = thin(nx * 3) * thin(ny * 3) * 2 - 0.5; break;
                    case 'circuitos': t = Math.max(thin(nx*2), thin(ny*2)) * (Math.sin(Math.floor(nx)*3.1 + Math.floor(ny)*2.7)>0?1:0) - 0.5; break;
                    case 'estrellas': t = thin(ang * 5) * thin(dist * 4) * 2 - 0.5; break;
                    case 'telarana': t = Math.max(thin(dist * 3), thin(ang * 8)) - 0.5; break;
                    case 'ilusiones_opticas': t = Math.pow(Math.abs(Math.sin(nx*2 + Math.sin(ny*2)*0.5) * Math.cos(ny*2 + Math.sin(nx*2)*0.5)), 15) - 0.5; break;
                    case 'fractal_basico': t = Math.pow(Math.abs(Math.sin(nx*2)*Math.sin(ny*2)*Math.sin(nx*4)*Math.sin(ny*4)), 8) - 0.5; break;
                    case 'lluvia_matrix': t = thin(ny * 4 + nx * 12.3) * (Math.sin(nx * 5) > 0 ? 1 : 0) - 0.5;

                // --- TRAMADOS EXPERIMENTALES --- break;
                    case 'exp_truchet':
                        {
                    let tx = Math.floor(nx); let ty = Math.floor(ny);
                    let fx = nx - tx; let fy = ny - ty;
                    let val = Math.sin(tx * 12.9898 + ty * 78.233) * 43758.5453;
                    let rand = (val - Math.floor(val)) > 0.5;
                    let dTruchet = rand ? (fx + fy - 1.0) : (fx - fy);
                    let width = 0.05 + 0.3 * luma;
                    t = (Math.abs(dTruchet) < width) ? -0.45 : 0.45;
                }
                        break;
                    case 'exp_worley':
                        {
                    let xi = Math.floor(nx); let yi = Math.floor(ny);
                    let xf = nx - xi; let yf = ny - yi;
                    let minDist = 9.0;
                    for (let j = -1; j <= 1; j++) {
                        for (let i = -1; i <= 1; i++) {
                            let seed = (xi + i) * 12.9898 + (yi + j) * 78.233;
                            let px = Math.abs(Math.sin(seed * 43758.5453) % 1);
                            let py = Math.abs(Math.cos(seed * 73248.9876) % 1);
                            let dx = i + px - xf;
                            let dy = j + py - yf;
                            let dVal = dx*dx + dy*dy;
                            if (dVal < minDist) minDist = dVal;
                        }
                    }
                    t = (Math.sqrt(minDist) > luma) ? 0.35 : -0.35;
                }
                        break;
                    case 'exp_worley_manhattan':
                        {
                    let xi = Math.floor(nx); let yi = Math.floor(ny);
                    let xf = nx - xi; let yf = ny - yi;
                    let minDist = 9.0;
                    for (let j = -1; j <= 1; j++) {
                        for (let i = -1; i <= 1; i++) {
                            let seed = (xi + i) * 12.9898 + (yi + j) * 78.233;
                            let px = Math.abs(Math.sin(seed * 43758.5453) % 1);
                            let py = Math.abs(Math.cos(seed * 73248.9876) % 1);
                            let dx = Math.abs(i + px - xf);
                            let dy = Math.abs(j + py - yf);
                            let dVal = dx + dy;
                            if (dVal < minDist) minDist = dVal;
                        }
                    }
                    t = (minDist > luma * 1.4) ? 0.35 : -0.35;
                }
                        break;
                    case 'exp_worley_chebyshev':
                        {
                    let xi = Math.floor(nx); let yi = Math.floor(ny);
                    let xf = nx - xi; let yf = ny - yi;
                    let minDist = 9.0;
                    for (let j = -1; j <= 1; j++) {
                        for (let i = -1; i <= 1; i++) {
                            let seed = (xi + i) * 12.9898 + (yi + j) * 78.233;
                            let px = Math.abs(Math.sin(seed * 43758.5453) % 1);
                            let py = Math.abs(Math.cos(seed * 73248.9876) % 1);
                            let dx = Math.abs(i + px - xf);
                            let dy = Math.abs(j + py - yf);
                            let dVal = Math.max(dx, dy);
                            if (dVal < minDist) minDist = dVal;
                        }
                    }
                    t = (minDist > luma) ? 0.35 : -0.35;
                }
                        break;
                    case 'exp_maze':
                        {
                    let tx = Math.floor(nx * 0.8); let ty = Math.floor(ny * 0.8);
                    let fx = nx * 0.8 - tx; let fy = ny * 0.8 - ty;
                    let seed = tx * 15.23 + ty * 34.12;
                    let rand = Math.abs(Math.sin(seed * 43758.5453) % 1);
                    let dLine = 0;
                    if (rand < 0.25) dLine = fx;
                    else if (rand < 0.5) dLine = fy;
                    else if (rand < 0.75) dLine = fx - fy;
                    else dLine = fx + fy - 1.0;
                    t = (Math.abs(dLine) < 0.05 + 0.2 * luma) ? -0.4 : 0.4;
                }
                        break;
                    case 'exp_binary_carpet':
                        {
                    let bx = Math.floor(nx * 2.0);
                    let by = Math.floor(ny * 2.0);
                    let xval = (bx ^ by) % 12;
                    t = ((xval / 12) < luma) ? -0.45 : 0.45;
                }
                        break;
                    case 'exp_binary_mod':
                        {
                    let bx = Math.floor(nx * 2.0);
                    let by = Math.floor(ny * 2.0);
                    let xval = (bx * by) % 17;
                    t = ((xval / 17) < luma) ? -0.45 : 0.45;
                }
                        break;
                    case 'exp_ascii_cross':
                        {
                    let fx = nx % 1.0 - 0.5; let fy = ny % 1.0 - 0.5;
                    let crossSize = 0.05 + 0.45 * (1.0 - luma);
                    let insideCross = (Math.abs(fx) < 0.1 && Math.abs(fy) < crossSize) || (Math.abs(fy) < 0.1 && Math.abs(fx) < crossSize);
                    t = insideCross ? -0.45 : 0.45;
                }
                        break;
                    case 'exp_ascii_dot':
                        {
                    let fx = nx % 1.0 - 0.5; let fy = ny % 1.0 - 0.5;
                    let rad = Math.sqrt(fx*fx + fy*fy);
                    let maxRad = 0.5 * (1.0 - luma);
                    t = (rad < maxRad) ? -0.45 : 0.45;
                }
                        break;
                    case 'exp_ascii_square':
                        {
                    let fx = Math.abs(nx % 1.0 - 0.5);
                    let fy = Math.abs(ny % 1.0 - 0.5);
                    let maxSide = Math.max(fx, fy);
                    let target = 0.5 * (1.0 - luma);
                    t = (Math.abs(maxSide - target) < 0.08) ? -0.4 : 0.4;
                }
                        break;
                    case 'exp_heart':
                        {
                    let fx = (nx % 1.0 - 0.5) * 2.5;
                    let fy = -(ny % 1.0 - 0.5) * 2.5 - 0.25;
                    let hEq = (fx*fx + fy*fy - 1.0);
                    let heartVal = hEq*hEq*hEq - fx*fx*fy*fy*fy;
                    let hThresh = 0.25 * (1.0 - luma);
                    t = (heartVal < hThresh) ? -0.45 : 0.45;
                }
                        break;
                    case 'exp_star_5p':
                        {
                    let fx = nx % 1.0 - 0.5; let fy = ny % 1.0 - 0.5;
                    let rVal = Math.sqrt(fx*fx + fy*fy);
                    let aVal = Math.atan2(fy, fx);
                    let starR = 0.1 + 0.35 * (1.0 - luma) * (Math.cos(aVal * 5) * 0.3 + 0.7);
                    t = (rVal < starR) ? -0.45 : 0.45;
                }
                        break;
                    case 'exp_chromatic_halftone':
                        {
                    let nxR = (x + 3) / patScale; let nyR = (y + 1) / patScale;
                    let nxG = x / patScale; let nyG = (y + 4) / patScale;
                    let nxB = (x - 3) / patScale; let nyB = (y - 2) / patScale;
                    let tR = (Math.sin(nxR * Math.PI) * Math.sin(nyR * Math.PI)) / 2;
                    let tG = (Math.sin(nxG * Math.PI) * Math.sin(nyG * Math.PI)) / 2;
                    let tB = (Math.sin(nxB * Math.PI) * Math.sin(nyB * Math.PI)) / 2;
                    tr = tR; tg = tG; tb = tB;
                }
                        break;
                    case 'exp_chromatic_wave':
                        {
                    let trWave = Math.sin(nx * 1.8) * 0.4;
                    let tgWave = Math.sin(nx * 1.8 + 2.0) * 0.4;
                    let tbWave = Math.sin(nx * 1.8 + 4.0) * 0.4;
                    tr = trWave; tg = tgWave; tb = tbWave;
                }
                        break;
                    case 'exp_glitch_v':
                        {
                    let strip = Math.floor(nx / 3.0);
                    let rand = Math.sin(strip * 45.12) * 43758.5453;
                    let offset = (rand - Math.floor(rand)) - 0.5;
                    t = (Math.sin((ny + offset * 5.0 * luma) * Math.PI)) / 2;
                }
                        break;
                    case 'exp_glitch_h':
                        {
                    let strip = Math.floor(ny / 3.0);
                    let rand = Math.sin(strip * 78.43) * 43758.5453;
                    let offset = (rand - Math.floor(rand)) - 0.5;
                    t = (Math.sin((nx + offset * 5.0 * luma) * Math.PI)) / 2;
                }
                        break;
                    case 'exp_crt_scan':
                        {
                    let normY = (y / h) - 0.5;
                    let normX = (x / w) - 0.5;
                    let dist2 = normX*normX + normY*normY;
                    let distortFactor = 1.0 + 0.12 * dist2;
                    let cury = (normY * distortFactor + 0.5) * h;
                    let sc = Math.sin((cury / patScale) * Math.PI * 2.0);
                    t = sc * 0.35 + 0.1 * (luma - 0.5);
                }
                        break;
                    case 'exp_lcd_triad':
                        {
                    let subpixel = Math.floor(x) % 3;
                    let wave = Math.sin(y * Math.PI / 1.5) * 0.15;
                    tr = (subpixel === 0) ? -0.45 + wave : 0.45;
                    tg = (subpixel === 1) ? -0.45 + wave : 0.45;
                    tb = (subpixel === 2) ? -0.45 + wave : 0.45;
                }
                        break;
                    case 'exp_halftone_cmyk':
                        {
                    let rotScale = patScale;
                    let lC = (0.299 * (255 - f32[fi])) / 255;
                    let lM = (0.587 * (255 - f32[fi+1])) / 255;
                    let lY = (0.114 * (255 - f32[fi+2])) / 255;
                    let lK = (1.0 - luma);
                    
                    let thetaC = 15 * Math.PI / 180;
                    let rxC = x * Math.cos(thetaC) - y * Math.sin(thetaC);
                    let ryC = x * Math.sin(thetaC) + y * Math.cos(thetaC);
                    let tC = (Math.sin(rxC / rotScale * Math.PI) * Math.sin(ryC / rotScale * Math.PI)) / 2;
                    
                    let thetaM = 75 * Math.PI / 180;
                    let rxM = x * Math.cos(thetaM) - y * Math.sin(thetaM);
                    let ryM = x * Math.sin(thetaM) + y * Math.cos(thetaM);
                    let tM = (Math.sin(rxM / rotScale * Math.PI) * Math.sin(ryM / rotScale * Math.PI)) / 2;
                    
                    let thetaY = 0 * Math.PI / 180;
                    let rxY = x * Math.cos(thetaY) - y * Math.sin(thetaY);
                    let ryY = x * Math.sin(thetaY) + y * Math.cos(thetaY);
                    let tY = (Math.sin(rxY / rotScale * Math.PI) * Math.sin(ryY / rotScale * Math.PI)) / 2;
                    
                    let thetaK = 45 * Math.PI / 180;
                    let rxK = x * Math.cos(thetaK) - y * Math.sin(thetaK);
                    let ryK = x * Math.sin(thetaK) + y * Math.cos(thetaK);
                    let tK = (Math.sin(rxK / rotScale * Math.PI) * Math.sin(ryK / rotScale * Math.PI)) / 2;
                    
                    let dc = tC > (lC - 0.5) ? 0.3 : -0.3;
                    let dm = tM > (lM - 0.5) ? 0.3 : -0.3;
                    let dy = tY > (lY - 0.5) ? 0.3 : -0.3;
                    let dk = tK > (lK - 0.5) ? 0.45 : -0.45;
                    
                    tr = dk + dc;
                    tg = dk + dm;
                    tb = dk + dy;
                }
                        break;
                    case 'exp_voronoi_manhattan':
                        {
                    let xi = Math.floor(nx); let yi = Math.floor(ny);
                    let xf = nx - xi; let yf = ny - yi;
                    let minDist1 = 9.0; let minDist2 = 9.0;
                    for (let j = -1; j <= 1; j++) {
                        for (let i = -1; i <= 1; i++) {
                            let seed = (xi + i) * 12.9898 + (yi + j) * 78.233;
                            let px = Math.abs(Math.sin(seed * 43758.5453) % 1);
                            let py = Math.abs(Math.cos(seed * 73248.9876) % 1);
                            let dx = Math.abs(i + px - xf);
                            let dy = Math.abs(j + py - yf);
                            let dVal = dx + dy;
                            if (dVal < minDist1) { minDist2 = minDist1; minDist1 = dVal; }
                            else if (dVal < minDist2) { minDist2 = dVal; }
                        }
                    }
                    t = (minDist2 - minDist1) - 0.5;
                }
                        break;
                    case 'exp_voronoi_triangular':
                        {
                    let row = Math.floor(ny * 1.1547);
                    let colShift = (row % 2) * 0.5;
                    let xi = Math.floor(nx + colShift);
                    let yi = row;
                    let xf = (nx + colShift) - xi;
                    let yf = (ny * 1.1547) - yi;
                    let minDist = 9.0;
                    for (let j = -1; j <= 1; j++) {
                        for (let i = -1; i <= 1; i++) {
                            let seed = (xi + i) * 12.9898 + (yi + j) * 78.233;
                            let px = Math.abs(Math.sin(seed * 43758.5453) % 1);
                            let py = Math.abs(Math.cos(seed * 73248.9876) % 1);
                            let dx = i + px - xf;
                            let dy = (j + py - yf) / 1.1547;
                            let dVal = dx*dx + dy*dy;
                            if (dVal < minDist) minDist = dVal;
                        }
                    }
                    t = Math.sqrt(minDist) - 0.4;
                }
                        break;
                    case 'exp_chiral_wave':
                        {
                    let w1 = Math.sin(dist * 2.0 + ang * 5.0);
                    let w2 = Math.sin(dist * 2.0 - ang * 5.0);
                    t = (w1 + w2) * 0.25;
                }
                        break;
                    case 'exp_interlaced_cross':
                        {
                    let cross = Math.sin(nx * 1.5) * Math.sin(ny * 1.5);
                    let ring = Math.sin(dist * 4.0);
                    t = (cross * ring) * 0.4;
                }
                        break;
                    case 'exp_digit_matrix':
                        {
                    let cellX = Math.floor(nx * 1.5);
                    let cellY = Math.floor(ny * 1.5);
                    let localX = nx * 1.5 - cellX;
                    let localY = ny * 1.5 - cellY;
                    let flow = Math.sin(cellX * 17.13 + (y / 150.0)) * 10.0;
                    let stream = (cellY + flow) % 10.0;
                    let isDigit = (stream < 4.0);
                    let charVal = Math.sin(cellX * 12.9898 + cellY * 78.233) * 43758.5453;
                    let bit = (charVal - Math.floor(charVal)) > 0.5;
                    let pixelVal = 0;
                    if (isDigit) {
                        if (bit) {
                            pixelVal = (Math.abs(localX - 0.5) < 0.1 && localY > 0.1 && localY < 0.9) ? 1.0 : 0.0;
                        } else {
                            pixelVal = (Math.abs(localX - 0.5) < 0.25 && Math.abs(localY - 0.5) < 0.35 && !(Math.abs(localX - 0.5) < 0.1 && Math.abs(localY - 0.5) < 0.2)) ? 1.0 : 0.0;
                        }
                    }
                    t = (pixelVal > 0.5) ? -0.45 * luma : 0.45 * (1.0 - luma);
                }
                        break;
                    case 'exp_letter_dither':
                        {
                    let lx = nx * 2.0; let ly = ny * 2.0;
                    let cellX = Math.floor(lx); let cellY = Math.floor(ly);
                    let fx = lx - cellX; let fy = ly - cellY;
                    let cIndex = Math.floor((1.0 - luma) * 5.0);
                    let activeChar = false;
                    if (cIndex >= 1) {
                        if (cIndex === 1) activeChar = (Math.sqrt((fx-0.5)*(fx-0.5)+(fy-0.5)*(fy-0.5)) < 0.15);
                        else if (cIndex === 2) activeChar = (Math.sqrt((fx-0.5)*(fx-0.5)+(fy-0.5)*(fy-0.5)) < 0.3 && Math.sqrt((fx-0.5)*(fx-0.5)+(fy-0.5)*(fy-0.5)) > 0.2);
                        else if (cIndex === 3) activeChar = (Math.abs(fx - 0.5) < 0.08 || Math.abs(fy - 0.5) < 0.08);
                        else if (cIndex === 4) activeChar = (Math.abs(fx - fy) < 0.12 || Math.abs(fx + fy - 1.0) < 0.12);
                        else activeChar = (Math.abs(fx - 0.5) < 0.12 || Math.abs(fy - 0.5) < 0.12 || Math.abs(fx - fy) < 0.12 || Math.abs(fx + fy - 1.0) < 0.12);
                    }
                    t = activeChar ? -0.45 : 0.45;
                }
                        break;
                    case 'exp_bubble_wrap':
                        {
                    let fx = nx % 1.0 - 0.5; let fy = ny % 1.0 - 0.5;
                    let rad = Math.sqrt(fx*fx + fy*fy);
                    let highlight = (fx < 0.0 && fy < 0.0) ? (0.2 * (0.5 - rad)) : 0.0;
                    let border = (rad > 0.4 && rad < 0.45) ? 0.3 : 0.0;
                    t = (rad < 0.4) ? -0.3 + highlight : 0.3 + border;
                }
                        break;
                    case 'exp_scales_dragon':
                        {
                    let sy = ny * 1.5;
                    let row = Math.floor(sy);
                    let colShift = (row % 2) * 0.5;
                    let sx = nx + colShift;
                    let fx = sx % 1.0 - 0.5;
                    let fy = sy % 1.0 - 0.5;
                    let rad = Math.sqrt(fx*fx + (fy + 0.3)*(fy + 0.3));
                    let scaleVal = (rad < 0.5) ? -0.35 : 0.35;
                    t = scaleVal + (luma - 0.5) * 0.2;
                }
                        break;
                    case 'exp_weave_basket':
                        {
                    let tx = Math.floor(nx / 2.0);
                    let ty = Math.floor(ny / 2.0);
                    let fx = (nx / 2.0) - tx;
                    let fy = (ny / 2.0) - ty;
                    let isVert = (tx + ty) % 2 === 0;
                    let band = isVert ? Math.sin(fx * Math.PI) : Math.sin(fy * Math.PI);
                    t = band * 0.4 + 0.1 * (luma - 0.5);
                }
                        break;
                    case 'exp_polka_dots':
                        {
                    let fx = nx % 1.0 - 0.5; let fy = ny % 1.0 - 0.5;
                    let rad = Math.sqrt(fx*fx + fy*fy);
                    let dotRadius = 0.25;
                    t = (rad < dotRadius) ? -0.45 + luma * 0.2 : 0.45 - (1.0 - luma) * 0.2;
                }
                        break;
                    case 'exp_chevron':
                        {
                    let zig = Math.abs((nx + Math.abs(ny % 2.0 - 1.0)) % 1.0 - 0.5);
                    t = (zig < 0.15) ? -0.4 : 0.4;
                }
                        break;
                    case 'exp_hex_lattice':
                        {
                    let hx = nx * 1.5;
                    let hy = ny * 0.866;
                    let tx = Math.floor(hx);
                    let ty = Math.floor(hy);
                    let fx = hx - tx;
                    let fy = hy - ty;
                    let border = 0;
                    if ((tx + ty) % 2 === 0) {
                        border = Math.abs(fx - fy);
                    } else {
                        border = Math.abs(fx + fy - 1.0);
                    }
                    t = (border < 0.08) ? -0.4 : 0.4;
                }
                        break;
                    case 'exp_celtic_knot':
                        {
                    let k1 = Math.sin(nx * 1.5) * Math.cos(ny * 1.5);
                    let k2 = Math.sin(ny * 1.5) * Math.cos(nx * 1.5);
                    t = Math.abs(k1 - k2) - 0.4;
                }
                        break;
                    case 'exp_noise_comb':
                        {
                    let nVal = Math.sin(nx * 12.9898 + ny * 78.233) * 43758.5453;
                    let noise = nVal - Math.floor(nVal);
                    let comb = Math.sin(nx * 10.0) * Math.cos(ny * 10.0);
                    t = (noise * comb) * 0.5;
                }
                        break;
                    case 'exp_stripes_radial':
                        {
                    let rays = Math.sin(ang * 12.0);
                    t = rays * 0.4 + 0.1 * (luma - 0.5);
                }
                        break;
                    case 'exp_stripes_spiral':
                        {
                    let spiral = Math.sin(dist * 3.0 + ang * 4.0);
                    t = spiral * 0.4 + 0.1 * (luma - 0.5);
                }
                        break;
                    case 'exp_halftone_sine':
                        {
                    t = (Math.sin(nx * Math.PI) * Math.cos(ny * Math.PI)) * 0.5;
                }
                        break;
                    case 'exp_fractal_noise':
                        {
                    let n1 = Math.sin(nx * 1.0) * Math.cos(ny * 1.0);
                    let n2 = Math.sin(nx * 2.0) * Math.cos(ny * 2.0);
                    let n3 = Math.sin(nx * 4.0) * Math.cos(ny * 4.0);
                    t = (n1 * 0.5 + n2 * 0.3 + n3 * 0.2) * 0.5;
                }
                        break;
                    case 'exp_tri_grid':
                        {
                    let g1 = Math.sin(nx * 2.0);
                    let g2 = Math.sin((nx * 0.5 + ny * 0.866) * 2.0);
                    let g3 = Math.sin((nx * 0.5 - ny * 0.866) * 2.0);
                    t = Math.max(g1, Math.max(g2, g3)) * 0.4;
                }
                        break;
                    case 'exp_greek_key':
                        {
                    let tx = Math.floor(nx); let ty = Math.floor(ny);
                    let fx = nx - tx; let fy = ny - ty;
                    let key = (fx > 0.2 && fx < 0.8 && fy > 0.2 && fy < 0.8) && !(fx > 0.4 && fx < 0.6 && fy > 0.4 && fy < 0.6);
                    t = key ? -0.45 : 0.45;
                }
                        break;
                    case 'exp_houndstooth':
                        {
                    let hx = Math.floor(nx * 1.5) % 4;
                    let hy = Math.floor(ny * 1.5) % 4;
                    let inHound = ((hx < 2 && hy < 2) || (hx >= 2 && hy >= 2 && (hx - 2 === hy - 2 || hx === 3 || hy === 3)));
                    t = inHound ? -0.4 : 0.4;
                }
                        break;
                    case 'exp_checkered_shift':
                        {
                    let shift = Math.sin(ny * 0.5) * 1.5;
                    let check = (Math.floor(nx + shift) + Math.floor(ny)) % 2 === 0;
                    t = check ? -0.4 : 0.4;
                }
                        break;
                    case 'exp_ascii_hash':
                        {
                    let fx = nx % 1.0; let fy = ny % 1.0;
                    let isHash = (Math.abs(fx - 0.3) < 0.08 || Math.abs(fx - 0.7) < 0.08 || Math.abs(fy - 0.3) < 0.08 || Math.abs(fy - 0.7) < 0.08);
                    t = isHash ? -0.4 : 0.4;
                }
                        break;
                    case 'exp_ascii_at':
                        {
                    let fx = nx % 1.0 - 0.5; let fy = ny % 1.0 - 0.5;
                    let rad = Math.sqrt(fx*fx + fy*fy);
                    let isAt = (rad > 0.3 && rad < 0.45) || (rad < 0.15) || (Math.abs(fx) < 0.05 && fy > 0.0);
                    t = isAt ? -0.45 : 0.45;
                }
                        break;
                    case 'exp_crescent_moon':
                        {
                    let fx = nx % 1.0 - 0.5; let fy = ny % 1.0 - 0.5;
                    let r1 = Math.sqrt(fx*fx + fy*fy);
                    let r2 = Math.sqrt((fx - 0.15)*(fx - 0.15) + fy*fy);
                    t = (r1 < 0.35 && r2 > 0.3) ? -0.4 : 0.4;
                }
                        break;
                    case 'exp_diamond_ring':
                        {
                    let fx = nx % 1.0 - 0.5; let fy = ny % 1.0 - 0.5;
                    let diamond = Math.abs(fx) + Math.abs(fy);
                    let circle = Math.sqrt(fx*fx + fy*fy);
                    t = (diamond < 0.4 && circle > 0.2) ? -0.4 : 0.4;
                }
                        break;
                    case 'exp_honeycomb':
                        {
                    let hx = nx * 1.5; let hy = ny * 0.866;
                    let tx = Math.floor(hx); let ty = Math.floor(hy);
                    let fx = hx - tx; let fy = hy - ty;
                    let distHex = ((tx + ty) % 2 === 0) ? Math.abs(fx - fy) : Math.abs(fx + fy - 1.0);
                    t = (distHex < 0.05 || (distHex > 0.3 && distHex < 0.35)) ? -0.4 : 0.4;
                }
                        break;
                    case 'exp_dune':
                        {
                    let dVal = Math.sin(nx * 0.8 + Math.sin(ny * 0.5) * 3.0);
                    t = dVal * 0.4 + 0.1 * (luma - 0.5);
                }
                        break;
                    case 'exp_camouflage':
                        {
                    let c1 = Math.sin(nx * 0.5) * Math.sin(ny * 0.5);
                    let c2 = Math.sin(nx * 0.2 + 1.0) * Math.cos(ny * 0.3);
                    let mix = c1 + c2;
                    t = (mix > luma - 0.5) ? -0.4 : 0.4;
                }
                        break;
                    case 'exp_circuit_lines':
                        {
                    let cx2 = Math.floor(nx); let cy2 = Math.floor(ny);
                    let fx = nx - cx2; let fy = ny - cy2;
                    let seed = cx2 * 19.31 + cy2 * 7.19;
                    let rand = Math.abs(Math.sin(seed * 43758.5453) % 1);
                    let inLine = false;
                    if (rand < 0.3) inLine = (Math.abs(fx - 0.5) < 0.08 || Math.abs(fy - 0.5) < 0.08);
                    else if (rand < 0.6) inLine = (Math.abs(fx - fy) < 0.08);
                    else inLine = (Math.sqrt((fx-0.5)*(fx-0.5) + (fy-0.5)*(fy-0.5)) < 0.15);
                    t = inLine ? -0.45 : 0.45;
                }
                        break;
                    case 'exp_crosshairs': {
                    let fx = nx % 2.0 - 1.0; let fy = ny % 2.0 - 1.0;
                    let rad = Math.sqrt(fx*fx + fy*fy);
                    let isCross = (Math.abs(fx) < 0.02 && Math.abs(fy) < 0.8) || (Math.abs(fy) < 0.02 && Math.abs(fx) < 0.8) || (Math.abs(rad - 0.6) < 0.03);
                    t = isCross ? -0.45 : 0.45;
                }

                // --- FRACTALES Y CAOS --- break;
                    case 'frac_mandelbrot':
                        {
                    let zx = 0, zy = 0;
                    let cr = Math.sin(cx) * 1.3, ci = Math.sin(cy) * 1.3;
                    let i = 0;
                    for (; i < 10; i++) {
                        let xt = zx*zx - zy*zy + cr;
                        zy = 2*zx*zy + ci;
                        zx = xt;
                        if (zx*zx + zy*zy > 4.0) break;
                    }
                    t = (i / 10) - 0.5;
                }
                        break;
                    case 'frac_mandelcubic':
                        {
                    let zx = 0, zy = 0;
                    let cr = Math.sin(cx * 0.9) * 1.4, ci = Math.cos(cy * 0.9) * 1.4;
                    let i = 0;
                    for (; i < 10; i++) {
                        let xt = zx*zx*zx - 3*zx*zy*zy + cr;
                        zy = 3*zx*zx*zy - zy*zy*zy + ci;
                        zx = xt;
                        if (zx*zx + zy*zy > 4.0) break;
                    }
                    t = (i / 10) - 0.5;
                }
                        break;
                    case 'frac_mandel5':
                        {
                    let zx = 0, zy = 0;
                    let cr = Math.cos(cx * 1.1) * 1.2, ci = Math.sin(cy * 1.1) * 1.2;
                    let i = 0;
                    for (; i < 8; i++) {
                        let x2 = zx*zx; let y2 = zy*zy;
                        if (x2 + y2 > 4.0) break;
                        let xt = zx*x2*x2 - 10*zx*x2*y2 + 5*zx*y2*y2 + cr;
                        zy = 5*x2*x2*zy - 10*x2*zy*y2 + zy*y2*y2 + ci;
                        zx = xt;
                    }
                    t = (i / 8) - 0.5;
                }
                        break;
                    case 'frac_julia':
                        {
                    let zx = Math.sin(cx) * 1.5, zy = Math.cos(cy) * 1.5;
                    let cr = -0.7, ci = 0.27015;
                    let i = 0;
                    for (; i < 10; i++) {
                        let xt = zx*zx - zy*zy + cr;
                        zy = 2*zx*zy + ci;
                        zx = xt;
                        if (zx*zx + zy*zy > 4.0) break;
                    }
                    t = (i / 10) - 0.5;
                }
                        break;
                    case 'frac_juliasin':
                        {
                    let zx = Math.sin(cx * 0.8) * 2.0, zy = Math.sin(cy * 0.8) * 2.0;
                    let cr = 1.0, ci = 0.3;
                    let i = 0;
                    for (; i < 8; i++) {
                        let ey = Math.exp(zy);
                        let e_y = 1.0 / ey;
                        let cosh = (ey + e_y) * 0.5;
                        let sinh = (ey - e_y) * 0.5;
                        let sx = Math.sin(zx) * cosh;
                        let sy = Math.cos(zx) * sinh;
                        let xt = sx * cr - sy * ci;
                        zy = sx * ci + sy * cr;
                        zx = xt;
                        if (zx*zx + zy*zy > 100.0) break;
                    }
                    t = (i / 8) - 0.5;
                }
                        break;
                    case 'frac_juliacos':
                        {
                    let zx = Math.cos(cx * 0.7) * 1.8, zy = Math.cos(cy * 0.7) * 1.8;
                    let cr = 1.0, ci = 0.2;
                    let i = 0;
                    for (; i < 8; i++) {
                        let ey = Math.exp(zy);
                        let e_y = 1.0 / ey;
                        let cosh = (ey + e_y) * 0.5;
                        let sinh = (ey - e_y) * 0.5;
                        let sx = Math.cos(zx) * cosh;
                        let sy = -Math.sin(zx) * sinh;
                        let xt = sx * cr - sy * ci;
                        zy = sx * ci + sy * cr;
                        zx = xt;
                        if (zx*zx + zy*zy > 100.0) break;
                    }
                    t = (i / 8) - 0.5;
                }
                        break;
                    case 'frac_juliaburningship':
                        {
                    let zx = Math.sin(cx) * 1.3, zy = Math.cos(cy) * 1.3;
                    let cr = -0.45, ci = 0.56;
                    let i = 0;
                    for (; i < 10; i++) {
                        let ax = Math.abs(zx);
                        let ay = Math.abs(zy);
                        let xt = ax*ax - ay*ay + cr;
                        zy = 2*ax*ay + ci;
                        zx = xt;
                        if (zx*zx + zy*zy > 4.0) break;
                    }
                    t = (i / 10) - 0.5;
                }
                        break;
                    case 'frac_burningship':
                        {
                    let zx = 0, zy = 0;
                    let cr = Math.sin(cx) * 1.5 - 0.45, ci = Math.cos(cy) * 1.5 + 0.50;
                    let i = 0;
                    for (; i < 10; i++) {
                        let ax = Math.abs(zx);
                        let ay = Math.abs(zy);
                        let xt = ax*ax - ay*ay + cr;
                        zy = -2*ax*ay + ci;
                        zx = xt;
                        if (zx*zx + zy*zy > 4.0) break;
                    }
                    t = (i / 10) - 0.5;
                }
                        break;
                    case 'frac_tricorn':
                        {
                    let zx = 0, zy = 0;
                    let cr = Math.sin(cx * 1.2) * 1.3, ci = Math.cos(cy * 1.2) * 1.3;
                    let i = 0;
                    for (; i < 10; i++) {
                        let xt = zx*zx - zy*zy + cr;
                        zy = -2*zx*zy + ci;
                        zx = xt;
                        if (zx*zx + zy*zy > 4.0) break;
                    }
                    t = (i / 10) - 0.5;
                }
                        break;
                    case 'frac_buffalo':
                        {
                    let zx = 0, zy = 0;
                    let cr = Math.abs(Math.sin(cx)) * 1.4, ci = Math.abs(Math.cos(cy)) * 1.4;
                    let i = 0;
                    for (; i < 8; i++) {
                        let ax = Math.abs(zx);
                        let ay = Math.abs(zy);
                        let xt = Math.abs(ax*ax - ay*ay - ax) + cr;
                        zy = Math.abs(2*ax*ay - ay) + ci;
                        zx = xt;
                        if (zx*zx + zy*zy > 4.0) break;
                    }
                    t = (i / 8) - 0.5;
                }
                        break;
                    case 'frac_celtic':
                        {
                    let zx = 0, zy = 0;
                    let cr = Math.sin(cx) * 1.4, ci = Math.sin(cy) * 1.4;
                    let i = 0;
                    for (; i < 10; i++) {
                        let xt = Math.abs(zx*zx - zy*zy) + cr;
                        zy = 2*zx*zy + ci;
                        zx = xt;
                        if (zx*zx + zy*zy > 4.0) break;
                    }
                    t = (i / 10) - 0.5;
                }
                        break;
                    case 'frac_feather':
                        {
                    let zx = Math.sin(cx * 1.3) * 1.8, zy = Math.cos(cy * 1.3) * 1.8;
                    let cr = -0.8, ci = 0.2;
                    let i = 0;
                    for (; i < 8; i++) {
                        let x2 = zx*zx; let y2 = zy*zy;
                        let d = (1 + x2 - y2)*(1 + x2 - y2) + 4*x2*y2;
                        if (d < 1e-6) d = 1e-6;
                        let numR = zx*x2 - 3*zx*y2;
                        let numI = 3*x2*zy - zy*y2;
                        let denR = 1 + x2 - y2;
                        let denI = 2*zx*zy;
                        let xt = (numR*denR + numI*denI)/d + cr;
                        zy = (numI*denR - numR*denI)/d + ci;
                        zx = xt;
                        if (zx*zx + zy*zy > 10.0) break;
                    }
                    t = (i / 8) - 0.5;
                }
                        break;
                    case 'frac_henon':
                        {
                    let xk = Math.sin(cx) * 1.2, yk = Math.cos(cy) * 1.2;
                    for (let i = 0; i < 8; i++) {
                        let nextX = 1.0 - 1.4*xk*xk + yk;
                        yk = 0.3*xk;
                        xk = nextX;
                    }
                    t = (Math.sin(xk * 5) * Math.cos(yk * 5)) * 0.5;
                }
                        break;
                    case 'frac_clifford':
                        {
                    let xk = Math.sin(cx) * 2.0, yk = Math.cos(cy) * 2.0;
                    for (let i = 0; i < 8; i++) {
                        let nextX = Math.sin(-1.4*yk) + Math.cos(-1.4*xk);
                        yk = Math.sin(1.6*xk) + 0.7*Math.cos(1.6*yk);
                        xk = nextX;
                    }
                    t = (Math.sin(xk * 4) * Math.cos(yk * 4)) * 0.5;
                }
                        break;
                    case 'frac_dejong':
                        {
                    let xk = Math.sin(cx * 1.5) * 2.0, yk = Math.cos(cy * 1.5) * 2.0;
                    for (let i = 0; i < 8; i++) {
                        let nextX = Math.sin(1.4*yk) - Math.cos(-2.3*xk);
                        yk = Math.sin(2.4*xk) - Math.cos(-2.1*yk);
                        xk = nextX;
                    }
                    t = (Math.sin(xk * 3) + Math.cos(yk * 3)) * 0.25;
                }
                        break;
                    case 'frac_ikeda':
                        {
                    let xk = Math.sin(cx) * 1.5, yk = Math.cos(cy) * 1.5;
                    for (let i = 0; i < 6; i++) {
                        let d = 1.0 + xk*xk + yk*yk;
                        let tn = 0.4 - 6.0 / d;
                        let cos = Math.cos(tn);
                        let sin = Math.sin(tn);
                        let nextX = 1.0 + 0.9 * (xk * cos - yk * sin);
                        yk = 0.9 * (xk * sin + yk * cos);
                        xk = nextX;
                    }
                    t = (Math.sin(xk * 2.5) * Math.cos(yk * 2.5)) * 0.5;
                }
                        break;
                    case 'frac_lorenz':
                        {
                    let xk = Math.sin(cx) * 10.0, yk = Math.cos(cy) * 10.0, zk = 10.0 + Math.sin(cx + cy) * 5.0;
                    let dt = 0.02;
                    for (let i = 0; i < 8; i++) {
                        let dx = 10.0 * (yk - xk);
                        let dy = xk * (28.0 - zk) - yk;
                        let dz = xk * yk - 2.666 * zk;
                        xk += dx * dt;
                        yk += dy * dt;
                        zk += dz * dt;
                    }
                    t = (Math.sin(xk * 0.4) * Math.cos(yk * 0.4)) * 0.5;
                }
                        break;
                    case 'frac_duffing':
                        {
                    let xk = Math.sin(cx) * 2.0, yk = Math.cos(cy) * 2.0;
                    for (let i = 0; i < 8; i++) {
                        let nextX = yk;
                        yk = -0.2 * xk + 2.75 * yk - yk*yk*yk;
                        xk = nextX;
                    }
                    t = (Math.sin(xk * 2.5) * Math.cos(yk * 2.5)) * 0.5;
                }
                        break;
                    case 'frac_tinkerbell':
                        {
                    let xk = Math.sin(cx) * 1.0, yk = Math.cos(cy) * 1.0;
                    for (let i = 0; i < 8; i++) {
                        let nextX = xk*xk - yk*yk + 0.9*xk - 0.6013*yk;
                        yk = 2*xk*yk + 2.0*xk + 0.5*yk;
                        xk = nextX;
                    }
                    t = (Math.sin(xk * 3) * Math.cos(yk * 3)) * 0.5;
                }
                        break;
                    case 'frac_chirikov':
                        {
                    let theta = (cx % (2 * Math.PI)), p = (cy % (2 * Math.PI));
                    if (theta < 0) theta += 2 * Math.PI;
                    if (p < 0) p += 2 * Math.PI;
                    for (let i = 0; i < 8; i++) {
                        p = (p + 0.9716 * Math.sin(theta)) % (2 * Math.PI);
                        theta = (theta + p) % (2 * Math.PI);
                    }
                    t = Math.max(-0.5, Math.min(0.5, (theta / Math.PI - 1.0) * 0.5));
                }
                        break;
                    case 'frac_gumowskimira':
                        {
                    let xk = Math.sin(cx) * 1.5, yk = Math.cos(cy) * 1.5;
                    for (let i = 0; i < 6; i++) {
                        let den = 1.0 + xk*xk;
                        let fx = 0.3 * xk + (1.4 * xk * xk) / den;
                        let nextX = 0.99 * yk + fx;
                        let den2 = 1.0 + nextX*nextX;
                        let fx2 = 0.3 * nextX + (1.4 * nextX * nextX) / den2;
                        yk = -xk + fx2;
                        xk = nextX;
                    }
                    t = (Math.sin(xk * 2.8) * Math.cos(yk * 2.8)) * 0.5;
                }
                        break;
                    case 'frac_martin':
                        {
                    let xk = Math.sin(cx) * 3.0, yk = Math.cos(cy) * 3.0;
                    for (let i = 0; i < 8; i++) {
                        let nextX = yk - Math.sin(xk);
                        yk = 2.0 - xk;
                        xk = nextX;
                    }
                    t = (Math.sin(xk * 1.5) * Math.cos(yk * 1.5)) * 0.5;
                }
                        break;
                    case 'frac_symmetricicon':
                        {
                    let xk = Math.sin(cx) * 2.5, yk = Math.cos(cy) * 2.5;
                    for (let i = 0; i < 8; i++) {
                        let r2 = xk*xk + yk*yk;
                        let factor = -2.5 + r2;
                        let nextX = factor * xk + 0.2 * (xk*xk - yk*yk);
                        yk = factor * yk + 0.4 * xk * yk;
                        xk = nextX;
                        if(r2 > 10.0) break;
                    }
                    t = (Math.sin(xk * 1.8) * Math.cos(yk * 1.8)) * 0.5;
                }
                        break;
                    case 'frac_svensson':
                        {
                    let xk = Math.sin(cx) * 1.5, yk = Math.cos(cy) * 1.5;
                    for (let i = 0; i < 8; i++) {
                        let nextX = -1.2 * Math.sin(1.4 * xk) - Math.sin(1.56 * yk);
                        yk = 1.4 * Math.cos(1.4 * xk) + Math.cos(1.56 * yk);
                        xk = nextX;
                    }
                    t = (Math.sin(xk * 2.5) * Math.cos(yk * 2.5)) * 0.5;
                }
                        break;
                    case 'frac_kingsdream':
                        {
                    let xk = Math.sin(cx * 1.2) * 1.5, yk = Math.cos(cy * 1.2) * 1.5;
                    for (let i = 0; i < 8; i++) {
                        let nextX = Math.sin(-2.0 * yk) + 1.2 * Math.sin(-2.0 * xk);
                        yk = Math.sin(-2.0 * xk) + 1.2 * Math.sin(-2.0 * yk);
                        xk = nextX;
                    }
                    t = (Math.sin(xk * 2.2) * Math.cos(yk * 2.2)) * 0.5;
                }
                        break;
                    case 'frac_hopalong':
                        {
                    let xk = Math.sin(cx) * 4.0, yk = Math.cos(cy) * 4.0;
                    for (let i = 0; i < 8; i++) {
                        let nextX = yk - Math.sign(xk) * Math.sqrt(Math.abs(xk));
                        yk = 2.0 - xk;
                        xk = nextX;
                    }
                    t = (Math.sin(xk * 1.2) * Math.cos(yk * 1.2)) * 0.5;
                }
                        break;
                    case 'frac_gingerbreadman':
                        {
                    let xk = Math.sin(cx) * 3.0, yk = Math.cos(cy) * 3.0;
                    for (let i = 0; i < 8; i++) {
                        let nextX = 1.0 - yk + Math.abs(xk);
                        yk = xk;
                        xk = nextX;
                    }
                    t = (Math.sin(xk * 0.8) * Math.cos(yk * 0.8)) * 0.5;
                }
                        break;
                    case 'frac_rossler':
                        {
                    let xk = Math.sin(cx) * 5.0, yk = Math.cos(cy) * 5.0, zk = 0.2;
                    let dt = 0.05;
                    for (let i = 0; i < 8; i++) {
                        let dx = -yk - zk;
                        let dy = xk + 0.2 * yk;
                        let dz = 0.2 + zk * (xk - 5.7);
                        xk += dx * dt;
                        yk += dy * dt;
                        zk += dz * dt;
                    }
                    t = (Math.sin(xk * 1.5) * Math.cos(yk * 1.5)) * 0.5;
                }
                        break;
                    case 'frac_newton3':
                        {
                    let zx = Math.sin(cx * 1.2) * 2.0, zy = Math.cos(cy * 1.2) * 2.0;
                    for (let i = 0; i < 8; i++) {
                        let x2 = zx*zx; let y2 = zy*zy;
                        let d = 3 * (x2 + y2) * (x2 + y2);
                        if (d < 1e-6) d = 1e-6;
                        let numR = 2 * (zx*x2 - 3*zx*y2) + 1;
                        let numI = 2 * (3*x2*zy - zy*y2);
                        let denR = 3 * (x2 - y2);
                        let denI = 6 * zx * zy;
                        let xt = (numR*denR + numI*denI)/d;
                        zy = (numI*denR - numR*denI)/d;
                        zx = xt;
                    }
                    t = (Math.atan2(zy, zx) / Math.PI) * 0.5;
                }
                        break;
                    case 'frac_newton4':
                        {
                    let zx = Math.sin(cx * 1.1) * 1.8, zy = Math.cos(cy * 1.1) * 1.8;
                    for (let i = 0; i < 8; i++) {
                        let x2 = zx*zx; let y2 = zy*zy;
                        let r2 = x2 + y2;
                        let d = 4 * r2 * r2 * r2;
                        if (d < 1e-6) d = 1e-6;
                        let z4r = x2*x2 - 6*x2*y2 + y2*y2;
                        let z4i = 4*zx*zy*(x2 - y2);
                        let numR = 3 * z4r + 1;
                        let numI = 3 * z4i;
                        let denR = 4 * (zx*x2 - 3*zx*y2);
                        let denI = 4 * (3*x2*zy - zy*y2);
                        let xt = (numR*denR + numI*denI)/d;
                        zy = (numI*denR - numR*denI)/d;
                        zx = xt;
                    }
                    t = (Math.atan2(zy, zx) / Math.PI) * 0.5;
                }
                        break;
                    case 'frac_newtonsin':
                        {
                    let zx = Math.sin(cx * 0.9) * 2.5, zy = Math.cos(cy * 0.9) * 2.5;
                    for (let i = 0; i < 6; i++) {
                        let ey = Math.exp(zy);
                        let e_y = 1.0 / ey;
                        let cosh = (ey + e_y) * 0.5;
                        let sinh = (ey - e_y) * 0.5;
                        let szr = Math.sin(zx) * cosh - 1;
                        let szi = Math.cos(zx) * sinh;
                        let czr = Math.cos(zx) * cosh;
                        let czi = -Math.sin(zx) * sinh;
                        let d = czr*czr + czi*czi;
                        if (d < 1e-6) d = 1e-6;
                        let qr = (szr*czr + szi*czi)/d;
                        let qi = (szi*czr - szr*czi)/d;
                        zx = zx - qr;
                        zy = zy - qi;
                    }
                    t = (Math.sin(zx) * Math.cos(zy)) * 0.5;
                }
                        break;
                    case 'frac_novamandelbrot':
                        {
                    let zx = 1.0, zy = 0.0;
                    let cr = Math.sin(cx) * 1.5, ci = Math.cos(cy) * 1.5;
                    let i = 0;
                    for (; i < 8; i++) {
                        let x2 = zx*zx; let y2 = zy*zy;
                        let d = 3 * (x2 + y2) * (x2 + y2);
                        if (d < 1e-6) d = 1e-6;
                        let numR = zx*x2 - 3*zx*y2 - 1;
                        let numI = 3*x2*zy - zy*y2;
                        let denR = 3 * (x2 - y2);
                        let denI = 6 * zx * zy;
                        let xt = zx - (numR*denR + numI*denI)/d + cr;
                        zy = zy - (numI*denR - numR*denI)/d + ci;
                        zx = xt;
                        if (zx*zx + zy*zy > 10.0) break;
                    }
                    t = (i / 8) - 0.5;
                }
                        break;
                    case 'frac_novajulia':
                        {
                    let zx = Math.sin(cx) * 1.5, zy = Math.cos(cy) * 1.5;
                    let cr = -0.2, ci = 0.65;
                    let i = 0;
                    for (; i < 8; i++) {
                        let x2 = zx*zx; let y2 = zy*zy;
                        let d = 3 * (x2 + y2) * (x2 + y2);
                        if (d < 1e-6) d = 1e-6;
                        let numR = zx*x2 - 3*zx*y2 - 1;
                        let numI = 3*x2*zy - zy*y2;
                        let denR = 3 * (x2 - y2);
                        let denI = 6 * zx * zy;
                        let xt = zx - (numR*denR + numI*denI)/d + cr;
                        zy = zy - (numI*denR - numR*denI)/d + ci;
                        zx = xt;
                        if (zx*zx + zy*zy > 10.0) break;
                    }
                    t = (i / 8) - 0.5;
                }
                        break;
                    case 'frac_secante':
                        {
                    let zx = Math.sin(cx) * 1.5, zy = Math.cos(cy) * 1.5;
                    let px = zx + 0.05, py = zy + 0.05;
                    for (let i = 0; i < 6; i++) {
                        let fzx = zx*zx*zx - 3*zx*zy*zy - 1;
                        let fzy = 3*zx*zx*zy - zy*zy*zy;
                        let fpx = px*px*px - 3*px*py*py - 1;
                        let fpy = 3*px*px*py - py*py*py;
                        let diff_fx = fzx - fpx;
                        let diff_fy = fzy - fpy;
                        let d = diff_fx*diff_fx + diff_fy*diff_fy;
                        if (d < 1e-6) d = 1e-6;
                        let dx = zx - px;
                        let dy = zy - py;
                        let numR = fzx*dx - fzy*dy;
                        let numI = fzx*dy + fzy*dx;
                        let nextX = zx - (numR*diff_fx + numI*diff_fy)/d;
                        let nextY = zy - (numI*diff_fx - numR*diff_fy)/d;
                        px = zx; py = zy;
                        zx = nextX; zy = nextY;
                    }
                    t = (Math.atan2(zy, zx) / Math.PI) * 0.5;
                }
                        break;
                    case 'frac_lyapunov':
                        {
                    let a = 2.0 + Math.abs(Math.sin(cx) * 2.0);
                    let b = 2.0 + Math.abs(Math.cos(cy) * 2.0);
                    let x0 = 0.5;
                    let sum = 0;
                    for (let i = 0; i < 8; i++) {
                        let r = (i % 2 === 0) ? a : b;
                        let deriv = Math.abs(r * (1.0 - 2.0 * x0));
                        sum += Math.log(deriv + 1e-6);
                        x0 = r * x0 * (1.0 - x0);
                    }
                    t = Math.max(-0.5, Math.min(0.5, sum / 16.0));
                }
                        break;
                    case 'frac_popcorn':
                        {
                    let zx = Math.sin(cx) * 3.0, zy = Math.cos(cy) * 3.0;
                    for (let i = 0; i < 6; i++) {
                        let nextX = zx - 0.05 * Math.sin(zy + Math.tan(3 * zy));
                        zy = zy - 0.05 * Math.sin(zx + Math.tan(3 * zx));
                        zx = nextX;
                    }
                    t = (Math.sin(zx * 5) * Math.cos(zy * 5)) * 0.5;
                }
                        break;
                    case 'frac_fbm':
                        {
                    let value = 0;
                    let amplitude = 0.5;
                    let frequency = 1.0;
                    for (let i = 0; i < 4; i++) {
                        let val = Math.sin(nx * frequency * 1.5) * Math.cos(ny * frequency * 1.5);
                        value += amplitude * val;
                        frequency *= 2.0;
                        amplitude *= 0.5;
                    }
                    t = value;
                }
                        break;
                    case 'frac_cantordust':
                        {
                    let valX = Math.abs(Math.sin(cx * 0.5)) % 1.0;
                    let valY = Math.abs(Math.cos(cy * 0.5)) % 1.0;
                    let inCantor = true;
                    for (let i = 0; i < 5; i++) {
                        if ((valX > 0.3333 && valX < 0.6666) || (valY > 0.3333 && valY < 0.6666)) {
                            inCantor = false;
                            break;
                        }
                        valX = (valX * 3) % 1.0;
                        valY = (valY * 3) % 1.0;
                    }
                    t = inCantor ? 0.25 : -0.25;
                }
                        break;
                    case 'frac_sierpinskicarpet':
                        {
                    let valX = Math.abs(Math.sin(nx * 0.2)) % 1.0;
                    let valY = Math.abs(Math.cos(ny * 0.2)) % 1.0;
                    let inCarpet = true;
                    for (let i = 0; i < 5; i++) {
                        let cx2 = Math.floor(valX * 3);
                        let cy2 = Math.floor(valY * 3);
                        if (cx2 === 1 && cy2 === 1) {
                            inCarpet = false;
                            break;
                        }
                        valX = (valX * 3) % 1.0;
                        valY = (valY * 3) % 1.0;
                    }
                    t = inCarpet ? 0.25 : -0.25;
                }
                        break;
                    case 'frac_sierpinskingasket':
                        {
                    let xi = Math.floor(Math.abs(Math.sin(nx * 0.5) * 16));
                    let yi = Math.floor(Math.abs(Math.cos(ny * 0.5) * 16));
                    t = ((xi & yi) === 0) ? 0.25 : -0.25;
                }
                        break;
                    case 'frac_mandelorbittrap':
                        {
                    let zx = 0, zy = 0;
                    let cr = Math.sin(cx) * 1.3, ci = Math.cos(cy) * 1.3;
                    let minDist = 1e9;
                    for (let i = 0; i < 10; i++) {
                        let xt = zx*zx - zy*zy + cr;
                        zy = 2*zx*zy + ci;
                        zx = xt;
                        let d = Math.abs(zx - zy);
                        if (d < minDist) minDist = d;
                        if (zx*zx + zy*zy > 4.0) break;
                    }
                    t = Math.min(1.0, minDist) - 0.5;
                }
                        break;
                    case 'frac_juliaorbittrap':
                        {
                    let zx = Math.sin(cx) * 1.4, zy = Math.cos(cy) * 1.4;
                    let cr = -0.8, ci = 0.156;
                    let minDist = 1e9;
                    for (let i = 0; i < 10; i++) {
                        let xt = zx*zx - zy*zy + cr;
                        zy = 2*zx*zy + ci;
                        zx = xt;
                        let d = Math.sqrt(zx*zx + zy*zy);
                        if (d < minDist) minDist = d;
                        if (zx*zx + zy*zy > 4.0) break;
                    }
                    t = Math.min(1.0, minDist) - 0.5;
                }
                        break;
                    case 'frac_cliffordorbittrap':
                        {
                    let xk = Math.sin(cx) * 2.0, yk = Math.cos(cy) * 2.0;
                    let minDist = 1e9;
                    for (let i = 0; i < 8; i++) {
                        let nextX = Math.sin(-1.4*yk) + Math.cos(-1.4*xk);
                        yk = Math.sin(1.6*xk) + 0.7*Math.cos(1.6*yk);
                        xk = nextX;
                        let d = Math.abs(xk + yk);
                        if (d < minDist) minDist = d;
                    }
                    t = Math.min(1.0, minDist) - 0.5;
                }
                        break;
                    case 'frac_henonorbittrap':
                        {
                    let xk = Math.sin(cx) * 1.2, yk = Math.cos(cy) * 1.2;
                    let minDist = 1e9;
                    for (let i = 0; i < 8; i++) {
                        let nextX = 1.0 - 1.4*xk*xk + yk;
                        yk = 0.3*xk;
                        xk = nextX;
                        let d = Math.sqrt(xk*xk + yk*yk);
                        if (d < minDist) minDist = d;
                    }
                    t = Math.min(1.0, minDist) - 0.5;
                }
                        break;
                    case 'frac_logistic':
                        {
                    let r = 3.5 + Math.abs(Math.sin(cx) * 0.49);
                    let x0 = Math.abs(Math.cos(cy)) % 1.0;
                    for (let i = 0; i < 10; i++) {
                        x0 = r * x0 * (1.0 - x0);
                    }
                    t = x0 - 0.5;
                }
                        break;
                    case 'frac_sinemap':
                        {
                    let r = 0.7 + Math.abs(Math.sin(cx) * 0.29);
                    let x0 = Math.abs(Math.cos(cy)) % 1.0;
                    for (let i = 0; i < 10; i++) {
                        x0 = r * Math.sin(Math.PI * x0);
                    }
                    t = x0 - 0.5;
                }
                        break;
                    case 'frac_mandelbox':
                        {
                    let zx = Math.sin(cx) * 2.0, zy = Math.cos(cy) * 2.0;
                    let cr = Math.sin(cx * 1.5) * 0.8, ci = Math.cos(cy * 1.5) * 0.8;
                    let i = 0;
                    for (; i < 8; i++) {
                        if (zx > 1.0) zx = 2.0 - zx; else if (zx < -1.0) zx = -2.0 - zx;
                        if (zy > 1.0) zy = 2.0 - zy; else if (zy < -1.0) zy = -2.0 - zy;
                        let r2 = zx*zx + zy*zy;
                        if (r2 < 0.25) { zx *= 4.0; zy *= 4.0; }
                        else if (r2 < 1.0) { let f = 1.0/r2; zx *= f; zy *= f; }
                        zx = 2.0 * zx + cr;
                        zy = 2.0 * zy + ci;
                        if (zx*zx + zy*zy > 100.0) break;
                    }
                    t = (i / 8) - 0.5;
                }
                        break;
                    case 'frac_mandelbulb':
                        {
                    let zx = Math.sin(cx) * 1.5, zy = Math.cos(cy) * 1.5;
                    let cr = Math.sin(cx) * 0.5, ci = Math.cos(cy) * 0.5;
                    let i = 0;
                    for (; i < 8; i++) {
                        let r2 = zx*zx + zy*zy;
                        if (r2 > 100.0) break;
                        let r = Math.sqrt(r2);
                        let theta = Math.atan2(zy, zx);
                        let r8 = Math.pow(r, 8);
                        zx = r8 * Math.cos(theta * 8) + cr;
                        zy = r8 * Math.sin(theta * 8) + ci;
                    }
                    t = (i / 8) - 0.5;
                }
                        break;
                    case 'frac_tent':
                        {
                    let mu = 1.9 + Math.abs(Math.sin(cx) * 0.09);
                    let x0 = Math.abs(Math.cos(cy)) % 1.0;
                    for (let i = 0; i < 10; i++) {
                        x0 = mu * Math.min(x0, 1.0 - x0);
                    }
                    t = x0 - 0.5;
                }
                        break;
                    case 'frac_arnoldcat':
                        {
                    let xk = Math.abs(Math.sin(cx)) % 1.0;
                    let yk = Math.abs(Math.cos(cy)) % 1.0;
                    for (let i = 0; i < 6; i++) {
                        let nextX = (2 * xk + yk) % 1.0;
                        yk = (xk + yk) % 1.0;
                        xk = nextX;
                    }
                    t = (xk * yk) - 0.5;
                }
                        break;
                }

                if (tr === null) { tr = t; tg = t; tb = t; }

                let r = f32[fi] + tr * spread;
                let g = f32[fi+1] + tg * spread;
                let b = f32[fi+2] + tb * spread;

                let matchIndex = findClosestPaletteColorIndex(r, g, b, activePalette);
                let renderColor = renderPalette[matchIndex];
                
                data[idx] = renderColor[0]; data[idx+1] = renderColor[1]; data[idx+2] = renderColor[2]; data[idx+3] = 255;
            }
        }
    }
    else if (matricesOrdenadas[algo] || algo === 'bayerProgressive') {
        let matrix = matricesOrdenadas[algo] || matricesOrdenadas['bayer8'];
        let size = matrix.length;
        let spread = errStrength * 128; 

        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                let idx = (y * w + x) * 4;
                
                if (data[idx+3] < 128) {
                    data[idx] = 0; data[idx+1] = 0; data[idx+2] = 0; data[idx+3] = 0;
                    continue;
                }

                let fi = (y * w + x) * 3;
                let tScale = patScale;
                
                if (algo === 'bayerProgressive') {
                    let luma = (0.299*f32[fi] + 0.587*f32[fi+1] + 0.114*f32[fi+2]) / 255;
                    tScale = patScale * (1 + luma * 2.0); 
                }

                let tpx = Math.floor(x / tScale) % size;
                let tpy = Math.floor(y / tScale) % size;
                let t = matrix[tpy][tpx]; 
                
                let r = f32[fi] + t * spread;
                let g = f32[fi+1] + t * spread;
                let b = f32[fi+2] + t * spread;
                
                let matchIndex = findClosestPaletteColorIndex(r, g, b, activePalette);
                let renderColor = renderPalette[matchIndex];

                data[idx] = renderColor[0]; data[idx+1] = renderColor[1]; data[idx+2] = renderColor[2]; data[idx+3] = 255;
            }
        }
    }
    else if (matricesDifusion[algo]) {
        const matrixDef = matricesDifusion[algo];
        const path = getScanPath(w, h, scanPattern);
        const pathLen = w * h * 3;
        
        const rad = rotDeg * (Math.PI / 180);
        const cosR = Math.cos(rad);
        const sinR = Math.sin(rad);

        for (let p = 0; p < pathLen; p += 3) {
            let x = path[p]; let y = path[p+1]; let dir = path[p+2];
            let rtl = (dir === -1);
            let idx = (y * w + x) * 4; 
            
            if (data[idx+3] < 128) {
                data[idx] = 0; data[idx+1] = 0; data[idx+2] = 0; data[idx+3] = 0;
                continue;
            }

            let fi = (y * w + x) * 3;
            let oldR = f32[fi]; let oldG = f32[fi+1]; let oldB = f32[fi+2];
            
            let matchIndex = findClosestPaletteColorIndex(oldR, oldG, oldB, activePalette);
            let renderColor = renderPalette[matchIndex];
            let match = activePalette[matchIndex];

            data[idx] = renderColor[0]; data[idx+1] = renderColor[1]; data[idx+2] = renderColor[2]; data[idx+3] = 255;
            
            let errR = (oldR - match[0]) * errStrength;
            let errG = (oldG - match[1]) * errStrength;
            let errB = (oldB - match[2]) * errStrength;
            
            if (errR === 0 && errG === 0 && errB === 0) continue;

            for (let m of matrixDef.m) {
                let mx = rtl ? -m[0] : m[0];
                let my = m[1];
                
                let rotX = Math.round(mx * cosR - my * sinR);
                let rotY = Math.round(mx * sinR + my * cosR);

                let nx = x + rotX;
                let ny = y + rotY;
                
                if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
                    let nIdx = (ny * w + nx) * 4;
                    if (data[nIdx+3] < 128) continue;

                    let nFi = (ny * w + nx) * 3;
                    
                    let biasFactor = 1.0;
                    if (errBias !== 0) {
                        let isHoriz = Math.abs(rotX) > Math.abs(rotY);
                        if (isHoriz) biasFactor -= errBias; 
                        else biasFactor += errBias;         
                        biasFactor = Math.max(0.1, biasFactor);
                    }

                    let weight = (m[2] / matrixDef.d) * biasFactor;
                    f32[nFi] += errR * weight;
                    f32[nFi+1] += errG * weight;
                    f32[nFi+2] += errB * weight;
                }
            }
        }
    }
}

// =====================================================================
// GPU-ACCELERATED DITHERING INFRASTRUCTURE
// =====================================================================

// --- GPU STATE ---
const gpuState = {
    gl: null, canvas: null,
    programCache: {},
    sourceTex: null, fboTex: null, fbo: null,
    palUniform: null, palSize: 0,
    paletteLUT: null, paletteHash: '',
    lutMTex: null, lutRTex: null, lutGTex: null, lutBTex: null,
    lastLutM: null, lastLutR: null, lastLutG: null, lastLutB: null,
    initialized: false,
    hasPBO: false, pboPending: null, pbo: null, pboSize: 0
};

function arraysEqual256(a, b) {
    if (!a || !b) return false;
    for (let i = 0; i < 256; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

// --- 3D LUT BUILDER ---
function buildPaletteLUT(activePalette, renderPalette) {
    const LUT_SIZE = 64;
    const atlasW = LUT_SIZE * LUT_SIZE; // 4096
    const atlasH = LUT_SIZE;            // 64
    const data = new Uint8Array(atlasW * atlasH * 4);

    for (let b6 = 0; b6 < LUT_SIZE; b6++) {
        for (let g6 = 0; g6 < LUT_SIZE; g6++) {
            for (let r6 = 0; r6 < LUT_SIZE; r6++) {
                const r = r6 * 255 / (LUT_SIZE - 1);
                const g = g6 * 255 / (LUT_SIZE - 1);
                const b = b6 * 255 / (LUT_SIZE - 1);
                const idx = findClosestPaletteColorIndex(r, g, b, activePalette);
                const rc = renderPalette[idx];
                const px = r6 + g6 * LUT_SIZE;
                const py = b6;
                const offset = (py * atlasW + px) * 4;
                data[offset] = rc[0];
                data[offset + 1] = rc[1];
                data[offset + 2] = rc[2];
                data[offset + 3] = 255;
            }
        }
    }
    return data;
}

// --- 1. GPU CONTEXT MANAGER ---
function initGPUContext() {
    if (gpuState.initialized) return true;
    try {
        gpuState.canvas = document.createElement('canvas');
        gpuState.gl = gpuState.canvas.getContext('webgl', {
            premultipliedAlpha: false, preserveDrawingBuffer: true, antialias: false
        }) || gpuState.canvas.getContext('experimental-webgl', {
            premultipliedAlpha: false, preserveDrawingBuffer: true, antialias: false
        });
        if (!gpuState.gl) return false;
        const ext = gpuState.gl.getExtension('OES_texture_float');
        if (!ext) { gpuState.gl = null; return false; }
        gpuState.gl.getExtension('OES_texture_float_linear');
        const pboExt = gpuState.gl.getExtension('WEBGL_pixel_pack_buffer') || gpuState.gl.getExtension('EXT_pixel_pack_buffer');
        gpuState.hasPBO = !!pboExt;
        gpuState.initialized = true;
        return true;
    } catch (e) { return false; }
}

function isGPUSupported() { return initGPUContext(); }

// --- 2. SHADER COMPILATION ---
function compileShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

function createProgram(gl, vertSrc, fragSrc) {
    const vShader = compileShader(gl, gl.VERTEX_SHADER, vertSrc);
    const fShader = compileShader(gl, gl.FRAGMENT_SHADER, fragSrc);
    if (!vShader || !fShader) return null;
    const prog = gl.createProgram();
    gl.attachShader(prog, vShader);
    gl.attachShader(prog, fShader);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        console.error('Link error:', gl.getProgramInfoLog(prog));
        gl.deleteProgram(prog);
        return null;
    }
    return prog;
}

// --- 3. FULLSCREEN QUAD VERTEX SHADER ---
const VERTEX_SHADER_SRC = `
attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
    v_texCoord = vec2(a_position.x, 1.0 - a_position.y);
    gl_Position = vec4(a_position * 2.0 - 1.0, 0.0, 1.0);
}`;

// --- 4. TEXTURE UTILITIES ---
function createTexture(gl, w, h, data, format, type, filter) {
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter || gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter || gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, format, w, h, 0, format, type, data || null);
    return tex;
}

// --- 5. LUT TEXTURE (FOR CURVE LOOKUPS) ---
function createLUTTexture(gl, lut) {
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    const data = new Uint8Array(256 * 4);
    for (let i = 0; i < 256; i++) {
        data[i * 4] = lut[i];
        data[i * 4 + 1] = lut[i];
        data[i * 4 + 2] = lut[i];
        data[i * 4 + 3] = 255;
    }
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 256, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return tex;
}

// --- 6. SETUP FRAMEBUFFER & QUAD GEOMETRY ---
function setupFramebuffer(gl, w, h) {
    if (gpuState.fbo) gl.deleteFramebuffer(gpuState.fbo);
    if (gpuState.fboTex) gl.deleteTexture(gpuState.fboTex);

    gpuState.fboTex = createTexture(gl, w, h, null, gl.RGBA, gl.UNSIGNED_BYTE, gl.NEAREST);
    gpuState.fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, gpuState.fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, gpuState.fboTex, 0);
    const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return status === gl.FRAMEBUFFER_COMPLETE;
}

let quadBuffer = null;
function drawQuad(gl, program) {
    if (!quadBuffer) {
        const verts = new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]);
        quadBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);
    }
    const posLoc = gl.getAttribLocation(program, 'a_position');
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
}

// --- 7. ALGORITHM GLSL REGISTRY (populated externally) ---
// algorithmGLSL is defined in algorithmGLSL.js (loaded before this script)

function buildFragmentShader(algo, w, h, params) {
    const algoCode = algorithmGLSL[algo];
    if (!algoCode) return null;

    return `
precision highp float;
varying vec2 v_texCoord;
uniform sampler2D u_source;
uniform sampler2D u_lutM, u_lutR, u_lutG, u_lutB;
uniform sampler2D u_paletteLUT;
uniform float u_spread, u_pScale, u_w, u_h;
uniform float u_brightness, u_contrast, u_gamma, u_hlcomp, u_saturation;
uniform float u_posterize, u_clipping, u_bias;
uniform int u_chR, u_chG, u_chB;
const float LUT_W = 4096.0;
const float LUT_H = 64.0;
const float LUT_S = 64.0;

float hash12(vec2 p) {
    float h = dot(p, vec2(127.1, 311.7));
    return fract(sin(h) * 43758.5453);
}
float hash(vec2 p) {
    float h = dot(p, vec2(12.9898, 78.233));
    return fract(sin(h) * 43758.5453);
}

float thin(float v) { return pow(abs(sin(v)), 30.0); }

vec3 findClosest(vec3 color) {
    float ri = clamp(color.r * (LUT_S - 1.0) + 0.5, 0.0, LUT_S - 1.0);
    float gi = clamp(color.g * (LUT_S - 1.0) + 0.5, 0.0, LUT_S - 1.0);
    float bi = clamp(color.b * (LUT_S - 1.0) + 0.5, 0.0, LUT_S - 1.0);
    float px = floor(ri) + floor(gi) * LUT_S;
    float py = floor(bi);
    vec2 uvL = vec2((px + 0.5) / LUT_W, (py + 0.5) / LUT_H);
    return texture2D(u_paletteLUT, uvL).rgb * 255.0;
}

void main() {
    vec2 uv = v_texCoord;
    float x = uv.x * u_w;
    float y = uv.y * u_h;
    vec4 srcTex = texture2D(u_source, uv);
    vec3 src = srcTex.rgb;
    float alpha = srcTex.a;

    if (alpha < 0.5) { gl_FragColor = vec4(0.0); return; }

    float r = src.r * 255.0;
    float g = src.g * 255.0;
    float b = src.b * 255.0;

    if (u_chR == 0) r = 0.0;
    if (u_chG == 0) g = 0.0;
    if (u_chB == 0) b = 0.0;

    float idxR = r / 255.0; r = texture2D(u_lutR, vec2(idxR, 0.5)).r * 255.0;
    float idxG = g / 255.0; g = texture2D(u_lutG, vec2(idxG, 0.5)).r * 255.0;
    float idxB = b / 255.0; b = texture2D(u_lutB, vec2(idxB, 0.5)).r * 255.0;

    float cf = (259.0 * (u_contrast + 255.0)) / (255.0 * (259.0 - u_contrast));
    r = cf * (r - 128.0) + 128.0 + u_brightness;
    g = cf * (g - 128.0) + 128.0 + u_brightness;
    b = cf * (b - 128.0) + 128.0 + u_brightness;

    if (u_gamma != 1.0 || u_hlcomp != 1.0) {
        float rn = clamp(r / 255.0, 0.0, 1.0);
        float gn = clamp(g / 255.0, 0.0, 1.0);
        float bn = clamp(b / 255.0, 0.0, 1.0);
        if (u_gamma != 1.0) { rn = pow(rn, 1.0 / u_gamma); gn = pow(gn, 1.0 / u_gamma); bn = pow(bn, 1.0 / u_gamma); }
        if (u_hlcomp != 1.0) { rn = pow(rn, u_hlcomp); gn = pow(gn, u_hlcomp); bn = pow(bn, u_hlcomp); }
        r = rn * 255.0; g = gn * 255.0; b = bn * 255.0;
    }

    if (u_saturation != 1.0) {
        float L = 0.299 * r + 0.587 * g + 0.114 * b;
        r = L + (r - L) * u_saturation;
        g = L + (g - L) * u_saturation;
        b = L + (b - L) * u_saturation;
        r = clamp(r, 0.0, 255.0);
        g = clamp(g, 0.0, 255.0);
        b = clamp(b, 0.0, 255.0);
    }

    if (u_posterize < 255.0) {
        float step = 255.0 / (u_posterize - 1.0);
        r = floor(r / step + 0.5) * step;
        g = floor(g / step + 0.5) * step;
        b = floor(b / step + 0.5) * step;
    }

    if (u_clipping > 0.0) {
        if (r < u_clipping) r = 0.0; else if (r > 255.0 - u_clipping) r = 255.0;
        if (g < u_clipping) g = 0.0; else if (g > 255.0 - u_clipping) g = 255.0;
        if (b < u_clipping) b = 0.0; else if (b > 255.0 - u_clipping) b = 255.0;
    }

    r += u_bias; g += u_bias; b += u_bias;

    float nx = x / u_pScale;
    float ny = y / u_pScale;
    float cx = nx - u_w / (2.0 * u_pScale);
    float cy = ny - u_h / (2.0 * u_pScale);
    float dist = sqrt(cx * cx + cy * cy);
    float ang = atan(cy, cx);
    float luma = (0.299 * r + 0.587 * g + 0.114 * b) / 255.0;
    luma = clamp(luma, 0.0, 1.0);

    float t = 0.0;
    float tr = 0.0, tg = 0.0, tb = 0.0;
    int useChannel = 0;

${algoCode}

    vec3 finalColor;
    if (useChannel == 1) {
        finalColor = vec3(r + tr * u_spread, g + tg * u_spread, b + tb * u_spread);
    } else {
        tr = t; tg = t; tb = t;
        finalColor = vec3(r + t * u_spread, g + t * u_spread, b + t * u_spread);
    }
    finalColor = clamp(finalColor, 0.0, 255.0);

    vec3 matched = findClosest(finalColor / 255.0) * 255.0;
    gl_FragColor = vec4(matched / 255.0, 1.0);
}`;
}

// --- PBO ASYNC READBACK ---
function initPBOs(gl, size) {
    if (!gpuState.hasPBO) return false;
    if (gpuState.pbo && gpuState.pboSize >= size) return true;
    if (gpuState.pbo) gl.deleteBuffer(gpuState.pbo);
    gpuState.pbo = gl.createBuffer();
    gl.bindBuffer(gl.PIXEL_PACK_BUFFER, gpuState.pbo);
    gl.bufferData(gl.PIXEL_PACK_BUFFER, size, gl.STREAM_READ);
    gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);
    gpuState.pboSize = size;
    gpuState.pboPending = null;
    return true;
}

function flushReadback(gl, w, h) {
    if (!gpuState.hasPBO || !gpuState.pbo || !gpuState.pboPending) return null;
    const size = w * h * 4;
    gl.bindBuffer(gl.PIXEL_PACK_BUFFER, gpuState.pbo);
    const data = new Uint8Array(size);
    gl.getBufferSubData(gl.PIXEL_PACK_BUFFER, 0, data);
    gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);
    gpuState.pboPending = null;
    return data;
}

// --- 9. GPU DITHER ENGINE (STOCHASTIC / ORDERED) ---
function gpuDitherEngine(imageData, w, h, params) {
    const gl = gpuState.gl;
    if (!gl) return false;

    const { algo, brightness, contrast, gamma, hlcomp, saturation, posterize, clipping, bias,
        errStrength, patScale, chR, chG, chB, activePalette, renderPalette,
        lutM, lutR, lutG, lutB } = params;

    gpuState.canvas.width = w;
    gpuState.canvas.height = h;
    gl.viewport(0, 0, w, h);

    if (gpuState.sourceTex) gl.deleteTexture(gpuState.sourceTex);
    gpuState.sourceTex = createTexture(gl, w, h, imageData.data, gl.RGBA, gl.UNSIGNED_BYTE, gl.NEAREST);

    if (!setupFramebuffer(gl, w, h)) return false;

    // Channel LUT textures caching
    if (!gpuState.lutMTex || !arraysEqual256(lutM, gpuState.lastLutM)) {
        if (gpuState.lutMTex) gl.deleteTexture(gpuState.lutMTex);
        gpuState.lutMTex = createLUTTexture(gl, lutM);
        gpuState.lastLutM = new Uint8Array(lutM);
    }
    if (!gpuState.lutRTex || !arraysEqual256(lutR, gpuState.lastLutR)) {
        if (gpuState.lutRTex) gl.deleteTexture(gpuState.lutRTex);
        gpuState.lutRTex = createLUTTexture(gl, lutR);
        gpuState.lastLutR = new Uint8Array(lutR);
    }
    if (!gpuState.lutGTex || !arraysEqual256(lutG, gpuState.lastLutG)) {
        if (gpuState.lutGTex) gl.deleteTexture(gpuState.lutGTex);
        gpuState.lutGTex = createLUTTexture(gl, lutG);
        gpuState.lastLutG = new Uint8Array(lutG);
    }
    if (!gpuState.lutBTex || !arraysEqual256(lutB, gpuState.lastLutB)) {
        if (gpuState.lutBTex) gl.deleteTexture(gpuState.lutBTex);
        gpuState.lutBTex = createLUTTexture(gl, lutB);
        gpuState.lastLutB = new Uint8Array(lutB);
    }

    const cacheKey = algo;
    let program = gpuState.programCache[cacheKey];
    if (!program) {
        const fragSrc = buildFragmentShader(algo, w, h, params);
        if (!fragSrc) return false;
        program = createProgram(gl, VERTEX_SHADER_SRC, fragSrc);
        if (!program) return false;
        gpuState.programCache[cacheKey] = program;
    }

    gl.useProgram(program);

    gl.uniform1i(gl.getUniformLocation(program, 'u_source'), 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, gpuState.sourceTex);
    gl.uniform1i(gl.getUniformLocation(program, 'u_lutM'), 1);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, gpuState.lutMTex);
    gl.uniform1i(gl.getUniformLocation(program, 'u_lutR'), 2);
    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, gpuState.lutRTex);
    gl.uniform1i(gl.getUniformLocation(program, 'u_lutG'), 3);
    gl.activeTexture(gl.TEXTURE3);
    gl.bindTexture(gl.TEXTURE_2D, gpuState.lutGTex);
    gl.uniform1i(gl.getUniformLocation(program, 'u_lutB'), 4);
    gl.activeTexture(gl.TEXTURE4);
    gl.bindTexture(gl.TEXTURE_2D, gpuState.lutBTex);

    gl.uniform1f(gl.getUniformLocation(program, 'u_spread'), errStrength * 128.0);
    gl.uniform1f(gl.getUniformLocation(program, 'u_pScale'), patScale);
    gl.uniform1f(gl.getUniformLocation(program, 'u_w'), w);
    gl.uniform1f(gl.getUniformLocation(program, 'u_h'), h);
    gl.uniform1f(gl.getUniformLocation(program, 'u_brightness'), brightness);
    gl.uniform1f(gl.getUniformLocation(program, 'u_contrast'), contrast);
    gl.uniform1f(gl.getUniformLocation(program, 'u_gamma'), gamma);
    gl.uniform1f(gl.getUniformLocation(program, 'u_hlcomp'), hlcomp);
    gl.uniform1f(gl.getUniformLocation(program, 'u_saturation'), saturation);
    gl.uniform1f(gl.getUniformLocation(program, 'u_posterize'), posterize);
    gl.uniform1f(gl.getUniformLocation(program, 'u_clipping'), clipping);
    gl.uniform1f(gl.getUniformLocation(program, 'u_bias'), bias);
    gl.uniform1i(gl.getUniformLocation(program, 'u_chR'), chR ? 1 : 0);
    gl.uniform1i(gl.getUniformLocation(program, 'u_chG'), chG ? 1 : 0);
    gl.uniform1i(gl.getUniformLocation(program, 'u_chB'), chB ? 1 : 0);

    // Build & upload 3D palette LUT texture (only if changed)
    const palHash = activePalette.map(c => c.join(',')).join('|') + '||' + renderPalette.map(c => c.join(',')).join('|');
    if (palHash !== gpuState.paletteHash || !gpuState.paletteLUT) {
        gpuState.paletteHash = palHash;
        if (gpuState.paletteLUT) gl.deleteTexture(gpuState.paletteLUT);
        const lutData = buildPaletteLUT(activePalette, renderPalette);
        gpuState.paletteLUT = createTexture(gl, 4096, 64, lutData, gl.RGBA, gl.UNSIGNED_BYTE, gl.NEAREST);
    }
    gl.uniform1i(gl.getUniformLocation(program, 'u_paletteLUT'), 5);
    gl.activeTexture(gl.TEXTURE5);
    gl.bindTexture(gl.TEXTURE_2D, gpuState.paletteLUT);

    gl.bindFramebuffer(gl.FRAMEBUFFER, gpuState.fbo);
    gl.viewport(0, 0, w, h);
    drawQuad(gl, program);

    // Flush previous PBO data if pending (async readback from last frame)
    const prevData = flushReadback(gl, w, h);

    const rowSize = w * 4;
    if (gpuState.hasPBO) {
        initPBOs(gl, w * h * 4);
        // Start async readback into PBO (non-blocking)
        gl.bindBuffer(gl.PIXEL_PACK_BUFFER, gpuState.pbo);
        gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, 0);
        gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);
        gpuState.pboPending = true;
    } else {
        // Sync fallback
        const outData = new Uint8Array(w * h * 4);
        gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, outData);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        for (let y = 0; y < h; y++) {
            imageData.data.set(outData.subarray(y * rowSize, (y + 1) * rowSize), (h - 1 - y) * rowSize);
        }
    }

    // Use data from previous frame's PBO (now available)
    if (prevData) {
        for (let y = 0; y < h; y++) {
            imageData.data.set(prevData.subarray(y * rowSize, (y + 1) * rowSize), (h - 1 - y) * rowSize);
        }
    } else if (gpuState.hasPBO && !prevData) {
        // First frame with PBO: must do sync read
        gl.bindBuffer(gl.PIXEL_PACK_BUFFER, gpuState.pbo);
        const syncData = new Uint8Array(w * h * 4);
        gl.getBufferSubData(gl.PIXEL_PACK_BUFFER, 0, syncData);
        gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);
        gpuState.pboPending = null;
        for (let y = 0; y < h; y++) {
            imageData.data.set(syncData.subarray(y * rowSize, (y + 1) * rowSize), (h - 1 - y) * rowSize);
        }
    }

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    return true;
}

// --- 9. GPU PREPROCESS ---
function gpuPreprocess(imageData, w, h, params) {
    const gl = gpuState.gl;
    if (!gl) return false;

    const { brightness, contrast, gamma, hlcomp, saturation, posterize, clipping, bias,
        chR, chG, chB, lutM, lutR, lutG, lutB } = params;

    gpuState.canvas.width = w;
    gpuState.canvas.height = h;
    gl.viewport(0, 0, w, h);

    if (gpuState.sourceTex) gl.deleteTexture(gpuState.sourceTex);
    gpuState.sourceTex = createTexture(gl, w, h, imageData.data, gl.RGBA, gl.UNSIGNED_BYTE, gl.NEAREST);

    if (!setupFramebuffer(gl, w, h)) return false;

    const lutMTex = createLUTTexture(gl, lutM);
    const lutRTex = createLUTTexture(gl, lutR);
    const lutGTex = createLUTTexture(gl, lutG);
    const lutBTex = createLUTTexture(gl, lutB);

    const cacheKey = '__preprocess__';
    let program = gpuState.programCache[cacheKey];
    if (!program) {
        const preFrag = `precision highp float;
varying vec2 v_texCoord;
uniform sampler2D u_source, u_lutM, u_lutR, u_lutG, u_lutB;
uniform float u_brightness, u_contrast, u_gamma, u_hlcomp, u_saturation, u_posterize, u_clipping, u_bias;
uniform int u_chR, u_chG, u_chB;
void main() {
    vec4 src = texture2D(u_source, v_texCoord);
    if (src.a < 0.5) { gl_FragColor = vec4(0.0); return; }
    float r = src.r * 255.0, g = src.g * 255.0, b = src.b * 255.0;
     if (u_chR == 0) r = 0.0; if (u_chG == 0) g = 0.0; if (u_chB == 0) b = 0.0;
    float idxR = r / 255.0; r = texture2D(u_lutR, vec2(idxR, 0.5)).r * 255.0;
    float idxG = g / 255.0; g = texture2D(u_lutG, vec2(idxG, 0.5)).r * 255.0;
    float idxB = b / 255.0; b = texture2D(u_lutB, vec2(idxB, 0.5)).r * 255.0;
    float cf = (259.0 * (u_contrast + 255.0)) / (255.0 * (259.0 - u_contrast));
    r = cf * (r - 128.0) + 128.0 + u_brightness;
    g = cf * (g - 128.0) + 128.0 + u_brightness;
    b = cf * (b - 128.0) + 128.0 + u_brightness;
    if (u_gamma != 1.0 || u_hlcomp != 1.0) {
        float rn = clamp(r / 255.0, 0.0, 1.0), gn = clamp(g / 255.0, 0.0, 1.0), bn = clamp(b / 255.0, 0.0, 1.0);
        if (u_gamma != 1.0) { rn = pow(rn, 1.0 / u_gamma); gn = pow(gn, 1.0 / u_gamma); bn = pow(bn, 1.0 / u_gamma); }
        if (u_hlcomp != 1.0) { rn = pow(rn, u_hlcomp); gn = pow(gn, u_hlcomp); bn = pow(bn, u_hlcomp); }
        r = rn * 255.0; g = gn * 255.0; b = bn * 255.0;
    }
    if (u_saturation != 1.0) {
        float L = 0.299 * r + 0.587 * g + 0.114 * b;
        r = L + (r - L) * u_saturation; g = L + (g - L) * u_saturation; b = L + (b - L) * u_saturation;
        r = clamp(r, 0.0, 255.0); g = clamp(g, 0.0, 255.0); b = clamp(b, 0.0, 255.0);
    }
    if (u_posterize < 255.0) {
        float step = 255.0 / (u_posterize - 1.0);
        r = floor(r / step + 0.5) * step; g = floor(g / step + 0.5) * step; b = floor(b / step + 0.5) * step;
    }
    if (u_clipping > 0.0) {
        if (r < u_clipping) r = 0.0; else if (r > 255.0 - u_clipping) r = 255.0;
        if (g < u_clipping) g = 0.0; else if (g > 255.0 - u_clipping) g = 255.0;
        if (b < u_clipping) b = 0.0; else if (b > 255.0 - u_clipping) b = 255.0;
    }
    r += u_bias; g += u_bias; b += u_bias;
    gl_FragColor = vec4(r / 255.0, g / 255.0, b / 255.0, 1.0);
}`;
        program = createProgram(gl, VERTEX_SHADER_SRC, preFrag);
        if (!program) return false;
        gpuState.programCache[cacheKey] = program;
    }

    gl.useProgram(program);

    gl.uniform1i(gl.getUniformLocation(program, 'u_source'), 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, gpuState.sourceTex);
    gl.uniform1i(gl.getUniformLocation(program, 'u_lutM'), 1);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, lutMTex);
    gl.uniform1i(gl.getUniformLocation(program, 'u_lutR'), 2);
    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, lutRTex);
    gl.uniform1i(gl.getUniformLocation(program, 'u_lutG'), 3);
    gl.activeTexture(gl.TEXTURE3);
    gl.bindTexture(gl.TEXTURE_2D, lutGTex);
    gl.uniform1i(gl.getUniformLocation(program, 'u_lutB'), 4);
    gl.activeTexture(gl.TEXTURE4);
    gl.bindTexture(gl.TEXTURE_2D, lutBTex);

    gl.uniform1f(gl.getUniformLocation(program, 'u_brightness'), brightness);
    gl.uniform1f(gl.getUniformLocation(program, 'u_contrast'), contrast);
    gl.uniform1f(gl.getUniformLocation(program, 'u_gamma'), gamma);
    gl.uniform1f(gl.getUniformLocation(program, 'u_hlcomp'), hlcomp);
    gl.uniform1f(gl.getUniformLocation(program, 'u_saturation'), saturation);
    gl.uniform1f(gl.getUniformLocation(program, 'u_posterize'), posterize);
    gl.uniform1f(gl.getUniformLocation(program, 'u_clipping'), clipping);
    gl.uniform1f(gl.getUniformLocation(program, 'u_bias'), bias);
    gl.uniform1i(gl.getUniformLocation(program, 'u_chR'), chR ? 1 : 0);
    gl.uniform1i(gl.getUniformLocation(program, 'u_chG'), chG ? 1 : 0);
    gl.uniform1i(gl.getUniformLocation(program, 'u_chB'), chB ? 1 : 0);

    gl.bindFramebuffer(gl.FRAMEBUFFER, gpuState.fbo);
    drawQuad(gl, program);

    // Flush previous PBO data if pending
    const prevData = flushReadback(gl, w, h);

    const rowSize = w * 4;
    if (gpuState.hasPBO) {
        initPBOs(gl, w * h * 4);
        gl.bindBuffer(gl.PIXEL_PACK_BUFFER, gpuState.pbo);
        gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, 0);
        gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);
        gpuState.pboPending = true;
    }

    if (prevData) {
        for (let y = 0; y < h; y++) {
            imageData.data.set(prevData.subarray(y * rowSize, (y + 1) * rowSize), (h - 1 - y) * rowSize);
        }
    } else if (gpuState.hasPBO && !prevData) {
        gl.bindBuffer(gl.PIXEL_PACK_BUFFER, gpuState.pbo);
        const syncData = new Uint8Array(w * h * 4);
        gl.getBufferSubData(gl.PIXEL_PACK_BUFFER, 0, syncData);
        gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);
        gpuState.pboPending = null;
        for (let y = 0; y < h; y++) {
            imageData.data.set(syncData.subarray(y * rowSize, (y + 1) * rowSize), (h - 1 - y) * rowSize);
        }
    } else {
        const outData = new Uint8Array(w * h * 4);
        gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, outData);
        for (let y = 0; y < h; y++) {
            imageData.data.set(outData.subarray(y * rowSize, (y + 1) * rowSize), (h - 1 - y) * rowSize);
        }
    }

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    gl.deleteTexture(lutMTex);
    gl.deleteTexture(lutRTex);
    gl.deleteTexture(lutGTex);
    gl.deleteTexture(lutBTex);

    return true;
}

// --- 11. ERROR DIFFUSION PROPAGATION (CPU, AFTER GPU PREPROCESS) ---
function ditherDiffusionCore(imageData, w, h, params) {
    const data = imageData.data;
    const { algo, errStrength, scanPattern, rotDeg, errBias, activePalette, renderPalette } = params;

    const f32 = new Float32Array(w * h * 3);
    for (let i = 0, fi = 0; i < w * h * 4; i += 4, fi += 3) {
        f32[fi] = data[i];
        f32[fi + 1] = data[i + 1];
        f32[fi + 2] = data[i + 2];
    }

    const matrixDef = matricesDifusion[algo];
    const path = getScanPath(w, h, scanPattern);
    const pathLen = w * h * 3;

    const rad = rotDeg * (Math.PI / 180);
    const cosR = Math.cos(rad);
    const sinR = Math.sin(rad);

    for (let p = 0; p < pathLen; p += 3) {
        let x = path[p];
        let y = path[p + 1];
        let dir = path[p + 2];
        let rtl = (dir === -1);
        let idx = (y * w + x) * 4;

        if (data[idx + 3] < 128) {
            data[idx] = 0;
            data[idx + 1] = 0;
            data[idx + 2] = 0;
            data[idx + 3] = 0;
            continue;
        }

        let fi = (y * w + x) * 3;
        let oldR = f32[fi];
        let oldG = f32[fi + 1];
        let oldB = f32[fi + 2];

        let matchIndex = findClosestPaletteColorIndex(oldR, oldG, oldB, activePalette);
        let renderColor = renderPalette[matchIndex];
        let match = activePalette[matchIndex];

        data[idx] = renderColor[0];
        data[idx + 1] = renderColor[1];
        data[idx + 2] = renderColor[2];
        data[idx + 3] = 255;

        let errR = (oldR - match[0]) * errStrength;
        let errG = (oldG - match[1]) * errStrength;
        let errB = (oldB - match[2]) * errStrength;

        if (errR === 0 && errG === 0 && errB === 0) continue;

        for (let m of matrixDef.m) {
            let mx = rtl ? -m[0] : m[0];
            let my = m[1];

            let rotX = Math.round(mx * cosR - my * sinR);
            let rotY = Math.round(mx * sinR + my * cosR);

            let nx = x + rotX;
            let ny = y + rotY;

            if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
                let nIdx = (ny * w + nx) * 4;
                if (data[nIdx + 3] < 128) continue;

                let nFi = (ny * w + nx) * 3;

                let biasFactor = 1.0;
                if (errBias !== 0) {
                    let isHoriz = Math.abs(rotX) > Math.abs(rotY);
                    if (isHoriz) biasFactor -= errBias;
                    else biasFactor += errBias;
                    biasFactor = Math.max(0.1, biasFactor);
                }

                let weight = (m[2] / matrixDef.d) * biasFactor;
                f32[nFi] += errR * weight;
                f32[nFi + 1] += errG * weight;
                f32[nFi + 2] += errB * weight;
            }
        }
    }
}

// --- 12. SMART DISPATCH ---
let cpuWorker = null;
let workerId = 0;

function initWorker() {
    if (cpuWorker) return;
    try {
        cpuWorker = new Worker('dither-worker.js');
    } catch(e) { cpuWorker = null; }
}
function acceleratedDitherEngine(imageData, w, h, params) {
    const { algo } = params;

    // Stochastic/ordered/fractal/experimental: GPU accelerated
    if (!matricesDifusion[algo] && isGPUSupported() && gpuDitherEngine(imageData, w, h, params)) return;

    // GPU failed or unavailable / Error diffusion: CPU path
    ditherEngineCore(imageData, w, h, params);
}

// Async version: uses Web Worker for CPU fallback to keep UI responsive
async function acceleratedDitherEngineAsync(imageData, w, h, params) {
    const { algo } = params;

    // Stochastic/ordered/fractal/experimental: GPU accelerated
    if (!matricesDifusion[algo] && isGPUSupported() && gpuDitherEngine(imageData, w, h, params)) return;

    // GPU not available or Error diffusion: dispatch to Web Worker
    initWorker();
    if (cpuWorker) {
        try {
            const id = ++workerId;
            const buffer = imageData.data.buffer.slice(0);
            const outBuffer = await new Promise((resolve, reject) => {
                const handler = function(e) {
                    if (e.data.id === id) {
                        cpuWorker.removeEventListener('message', handler);
                        if (e.data.error) reject(new Error(e.data.error));
                        else resolve(e.data.imageDataBuffer);
                    }
                };
                cpuWorker.addEventListener('message', handler);
                cpuWorker.postMessage({ imageDataBuffer: buffer, w, h, params, id }, [buffer]);
            });
            imageData.data.set(new Uint8ClampedArray(outBuffer));
            return;
        } catch(e) {}
    }

    // Worker failed: fallback to blocking CPU
    ditherEngineCore(imageData, w, h, params);
}
