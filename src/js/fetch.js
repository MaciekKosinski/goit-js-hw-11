import axios from "axios";

export async function fetchImages(name) {
  try {
    let page = 1;
    let limit = 40;

    const params = new URLSearchParams({
      page: page,
      per_page: limit,
    });

    const url = `https://pixabay.com/api/?key=31315173-17511b63454f88c9511c833e7&q=${name}&${params}&image_type=photo&orientation=horizontal&safesearch=true`;

    const response = await axios.get(url);
    const responseFormat = await response.data;
    page += 1;
    return responseFormat;
  } catch (error) {
      console.error(error);
    }
}