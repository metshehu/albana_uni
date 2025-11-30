import Header from "../componets/Headers";
import { Mail, MapPin, Phone } from "lucide-react";

export default function About() {
  return (
    <>
      <Header />

      {/* 🌟 HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <img
          src="/drejtime-hero.jpg"
          alt="About Arkitekt Sinani"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-700/60"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Rreth Nesh
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-100">
            Shkolla e Mesme e Lartë Teknike “Arkitekt Sinani” — vendi ku dijet,
            praktika dhe krijimtaria formojnë profesionistët e së ardhmes.
          </p>
        </div>
      </section>

      {/* 🏫 ABOUT SECTION */}
      <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Kush Jemi Ne</h2>
            <p className="text-lg leading-relaxed mb-4">
              Shkolla e Mesme e Lartë Teknike “Arkitekt Sinani” është një
              institucion arsimor publik me traditë dhe reputacion në
              përgatitjen e kuadrove të rinj në fushën e teknikës, arkitekturës
              dhe teknologjisë.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              E themeluar me misionin për të kontribuar në zhvillimin profesional
              të të rinjve, shkolla jonë ofron një ambient bashkëkohor mësimor,
              laboratorë të pajisur dhe mësimdhënës të përkushtuar.
            </p>
            <p className="text-blue-800 font-semibold italic text-lg">
              “Dije, aftësi dhe përgjegjësi për të ardhmen.”
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 relative group overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/kontnet_map.jpg"
              alt="Arkitekt Sinani School"
              className="w-full h-[380px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
        </div>
      </section>

      {/* 🎯 MISIONI & VIZIONI */}
      <section className="py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-800">
          <h2 className="text-4xl font-bold text-blue-900 mb-12">Misioni & Vizioni</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Misioni */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-blue-100 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Misioni Ynë</h3>
              <p className="text-gray-700 leading-relaxed">
                Arsim, edukim dhe aftësim profesional cilësor për të gjithë
                nxënësit pa dallim gjinie, kombi, feje e race. Ne zhvillojmë
                kapacitete për risitë në procesin e mësimdhënies dhe nxënies,
                duke eliminuar pengesat që pamundësojnë plotësimin e
                potencialit të tyre.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Synojmë të sigurojmë zhvillim etik, intelektual dhe krijues, duke
                mundësuar të mësuarit gjatë gjithë jetës dhe përgatitjen për
                tregun e punës.
              </p>
            </div>

            {/* Vizioni */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-blue-100 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Vizioni Ynë</h3>
              <p className="text-gray-700 leading-relaxed">
                Avansimin e shkollës në një institucion bashkëkohor të
                mësimdhënies dhe mësimnxënies, si dhe transformimin e saj në një
                qendër edukimi konkurruese për një shoqëri të bazuar në dije.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Një sistem i qëndrueshëm dhe gjithëpërfshirës që mundëson
                zhvillimin socio-ekonomik dhe përgatitjen e kuadrove profesionale
                për tregun e punës së ardhshme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 📍 CONTACT SECTION */}
      <section className="relative py-24 bg-gradient-to-b from-blue-100 via-blue-50 to-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">Kontakti</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
            Na kontaktoni për çdo pyetje, bashkëpunim apo informacion rreth
            programeve dhe drejtimit tuaj të ardhshëm.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Address */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-blue-100 transition">
              <MapPin className="mx-auto mb-3 text-blue-800" size={36} />
              <h3 className="text-lg font-semibold text-blue-800 mb-1">
                Adresa
              </h3>
              <p className="text-gray-700">Driton M. Veliu 40000, Mitrovicë</p>
            </div>

            {/* Phone */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-blue-100 transition">
              <Phone className="mx-auto mb-3 text-blue-800" size={36} />
              <h3 className="text-lg font-semibold text-blue-800 mb-1">
                Telefoni
              </h3>
              <p className="text-gray-700">049 926 188</p>
            </div>

            {/* Email */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-blue-100 transition">
              <Mail className="mx-auto mb-3 text-blue-800" size={36} />
              <h3 className="text-lg font-semibold text-blue-800 mb-1">Email</h3>
              <p className="text-gray-700">shmltarkitektsinani@gmail.com</p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/kontnet_map.jpg"
              alt="School Location Map"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* 🏫 FOOTER MOTTO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold italic tracking-wide">
          “Dije, aftësi dhe përgjegjësi për të ardhmen!”
        </h3>
      </section>
    </>
  );
}

