import create from 'zustand';

export interface Movie {
    imdbid: string;
    title: string;
    poster: string;
    trailer_link: string;
    is_favorite: boolean;
}

interface StoreState {
    movies: Movie[];
    apiKey: string | null;
    isLoggedIn: boolean;
    setMovies: (movies: Movie[]) => void;
    setApiKey: (apiKey: string) => void;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    toggleFavorite: (imdbid: string) => void;
}

export const useStore = create<StoreState>((set) => ({
    movies: [],
    apiKey: null,
    isLoggedIn: false,
    setMovies: (movies) => set({ movies }),
    setApiKey: (apiKey) => set({ apiKey }),
    setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
    toggleFavorite: (imdbid: string) => set((state) => ({
        movies: state.movies.map(movie =>
            movie.imdbid === imdbid ? { ...movie, is_favorite: !movie.is_favorite } : movie
        )
    })),
}));
