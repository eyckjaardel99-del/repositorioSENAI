const canvas = document.getElementById('mapCanvas');
const ctx = canvas.getContext('2d');
const generateBtn = document.getElementById('generateBtn');
const seedVal = document.getElementById('seedVal');

const WIDTH = canvas.width;
const HEIGHT = canvas.height;

// Definição das cores dos biomas com base na "altura" (0.0 a 1.0)
const BIOMES = {
    DEEP_WATER: { limit: 0.35, color: '#0b2457' },     // Mar Profundo
    SHALLOW_WATER: { limit: 0.45, color: '#2b6cb0' },  // Mar Raso
    SAND: { limit: 0.30, color: '#e9d8a6' },           // Praia
    GRASS: { limit: 0.50, color: '#4aa96c' },          // Planície / Floresta
    DIRT: { limit: 0.65, color: '#8b5a2b' },           // Montanha Baixa
    ROCK: { limit: 0.9, color: '#718096' },           // Montanha Alta
    SNOW: { limit: 1.0, color: '#f7fafc' }            // Pico de Neve
};

// Função pseudo-aleatória simples baseada em Seed para gerar ondas senoidais estáveis
function createNoise(seed) {
    return function(x, y) {
        let value = 0;
        let totalAmplitude = 0;

        // Oitava 1: Grandes massas de terra
        value += Math.sin(x * 0.005 + seed) * Math.cos(y * 0.005 + seed) * 1.0;
        totalAmplitude += 1.0;

        // Oitava 2: Detalhes médios (recortes na costa)
        value += Math.sin(x * 0.02 + seed * 2) * Math.sin(y * 0.02 + seed * 1.5) * 0.4;
        totalAmplitude += 0.8;

        // Oitava 3: Detalhes finos (imperfeições e lagos)
        value += Math.cos(x * 0.05 + seed * 3) * Math.sin(y * 0.05 + seed * 4) * 0.15;
        totalAmplitude += 0.15;

        // Normaliza o valor para uma escala de -1 a 1
        let normalized = value / totalAmplitude;

        // Transforma para a escala de 0.0 a 1.0
        return (normalized + 1) / 2;
    };
}

function generateMap() {
    // Gera uma semente numérica aleatória
    const seed = Math.random() * 10000;
    seedVal.textContent = Math.floor(seed);

    const noise = createNoise(seed);

    // Cria um array de pixels diretamente para maior performance do Canvas
    const imgData = ctx.createImageData(WIDTH, HEIGHT);
    const data = imgData.data;

    for (let y = 0; y < HEIGHT; y++) {
        for (let x = 0; x < WIDTH; x++) {
            // Obtém o valor de elevação (0 a 1) para a coordenada atual
            let elevation = noise(x, y);

            // Gradiente central para forçar o mapa a ser uma ilha cercada por oceano
            let dx = x - WIDTH / 2;
            let dy = y - HEIGHT / 2;
            let distanceToCenter = Math.sqrt(dx * dx + dy * dy) / (WIDTH / 1.4);
            
            // Reduz a elevação nas bordas externas do círculo
            elevation = elevation * (1 - distanceToCenter * distanceToCenter);

            // Determina a cor com base no bioma correspondente
            let color = '#000000';
            for (const key in BIOMES) {
                if (elevation <= BIOMES[key].limit) {
                    color = BIOMES[key].color;
                    break;
                }
            }

            // Converte a cor HEX para RGB e atribui ao array do Canvas
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);

            const index = (y * WIDTH + x) * 4;
            data[index] = r;       // Vermelho
            data[index + 1] = g;   // Verde
            data[index + 2] = b;   // Azul
            data[index + 3] = 255; // Opacidade estável (Alpha)
        }
    }

    // Renderiza os pixels modificados de volta no Canvas
    ctx.putImageData(imgData, 0, 0);
}

// Eventos e inicialização
generateBtn.addEventListener('click', generateMap);
window.addEventListener('load', generateMap);