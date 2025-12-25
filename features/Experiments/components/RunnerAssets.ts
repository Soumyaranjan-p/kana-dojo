export interface GameAssets {
  kitsune: HTMLCanvasElement;
  torii: HTMLCanvasElement;
  tengu: HTMLCanvasElement;
  lantern: HTMLCanvasElement;
  fuji: HTMLCanvasElement;
  daruma: HTMLCanvasElement;
  cloud: HTMLCanvasElement;
  mountains: HTMLCanvasElement;
}

const createCanvas = (width: number, height: number) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
};

export const generateAssets = (): GameAssets => {
  // 1. Kitsune (Player) - 60x60
  const kitsune = createCanvas(60, 60);
  const kCtx = kitsune.getContext('2d')!;

  // Body (White spiritual flame-like shape)
  kCtx.shadowColor = '#fff';
  kCtx.shadowBlur = 10;
  kCtx.fillStyle = '#ffffff';

  kCtx.beginPath();
  kCtx.moveTo(15, 40);
  kCtx.bezierCurveTo(15, 20, 30, 10, 45, 25); // Head/Back
  kCtx.bezierCurveTo(55, 35, 55, 50, 40, 50); // Rear
  kCtx.quadraticCurveTo(30, 55, 15, 40); // Underbelly
  kCtx.fill();

  // Head
  kCtx.beginPath();
  kCtx.ellipse(45, 25, 12, 10, -0.2, 0, Math.PI * 2);
  kCtx.fill();

  // Ears
  kCtx.fillStyle = '#fff';
  kCtx.beginPath();
  kCtx.moveTo(40, 15);
  kCtx.lineTo(45, 5);
  kCtx.lineTo(50, 18);
  kCtx.fill();

  // Red Markings (Face)
  kCtx.fillStyle = '#ff0000';
  kCtx.shadowBlur = 0;
  kCtx.beginPath();
  kCtx.moveTo(45, 18); // Forehead
  kCtx.lineTo(48, 22);
  kCtx.lineTo(42, 22);
  kCtx.fill();

  // Eye
  kCtx.fillStyle = '#000';
  kCtx.beginPath();
  kCtx.arc(48, 24, 1.5, 0, Math.PI * 2);
  kCtx.fill();

  // Tails (Multiple)
  kCtx.fillStyle = '#fff';
  kCtx.shadowBlur = 15;
  kCtx.shadowColor = '#aaddff'; // Blue spiritual glow
  for (let i = 0; i < 3; i++) {
    kCtx.beginPath();
    kCtx.moveTo(15, 35);
    kCtx.bezierCurveTo(5 - i * 5, 35 - i * 5, 0 - i * 5, 15 + i * 5, 15, 25);
    kCtx.fill();
  }

  // 2. Torii (Obstacle) - 100x120
  const torii = createCanvas(100, 120);
  const tCtx = torii.getContext('2d')!;

  // Colors
  const vermilion = '#e62e00';
  const black = '#1a1a1a';

  // Shadow
  tCtx.shadowColor = 'rgba(0,0,0,0.3)';
  tCtx.shadowBlur = 4;
  tCtx.shadowOffsetY = 2;

  // Posts (Hashira)
  tCtx.fillStyle = vermilion;
  const drawPost = (x: number) => {
    tCtx.beginPath();
    tCtx.moveTo(x, 120);
    tCtx.lineTo(x + 2, 20); // Slight taper
    tCtx.lineTo(x + 12, 20);
    tCtx.lineTo(x + 14, 120);
    tCtx.fill();
    // Black base
    tCtx.fillStyle = black;
    tCtx.fillRect(x - 2, 110, 18, 10);
    tCtx.fillStyle = vermilion;
  };
  drawPost(20);
  drawPost(66);

  // Nuki (Lower lintel)
  tCtx.fillRect(15, 45, 70, 8);

  // Shimaki (Upper lintel core)
  tCtx.beginPath();
  tCtx.moveTo(10, 25);
  tCtx.lineTo(90, 25);
  tCtx.lineTo(90, 15);
  tCtx.lineTo(10, 15);
  tCtx.fill();

  // Kasagi (Topmost lintel, curved)
  tCtx.fillStyle = black;
  tCtx.beginPath();
  tCtx.moveTo(0, 15);
  tCtx.quadraticCurveTo(50, 5, 100, 15); // Upward curve
  tCtx.lineTo(102, 5);
  tCtx.quadraticCurveTo(50, -5, -2, 5);
  tCtx.fill();

  // Gaku (Plaque)
  tCtx.fillStyle = black;
  tCtx.fillRect(45, 20, 10, 15);
  tCtx.fillStyle = '#bf9000'; // Gold text hint
  tCtx.fillRect(47, 23, 6, 9);

  // 3. Tengu (Obstacle) - 60x60
  const tengu = createCanvas(60, 60);
  const tgCtx = tengu.getContext('2d')!;

  // Face
  tgCtx.shadowColor = 'rgba(0,0,0,0.5)';
  tgCtx.shadowBlur = 5;
  tgCtx.fillStyle = '#cc0000'; // Red
  tgCtx.beginPath();
  tgCtx.arc(30, 30, 20, 0, Math.PI * 2);
  tgCtx.fill();

  // Nose (Long!)
  tgCtx.fillStyle = '#ff4d4d'; // Lighter red
  tgCtx.beginPath();
  tgCtx.moveTo(35, 30);
  tgCtx.lineTo(55, 35); // Long point
  tgCtx.lineTo(35, 40);
  tgCtx.fill();

  // Eyebrows (Angry)
  tgCtx.strokeStyle = '#000';
  tgCtx.lineWidth = 3;
  tgCtx.beginPath();
  tgCtx.moveTo(20, 25);
  tgCtx.lineTo(30, 28);
  tgCtx.moveTo(40, 25);
  tgCtx.lineTo(30, 28);
  tgCtx.stroke();

  // Eyes
  tgCtx.fillStyle = '#fff';
  tgCtx.beginPath();
  tgCtx.arc(22, 30, 4, 0, Math.PI * 2);
  tgCtx.arc(38, 30, 4, 0, Math.PI * 2);
  tgCtx.fill();
  tgCtx.fillStyle = '#000';
  tgCtx.beginPath();
  tgCtx.arc(22, 30, 1, 0, Math.PI * 2);
  tgCtx.arc(38, 30, 1, 0, Math.PI * 2);
  tgCtx.fill();

  // 4. Lantern (Decor) - Reference for style
  const lantern = createCanvas(40, 60);
  const lCtx = lantern.getContext('2d')!;
  lCtx.fillStyle = '#777';
  // Base
  lCtx.fillRect(10, 50, 20, 10);
  // Post
  lCtx.fillRect(15, 30, 10, 20);
  // Light box
  lCtx.fillStyle = '#999';
  lCtx.fillRect(5, 15, 30, 15);
  // Window (Glow)
  lCtx.fillStyle = '#ffaa00';
  lCtx.shadowColor = '#ffaa00';
  lCtx.shadowBlur = 10;
  lCtx.fillRect(12, 18, 16, 9);
  // Roof
  lCtx.shadowBlur = 0;
  lCtx.fillStyle = '#555';
  lCtx.beginPath();
  lCtx.moveTo(0, 15);
  lCtx.lineTo(20, 0);
  lCtx.lineTo(40, 15);
  lCtx.fill();

  // 5. Mt Fuji (Background) - 800x300 (Wide landscape)
  const fuji = createCanvas(800, 300);
  const fCtx = fuji.getContext('2d')!;

  // Gradient Sky (handled in game, let's just draw the mountain)
  // Mountain Body
  const fGradient = fCtx.createLinearGradient(0, 0, 0, 300);
  fGradient.addColorStop(0, '#fff'); // Snow cap
  fGradient.addColorStop(0.3, '#3b82f6'); // Blue top
  fGradient.addColorStop(1, '#1e3a8a'); // Dark blue base

  fCtx.fillStyle = fGradient;
  fCtx.beginPath();
  fCtx.moveTo(200, 300);
  fCtx.quadraticCurveTo(400, 50, 600, 300); // Iconic slope
  fCtx.fill();

  // Snow Cap (Jagged)
  fCtx.fillStyle = '#fff';
  fCtx.beginPath();
  fCtx.moveTo(330, 120);
  fCtx.lineTo(350, 80); // Peak left
  fCtx.lineTo(400, 90); // Crater
  fCtx.lineTo(450, 80); // Peak right
  fCtx.lineTo(470, 120);
  // Jagged bottom of snow
  fCtx.lineTo(430, 140);
  fCtx.lineTo(400, 130);
  fCtx.lineTo(370, 140);
  fCtx.fill();

  // 6. Daruma (Obstacle - replaces Rock) - 40x40
  const daruma = createCanvas(40, 40);
  const dCtx = daruma.getContext('2d')!;

  // Body (Red sphere)
  dCtx.shadowColor = 'rgba(0,0,0,0.3)';
  dCtx.shadowBlur = 4;
  dCtx.fillStyle = '#cc0000';
  dCtx.beginPath();
  dCtx.arc(20, 22, 18, 0, Math.PI * 2); // Slightly lower center
  dCtx.fill();

  // Face Area (White)
  dCtx.shadowBlur = 0;
  dCtx.fillStyle = '#fff';
  dCtx.beginPath();
  dCtx.ellipse(20, 20, 12, 10, 0, 0, Math.PI * 2);
  dCtx.fill();

  // Face Details
  dCtx.fillStyle = '#000';
  // Eyes (One filled, one empty for goal-setting, or both filled for menacing)
  dCtx.beginPath();
  dCtx.arc(16, 18, 2, 0, Math.PI * 2); // Left eye
  dCtx.arc(24, 18, 2, 0, Math.PI * 2); // Right eye
  dCtx.fill();

  // Beard/Mustache
  dCtx.strokeStyle = '#000';
  dCtx.lineWidth = 1;
  dCtx.beginPath();
  dCtx.moveTo(12, 22);
  dCtx.quadraticCurveTo(20, 28, 28, 22);
  dCtx.stroke();

  // Gold markings
  dCtx.strokeStyle = '#ffd700';
  dCtx.lineWidth = 2;
  dCtx.beginPath();
  dCtx.arc(20, 22, 14, 0, Math.PI * 2); // Outline hint
  dCtx.stroke();

  // 7. Cloud (Background) - 100x50
  const cloud = createCanvas(120, 60);
  const cCtx = cloud.getContext('2d')!;
  cCtx.fillStyle = '#ffffff';
  cCtx.shadowColor = 'rgba(255,255,255,0.8)'; // Glow
  cCtx.shadowBlur = 10;

  // Cloud puffs
  const drawPuff = (x: number, y: number, r: number) => {
    cCtx.beginPath();
    cCtx.arc(x, y, r, 0, Math.PI * 2);
    cCtx.fill();
  };

  drawPuff(30, 30, 20);
  drawPuff(60, 25, 25);
  drawPuff(90, 30, 20);
  drawPuff(60, 40, 15); // Bottom filler

  // 8. Mountains (Background Layer) - 1600x200 (Wide for scrolling)
  const mountains = createCanvas(1600, 200);
  const mCtx = mountains.getContext('2d')!;

  // Clear transparent

  // Layer 1: Far/Darker
  mCtx.fillStyle = '#cbd5e1'; // Light slate
  mCtx.beginPath();
  mCtx.moveTo(0, 200);
  for (let x = 0; x <= 1600; x += 50) {
    // 3 full cycles for seamless loop (1600px width)
    // Normalized X: x / 1600
    // Angle: normalized * Math.PI * 2 * 3
    const angle = (x / 1600) * Math.PI * 2;

    const yStrc = Math.sin(angle * 3) * 30 + Math.cos(angle * 5) * 20;
    mCtx.lineTo(x, 200 - 60 - yStrc);
  }
  mCtx.lineTo(1600, 200);
  mCtx.fill();

  // Layer 2: Closer
  mCtx.fillStyle = '#94a3b8';
  mCtx.beginPath();
  mCtx.moveTo(0, 200);
  for (let x = 0; x <= 1600; x += 80) {
    // 5 full cycles
    const angle = (x / 1600) * Math.PI * 2;
    const yStrc = Math.abs(Math.sin(angle * 5)) * 50;
    mCtx.lineTo(x, 200 - 40 - yStrc);
  }
  mCtx.lineTo(1600, 200);
  mCtx.fill();

  return { kitsune, torii, tengu, lantern, fuji, daruma, cloud, mountains };
};
