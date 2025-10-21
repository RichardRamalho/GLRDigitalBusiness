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
    "https://www.instagram.com/bussiness_digital_nr?igsh=MWhmdGg5MXZtYWdldQ%3D%3D",
    "_blank"
  );
}

// ---------------- Formulário de Contato ----------------
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Aqui você pode integrar com API, email ou WhatsApp
    alert(`Obrigado, ${name}! Sua mensagem foi enviada.`);

    contactForm.reset();
  });
}
