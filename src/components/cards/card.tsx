import {IMovie} from "../../types/movie.ts";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import {useAppContext} from "../../context/app-context.tsx";

export default function Card({movie}: { movie: IMovie }) {
    const {handleModal} = useAppContext()
    return (
        <div
            onClick={() => handleModal({name: 'movie/details', data: movie})}
            className="text-white h-full shadow-[0_0_5px_3px_rgba(0,0,0,.4)] cursor-pointer hover:border-opacity-100
             rounded-md border-2 border-opacity-20 border-gray-400 p-2 bg-gray-900 flex flex-col justify-between">
            {
                movie.Loading ?
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                        <div className="flex-grow mb-2">
                            <Skeleton className="w-full h-full flex-grow"/>
                        </div>
                        <Skeleton className="w-full"/>
                        <Skeleton className="w-full"/>
                    </SkeletonTheme>
                    :
                    <div className="h-full flex flex-col justify-between">
                        <figure className="h-2/3 rounded-md overflow-hidden">
                            <img src={movie.Poster} alt={movie.Title} className="w-full h-full object-cover"/>
                        </figure>
                        <div className="flex-1 flex flex-col justify-between mt-4">
                            <h2 className="font-bold text-base">{movie.Title}</h2>
                            <p>{movie.Year}</p>
                        </div>
                    </div>
            }
        </div>
    )
}
