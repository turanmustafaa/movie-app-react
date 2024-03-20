import {useAppContext} from "../../context/app-context";
import ApiService from "../../utils/ApiService";
import {IMovie, IMovieResponse} from "../../types/movie.ts";
import {useState} from "react";

export default function useMovies() {
    const {search, type, handleMovies, handleSlider} = useAppContext()
    const [page, setPage] = useState<number>(1)
    const searchMovies = async () => {
        try {
            const {data}: { data: IMovieResponse } = await ApiService.query('', {
                apikey: import.meta.env.VITE_API_KEY,
                s: search || 'avatar',
                type
            })
            setPage(1)
            const skeletons: IMovie[] = Array(10).fill(10).map(() => (
                {
                    Title: '',
                    Year: '',
                    imdbID: '',
                    Type: '',
                    Poster: '',
                    Loading: true
                }
            ))
            handleMovies(skeletons, false)
            handleSlider(data.Search.slice(0, 10) || [])
            return setTimeout(() => handleMovies(data.Search || [], false), 2000)
        } catch (error) {
            console.log(error);
        }
    }

    const paginateMovies = async () => {
        console.log('sgsgssgs')
        try {
            const {data}: { data: IMovieResponse } = await ApiService.query('', {
                apikey: import.meta.env.VITE_API_KEY,
                s: search || 'avatar',
                page: page + 1,
                type
            })
            setPage(page + 1)
            const skeletons: IMovie[] = Array(10).fill(10).map(() => (
                {
                    Title: '',
                    Year: '',
                    imdbID: '',
                    Type: '',
                    Poster: '',
                    Loading: true
                }
            ))
            handleMovies(skeletons, true)
            handleSlider(data.Search.slice(0, 10) || [])
            return setTimeout(() => handleMovies(data.Search || [], true), 2000)
        } catch (error) {
            console.log(error);
        }
    }

    return {searchMovies, paginateMovies};
}