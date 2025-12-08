import React from "react";
import Header from "../componets/Headers";

const staffData = [
  {
    emri: "Jeton Hajdari ", 
    titulli: "U.D. Drejtor",
  },

  { emri: "Vehbi Voca ", titulli: "Sekretar" },
  { emri: "Naim Istrefi", titulli: "Koordinator i cilësisë" },
  { emri: "Ajet Musa", titulli: "Telekomunikacion" },
  { emri: "Albana Koliqi Bajraktari", titulli: "Gjeologji" },
  { emri: "Arjeta Segaqa", titulli: "Gjuhë shqipe" },
  { emri: "Bashkim Koliqi", titulli: "Arkitekturë" },
  { emri: "Bekim Kelmendi", titulli: "Gjuhë angleze" },
  { emri: "Besart Alloqi", titulli: "Gjuhë shqipe" },
  { emri: "Burbuqe Asllani", titulli: "Shkenca kompjuterike" },
  { emri: "Diellza Habibaj", titulli: "Kimi" },
  { emri: "Daim Musa", titulli: "Fizikë" },
  { emri: "Drita Behrami", titulli: "Teknologji ushqimore" },
  { emri: "Fatime Avdullahu", titulli: "Gjuhë angleze" },
  { emri: "Fatmire Gërxhaliu", titulli: "Matematikë" },
  { emri: "Gazmend Dauti", titulli: "Makineri" },
  { emri: "Gresa Kurti Çimili", titulli: "Teknologji ushqimore" },

  {
    emri: "Gezim Berisha",
    titulli: "Metalurgji dhe elektroteknikë", // keeps metalurgji, normalizes elektro part
  },

  { emri: "Hasan Mustafa", titulli: "Arkitekturë" },

  { emri: "Hilmi Loshi", titulli: "Metalurgji" },
  { emri: "Hetem Musa", titulli: "Makineri" },
  { emri: "Isa Haxhiu", titulli: "Kimi - Këshilltar karriere" },
  { emri: "Jeton Gashi", titulli: "Matematikë" },
  { emri: "Kumrije Zeka", titulli: "Makineri" },
  { emri: "Lindita Muja", titulli: "Shkenca kompjuterike" },
  { emri: "Muhedin Ibishi", titulli: "Makineri" },
  { emri: "Naser Zeqiri", titulli: "Makineri" },

  {
    emri: "Njazi Gërguri",
    titulli: "Trafik rrugor",
  },

  {
    emri: "Nedime Dobreva",
    titulli: "Shkenca kompjuterike",
  },


  { emri: "Nexhet Hasani", titulli: "Edukatë fizike" },
  { emri: "Qendresa Hasani", titulli: "Gjuhë angleze" },

  // already correct
  { emri: "Sadije Melenica", titulli: "Elektroteknikë" },
  { emri: "Sadik Begu", titulli: "Makineri" },
 

  {
    emri: "Sejdi Berisha",
    titulli: "Trafik rrugor",
  },

  {
    emri: "Sinan Shosholli",
    titulli: "Gjuhë shqipe",
  },

  { emri: "Skender Sadiku", titulli: "Gjeologji" },
  { emri: "Sami Rama", titulli: "Metalurgji" },
  { emri: "Sami Voca", titulli: "Informatikë" },

  {
    emri: "Teoman Nishliu",
    titulli: "Elektroteknikë", // normalized
  },

  { emri: "Valentina Baliu", titulli: "Gjuhë shqipe" },


  { emri: "Ilmi Ahmeti", titulli: "Gjeologji" },
  {
    emri: "Ismet Peci",
    titulli: "Matematikë",
    photo: "babaismet.jpeg",
  },

  {
    emri: "Shadije Pllana Hoti",
    titulli: "Program parashkollor",
  },

  { emri: "Veton Citaku", titulli: "Edukatë fizike" },
  { emri: "Xhevdet Sadiku", titulli: "Gjeologji" },

  { emri: "Xhejlane Mustafa", titulli: "Edukatë fizike" },
  { emri: "Zoja Uka", titulli: "Gjuhë shqipe" },
  { emri: "Zade Xhaka", titulli: "Ekonomi" },


  
  { emri: "Ili Berisha", titulli: "Teknologji ushqimore - Këshilltar i karrierës" },
  { emri: "Fidan Kamberi", titulli: "Matematikë" },
  { emri: "Majlinda Seferi", titulli: "Informatikë" },
  { emri: "Vesel Neziri", titulli: "Metalurg" },

  // Stafi teknik
  { emri: "Izet Selaci", titulli: "Punëtor teknik pastrues" },
  { emri: "Fehmi Voca", titulli: "Punëtor teknik pastrues" },
  { emri: "Lavdim Voca", titulli: "Punëtor teknik pastrues" },
  { emri: "Fehmi Uka", titulli: "Punëtor teknik pastrues" },
  { emri: "Selami Januzi", titulli: "Punëtor teknik pastrues" },

  // Roje & Fokist
  { emri: "Ilir Syla", titulli: "Roje e natës" },
  { emri: "Bastri Hajdari", titulli: "Roje e natës" },
  { emri: "Ragip Peci", titulli: "Fokist" }

  
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
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

