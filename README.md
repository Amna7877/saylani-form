# 📩 Saylani Contact / Registration Form

A fully responsive **Contact / Registration Form** built with **HTML, CSS, and JavaScript**, integrated with **Firebase Firestore** for real-time data storage.

---

## 💡 Overview

This project is developed as part of my **Frontend Development Training** under **Saylani Mass IT Training (SMIT)**.  
It demonstrates form validation, error handling, Firebase integration, and responsive UI — all created with bootstrap framework and HTML, CSS, and JavaScript.

---

## ✨ Features

- 📱 Fully responsive and mobile-friendly design  
- 🧩 Real-time JavaScript validation for all inputs  
- ⚡ Dynamic error messages and smooth user experience  
- 🔥 Firebase Firestore database integration for data saving  
- 🧭 Auto-active navigation highlight based on current page  
- 🧼 Form reset after successful submission  

---

## 🧠 Tech Stack

| Technology | Role |
|-------------|------|
| **HTML5** | Structure & Semantic Layout |
| **CSS3** | Styling & Responsive Design |
| **JavaScript (ES6)** | Validation & Firebase Logic |
| **Firebase Firestore** | Online Database Storage |

---

## ⚙️ Firebase Configuration

```js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
----
.

🚀 Live Demo

🌐 Live Site:🔗 (https://saylani-form-register.netlify.app)(#)


💾 GitHub Repo: Saylani Form Project
Github Link:🔗(https://github.com/Amna7877/saylani-form)(#)

👩‍💻 Author

Amna Mehmood
🎓 Frontend Development Student @ SMIT
💻 Beginner Frontend Developer

🔗 LinkedIn

https://www.linkedin.com/in/amna-mehmood-611430371/
const app = initializeApp(firebaseConfig);
window.db = getFirestore(app);
