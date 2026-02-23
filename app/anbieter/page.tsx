import Link from "next/link";
import { anbieter, kostenloseRessourcen } from "@/data/anbieter";

export const metadata = {
  title: "Kursanbieter-Vergleich – NC42 EMS Vorbereitung",
  description: "Vergleich aller EMS-Vorbereitungsanbieter in der Schweiz: Medtest, EMS Coaches, MedGurus, Meditrain und mehr.",
};

export default function AnbieterPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Anbieter</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
        Kursanbieter-Vergleich
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        Welcher Anbieter passt zu dir? Hier findest du eine Übersicht der wichtigsten
        EMS-Vorbereitungsanbieter mit ihren Stärken, Formaten und Besonderheiten.
      </p>

      {/* Anbieter Cards */}
      <div className="space-y-6 mb-16">
        {anbieter.map((a, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{a.name}</h2>
                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  {a.url.replace("https://", "")} ↗
                </a>
              </div>
              <span className="text-sm font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full whitespace-nowrap">
                {a.preisbereich}
              </span>
            </div>

            <p className="text-gray-700 mb-4">{a.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-2">Stärken</h3>
                <ul className="space-y-1">
                  {a.staerken.map((s, i) => (
                    <li key={i} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-green-500 flex-shrink-0">&#10003;</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-2">Kursformate</h3>
                <div className="flex flex-wrap gap-2">
                  {a.kursformate.map((f, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
                <h3 className="text-sm font-semibold text-gray-500 mt-3 mb-2">Standorte</h3>
                <div className="flex flex-wrap gap-2">
                  {a.standorte.map((s, i) => (
                    <span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
              <strong>Besonderheit:</strong> {a.besonderheit}
            </div>
          </div>
        ))}
      </div>

      {/* Kostenlose Ressourcen */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Kostenlose Ressourcen
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {kostenloseRessourcen.map((r, index) => (
            <a
              key={index}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-green-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🆓</span>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {r.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{r.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Empfehlung */}
      <section className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Unsere Empfehlung</h2>
        <p className="text-gray-700 mb-4">
          Die Wahl des Anbieters hängt von deinen Bedürfnissen ab:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="bg-white rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-1">Für Selbstlerner:</h3>
            <p className="text-gray-600">MedGurus E-Learning + Bücher von EMS Coaches oder MEDISEMINAR</p>
          </div>
          <div className="bg-white rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-1">Für Kurs-Liebhaber:</h3>
            <p className="text-gray-600">Medtest Intensivkurs oder EMS Coaches Präsenzkurs</p>
          </div>
          <div className="bg-white rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-1">Für Einzelbetreuung:</h3>
            <p className="text-gray-600">Meditrain — kleine Gruppen, individuelle Betreuung seit 1984</p>
          </div>
        </div>
      </section>
    </div>
  );
}
