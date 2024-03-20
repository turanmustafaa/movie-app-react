import {IMovie} from "../../types/movie.ts";
import Card from "../cards/card.tsx";
import {useEffect, useRef} from "react";
import useMovies from "../../hooks/services/use-movies.ts";

export default function ViewerContainer({data, mood}: { data: IMovie[]; mood: 'small' | 'large' }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const invisibleRef = useRef<HTMLDivElement>(null);
    const {paginateMovies} = useMovies()

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const {scrollHeight, scrollTop, clientHeight} = containerRef.current;
            console.log(scrollHeight,'scrollheight',scrollTop,'scrolltop',clientHeight,'clientheight')
            if (scrollHeight - Math.ceil(scrollTop) === clientHeight) {
                console.log('calsıt 2')
                paginateMovies()
            }
        };

        if (containerRef.current) {
            containerRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="w-full flex-1 flex flex-wrap overflow-y-scroll p-2 md:px-4">
            {data.map((movie, index) => (
                <div key={index}
                     className={`p-1 md:p-4 h-1/2 ${mood === 'small' ? 'w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5' : 'w-full md:w-1/2 lg:w-1/3 xl:w-1/4'}`}>
                    <Card movie={movie}/>
                </div>
            ))}
            <div ref={invisibleRef} className="w-full p-2 md:p-4"></div>
        </div>
    );
}