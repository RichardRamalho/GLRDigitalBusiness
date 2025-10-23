// ---------------- Elementos ----------------
const modalApp = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const contactLink = document.getElementById("contact");
const menu = document.getElementById("menu");

// ---------------- Toggle Menu Mobile ----------------
function toggleMenu() {
  if (!menu) return;

  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
  menu.classList.toggle("flex-col");
  menu.classList.toggle("md:flex-row");
  menu.classList.toggle("opacity-0");
  menu.classList.toggle("opacity-100");
  menu.classList.toggle("top-20");
}

// ---------------- Modal Contato ----------------
function openModal(event) {
  event.preventDefault();
  if (!modalApp) return;

  modalApp.classList.remove("hidden");
  modalApp.classList.add("flex");
  modalApp.classList.add("opacity-0");

  // Força animação fade-in
  setTimeout(() => {
    modalApp.classList.remove("opacity-0");
    modalApp.classList.add("opacity-100");
  }, 10);

  // Esc para fechar
  document.addEventListener("keydown", closeModalOnEsc);
}

function closeModal() {
  if (!modalApp) return;

  modalApp.classList.remove("opacity-100");
  modalApp.classList.add("opacity-0");

  // Aguarda animação antes de esconder
  setTimeout(() => {
    modalApp.classList.remove("flex");
    modalApp.classList.add("hidden");
  }, 300);

  document.removeEventListener("keydown", closeModalOnEsc);
}

function closeModalOnEsc(event) {
  if (event.key === "Escape") closeModal();
}

// ---------------- Event Listeners ----------------
if (closeModalBtn) {
  closeModalBtn.addEventListener("click", closeModal);
}

if (contactLink) {
  contactLink.addEventListener("click", openModal);
}

// ---------------- Abrir WhatsApp ----------------
function whatsAppOpen() {
  const number = "+5511994680346";
  window.open(
    `https://api.whatsapp.com/send/?phone=${number}&text&type=phone_number&app_absent=0`,
    "_blank"
  );
}

// ---------------- Abrir Instagram ----------------
function instaAppOpen() {
  window.open(
    "https://www.instagram.com/digital.glrbusiness?igsh=YnBhcWF6eGhpZzlp",
    "_blank"
  );
}

