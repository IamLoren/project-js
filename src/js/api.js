import axios from 'axios';



//НАГАДУЮ, ЩО, ВИКЛИКАЮЧИ КОЖНУ З ЦИХ ФУНКЦІЙ У СЕБЕ В КОДІ, ВАМ ЇХ ТРЕБА ОГОРНУТИ В БЛОК TRY {} CACH{}. 
//ЯКЩО ВЕСЬ ВАШ ПОДАЛЬШИЙ КОД ЗАЛЕЖИТЬ ВІД РЕЗУЛЬТАТУ ВИКОНАННЯ ЦІЄЇ ФУНКЦІЇ, ВИ СТАВИТЕ ПЕРЕД ЇЇ НАЗВОЮ (ПЕРЕД ВИКЛИКОМ) ОПЕРАТОР AWAYT, А ПЕРЕД ТІЄЮ 
//ФУНКЦІЄЮ, ЯКА МІСТИТЬ В СОБІ ДАНИЙ ЗАПИТ НА СЕРВЕР, СТАВИТЕ ОПЕРАТОР ASYNC



const BASE_URL = 'https://food-boutique.b.goit.study/api/products';

export async function getAllProducts() {
    const response = await axios.get(`${BASE_URL}?limit=9`);
    return response.data;
  }

  export async function getDiscountProducts() {
    const response = await axios.get(`https://food-boutique.b.goit.study/api/products/discount`);
    return response.data;
  }

  export async function getPopularProducts() {
    const response = await axios.get(`https://food-boutique.b.goit.study/api/products/popular`);
    return response.data;
  }

export async function getProductsByQuery(queryParams) {
  let response;
  let { keyword, category, endpoint } = queryParams;
  if (category === 'Categories') {
     response = await axios.get(`${BASE_URL}?keyword=${keyword}&${endpoint}=true&limit=9`);
  } else {
     response = await axios.get(`${BASE_URL}?keyword=${keyword}&category=${category}&${endpoint}=true&limit=9`);
  }
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