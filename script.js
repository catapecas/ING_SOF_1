// ============================================================
// SISTEMA DEPORTIVO VALLE DEL CAUCA
// script.js — Datos simulados, autenticación y utilidades
// ============================================================

// ─── BASE DE DATOS SIMULADA ───────────────────────────────────
const DB = {

  usuarios: [
    { id: 1, nombre: 'Carlos Administrador', email: 'admin@vallecauca.gov.co', password: 'admin123', rol: 'admin', avatar: 'CA' },
    { id: 2, nombre: 'Luis Martínez',         email: 'entrenador@vallecauca.gov.co', password: 'coach123', rol: 'entrenador', avatar: 'LM' },
    { id: 3, nombre: 'Pedro Jiménez',          email: 'entrenador2@vallecauca.gov.co', password: 'coach456', rol: 'entrenador', avatar: 'PJ' },
    { id: 4, nombre: 'Juan Pérez García',      email: 'juan@vallecauca.gov.co', password: 'dep123', rol: 'deportista', deportistaId: 1, avatar: 'JP' },
    { id: 5, nombre: 'María García López',     email: 'maria@vallecauca.gov.co', password: 'dep456', rol: 'deportista', deportistaId: 2, avatar: 'MG' },
    { id: 6, nombre: 'Carlos Rodríguez M.',    email: 'carlos@vallecauca.gov.co', password: 'dep789', rol: 'deportista', deportistaId: 3, avatar: 'CR' },
  ],

  deportistas: [
    { id: 1, nombre: 'Juan Pérez García',   identificacion: '1234567890', deporte: 'Atletismo', categoria: 'Senior',   municipio: 'Cali',         estado: 'Activo',   fechaNacimiento: '1998-03-15', telefono: '3001234567', email: 'juan@vallecauca.gov.co',    consentimiento: true, entrenadorId: 2, avatar: 'JP', color: '#1565C0' },
    { id: 2, nombre: 'María García López',  identificacion: '9876543210', deporte: 'Rugby',     categoria: 'Junior',   municipio: 'Cali',         estado: 'Activo',   fechaNacimiento: '2001-07-22', telefono: '3009876543', email: 'maria@vallecauca.gov.co',   consentimiento: true, entrenadorId: 2, avatar: 'MG', color: '#C62828' },
    { id: 3, nombre: 'Carlos Rodríguez M.', identificacion: '5555666777', deporte: 'Atletismo', categoria: 'Juvenil',  municipio: 'Palmira',      estado: 'Activo',   fechaNacimiento: '2003-11-05', telefono: '3005556667', email: 'carlos@vallecauca.gov.co',  consentimiento: true, entrenadorId: 2, avatar: 'CR', color: '#2E7D32' },
    { id: 4, nombre: 'Sofía Torres V.',     identificacion: '1122334455', deporte: 'Natación',  categoria: 'Senior',   municipio: 'Buenaventura', estado: 'Activo',   fechaNacimiento: '1997-01-30', telefono: '3001122334', email: 'sofia@vallecauca.gov.co',   consentimiento: true, entrenadorId: 2, avatar: 'ST', color: '#6A1B9A' },
    { id: 5, nombre: 'Diego Morales P.',    identificacion: '9988776655', deporte: 'Ciclismo',  categoria: 'Master',   municipio: 'Buga',         estado: 'Inactivo', fechaNacimiento: '1990-06-18', telefono: '3009988776', email: 'diego@vallecauca.gov.co',   consentimiento: true, entrenadorId: 3, avatar: 'DM', color: '#E65100' },
    { id: 6, nombre: 'Valeria Ospina R.',   identificacion: '3344556677', deporte: 'Voleibol',  categoria: 'Junior',   municipio: 'Tuluá',        estado: 'Activo',   fechaNacimiento: '2002-09-14', telefono: '3003344556', email: 'valeria@vallecauca.gov.co', consentimiento: true, entrenadorId: 3, avatar: 'VO', color: '#00695C' },
    { id: 7, nombre: 'Andrés Castaño H.',   identificacion: '7788990011', deporte: 'Fútbol',    categoria: 'Senior',   municipio: 'Palmira',      estado: 'Activo',   fechaNacimiento: '1995-04-20', telefono: '3007788990', email: 'andres@vallecauca.gov.co',  consentimiento: true, entrenadorId: 3, avatar: 'AC', color: '#F57F17' },
    { id: 8, nombre: 'Laura Reyes M.',      identificacion: '4433221100', deporte: 'Natación',  categoria: 'Juvenil',  municipio: 'Tuluá',        estado: 'Activo',   fechaNacimiento: '2004-05-11', telefono: '3004433221', email: 'laura@vallecauca.gov.co',   consentimiento: true, entrenadorId: 2, avatar: 'LR', color: '#AD1457' },
  ],

  entrenamientos: [
    // Juan Pérez (id:1) — 6 sesiones
    { id:1,  deportistaId:1, tipo:'Entrenamiento', fecha:'2024-01-08', velocidad:15.2, fuerza:68, resistencia:72, duracion:90,  observaciones:'Buen desempeño. Trabaja más resistencia.',         entrenadorId:2 },
    { id:2,  deportistaId:1, tipo:'Entrenamiento', fecha:'2024-01-15', velocidad:16.0, fuerza:70, resistencia:75, duracion:90,  observaciones:'Mejoró en velocidad notablemente.',               entrenadorId:2 },
    { id:3,  deportistaId:1, tipo:'Competencia',   fecha:'2024-01-22', velocidad:17.5, fuerza:72, resistencia:78, duracion:60,  observaciones:'Primera competencia del año. Buen resultado.',    entrenadorId:2 },
    { id:4,  deportistaId:1, tipo:'Entrenamiento', fecha:'2024-01-29', velocidad:16.8, fuerza:73, resistencia:80, duracion:90,  observaciones:'Consistente en fuerza.',                           entrenadorId:2 },
    { id:5,  deportistaId:1, tipo:'Entrenamiento', fecha:'2024-02-05', velocidad:17.2, fuerza:75, resistencia:83, duracion:120, observaciones:'Excelente sesión. Todos los indicadores al alza.', entrenadorId:2 },
    { id:6,  deportistaId:1, tipo:'Competencia',   fecha:'2024-02-12', velocidad:18.5, fuerza:78, resistencia:85, duracion:60,  observaciones:'Nuevo récord personal en velocidad.',             entrenadorId:2 },
    // María García (id:2) — 6 sesiones
    { id:7,  deportistaId:2, tipo:'Entrenamiento', fecha:'2024-01-10', velocidad:12.0, fuerza:82, resistencia:65, duracion:90,  observaciones:'Fuerte en contacto físico.',                       entrenadorId:2 },
    { id:8,  deportistaId:2, tipo:'Entrenamiento', fecha:'2024-01-17', velocidad:12.5, fuerza:85, resistencia:68, duracion:90,  observaciones:'Liderazgo evidente en el campo.',                 entrenadorId:2 },
    { id:9,  deportistaId:2, tipo:'Competencia',   fecha:'2024-01-24', velocidad:13.0, fuerza:86, resistencia:70, duracion:80,  observaciones:'Partido ganado. Destacada performance.',           entrenadorId:2 },
    { id:10, deportistaId:2, tipo:'Entrenamiento', fecha:'2024-01-31', velocidad:13.2, fuerza:88, resistencia:72, duracion:90,  observaciones:'Mejora sostenida.',                                entrenadorId:2 },
    { id:11, deportistaId:2, tipo:'Entrenamiento', fecha:'2024-02-07', velocidad:13.5, fuerza:90, resistencia:74, duracion:100, observaciones:'Lista para el campeonato departamental.',          entrenadorId:2 },
    { id:12, deportistaId:2, tipo:'Competencia',   fecha:'2024-02-14', velocidad:14.0, fuerza:92, resistencia:76, duracion:80,  observaciones:'MVP del partido. Temporada destacada.',            entrenadorId:2 },
    // Carlos Rodríguez (id:3) — 6 sesiones
    { id:13, deportistaId:3, tipo:'Entrenamiento', fecha:'2024-01-12', velocidad:10.5, fuerza:55, resistencia:60, duracion:60,  observaciones:'Deportista joven, gran potencial.',                entrenadorId:2 },
    { id:14, deportistaId:3, tipo:'Entrenamiento', fecha:'2024-01-19', velocidad:11.0, fuerza:58, resistencia:63, duracion:70,  observaciones:'Progresando bien.',                                entrenadorId:2 },
    { id:15, deportistaId:3, tipo:'Entrenamiento', fecha:'2024-01-26', velocidad:11.5, fuerza:60, resistencia:65, duracion:75,  observaciones:'Técnica mejorada.',                                entrenadorId:2 },
    { id:16, deportistaId:3, tipo:'Entrenamiento', fecha:'2024-02-02', velocidad:12.0, fuerza:63, resistencia:68, duracion:80,  observaciones:'Excelente actitud.',                               entrenadorId:2 },
    { id:17, deportistaId:3, tipo:'Competencia',   fecha:'2024-02-09', velocidad:12.5, fuerza:65, resistencia:70, duracion:60,  observaciones:'Primera competencia. Aprendizaje valioso.',       entrenadorId:2 },
    { id:18, deportistaId:3, tipo:'Entrenamiento', fecha:'2024-02-16', velocidad:13.0, fuerza:67, resistencia:72, duracion:85,  observaciones:'Curva de aprendizaje muy positiva.',              entrenadorId:2 },
    // Sofía Torres (id:4)
    { id:19, deportistaId:4, tipo:'Entrenamiento', fecha:'2024-01-14', velocidad:14.0, fuerza:60, resistencia:88, duracion:120, observaciones:'Excelente flotabilidad. Tiempo mejorado.',         entrenadorId:2 },
    { id:20, deportistaId:4, tipo:'Competencia',   fecha:'2024-02-10', velocidad:15.3, fuerza:62, resistencia:91, duracion:90,  observaciones:'Primer lugar en 200m estilo libre.',              entrenadorId:2 },
    // Diego Morales (id:5)
    { id:21, deportistaId:5, tipo:'Entrenamiento', fecha:'2024-01-20', velocidad:22.0, fuerza:70, resistencia:90, duracion:180, observaciones:'Preparación para temporada.',                      entrenadorId:3 },
    { id:22, deportistaId:5, tipo:'Entrenamiento', fecha:'2024-02-01', velocidad:23.5, fuerza:72, resistencia:92, duracion:180, observaciones:'Ritmo estable.',                                   entrenadorId:3 },
  ]
};

// ─── AUTENTICACIÓN ────────────────────────────────────────────
function login(email, password) {
  const user = DB.usuarios.find(u => u.email === email && u.password === password);
  if (!user) return null;
  const session = { ...user };
  delete session.password;
  session.loginTime = Date.now();
  localStorage.setItem('sdvc_session', JSON.stringify(session));
  localStorage.setItem('sdvc_lastActivity', Date.now().toString());
  return session;
}

function logout() {
  localStorage.removeItem('sdvc_session');
  localStorage.removeItem('sdvc_lastActivity');
  window.location.href = 'index.html';
}

function getSession() {
  try { return JSON.parse(localStorage.getItem('sdvc_session')); }
  catch { return null; }
}

function checkAuth(requiredRole) {
  const user = getSession();
  if (!user) { window.location.href = 'index.html'; return null; }
  if (requiredRole && user.rol !== requiredRole) { window.location.href = 'index.html'; return null; }
  return user;
}

function updateActivity() {
  localStorage.setItem('sdvc_lastActivity', Date.now().toString());
}

function setupAutoLogout(minutes = 15) {
  ['mousemove', 'keypress', 'click', 'scroll'].forEach(ev =>
    document.addEventListener(ev, updateActivity, { passive: true })
  );
  setInterval(() => {
    const last = parseInt(localStorage.getItem('sdvc_lastActivity') || '0');
    if (Date.now() - last > minutes * 60 * 1000) {
      alert('Tu sesión fue cerrada por inactividad (15 min).');
      logout();
    }
  }, 30_000);
}

// ─── UTILIDADES ───────────────────────────────────────────────
function formatDate(d) {
  if (!d) return '—';
  return new Date(d + 'T12:00:00').toLocaleDateString('es-CO', { day:'2-digit', month:'2-digit', year:'numeric' });
}

function calcularPromedio(arr, field) {
  if (!arr.length) return 0;
  return parseFloat((arr.reduce((s, e) => s + (e[field] || 0), 0) / arr.length).toFixed(1));
}

function getMetricasDeportista(deportistaId) {
  const ents = DB.entrenamientos.filter(e => e.deportistaId === deportistaId)
                                .sort((a, b) => a.fecha.localeCompare(b.fecha));
  if (!ents.length) return null;
  const last = ents[ents.length - 1];
  const prev = ents[ents.length - 2] || ents[0];
  return {
    velocidad:   calcularPromedio(ents, 'velocidad'),
    fuerza:      calcularPromedio(ents, 'fuerza'),
    resistencia: calcularPromedio(ents, 'resistencia'),
    sesiones:    ents.length,
    progreso:    Math.round(((last.velocidad - ents[0].velocidad) / ents[0].velocidad) * 100),
    lastDate:    last.fecha,
    entries:     ents,
    velTrend:    last.velocidad - prev.velocidad,
    fueTrend:    last.fuerza - prev.fuerza,
    resTrend:    last.resistencia - prev.resistencia,
  };
}

function getChartData(deportistaId, metric = 'velocidad') {
  const ents = DB.entrenamientos
    .filter(e => e.deportistaId === deportistaId)
    .sort((a, b) => a.fecha.localeCompare(b.fecha));
  return {
    labels: ents.map((_, i) => `Sem ${i + 1}`),
    data:   ents.map(e => e[metric] || 0)
  };
}

// ─── OPERACIONES CRUD ─────────────────────────────────────────
function addDeportista(data) {
  const existing = DB.deportistas.find(d => d.identificacion === data.identificacion);
  if (existing) return { error: 'Ya existe un deportista con ese número de identificación.' };
  const id = Math.max(...DB.deportistas.map(d => d.id)) + 1;
  const initials = data.nombre.trim().split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  const newDep = { id, ...data, estado: 'Activo', avatar: initials, color: getAvatarColor(data.nombre) };
  DB.deportistas.push(newDep);
  return { success: true, deportista: newDep };
}

function addEntrenamiento(data) {
  const id = DB.entrenamientos.length ? Math.max(...DB.entrenamientos.map(e => e.id)) + 1 : 1;
  const entry = { id, ...data };
  DB.entrenamientos.push(entry);
  return entry;
}

// ─── UI HELPERS ───────────────────────────────────────────────
const AVATAR_COLORS = ['#1565C0','#C62828','#2E7D32','#6A1B9A','#E65100','#00695C','#F57F17','#AD1457','#0277BD','#558B2F'];

function getAvatarColor(str) {
  let h = 0;
  for (const c of str) h = c.charCodeAt(0) + ((h << 5) - h);
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
}

function showToast(message, type = 'success') {
  document.querySelectorAll('.sdvc-toast').forEach(t => t.remove());
  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  const toast = Object.assign(document.createElement('div'), { className: `sdvc-toast toast-${type}` });
  toast.innerHTML = `<span class="toast-icon">${icons[type] || 'ℹ'}</span><span>${message}</span>`;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 3500);
}

function openModal(id) {
  const m = document.getElementById(id);
  if (!m) return;
  m.style.display = 'flex';
  requestAnimationFrame(() => m.classList.add('open'));
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (!m) return;
  m.classList.remove('open');
  setTimeout(() => m.style.display = 'none', 280);
}

function showSection(id) {
  document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(item =>
    item.classList.toggle('active', item.dataset.section === id)
  );
  // Actualizar título en topbar
  const label = document.querySelector(`.nav-item[data-section="${id}"] .nav-label`);
  if (label) {
    const title = document.getElementById('pageTitle');
    if (title) title.textContent = label.textContent.trim();
  }
  // Cerrar sidebar en mobile
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('show');
}

function initSidebar() {
  const toggle  = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (toggle)  toggle.addEventListener('click', () => { sidebar.classList.toggle('open'); overlay.classList.toggle('show'); });
  if (overlay) overlay.addEventListener('click', () => { sidebar.classList.remove('open'); overlay.classList.remove('show'); });
}

function renderUserInfo(user) {
  const nameEl   = document.getElementById('userName');
  const roleEl   = document.getElementById('userRole');
  const avatarEl = document.getElementById('userAvatar');
  const roles    = { admin: 'Administrador', entrenador: 'Entrenador', deportista: 'Deportista' };
  if (nameEl)   nameEl.textContent   = user.nombre;
  if (roleEl)   roleEl.textContent   = roles[user.rol] || user.rol;
  if (avatarEl) { avatarEl.textContent = user.avatar; avatarEl.style.background = getAvatarColor(user.nombre); }
}