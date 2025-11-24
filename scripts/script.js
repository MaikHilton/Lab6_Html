document.addEventListener("DOMContentLoaded", () => {
  // LOGIN
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (email && password.length >= 6) {
        document.getElementById("loginMessage").textContent = "✅ Вхід виконано успішно!";
      } else {
        alert("Будь ласка, введіть правильні дані!");
      }
    });
  }

  // REGISTER
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("fullname").value.trim();
      const terms = document.getElementById("terms").checked;

      if (name.length > 2 && terms) {
        document.getElementById("registerMessage").textContent = "✅ Реєстрацію успішно завершено!";
      } else {
        alert("Перевірте правильність заповнення полів!");
      }
    });
  }
});
