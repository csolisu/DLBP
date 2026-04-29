/**
 * Diccionario de traducciones para Dither Lab Pro
 * Puedes agregar más términos simplemente añadiendo líneas a este objeto JSON.
 */
const traducciones = {
    "en": {
        // UI Principal & Navegación
        "Motor de tramado avanzado v6": "Advanced Dithering Engine v6",
        "Sección Animación & Keyframes": "Animation & Keyframes Section",
        "Haz clic o arrastra una imagen": "Click or drag an image",
        "Cargar Imagen o Video para Animar": "Load Image or Video to Animate",
        "Soporta PNG, JPG, WebP": "Supports PNG, JPG, WebP",
        "Modo Animación y Video": "Animation & Video Mode",
        "Cargar Preset (.json)": "Load Preset (.json)",
        "Restaurar": "Reset",
        "Restaurar Ajustes": "Reset Settings",
        "Limpiar Entorno": "Clear Workspace",
        "Volver al Editor Base": "Return to Base Editor",
        "Lienzo Vacío": "Empty Canvas",
        "Cargando Medio...": "Loading Media...",
        "Renderizando": "Rendering",
        "Procesando": "Processing",
        "Procesando...": "Processing...",
        "Calculando...": "Calculating...",
        
        // Nodos del Sistema - 1. Físico & Tonal
        "1. Físico & Tonal": "1. Physical & Tonal",
        "Escala Interna": "Internal Scale",
        "Canales Activos": "Active Channels",
        "Brillo": "Brightness",
        "Contraste": "Contrast",
        "Gamma": "Gamma",
        "Saturación": "Saturation",
        "Enfoque": "Sharpen",
        "Desenfoque": "Blur",
        "Posterización": "Posterize",
        "Recorte (Clipping)": "Clipping",
        "Recorte (Clip)": "Clipping",
        "Curvas Tonales": "Tonal Curves",
        "RGB (Maestro)": "RGB (Master)",
        "Canal Rojo": "Red Channel",
        "Canal Verde": "Green Channel",
        "Canal Azul": "Blue Channel",
        
        // Nodos del Sistema - 2. Core Dither
        "2. Core Dither": "2. Core Dither",
        "Algoritmo": "Algorithm",
        "Amplitud Error / Efecto": "Error / Effect Amplitude",
        "Amplitud Error": "Error Amplitude",
        "Bias": "Bias",
        "Escala Celda": "Cell Scale",
        "Modificadores (Difusión)": "Modifiers (Diffusion)",
        "Modificadores": "Modifiers",
        "Rotación": "Rotation",
        "Sesgo H/V": "H/V Skew",
        "Patrón de Escaneo": "Scan Pattern",
        "Gestión de Paleta": "Palette Management",
        "Extraer de Imagen": "Extract from Image",
        "Invertir Colores": "Invert Colors",
        "Tap para editar. Arrastra para reordenar.": "Tap to edit. Drag to reorder.",
        "Tono y Saturación (Post-Paleta)": "Hue & Saturation (Post-Palette)",
        "Post-Modificadores (HSL)": "Post-Modifiers (HSL)",
        "Hue": "Hue",
        "Sat": "Sat",
        "Lum": "Lum",

        // Opciones de Dropdowns - Algoritmos y Patrones
        "Difusión de Error": "Error Diffusion",
        "Tramado Ordenado": "Ordered Dithering",
        "Tramado Geométrico (Halftone)": "Geometric Halftone",
        "Métodos Estocásticos": "Stochastic Methods",
        "Experimentales & Autor": "Experimental & Custom",
        "Punto Agrupado 4x4": "Clustered Dot 4x4",
        "Punto Agrupado 8x8": "Clustered Dot 8x8",
        "Círculos": "Circles",
        "Rombos": "Diamonds",
        "Cuadrados": "Squares",
        "Triángulos": "Triangles",
        "Umbral Básico": "Basic Threshold",
        "Ruido Aleatorio": "Random Noise",
        "Ruido Azul": "Blue Noise",
        "Tramado de Línea": "Line Dither",
        "Ordered Voronoi": "Ordered Voronoi",
        "Bayer Progresivo": "Progressive Bayer",
        "Cross-Hatch (Grabado)": "Cross-Hatch",
        "Spiral Wave": "Spiral Wave",
        "Hilbert Curve Pattern": "Hilbert Curve Pattern",
        "Diffusion Threshold Mod (DTM)": "Diffusion Threshold Mod (DTM)",
        "Diffusion Threshold Mod": "Diffusion Threshold Mod",
        "Standard": "Standard",
        "Zig-Zag Estricto": "Strict Zig-Zag",
        "Spiral": "Spiral",
        "Hilbert Curve": "Hilbert Curve",
        "Vertical": "Vertical",

        // Opciones de Dropdowns - Paletas
        "Paleta Personalizada": "Custom Palette",
        "Monocromo Estricto": "Strict Monochrome",
        "Amber CRT (NUEVO)": "Amber CRT (NEW)",
        "Green Phosphor CRT (NUEVO)": "Green Phosphor CRT (NEW)",
        "Windows 95 (16) (NUEVO)": "Windows 95 (16) (NEW)",
        
        // Nodos del Sistema - 3. Glitch
        "3. Glitch & Distorsión": "3. Glitch & Distortion",
        "3. Glitch": "3. Glitch",
        "Buffer Underflow": "Buffer Underflow",
        "Sort (H)": "Sort (H)",
        "Sort (V)": "Sort (V)",
        "Jitter H-Sync": "Jitter H-Sync",
        "Chroma Bleed": "Chroma Bleed",
        "Pixel Flow Drift": "Pixel Flow Drift",
        "Interlaced Delay": "Interlaced Delay",
        "Bit-Plane Slicing": "Bit-Plane Slicing",
        "Desactivado": "Disabled",
        "Destruir LSB": "Destroy LSB",
        "Destruir MSB": "Destroy MSB",
        "Luma Palette Swap": "Luma Palette Swap",
        
        // Nodos del Sistema - 4. Post-FX
        "4. Post-FX": "4. Post-FX",
        "Activar": "Enable",
        "Film Grain": "Film Grain",
        "Vignette Color": "Vignette Color",
        "Optical Bloom": "Optical Bloom",
        "Lens Dispersion": "Lens Dispersion",
        "Grain Alpha": "Grain Alpha",
        "Dot Gain": "Dot Gain",
        "Mono Tint": "Mono Tint",
        "Local Contrast": "Local Contrast",
        
        // Controles de Paneo y Zoom
        "Comparar Original": "Compare Original",
        "Activar/Desactivar Paneo Libre": "Toggle Free Pan",
        "Alejar": "Zoom Out",
        "Acercar": "Zoom In",

        // Controles de Animación y Timeline
        "Inicio (s)": "Start (s)",
        "Duración (s)": "Duration (s)",
        "Framerate": "Framerate",
        "Formato": "Format",
        "Resolución": "Resolution",
        "Audio Video": "Audio & Video",
        "Sin Audio": "No Audio",
        "Con Audio": "With Audio",
        "WebM (VP9)": "WebM (VP9)",
        "MP4 (H.264)": "MP4 (H.264)",
        "Nativa (1x)": "Native (1x)",
        "1.5x Escala": "1.5x Scale",
        "2x Escala": "2x Scale",
        "Forzar 1080p": "Force 1080p",
        "Forzar 4K": "Force 4K",
        "Añadir Keyframe": "Add Keyframe",
        "Quitar Keyframe": "Remove Keyframe",
        "Exportar": "Export",
        
        // Centro de Exportación
        "Opciones de Exportación": "Export Options",
        "Salida HD, SVG, Alpha Purge & JSON": "HD Output, SVG, Alpha Purge & JSON",
        "Centro de Exportación": "Export Center",
        "Salida de Imagen & Vector": "Image & Vector Output",
        "Multiplicador de Escala (Píxel Perfecto)": "Scale Multiplier (Pixel Perfect)",
        "Peso raster:": "Raster Weight:",
        "Exportar PNG": "Export PNG",
        "Vector (SVG)": "Vector (SVG)",
        "Copiar Portapapeles": "Copy to Clipboard",
        "Aislamiento (Alpha Purge)": "Isolation (Alpha Purge)",
        "Limpiar": "Clear",
        "Clic en el color de la paleta resultante para volverlo ": "Click the resulting palette color to make it ",
        "transparente": "transparent",
        " en la exportación.": " upon export.",
        "Aislamiento/SVG Desactivado": "Isolation/SVG Disabled",
        "Apaga los efectos de Post-Procesado (FX) para interactuar.": "Turn off Post-Processing (FX) effects to interact.",
        "Inspección de Paleta Final": "Final Palette Inspection",
        "Variables CSS": "CSS Variables",
        "Clic para copiar el valor HEX al portapapeles.": "Click to copy HEX value to clipboard.",
        "Terminal de Presets": "Presets Terminal",
        "Guarda tu configuración (Algoritmos, Curvas, Paletas, Glitch) en un archivo JSON local.": "Save your configuration (Algorithms, Curves, Palettes, Glitch) to a local JSON file.",
        "Descargar Preset Maestro": "Download Master Preset",
        "Cargar Preset": "Load Preset",
        
        // Textos Largos / SEO / Conecta
        "Sigamos creando juntos": "Let's keep creating together",
        "Si este proyecto te ha resultado útil y te apasiona el diseño gráfico, la comunicación y el arte retro, me encantaría conectar contigo. Acompáñame en mis redes sociales para compartir procesos, descubrir nuevas herramientas y seguir explorando el mundo visual en comunidad.": "If you found this project useful and are passionate about graphic design, communication, and retro art, I would love to connect with you. Join me on my social networks to share processes, discover new tools, and continue exploring the visual world as a community.",
        "Base de Conocimiento & Ayuda": "Knowledge Base & Help",
        "¿Qué es el Dithering?": "What is Dithering?",
        "Algoritmos de Difusión": "Diffusion Algorithms",
        "Paletas Nostálgicas": "Nostalgic Palettes",
        "Glitch & Distorsión": "Glitch & Distortion",
        "Exportar a Vector (SVG)": "Export to Vector (SVG)",
        "Alpha Purge (Canal Transparente)": "Alpha Purge (Transparent Channel)"
    }
};

/**
 * Función principal del motor de internacionalización
 */
function traducirInterfaz(idioma) {
    // Seleccionamos los elementos comunes que contienen texto.
    // Ignoramos inputs o textareas, operamos solo en etiquetas de UI
    const elementos = document.querySelectorAll('h1, h2, h3, h4, p, span, button, a, label, option');

    elementos.forEach(el => {
        // Recorremos los nodos hijos buscando los que sean de tipo Texto (Node.TEXT_NODE === 3)
        // Esto previene que destruyamos iconos SVG u otros elementos anidados
        el.childNodes.forEach(nodo => {
            if (nodo.nodeType === Node.TEXT_NODE) {
                let textoOriginalDOM = nodo.nodeValue.trim();
                
                if (textoOriginalDOM !== '') {
                    // Si es la primera vez que procesamos este nodo, guardamos su texto nativo (español) en una propiedad personalizada
                    if (!nodo.originalText) {
                        nodo.originalText = textoOriginalDOM;
                    }

                    // Identificamos la llave original
                    let llaveOriginal = nodo.originalText;
                    
                    // Lógica de reemplazo
                    if (idioma === 'es') {
                        // Si volvemos a español, restituimos el texto original guardado
                        nodo.nodeValue = nodo.nodeValue.replace(textoOriginalDOM, llaveOriginal);
                    } else if (traducciones[idioma] && traducciones[idioma][llaveOriginal]) {
                        // Si hay traducción disponible, la reemplazamos
                        nodo.nodeValue = nodo.nodeValue.replace(textoOriginalDOM, traducciones[idioma][llaveOriginal]);
                    }
                }
            }
        });
    });
    
    // Sincronizar todos los selectores de idioma de la UI si existieran varios
    document.querySelectorAll('.lang-selector').forEach(sel => sel.value = idioma);
    
    // Guardamos la preferencia en el navegador para que persista
    localStorage.setItem('dither_lang', idioma);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Detectar si el usuario ya tenía un idioma guardado
    const idiomaGuardado = localStorage.getItem('dither_lang') || 'es';
    
    // Asignar los eventos a los selectores
    document.querySelectorAll('.lang-selector').forEach(selector => {
        selector.value = idiomaGuardado;
        selector.addEventListener('change', (e) => traducirInterfaz(e.target.value));
    });

    // Si el idioma no es el predeterminado, ejecutar la traducción al cargar
    if (idiomaGuardado !== 'es') {
        traducirInterfaz(idiomaGuardado);
    }
});