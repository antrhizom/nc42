import Link from "next/link";
import { kostenloseRessourcen } from "@/data/anbieter";

export const metadata = {
  title: "Ressourcen & Links – NC42 EMS Vorbereitung",
  description: "Alle wichtigen Links, Termine und Materialien für die EMS-Vorbereitung 2026.",
};

const termine = [
  { datum: "Bis 15. Februar 2026", was: "Anmeldung Medizinstudium bei swissuniversities", wichtig: true },
  { datum: "14./15. März 2026", was: "Kostenloser NCWiki-Vorbereitungskurs", wichtig: false },
  { datum: "Bis 20. Mai 2026", was: "Finale Anmeldung zum Eignungstest", wichtig: true },
  { datum: "3. Juli 2026", was: "EMS-Testtag", wichtig: true },
  { datum: "Anfang August 2026", was: "Ergebnis-Zustellung per Brief", wichtig: false },
];

const offizielleLinks = [
  {
    name: "swissuniversities — Anmeldung Medizinstudium",
    url: "https://www.swissuniversities.ch/service/anmeldung-zum-medizinstudium",
    beschreibung: "Offizielle Anmeldung zum Medizinstudium in der Schweiz",
  },
  {
    name: "swissuniversities — Vorbereitung auf den Eignungstest",
    url: "https://www.swissuniversities.ch/service/anmeldung-zum-medizinstudium/zulassungsverfahren-mit-numerus-clausus/vorbereitung-auf-den-eignungstest",
    beschreibung: "Offizielle Informationen und Tipps zur Vorbereitung",
  },
  {
    name: "ZTD Universität Fribourg",
    url: "https://www3.unifr.ch/ztd/de/",
    beschreibung: "Zentrum für Testentwicklung und Diagnostik — erstellt den EMS",
  },
  {
    name: "Test-Info 2025 (PDF)",
    url: "https://www.swissuniversities.ch/fileadmin/swissuniversities/Dokumente/Lehre/Medizin/Testinfo2025_de.pdf",
    beschreibung: "Offizielle Informationsbroschüre zum EMS mit allen Untertests",
  },
];

const buchempfehlungen = [
  {
    titel: "Originalversion I, II, III (ZTD)",
    beschreibung: "Die einzigen offiziellen Vorbereitungsmaterialien. Version I wird für Probeläufe an Schulen verwendet. Version II + III für Selbststudium empfohlen.",
    wo: "Im Buchhandel erhältlich",
  },
  {
    titel: "EMS Coaches Buchpaket 2026",
    beschreibung: "10 Bücher für alle Untertests mit über 3'400 Aufgaben, inkl. Objekte im Raum.",
    wo: "emscoaches.ch",
  },
  {
    titel: "MedGurus EMS-Übungsbücher",
    beschreibung: "Übungsbücher + Simulationsbuch mit realistischen Aufgaben.",
    wo: "medgurus.de",
  },
  {
    titel: "MEDISEMINAR Trainingsbücher",
    beschreibung: "Verständliche Methodik mit Beispielen und Lösungen für jeden Untertest.",
    wo: "numerusclausus.ch",
  },
];

export default function RessourcenPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Ressourcen</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
        Ressourcen & Links
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        Alle wichtigen Termine, Links, Materialien und Bücher für deine EMS-Vorbereitung 2026.
      </p>

      {/* Termine */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Wichtige Termine 2026</h2>
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          {termine.map((t, i) => (
            <div key={i} className={`flex items-start gap-4 p-4 ${i !== termine.length - 1 ? "border-b border-gray-100" : ""}`}>
              <div className={`flex-shrink-0 w-3 h-3 rounded-full mt-1.5 ${t.wichtig ? "bg-red-500" : "bg-gray-300"}`} />
              <div>
                <div className="font-semibold text-gray-900">{t.datum}</div>
                <div className="text-sm text-gray-600">{t.was}</div>
              </div>
              {t.wichtig && (
                <span className="ml-auto text-xs font-semibold bg-red-100 text-red-700 px-2 py-1 rounded-full whitespace-nowrap">
                  Wichtig
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Offizielle Links */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Offizielle Links</h2>
        <div className="space-y-3">
          {offizielleLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-md transition-all group"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">{link.name} ↗</h3>
              <p className="text-sm text-gray-600 mt-1">{link.beschreibung}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Kostenlose Ressourcen */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Kostenlose Materialien</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {kostenloseRessourcen.map((r, i) => (
            <a
              key={i}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-50 rounded-xl border border-green-200 p-5 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🆓</span>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600">{r.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{r.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Buchempfehlungen */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Buchempfehlungen</h2>
        <div className="space-y-4">
          {buchempfehlungen.map((buch, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900">{buch.titel}</h3>
              <p className="text-sm text-gray-600 mt-1">{buch.beschreibung}</p>
              <p className="text-xs text-gray-500 mt-2">Erhältlich bei: {buch.wo}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Häufige Fragen</h2>
        <div className="space-y-4">
          {[
            {
              frage: "Wann sollte ich mit der Vorbereitung beginnen?",
              antwort: "Empfohlen werden 3-5 Monate vor dem Test, also ab Februar/März. Mindestens 80-120 Stunden Trainingszeit einplanen.",
            },
            {
              frage: "Brauche ich einen Vorbereitungskurs?",
              antwort: "Nicht zwingend, aber ein guter Kurs kann Struktur und Strategien vermitteln. Selbststudium mit guten Materialien ist auch möglich.",
            },
            {
              frage: "Wie viele Punkte brauche ich für einen Studienplatz?",
              antwort: "Als Faustregel: Mindestens 60% pro Untertest anpeilen. Insgesamt ca. 97+ Punkte (variiert jährlich). Nur die Besten erhalten einen Platz.",
            },
            {
              frage: "Kann ich den EMS wiederholen?",
              antwort: "Ja, der EMS kann beliebig oft wiederholt werden. Jedes Jahr zählt nur das aktuelle Ergebnis.",
            },
            {
              frage: "Was bringt KI-gestützte Vorbereitung?",
              antwort: "KI kann gute Zusatzaufgaben für textbasierte Untertests generieren (Mathe, Textverständnis, Diagramme). Für visuelle Tests ist sie weniger geeignet. Immer mit offiziellen Materialien gegenchecken.",
            },
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-1">{faq.frage}</h3>
              <p className="text-sm text-gray-600">{faq.antwort}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
