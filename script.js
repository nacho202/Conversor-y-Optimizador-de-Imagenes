// Estado de la aplicación
const state = {
    files: [],
    convertedImages: [],
    selectedFormat: 'webp',
    quality: 0.8
};

// Elementos del DOM
const uploadZone = document.getElementById('uploadZone');
const fileInput = document.getElementById('fileInput');
const formatSection = document.getElementById('formatSection');
const imagesContainer = document.getElementById('imagesContainer');
const convertBtn = document.getElementById('convertBtn');
const downloadSection = document.getElementById('downloadSection');
const downloadAllBtn = document.getElementById('downloadAllBtn');
const resetBtn = document.getElementById('resetBtn');
const qualitySlider = document.getElementById('quality');
const qualityValue = document.getElementById('qualityValue');

// Event Listeners
uploadZone.addEventListener('click', () => fileInput.click());
uploadZone.addEventListener('dragover', handleDragOver);
uploadZone.addEventListener('dragleave', handleDragLeave);
uploadZone.addEventListener('drop', handleDrop);
fileInput.addEventListener('change', handleFileSelect);
convertBtn.addEventListener('click', convertImages);
downloadAllBtn.addEventListener('click', downloadAllImages);
resetBtn.addEventListener('click', resetApp);
qualitySlider.addEventListener('input', updateQuality);

// Event listeners para formato
document.querySelectorAll('input[name="format"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        state.selectedFormat = e.target.value;
    });
});

// Funciones de manejo de drag & drop
function handleDragOver(e) {
    e.preventDefault();
    uploadZone.classList.add('dragover');
}

function handleDragLeave(e) {
    e.preventDefault();
    uploadZone.classList.remove('dragover');
}

function handleDrop(e) {
    e.preventDefault();
    uploadZone.classList.remove('dragover');
    const files = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'));
    if (files.length > 30) {
        alert('Solo puedes cargar hasta 30 imágenes a la vez');
        return;
    }
    processFiles(files);
}

function handleFileSelect(e) {
    const files = Array.from(e.target.files);
    if (files.length > 30) {
        alert('Solo puedes cargar hasta 30 imágenes a la vez');
        return;
    }
    processFiles(files);
}

function updateQuality(e) {
    state.quality = e.target.value / 100;
    qualityValue.textContent = e.target.value + '%';
}

// Procesar archivos seleccionados
function processFiles(files) {
    if (files.length === 0) return;

    state.files = files;
    displayImages(files);
    uploadZone.style.display = 'none';
    formatSection.style.display = 'block';
}

// Mostrar imágenes cargadas
function displayImages(files) {
    imagesContainer.innerHTML = '';
    
    files.forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const imageItem = createImageItem(file, e.target.result, index);
            imagesContainer.appendChild(imageItem);
        };
        reader.readAsDataURL(file);
    });
}

// Crear elemento de imagen
function createImageItem(file, dataUrl, index) {
    const div = document.createElement('div');
    div.className = 'image-item';
    div.id = `image-${index}`;
    
    const sizeKB = (file.size / 1024).toFixed(2);
    
    div.innerHTML = `
        <img src="${dataUrl}" alt="${file.name}" class="image-preview">
        <div class="image-info">
            <div class="image-name">${file.name}</div>
            <div class="image-size">Tamaño original: ${sizeKB} KB</div>
            <div class="image-status" id="status-${index}">
                <span class="status-badge">Listo para convertir</span>
            </div>
        </div>
    `;
    
    return div;
}

// Convertir imágenes
async function convertImages() {
    convertBtn.disabled = true;
    convertBtn.classList.add('loading');
    state.convertedImages = [];
    
    for (let i = 0; i < state.files.length; i++) {
        await convertSingleImage(state.files[i], i);
    }
    
    convertBtn.disabled = false;
    convertBtn.classList.remove('loading');
    
    showDownloadSection();
}

// Convertir una sola imagen
async function convertSingleImage(file, index) {
    const statusEl = document.getElementById(`status-${index}`);
    
    try {
        // Actualizar estado a procesando
        statusEl.innerHTML = `
            <span class="status-badge status-processing">
                <span class="spinner"></span>
                Procesando...
            </span>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 50%"></div>
            </div>
        `;
        
        // Cargar imagen
        const img = await loadImage(file);
        
        // Crear canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Establecer dimensiones
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Dibujar imagen
        ctx.drawImage(img, 0, 0);
        
        // Convertir a formato seleccionado
        const blob = await canvasToBlob(canvas, state.selectedFormat, state.quality);
        
        if (!blob) {
            throw new Error('No se pudo convertir la imagen');
        }
        
        // Calcular ahorro
        const originalSize = file.size;
        const newSize = blob.size;
        const saved = originalSize - newSize;
        const percentage = ((saved / originalSize) * 100).toFixed(1);
        
        // Guardar imagen convertida
        const newFileName = changeFileExtension(file.name, state.selectedFormat);
        state.convertedImages.push({
            blob: blob,
            name: newFileName,
            originalSize: originalSize,
            newSize: newSize,
            saved: saved,
            percentage: percentage
        });
        
        // Actualizar estado a completado
        const compressionClass = saved > 0 ? '' : 'negative';
        const compressionText = saved > 0 
            ? `↓ ${(saved / 1024).toFixed(2)} KB (${percentage}% menos)` 
            : `↑ ${Math.abs(saved / 1024).toFixed(2)} KB (${Math.abs(percentage)}% más)`;
        
        statusEl.innerHTML = `
            <span class="status-badge status-completed">✓ Completado</span>
            <span class="compression-info ${compressionClass}">${compressionText}</span>
        `;
        
    } catch (error) {
        console.error('Error al convertir imagen:', error);
        statusEl.innerHTML = `
            <span class="status-badge status-error">✗ Error al convertir</span>
        `;
    }
}

// Cargar imagen desde archivo
function loadImage(file) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const reader = new FileReader();
        
        reader.onload = (e) => {
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = e.target.result;
        };
        
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Convertir canvas a blob
function canvasToBlob(canvas, format, quality) {
    return new Promise((resolve, reject) => {
        // Mapear formato a MIME type
        const mimeTypes = {
            'webp': 'image/webp',
            'avif': 'image/avif',
            'jpeg': 'image/jpeg',
            'png': 'image/png'
        };
        
        const mimeType = mimeTypes[format] || 'image/webp';
        
        // Para PNG, no usamos calidad
        const qualityParam = format === 'png' ? undefined : quality;
        
        canvas.toBlob(
            (blob) => {
                if (blob) {
                    resolve(blob);
                } else {
                    // Fallback a WebP si el formato no es soportado
                    if (format === 'avif') {
                        console.warn('AVIF no soportado, usando WebP');
                        canvas.toBlob(
                            (fallbackBlob) => resolve(fallbackBlob),
                            'image/webp',
                            quality
                        );
                    } else {
                        reject(new Error('No se pudo crear el blob'));
                    }
                }
            },
            mimeType,
            qualityParam
        );
    });
}

// Cambiar extensión del archivo
function changeFileExtension(filename, newExtension) {
    const lastDotIndex = filename.lastIndexOf('.');
    const nameWithoutExt = lastDotIndex > 0 ? filename.substring(0, lastDotIndex) : filename;
    return `${nameWithoutExt}.${newExtension}`;
}

// Mostrar sección de descarga con estadísticas
function showDownloadSection() {
    downloadSection.style.display = 'block';
    
    // Calcular estadísticas
    const totalImages = state.convertedImages.length;
    const totalSaved = state.convertedImages.reduce((sum, img) => sum + img.saved, 0);
    const avgPercentage = state.convertedImages.reduce((sum, img) => sum + parseFloat(img.percentage), 0) / totalImages;
    
    // Actualizar UI
    document.getElementById('totalImages').textContent = totalImages;
    document.getElementById('totalSaved').textContent = (totalSaved / 1024).toFixed(2) + ' KB';
    document.getElementById('compressionRate').textContent = avgPercentage.toFixed(1) + '%';
    
    // Actualizar texto del botón y mensaje informativo
    const downloadBtnText = document.getElementById('downloadBtnText');
    const downloadInfo = document.getElementById('downloadInfo');
    
    if (totalImages === 1) {
        downloadBtnText.textContent = 'Descargar Imagen';
        downloadInfo.textContent = '';
    } else {
        downloadBtnText.textContent = 'Descargar como ZIP';
        downloadInfo.innerHTML = `📦 Se descargará un archivo ZIP con las ${totalImages} imágenes convertidas`;
    }
    
    // Scroll suave a la sección
    downloadSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Descargar todas las imágenes
async function downloadAllImages() {
    downloadAllBtn.disabled = true;
    downloadAllBtn.innerHTML = '<span class="spinner"></span> Descargando...';
    
    // Si solo hay 1 imagen, descarga directamente
    if (state.convertedImages.length === 1) {
        await downloadImage(state.convertedImages[0].blob, state.convertedImages[0].name);
    } else {
        // Si hay 2 o más, descarga como ZIP
        await downloadAsZip();
    }
    
    downloadAllBtn.disabled = false;
    downloadAllBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 3V16M12 16L16 12M12 16L8 12M4 17V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span>Descargar Todas</span>
    `;
}

// Descargar imágenes como archivo ZIP
async function downloadAsZip() {
    try {
        const zip = new JSZip();
        const folder = zip.folder('imagenes-convertidas');
        
        // Agregar cada imagen al ZIP
        for (const img of state.convertedImages) {
            folder.file(img.name, img.blob);
        }
        
        // Generar el archivo ZIP
        const zipBlob = await zip.generateAsync({
            type: 'blob',
            compression: 'DEFLATE',
            compressionOptions: {
                level: 6
            }
        });
        
        // Crear nombre del archivo con fecha
        const date = new Date();
        const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        const zipName = `imagenes-${state.selectedFormat}-${dateStr}.zip`;
        
        // Descargar el ZIP
        await downloadImage(zipBlob, zipName);
        
    } catch (error) {
        console.error('Error al crear ZIP:', error);
        alert('Hubo un error al crear el archivo ZIP. Intenta con menos imágenes.');
    }
}

// Descargar una imagen individual
function downloadImage(blob, filename) {
    return new Promise((resolve) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        resolve();
    });
}

// Reiniciar aplicación
function resetApp() {
    state.files = [];
    state.convertedImages = [];
    imagesContainer.innerHTML = '';
    uploadZone.style.display = 'block';
    formatSection.style.display = 'none';
    downloadSection.style.display = 'none';
    fileInput.value = '';
    qualitySlider.value = 80;
    qualityValue.textContent = '80%';
    state.quality = 0.8;
    
    // Reset formato a WebP
    document.querySelector('input[name="format"][value="webp"]').checked = true;
    state.selectedFormat = 'webp';
    
    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Verificar soporte de formatos al cargar
window.addEventListener('DOMContentLoaded', () => {
    checkFormatSupport();
});

// Verificar soporte de formatos
async function checkFormatSupport() {
    const formats = ['webp', 'avif'];
    
    for (const format of formats) {
        const supported = await isFormatSupported(format);
        if (!supported) {
            const radio = document.querySelector(`input[name="format"][value="${format}"]`);
            const card = radio.nextElementSibling;
            const desc = card.querySelector('.format-desc');
            desc.innerHTML += ' <span style="color: var(--warning);">(No soportado en tu navegador)</span>';
        }
    }
}

// Verificar si un formato es soportado
function isFormatSupported(format) {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        
        const mimeTypes = {
            'webp': 'image/webp',
            'avif': 'image/avif'
        };
        
        canvas.toBlob(
            (blob) => resolve(blob !== null),
            mimeTypes[format],
            0.5
        );
    });
}

// Prevenir comportamiento por defecto de arrastrar
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    document.body.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
    }, false);
});

