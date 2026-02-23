import MedNatQuiz from "@/components/MedNatQuiz";
import FaktenLernen from "@/components/FaktenLernen";
import DiagrammQuiz from "@/components/DiagrammQuiz";
import Quiz from "@/components/Quiz";
import {
  medNatAufgaben,
  quantitativeAufgaben,
  textverstaendnisText,
  textverstaendnisAufgaben,
  faktenLernenDaten,
  faktenLernenAufgaben,
  diagrammAufgaben,
  musterZuordnenInfo,
  objekteImRaumInfo,
  figurenLernenInfo,
  konzentrationInfo,
} from "@/data/uebungen";

export const metadata = {
  title: "Übungen — NC42 EMS Vorbereitung",
  description:
    "Interaktive Übungsaufgaben im offiziellen EMS-Format. Trainiere alle Untertests mit Aufgaben nach dem Vorbild der Beispielaufgaben 2025.",
};

function SectionAnchor({ id }: { id: string }) {
  return <div id={id} className="scroll-mt-24" />;
}

export default function UebungenPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
              📝 Übungsaufgaben im EMS-Format
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              Übungen
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              Interaktive Aufgaben nach dem Vorbild der offiziellen Beispielaufgaben 2025 von
              swissuniversities/ZTD — in einer Kurzversion zum Trainieren.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 -mt-8">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Springe zu einem Untertest:
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {[
              { id: "med-nat", label: "🔬 Med.-nat. Grundverständnis", color: "purple" },
              { id: "quantitativ", label: "🔢 Quantitative Probleme", color: "blue" },
              { id: "text", label: "📖 Textverständnis", color: "green" },
              { id: "fakten", label: "🗂️ Fakten lernen", color: "teal" },
              { id: "diagramme", label: "📊 Diagramme & Tabellen", color: "amber" },
              { id: "muster", label: "🔍 Muster zuordnen", color: "pink" },
              { id: "objekte", label: "🧊 Objekte im Raum", color: "cyan" },
              { id: "figuren", label: "🧩 Figuren lernen", color: "indigo" },
              { id: "konzentration", label: "🎯 Konzentration", color: "red" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition-colors text-center border border-gray-100 hover:border-gray-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* ============================================ */}
        {/* 1. Med.-nat. Grundverständnis */}
        {/* ============================================ */}
        <section>
          <SectionAnchor id="med-nat" />
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🔬</span>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Medizinisch-naturwiss. Grundverständnis
              </h2>
              <p className="text-sm text-gray-500">Teil A · 5 Aufgaben · Format: Sachtext → Aussagen I/II/III → Kombination</p>
            </div>
          </div>
          <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 mb-6">
            <p className="text-sm text-purple-700">
              <strong>EMS-Format:</strong> Du liest einen Sachtext und entscheidest, welche der drei Aussagen (I, II, III)
              sich aus dem Text ableiten lassen. Die Antwortmöglichkeiten sind Kombinationen dieser Aussagen.
              Nutze <em>nur</em> die Informationen aus dem Text — kein Vorwissen!
            </p>
          </div>
          <MedNatQuiz aufgaben={medNatAufgaben} />
        </section>

        {/* ============================================ */}
        {/* 2. Quantitative & formale Probleme */}
        {/* ============================================ */}
        <section>
          <SectionAnchor id="quantitativ" />
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🔢</span>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Quantitative & formale Probleme
              </h2>
              <p className="text-sm text-gray-500">Teil A · 6 Aufgaben · Format: Mathematische Textaufgaben</p>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
            <p className="text-sm text-blue-700">
              <strong>EMS-Format:</strong> Jede Aufgabe ist eine mathematische Textaufgabe mit 5 Antwortmöglichkeiten (A–E).
              Typisch: Prozentrechnung, Dreisatz, Einheitenumrechnung, Mischungsaufgaben, Halbwertszeiten.
              Tipp: Schreibe die gegebenen Werte heraus und führe Einheiten mit!
            </p>
          </div>
          <Quiz questions={quantitativeAufgaben} title="Quantitative Probleme" />
        </section>

        {/* ============================================ */}
        {/* 3. Textverständnis */}
        {/* ============================================ */}
        <section>
          <SectionAnchor id="text" />
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">📖</span>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Textverständnis</h2>
              <p className="text-sm text-gray-500">Teil B · 1 Text + 4 Fragen · Format: Wissenschaftlicher Text + MC-Fragen</p>
            </div>
          </div>
          <div className="bg-green-50 border border-green-100 rounded-xl p-4 mb-6">
            <p className="text-sm text-green-700">
              <strong>EMS-Format:</strong> Du liest einen anspruchsvollen wissenschaftlichen Text und beantwortest
              dazu 4–6 Multiple-Choice-Fragen. Lies zuerst die Fragen, dann den Text gezielt!
            </p>
          </div>

          {/* Text */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">📄 Wissenschaftlicher Text</h3>
            <div className="prose prose-sm prose-gray max-w-none">
              {textverstaendnisText.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-gray-800 leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <Quiz questions={textverstaendnisAufgaben} title="Textverständnis — Fragen zum Text" />
        </section>

        {/* ============================================ */}
        {/* 4. Fakten lernen */}
        {/* ============================================ */}
        <section>
          <SectionAnchor id="fakten" />
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🗂️</span>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Fakten lernen</h2>
              <p className="text-sm text-gray-500">Teil A+B · 15 Patienten · Format: Einprägen → Pause → Konstellationsfragen</p>
            </div>
          </div>
          <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 mb-6">
            <p className="text-sm text-teal-700">
              <strong>EMS-Format:</strong> Du prägst dir 15 Patienten (5 Altersgruppen × 3 Patienten) mit je 6 Fakten ein.
              Nach einer Pause folgen Konstellationsfragen wie: &quot;Welchen Beruf hat die jüngste Frau mit Diagnose X?&quot;
              Kurzversion: 3 Min. Einprägen, 1 Min. Pause (statt 6 Min. / 45 Min. im echten EMS).
            </p>
          </div>
          <FaktenLernen gruppen={faktenLernenDaten} aufgaben={faktenLernenAufgaben} />
        </section>

        {/* ============================================ */}
        {/* 5. Diagramme & Tabellen */}
        {/* ============================================ */}
        <section>
          <SectionAnchor id="diagramme" />
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">📊</span>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Diagramme & Tabellen</h2>
              <p className="text-sm text-gray-500">Teil B · 3 Datensätze + 6 Fragen · Format: Tabelle/Diagramm + Interpretationsfragen</p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-6">
            <p className="text-sm text-amber-700">
              <strong>EMS-Format:</strong> Du erhältst Tabellen oder Diagramme mit medizinischen Daten
              und beantwortest Fragen, die korrektes Ablesen, Berechnen und Schlussfolgern erfordern.
              Achte besonders auf Einheiten, Achsenbeschriftungen und den Unterschied zwischen relativen und absoluten Werten!
            </p>
          </div>
          <DiagrammQuiz aufgaben={diagrammAufgaben} />
        </section>

        {/* ============================================ */}
        {/* 6. Muster zuordnen (visuell — Hinweise) */}
        {/* ============================================ */}
        <section>
          <SectionAnchor id="muster" />
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🔍</span>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Muster zuordnen</h2>
              <p className="text-sm text-gray-500">Teil A · Visueller Untertest · Nicht digital abbildbar</p>
            </div>
          </div>
          <div className="bg-pink-50 border border-pink-200 rounded-2xl p-6">
            <p className="text-sm text-gray-700 mb-4">{musterZuordnenInfo.beschreibung}</p>
            <h3 className="text-sm font-semibold text-pink-800 mb-3">🎯 Übungstipps:</h3>
            <ul className="space-y-2">
              {musterZuordnenInfo.uebungstipps.map((tipp, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-pink-500 mt-0.5">✦</span>
                  {tipp}
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 bg-white rounded-xl border border-pink-100">
              <p className="text-xs text-gray-500">
                📎 Offizielle Übungsmaterialien findest du im{" "}
                <a
                  href="https://www.swissuniversities.ch/themen/medizin/eignungstest-ems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 underline hover:text-pink-800"
                >
                  swissuniversities EMS-Portal
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 7. Objekte im Raum (visuell — Hinweise) */}
        {/* ============================================ */}
        <section>
          <SectionAnchor id="objekte" />
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🧊</span>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Objekte im Raum</h2>
              <p className="text-sm text-gray-500">Teil A · Visueller Untertest (neu seit 2025) · Nicht digital abbildbar</p>
            </div>
          </div>
          <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-6">
            <p className="text-sm text-gray-700 mb-4">{objekteImRaumInfo.beschreibung}</p>
            <h3 className="text-sm font-semibold text-cyan-800 mb-3">🎯 Übungstipps:</h3>
            <ul className="space-y-2">
              {objekteImRaumInfo.uebungstipps.map((tipp, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-cyan-500 mt-0.5">✦</span>
                  {tipp}
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 bg-white rounded-xl border border-cyan-100">
              <p className="text-xs text-gray-500">
                🧊 Spezifische Übungsmaterialien gibt es bei{" "}
                <a href="https://www.ems-coaches.ch" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline hover:text-cyan-800">
                  EMS Coaches
                </a>{" "}
                und{" "}
                <a href="https://www.medgurus.de" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline hover:text-cyan-800">
                  MedGurus
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 8. Figuren lernen (Strategie-Quiz) */}
        {/* ============================================ */}
        <section>
          <SectionAnchor id="figuren" />
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🧩</span>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Figuren lernen</h2>
              <p className="text-sm text-gray-500">Teil A+B · Visueller Gedächtnistest · Strategie-Quiz</p>
            </div>
          </div>
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-6">
            <p className="text-sm text-gray-700 mb-4">{figurenLernenInfo.beschreibung}</p>
            <p className="text-xs text-gray-500">
              Da abstrakte Figuren schwer digital darstellbar sind, bieten wir hier ein Strategie-Quiz an.
              Für echte Figurenübungen nutze die offiziellen Materialien von swissuniversities.
            </p>
          </div>
          <Quiz questions={figurenLernenInfo.strategieQuiz} title="Figuren lernen — Strategie-Quiz" />
        </section>

        {/* ============================================ */}
        {/* 9. Konzentration (Strategie-Quiz) */}
        {/* ============================================ */}
        <section>
          <SectionAnchor id="konzentration" />
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🎯</span>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Konzentriertes & sorgfältiges Arbeiten</h2>
              <p className="text-sm text-gray-500">Teil B · Geschwindigkeitstest · Strategie-Quiz</p>
            </div>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6">
            <p className="text-sm text-gray-700 mb-4">{konzentrationInfo.beschreibung}</p>
            <p className="text-xs text-gray-500">
              Für echte Konzentrationstests (1600 Zeichen in 8 Min.) lade die 6 kostenlosen Testversionen von{" "}
              <a
                href="https://www.swissuniversities.ch/themen/medizin/eignungstest-ems"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 underline hover:text-red-800"
              >
                swissuniversities
              </a>{" "}
              herunter.
            </p>
          </div>
          <Quiz questions={konzentrationInfo.strategieQuiz} title="Konzentration — Strategie-Quiz" />
        </section>

        {/* ============================================ */}
        {/* Hinweis-Box */}
        {/* ============================================ */}
        <section className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">💡 Hinweis zur Kurzversion</h2>
          <div className="space-y-3 text-sm text-gray-700">
            <p>
              Diese Übungen sind eine <strong>verkürzte Version</strong> im Stil der offiziellen EMS-Beispielaufgaben 2025
              von swissuniversities/ZTD. Im echten EMS sind die Aufgaben umfangreicher:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <p className="font-semibold text-gray-900 mb-1">📋 Echtes EMS</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• 84 Aufgaben + 1600 Zeichen Konzentration</li>
                  <li>• Teil A: 126 Minuten</li>
                  <li>• Teil B: 109 Minuten</li>
                  <li>• 18 Aufgaben pro Untertest</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <p className="font-semibold text-gray-900 mb-1">📝 Diese Kurzversion</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• 4–6 Aufgaben pro Untertest</li>
                  <li>• Gleiches Frageformat wie im EMS</li>
                  <li>• Sofortige Auswertung & Erklärungen</li>
                  <li>• Ideal zum Kennenlernen der Aufgabentypen</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Für vollständige Simulationen empfehlen wir die offiziellen Übungsmaterialien und
              die Angebote der Kursanbieter (siehe{" "}
              <a href="/anbieter" className="text-indigo-600 underline hover:text-indigo-800">
                Anbieter
              </a>
              ).
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
