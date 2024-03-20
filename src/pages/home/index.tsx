import {useEffect} from 'react'
import useServices from '../../hooks/services/use-movies'
import LayoutWrapper from '../../layout/layout-wrapper'
import {useAppContext} from '../../context/app-context'
import Banner from "../../components/banners/banner.tsx";
import ViewerWrapper from "../../components/viewer/viewer-wrapper.tsx";

export default function Home() {
    const {movies, search, type} = useAppContext()
    const {searchMovies} = useServices()

    useEffect(() => {
        searchMovies()
    }, [search, type])

    return (
        <LayoutWrapper>
            <Banner/>
            <ViewerWrapper data={movies}/>
        </LayoutWrapper>
    )
}