import { jest } from '@jest/globals'
import { get_movies } from "../javascript/get-movies.js"
import mockedMoviesResponse from "./mocks/mock_movies.json"
import { API_URL, OPTIONS } from "../javascript/constants.js"


describe('movies service', () => {
  it('should fetch and return a list of movies from get_movies function', async () => {
    //Arrange
    const mockedMovies = jest.fn().mockResolvedValue({
      text: () => Promise.resolve(mockedMoviesResponse),
    });

    global.fetch = mockedMovies;

    //Act
    const response = await get_movies();

    //Assert
    expect(fetch).toHaveBeenCalledWith(API_URL, OPTIONS);
    expect(response).toEqual(mockedMoviesResponse.text);

  });
});
