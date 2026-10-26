/**
 * Cœur en Rose · Scanner & Affichage des Diapositives Exactes
 */

let currentIndex = 0;
let isScannerOpen = false;
let videoStream = null;
let animFrameId = null;

document.addEventListener('DOMContentLoaded', () => {
  renderPills();
  handleUrl();
});

function handleUrl() {
  const params = new URLSearchParams(window.location.search);
  const ticketParam = params.get('ticket');
  const scanParam = params.get('scan');

  if (scanParam === 'true') {
    toggleScannerModal(true);
  }

  if (ticketParam) {
    const q = ticketParam.trim().toLowerCase();
    const idx = TICKETS_DATA.findIndex(t => 
      t.slug.toLowerCase() === q ||
      t.code.toLowerCase() === q ||
      t.id.toLowerCase() === q ||
      t.slideIndex.toString() === q
    );
    if (idx !== -1) {
      selectTicket(idx);
      return;
    }
  }

  selectTicket(0);
}

function renderPills() {
  const container = document.getElementById('ticket-pills');
  container.innerHTML = '';

  TICKETS_DATA.forEach((t, i) => {
    const btn = document.createElement('button');
    btn.className = `pill-item ${i === currentIndex ? 'active' : ''}`;
    btn.id = `pill-${i}`;
    btn.onclick = () => selectTicket(i);

    btn.innerHTML = `
      <span>${t.shortName}</span>
      <span class="pill-price">(${t.price})</span>
    `;

    container.appendChild(btn);
  });
}

function selectTicket(index) {
  currentIndex = index;
  const ticket = TICKETS_DATA[index];

  // Update pills
  document.querySelectorAll('.pill-item').forEach((p, i) => {
    p.classList.toggle('active', i === index);
  });

  // Update Status
  document.getElementById('scan-status-text').textContent = 
    `Code QR validé · ${ticket.name} (${ticket.code} · ${ticket.price})`;

  // Update Slide Images (100% faithful to PowerPoint files)
  const carteImg = document.getElementById('carte-slide-img');
  const ticketImg = document.getElementById('ticket-slide-img');

  carteImg.src = ticket.carteImg;
  carteImg.alt = `Carte de Remerciement - ${ticket.shortName}`;

  ticketImg.src = ticket.ticketImg;
  ticketImg.alt = `Billet - ${ticket.name}`;

  // Update Download Link for current ticket QR code
  const dlBtn = document.getElementById('btn-download-qr');
  dlBtn.href = ticket.qrImg;
  dlBtn.setAttribute('download', `QR_${ticket.code}.png`);
  dlBtn.title = `Télécharger le code QR officiel pour ${ticket.shortName}`;
}

/* ==========================================================================
   SCANNER MODAL & CAMERA
   ========================================================================== */
function toggleScannerModal(forceOpen = null) {
  const modal = document.getElementById('scanner-modal');
  isScannerOpen = (forceOpen !== null) ? forceOpen : !isScannerOpen;

  modal.classList.toggle('active', isScannerOpen);

  if (isScannerOpen) {
    startCamera();
  } else {
    stopCamera();
  }
}

async function startCamera() {
  const video = document.getElementById('scanner-video');
  const msg = document.getElementById('scanner-msg');

  try {
    msg.textContent = 'Connexion à la caméra...';
    videoStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }
    });
    video.srcObject = videoStream;
    await video.play();

    msg.textContent = 'Cadrez le code QR du billet dans le repère.';
    requestAnimationFrame(scanFrame);
  } catch (err) {
    console.error(err);
    msg.textContent = 'Impossible d’accéder à la caméra. Utilisez l’import d’image ci-dessous.';
  }
}

function stopCamera() {
  if (videoStream) {
    videoStream.getTracks().forEach(t => t.stop());
    videoStream = null;
  }
  if (animFrameId) {
    cancelAnimationFrame(animFrameId);
    animFrameId = null;
  }
}

function scanFrame() {
  if (!isScannerOpen) return;

  const video = document.getElementById('scanner-video');
  const canvas = document.getElementById('scanner-canvas');

  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    if (typeof jsQR !== 'undefined') {
      const code = jsQR(imageData.data, imageData.width, imageData.height);
      if (code && code.data) {
        onQrDetected(code.data);
        return;
      }
    }
  }

  animFrameId = requestAnimationFrame(scanFrame);
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const msg = document.getElementById('scanner-msg');
  msg.textContent = 'Lecture du code QR...';

  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.getElementById('scanner-canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      if (typeof jsQR !== 'undefined') {
        const code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code && code.data) {
          onQrDetected(code.data);
        } else {
          msg.textContent = 'Aucun code QR détecté dans cette image.';
        }
      }
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function onQrDetected(data) {
  toggleScannerModal(false);
  showToast('✓ Code QR reconnu !');

  const q = data.toLowerCase();
  let matched = 0;

  TICKETS_DATA.forEach((t, i) => {
    if (
      q.includes(t.slug.toLowerCase()) ||
      q.includes(t.code.toLowerCase()) ||
      q.includes(`ticket=${t.slug}`)
    ) {
      matched = i;
    }
  });

  selectTicket(matched);
}

function showToast(text) {
  const toast = document.getElementById('toast');
  toast.textContent = text;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
