import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import { useAppContext } from "../../context/app-context.tsx";

export default function Banner() {
  const { slider } = useAppContext();

  return (
    <section className="h-screen fixed top-0 left-0 right-0">
      <Swiper
        className={`h-full w-full`}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay]}
        speed={300}
      >
        {slider.slice(0, 10).map((one, index) => (
          <SwiperSlide
            className="h-full relative"
            key={`banner-slide-${index}`}
          >
            <figure className="h-full inline-block relative">
              <img alt={""} className={`h-full`} src={one.Poster} />
              <div className="absolute inset-0 bg-gradient-to-l from-gray-900 z-10"></div>
            </figure>
            <div className="absolute bottom-0 left-0 m-4 w-full text-white z-50">
              <h2 className="text-xl font-bold text-white">{one.Title}</h2>
              <p>{one.Year}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
