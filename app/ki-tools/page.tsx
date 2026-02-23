"use client";

import Link from "next/link";
import { useState } from "react";

interface PromptCard {
  title: string;
  untertest: string;
  prompt: string;
  beschreibung: string;
  eignung: "hoch" | "mittel" | "eingeschränkt";
}

const prompts: PromptCard[] = [
  {
    title: "Quantitative Probleme generieren",
    untertest: "Quantitative & formale Probleme",
    eignung: "hoch",
    beschreibung: "Erstellt mathematische Textaufgaben im EMS-Stil mit Lösungen.",
    prompt: `Erstelle 5 EMS-typische Aufgaben für den Untertest "Quantitative und formale Probleme". Jede Aufgabe soll eine Textaufgabe sein, die mathematisch-logisches Denken erfordert (Prozentrechnung, Dreisatz, Wahrscheinlichkeit, Einheitenumrechnung, Mischungsrechnung). Gib jeweils 5 Antwortmöglichkeiten (A-E) an, wobei nur eine korrekt ist. Die falschen Antworten sollen typische Rechenfehler widerspiegeln. Füge am Ende die Lösungen mit ausführlicher Erklärung bei. Schwierigkeitsgrad: mittel bis hoch (EMS-Niveau).`,
  },
  {
    title: "Textverständnis-Übung erstellen",
    untertest: "Textverständnis",
    eignung: "hoch",
    beschreibung: "Generiert wissenschaftliche Texte mit Verständnisfragen.",
    prompt: `Schreibe einen naturwissenschaftlichen Text (ca. 800 Wörter) über ein medizinisches Thema (z.B. Immuntherapie, Neuroplastizität oder Epigenetik). Der Text soll anspruchsvoll, aber ohne Vorwissen verständlich sein. Erstelle danach 4 Multiple-Choice-Fragen (je 5 Antwortmöglichkeiten A-E) im Stil des EMS-Untertests "Textverständnis". Die Fragen sollen prüfen: 1) Hauptaussage erfassen, 2) Implizite Information erkennen, 3) Logische Schlussfolgerung, 4) Detailverständnis. Lösung mit Erklärung am Ende.`,
  },
  {
    title: "Med.-nat. Grundverständnis",
    untertest: "Medizinisch-naturwiss. Grundverständnis",
    eignung: "hoch",
    beschreibung: "Erstellt Aufgaben zum logischen Schlussfolgern bei naturwiss. Sachverhalten.",
    prompt: `Erstelle 3 Aufgaben im Stil des EMS-Untertests "Medizinisch-naturwissenschaftliches Grundverständnis". Jede Aufgabe enthält einen kurzen Text (150-200 Wörter), der einen biologischen, chemischen oder physikalischen Sachverhalt beschreibt. Die Frage soll eine logische Schlussfolgerung aus dem Text prüfen — es darf KEIN Vorwissen nötig sein, alle Infos stehen im Text. 5 Antwortmöglichkeiten (A-E), wobei die Distraktoren plausibel, aber falsch sind. Lösung mit detaillierter Erklärung der logischen Kette.`,
  },
  {
    title: "Diagramm-Interpretation üben",
    untertest: "Diagramme & Tabellen",
    eignung: "hoch",
    beschreibung: "Generiert Tabellen/Datensätze mit Interpretationsfragen.",
    prompt: `Beschreibe eine detaillierte Tabelle mit fiktiven medizinischen Studiendaten (z.B. Wirksamkeit eines Medikaments bei verschiedenen Altersgruppen, oder Nebenwirkungsraten bei verschiedenen Dosierungen). Die Tabelle soll mindestens 4 Spalten und 6 Zeilen haben. Erstelle dazu 4 Fragen im EMS-Stil, die testen: 1) Korrektes Ablesen von Werten, 2) Berechnung aus den Daten, 3) Vergleich zwischen Gruppen, 4) Schlussfolgerung. Baue eine typische Falle ein (z.B. relative vs. absolute Werte). 5 Antwortmöglichkeiten pro Frage, Lösungen am Ende.`,
  },
  {
    title: "Fakten-Lern-Set generieren",
    untertest: "Fakten lernen",
    eignung: "hoch",
    beschreibung: "Erstellt Patientendaten-Sets zum Trainieren der Merkfähigkeit.",
    prompt: `Erstelle ein Trainingsset für den EMS-Untertest "Fakten lernen": 15 fiktive Patienten in 5 Altersgruppen (je 3 Patienten). Jeder Patient hat: Vorname, Nachname, Geschlecht, Alter (innerhalb der Altersgruppe), Beruf, Diagnose. Verwende realistische Schweizer Namen. Stelle die Daten als übersichtliche Tabelle dar. Erstelle danach 10 Prüfungsfragen — darunter auch 3 Konstellationsfragen wie "Welchen Beruf hat die älteste Frau mit Diagnose X?" oder "Welche Diagnose hat der jüngste Patient in der Gruppe der 40-49-Jährigen?". Lösungen am Ende.`,
  },
  {
    title: "Personalisierter Lernplan",
    untertest: "Alle",
    eignung: "hoch",
    beschreibung: "Erstellt einen individuellen Lernplan basierend auf deinen Stärken/Schwächen.",
    prompt: `Ich bereite mich auf den EMS (Eignungstest für das Medizinstudium in der Schweiz) vor. Der Test ist am 3. Juli 2026. Erstelle mir einen personalisierten 3-Monats-Lernplan (April bis Ende Juni).

Meine Situation:
- Ich habe täglich [2/3/4] Stunden Zeit
- Stärken: [z.B. Mathe, Konzentration]
- Schwächen: [z.B. Textverständnis, Merkfähigkeit]
- Ich habe [noch keinen / bereits einen] Vorbereitungskurs besucht

Der Plan soll enthalten: Wochenplan mit konkreten Aufgaben, Schwerpunkte für schwache Bereiche, Simulationstermine, und Pausen-/Erholungszeiten. Formatiere alles als übersichtliche Tabelle.`,
  },
  {
    title: "Fehleranalyse nach Simulation",
    untertest: "Alle",
    eignung: "mittel",
    beschreibung: "Hilft dir, deine Simulationsergebnisse systematisch zu analysieren.",
    prompt: `Ich habe eine EMS-Testsimulation gemacht und folgende Ergebnisse erzielt:
- Quantitative Probleme: [X]/18
- Textverständnis: [X]/18
- Med.-nat. Grundverständnis: [X]/18
- Objekte im Raum: [X]/18
- Muster zuordnen: [X]/18
- Diagramme & Tabellen: [X]/18
- Figuren lernen: [X]/18
- Fakten lernen: [X]/18
- Konzentration: [X] Zeichen

Analysiere mein Ergebnis: Wo liege ich über/unter dem Durchschnitt? Welche Untertests haben das grösste Verbesserungspotenzial? Erstelle einen konkreten 2-Wochen-Plan, um meine schwächsten 2-3 Untertests gezielt zu verbessern.`,
  },
  {
    title: "Mentales Training & Stressbewältigung",
    untertest: "Alle",
    eignung: "mittel",
    beschreibung: "Erstellt Übungen für mentale Vorbereitung und Prüfungsangst.",
    prompt: `Erstelle mir ein 10-minütiges mentales Trainings-Programm für die EMS-Vorbereitung. Es soll enthalten:
1. Eine Atemübung (2 Min.) zur Beruhigung vor dem Test
2. Eine Visualisierungsübung (3 Min.) — ich stelle mir vor, wie ich den Test erfolgreich und ruhig absolviere
3. Positive Affirmationen (2 Min.) spezifisch für den EMS
4. Eine Notfall-Strategie (3 Min.) für den Fall, dass ich während des Tests Panik bekomme oder bei einer Aufgabe komplett blockiere

Formuliere alles als geführte Anleitung, die ich mir laut vorlesen oder aufnehmen kann.`,
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
        copied
          ? "bg-green-100 text-green-700 border border-green-300"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
    >
      {copied ? "Kopiert! ✓" : "Prompt kopieren"}
    </button>
  );
}

export default function KiToolsPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">KI-Tools</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
        KI-gestützte Vorbereitung
      </h1>
      <p className="text-lg text-gray-600 mb-4">
        Nutze ChatGPT, Claude oder andere KI-Tools, um dir massgeschneiderte
        Übungsaufgaben für den EMS zu erstellen. Kopiere einfach die Prompts und füge
        sie in deinen KI-Chat ein.
      </p>

      {/* Hinweis */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-10 text-sm text-amber-800">
        <strong>Wichtig:</strong> KI-generierte Aufgaben sind eine gute Ergänzung, aber kein Ersatz
        für offizielle Materialien. Prüfe die Aufgaben immer kritisch — KI kann Fehler machen.
        Für visuelle Untertests (Muster zuordnen, Figuren lernen, Objekte im Raum) sind KI-Aufgaben
        nur eingeschränkt nutzbar.
      </div>

      {/* Eignungs-Übersicht */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-4">KI-Eignung pro Untertest</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {[
            { name: "Quantitative & formale Probleme", eignung: "hoch" },
            { name: "Textverständnis", eignung: "hoch" },
            { name: "Med.-nat. Grundverständnis", eignung: "hoch" },
            { name: "Diagramme & Tabellen", eignung: "hoch" },
            { name: "Fakten lernen", eignung: "hoch" },
            { name: "Konzentration", eignung: "eingeschränkt" },
            { name: "Figuren lernen", eignung: "eingeschränkt" },
            { name: "Muster zuordnen", eignung: "eingeschränkt" },
            { name: "Objekte im Raum", eignung: "eingeschränkt" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
              <span className="text-gray-700">{item.name}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                item.eignung === "hoch" ? "bg-green-100 text-green-700" :
                item.eignung === "mittel" ? "bg-yellow-100 text-yellow-700" :
                "bg-gray-200 text-gray-600"
              }`}>
                {item.eignung === "hoch" ? "Sehr gut geeignet" :
                 item.eignung === "mittel" ? "Geeignet" :
                 "Eingeschränkt"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Prompt Cards */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Copy-Paste Prompts</h2>
      <div className="space-y-4">
        {prompts.map((p, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-gray-900">{p.title}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    p.eignung === "hoch" ? "bg-green-100 text-green-700" :
                    p.eignung === "mittel" ? "bg-yellow-100 text-yellow-700" :
                    "bg-gray-200 text-gray-600"
                  }`}>
                    {p.eignung}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{p.beschreibung}</p>
              </div>
              <span className={`text-gray-400 transition-transform ${expandedIndex === index ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            {expandedIndex === index && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <div className="mt-4 bg-gray-900 text-gray-100 rounded-xl p-4 text-sm font-mono whitespace-pre-wrap leading-relaxed">
                  {p.prompt}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Untertest: {p.untertest}
                  </span>
                  <CopyButton text={p.prompt} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Tipps */}
      <section className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Tipps für die KI-Nutzung</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="text-blue-500 flex-shrink-0">1.</span>
            <span><strong>Schwierigkeitsgrad anpassen:</strong> Füge &laquo;Schwierigkeitsgrad: einfach/mittel/schwer&raquo; zum Prompt hinzu.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-500 flex-shrink-0">2.</span>
            <span><strong>Themen variieren:</strong> Ersetze das Thema im Prompt, um verschiedene Bereiche abzudecken.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-500 flex-shrink-0">3.</span>
            <span><strong>Feedback-Schleife:</strong> Sage der KI, welche Aufgaben zu leicht/schwer waren und bitte um Anpassung.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-500 flex-shrink-0">4.</span>
            <span><strong>Kritisch prüfen:</strong> Rechne Lösungen nach und vergleiche mit offiziellen Materialien. KI kann Fehler machen.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-500 flex-shrink-0">5.</span>
            <span><strong>Platzhalter ausfüllen:</strong> Ersetze [Klammern] in den Prompts mit deinen persönlichen Angaben.</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
