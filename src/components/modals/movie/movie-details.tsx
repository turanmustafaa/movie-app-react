import ModalsContainer from "../modals-container";
import {useAppContext} from "../../../context/app-context.tsx";
import ApiService from "../../../utils/ApiService.ts";
import {useEffect, useState} from "react";
import {IMovieDetails} from "../../../types/movie.ts";

export default function MovieDetails() {
    const {modal} = useAppContext();
    const [movieDetails, setMovieDetails] = useState<IMovieDetails>({} as IMovieDetails)
    const getMovieDetails = async () => {
        try {
            const {data} = await ApiService.query(``, {
                apikey: import.meta.env.VITE_API_KEY,
                i: modal.data?.imdbID,
                plot: 'full'
            });
            setMovieDetails(data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        if (modal.data?.imdbID && modal.name === 'movie/details') getMovieDetails();
    }, [modal]);

    return (
        <ModalsContainer name="movie/details">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5 h-full p-8">
                <div className="w-full md:w-1/3 bg-black rounded-t-md h-[200px] lg:h-full">
                    <img
                        src={movieDetails.Poster}
                        alt={movieDetails.Title}
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>
                <div className="w-full flex flex-col items-start justify-between h-full overflow-y-scroll md:pr-3">
                    <h1 className="font-bold text-xl lg:text-3xl mb-3 text-white">{movieDetails.Title} <a className="text-blue-400 text-xs" target="_blank" href={`https://www.imdb.com/title/${movieDetails.imdbID}`}>See on IMDb</a></h1>
                    <p className="lg:text-lg text-white mb-2 italic">{movieDetails.Plot}</p>
                    <p className="lg:text-lg text-white mb-2"><strong>Director</strong>: {movieDetails.Director}</p>
                    <p className="lg:text-lg text-white mb-2"><strong>Actors</strong>: {movieDetails.Actors}</p>
                    <p className="lg:text-lg text-white mb-2"><strong>Genre</strong>: {movieDetails.Genre}</p>
                    <p className="lg:text-lg text-white mb-2"><strong>Language</strong>: {movieDetails.Language}</p>
                    <p className="lg:text-lg text-white mb-2"><strong>Country</strong>: {movieDetails.Country}</p>
                    <p className="lg:text-lg text-white mb-2"><strong>Box Office</strong>: {movieDetails.BoxOffice}</p>
                    <p className="lg:text-lg text-white mb-2"><strong>Runtime</strong>: {movieDetails.Runtime}</p>
                    <p className="lg:text-lg text-white mb-2"><strong>Rated</strong>: {movieDetails.Rated}</p>
                    <p className="lg:text-lg text-white mb-2"><strong>IMDB Rating</strong>: {movieDetails.imdbRating}</p>
                    <p className="lg:text-lg text-white mb-2"><strong>IMDB Votes</strong>: {movieDetails.imdbVotes}</p>
                </div>
            </div>
        </ModalsContainer>
    )
}
