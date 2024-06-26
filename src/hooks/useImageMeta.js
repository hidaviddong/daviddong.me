import { useState, useEffect } from 'react';
import { imageMeta } from "image-meta";

export const useImageMeta = (src) => {
    const [dimensions, setDimensions] = useState({ width: undefined, height: undefined });

    useEffect(() => {
        const fetchImageMeta = async () => {
            if (!src) return;
            try {
                const response = await fetch(src);
                const blob = await response.blob();
                const arrayBuffer = await new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = () => reject(reader.error);
                    reader.readAsArrayBuffer(blob);
                });
                const uint8Array = new Uint8Array(arrayBuffer);
                const meta = imageMeta(uint8Array);
                if (meta.width && meta.height) {
                    setDimensions({ width: meta.width, height: meta.height });
                }
            } catch (error) {
                console.error('Failed to load image metadata:', error);
                setDimensions({ width: undefined, height: undefined });
            }
        };

        fetchImageMeta();
    }, [src]);

    return dimensions;
};

export default useImageMeta;