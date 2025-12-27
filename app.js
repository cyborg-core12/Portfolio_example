document.getElementById("year").textContent = new Date().getFullYear();

const btn = document.getElementById("themeBtn");
const root = document.documentElement;

let isDark = true;

btn.addEventListener("click", () => {
  isDark = !isDark;

  if (isDark) {
    root.style.setProperty("--bg", "#050505");
    root.style.setProperty("--text", "#e9e9e9");
    root.style.setProperty("--muted", "#a6a6a6");
    root.style.setProperty("--card", "#0b0b0b");
    root.style.setProperty("--border", "rgba(255,255,255,.08)");
    btn.textContent = "🌕";
  } else {
    root.style.setProperty("--bg", "#f5f5f5");
    root.style.setProperty("--text", "#0a0a0a");
    root.style.setProperty("--muted", "#555");
    root.style.setProperty("--card", "#ffffff");
    root.style.setProperty("--border", "rgba(0,0,0,.12)");
    btn.textContent = "🌌";
  }
});

const emailBtn = document.getElementById("copyEmail");
const email = "nacermoufhaha@gmail.com";

emailBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    showToast("Email copied!");
  } catch {
    showToast("Copy failed");
  }
});

function showToast(text) {
  let toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = text;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 1500);
}

