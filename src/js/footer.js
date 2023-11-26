import axios from 'axios';
const form = document.querySelector('.footer-form');
form.addEventListener('submit', subscribeMailNewProduct);

const emailInput = document.querySelector('#user-email');

export function subscribeMailNewProduct(event) {
  event.preventDefault();

  const email = emailInput.value;

  axios
    .post('https://food-boutique.b.goit.study/api/subscription', {
      email,
    })
    .then(response => {
      if (response.status === 201) {
        alert(
          'Welcome to the Food Boutique! 🥦🍓 With Food Boutique, you are not just subscribing to food, you are signing up for a fresher, fitter, and happier you. Get ready to elevate your wellness journey, one bite at a time!'
        );
      } else {
        alert('Oops, something went wrong...');
      }
    })
    .catch(error => {
      alert('Subscription already exists');
    });

  emailInput.value = '';
}
