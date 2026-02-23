import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🩺</span>
              <span className="font-bold text-xl text-white">NC42</span>
            </div>
            <p className="text-sm">
              Deine Vorbereitung auf den EMS / Numerus Clausus für das
              Medizinstudium in der Schweiz.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/vorbereitung"
                  className="hover:text-white transition-colors"
                >
                  Vorbereitung
                </Link>
              </li>
              <li>
                <Link
                  href="/anbieter"
                  className="hover:text-white transition-colors"
                >
                  Anbieter
                </Link>
              </li>
              <li>
                <Link
                  href="/ki-tools"
                  className="hover:text-white transition-colors"
                >
                  KI-Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/ressourcen"
                  className="hover:text-white transition-colors"
                >
                  Ressourcen
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Offizielle Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.swissuniversities.ch/service/anmeldung-zum-medizinstudium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  swissuniversities
                </a>
              </li>
              <li>
                <a
                  href="https://www3.unifr.ch/ztd/de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  ZTD Universität Fribourg
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-xs">
          <p>
            NC42 ist ein unabhängiges Informationsportal und steht in keiner
            Verbindung zu swissuniversities, dem ZTD oder einem Kursanbieter.
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} NC42. Alle Angaben ohne Gewähr.
          </p>
        </div>
      </div>
    </footer>
  );
}
