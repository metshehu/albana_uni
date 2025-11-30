
import Header from "../componets/Headers";
import ImageSlider from "../componets/ImageSlider";
import StudentStories from "../componets/StudentStories";
import { Link } from "react-router-dom";
import Footer from "../componets/Foter";
import SponsorsSlider from "../componets/SponsorsSlider";

export default function Home() {
  return (
    <>
      <Header />

      {/* 🌟 HERO SECTION */}
      <section className="relative flex flex-col justify-center items-center text-center text-white h-[90vh] bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <img
          src="/drejtime-hero.jpg"
          alt="Arkitekt Sinani Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-700/60"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Shkolla e Mesme e Lartë Teknike <br /> “Arkitekt Sinani”
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-100 mb-8">
            Vendi ku arsimi profesional ndërthuret me kreativitetin dhe
            përgatitjen për të ardhmen!
          </p>

          <Link
            to="/drejtime"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            Zbuloni Drejtimet
          </Link>
        </div>
      </section>

      {/* 🖼️ IMAGE SLIDER */}

<SponsorsSlider />

      {/* 🏫 ABOUT / MISSION / VISION */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-800 space-y-12">
          <div>
            <h2 className="text-4xl font-extrabold text-blue-900 mb-6">
              Rreth Nesh
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Shkolla e Mesme e Lartë Teknike “Arkitekt Sinani” është një
              institucion arsimor publik me traditë dhe reputacion në
              përgatitjen e kuadrove të rinj në fushën e teknikës, arkitekturës
              dhe teknologjisë. E themeluar me misionin për të kontribuar në
              zhvillimin profesional të të rinjve, shkolla jonë ofron një
              ambient bashkëkohor mësimor, laboratorë të pajisur dhe mësimdhënës
              të përkushtuar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-10">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Misioni ynë
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Arsim, edukim dhe aftësim profesional cilësor për të gjithë
                nxënësit pa dallim. Zhvillim i kapaciteteve për risitë në
                procesin e mësimdhënies dhe nxënies duke eliminuar pengesat që
                pamundësojnë plotësimin e potencialit të tyre. Shkolla jonë
                siguron zhvillim etik, intelektual dhe krijues, duke mundësuar
                të mësuarit gjatë gjithë jetës.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Vizioni ynë
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Avansimin e shkollës në një institucion bashkëkohor të
                mësimdhënies dhe mësimnxënies, si dhe transformimin e saj në një
                qendër edukimi konkurruese për një shoqëri të bazuar në dije, me
                sistem të qëndrueshëm dhe gjithëpërfshirës që përgatit kuadro
                profesionale për tregun modern të punës.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ⚙️ DREJTIME PREVIEW */}
      <section className="py-24 bg-gradient-to-b from-blue-100 via-white to-gray-100 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            Drejtimet Tona
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-16">
            Në “Arkitekt Sinani” ofrohen drejtime të ndryshme profesionale që
            përgatisin nxënësit për tregun modern të punës. Profesione me
            pasion dhe vizion për të ardhmen.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Makineri dhe Ndërtimtari", icon: "🔧" },
              { name: "Mekatronikë", icon: "🤖" },
              { name: "Energjetikë", icon: "⚡" },
              { name: "Arkitekturë", icon: "🏛️" },
              { name: "Teknologji Informacioni", icon: "💻" },
              { name: "Laborator Kimie", icon: "🧪" },
            ].map((d, i) => (
              <Link
                to={`/drejtime/${d.name.toLowerCase().replace(/\s+/g, "-")}`}
                key={i}
                className="group bg-white/80 backdrop-blur-md border border-blue-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-3">{d.icon}</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2 group-hover:text-blue-900">
                  {d.name}
                </h3>
                <span className="text-blue-700 text-sm font-medium group-hover:underline">
                  Zbulo më shumë →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 🎓 STUDENT STORIES */}
      <div className="relative bg-gradient-to-b from-gray-50 via-white to-blue-50">

          <ImageSlider />
      </div>

      {/* 💼 PARTNERSHIPS */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-blue-100 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Praktikat Profesionale & Bashkëpunimet
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Shkolla jonë bashkëpunon ngushtë me biznese, institucione publike dhe
            kompani private për të siguruar praktika profesionale reale për
            nxënësit. Kjo lidhje ndërmjet arsimit dhe tregut të punës ndihmon në
            zhvillimin e shkathtësive praktike dhe punësimin pas studimeve.
          </p>
          <p className="mt-6 text-blue-800 font-semibold italic">
            Partnerët tanë përfshijnë kompani ndërtimi, studio projektimi,
            ndërmarrje teknologjike dhe institucione komunale.
          </p>
        </div>
      </section>

      {/* 🏆 MOTTO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold italic tracking-wide">
          “Dije, aftësi dhe përgjegjësi për të ardhmen!”
        </h3>
      </section>
        <Footer/> 
    </>

  );
}

