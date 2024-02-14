import { API_MOVIE_ID_URL, OPTIONS } from "./constants.js";

export const get_movie_by_id = async (id) => {
    try {
        const movie_url = API_MOVIE_ID_URL(id);
        const response = await fetch(movie_url, OPTIONS);
        const result = await response.text();
        return JSON.parse(result);
    } catch (error) {
        console.error(error);
    }
}