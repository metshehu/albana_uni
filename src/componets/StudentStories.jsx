import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StudentStories() {
  const stories = [
    {
      name: "Ardit Krasniqi",
      photo: "/student1.png",
      text: "Pasi mbarova studimet në 'Arkitekt Sinani', fillova punë si teknik elektronik. Shkolla më përgatiti plotësisht për tregun e punës.",
      field: "Elektronikë Industriale",
    },
    {
      name: "Elira Kola",
      photo: "/student1.png",
      text: "Mësimi praktik dhe mbështetja nga profesorët më ndihmuan të zhvilloj aftësi reale për karrierën time si zhvilluese softuerësh.",
      field: "Teknologji Informacioni",
    },
    {
      name: "Blerim Hoxha",
      photo: "/student1.png",
      text: "Përvoja ime në laboratorët e shkollës më ndihmoi të kuptoj se pasioni dhe dija ecin dorë për dore drejt suksesit.",
      field: "Mekatronikë",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % stories.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [stories.length]);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + stories.length) % stories.length);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % stories.length);

  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl text-center font-bold text-blue-900 mb-12">
        Sukseset e Nxënësve Tanë
      </h2>

      <div className="max-w-6xl mx-auto px-6 text-center relative">
        {/* Fixed height wrapper */}
        <div className="relative flex items-center justify-center h-[420px] md:h-[440px] lg:h-[460px]">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center px-6 transition-all duration-700 ease-in-out ${
                index === current
                  ? "opacity-100 z-10 pointer-events-auto"
                  : "opacity-0 z-[1] pointer-events-none"
              }`}
            >
              <img
                src={story.photo}
                alt={story.name}
                className="w-28 h-28 md:w-40 md:h-40 rounded-full object-cover shadow-lg mb-6 border-4 border-blue-900"
              />
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl italic mb-4">
                “{story.text}”
              </p>
              <h3 className="text-xl font-semibold text-blue-800">
                {story.name}
              </h3>
              <p className="text-gray-500">{story.field}</p>
            </div>
          ))}

          {/* Arrows — always above slides */}
          <div className="absolute inset-0 flex items-center justify-between px-4 z-50 pointer-events-none">
            <button
              onClick={prevSlide}
              className="bg-blue-900/80 hover:bg-blue-900 text-white p-2 md:p-3 rounded-full shadow transition-all pointer-events-auto"
              aria-label="Previous Story"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-blue-900/80 hover:bg-blue-900 text-white p-2 md:p-3 rounded-full shadow transition-all pointer-events-auto"
              aria-label="Next Story"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index
                  ? "bg-blue-900 scale-110"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

