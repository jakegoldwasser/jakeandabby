// Wedding date — update here if the date/venue is confirmed
const WEDDING_DATE = new Date("2027-09-04T16:00:00-04:00");

function updateCountdown() {
  const now = new Date();
  const diff = WEDDING_DATE - now;

  const els = {
    days: document.getElementById("cd-days"),
    hours: document.getElementById("cd-hours"),
    mins: document.getElementById("cd-mins"),
    secs: document.getElementById("cd-secs"),
  };

  if (diff <= 0) {
    els.days.textContent = "0";
    els.hours.textContent = "0";
    els.mins.textContent = "0";
    els.secs.textContent = "0";
    return;
  }

  const day = 1000 * 60 * 60 * 24;
  const days = Math.floor(diff / day);
  const hours = Math.floor((diff % day) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  els.days.textContent = days;
  els.hours.textContent = String(hours).padStart(2, "0");
  els.mins.textContent = String(mins).padStart(2, "0");
  els.secs.textContent = String(secs).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Nav: solid background on scroll
const topbar = document.getElementById("topbar");
function updateTopbar() {
  topbar.classList.toggle("solid", window.scrollY > 40);
}
updateTopbar();
window.addEventListener("scroll", updateTopbar, { passive: true });

// Nav: mobile menu toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});
