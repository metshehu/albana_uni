export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Shkolla Profesionale</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Formojmë profesionistë të së nesërmes me dije, përkushtim dhe vizion.
            Arsimi profesional që ndërton të ardhmen!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-white">Linqe të Shpejta</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Ballina</a></li>
            <li><a href="/drejtime" className="hover:text-white">Drejtimet</a></li>
            <li><a href="/kontakt" className="hover:text-white">Kontakt</a></li>
            <li><a href="/rreth-nesh" className="hover:text-white">Rreth Nesh</a></li>
          </ul>
        </div>

        {/* Drejtimet */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-white">Programet</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#makineri" className="hover:text-white">Makineri</a></li>
            <li><a href="#mekatronike" className="hover:text-white">Mekatronikë</a></li>
            <li><a href="#energjetike" className="hover:text-white">Energjetikë</a></li>
            <li><a href="#kimia" className="hover:text-white">Laborant i Kimisë</a></li>
          </ul>
        </div>

        {/* Contact */}
                





        <div>
          <h3 className="font-semibold text-lg mb-3 text-white">Kontakt</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Mitrovice, Kosovë</li>
            <li>📞 +383 049 926 188</li>
            <li>📧 shmltarkitektsinani@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-blue-700 mt-10 pt-5 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Shkolla Profesionale • Të gjitha të drejtat e rezervuara.
      </div>
    </footer>
  );
}

