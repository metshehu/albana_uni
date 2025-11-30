import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const importAll = (context) => Object.values(context);

export default function SponsorsSlider() {
  const sponsors = importAll(
    import.meta.glob("/public/Biznes_logo/*.{png,jpg,jpeg,webp,svg}", { eager: true })
  );

  return (
    <div className="w-full py-16 bg-white">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        freeMode={true}
        allowTouchMove={false}
        speed={3000}
        loop={true}
        slidesPerView={5}
        spaceBetween={40}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 3, spaceBetween: 25 },
          1024: { slidesPerView: 5, spaceBetween: 40 },
          1440: { slidesPerView: 6, spaceBetween: 50 },
        }}
        className="w-full max-w-7xl mx-auto"
      >
        {sponsors.map((logo, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-40 flex items-center justify-center">
              <img
                src={logo.default}
                alt="logo"
                className="h-32 w-auto object-contain drop-shadow-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* smooth scrolling */}
      <style>
        {`
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
        `}
      </style>
    </div>
  );
}

