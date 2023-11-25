import axios from "axios";

const emailInput = document.querySelector("#user-email");

export function subscribeMailNewProduct(event){
  event.preventDefault();

  const email = emailInput.value;

  axios
    .post("https://food-boutique.b.goit.study/api/subscription", {
      email,
    })
    .then((response) => {
      if (response.status === 201) {
        // Все вийшло чудово
        alert("Ваш email успішно відправлено!");
        console.log(response.message);
      } else {
        // Помилка
        alert("Виникла помилка під час відправлення email");
      }
    })
    .catch((error) => {
      // Помилка
      alert(error);
    });

    emailInput.value = "";
}



