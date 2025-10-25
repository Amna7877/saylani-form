document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelectorAll("form");

  form.forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      let isValid = true;

      form.querySelectorAll(".error-msg").forEach((msg) => msg.remove());
      form.querySelectorAll(".is-invalid").forEach((input) =>
        input.classList.remove("is-invalid")
      );

      const input = form.querySelectorAll("input, select, textarea");
      input.forEach((input) => {
        if (!input.checkValidity()) {
          isValid = false;
          input.classList.add("is-invalid");

          const error = document.createElement("small");
          error.textContent = "⚠️ Please fill this field correctly";
          error.className = "error-msg text-danger";
          input.parentNode.appendChild(error);
        }
      });

      if (isValid) {
        const formData = {};
        form.querySelectorAll("input, select, textarea").forEach((input) => {
          formData[input.name] = input.value;
        });

        try {
          const { addDoc, collection } = await import(
            "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js"
          );
          await addDoc(collection(window.db, "saylaniForms"), formData);
          alert("✅ Form submitted successfully and saved to Firebase!");
        } catch (error) {
          console.error("Error saving to Firebase:", error);
          alert("❌ Failed to save data to Firebase!");
        }

        form.reset();
      }
    });
  });

  const currentPage =
    this.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
