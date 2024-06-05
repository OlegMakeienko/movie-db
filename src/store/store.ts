import create from 'zustand';

export interface Movie {
    imdbid: string;
    title: string;
    poster: string;
    trailer_link: string;
    is_favorite: boolean;
}

export interface User {
    username: string;
    password: string;
}

interface StoreState {
    movies: Movie[];
    apiKey: string | null;
    isLoggedIn: boolean;
    user: User | null;
    setMovies: (movies: Movie[]) => void;
    setApiKey: (apiKey: string) => void;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    setUser: (user: User | null) => void;
    toggleFavorite: (imdbid: string) => void;
    addMovie: (movie: Movie) => void;
    deleteMovie: (imdbid: string) => void;
}

export const useStore = create<StoreState>((set) => ({
    movies: [],
    apiKey: null,
    isLoggedIn: false,
    user: null,
    setMovies: (movies) => set({ movies }),
    setApiKey: (apiKey) => set({ apiKey }),
    setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
    setUser: (user) => set({ user }),
    toggleFavorite: (imdbid: string) => set((state) => ({
        movies: state.movies.map(movie =>
            movie.imdbid === imdbid ? { ...movie, is_favorite: !movie.is_favorite } : movie
        )
    })),
    addMovie: (movie) => set((state) => ({
        movies: [...state.movies, movie]
    })),
    deleteMovie: (imdbid) => set((state) => ({
        movies: state.movies.filter(movie => movie.imdbid !== imdbid)
    }))
}));

export default useStore;