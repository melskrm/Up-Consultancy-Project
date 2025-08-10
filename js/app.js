/*faqs section start*/
const accordion = document.getElementsByClassName("question");
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

/*faqs section end*/

/*services page contact section start*/

const btn = document.querySelector(".contact-section-btn");
const nameInput = document.querySelector(".input-name");
const emailInput = document.querySelector(".input-email");
const messageInput = document.querySelector(
  ".contact-section-input-message input"
);

btn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === "") {
    alert("Lütfen adınızı girin!");
    return;
  }
  if (email === "" || !email.includes("@")) {
    alert("Lütfen geçerli bir email girin!");
    return;
  }
  if (message === "") {
    alert("Lütfen mesajınızı yazın!");
    return;
  }

  console.log("Ad:", name);
  console.log("Email:", email);
  console.log("Mesaj:", message);

  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";

  alert("Mesajınız başarıyla gönderildi!");
});
/*services page contact section end*/
