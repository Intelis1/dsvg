script.js

const ctaBtn = document.getElementById("ctaBtn");
const message = document.getElementById("message");
const year = document.getElementById("year");
const contactForm = document.getElementById("contactForm");

if (year) year.textContent = new Date().getFullYear();

if (ctaBtn && message) {
  ctaBtn.addEventListener("click", () => {
    message.textContent = "Nice! You just ran JavaScript 🎉";
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(contactForm);
    const name = data.get("name") || "there";

    try {
      const res = await fetch(contactForm.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error("Network response not ok");

      if (message) message.textContent = `Thanks, ${name}! Your message was sent.`;
      contactForm.reset();
    } catch (err) {
      if (message) message.textContent = "Sorry — sending failed. Please try again later.";
    }
  });
}


if (message) message.textContent = `Thanks, ${name}! (Form submitted locally.)`;
