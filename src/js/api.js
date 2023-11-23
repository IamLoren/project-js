import axios from 'axios';

const BASE_URL = 'https://food-boutique.b.goit.study/api/products';

export async function getPhotos(userInput, page, perPage) {
  const params = new URLSearchParams({
    keyword,
    category,
    limit,
    page,
  });
  const response = await axios.get(`${BASE_URL}?${params}`);
  return response.data;
}

// https://food-boutique.b.goit.study/api/products?keyword=Ac&category=Fresh_Produce&page=1&limit=1