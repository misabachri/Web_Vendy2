const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((node) => revealObserver.observe(node));

const cookieBanner = document.getElementById('cookieBanner');
const cookieAccept = document.getElementById('cookieAccept');
const cookieDecline = document.getElementById('cookieDecline');
const cookieKey = 'cookie-consent-v1';

if (cookieBanner && !localStorage.getItem(cookieKey)) {
  window.setTimeout(() => cookieBanner.classList.add('show'), 500);
}

function hideCookieBanner(consentValue) {
  if (!cookieBanner) return;
  localStorage.setItem(cookieKey, consentValue);
  cookieBanner.classList.remove('show');
}

cookieAccept?.addEventListener('click', () => hideCookieBanner('accepted'));
cookieDecline?.addEventListener('click', () => hideCookieBanner('declined'));

const contactForm = document.querySelector('.contact-form');
contactForm?.addEventListener('submit', (event) => {
  const honeypot = document.getElementById('company');
  if (honeypot && honeypot.value.trim() !== '') {
    event.preventDefault();
    return;
  }

  event.preventDefault();
  const email = document.getElementById('email');
  if (!email || !email.checkValidity()) {
    email?.focus();
    return;
  }

  contactForm.reset();
  const note = document.createElement('p');
  note.textContent = 'Děkujeme, e-mail byl uložen.';
  note.setAttribute('role', 'status');
  note.className = 'form-note';
  contactForm.appendChild(note);
  window.setTimeout(() => note.remove(), 3000);
});

const timelineScroll = document.getElementById('timelineScroll');
const timelineProgress = document.getElementById('timelineProgress');

function updateTimelineProgress() {
  if (!timelineScroll || !timelineProgress) return;
  const rect = timelineScroll.getBoundingClientRect();
  const viewport = window.innerHeight;
  const start = viewport * 0.82;
  const end = viewport * 0.18;
  const range = start - end;
  const current = start - rect.top;
  const ratio = Math.max(0, Math.min(1, current / range));
  const maxHeight = timelineScroll.offsetHeight - 10;
  timelineProgress.style.height = `${maxHeight * ratio}px`;
}

window.addEventListener('scroll', updateTimelineProgress, { passive: true });
window.addEventListener('resize', updateTimelineProgress);
updateTimelineProgress();
