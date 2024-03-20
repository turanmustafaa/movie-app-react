import { useEffect } from 'react';
import { useAppContext } from '../../context/app-context'
import LayoutWrapper from '../../layout/layout-wrapper'

export default function About() {
  const {movies} = useAppContext()

  useEffect(() => {
    console.log(movies);
  },[])
  return (
    <LayoutWrapper>
      <section>About Page</section>
    </LayoutWrapper>
  )
}