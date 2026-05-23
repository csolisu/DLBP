const algorithmGLSL = {
    // ============================================================
    // BASIC PATTERNS
    // ============================================================

    'threshold': `float t = 0.0;`,

    'random': `float t = hash12(gl_FragCoord.xy) - 0.5;`,

    'line': `float t = (sin(nx * 1.5 + ny * 0.5) + 1.0) / 2.0 - 0.5;`,

    'blueNoise': `float ign = 52.9829189 * mod(0.06711056 * x + 0.00583715 * y, 1.0);
float t = fract(ign) - 0.5;`,

    'circles': `float t = (sin(nx * 3.14159265359) * sin(ny * 3.14159265359)) / 2.0;`,

    'diamonds': `float t = (sin(nx * 3.14159265359) + sin(ny * 3.14159265359)) / 4.0;`,

    'squares': `float t = max(abs(sin(nx * 3.14159265359)), abs(sin(ny * 3.14159265359))) - 0.5;`,

    'triangles': `float sq3 = 1.73205080757;
float t = (sin((nx + ny / sq3) * 3.14159265359) + sin((nx - ny / sq3) * 3.14159265359) + sin((ny * 2.0 / sq3) * 3.14159265359)) / 6.0;`,

    // ============================================================
    // HALFTONE: Puntos y Círculos
    // ============================================================

    'ht_punto_fino': `float t = pow(sin(nx * 3.14159265359) * sin(ny * 3.14159265359), 2.0) - 0.5;`,

    'ht_punto_grueso': `float t = (sin(nx * 3.14159265359 * 0.5) * sin(ny * 3.14159265359 * 0.5)) - 0.25;`,

    'ht_punto_invertido': `float t = -((sin(nx * 3.14159265359) * sin(ny * 3.14159265359)) / 2.0);`,

    'ht_elipse_h': `float t = (sin(nx * 3.14159265359 * 1.5) * sin(ny * 3.14159265359)) / 2.0;`,

    'ht_elipse_v': `float t = (sin(nx * 3.14159265359) * sin(ny * 3.14159265359 * 1.5)) / 2.0;`,

    'ht_burbujas': `float t = abs(sin(nx * 3.14159265359) * sin(ny * 3.14159265359)) - 0.5;`,

    'ht_anillos_simples': `float t = sin(sqrt(nx*nx + ny*ny) * 3.14159265359 * 4.0) / 2.0;`,

    'ht_puntos_dobles': `float t = (sin(nx * 3.14159265359) * sin(ny * 3.14159265359) + sin(nx * 3.14159265359 * 2.0) * sin(ny * 3.14159265359 * 2.0)) / 4.0;`,

    'ht_puntos_desfasados': `float t = (sin(nx * 3.14159265359 + ny) * sin(ny * 3.14159265359 - nx)) / 2.0;`,

    'ht_micro_circulos': `float t = (sin(nx * 3.14159265359 * 3.0) * sin(ny * 3.14159265359 * 3.0)) / 2.0;`,

    // ============================================================
    // HALFTONE: Rombos y Diamantes
    // ============================================================

    'ht_rombo_suave': `float t = (cos(nx * 3.14159265359) + cos(ny * 3.14159265359)) / 4.0;`,

    'ht_rombo_agudo': `float t = (abs(cos(nx * 3.14159265359)) + abs(cos(ny * 3.14159265359))) / 2.0 - 0.5;`,

    'ht_diamante_estrella': `float t = (pow(sin(nx * 3.14159265359), 3.0) + pow(sin(ny * 3.14159265359), 3.0)) / 4.0;`,

    'ht_diamante_roto': `float t = (sin(nx * 3.14159265359) + cos(ny * 3.14159265359)) / 4.0;`,

    'ht_rombo_doble': `float t = (sin(nx * 3.14159265359) * cos(ny * 3.14159265359) + cos(nx * 3.14159265359) * sin(ny * 3.14159265359)) / 4.0;`,

    'ht_estrellas_4p': `float t = pow(sin(nx * 3.14159265359) * cos(ny * 3.14159265359), 2.0) - 0.5;`,

    'ht_estrellas_8p': `float t = (sin(nx * 3.14159265359) + sin(ny * 3.14159265359) + sin((nx+ny) * 3.14159265359)) / 6.0;`,

    'ht_rombos_entrelazados': `float t = sin((nx + ny) * 3.14159265359) * sin((nx - ny) * 3.14159265359) / 2.0;`,

    'ht_cruces_diagonales': `float t = (abs(sin((nx + ny) * 3.14159265359)) - abs(cos((nx - ny) * 3.14159265359))) / 2.0;`,

    'ht_diamante_invertido': `float t = -((sin(nx * 3.14159265359) + sin(ny * 3.14159265359)) / 4.0);`,

    // ============================================================
    // HALFTONE: Cuadrados y Retículas
    // ============================================================

    'ht_cuadro_suave': `float t = (cos(nx * 3.14159265359 * 2.0) * cos(ny * 3.14159265359 * 2.0)) / 2.0;`,

    'ht_cuadro_estricto': `float t = max(sin(nx * 3.14159265359), cos(ny * 3.14159265359)) - 0.5;`,

    'ht_reticula_h': `float t = sin(ny * 3.14159265359 * 2.0) / 2.0;`,

    'ht_reticula_v': `float t = sin(nx * 3.14159265359 * 2.0) / 2.0;`,

    'ht_cuadros_rotados': `float t = max(abs(sin((nx + ny) * 3.14159265359)), abs(sin((nx - ny) * 3.14159265359))) - 0.5;`,

    'ht_ajedrez_suave': `float t = sin((nx + ny) * 3.14159265359 * 2.0) / 2.0;`,

    'ht_bloques_escalonados': `float t = (sin(nx * 3.14159265359) * sin(ny * 3.14159265359 + mod(nx, 2.0))) / 2.0;`,

    'ht_cuadricula_doble': `float t = (sin(nx * 3.14159265359 * 2.0) + sin(ny * 3.14159265359 * 2.0)) / 4.0;`,

    'ht_marcos_cuadrados': `float t = abs(max(sin(nx * 3.14159265359), sin(ny * 3.14159265359))) - 0.5;`,

    'ht_ladrillos_halftone': `float t = sin(ny * 3.14159265359) * sin(nx * 3.14159265359 + mod(floor(ny), 2.0) * 3.14159265359 / 2.0) / 2.0;`,

    // ============================================================
    // HALFTONE: Geometría Compleja
    // ============================================================

    'ht_hex_suave': `float t = (sin(nx * 3.14159265359) * sin((nx * 0.5 + ny * 0.866) * 3.14159265359) * sin((nx * 0.5 - ny * 0.866) * 3.14159265359));`,

    'ht_hex_estricto': `float t = max(sin(nx*3.14159265359), max(sin((nx*0.5 + ny*0.866)*3.14159265359), sin((nx*0.5 - ny*0.866)*3.14159265359))) - 0.5;`,

    'ht_tri_entrelazado': `float t = (sin(nx * 3.14159265359) + sin((nx * 0.5 + ny * 0.866) * 3.14159265359)) / 4.0;`,

    'ht_piramides': `float t = min(abs(sin(nx * 3.14159265359)), abs(sin(ny * 3.14159265359))) - 0.5;`,

    'ht_octogonos': `float t = max(abs(sin(nx*3.14159265359)), max(abs(sin(ny*3.14159265359)), abs(sin((nx+ny)*3.14159265359*0.707)))) - 0.5;`,

    'ht_engranajes': `float t = sin(dist * 3.14159265359 * 4.0 + sin(ang * 6.0)) / 2.0;`,

    'ht_ondas_senoidales': `float t = (sin(nx * 3.14159265359 * 2.0) + cos(ny * 3.14159265359 * 2.0 + nx)) / 4.0;`,

    'ht_cruces_ortogonales': `float t = (pow(sin(nx * 3.14159265359), 4.0) + pow(sin(ny * 3.14159265359), 4.0)) / 4.0 - 0.25;`,

    'ht_asteriscos': `float t = (sin(nx * 3.14159265359) * sin(ny * 3.14159265359) * sin((nx+ny)*3.14159265359)) / 2.0;`,

    'ht_malla_tejida': `float t = sin((nx * cos(ny) + ny * sin(nx)) * 3.14159265359) / 2.0;`,

    // ============================================================
    // HALFTONE: Distorsiones y Orgánicos
    // ============================================================

    'ht_espirales_locales': `float t = sin(sqrt(nx*nx + ny*ny) * 10.0 + atan(ny, nx) * 3.0) / 2.0;`,

    'ht_puntos_ondulados': `float t = (sin(nx * 3.14159265359 + sin(ny)) * sin(ny * 3.14159265359)) / 2.0;`,

    'ht_gotas': `float t = exp(-pow(sin(nx * 3.14159265359), 2.0) - pow(sin(ny * 3.14159265359), 2.0)) - 0.5;`,

    'ht_manchas': `float t = (sin(nx * 3.0 + cos(ny * 2.0)) + cos(ny * 3.0 + sin(nx * 2.0))) / 4.0;`,

    'ht_celulas': `float t = (abs(sin(nx * 3.14159265359 * 1.5)) * abs(cos(ny * 3.14159265359 * 1.5))) - 0.5;`,

    'ht_ruido_geometrico': `float t = (sin(nx * 3.14159265359 * 2.5) * sin(ny * 3.14159265359 * 2.5) * sin((nx+ny) * 10.0)) / 2.0;`,

    'ht_trama_acida': `float t = (sin(nx * 3.14159265359 + tan(ny)) * cos(ny * 3.14159265359)) / 4.0;`,

    'ht_puntos_derretidos': `float t = (sin(nx * 3.14159265359) * sin((ny + sin(nx*2.0)) * 3.14159265359)) / 2.0;`,

    'ht_distorsion_viento': `float t = sin(nx * 3.14159265359 * 2.0 + cos(ny * 3.14159265359 * 3.0)) / 2.0;`,

    'ht_interferencia': `float t = (sin(nx * 3.14159265359 * 3.0) + cos(ny * 3.14159265359 * 3.0) + sin((nx-ny) * 3.14159265359 * 5.0)) / 6.0;`,

    // ============================================================
    // SPECIAL PATTERNS
    // ============================================================

    'crossHatch': `float ang1 = sin(nx + ny);
float ang2 = sin(nx - ny);
float t = luma > 0.5 ? ang1 * 0.5 : (ang1 + ang2) * 0.25;`,

    'spiralWave': `float t = sin(dist * 2.0 + ang * 8.0) * 0.5;`,

    'voronoi': `float xi = floor(nx);
float yi = floor(ny);
float xf = nx - xi;
float yf = ny - yi;
float minDist = 1.0;
for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
        float seed = (xi + float(i)) * 12.9898 + (yi + float(j)) * 78.233;
        float ptX = fract(sin(seed) * 43758.5453);
        float ptY = fract(cos(seed) * 43758.5453);
        float dx = float(i) + ptX - xf;
        float dy = float(j) + ptY - yf;
        float d = sqrt(dx*dx + dy*dy);
        if (d < minDist) minDist = d;
    }
}
float t = minDist - 0.5;`,

    'hilbertPattern': `float hX = floor(nx);
float hy = floor(ny);
float val = float(int(hX) ^ int(hy));
float t = fract(val * 0.61803398875) - 0.5;`,

    'dtm': `float modf = sin(nx*0.05) * cos(ny*0.05);
float t = (hash12(gl_FragCoord.xy) - 0.5) * modf;`,

    // ============================================================
    // LÍNEAS Y TRAMAS
    // ============================================================

    'lineas_45': `float t = thin(nx + ny) - 0.5;`,

    'lineas_135': `float t = thin(nx - ny) - 0.5;`,

    'lineas_v': `float t = thin(nx * 2.0) - 0.5;`,

    'lineas_h': `float t = thin(ny * 2.0) - 0.5;`,

    'malla_ortogonal': `float t = max(thin(nx * 2.0), thin(ny * 2.0)) - 0.5;`,

    'malla_diagonal': `float t = max(thin(nx + ny), thin(nx - ny)) - 0.5;`,

    'malla_hexagonal': `float t = max(thin(nx*1.732), max(thin(nx*0.866 + ny*1.5), thin(nx*0.866 - ny*1.5))) - 0.5;`,

    'ondas_v': `float t = thin(nx * 2.0 + sin(ny * 1.5)) - 0.5;`,

    'ondas_h': `float t = thin(ny * 2.0 + sin(nx * 1.5)) - 0.5;`,

    'ondas_cruzadas': `float t = max(thin(nx * 2.0 + sin(ny)), thin(ny * 2.0 + sin(nx))) - 0.5;`,

    'zigzag_v': `float t = thin(nx * 2.0 + abs(sin(ny * 2.0))) - 0.5;`,

    'zigzag_h': `float t = thin(ny * 2.0 + abs(sin(nx * 2.0))) - 0.5;`,

    'ladrillos': `float t = max(thin(ny * 2.0), thin(nx * 2.0 + floor(ny / 3.14159265359) * 3.14159265359)) - 0.5;`,

    'isometria': `float t = max(thin(ny*2.0), max(thin(nx*1.732+ny), thin(nx*1.732-ny))) - 0.5;`,

    'cuadricula_distorsionada': `float t = max(thin(nx * 2.0 + ny * 0.5), thin(ny * 2.0 - nx * 0.5)) - 0.5;`,

    // ============================================================
    // ONDAS, ESPIRALES Y ANILLOS
    // ============================================================

    'espiral_simple': `float t = thin(dist * 2.0 + ang) - 0.5;`,

    'espiral_doble': `float t = thin(dist * 2.0 + ang * 2.0) - 0.5;`,

    'espiral_cuadruple': `float t = thin(dist * 2.0 + ang * 4.0) - 0.5;`,

    'anillos_concentricos': `float t = thin(dist * 3.0) - 0.5;`,

    'anillos_ondulados': `float t = thin(dist * 3.0 + sin(ang * 8.0) * 0.5) - 0.5;`,

    'rayos_solares': `float t = thin(ang * 8.0) - 0.5;`,

    'rayos_ondulados': `float t = thin(ang * 8.0 + sin(dist * 2.0)) - 0.5;`,

    'vortice': `float t = thin(ang * 6.0 + log(dist + 0.1) * 3.0) - 0.5;`,

    'interferencia_ondas': `float t = max(thin(length(vec2(nx-5.0, ny))*3.0), thin(length(vec2(nx+5.0, ny))*3.0)) - 0.5;`,

    'moire_lineal': `float t = thin(nx * 3.0) * thin(nx * 3.2) * 2.0 - 0.5;`,

    'moire_radial': `float t = thin(dist * 3.0) * thin(length(vec2(cx-2.0, cy))*3.0) * 2.0 - 0.5;`,

    'ondas_sismicas': `float t = thin(ny * 3.0 + 2.0 * sin(nx * 1.2 + sin(ny * 0.8))) - 0.5;`,

    'ruido_liquido': `float t = thin(nx * 1.5 + sin(ny * 1.5) + cos(nx * 0.5)) - 0.5;`,

    'espiral_cuadrada': `float t = thin(max(abs(cx), abs(cy)) * 4.0 + ang) - 0.5;`,

    'anillos_cuadrados': `float t = thin(max(abs(cx), abs(cy)) * 5.0) - 0.5;`,

    'rombos_concentricos': `float t = thin((abs(cx) + abs(cy)) * 3.0) - 0.5;`,

    'espiral_poligonal': `float t = thin(dist * 3.0 + floor(ang * 3.0) / 3.0) - 0.5;`,

    // ============================================================
    // ORGÁNICOS Y MATERIALES
    // ============================================================

    'madera': `float t = thin(dist * 1.5 + sin(nx * 0.5) * 2.0) - 0.5;`,

    'huella_dactilar': `float t = thin(dist * 2.0 + sin(ang * 5.0) * 2.0) - 0.5;`,

    'escamas': `float t = thin(nx * 2.0 + cos(ny * 3.0) * 1.5) - 0.5;`,

    'red_organica': `float t = thin(nx * 2.0 + 2.0 * sin(ny * 1.5)) * thin(ny * 2.0 + 2.0 * sin(nx * 1.5)) * 2.0 - 0.5;`,

    'topografia': `float t = thin(dist * 2.0 + 2.0 * sin(nx * 0.5) * cos(ny * 0.5)) - 0.5;`,

    'marmol': `float t = thin(nx * 2.0 + 3.0 * sin(ny * 0.5 + 2.0 * sin(nx * 0.2))) - 0.5;`,

    'cebra': `float t = thin(nx * 3.0 + 2.0 * sin(ny * 0.8)) - 0.5;`,

    // ============================================================
    // GEOMÉTRICOS Y ÓPTICOS
    // ============================================================

    'telar': `float t = thin(nx * 2.0 * sin(ny * 2.0)) - 0.5;`,

    'malla_triangular': `float t = (thin(nx*2.0) + thin(nx+ny*1.732) + thin(nx-ny*1.732)) * 0.4 - 0.5;`,

    'diamantes_delgados': `float t = thin(abs(sin(nx)) + abs(sin(ny))) - 0.5;`,

    'cruz_celta': `float t = pow(abs(sin(nx*2.0)*cos(ny*2.0) + cos(nx*2.0)*sin(ny*2.0)), 15.0) - 0.5;`,

    'matriz_puntos': `float t = thin(nx * 3.0) * thin(ny * 3.0) * 2.0 - 0.5;`,

    'circuitos': `float t = max(thin(nx*2.0), thin(ny*2.0)) * (sin(floor(nx)*3.1 + floor(ny)*2.7) > 0.0 ? 1.0 : 0.0) - 0.5;`,

    'estrellas': `float t = thin(ang * 5.0) * thin(dist * 4.0) * 2.0 - 0.5;`,

    'telarana': `float t = max(thin(dist * 3.0), thin(ang * 8.0)) - 0.5;`,

    'ilusiones_opticas': `float t = pow(abs(sin(nx*2.0 + sin(ny*2.0)*0.5) * cos(ny*2.0 + sin(nx*2.0)*0.5)), 15.0) - 0.5;`,

    'fractal_basico': `float t = pow(abs(sin(nx*2.0)*sin(ny*2.0)*sin(nx*4.0)*sin(ny*4.0)), 8.0) - 0.5;`,

    'lluvia_matrix': `float t = thin(ny * 4.0 + nx * 12.3) * (sin(nx * 5.0) > 0.0 ? 1.0 : 0.0) - 0.5;`,

    // ============================================================
    // TRAMADOS EXPERIMENTALES
    // ============================================================

    'exp_truchet': `float tx = floor(nx);
float ty = floor(ny);
float fx = nx - tx;
float fy = ny - ty;
float val = sin(tx * 12.9898 + ty * 78.233) * 43758.5453;
bool rand = fract(val) > 0.5;
float dTruchet = rand ? (fx + fy - 1.0) : (fx - fy);
float width = 0.05 + 0.3 * luma;
float t = (abs(dTruchet) < width) ? -0.45 : 0.45;`,

    'exp_worley': `float xi = floor(nx);
float yi = floor(ny);
float xf = nx - xi;
float yf = ny - yi;
float minDist = 9.0;
for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
        float seed = (xi + float(i)) * 12.9898 + (yi + float(j)) * 78.233;
        float px = fract(sin(seed * 43758.5453));
        float py = fract(cos(seed * 73248.9876));
        float dx = float(i) + px - xf;
        float dy = float(j) + py - yf;
        float dVal = dx*dx + dy*dy;
        if (dVal < minDist) minDist = dVal;
    }
}
float t = (sqrt(minDist) > luma) ? 0.35 : -0.35;`,

    'exp_worley_manhattan': `float xi = floor(nx);
float yi = floor(ny);
float xf = nx - xi;
float yf = ny - yi;
float minDist = 9.0;
for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
        float seed = (xi + float(i)) * 12.9898 + (yi + float(j)) * 78.233;
        float px = fract(sin(seed * 43758.5453));
        float py = fract(cos(seed * 73248.9876));
        float dx = abs(float(i) + px - xf);
        float dy = abs(float(j) + py - yf);
        float dVal = dx + dy;
        if (dVal < minDist) minDist = dVal;
    }
}
float t = (minDist > luma * 1.4) ? 0.35 : -0.35;`,

    'exp_worley_chebyshev': `float xi = floor(nx);
float yi = floor(ny);
float xf = nx - xi;
float yf = ny - yi;
float minDist = 9.0;
for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
        float seed = (xi + float(i)) * 12.9898 + (yi + float(j)) * 78.233;
        float px = fract(sin(seed * 43758.5453));
        float py = fract(cos(seed * 73248.9876));
        float dx = abs(float(i) + px - xf);
        float dy = abs(float(j) + py - yf);
        float dVal = max(dx, dy);
        if (dVal < minDist) minDist = dVal;
    }
}
float t = (minDist > luma) ? 0.35 : -0.35;`,

    'exp_maze': `float tx = floor(nx * 0.8);
float ty = floor(ny * 0.8);
float fx = nx * 0.8 - tx;
float fy = ny * 0.8 - ty;
float seed = tx * 15.23 + ty * 34.12;
float rand = fract(sin(seed * 43758.5453));
float dLine = 0.0;
if (rand < 0.25) dLine = fx;
else if (rand < 0.5) dLine = fy;
else if (rand < 0.75) dLine = fx - fy;
else dLine = fx + fy - 1.0;
float t = (abs(dLine) < 0.05 + 0.2 * luma) ? -0.4 : 0.4;`,

    'exp_binary_carpet': `float bx = floor(nx * 2.0);
float by = floor(ny * 2.0);
float xval = float(int(bx) ^ int(by)) - 12.0 * floor(float(int(bx) ^ int(by)) / 12.0);
float t = ((xval / 12.0) < luma) ? -0.45 : 0.45;`,

    'exp_binary_mod': `float bx = floor(nx * 2.0);
float by = floor(ny * 2.0);
float xval = mod(bx * by, 17.0);
float t = ((xval / 17.0) < luma) ? -0.45 : 0.45;`,

    'exp_ascii_cross': `float fx = mod(nx, 1.0) - 0.5;
float fy = mod(ny, 1.0) - 0.5;
float crossSize = 0.05 + 0.45 * (1.0 - luma);
bool insideCross = (abs(fx) < 0.1 && abs(fy) < crossSize) || (abs(fy) < 0.1 && abs(fx) < crossSize);
float t = insideCross ? -0.45 : 0.45;`,

    'exp_ascii_dot': `float fx = mod(nx, 1.0) - 0.5;
float fy = mod(ny, 1.0) - 0.5;
float rad = sqrt(fx*fx + fy*fy);
float maxRad = 0.5 * (1.0 - luma);
float t = (rad < maxRad) ? -0.45 : 0.45;`,

    'exp_ascii_square': `float fx = abs(mod(nx, 1.0) - 0.5);
float fy = abs(mod(ny, 1.0) - 0.5);
float maxSide = max(fx, fy);
float target = 0.5 * (1.0 - luma);
float t = (abs(maxSide - target) < 0.08) ? -0.4 : 0.4;`,

    'exp_heart': `float fx = (mod(nx, 1.0) - 0.5) * 2.5;
float fy = -(mod(ny, 1.0) - 0.5) * 2.5 - 0.25;
float hEq = (fx*fx + fy*fy - 1.0);
float heartVal = hEq*hEq*hEq - fx*fx*fy*fy*fy;
float hThresh = 0.25 * (1.0 - luma);
float t = (heartVal < hThresh) ? -0.45 : 0.45;`,

    'exp_star_5p': `float fx = mod(nx, 1.0) - 0.5;
float fy = mod(ny, 1.0) - 0.5;
float rVal = sqrt(fx*fx + fy*fy);
float aVal = atan(fy, fx);
float starR = 0.1 + 0.35 * (1.0 - luma) * (cos(aVal * 5.0) * 0.3 + 0.7);
float t = (rVal < starR) ? -0.45 : 0.45;`,

    'exp_chromatic_halftone': `float nxR = (x + 3.0) / u_pScale;
float nyR = (y + 1.0) / u_pScale;
float nxG = x / u_pScale;
float nyG = (y + 4.0) / u_pScale;
float nxB = (x - 3.0) / u_pScale;
float nyB = (y - 2.0) / u_pScale;
tr = (sin(nxR * 3.14159265359) * sin(nyR * 3.14159265359)) / 2.0;
tg = (sin(nxG * 3.14159265359) * sin(nyG * 3.14159265359)) / 2.0;
tb = (sin(nxB * 3.14159265359) * sin(nyB * 3.14159265359)) / 2.0;
useChannel = 1;`,

    'exp_chromatic_wave': `tr = sin(nx * 1.8) * 0.4;
tg = sin(nx * 1.8 + 2.0) * 0.4;
tb = sin(nx * 1.8 + 4.0) * 0.4;
useChannel = 1;`,

    'exp_glitch_v': `float strip = floor(nx / 3.0);
float rand = fract(sin(strip * 45.12) * 43758.5453);
float offset = rand - 0.5;
float t = (sin((ny + offset * 5.0 * luma) * 3.14159265359)) / 2.0;`,

    'exp_glitch_h': `float strip = floor(ny / 3.0);
float rand = fract(sin(strip * 78.43) * 43758.5453);
float offset = rand - 0.5;
float t = (sin((nx + offset * 5.0 * luma) * 3.14159265359)) / 2.0;`,

    'exp_crt_scan': `float normY = (y / u_h) - 0.5;
float normX = (x / u_w) - 0.5;
float dist2 = normX*normX + normY*normY;
float distortFactor = 1.0 + 0.12 * dist2;
float cury = (normY * distortFactor + 0.5) * u_h;
float sc = sin((cury / u_pScale) * 3.14159265359 * 2.0);
float t = sc * 0.35 + 0.1 * (luma - 0.5);`,

    'exp_lcd_triad': `float sub = mod(floor(x), 3.0);
float wave = sin(y * 3.14159265359 / 1.5) * 0.15;
tr = (sub == 0.0) ? -0.45 + wave : 0.45;
tg = (sub == 1.0) ? -0.45 + wave : 0.45;
tb = (sub == 2.0) ? -0.45 + wave : 0.45;
useChannel = 1;`,

    'exp_halftone_cmyk': `float lC = (0.299 * (255.0 - r)) / 255.0;
float lM = (0.587 * (255.0 - g)) / 255.0;
float lY = (0.114 * (255.0 - b)) / 255.0;
float lK = 1.0 - luma;
float thetaC = 15.0 * 3.14159265359 / 180.0;
float rxC = x * cos(thetaC) - y * sin(thetaC);
float ryC = x * sin(thetaC) + y * cos(thetaC);
float tC = (sin(rxC / u_pScale * 3.14159265359) * sin(ryC / u_pScale * 3.14159265359)) / 2.0;
float thetaM = 75.0 * 3.14159265359 / 180.0;
float rxM = x * cos(thetaM) - y * sin(thetaM);
float ryM = x * sin(thetaM) + y * cos(thetaM);
float tM = (sin(rxM / u_pScale * 3.14159265359) * sin(ryM / u_pScale * 3.14159265359)) / 2.0;
float thetaY = 0.0;
float rxY = x;
float ryY = y;
float tY = (sin(rxY / u_pScale * 3.14159265359) * sin(ryY / u_pScale * 3.14159265359)) / 2.0;
float thetaK = 45.0 * 3.14159265359 / 180.0;
float rxK = x * cos(thetaK) - y * sin(thetaK);
float ryK = x * sin(thetaK) + y * cos(thetaK);
float tK = (sin(rxK / u_pScale * 3.14159265359) * sin(ryK / u_pScale * 3.14159265359)) / 2.0;
float dc = tC > (lC - 0.5) ? 0.3 : -0.3;
float dm = tM > (lM - 0.5) ? 0.3 : -0.3;
float dy = tY > (lY - 0.5) ? 0.3 : -0.3;
float dk = tK > (lK - 0.5) ? 0.45 : -0.45;
tr = dk + dc;
tg = dk + dm;
tb = dk + dy;
useChannel = 1;`,

    'exp_voronoi_manhattan': `float xi = floor(nx);
float yi = floor(ny);
float xf = nx - xi;
float yf = ny - yi;
float minDist1 = 9.0;
float minDist2 = 9.0;
for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
        float seed = (xi + float(i)) * 12.9898 + (yi + float(j)) * 78.233;
        float px = fract(sin(seed * 43758.5453));
        float py = fract(cos(seed * 73248.9876));
        float dx = abs(float(i) + px - xf);
        float dy = abs(float(j) + py - yf);
        float dVal = dx + dy;
        if (dVal < minDist1) { minDist2 = minDist1; minDist1 = dVal; }
        else if (dVal < minDist2) { minDist2 = dVal; }
    }
}
float t = (minDist2 - minDist1) - 0.5;`,

    'exp_voronoi_triangular': `float row = floor(ny * 1.1547);
float colShift = mod(row, 2.0) * 0.5;
float xi = floor(nx + colShift);
float yi = row;
float xf = (nx + colShift) - xi;
float yf = (ny * 1.1547) - yi;
float minDist = 9.0;
for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
        float seed = (xi + float(i)) * 12.9898 + (yi + float(j)) * 78.233;
        float px = fract(sin(seed * 43758.5453));
        float py = fract(cos(seed * 73248.9876));
        float dx = float(i) + px - xf;
        float dy = (float(j) + py - yf) / 1.1547;
        float dVal = dx*dx + dy*dy;
        if (dVal < minDist) minDist = dVal;
    }
}
float t = sqrt(minDist) - 0.4;`,

    'exp_chiral_wave': `float w1 = sin(dist * 2.0 + ang * 5.0);
float w2 = sin(dist * 2.0 - ang * 5.0);
float t = (w1 + w2) * 0.25;`,

    'exp_interlaced_cross': `float crossf = sin(nx * 1.5) * sin(ny * 1.5);
float ring = sin(dist * 4.0);
float t = (crossf * ring) * 0.4;`,

    'exp_digit_matrix': `float cellX = floor(nx * 1.5);
float cellY = floor(ny * 1.5);
float localX = nx * 1.5 - cellX;
float localY = ny * 1.5 - cellY;
float flow = sin(cellX * 17.13 + (y / 150.0)) * 10.0;
float stream = mod(cellY + flow, 10.0);
bool isDigit = stream < 4.0;
float charVal = fract(sin(cellX * 12.9898 + cellY * 78.233) * 43758.5453);
bool bit = charVal > 0.5;
float pixelVal = 0.0;
if (isDigit) {
    if (bit) {
        pixelVal = (abs(localX - 0.5) < 0.1 && localY > 0.1 && localY < 0.9) ? 1.0 : 0.0;
    } else {
        pixelVal = (abs(localX - 0.5) < 0.25 && abs(localY - 0.5) < 0.35 && !(abs(localX - 0.5) < 0.1 && abs(localY - 0.5) < 0.2)) ? 1.0 : 0.0;
    }
}
float t = (pixelVal > 0.5) ? -0.45 * luma : 0.45 * (1.0 - luma);`,

    'exp_letter_dither': `float lx = nx * 2.0;
float ly = ny * 2.0;
float cellXf = floor(lx);
float cellYf = floor(ly);
float fx = lx - cellXf;
float fy = ly - cellYf;
float cIndex = floor((1.0 - luma) * 5.0);
bool activeChar = false;
if (cIndex >= 1.0) {
    if (cIndex == 1.0) activeChar = (sqrt((fx-0.5)*(fx-0.5)+(fy-0.5)*(fy-0.5)) < 0.15);
    else if (cIndex == 2.0) activeChar = (sqrt((fx-0.5)*(fx-0.5)+(fy-0.5)*(fy-0.5)) < 0.3 && sqrt((fx-0.5)*(fx-0.5)+(fy-0.5)*(fy-0.5)) > 0.2);
    else if (cIndex == 3.0) activeChar = (abs(fx - 0.5) < 0.08 || abs(fy - 0.5) < 0.08);
    else if (cIndex == 4.0) activeChar = (abs(fx - fy) < 0.12 || abs(fx + fy - 1.0) < 0.12);
    else activeChar = (abs(fx - 0.5) < 0.12 || abs(fy - 0.5) < 0.12 || abs(fx - fy) < 0.12 || abs(fx + fy - 1.0) < 0.12);
}
float t = activeChar ? -0.45 : 0.45;`,

    'exp_bubble_wrap': `float fx = mod(nx, 1.0) - 0.5;
float fy = mod(ny, 1.0) - 0.5;
float rad = sqrt(fx*fx + fy*fy);
float highlight = (fx < 0.0 && fy < 0.0) ? (0.2 * (0.5 - rad)) : 0.0;
float border = (rad > 0.4 && rad < 0.45) ? 0.3 : 0.0;
float t = (rad < 0.4) ? -0.3 + highlight : 0.3 + border;`,

    'exp_scales_dragon': `float sy = ny * 1.5;
float row = floor(sy);
float colShift = mod(row, 2.0) * 0.5;
float sx = nx + colShift;
float fx = mod(sx, 1.0) - 0.5;
float fy = mod(sy, 1.0) - 0.5;
float rad = sqrt(fx*fx + (fy + 0.3)*(fy + 0.3));
float scaleVal = (rad < 0.5) ? -0.35 : 0.35;
float t = scaleVal + (luma - 0.5) * 0.2;`,

    'exp_weave_basket': `float tx = floor(nx / 2.0);
float ty = floor(ny / 2.0);
float fx = (nx / 2.0) - tx;
float fy = (ny / 2.0) - ty;
bool isVert = mod(tx + ty, 2.0) == 0.0;
float band = isVert ? sin(fx * 3.14159265359) : sin(fy * 3.14159265359);
float t = band * 0.4 + 0.1 * (luma - 0.5);`,

    'exp_polka_dots': `float fx = mod(nx, 1.0) - 0.5;
float fy = mod(ny, 1.0) - 0.5;
float rad = sqrt(fx*fx + fy*fy);
float dotRadius = 0.25;
float t = (rad < dotRadius) ? -0.45 + luma * 0.2 : 0.45 - (1.0 - luma) * 0.2;`,

    'exp_chevron': `float zig = abs(mod(nx + abs(mod(ny, 2.0) - 1.0), 1.0) - 0.5);
float t = (zig < 0.15) ? -0.4 : 0.4;`,

    'exp_hex_lattice': `float hx = nx * 1.5;
float hy = ny * 0.866;
float tx = floor(hx);
float ty = floor(hy);
float fx = hx - tx;
float fy = hy - ty;
float border = 0.0;
if (mod(tx + ty, 2.0) == 0.0) {
    border = abs(fx - fy);
} else {
    border = abs(fx + fy - 1.0);
}
float t = (border < 0.08) ? -0.4 : 0.4;`,

    'exp_celtic_knot': `float k1 = sin(nx * 1.5) * cos(ny * 1.5);
float k2 = sin(ny * 1.5) * cos(nx * 1.5);
float t = abs(k1 - k2) - 0.4;`,

    'exp_noise_comb': `float nVal = fract(sin(nx * 12.9898 + ny * 78.233) * 43758.5453);
float comb = sin(nx * 10.0) * cos(ny * 10.0);
float t = (nVal * comb) * 0.5;`,

    'exp_stripes_radial': `float rays = sin(ang * 12.0);
float t = rays * 0.4 + 0.1 * (luma - 0.5);`,

    'exp_stripes_spiral': `float spiral = sin(dist * 3.0 + ang * 4.0);
float t = spiral * 0.4 + 0.1 * (luma - 0.5);`,

    'exp_halftone_sine': `float t = (sin(nx * 3.14159265359) * cos(ny * 3.14159265359)) * 0.5;`,

    'exp_fractal_noise': `float n1 = sin(nx * 1.0) * cos(ny * 1.0);
float n2 = sin(nx * 2.0) * cos(ny * 2.0);
float n3 = sin(nx * 4.0) * cos(ny * 4.0);
float t = (n1 * 0.5 + n2 * 0.3 + n3 * 0.2) * 0.5;`,

    'exp_tri_grid': `float g1 = sin(nx * 2.0);
float g2 = sin((nx * 0.5 + ny * 0.866) * 2.0);
float g3 = sin((nx * 0.5 - ny * 0.866) * 2.0);
float t = max(g1, max(g2, g3)) * 0.4;`,

    'exp_greek_key': `float tx = floor(nx);
float ty = floor(ny);
float fx = nx - tx;
float fy = ny - ty;
bool key = (fx > 0.2 && fx < 0.8 && fy > 0.2 && fy < 0.8) && !(fx > 0.4 && fx < 0.6 && fy > 0.4 && fy < 0.6);
float t = key ? -0.45 : 0.45;`,

    'exp_houndstooth': `float hx = mod(floor(nx * 1.5), 4.0);
float hy = mod(floor(ny * 1.5), 4.0);
bool inHound = ((hx < 2.0 && hy < 2.0) || (hx >= 2.0 && hy >= 2.0 && (hx - 2.0 == hy - 2.0 || hx == 3.0 || hy == 3.0)));
float t = inHound ? -0.4 : 0.4;`,

    'exp_checkered_shift': `float shift = sin(ny * 0.5) * 1.5;
bool check = mod(floor(nx + shift) + floor(ny), 2.0) == 0.0;
float t = check ? -0.4 : 0.4;`,

    'exp_ascii_hash': `float fx = mod(nx, 1.0);
float fy = mod(ny, 1.0);
bool isHash = (abs(fx - 0.3) < 0.08 || abs(fx - 0.7) < 0.08 || abs(fy - 0.3) < 0.08 || abs(fy - 0.7) < 0.08);
float t = isHash ? -0.4 : 0.4;`,

    'exp_ascii_at': `float fx = mod(nx, 1.0) - 0.5;
float fy = mod(ny, 1.0) - 0.5;
float rad = sqrt(fx*fx + fy*fy);
bool isAt = (rad > 0.3 && rad < 0.45) || (rad < 0.15) || (abs(fx) < 0.05 && fy > 0.0);
float t = isAt ? -0.45 : 0.45;`,

    'exp_crescent_moon': `float fx = mod(nx, 1.0) - 0.5;
float fy = mod(ny, 1.0) - 0.5;
float r1 = sqrt(fx*fx + fy*fy);
float r2 = sqrt((fx - 0.15)*(fx - 0.15) + fy*fy);
float t = (r1 < 0.35 && r2 > 0.3) ? -0.4 : 0.4;`,

    'exp_diamond_ring': `float fx = mod(nx, 1.0) - 0.5;
float fy = mod(ny, 1.0) - 0.5;
float diamond = abs(fx) + abs(fy);
float circle = sqrt(fx*fx + fy*fy);
float t = (diamond < 0.4 && circle > 0.2) ? -0.4 : 0.4;`,

    'exp_honeycomb': `float hx = nx * 1.5;
float hy = ny * 0.866;
float tx = floor(hx);
float ty = floor(hy);
float fx = hx - tx;
float fy = hy - ty;
float distHex = (mod(tx + ty, 2.0) == 0.0) ? abs(fx - fy) : abs(fx + fy - 1.0);
float t = (distHex < 0.05 || (distHex > 0.3 && distHex < 0.35)) ? -0.4 : 0.4;`,

    'exp_dune': `float dVal = sin(nx * 0.8 + sin(ny * 0.5) * 3.0);
float t = dVal * 0.4 + 0.1 * (luma - 0.5);`,

    'exp_camouflage': `float c1 = sin(nx * 0.5) * sin(ny * 0.5);
float c2 = sin(nx * 0.2 + 1.0) * cos(ny * 0.3);
float mixf = c1 + c2;
float t = (mixf > luma - 0.5) ? -0.4 : 0.4;`,

    'exp_circuit_lines': `float cx2 = floor(nx);
float cy2 = floor(ny);
float fx = nx - cx2;
float fy = ny - cy2;
float seed = cx2 * 19.31 + cy2 * 7.19;
float rand = fract(sin(seed * 43758.5453));
bool inLine = false;
if (rand < 0.3) inLine = (abs(fx - 0.5) < 0.08 || abs(fy - 0.5) < 0.08);
else if (rand < 0.6) inLine = (abs(fx - fy) < 0.08);
else inLine = (sqrt((fx-0.5)*(fx-0.5) + (fy-0.5)*(fy-0.5)) < 0.15);
float t = inLine ? -0.45 : 0.45;`,

    'exp_crosshairs': `float fx = mod(nx, 2.0) - 1.0;
float fy = mod(ny, 2.0) - 1.0;
float rad = sqrt(fx*fx + fy*fy);
bool isCross = (abs(fx) < 0.02 && abs(fy) < 0.8) || (abs(fy) < 0.02 && abs(fx) < 0.8) || (abs(rad - 0.6) < 0.03);
float t = isCross ? -0.45 : 0.45;`,

    // ============================================================
    // FRACTALES Y CAOS
    // ============================================================

    'frac_mandelbrot': `float zx = 0.0, zy = 0.0;
float cr = sin(cx) * 1.3, ci = sin(cy) * 1.3;
int i = 0;
for (; i < 10; i++) {
    float xt = zx*zx - zy*zy + cr;
    zy = 2.0*zx*zy + ci;
    zx = xt;
    if (zx*zx + zy*zy > 4.0) break;
}
float t = (float(i) / 10.0) - 0.5;`,

    'frac_mandelcubic': `float zx = 0.0, zy = 0.0;
float cr = sin(cx * 0.9) * 1.4, ci = cos(cy * 0.9) * 1.4;
int i = 0;
for (; i < 10; i++) {
    float xt = zx*zx*zx - 3.0*zx*zy*zy + cr;
    zy = 3.0*zx*zx*zy - zy*zy*zy + ci;
    zx = xt;
    if (zx*zx + zy*zy > 4.0) break;
}
float t = (float(i) / 10.0) - 0.5;`,

    'frac_mandel5': `float zx = 0.0, zy = 0.0;
float cr = cos(cx * 1.1) * 1.2, ci = sin(cy * 1.1) * 1.2;
int i = 0;
for (; i < 8; i++) {
    float x2 = zx*zx; float y2 = zy*zy;
    if (x2 + y2 > 4.0) break;
    float xt = zx*x2*x2 - 10.0*zx*x2*y2 + 5.0*zx*y2*y2 + cr;
    zy = 5.0*x2*x2*zy - 10.0*x2*zy*y2 + zy*y2*y2 + ci;
    zx = xt;
}
float t = (float(i) / 8.0) - 0.5;`,

    'frac_julia': `float zx = sin(cx) * 1.5, zy = cos(cy) * 1.5;
float cr = -0.7, ci = 0.27015;
int i = 0;
for (; i < 10; i++) {
    float xt = zx*zx - zy*zy + cr;
    zy = 2.0*zx*zy + ci;
    zx = xt;
    if (zx*zx + zy*zy > 4.0) break;
}
float t = (float(i) / 10.0) - 0.5;`,

    'frac_juliasin': `float zx = sin(cx * 0.8) * 2.0, zy = sin(cy * 0.8) * 2.0;
float cr = 1.0, ci = 0.3;
int i = 0;
for (; i < 8; i++) {
    float ey = exp(zy);
    float e_y = 1.0 / ey;
    float cosh = (ey + e_y) * 0.5;
    float sinh = (ey - e_y) * 0.5;
    float sx = sin(zx) * cosh;
    float sy = cos(zx) * sinh;
    float xt = sx * cr - sy * ci;
    zy = sx * ci + sy * cr;
    zx = xt;
    if (zx*zx + zy*zy > 100.0) break;
}
float t = (float(i) / 8.0) - 0.5;`,

    'frac_juliacos': `float zx = cos(cx * 0.7) * 1.8, zy = cos(cy * 0.7) * 1.8;
float cr = 1.0, ci = 0.2;
int i = 0;
for (; i < 8; i++) {
    float ey = exp(zy);
    float e_y = 1.0 / ey;
    float cosh = (ey + e_y) * 0.5;
    float sinh = (ey - e_y) * 0.5;
    float sx = cos(zx) * cosh;
    float sy = -sin(zx) * sinh;
    float xt = sx * cr - sy * ci;
    zy = sx * ci + sy * cr;
    zx = xt;
    if (zx*zx + zy*zy > 100.0) break;
}
float t = (float(i) / 8.0) - 0.5;`,

    'frac_juliaburningship': `float zx = sin(cx) * 1.3, zy = cos(cy) * 1.3;
float cr = -0.45, ci = 0.56;
int i = 0;
for (; i < 10; i++) {
    float ax = abs(zx);
    float ay = abs(zy);
    float xt = ax*ax - ay*ay + cr;
    zy = 2.0*ax*ay + ci;
    zx = xt;
    if (zx*zx + zy*zy > 4.0) break;
}
float t = (float(i) / 10.0) - 0.5;`,

    'frac_burningship': `float zx = 0.0, zy = 0.0;
float cr = sin(cx) * 1.5 - 0.45, ci = cos(cy) * 1.5 + 0.50;
int i = 0;
for (; i < 10; i++) {
    float ax = abs(zx);
    float ay = abs(zy);
    float xt = ax*ax - ay*ay + cr;
    zy = -2.0*ax*ay + ci;
    zx = xt;
    if (zx*zx + zy*zy > 4.0) break;
}
float t = (float(i) / 10.0) - 0.5;`,

    'frac_tricorn': `float zx = 0.0, zy = 0.0;
float cr = sin(cx * 1.2) * 1.3, ci = cos(cy * 1.2) * 1.3;
int i = 0;
for (; i < 10; i++) {
    float xt = zx*zx - zy*zy + cr;
    zy = -2.0*zx*zy + ci;
    zx = xt;
    if (zx*zx + zy*zy > 4.0) break;
}
float t = (float(i) / 10.0) - 0.5;`,

    'frac_buffalo': `float zx = 0.0, zy = 0.0;
float cr = abs(sin(cx)) * 1.4, ci = abs(cos(cy)) * 1.4;
int i = 0;
for (; i < 8; i++) {
    float ax = abs(zx);
    float ay = abs(zy);
    float xt = abs(ax*ax - ay*ay - ax) + cr;
    zy = abs(2.0*ax*ay - ay) + ci;
    zx = xt;
    if (zx*zx + zy*zy > 4.0) break;
}
float t = (float(i) / 8.0) - 0.5;`,

    'frac_celtic': `float zx = 0.0, zy = 0.0;
float cr = sin(cx) * 1.4, ci = sin(cy) * 1.4;
int i = 0;
for (; i < 10; i++) {
    float xt = abs(zx*zx - zy*zy) + cr;
    zy = 2.0*zx*zy + ci;
    zx = xt;
    if (zx*zx + zy*zy > 4.0) break;
}
float t = (float(i) / 10.0) - 0.5;`,

    'frac_feather': `float zx = sin(cx * 1.3) * 1.8, zy = cos(cy * 1.3) * 1.8;
float cr = -0.8, ci = 0.2;
int i = 0;
for (; i < 8; i++) {
    float x2 = zx*zx; float y2 = zy*zy;
    float d = (1.0 + x2 - y2)*(1.0 + x2 - y2) + 4.0*x2*y2;
    if (d < 1e-6) d = 1e-6;
    float numR = zx*x2 - 3.0*zx*y2;
    float numI = 3.0*x2*zy - zy*y2;
    float denR = 1.0 + x2 - y2;
    float denI = 2.0*zx*zy;
    float xt = (numR*denR + numI*denI)/d + cr;
    zy = (numI*denR - numR*denI)/d + ci;
    zx = xt;
    if (zx*zx + zy*zy > 10.0) break;
}
float t = (float(i) / 8.0) - 0.5;`,

    'frac_henon': `float xk = sin(cx) * 1.2, yk = cos(cy) * 1.2;
for (int i = 0; i < 8; i++) {
    float nextX = 1.0 - 1.4*xk*xk + yk;
    yk = 0.3*xk;
    xk = nextX;
}
float t = (sin(xk * 5.0) * cos(yk * 5.0)) * 0.5;`,

    'frac_clifford': `float xk = sin(cx) * 2.0, yk = cos(cy) * 2.0;
for (int i = 0; i < 8; i++) {
    float nextX = sin(-1.4*yk) + cos(-1.4*xk);
    yk = sin(1.6*xk) + 0.7*cos(1.6*yk);
    xk = nextX;
}
float t = (sin(xk * 4.0) * cos(yk * 4.0)) * 0.5;`,

    'frac_dejong': `float xk = sin(cx * 1.5) * 2.0, yk = cos(cy * 1.5) * 2.0;
for (int i = 0; i < 8; i++) {
    float nextX = sin(1.4*yk) - cos(-2.3*xk);
    yk = sin(2.4*xk) - cos(-2.1*yk);
    xk = nextX;
}
float t = (sin(xk * 3.0) + cos(yk * 3.0)) * 0.25;`,

    'frac_ikeda': `float xk = sin(cx) * 1.5, yk = cos(cy) * 1.5;
for (int i = 0; i < 6; i++) {
    float d = 1.0 + xk*xk + yk*yk;
    float tn = 0.4 - 6.0 / d;
    float cs = cos(tn);
    float sn = sin(tn);
    float nextX = 1.0 + 0.9 * (xk * cs - yk * sn);
    yk = 0.9 * (xk * sn + yk * cs);
    xk = nextX;
}
float t = (sin(xk * 2.5) * cos(yk * 2.5)) * 0.5;`,

    'frac_lorenz': `float xk = sin(cx) * 10.0, yk = cos(cy) * 10.0, zk = 10.0 + sin(cx + cy) * 5.0;
float dt = 0.02;
for (int i = 0; i < 8; i++) {
    float dx = 10.0 * (yk - xk);
    float dy = xk * (28.0 - zk) - yk;
    float dz = xk * yk - 2.666 * zk;
    xk += dx * dt;
    yk += dy * dt;
    zk += dz * dt;
}
float t = (sin(xk * 0.4) * cos(yk * 0.4)) * 0.5;`,

    'frac_duffing': `float xk = sin(cx) * 2.0, yk = cos(cy) * 2.0;
for (int i = 0; i < 8; i++) {
    float nextX = yk;
    yk = -0.2 * xk + 2.75 * yk - yk*yk*yk;
    xk = nextX;
}
float t = (sin(xk * 2.5) * cos(yk * 2.5)) * 0.5;`,

    'frac_tinkerbell': `float xk = sin(cx) * 1.0, yk = cos(cy) * 1.0;
for (int i = 0; i < 8; i++) {
    float nextX = xk*xk - yk*yk + 0.9*xk - 0.6013*yk;
    yk = 2.0*xk*yk + 2.0*xk + 0.5*yk;
    xk = nextX;
}
float t = (sin(xk * 3.0) * cos(yk * 3.0)) * 0.5;`,

    'frac_chirikov': `float theta = mod(cx, 2.0 * 3.14159265359);
float p = mod(cy, 2.0 * 3.14159265359);
if (theta < 0.0) theta += 2.0 * 3.14159265359;
if (p < 0.0) p += 2.0 * 3.14159265359;
for (int i = 0; i < 8; i++) {
    p = mod(p + 0.9716 * sin(theta), 2.0 * 3.14159265359);
    theta = mod(theta + p, 2.0 * 3.14159265359);
}
float t = max(-0.5, min(0.5, (theta / 3.14159265359 - 1.0) * 0.5));`,

    'frac_gumowskimira': `float xk = sin(cx) * 1.5, yk = cos(cy) * 1.5;
for (int i = 0; i < 6; i++) {
    float den = 1.0 + xk*xk;
    float fx = 0.3 * xk + (1.4 * xk * xk) / den;
    float nextX = 0.99 * yk + fx;
    float den2 = 1.0 + nextX*nextX;
    float fx2 = 0.3 * nextX + (1.4 * nextX * nextX) / den2;
    yk = -xk + fx2;
    xk = nextX;
}
float t = (sin(xk * 2.8) * cos(yk * 2.8)) * 0.5;`,

    'frac_martin': `float xk = sin(cx) * 3.0, yk = cos(cy) * 3.0;
for (int i = 0; i < 8; i++) {
    float nextX = yk - sin(xk);
    yk = 2.0 - xk;
    xk = nextX;
}
float t = (sin(xk * 1.5) * cos(yk * 1.5)) * 0.5;`,

    'frac_symmetricicon': `float xk = sin(cx) * 2.5, yk = cos(cy) * 2.5;
for (int i = 0; i < 8; i++) {
    float r2 = xk*xk + yk*yk;
    float factor = -2.5 + r2;
    float nextX = factor * xk + 0.2 * (xk*xk - yk*yk);
    yk = factor * yk + 0.4 * xk * yk;
    xk = nextX;
    if (r2 > 10.0) break;
}
float t = (sin(xk * 1.8) * cos(yk * 1.8)) * 0.5;`,

    'frac_svensson': `float xk = sin(cx) * 1.5, yk = cos(cy) * 1.5;
for (int i = 0; i < 8; i++) {
    float nextX = -1.2 * sin(1.4 * xk) - sin(1.56 * yk);
    yk = 1.4 * cos(1.4 * xk) + cos(1.56 * yk);
    xk = nextX;
}
float t = (sin(xk * 2.5) * cos(yk * 2.5)) * 0.5;`,

    'frac_kingsdream': `float xk = sin(cx * 1.2) * 1.5, yk = cos(cy * 1.2) * 1.5;
for (int i = 0; i < 8; i++) {
    float nextX = sin(-2.0 * yk) + 1.2 * sin(-2.0 * xk);
    yk = sin(-2.0 * xk) + 1.2 * sin(-2.0 * yk);
    xk = nextX;
}
float t = (sin(xk * 2.2) * cos(yk * 2.2)) * 0.5;`,

    'frac_hopalong': `float xk = sin(cx) * 4.0, yk = cos(cy) * 4.0;
for (int i = 0; i < 8; i++) {
    float nextX = yk - sign(xk) * sqrt(abs(xk));
    yk = 2.0 - xk;
    xk = nextX;
}
float t = (sin(xk * 1.2) * cos(yk * 1.2)) * 0.5;`,

    'frac_gingerbreadman': `float xk = sin(cx) * 3.0, yk = cos(cy) * 3.0;
for (int i = 0; i < 8; i++) {
    float nextX = 1.0 - yk + abs(xk);
    yk = xk;
    xk = nextX;
}
float t = (sin(xk * 0.8) * cos(yk * 0.8)) * 0.5;`,

    'frac_rossler': `float xk = sin(cx) * 5.0, yk = cos(cy) * 5.0, zk = 0.2;
float dt = 0.05;
for (int i = 0; i < 8; i++) {
    float dx = -yk - zk;
    float dy = xk + 0.2 * yk;
    float dz = 0.2 + zk * (xk - 5.7);
    xk += dx * dt;
    yk += dy * dt;
    zk += dz * dt;
}
float t = (sin(xk * 1.5) * cos(yk * 1.5)) * 0.5;`,

    'frac_newton3': `float zx = sin(cx * 1.2) * 2.0, zy = cos(cy * 1.2) * 2.0;
for (int i = 0; i < 8; i++) {
    float x2 = zx*zx; float y2 = zy*zy;
    float d = 3.0 * (x2 + y2) * (x2 + y2);
    if (d < 1e-6) d = 1e-6;
    float numR = 2.0 * (zx*x2 - 3.0*zx*y2) + 1.0;
    float numI = 2.0 * (3.0*x2*zy - zy*y2);
    float denR = 3.0 * (x2 - y2);
    float denI = 6.0 * zx * zy;
    float xt = (numR*denR + numI*denI)/d;
    zy = (numI*denR - numR*denI)/d;
    zx = xt;
}
float t = (atan(zy, zx) / 3.14159265359) * 0.5;`,

    'frac_newton4': `float zx = sin(cx * 1.1) * 1.8, zy = cos(cy * 1.1) * 1.8;
for (int i = 0; i < 8; i++) {
    float x2 = zx*zx; float y2 = zy*zy;
    float r2 = x2 + y2;
    float d = 4.0 * r2 * r2 * r2;
    if (d < 1e-6) d = 1e-6;
    float z4r = x2*x2 - 6.0*x2*y2 + y2*y2;
    float z4i = 4.0*zx*zy*(x2 - y2);
    float numR = 3.0 * z4r + 1.0;
    float numI = 3.0 * z4i;
    float denR = 4.0 * (zx*x2 - 3.0*zx*y2);
    float denI = 4.0 * (3.0*x2*zy - zy*y2);
    float xt = (numR*denR + numI*denI)/d;
    zy = (numI*denR - numR*denI)/d;
    zx = xt;
}
float t = (atan(zy, zx) / 3.14159265359) * 0.5;`,

    'frac_newtonsin': `float zx = sin(cx * 0.9) * 2.5, zy = cos(cy * 0.9) * 2.5;
for (int i = 0; i < 6; i++) {
    float ey = exp(zy);
    float e_y = 1.0 / ey;
    float cosh = (ey + e_y) * 0.5;
    float sinh = (ey - e_y) * 0.5;
    float szr = sin(zx) * cosh - 1.0;
    float szi = cos(zx) * sinh;
    float czr = cos(zx) * cosh;
    float czi = -sin(zx) * sinh;
    float d = czr*czr + czi*czi;
    if (d < 1e-6) d = 1e-6;
    float qr = (szr*czr + szi*czi)/d;
    float qi = (szi*czr - szr*czi)/d;
    zx = zx - qr;
    zy = zy - qi;
}
float t = (sin(zx) * cos(zy)) * 0.5;`,

    'frac_novamandelbrot': `float zx = 1.0, zy = 0.0;
float cr = sin(cx) * 1.5, ci = cos(cy) * 1.5;
int i = 0;
for (; i < 8; i++) {
    float x2 = zx*zx; float y2 = zy*zy;
    float d = 3.0 * (x2 + y2) * (x2 + y2);
    if (d < 1e-6) d = 1e-6;
    float numR = zx*x2 - 3.0*zx*y2 - 1.0;
    float numI = 3.0*x2*zy - zy*y2;
    float denR = 3.0 * (x2 - y2);
    float denI = 6.0 * zx * zy;
    float xt = zx - (numR*denR + numI*denI)/d + cr;
    zy = zy - (numI*denR - numR*denI)/d + ci;
    zx = xt;
    if (zx*zx + zy*zy > 10.0) break;
}
float t = (float(i) / 8.0) - 0.5;`,

    'frac_novajulia': `float zx = sin(cx) * 1.5, zy = cos(cy) * 1.5;
float cr = -0.2, ci = 0.65;
int i = 0;
for (; i < 8; i++) {
    float x2 = zx*zx; float y2 = zy*zy;
    float d = 3.0 * (x2 + y2) * (x2 + y2);
    if (d < 1e-6) d = 1e-6;
    float numR = zx*x2 - 3.0*zx*y2 - 1.0;
    float numI = 3.0*x2*zy - zy*y2;
    float denR = 3.0 * (x2 - y2);
    float denI = 6.0 * zx * zy;
    float xt = zx - (numR*denR + numI*denI)/d + cr;
    zy = zy - (numI*denR - numR*denI)/d + ci;
    zx = xt;
    if (zx*zx + zy*zy > 10.0) break;
}
float t = (float(i) / 8.0) - 0.5;`,

    'frac_secante': `float zx = sin(cx) * 1.5, zy = cos(cy) * 1.5;
float px = zx + 0.05, py = zy + 0.05;
for (int i = 0; i < 6; i++) {
    float fzx = zx*zx*zx - 3.0*zx*zy*zy - 1.0;
    float fzy = 3.0*zx*zx*zy - zy*zy*zy;
    float fpx = px*px*px - 3.0*px*py*py - 1.0;
    float fpy = 3.0*px*px*py - py*py*py;
    float diff_fx = fzx - fpx;
    float diff_fy = fzy - fpy;
    float d = diff_fx*diff_fx + diff_fy*diff_fy;
    if (d < 1e-6) d = 1e-6;
    float dx = zx - px;
    float dy = zy - py;
    float numR = fzx*dx - fzy*dy;
    float numI = fzx*dy + fzy*dx;
    float nextX = zx - (numR*diff_fx + numI*diff_fy)/d;
    float nextY = zy - (numI*diff_fx - numR*diff_fy)/d;
    px = zx; py = zy;
    zx = nextX; zy = nextY;
}
float t = (atan(zy, zx) / 3.14159265359) * 0.5;`,

    'frac_lyapunov': `float a = 2.0 + abs(sin(cx) * 2.0);
float b = 2.0 + abs(cos(cy) * 2.0);
float x0 = 0.5;
float sum = 0.0;
for (int i = 0; i < 8; i++) {
    float r = (mod(float(i), 2.0) == 0.0) ? a : b;
    float deriv = abs(r * (1.0 - 2.0 * x0));
    sum += log(deriv + 1e-6);
    x0 = r * x0 * (1.0 - x0);
}
float t = max(-0.5, min(0.5, sum / 16.0));`,

    'frac_popcorn': `float zx = sin(cx) * 3.0, zy = cos(cy) * 3.0;
for (int i = 0; i < 6; i++) {
    float nextX = zx - 0.05 * sin(zy + tan(3.0 * zy));
    zy = zy - 0.05 * sin(zx + tan(3.0 * zx));
    zx = nextX;
}
float t = (sin(zx * 5.0) * cos(zy * 5.0)) * 0.5;`,

    'frac_fbm': `float value = 0.0;
float amplitude = 0.5;
float frequency = 1.0;
for (int i = 0; i < 4; i++) {
    float val = sin(nx * frequency * 1.5) * cos(ny * frequency * 1.5);
    value += amplitude * val;
    frequency *= 2.0;
    amplitude *= 0.5;
}
float t = value;`,

    'frac_cantordust': `float valX = abs(mod(sin(cx * 0.5), 1.0));
float valY = abs(mod(cos(cy * 0.5), 1.0));
bool inCantor = true;
for (int i = 0; i < 5; i++) {
    if ((valX > 0.3333 && valX < 0.6666) || (valY > 0.3333 && valY < 0.6666)) {
        inCantor = false;
        break;
    }
    valX = mod(valX * 3.0, 1.0);
    valY = mod(valY * 3.0, 1.0);
}
float t = inCantor ? 0.25 : -0.25;`,

    'frac_sierpinskicarpet': `float valX = abs(mod(sin(nx * 0.2), 1.0));
float valY = abs(mod(cos(ny * 0.2), 1.0));
bool inCarpet = true;
for (int i = 0; i < 5; i++) {
    float cfx = floor(valX * 3.0);
    float cfy = floor(valY * 3.0);
    if (cfx == 1.0 && cfy == 1.0) {
        inCarpet = false;
        break;
    }
    valX = mod(valX * 3.0, 1.0);
    valY = mod(valY * 3.0, 1.0);
}
float t = inCarpet ? 0.25 : -0.25;`,

    'frac_sierpinskingasket': `float xi = floor(abs(mod(sin(nx * 0.5) * 16.0, 16.0)));
float yi = floor(abs(mod(cos(ny * 0.5) * 16.0, 16.0)));
float t = ((int(xi) & int(yi)) == 0) ? 0.25 : -0.25;`,

    'frac_mandelorbittrap': `float zx = 0.0, zy = 0.0;
float cr = sin(cx) * 1.3, ci = cos(cy) * 1.3;
float minDist = 1e9;
for (int i = 0; i < 10; i++) {
    float xt = zx*zx - zy*zy + cr;
    zy = 2.0*zx*zy + ci;
    zx = xt;
    float d = abs(zx - zy);
    if (d < minDist) minDist = d;
    if (zx*zx + zy*zy > 4.0) break;
}
float t = min(1.0, minDist) - 0.5;`,

    'frac_juliaorbittrap': `float zx = sin(cx) * 1.4, zy = cos(cy) * 1.4;
float cr = -0.8, ci = 0.156;
float minDist = 1e9;
for (int i = 0; i < 10; i++) {
    float xt = zx*zx - zy*zy + cr;
    zy = 2.0*zx*zy + ci;
    zx = xt;
    float d = sqrt(zx*zx + zy*zy);
    if (d < minDist) minDist = d;
    if (zx*zx + zy*zy > 4.0) break;
}
float t = min(1.0, minDist) - 0.5;`,

    'frac_cliffordorbittrap': `float xk = sin(cx) * 2.0, yk = cos(cy) * 2.0;
float minDist = 1e9;
for (int i = 0; i < 8; i++) {
    float nextX = sin(-1.4*yk) + cos(-1.4*xk);
    yk = sin(1.6*xk) + 0.7*cos(1.6*yk);
    xk = nextX;
    float d = abs(xk + yk);
    if (d < minDist) minDist = d;
}
float t = min(1.0, minDist) - 0.5;`,

    'frac_henonorbittrap': `float xk = sin(cx) * 1.2, yk = cos(cy) * 1.2;
float minDist = 1e9;
for (int i = 0; i < 8; i++) {
    float nextX = 1.0 - 1.4*xk*xk + yk;
    yk = 0.3*xk;
    xk = nextX;
    float d = sqrt(xk*xk + yk*yk);
    if (d < minDist) minDist = d;
}
float t = min(1.0, minDist) - 0.5;`,

    'frac_logistic': `float r = 3.5 + abs(sin(cx) * 0.49);
float x0 = abs(mod(cos(cy), 1.0));
for (int i = 0; i < 10; i++) {
    x0 = r * x0 * (1.0 - x0);
}
float t = x0 - 0.5;`,

    'frac_sinemap': `float r = 0.7 + abs(sin(cx) * 0.29);
float x0 = abs(mod(cos(cy), 1.0));
for (int i = 0; i < 10; i++) {
    x0 = r * sin(3.14159265359 * x0);
}
float t = x0 - 0.5;`,

    'frac_mandelbox': `float zx = sin(cx) * 2.0, zy = cos(cy) * 2.0;
float cr = sin(cx * 1.5) * 0.8, ci = cos(cy * 1.5) * 0.8;
int i = 0;
for (; i < 8; i++) {
    if (zx > 1.0) zx = 2.0 - zx; else if (zx < -1.0) zx = -2.0 - zx;
    if (zy > 1.0) zy = 2.0 - zy; else if (zy < -1.0) zy = -2.0 - zy;
    float r2 = zx*zx + zy*zy;
    if (r2 < 0.25) { zx *= 4.0; zy *= 4.0; }
    else if (r2 < 1.0) { float f = 1.0/r2; zx *= f; zy *= f; }
    zx = 2.0 * zx + cr;
    zy = 2.0 * zy + ci;
    if (zx*zx + zy*zy > 100.0) break;
}
float t = (float(i) / 8.0) - 0.5;`,

    'frac_mandelbulb': `float zx = sin(cx) * 1.5, zy = cos(cy) * 1.5;
float cr = sin(cx) * 0.5, ci = cos(cy) * 0.5;
int i = 0;
for (; i < 8; i++) {
    float r2 = zx*zx + zy*zy;
    if (r2 > 100.0) break;
    float r = sqrt(r2);
    float theta = atan(zy, zx);
    float r8 = pow(r, 8.0);
    zx = r8 * cos(theta * 8.0) + cr;
    zy = r8 * sin(theta * 8.0) + ci;
}
float t = (float(i) / 8.0) - 0.5;`,

    'frac_tent': `float mu = 1.9 + abs(sin(cx) * 0.09);
float x0 = abs(mod(cos(cy), 1.0));
for (int i = 0; i < 10; i++) {
    x0 = mu * min(x0, 1.0 - x0);
}
float t = x0 - 0.5;`,

    'frac_arnoldcat': `float xk = abs(mod(sin(cx), 1.0));
float yk = abs(mod(cos(cy), 1.0));
for (int i = 0; i < 6; i++) {
    float nextX = mod(2.0 * xk + yk, 1.0);
    yk = mod(xk + yk, 1.0);
    xk = nextX;
}
float t = (xk * yk) - 0.5;`,
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { algorithmGLSL };
}
