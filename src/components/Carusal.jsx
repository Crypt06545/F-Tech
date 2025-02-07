import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards,Autoplay } from 'swiper/modules';

export default function Carousel() {
  const images = [
    "https://images.unsplash.com/photo-1738052380822-3dfcd949a53f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://source.unsplash.com/300x400/?city",
    "https://source.unsplash.com/300x400/?ocean",
    "https://source.unsplash.com/300x400/?forest",
    "https://source.unsplash.com/300x400/?mountain",
    "https://source.unsplash.com/300x400/?sunset",
    "https://source.unsplash.com/300x400/?space",
    "https://source.unsplash.com/300x400/?wildlife",
    "https://source.unsplash.com/300x400/?abstract",
  ];

  return (
    <div className="flex justify-center items-center min-h-screen w-full overflow-hidden">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]} // Autoplay
        // autoplay={{ delay: 3000, disableOnInteraction: false }} 
        className="w-72 h-96 sm:w-72 sm:h-96 md:w-72 md:h-96 lg:w-72 lg:h-96"
      >
        {images.map((img, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center rounded-lg text-white text-2xl font-bold bg-white/5 shadow-lg border border-white/20 backdrop-blur-sm"
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
