export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: { platform: Platform }[];
  metacritic: number;
}

//# removed and replaced with FetchReponse
//# export interface FetchGamesResponse {
//#   count: number;
//#   results: Game[];
//# }

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

//# removed and replaced with FetchReponse
//# export interface FetchGenresResponse {
//#   count: number;
//#   results: Genre[];
//# }

// fyi by putting in <T> you are basically passing a parameter when you
// call the interface. As in FetchResponse<Game>, or FetchResponse<Genre>
export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}
