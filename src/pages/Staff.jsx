import React from "react";

import Header from "../componets/Headers";
const staffData = [
  {
    emri: "Advije Beka",
    titulli: "Master në menaxhment dhe informatikë",
    lendet: ["Matje elektrike", "Instrumentet matëse", "Praktikë profesionale"],
  },
  {
    emri: "Ajet Musa",
    titulli:
      "Master i Shkencave të Inxhenierisë Elektrike, Programi Telekomunikacion",
    lendet: [
      "Bazat e telekomunikacionit",
      "Telefoni celular",
      "Praktikë profesionale 2",
    ],
  },
  {
    emri: "Albana Koliqi Bajraktari",
    titulli: "MSc. Gjeologji",
    lendet: [
      "Hartografim gjeologjik",
      "Hartografim topografik",
      "Praktikë profesionale",
    ],
  },
  {
    emri: "Arjeta Segaqa",
    titulli: "Mësimdhënëse e Gjuhës Shqipe",
    lendet: ["Gjuhë shqipe"],
  },
  {
    emri: "Bashkim Koliqi",
    titulli: "Inxhinier i diplomuar i Ndërtimtarisë / MSc. Ndërtimtari",
    lendet: [
      "Konstruksione ndërtimore",
      "Materiale ndërtimore",
      "AutoCAD",
      "Konstruksionet e betonit, çelikut dhe drurit",
      "Praktikë profesionale",
    ],
  },
  {
    emri: "Bekim Kelmendi",
    titulli: "Bachelor i Gjuhës dhe Letërsisë Angleze",
    lendet: ["Gjuhë angleze", "Gjuhë gjermane"],
  },
  {
    emri: "Besart Alloqi",
    titulli: "Bachelor – Gjuhë dhe Letërsi Shqipe",
    lendet: ["Gjuhë shqipe"],
  },
  {
    emri: "Burbuqe Asllani",
    titulli: "MSc. Shkenca kompjuterike dhe inxhinieri",
    lendet: [
      "Materiale elektroteknike",
      "Vizatim teknik",
      "Praktikë profesionale",
      "TIK",
    ],
  },
  {
    emri: "Diellza Habibaj",
    titulli: "Master në Kimi",
    lendet: ["Kimi"],
  },
  {
    emri: "Daim Musa",
    titulli: "Bachelor Fizikë – Kimi",
    lendet: ["Kimi", "Fizikë", "Praktikë profesionale"],
  },
  {
    emri: "Drita Behrami",
    titulli: "Master - Inxhinieri dhe Teknologji",
    lendet: [
      "Bazat e Teknologjisë Ushqimore",
      "Teknologjia e përpunimit të drithërave dhe brumit",
      "Teknologjia e përpunimit të mishit",
      "Kontrolli i cilësisë së produkteve ushqimore",
    ],
  },
  {
    emri: "Fatime Avdullahu",
    titulli: "Bachelor i Gjuhës dhe Letërsisë Angleze",
    lendet: ["Gjuhë angleze"],
  },
  {
    emri: "Fatmire Gërxhaliu",
    titulli: "Profesor i Matematikës",
    lendet: ["Matematikë"],
  },
  {
    emri: "Gazmend Dauti",
    titulli: "Master i shkencave të inxhenierisë mekanike",
    lendet: [
      "Njohuri për automjete",
      "Hidraulikë dhe pneumatikë",
      "Termodinamikë",
      "Vizatim me kompjuter - CAD",
      "Programimi me makinat CAD - CAM",
      "Diagnostifikimi i automjeteve",
      "Praktikë profesionale",
    ],
  },
  {
    emri: "Gresa Kurti Çimili",
    titulli: "MSc. Inxhinieri dhe Teknologji Ushqimore",
    lendet: ["Teknologji ushqimore"],
  },
  {
    emri: "Gezim Berisha",
    titulli:
      "MSc. – Shkenca teknike (Metalurgji dhe Elektroteknikë) / Megatron",
    lendet: [
      "Lëndë profesionale në metalurgji",
      "Lëndë profesionale në elektroteknikë",
    ],
  },
  {
    emri: "Hasan Mustafa",
    titulli: "Master Inxhinier i diplomuar i arkitekturës",
    lendet: [
      "Kompozicione arkitektonike",
      "Elementet e projektimit",
      "Gjeometri dhe perspektivë",
      "Praktikë profesionale",
    ],
  },
  {
    emri: "Hetem Musa",
    titulli: "Inxhinier i diplomuar i Makinerisë",
    lendet: ["Praktikë profesionale", "Mekanikë teknike"],
  },
  {
    emri: "Isa Haxhiu",
    titulli: "Mr.sc. Shkencave Teknike – Teknologji Inorganike",
    lendet: ["Kimi"],
  },
  {
    emri: "Jeton Gashi",
    titulli: "Beçelor i matematikës",
    lendet: ["Matematikë"],
  },
  {
    emri: "Jeton Hajdari U.D. Drejtor i SHMLT “Arkitekt Sinani” ",
    titulli: "Master i shkencave teknike ",
    lendet: [
      "Matje dhe kontrollë",
      "Teknologjia e instalimit të ngrohjes dhe klimatizimit",
      "Mekanikë teknike",
      "Praktikë profesionale",
    ],
  },
  {
    emri: "Kumrije Zeka",
    titulli: "MSc. Teknologji prodhuese, profili i prerjes",
    lendet: [
      "Teknologjia e profesionit",
      "Praktikë profesionale",
      "Mekanikë teknike",
      "Materialet teknike",
      "Teknikat e matjes",
    ],
  },
  {
    emri: "Lindita Muja",
    titulli: "Master i Shkencave Kompjuterike dhe Inxhinieri",
    lendet: ["Informatikë"],
  },
  {
    emri: "Muhedin Ibishi",
    titulli: "Master i shkencave në makineri",
    lendet: [
      "Detalet e makinave",
      "Bazat e makinerisë",
      "Praktikë profesionale",
    ],
  },
  {
    emri: "Naim Istrefi",
    titulli: "Fakulteti SHMN, Kordinator i sigurimit të cilësisë",
    lendet: [],
  },
  {
    emri: "Naser Zeqiri",
    titulli: "Inxhinier i diplomuar i Makinerisë",
    lendet: [
      "Detalet e makinave",
      "Vizatim teknik",
      "Teknikat e përpunimit të metaleve II",
      "Praktikë profesionale – dirigjimi kompjuterik i makinave",
    ],
  },
  {
    emri: "Njazi Gërguri",
    titulli: "Inxhinier i diplomuar makinerisë, Drejtimi komunikacion",
    lendet: [
      "Bazat e transportit rrugor",
      "Rrugët dhe objektet rrugore",
      "Shenjat e trafikut dhe sinjalizimet rrugore",
      "Rregullimi i trafikut rrugor",
      "Praktikë profesionale",
    ],
  },
  {
    emri: "Nedime Dobreva",
    titulli: "Master i shkencave në shkencat inxhinierike dhe kompjuterikë",
    lendet: [
      "T.I.K.",
      "Praktikë profesionale",
      "Sisteme komutuese",
      "Bazat e të dhënave",
    ],
  },
  {
    emri: "Nexhet Hasani",
    titulli: "Master i Kulturës Fizike, Sport dhe Rekreacion",
    lendet: ["Edukatë fizike, sportet dhe shëndeti"],
  },
  {
    emri: "Qendresa Hasani",
    titulli: "Master gjuhë angleze",
    lendet: ["Gjuhë angleze"],
  },
  {
    emri: "Sadije Melenica",
    titulli: "Master Inxhinier i diplomuar elektroteknikë",
    lendet: [
      "Bazat e elektroteknikës",
      "Implementimi i sekuencave të programeve procedurale",
      "Krijimi dhe publikimi i webfaqeve",
      "Përpunimi dhe evaluimi i të dhënave",
      "Praktika profesionale",
    ],
  },
  {
    emri: "Sejdi Berisha",
    titulli: "Master i shkencave të inxhenierisë mekanike",
    lendet: ["Praktikë profesionale", "Siguria në trafikun rrugor"],
  },
  {
    emri: "Sinan Shosholli",
    titulli: "Master – Gjuhë dhe Letërsi Shqipe",
    lendet: ["Gjuhë dhe letërsi shqipe"],
  },
  {
    emri: "Skender Sadiku",
    titulli: "MSc. i Gjeologjisë",
    lendet: [
      "Mineralogji",
      "Petrografi",
      "Bazat e gjeologjisë",
      "Praktikë profesionale",
    ],
  },
  {
    emri: "Sami F. Rama",
    titulli: "Magjistër i Shkencave Teknike",
    lendet: [
      "Furrat metalurgjike",
      "Përfitimi i metaleve me ngjyrë",
      "Sigurimi i cilësisë në metalurgji",
      "Praktika profesionale",
    ],
  },
  {
    emri: "Sami Voca",
    titulli: "Beçelor i informatikës inxhinierike",
    lendet: [
      "Praktikë profesionale",
      "T.I.K.",
      "Sisteme operative",
      "Gjuhë programuese",
    ],
  },
  {
    emri: "Teoman Nishliu",
    titulli: "Inxhinier i diplomuar i Elektroteknikës – Elektronikë/Automatikë",
    lendet: ["Elektronikë", "Automatikë", "Lëndë profesionale të elektros"],
  },
  {
    emri: "Valentina Baliu",
    titulli: "Master i shkencave filologjike",
    lendet: ["Gjuhë shqipe dhe letërsi"],
  },
    {
    emri: "Ismet Peci",
        titulli : "Shkollimi: Profesor i Matematikës – Shkolla e Lartë Pedagogjike, Fakulteti i Edukimit (Matematikë–Informatikë)",
        lendet:["Matematikë"],
        photo:"babaismet.jpeg"
    },
    {
    emri: "Shadije Pllana Hoti",
        titulli : "Shkollimi:: Bachelor i Programit Parashkollor Pozita Biblotekare ",
        lendet:[],
        //photo:"babaismet.jpeg"
    },

  {
    emri: "Veton Citaku",
    titulli: "Profesor i kulturës fizike",
    lendet: ["Edukatë fizike dhe sportet"],
  },
  {
    emri: "Xhevdet Sadiku",
    titulli: "Master Inxhinier i diplomuar i gjeologjisë",
    lendet: [
      "Gjeologji historike me paleontologji",
      "Hidrogjeologji",
      "Shpime kërkimore",
      "Praktikë profesionale",
    ],
  },
  {
    emri: "Xhejlane Mustafa",
    titulli: "Master kulturës fizike",
    lendet: ["Edukatë fizike dhe sportet"],
  },
  {
    emri: "Zoja Uka",
    titulli: "Profesor i Gjuhës dhe Letërsisë Shqipe, Fakulteti Filologjik",
    lendet: ["Gjuhë shqipe"],
  },
  {
    emri: "Zade Xhaka",
    titulli: "Fakulteti Ekonomik, Ekonomiste e diplomuar",
    lendet: ["Ndërmarrësi"],
  },
];

export default function StaffList() {
  return (
    <>
      <Header />

      <div className="mt-24 bg-[#1743CA] grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {staffData.map((staf, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl shadow bg-white flex gap-4 items-start"
          >
            {/* Image only if exists */}
            {staf.photo && (
              <img
                src={staf.photo}
                alt={staf.emri}
                className="w-24 h-24 object-cover rounded-lg"
              />
            )}

            <div>
              <h2 className="text-xl font-bold">{staf.emri}</h2>
              <p className="text-gray-700 italic">{staf.titulli}</p>

              <ul className="list-disc pl-6 mt-2">
                {staf.lendet.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
