import axios from 'axios';



//НАГАДУЮ, ЩО, ВИКЛИКАЮЧИ КОЖНУ З ЦИХ ФУНКЦІЙ У СЕБЕ В КОДІ, ВАМ ЇХ ТРЕБА ОГОРНУТИ В БЛОК TRY {} CACH{}. 
//ЯКЩО ВЕСЬ ВАШ ПОДАЛЬШИЙ КОД ЗАЛЕЖИТЬ ВІД РЕЗУЛЬТАТУ ВИКОНАННЯ ЦІЄЇ ФУНКЦІЇ, ВИ СТАВИТЕ ПЕРЕД ЇЇ НАЗВОЮ (ПЕРЕД ВИКЛИКОМ) ОПЕРАТОР AWAYT, А ПЕРЕД ТІЄЮ 
//ФУНКЦІЄЮ, ЯКА МІСТИТЬ В СОБІ ДАНИЙ ЗАПИТ НА СЕРВЕР, СТАВИТЕ ОПЕРАТОР ASYNC



const BASE_URL = 'https://food-boutique.b.goit.study/api/products';

export async function getProducts(userInput, page, perPage) {
  const params = new URLSearchParams({
    keyword,
    category,
    byPopularity,
    limit,
    page,
  });
  const response = await axios.get(`${BASE_URL}?${params}`);
  return response.data;
}


// get
export async function getProducttById(id) {
    const response = await axios.get(`https://food-boutique.b.goit.study/api/products/${id}`);
    return response.data
  }

  // POST
  export async function registrSubscription(client) {
    const response = await axios.post(`https://food-boutique.b.goit.study/api/subscription`, client,{
        headers: {
          'content-type': 'application/json',
        },
      })
    return response.data
  }

  export async function order(order) {
    const response = await axios.post(`https://food-boutique.b.goit.study/api/orders`, order,{
        headers: {
          'content-type': 'application/json',
        },
      })
    return response.data
  }

  // PUT
//   export async function updateClient(id, data) {
  
//     const response = await axios.put(`https://food-boutique.b.goit.study/api/subscription`, data,{
//       headers: {
//         'content-type': 'application/json',
//       },
//     })
//   return response.data
//   }