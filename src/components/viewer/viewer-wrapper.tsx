import ViewerHead from "./viewer-head.tsx";
import ViewerContainer from "./viewer-container.tsx";
import {useState} from "react";
import {IMovie} from "../../types/movie.ts";

export default function ViewerWrapper({data}: { data: IMovie[] }) {
    const [mood, setMood] = useState<'small' | 'large'>('small')

    return (
        <div className="relative z-10 flex flex-col items-end p-2 md:p-4 h-screen">
            <div className="bg-gray-700 bg-opacity-60 shadow-[0_0_10px_3px_rgba(0,0,0,.2)] flex-1 w-full md:w-4/5 2xl:w-3/4 flex flex-col rounded-lg overflow-hidden">
                <ViewerHead mood={mood} setMood={(val) => setMood(val)}/>
                <ViewerContainer data={data} mood={mood}/>
            </div>
        </div>
    )
}