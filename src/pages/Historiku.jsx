import Header from "../componets/Headers";

export default function Historiku() {
  return (
    <>
      <Header />

      <div className="mt-24 p-6 md:p-12 bg-[#1743CA] min-h-screen flex justify-center">
        <div className="bg-white p-8 rounded-xl shadow max-w-4xl leading-relaxed text-lg text-gray-900">
          <h1 className="text-3xl font-bold mb-6 text-center">HISTORIKU I SHKURTËR I SHKOLLËS</h1>

          <p className="mb-4">
            Shkolla jonë si shkollë e mesme e lartë teknike filloi punën e vet në tetor të vitit 1946, 
            u hap shkolla teknike në Mitrovicë, me seksionet e makinerisë me 39 nxënës, ndërtimtarisë 
            me 54 nxënës, gjeodezisë me 27 nxënës dhe shkolla e mori emrin 
            <strong> Shkolla e mesme teknike “Boris Kidriq”.</strong> Numri i nxënësve që vijonin mësimin 
            për herë të parë në këtë shkollë ishte 120 nxënës, prej tyre 11 ishin shqiptarë, që vinin nga 
            viset e ndryshme të Kosovës. Hapja e paraleles së parë të mësimit në gjuhën shqipe bëhet në 
            vitin shkollor 1959/60.
          </p>

          <p className="mb-4">
            Kontribut të pazavendësueshëm në hapjen e parleleve në gjuhën shqipe dhanë këta mësimdhënës: 
            Millan Perkaj, Ramadan Shala, Zeqir Rugova, Xhemil Zajmi, Hasan Hazbati, Ehat Prekazi, 
            Xhevat Morina, Zija Këpuska, Ilaz Haxhiu, Murat Bejta. Fillimisht, në mungesë të arsimtarëve 
            shqiptarë, në disa lëndë profesionale mësimi zhvillohej në gjuhën serbokroate. Kështu nga 
            viti 1964/65, mësimi filloi të zhvillohej ndaras në paralelet e gjuhës shqipe nga ato 
            serbokroate.
          </p>

          <p className="mb-4">
            Me rritjen e numrit të nxënësve, në vitin shkollor 1987/88, Shkolla e mesme teknike u nda 
            në dy shkolla: SH.M.T. “Boris Kidriq” me seksionet e makinerisë, ndërtimtarisë, 
            elektroteknikës dhe komunikacionit me seli në Mitrovicë; dhe SH.M.T. “Trepça” me seksionet 
            kimi–teknologji, metalurgji, xehetari dhe gjeologji me seli në Zveçan.
          </p>

          <p className="mb-4">
            Me vendimin e Ministrisë së Arsimit të Kosovës në vitin 1992, shkollës së mesme teknike 
            “Boris Kidriq” i ndërrohet emri në shkollën e mesme teknike “Arkitekt Sinani”. 
            Në vitin 1994, me vendimin e Ministrisë së Arsimit të Kosovës, shkolla e mesme teknike 
            “Trepça” i bashkohet shkollës së mesme teknike “Arkitekt Sinani”.
          </p>

          <p className="mb-4">
            Qysh nga dëbimi nga objektet shkollore në vitin 1990, shkolla e mesme teknike 
            “Arkitekt Sinani” mësimin e ka zhvilluar e shpërndarë nëpër lokalet shtëpi–shkollë dhe 
            në objektet e shkollave fillore deri më 16.02.2010. Pas kësaj date, shkolla kalon në 
            objektin e ri shkollor, ku edhe tani zhvillon procesin mësimor.
          </p>
        </div>
      </div>
    </>
  );
}

