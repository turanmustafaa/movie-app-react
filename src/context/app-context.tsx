import React, {createContext, useContext, useState} from "react";
import {IModal} from "../types/modal";
import {IMovie} from "../types/movie.ts";

interface AppContextType {
    slider: IMovie[];
    handleSlider: (data: IMovie[]) => void;
    type: string;
    handleType: (type: string) => void;
    search: string;
    handleSearch: (search: string) => void;
    modal: IModal;
    handleModal: (modal: IModal) => void;
    movies: IMovie[];
    handleMovies: (data: IMovie[], paginate: boolean) => void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        console.log("useAppContext must be used within an AppContextProvider");
    }
    return context;
};

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({children,}) => {
    const [slider, setSlider] = useState<IMovie[]>([] as IMovie[]);
    const handleSlider = (data: IMovie[]) => setSlider(data);

    const [type, setType] = useState<string>('');
    const handleType = (type: string) => setType(type);

    const [search, setSearch] = useState<string>('');
    const handleSearch = (search: string) => setSearch(search);

    const [modal, setModal] = useState<IModal>({} as IModal);
    const handleModal = (modal: IModal) => setModal((prev) => prev.name === modal.name ? {name: null, data: {} as IMovie} : modal);

    const [movies, setMovies] = useState<IMovie[]>([] as IMovie[]);
    const handleMovies = (data: IMovie[], paginate: boolean) => setMovies((prev) => paginate ? [...prev.filter(one => !one.Loading), ...data] : data);

    const values = {
        slider,
        handleSlider,
        type,
        handleType,
        search,
        handleSearch,
        modal,
        handleModal,
        movies,
        handleMovies
    };
    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default ContextProvider;
