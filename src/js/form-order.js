import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { order } from './api.js';
import localStorageAPI from './localStorage.js';

const input = document.querySelector('.datetime');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
}

flatpickr(input, options);

// const order = async (order) => {
//         try {
//           const response = await axios.post(`https://food-boutique.b.goit.study/api/orders`, order, {
//             headers: {
//               'content-type': 'application/json',
//             },
//           });
//           return response.data;
//         } catch (error) {
//           console.error("Order error: ", error.message);
//         }
// };
      

   document.addEventListener('DOMContentLoaded', function () {
     const orderButton = document.querySelector('.cart-order-info-btn');

     orderButton.addEventListener('submit', function (event) {
       event.preventDefault();

       const name = document.getElementById('name').value;
       const phone = document.getElementById('phone').value;
       const address = document.getElementById('address').value;
       const datetime = document.getElementById('datetime').value;

       const order = {
         name,
         phone,
         address,
         datetime,
       };

         console.log(order);
       localStorageAPI.save('lastOrder', order);
     });
   });
      



// const orderButton = document.querySelector('.cart-order-info-btn');
// const modale = document.querySelector('.order-backdrop');
// const isHidden = document.querySelector('.is-hidden');
// isHidden.style.display = 'none';

// orderButton.addEventListener('click', () => {
//     modale.classList.toggle('is-hidden');
// });

