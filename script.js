// ============================================================
// Render project grids
// ============================================================
function renderGrid(containerId, projects) {
  const el = document.getElementById(containerId);
  el.innerHTML = projects.map(p => `
    <div class="project-card" data-id="${p.id}">
      <div class="card-img-wrap"><img src="${p.cover}" alt="${p.title}" loading="lazy"></div>
      <div class="card-body">
        <h4 class="card-title">${p.title}</h4>
        <p class="card-subtitle">${p.subtitle}</p>
      </div>
    </div>
  `).join("");
}

renderGrid("grid-current", PROJECTS.current);
renderGrid("grid-internship", PROJECTS.internship);
renderGrid("grid-college", PROJECTS.college);

// Flatten all projects into a lookup
const ALL_PROJECTS = [...PROJECTS.current, ...PROJECTS.internship, ...PROJECTS.college];
function findProject(id) {
  return ALL_PROJECTS.find(p => p.id === id);
}

// ============================================================
// Project modal
// ============================================================
const projectModal = document.getElementById("project-modal");
const modalContent = document.getElementById("modal-content");
const modalPanel = document.getElementById("modal-panel");

function openProject(id) {
  const p = findProject(id);
  if (!p) return;

  const statsHtml = p.stats ? `
    <div class="modal-stats">
      ${p.stats.map(([label, value]) => `
        <div class="stat"><div class="stat-label">${label}</div><div class="stat-value">${value}</div></div>
      `).join("")}
    </div>` : "";

  const detailsHtml = p.details ? `
    <ul class="modal-detail-list">
      ${p.details.map(d => `<li>${d}</li>`).join("")}
    </ul>` : "";

  const toolsHtml = `
    <div class="modal-tools">
      ${p.tools.map(t => `<span class="tag">${t}</span>`).join("")}
    </div>`;

  const sheetsHtml = `
    <div class="modal-sheets">
      <h4>Drawings &amp; Views</h4>
      ${p.sheets.map(s => `
        <div class="sheet-item">
          <img src="${s.img}" alt="${s.label}" class="lightbox-trigger" data-src="${s.img}">
          <p class="sheet-caption">${s.label}</p>
        </div>
      `).join("")}
    </div>`;

  modalContent.innerHTML = `
    <div class="modal-hero"><img src="${p.cover}" alt="${p.title}"></div>
    <div class="modal-body-pad">
      <p class="modal-subtitle">${p.subtitle}</p>
      <h2 class="modal-title">${p.title}</h2>
      <div class="modal-role"><strong>Role —</strong> ${p.role}</div>
      <p class="modal-desc">${p.description}</p>
      ${statsHtml}
      ${detailsHtml}
      ${toolsHtml}
      ${sheetsHtml}
    </div>
  `;

  projectModal.classList.add("open");
  modalPanel.scrollTop = 0;
  document.body.style.overflow = "hidden";

  // wire up lightbox triggers
  modalContent.querySelectorAll(".lightbox-trigger").forEach(img => {
    img.addEventListener("click", () => openLightbox(img.dataset.src));
  });
}

function closeProject() {
  projectModal.classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("click", (e) => {
  const card = e.target.closest(".project-card");
  if (card) openProject(card.dataset.id);
});
document.getElementById("modal-close").addEventListener("click", closeProject);
projectModal.addEventListener("click", (e) => {
  if (e.target === projectModal) closeProject();
});

// ============================================================
// Lightbox (full-size sheet viewer)
// ============================================================
const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.innerHTML = `<button class="lightbox-close">&times;</button><img src="" alt="">`;
document.body.appendChild(lightbox);
const lightboxImg = lightbox.querySelector("img");

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add("open");
}
function closeLightbox() { lightbox.classList.remove("open"); }
lightbox.addEventListener("click", closeLightbox);

// ============================================================
// Contact modal
// ============================================================
const contactModal = document.getElementById("contact-modal");
function openContact() {
  contactModal.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeContact() {
  contactModal.classList.remove("open");
  document.body.style.overflow = "";
}
["nav-contact-btn", "hero-contact-btn", "footer-contact-btn"].forEach(id => {
  document.getElementById(id).addEventListener("click", (e) => {
    e.preventDefault();
    openContact();
  });
});
document.getElementById("contact-close").addEventListener("click", closeContact);
contactModal.addEventListener("click", (e) => {
  if (e.target === contactModal) closeContact();
});

// ============================================================
// Global escape key handling
// ============================================================
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
    closeProject();
    closeContact();
  }
});

// ============================================================
// Nav background on scroll (subtle enhancement)
// ============================================================
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) nav.style.borderBottomColor = "rgba(232,225,211,0.28)";
  else nav.style.borderBottomColor = "rgba(232,225,211,0.14)";
});
