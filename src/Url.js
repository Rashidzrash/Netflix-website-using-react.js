import { API_KEY } from "./Constants/Const";
export const Trending =`https://api.themoviedb.org/3/trending/movie/day${API_KEY}`
export const Popular =`https://api.themoviedb.org/3/movie/top_rated${API_KEY}`
export const MoviesList = `https://api.themoviedb.org/3/discover/movie${API_KEY}`