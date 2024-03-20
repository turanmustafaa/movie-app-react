import {useAppContext} from "../../context/app-context.tsx";

export default function ViewerHead({mood, setMood}: {
    mood: 'small' | 'large';
    setMood: (val: 'small' | 'large') => void
}) {
    const {search, handleSearch, type, handleType} = useAppContext()
    return (
        <div
            className="w-full flex flex-wrap md:flex-nowrap items-center px-8 py-4 gap-4 border-b border-gray-400 border-opacity-50 shadow-md">
            <label htmlFor="search" className="flex-1">
                <input id={'search'}
                       type="text"
                       defaultValue={search}
                       placeholder={'Search... (min 3 characters)'}
                       className="outline-0 bg-gray-600 border border-white bg-opacity-50 backdrop-blur-lg rounded w-full h-7 text-sm text-center text-white font-semibold"
                       onChange={(e) => handleSearch(e.target.value.length >= 3 ? e.target.value : 'avatar')}/>
            </label>
            <div className="w-full md:w-auto flex justify-end gap-4">
                <button className="p-1 h-7 aspect-square flex items-center justify-center rounded border border-white bg-white bg-opacity-30 font-bold"
                        onClick={() => setMood(mood === 'small' ? 'large' : 'small')}>
                    {mood === 'small' ?
                        <span>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="2" width="9" height="9" rx="2" fill="#fff"/>
                            <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="#fff"/>
                            <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="#fff"/>
                            <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="#fff"/>
                        </svg>
                    </span>
                        :
                        <span>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 7H3C2.4 7 2 6.6 2 6V3C2 2.4 2.4 2 3 2H6C6.6 2 7 2.4 7 3V6C7 6.6 6.6 7 6 7Z"
                                  fill="#fff"/>
                            <path opacity="0.3"
                                  d="M13 7H10C9.4 7 9 6.6 9 6V3C9 2.4 9.4 2 10 2H13C13.6 2 14 2.4 14 3V6C14 6.6 13.6 7 13 7ZM21 6V3C21 2.4 20.6 2 20 2H17C16.4 2 16 2.4 16 3V6C16 6.6 16.4 7 17 7H20C20.6 7 21 6.6 21 6ZM7 13V10C7 9.4 6.6 9 6 9H3C2.4 9 2 9.4 2 10V13C2 13.6 2.4 14 3 14H6C6.6 14 7 13.6 7 13ZM14 13V10C14 9.4 13.6 9 13 9H10C9.4 9 9 9.4 9 10V13C9 13.6 9.4 14 10 14H13C13.6 14 14 13.6 14 13ZM21 13V10C21 9.4 20.6 9 20 9H17C16.4 9 16 9.4 16 10V13C16 13.6 16.4 14 17 14H20C20.6 14 21 13.6 21 13ZM7 20V17C7 16.4 6.6 16 6 16H3C2.4 16 2 16.4 2 17V20C2 20.6 2.4 21 3 21H6C6.6 21 7 20.6 7 20ZM14 20V17C14 16.4 13.6 16 13 16H10C9.4 16 9 16.4 9 17V20C9 20.6 9.4 21 10 21H13C13.6 21 14 20.6 14 20ZM21 20V17C21 16.4 20.6 16 20 16H17C16.4 16 16 16.4 16 17V20C16 20.6 16.4 21 17 21H20C20.6 21 21 20.6 21 20Z"
                                  fill="#fff"/>
                        </svg>
                    </span>
                    }


                </button>
                <select name="type" id="" className="outline-0 h-7 rounded p-1 uppercase font-black text-xs  border border-white bg-gray-600 text-white" defaultValue={type}
                        onChange={(e) => handleType(e.target.value)}>
                    <option value="" className="uppercase font-black text-sm">all</option>
                    <option value="movie" className="uppercase font-black text-sm">movie</option>
                    <option value="series" className="uppercase font-black text-sm">series</option>
                    <option value="episode" className="uppercase font-black text-sm">episode</option>
                </select>
            </div>
        </div>
    )
}