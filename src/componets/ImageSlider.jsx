import { useEffect, useState } from "react";

export default function ImageSlider() {
  const images = [
    "/kishe_po_mesoj_une_we_we.jpg",
    "/konentn_busyniggas.jpg",
    "/kontent_kollerat.jpg",
    "/kontnetn_studenta.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden bg-black">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={src}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Dots navigation */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-white scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

