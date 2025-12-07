const drejtimet = [];

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../componets/Headers";
import Footer from "../componets/Foter";

function ImageSlider({ images, title }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      3000,
    );
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="relative">
      <img
        src={images[index]}
        alt={title}
        className="w-full h-[320px] md:h-[420px] object-cover transform group-hover:scale-105 transition-all duration-700 ease-in-out"
      />

      {/* OPTIONAL small dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              index === i ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default function Drejtime() {
  const { sectionId } = useParams();

  useEffect(() => {
    if (sectionId) {
      const target = document.getElementById(sectionId);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 400);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [sectionId]);

  const drejtimet = [
    {
      id: "makineri",
      title: "Makineri, Prodhim dhe Ndërtimtari",
      icon: "🔧",
      desc: "Zbërthejmë dhe riparojmë makineri me precizion, pasion dhe përkushtim. Përgatisim profesionistë për industrinë mekanike dhe ndërtimore për një botë në zhvillim të vazhdueshëm.",
      image: [
        "/kabinetet/km1.jpeg",
        "/kabinetet/km2.jpeg",
      ],
    },

    {
      id: "mekatronike",
      title: "Mekatronikë",
      icon: "🤖",
      desc: "Bashkojmë mekanikën, elektronikën dhe teknologjinë në funksion të inovacionit për të krijuar sisteme moderne automatike dhe robotike.",
      image: ["/kabinetet/mekatronikes1.jpeg", "/kabinetet/mekatronikes2.jpeg"],
    },
    {
      id: "energjetike",
      title: "Energjetikë",
      icon: "⚡",
      desc: "Fuqizojmë të ardhmen me burime energjie të qëndrueshme dhe të sigurta. Studentët mësojnë rreth energjisë diellore, elektrike dhe mekanike për një të ardhme më të gjelbër.",
      image: ["/kabinetet/ekeltronike1.jpeg", "/kabinetet/ekeltronike2.jpeg"],
    },
    {
      id: "arkitekture",
      title: "Arkitekturë",
      icon: "🏛️",
      desc: "Dizajnojmë hapësira funksionale dhe frymëzuese që pasqyrojnë kohën dhe zhvillimin modern urban për një botë më estetike dhe më të qëndrueshme.",

      image: ["/kabinetet/mekatronikes1.jpeg", "/kabinetet/mekatronikes2.jpeg"],
    },
    {
      id: "ndertimtari",
      title: "Ndërtimtari",
      icon: "🏗️",
      desc: "Krijojmë bazat e zhvillimit të qyteteve dhe infrastrukturës moderne me përkushtim, saktësi dhe përgjegjësi profesionale.",

      image: [
        "/kabinetet/nder1.jpg",
        "/kabinetet/nder2.jpg",
        "/kabinetet/nder3.jpeg",
        "/kabinetet/nder4.jpeg",
      ],
    },
    {
      id: "gjeologji",
      title: "Gjeologji",
      icon: "🌎",
      desc: "Zbulojmë sekretet e Tokës përmes kërkimeve dhe analizave të thelluara, duke ndihmuar në zhvillimin e qëndrueshëm të resurseve natyrore.",

      image: [
        "/kabinetet/gj1.jpeg",
        "/kabinetet/gj33.jpeg",

        "/kabinetet/gj2.jpeg",
      ],
    },
    {
      id: "miniera",
      title: "Miniera",
      icon: "⛏️",
      desc: "Nxjerrim pasuritë natyrore me kujdes dhe përgjegjësi, duke respektuar mjedisin dhe standardet e sigurisë në industrinë minerare.",

      image: [" /kabinetet/kabinet_minera.jpg"," /kabinetet/kabinet_minera2.jpg"],

    },
    {
      id: "kimia",
      title: "Laborant i Kimisë",
      icon: "🧪",
      desc: "Eksperimentojmë dhe krijojmë substanca për të ardhmen. Studentët mësojnë të aplikojnë dijet kimike në industri, mjedis dhe kërkime shkencore.",

      image: [
        "/kabinetet/kimi1.jpeg",
        "/kabinetet/kimi2.jpeg",
      ],
    },
    {
      id: "teknologji-informacioni",
      title: "Teknologji e Informacionit dhe Komunikimit",
      icon: "💻",
      desc: "Mirëmbajmë dhe optimizojmë rrjete teknologjike, zhvillojmë softuerë dhe përgatisim profesionistë të epokës dixhitale që lidh botën përmes teknologjisë.",

      image: [

        "/kabinetet/Info123.jpeg",
      ],
    },
  ];

  return (
    <>
      <Header />

      <section className="relative h-[75vh] flex items-center justify-center text-center text-white bg-gradient-to-b from-blue-900 to-blue-700 overflow-hidden">
        <img
          src="/drejtime-hero.jpg"
          alt="Drejtimet Hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-800/60"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Drejtimet Profesionale
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-2xl text-gray-100">
            Profesione me pasion, dije dhe vizion për të ardhmen!
          </p>
        </div>
      </section>

      <div className="relative bg-gradient-to-b from-blue-50 via-gray-100 to-blue-100 py-24 px-6 md:px-12">
        <div className="relative z-10 space-y-28">
          {drejtimet.map((d, i) => (
            <section
              key={i}
              id={d.id}
              className={`max-w-6xl mx-auto flex flex-col-reverse md:flex-row ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-12 scroll-mt-32 rounded-3xl bg-white/70 backdrop-blur-lg shadow-lg p-6 md:p-10`}
            >
              {/* SLIDER HERE */}
              <div className="w-full md:w-1/2 group relative overflow-hidden rounded-3xl shadow-lg">
                <ImageSlider images={d.image} title={d.title} />
              </div>

              {/* TEXT */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="text-5xl mb-3">{d.icon}</div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-5">
                  {d.title}
                </h2>
                <p className="text-lg text-gray-700 mb-4">{d.desc}</p>
                <button className="mt-4 bg-blue-700 text-white px-6 py-2 rounded-full">
                  Mëso më shumë
                </button>
              </div>
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
