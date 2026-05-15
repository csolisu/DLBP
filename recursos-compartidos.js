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
    'ht_espirales_locales', 'ht_puntos_ondulados', 'ht_gotas', 'ht_manchas', 'ht_celulas', 'ht_ruido_geometrico', 'ht_trama_acida', 'ht_puntos_derretidos', 'ht_distorsion_viento', 'ht_interferencia',];

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
                let cx = nx - w/(2*patScale); 
                let cy = ny - h/(2*patScale);
                let dist = Math.sqrt(cx*cx + cy*cy);
                let ang = Math.atan2(cy, cx);
                // Función maestra para generar líneas ultra delgadas y nítidas
                const thin = (v) => Math.pow(Math.abs(Math.sin(v)), 30);
                if (algo === 'random') t = Math.random() - 0.5;
                else if (algo === 'line') t = (Math.sin(nx * 1.5 + ny * 0.5) + 1) / 2 - 0.5;
                else if (algo === 'blueNoise') { let ign = 52.9829189 * ((0.06711056 * x + 0.00583715 * y) % 1); t = (ign - Math.floor(ign)) - 0.5; }
                else if (algo === 'circles') t = (Math.sin(nx * Math.PI) * Math.sin(ny * Math.PI)) / 2;
                else if (algo === 'diamonds') t = (Math.sin(nx * Math.PI) + Math.sin(ny * Math.PI)) / 4;
                else if (algo === 'squares') t = Math.max(Math.abs(Math.sin(nx * Math.PI)), Math.abs(Math.sin(ny * Math.PI))) - 0.5;
                else if (algo === 'triangles') { let sq3 = Math.sqrt(3); t = (Math.sin((nx + ny / sq3) * Math.PI) + Math.sin((nx - ny / sq3) * Math.PI) + Math.sin((ny * 2 / sq3) * Math.PI)) / 6; }
                // --- HALFTONE: Puntos y Círculos ---
                else if (algo === 'ht_punto_fino') t = Math.pow(Math.sin(nx * Math.PI) * Math.sin(ny * Math.PI), 2) - 0.5;
                else if (algo === 'ht_punto_grueso') t = (Math.sin(nx * Math.PI * 0.5) * Math.sin(ny * Math.PI * 0.5)) - 0.25;
                else if (algo === 'ht_punto_invertido') t = -((Math.sin(nx * Math.PI) * Math.sin(ny * Math.PI)) / 2);
                else if (algo === 'ht_elipse_h') t = (Math.sin(nx * Math.PI * 1.5) * Math.sin(ny * Math.PI)) / 2;
                else if (algo === 'ht_elipse_v') t = (Math.sin(nx * Math.PI) * Math.sin(ny * Math.PI * 1.5)) / 2;
                else if (algo === 'ht_burbujas') t = Math.abs(Math.sin(nx * Math.PI) * Math.sin(ny * Math.PI)) - 0.5;
                else if (algo === 'ht_anillos_simples') t = Math.sin(Math.sqrt(nx*nx + ny*ny) * Math.PI * 4) / 2;
                else if (algo === 'ht_puntos_dobles') t = (Math.sin(nx * Math.PI) * Math.sin(ny * Math.PI) + Math.sin(nx * Math.PI * 2) * Math.sin(ny * Math.PI * 2)) / 4;
                else if (algo === 'ht_puntos_desfasados') t = (Math.sin(nx * Math.PI + ny) * Math.sin(ny * Math.PI - nx)) / 2;
                else if (algo === 'ht_micro_circulos') t = (Math.sin(nx * Math.PI * 3) * Math.sin(ny * Math.PI * 3)) / 2;

                // --- HALFTONE: Rombos y Diamantes ---
                else if (algo === 'ht_rombo_suave') t = (Math.cos(nx * Math.PI) + Math.cos(ny * Math.PI)) / 4;
                else if (algo === 'ht_rombo_agudo') t = (Math.abs(Math.cos(nx * Math.PI)) + Math.abs(Math.cos(ny * Math.PI))) / 2 - 0.5;
                else if (algo === 'ht_diamante_estrella') t = (Math.pow(Math.sin(nx * Math.PI), 3) + Math.pow(Math.sin(ny * Math.PI), 3)) / 4;
                else if (algo === 'ht_diamante_roto') t = (Math.sin(nx * Math.PI) + Math.cos(ny * Math.PI)) / 4;
                else if (algo === 'ht_rombo_doble') t = (Math.sin(nx * Math.PI) * Math.cos(ny * Math.PI) + Math.cos(nx * Math.PI) * Math.sin(ny * Math.PI)) / 4;
                else if (algo === 'ht_estrellas_4p') t = Math.pow(Math.sin(nx * Math.PI) * Math.cos(ny * Math.PI), 2) - 0.5;
                else if (algo === 'ht_estrellas_8p') t = (Math.sin(nx * Math.PI) + Math.sin(ny * Math.PI) + Math.sin((nx+ny) * Math.PI)) / 6;
                else if (algo === 'ht_rombos_entrelazados') t = Math.sin((nx + ny) * Math.PI) * Math.sin((nx - ny) * Math.PI) / 2;
                else if (algo === 'ht_cruces_diagonales') t = (Math.abs(Math.sin((nx + ny) * Math.PI)) - Math.abs(Math.cos((nx - ny) * Math.PI))) / 2;
                else if (algo === 'ht_diamante_invertido') t = -((Math.sin(nx * Math.PI) + Math.sin(ny * Math.PI)) / 4);

                // --- HALFTONE: Cuadrados y Retículas ---
                else if (algo === 'ht_cuadro_suave') t = (Math.cos(nx * Math.PI * 2) * Math.cos(ny * Math.PI * 2)) / 2;
                else if (algo === 'ht_cuadro_estricto') t = Math.max(Math.sin(nx * Math.PI), Math.cos(ny * Math.PI)) - 0.5;
                else if (algo === 'ht_reticula_h') t = Math.sin(ny * Math.PI * 2) / 2;
                else if (algo === 'ht_reticula_v') t = Math.sin(nx * Math.PI * 2) / 2;
                else if (algo === 'ht_cuadros_rotados') t = Math.max(Math.abs(Math.sin((nx + ny) * Math.PI)), Math.abs(Math.sin((nx - ny) * Math.PI))) - 0.5;
                else if (algo === 'ht_ajedrez_suave') t = Math.sin((nx + ny) * Math.PI * 2) / 2;
                else if (algo === 'ht_bloques_escalonados') t = (Math.sin(nx * Math.PI) * Math.sin(ny * Math.PI + (nx % 2))) / 2;
                else if (algo === 'ht_cuadricula_doble') t = (Math.sin(nx * Math.PI * 2) + Math.sin(ny * Math.PI * 2)) / 4;
                else if (algo === 'ht_marcos_cuadrados') t = Math.abs(Math.max(Math.sin(nx * Math.PI), Math.sin(ny * Math.PI))) - 0.5;
                else if (algo === 'ht_ladrillos_halftone') t = Math.sin(ny * Math.PI) * Math.sin(nx * Math.PI + (Math.floor(ny) % 2) * Math.PI/2) / 2;

                // --- HALFTONE: Geometría Compleja ---
                else if (algo === 'ht_hex_suave') t = (Math.sin(nx * Math.PI) * Math.sin((nx * 0.5 + ny * 0.866) * Math.PI) * Math.sin((nx * 0.5 - ny * 0.866) * Math.PI));
                else if (algo === 'ht_hex_estricto') t = Math.max(Math.sin(nx*Math.PI), Math.max(Math.sin((nx*0.5 + ny*0.866)*Math.PI), Math.sin((nx*0.5 - ny*0.866)*Math.PI))) - 0.5;
                else if (algo === 'ht_tri_entrelazado') t = (Math.sin(nx * Math.PI) + Math.sin((nx * 0.5 + ny * 0.866) * Math.PI)) / 4;
                else if (algo === 'ht_piramides') t = Math.min(Math.abs(Math.sin(nx * Math.PI)), Math.abs(Math.sin(ny * Math.PI))) - 0.5;
                else if (algo === 'ht_octogonos') t = Math.max(Math.abs(Math.sin(nx*Math.PI)), Math.max(Math.abs(Math.sin(ny*Math.PI)), Math.abs(Math.sin((nx+ny)*Math.PI*0.707)))) - 0.5;
                else if (algo === 'ht_engranajes') t = Math.sin(dist * Math.PI * 4 + Math.sin(ang * 6)) / 2;
                else if (algo === 'ht_ondas_senoidales') t = (Math.sin(nx * Math.PI * 2) + Math.cos(ny * Math.PI * 2 + nx)) / 4;
                else if (algo === 'ht_cruces_ortogonales') t = (Math.pow(Math.sin(nx * Math.PI), 4) + Math.pow(Math.sin(ny * Math.PI), 4)) / 4 - 0.25;
                else if (algo === 'ht_asteriscos') t = (Math.sin(nx * Math.PI) * Math.sin(ny * Math.PI) * Math.sin((nx+ny)*Math.PI)) / 2;
                else if (algo === 'ht_malla_tejida') t = Math.sin((nx * Math.cos(ny) + ny * Math.sin(nx)) * Math.PI) / 2;

                // --- HALFTONE: Distorsiones y Orgánicos ---
                else if (algo === 'ht_espirales_locales') t = Math.sin(Math.sqrt(nx*nx + ny*ny) * 10 + Math.atan2(ny, nx) * 3) / 2;
                else if (algo === 'ht_puntos_ondulados') t = (Math.sin(nx * Math.PI + Math.sin(ny)) * Math.sin(ny * Math.PI)) / 2;
                else if (algo === 'ht_gotas') t = Math.exp(-Math.pow(Math.sin(nx * Math.PI), 2) - Math.pow(Math.sin(ny * Math.PI), 2)) - 0.5;
                else if (algo === 'ht_manchas') t = (Math.sin(nx * 3 + Math.cos(ny * 2)) + Math.cos(ny * 3 + Math.sin(nx * 2))) / 4;
                else if (algo === 'ht_celulas') t = (Math.abs(Math.sin(nx * Math.PI * 1.5)) * Math.abs(Math.cos(ny * Math.PI * 1.5))) - 0.5;
                else if (algo === 'ht_ruido_geometrico') t = (Math.sin(nx * Math.PI * 2.5) * Math.sin(ny * Math.PI * 2.5) * Math.sin((nx+ny) * 10)) / 2;
                else if (algo === 'ht_trama_acida') t = (Math.sin(nx * Math.PI + Math.tan(ny)) * Math.cos(ny * Math.PI)) / 4;
                else if (algo === 'ht_puntos_derretidos') t = (Math.sin(nx * Math.PI) * Math.sin((ny + Math.sin(nx*2)) * Math.PI)) / 2;
                else if (algo === 'ht_distorsion_viento') t = Math.sin(nx * Math.PI * 2 + Math.cos(ny * Math.PI * 3)) / 2;
                else if (algo === 'ht_interferencia') t = (Math.sin(nx * Math.PI * 3) + Math.cos(ny * Math.PI * 3) + Math.sin((nx-ny) * Math.PI * 5)) / 6;

                else if (algo === 'crossHatch') {
                    let luma = (0.299*f32[fi] + 0.587*f32[fi+1] + 0.114*f32[fi+2]) / 255;
                    let ang1 = Math.sin(nx + ny); let ang2 = Math.sin(nx - ny);
                    t = luma > 0.5 ? ang1*0.5 : (ang1+ang2)*0.25;
                }
                else if (algo === 'spiralWave') {
                    let cx = nx - w/(2*patScale); let cy = ny - h/(2*patScale);
                    let dist = Math.sqrt(cx*cx + cy*cy);
                    let ang = Math.atan2(cy, cx);
                    t = Math.sin(dist * 2.0 + ang * 8.0) * 0.5;
                }
                else if (algo === 'voronoi') {
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
                else if (algo === 'hilbertPattern') {
                    let hX = Math.floor(nx) ^ Math.floor(ny);
                    t = ((hX * 0.61803398875) % 1) - 0.5;
                }
                else if (algo === 'dtm') {
                    let mod = Math.sin(nx*0.05) * Math.cos(ny*0.05);
                    t = (Math.random() - 0.5) * mod;
                }
// --- LÍNEAS Y TRAMAS ---
                else if (algo === 'lineas_45') t = thin(nx + ny) - 0.5;
                else if (algo === 'lineas_135') t = thin(nx - ny) - 0.5;
                else if (algo === 'lineas_v') t = thin(nx * 2) - 0.5;
                else if (algo === 'lineas_h') t = thin(ny * 2) - 0.5;
                else if (algo === 'malla_ortogonal') t = Math.max(thin(nx * 2), thin(ny * 2)) - 0.5;
                else if (algo === 'malla_diagonal') t = Math.max(thin(nx + ny), thin(nx - ny)) - 0.5;
                else if (algo === 'malla_hexagonal') t = Math.max(thin(nx*1.732), Math.max(thin(nx*0.866 + ny*1.5), thin(nx*0.866 - ny*1.5))) - 0.5;
                else if (algo === 'ondas_v') t = thin(nx * 2 + Math.sin(ny * 1.5)) - 0.5;
                else if (algo === 'ondas_h') t = thin(ny * 2 + Math.sin(nx * 1.5)) - 0.5;
                else if (algo === 'ondas_cruzadas') t = Math.max(thin(nx * 2 + Math.sin(ny)), thin(ny * 2 + Math.sin(nx))) - 0.5;
                else if (algo === 'zigzag_v') t = thin(nx * 2 + Math.abs(Math.sin(ny * 2))) - 0.5;
                else if (algo === 'zigzag_h') t = thin(ny * 2 + Math.abs(Math.sin(nx * 2))) - 0.5;
                else if (algo === 'ladrillos') t = Math.max(thin(ny * 2), thin(nx * 2 + Math.floor(ny / Math.PI) * Math.PI)) - 0.5;
                else if (algo === 'isometria') t = Math.max(thin(ny*2), Math.max(thin(nx*1.732+ny), thin(nx*1.732-ny))) - 0.5;
                else if (algo === 'cuadricula_distorsionada') t = Math.max(thin(nx * 2 + ny * 0.5), thin(ny * 2 - nx * 0.5)) - 0.5;

                // --- ONDAS, ESPIRALES Y ANILLOS ---
                else if (algo === 'espiral_simple') t = thin(dist * 2 + ang) - 0.5;
                else if (algo === 'espiral_doble') t = thin(dist * 2 + ang * 2) - 0.5;
                else if (algo === 'espiral_cuadruple') t = thin(dist * 2 + ang * 4) - 0.5;
                else if (algo === 'anillos_concentricos') t = thin(dist * 3) - 0.5;
                else if (algo === 'anillos_ondulados') t = thin(dist * 3 + Math.sin(ang * 8) * 0.5) - 0.5;
                else if (algo === 'rayos_solares') t = thin(ang * 8) - 0.5;
                else if (algo === 'rayos_ondulados') t = thin(ang * 8 + Math.sin(dist * 2)) - 0.5;
                else if (algo === 'vortice') t = thin(ang * 6 + Math.log(dist + 0.1) * 3) - 0.5;
                else if (algo === 'interferencia_ondas') t = Math.max(thin(Math.hypot(nx-5, ny)*3), thin(Math.hypot(nx+5, ny)*3)) - 0.5;
                else if (algo === 'moire_lineal') t = thin(nx * 3) * thin(nx * 3.2) * 2 - 0.5;
                else if (algo === 'moire_radial') t = thin(dist * 3) * thin(Math.hypot(cx-2, cy)*3) * 2 - 0.5;
                else if (algo === 'ondas_sismicas') t = thin(ny * 3 + 2 * Math.sin(nx * 1.2 + Math.sin(ny * 0.8))) - 0.5;
                else if (algo === 'ruido_liquido') t = thin(nx * 1.5 + Math.sin(ny * 1.5) + Math.cos(nx * 0.5)) - 0.5;
                else if (algo === 'espiral_cuadrada') t = thin(Math.max(Math.abs(cx), Math.abs(cy)) * 4 + ang) - 0.5;
                else if (algo === 'anillos_cuadrados') t = thin(Math.max(Math.abs(cx), Math.abs(cy)) * 5) - 0.5;
                else if (algo === 'rombos_concentricos') t = thin((Math.abs(cx) + Math.abs(cy)) * 3) - 0.5;
                else if (algo === 'espiral_poligonal') t = thin(dist * 3 + Math.floor(ang * 3) / 3) - 0.5;

                // --- ORGÁNICOS Y MATERIALES ---
                else if (algo === 'madera') t = thin(dist * 1.5 + Math.sin(nx * 0.5) * 2) - 0.5;
                else if (algo === 'huella_dactilar') t = thin(dist * 2 + Math.sin(ang * 5) * 2) - 0.5;
                else if (algo === 'escamas') t = thin(nx * 2 + Math.cos(ny * 3) * 1.5) - 0.5;
                else if (algo === 'red_organica') t = thin(nx * 2 + 2 * Math.sin(ny * 1.5)) * thin(ny * 2 + 2 * Math.sin(nx * 1.5)) * 2 - 0.5;
                else if (algo === 'topografia') t = thin(dist * 2 + 2 * Math.sin(nx * 0.5) * Math.cos(ny * 0.5)) - 0.5;
                else if (algo === 'marmol') t = thin(nx * 2 + 3 * Math.sin(ny * 0.5 + 2 * Math.sin(nx * 0.2))) - 0.5;
                else if (algo === 'cebra') t = thin(nx * 3 + 2 * Math.sin(ny * 0.8)) - 0.5;

                // --- GEOMÉTRICOS Y ÓPTICOS ---
                else if (algo === 'telar') t = thin(nx * 2 * Math.sin(ny * 2)) - 0.5;
                else if (algo === 'malla_triangular') t = (thin(nx*2) + thin(nx+ny*1.732) + thin(nx-ny*1.732)) * 0.4 - 0.5;
                else if (algo === 'diamantes_delgados') t = thin(Math.abs(Math.sin(nx)) + Math.abs(Math.sin(ny))) - 0.5;
                else if (algo === 'cruz_celta') t = Math.pow(Math.abs(Math.sin(nx*2)*Math.cos(ny*2) + Math.cos(nx*2)*Math.sin(ny*2)), 15) - 0.5;
                else if (algo === 'matriz_puntos') t = thin(nx * 3) * thin(ny * 3) * 2 - 0.5;
                else if (algo === 'circuitos') t = Math.max(thin(nx*2), thin(ny*2)) * (Math.sin(Math.floor(nx)*3.1 + Math.floor(ny)*2.7)>0?1:0) - 0.5;
                else if (algo === 'estrellas') t = thin(ang * 5) * thin(dist * 4) * 2 - 0.5;
                else if (algo === 'telarana') t = Math.max(thin(dist * 3), thin(ang * 8)) - 0.5;
                else if (algo === 'ilusiones_opticas') t = Math.pow(Math.abs(Math.sin(nx*2 + Math.sin(ny*2)*0.5) * Math.cos(ny*2 + Math.sin(nx*2)*0.5)), 15) - 0.5;
                else if (algo === 'fractal_basico') t = Math.pow(Math.abs(Math.sin(nx*2)*Math.sin(ny*2)*Math.sin(nx*4)*Math.sin(ny*4)), 8) - 0.5;
                else if (algo === 'lluvia_matrix') t = thin(ny * 4 + nx * 12.3) * (Math.sin(nx * 5) > 0 ? 1 : 0) - 0.5;


                let r = f32[fi] + t * spread;
                let g = f32[fi+1] + t * spread;
                let b = f32[fi+2] + t * spread;

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
