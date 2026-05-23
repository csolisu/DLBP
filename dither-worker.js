// Dither Lab Pro — CPU Worker
// Handles ditherEngineCore() and ditherDiffusionCore() on a background thread
// to keep the main UI responsive.

importScripts('recursos-compartidos.js');

self.onmessage = function(e) {
    const { imageDataBuffer, w, h, params, id } = e.data;

    // Rebuild ImageData-like view over the transferred buffer
    const data = new Uint8ClampedArray(imageDataBuffer);
    const imageData = { data, width: w, height: h };

    try {
        const { algo } = params;

        if (matricesDifusion[algo]) {
            // Error diffusion: run full CPU engine (includes preprocessing)
            ditherEngineCore(imageData, w, h, params);
        } else {
            // Stochastic/ordered: run full CPU engine
            ditherEngineCore(imageData, w, h, params);
        }

        // Transfer the buffer back (zero-copy)
        self.postMessage({ id, imageDataBuffer }, [imageDataBuffer]);
    } catch (err) {
        self.postMessage({ id, error: err.message });
    }
};
