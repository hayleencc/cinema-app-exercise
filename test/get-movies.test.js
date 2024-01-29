import { jest } from '@jest/globals'
import { get_movies } from "../javascript/get-movies.js"
import { moviesResponse } from "./mocks/mocked_movies.js"
import { API_URL, OPTIONS } from "../javascript/constants.js"


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
});