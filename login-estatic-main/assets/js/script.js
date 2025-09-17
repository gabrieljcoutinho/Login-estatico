const imagem = document.querySelector("img");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const btnEntrar = document.querySelector("button[type='submit']");
const spanMsgEmail = document.querySelector("#msg-email");

imagem.addEventListener("click", function () {
  if (!imagem.src.includes("loginimage2")) {
    imagem.src = "./assets/images/loginimage2.png";
  } else {
    imagem.src = "./assets/images/loginimage.png";
  }
});

inputEmail.addEventListener("keyup", function () {
  if (inputEmail.value == "") {
    spanMsgEmail.innerText = "Digite algum valor no email";
  } else {
    spanMsgEmail.innerText = "";
  }
});

inputPassword.addEventListener("keyup", function () {
  const msgSpan = document.querySelector("#msgPassword");
  if (inputPassword.value.length < 8) {
    const span = document.createElement("span");
    const message = document.createTextNode(
      "A senha deve ter no mínimo 8 caracteres."
    );
    span.appendChild(message);
    span.setAttribute("id", "msgPassword");

    if (!msgSpan) {
      inputPassword.insertAdjacentElement("afterend", span);
    } else {
      msgSpan.innerText = "A senha deve ter no mínimo 8 caracteres.";
    }
  } else {
    msgSpan.innerText = "";
  }
});

btnEntrar.addEventListener("click", function (event) {
  event.preventDefault();
  const spanMsgPass = document.querySelector("#msgPassword");

  if(spanMsgPass.childNodes.length != 0 || spanMsgEmail.childNodes.length != 0){
      alert("Preencha todos os campos corretamente!")
  } else {
    alert("Seja bem vindo!")
  }
});
