import { jest } from '@jest/globals'
import { get_movies } from "../javascript/get-movies.js"
import { get_movie_by_id } from "../javascript/get-movie.js"
import { moviesResponse } from "./mocks/mocked_movies.js"
import { movieResponse } from "./mocks/mocked_movie.js"
import { API_URL, API_MOVIE_ID_URL, OPTIONS } from "../javascript/constants.js"


describe('movies service', () => {
  it('should return the list of movies using get_movies function', async () => {
    const mockFetch = Promise.resolve({
      text: () => Promise.resolve(moviesResponse),
    });

    global.fetch = jest.fn().mockImplementation(() => mockFetch);

    const response = await get_movies();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(API_URL, OPTIONS);
    expect(response).toEqual(JSON.parse(moviesResponse).results);
  });

  it('should return a movie using get_movie function', async () => {
    const mockFetch = Promise.resolve({
      text: () => Promise.resolve(movieResponse),
    });
    const expectedMovieId = 'tt0046912'
    const MOVIE_URL = API_MOVIE_ID_URL(expectedMovieId)
    global.fetch = jest.fn().mockImplementation(() => mockFetch);

    const response = await get_movie_by_id(expectedMovieId);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(MOVIE_URL, OPTIONS);
    expect(response.results).toEqual(JSON.parse(movieResponse).results);
  });
});