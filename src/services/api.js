import { API_KEY, SOURSEC } from 'services';

export const fetchImages = async (query, page) => {
  const response = await fetch(
    `${SOURSEC}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (response.ok) {
    return response.json();
  }
};
