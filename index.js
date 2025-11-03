document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("registerForm");
  const cnic = document.getElementById("cnic");
  const phone = document.getElementById("phone");

  // CNIC
  cnic.addEventListener("input", () => {
    let digits = cnic.value.replace(/\D/g, "");
    if (digits.length > 13) digits = digits.substring(0, 13);
    cnic.value = digits;  
  });

  // Phone input validation 
  phone.addEventListener("input", () => {
    let digits = phone.value.replace(/\D/g, "");
    if (digits.length > 11) digits = digits.substring(0, 11);
    phone.value = digits;

    const existingError = phone.parentNode.querySelector(".error-msg");
    if (digits.length < 11) {
      if (!existingError) showError(phone, "Phone must be 11 digits");
    } else if (existingError) {
      existingError.remove();
    }
  });

  // submit
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let isValid = true;

    form.querySelectorAll(".error-msg").forEach(el => el.remove());
    form.querySelectorAll(".is-invalid").forEach(el => el.classList.remove("is-invalid"));

    const requiredFields = form.querySelectorAll("[required]");
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        showError(field, "This field is required");
        isValid = false;
      }
    });

    const phoneDigits = phone.value.replace(/\D/g, "");
    if (phoneDigits.length !== 11) {
      showError(phone, "Phone must be 11 digits");
      isValid = false;
    }

    const rawCnic = cnic.value.replace(/\D/g, "");
    if (rawCnic.length !== 13) {
      showError(cnic, "CNIC must be 13 digits");
      isValid = false;
    }

    const cnicDigits = rawCnic.replace(/(\d{5})(\d{7})(\d{1})/, "$1-$2-$3");

    const agree = document.getElementById("agree");
    if (!agree.checked) {
      showError(agree, "Please confirm before submitting");
      isValid = false;
    }

    if (!isValid) return;

    const data = {
      fullname: form.fullname.value,
      fatherName: form.fatherName.value,
      email: form.email?.value || "",
      phone: phoneDigits,
      cnic: cnicDigits,
      fatherCnic: form.fatherCnic.value.replace(/\D/g, ""),
      dob: form.dob.value,
      gender: form.gender.value,
      qualification: form.qualification.value,
      proficiency: form.proficiency.value,
      laptop: form.laptop.value,
      country: form.country.value,
      city: form.city.value,
      classPref: form.classPref.value,
      course: form.course.value,
      address: form.address.value,
      createdAt: new Date().toISOString()
    };

    try {
      const { collection, addDoc } = await import("https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js");
      await addDoc(collection(window.db, "registrations"), data);
      alert("✅ Registration submitted successfully!");
      form.reset();
    } catch (error) {
      console.error("Firebase Error:", error);
      alert("Failed to save data: " + error.message);
    }
  });

  function showError(input, message) {
    input.classList.add("is-invalid");
    const existing = input.parentNode.querySelector(".error-msg");
    if (existing) existing.remove(); 
    const small = document.createElement("small");
    small.className = "error-msg text-danger d-block mt-1";
    small.innerText = message;
    input.parentNode.appendChild(small);
  }

});

