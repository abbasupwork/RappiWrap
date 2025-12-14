import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function ImageCarousel({ slides }) {
  const autoplay = useRef(Autoplay({ delay: 2500, stopOnInteraction: false }));

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [autoplay.current]
  );

  return (
    <div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="
              min-w-[130px]
              p-4 
            "
          >
            <div className="flex justify-center rounded-full glass-card w-full">
              <img src={slide.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
