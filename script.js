// Demo site JS: smooth scroll, mobile nav, simple lead capture
document.addEventListener("click", (e) => {
  const a = e.target.closest("a[href^='#']");
  if (!a) return;
  const id = a.getAttribute("href");
  const el = document.querySelector(id);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });

  const mobileNav = document.querySelector(".mobileNav");
  const toggle = document.querySelector(".navToggle");
  if (mobileNav && !mobileNav.hasAttribute("hidden")) {
    mobileNav.setAttribute("hidden", "");
    toggle?.setAttribute("aria-expanded", "false");
  }
});

const toggle = document.querySelector(".navToggle");
const mobileNav = document.querySelector(".mobileNav");
toggle?.addEventListener("click", () => {
  const open = !mobileNav.hasAttribute("hidden");
  if (open) {
    mobileNav.setAttribute("hidden", "");
    toggle.setAttribute("aria-expanded", "false");
  } else {
    mobileNav.removeAttribute("hidden");
    toggle.setAttribute("aria-expanded", "true");
  }
});

const form = document.getElementById("leadForm");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name");
  const phone = data.get("phone");
  const goal = data.get("goal");
  const message = data.get("message");

  const subject = encodeURIComponent("New Lead - Lumina Studio");
  const body = encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\nGoal: ${goal}\nMessage: ${message || ""}\n\nSent from demo gym website.`
  );

  window.location.href = `mailto:ntvm0412@gmail.com?subject=${subject}&body=${body}`;
});
