import Link from "next/link";

export const metadata = {
  title: "Vorbereitung & Lernplan – NC42 EMS Vorbereitung",
  description: "4-Phasen-Lernplan, Mnemotechniken und Strategien für die EMS-Vorbereitung.",
};

const phasen = [
  {
    phase: "Phase 1",
    titel: "Orientierung",
    zeitraum: "Februar — März (2 Wochen)",
    icon: "🧭",
    color: "blue",
    schritte: [
      "EMS-Aufbau und alle 9 Untertests kennenlernen",
      "Originalversionen I, II und III vom ZTD besorgen (offizielle Materialien)",
      "Einen unvorbereiteten Probetest schreiben → Ist-Stand ermitteln",
      "Am kostenlosen NCWiki-Vorbereitungskurs teilnehmen (14./15. März 2026)",
      "Persönliche Stärken und Schwächen identifizieren",
      "Lerngruppe finden oder Discord-Community beitreten",
    ],
  },
  {
    phase: "Phase 2",
    titel: "Grundlagentraining",
    zeitraum: "März — April (6-8 Wochen)",
    icon: "📚",
    color: "green",
    schritte: [
      "80-120 Stunden Trainingszeit einplanen (ca. 2-3 Std. täglich)",
      "Jeden Untertest einzeln erarbeiten: Aufgabentyp → Strategie → Üben",
      "Loci-Methode für Figuren/Fakten lernen aufbauen und trainieren",
      "Schwerpunkt auf schwächere Untertests legen",
      "Eventuell Vorbereitungskurs buchen (Intensiv- oder Online-Kurs)",
      "Konzentrations-Untertest täglich 8 Minuten üben",
    ],
  },
  {
    phase: "Phase 3",
    titel: "Intensivtraining",
    zeitraum: "Mai — Juni (6 Wochen)",
    icon: "🔥",
    color: "orange",
    schritte: [
      "Zeitdruck systematisch aufbauen — unter Echtbedingungen üben",
      "Monatliche Testsimulationen unter realen Bedingungen (4h am Stück)",
      "Nach jeder Simulation: detaillierte Fehleranalyse pro Untertest",
      "Individuelle Schwächen gezielt eliminieren",
      "Lösungsstrategien automatisieren, bis sie unter Druck abrufbar sind",
      "Mit KI zusätzliche Übungsaufgaben generieren für schwache Bereiche",
    ],
  },
  {
    phase: "Phase 4",
    titel: "Feinschliff",
    zeitraum: "Letzte 2 Wochen vor dem Test",
    icon: "✨",
    color: "purple",
    schritte: [
      "Letzte Vollsimulation ca. 10 Tage vor dem EMS",
      "Kein neues Material mehr — nur noch Festigung und Wiederholung",
      "Mentales Training und Stressbewältigung üben",
      "Prüfungslogistik klären: Anreise, Übernachtung, Verpflegung",
      "Schlafrhythmus an den Testtag anpassen",
      "Letzte 2-3 Tage: bewusst entspannen, leichte Bewegung",
    ],
  },
];

export default function VorbereitungPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Vorbereitung</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
        4-Phasen-Lernplan
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        Strukturierte Vorbereitung auf den EMS 2026 — von der Orientierung bis zum Testtag.
        Plane 3-5 Monate ein und investiere insgesamt 80-120 Stunden gezieltes Training.
      </p>

      {/* Timeline */}
      <div className="space-y-8 mb-16">
        {phasen.map((phase, index) => (
          <div key={index} className="relative">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{phase.icon}</span>
                <div>
                  <span className="text-xs font-semibold text-gray-400">{phase.phase}</span>
                  <h2 className="text-xl font-bold text-gray-900">{phase.titel}</h2>
                </div>
                <span className="ml-auto text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {phase.zeitraum}
                </span>
              </div>
              <ul className="space-y-3">
                {phase.schritte.map((schritt, i) => (
                  <li key={i} className="flex gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-gray-300 mt-0.5" />
                    {schritt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Mnemotechniken Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Mnemotechniken für Merkfähigkeits-Tests
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
              <span>🏠</span> Loci-Methode (Gedächtnispalast)
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Die effektivste Technik für &laquo;Fakten lernen&raquo;. Verknüpfe Informationen mit Orten in deinem Zuhause.
            </p>
            <div className="bg-blue-50 rounded-xl p-4 text-sm">
              <p className="font-semibold text-blue-800 mb-2">So funktioniert&apos;s:</p>
              <ol className="space-y-1 text-blue-700 list-decimal list-inside">
                <li>Wähle 5 Räume in deinem Haus (= 5 Altersgruppen)</li>
                <li>Platziere je 3 Patienten in einem Raum</li>
                <li>Verbinde Namen mit Bildern (Fischer → Angel)</li>
                <li>Erstelle skurrile Mini-Geschichten pro Raum</li>
                <li>Gehe in Gedanken den festen Weg ab</li>
              </ol>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
              <span>🎨</span> Visualisierung (für Figuren lernen)
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Wandle abstrakte Figuren in konkrete Bilder um. Das Gehirn merkt sich Bilder viel besser als abstrakte Formen.
            </p>
            <div className="bg-amber-50 rounded-xl p-4 text-sm">
              <p className="font-semibold text-amber-800 mb-2">Techniken:</p>
              <ul className="space-y-1 text-amber-700">
                <li>&#9679; Figur → Tier, Gegenstand oder Buchstabe</li>
                <li>&#9679; Fokus auf schwarze Fläche ODER Gesamtform</li>
                <li>&#9679; Skurrile Bilder bleiben am besten haften</li>
                <li>&#9679; Mehrere Figuren zu einer Geschichte verbinden</li>
                <li>&#9679; Kombination mit Loci-Methode für Langzeit</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
              <span>📖</span> Chunking (für Konzentration)
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Gruppiere Zeichen in sinnvolle Einheiten, um sie schneller zu verarbeiten.
            </p>
            <div className="bg-green-50 rounded-xl p-4 text-sm text-green-700">
              <p>Entwickle eine feste Systematik: Scanne immer 3-4 Zeichen gleichzeitig und
              markiere Zielzeichen in einem gleichmässigen Rhythmus. Tägliches 8-Minuten-Training baut Automatismus auf.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
              <span>🧊</span> Ankerobjekt-Technik (für Objekte im Raum)
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Statt alle Objekte im Würfel zu verfolgen, konzentriere dich auf ein markantes Objekt.
            </p>
            <div className="bg-purple-50 rounded-xl p-4 text-sm text-purple-700">
              <p>Wähle das auffälligste Objekt im Würfel und verfolge nur dessen Position nach den zwei 90°-Drehungen.
              Eliminiere Antworten, wo das Ankerobjekt falsch liegt. Übe die 6 möglichen Drehrichtungen einzeln.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simulationsplan */}
      <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Simulationsplan
        </h2>
        <p className="text-gray-600 mb-6">
          Vollsimulationen unter Echtbedingungen sind der effektivste Weg, um dein Ergebnis zu verbessern.
          Das ZTD empfiehlt mindestens einen vollständigen Probetest vor dem echten EMS.
        </p>
        <div className="space-y-4">
          {[
            { zeit: "Anfang März", was: "Erste Simulation (unvorbereitet)", zweck: "Ist-Stand ermitteln, Schwächen identifizieren" },
            { zeit: "Ende April", was: "Zweite Simulation", zweck: "Fortschritt messen, Strategien testen" },
            { zeit: "Ende Mai", was: "Dritte Simulation", zweck: "Unter Zeitdruck arbeiten, Ausdauer testen" },
            { zeit: "Mitte Juni", was: "Letzte Simulation", zweck: "Feinschliff, finale Standortbestimmung" },
          ].map((sim, i) => (
            <div key={i} className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {i + 1}
              </span>
              <div>
                <div className="font-semibold text-gray-900">{sim.zeit}: {sim.was}</div>
                <div className="text-sm text-gray-600">{sim.zweck}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
          <strong>Tipp:</strong> Simuliere den kompletten Tagesablauf — 4 Stunden am Stück, mit Pause dazwischen wie beim echten EMS. Kein Handy, keine Unterbrechungen.
        </div>
      </section>

      {/* Tagesablauf am Testtag */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Checkliste Testtag (3. Juli 2026)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Mitnehmen:</h3>
            <ul className="space-y-1 text-gray-700">
              <li>☐ Ausweis / Pass</li>
              <li>☐ Aufgebot / Bestätigung</li>
              <li>☐ Mehrere Bleistifte (HB, weich)</li>
              <li>☐ Radiergummi</li>
              <li>☐ Spitzer</li>
              <li>☐ Wasser und Snacks für die Pause</li>
              <li>☐ Uhr (analog, nicht smart)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Tipps:</h3>
            <ul className="space-y-1 text-gray-700">
              <li>&#9679; Am Vorabend früh schlafen gehen</li>
              <li>&#9679; Ausreichend frühstücken</li>
              <li>&#9679; Pünktlich da sein (30 Min. vorher)</li>
              <li>&#9679; Kein Koffein-Überdosis</li>
              <li>&#9679; Positiv denken — du bist vorbereitet!</li>
              <li>&#9679; Pause effektiv nutzen: Snack, frische Luft</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
