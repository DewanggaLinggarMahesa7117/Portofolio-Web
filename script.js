// 1. Dark / Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// 2. Interactive Project Category Filter
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    projectCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// 3. Copy Email Button with Feedback
const copyEmailBtn = document.getElementById("copy-email-btn");

copyEmailBtn.addEventListener("click", () => {
  const email = copyEmailBtn.getAttribute("data-email");
  navigator.clipboard.writeText(email).then(() => {
    const originalText = copyEmailBtn.innerHTML;
    copyEmailBtn.innerHTML = "✅ Email Copied!";
    setTimeout(() => {
      copyEmailBtn.innerHTML = originalText;
    }, 2000);
  });
});