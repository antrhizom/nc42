"use client";

import { useState } from "react";
import type { DiagrammAufgabe } from "@/data/uebungen";

interface DiagrammQuizProps {
  aufgaben: DiagrammAufgabe[];
}

export default function DiagrammQuiz({ aufgaben }: DiagrammQuizProps) {
  const [currentAufgabe, setCurrentAufgabe] = useState(0);
  const [currentFrage, setCurrentFrage] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const aufgabe = aufgaben[currentAufgabe];
  const frage = aufgabe.fragen[currentFrage];
  const totalFragen = aufgaben.reduce((acc, a) => acc + a.fragen.length, 0);
  const answeredSoFar =
    aufgaben.slice(0, currentAufgabe).reduce((acc, a) => acc + a.fragen.length, 0) +
    currentFrage +
    (selected !== null ? 1 : 0);

  const handleAnswer = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    setShowExplanation(true);
    if (index === frage.correctIndex) setScore(score + 1);
  };

  const handleNext = () => {
    if (currentFrage < aufgabe.fragen.length - 1) {
      setCurrentFrage(currentFrage + 1);
    } else if (currentAufgabe < aufgaben.length - 1) {
      setCurrentAufgabe(currentAufgabe + 1);
      setCurrentFrage(0);
    } else {
      setFinished(true);
    }
    setSelected(null);
    setShowExplanation(false);
  };

  const handleReset = () => {
    setCurrentAufgabe(0);
    setCurrentFrage(0);
    setSelected(null);
    setShowExplanation(false);
    setScore(0);
    setFinished(false);
  };

  const getOptionClass = (index: number) => {
    if (selected === null)
      return "border-gray-200 hover:border-amber-400 hover:bg-amber-50 cursor-pointer";
    if (index === frage.correctIndex)
      return "border-green-500 bg-green-50 text-green-900";
    if (index === selected && index !== frage.correctIndex)
      return "border-red-500 bg-red-50 text-red-900";
    return "border-gray-200 opacity-50";
  };

  const percentage = Math.round((score / totalFragen) * 100);

  if (finished) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Diagramme & Tabellen — Ergebnis</h3>
        <div className="text-center py-6">
          <div className={`text-6xl font-bold mb-2 ${percentage >= 60 ? "text-green-600" : "text-red-600"}`}>
            {percentage}%
          </div>
          <p className="text-gray-600 text-lg">{score} von {totalFragen} Fragen richtig</p>
          <div className="mt-4 w-full bg-gray-200 rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all duration-1000 ${percentage >= 60 ? "bg-green-500" : "bg-red-500"}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
        <button onClick={handleReset} className="w-full mt-4 py-3 px-6 bg-amber-600 text-white rounded-xl font-medium hover:bg-amber-700 transition-colors">
          Nochmal versuchen
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
          📊 {aufgabe.titel}
        </span>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          Frage {answeredSoFar - (selected !== null ? 1 : 0) + 1} / {totalFragen}
        </span>
      </div>

      {/* Progress */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-amber-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(answeredSoFar / totalFragen) * 100}%` }}
        />
      </div>

      {/* Beschreibung */}
      <p className="text-sm text-gray-600 mb-4">{aufgabe.beschreibung}</p>

      {/* Tabelle */}
      {aufgabe.tabelleDaten && (
        <div className="overflow-x-auto mb-6 border border-gray-200 rounded-xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                {aufgabe.tabelleDaten.headers.map((h, i) => (
                  <th key={i} className="text-left px-3 py-2 font-semibold text-gray-700 whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {aufgabe.tabelleDaten.rows.map((row, ri) => (
                <tr key={ri} className="border-b border-gray-100 hover:bg-gray-50">
                  {row.map((cell, ci) => (
                    <td key={ci} className={`px-3 py-2 ${ci === 0 ? "font-medium" : ""} whitespace-nowrap`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Frage */}
      <p className="text-gray-800 font-medium mb-6 leading-relaxed">{frage.question}</p>

      <div className="space-y-3">
        {frage.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={selected !== null}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${getOptionClass(index)}`}
          >
            <span className="font-semibold text-gray-400 mr-3">{String.fromCharCode(65 + index)}</span>
            {option}
            {selected !== null && index === frage.correctIndex && (
              <span className="float-right text-green-600">&#10003;</span>
            )}
            {selected === index && index !== frage.correctIndex && (
              <span className="float-right text-red-600">&#10007;</span>
            )}
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
          <p className="text-sm font-semibold text-amber-800 mb-1">Erklärung:</p>
          <p className="text-sm text-amber-700">{frage.explanation}</p>
        </div>
      )}

      {selected !== null && (
        <button
          onClick={handleNext}
          className="w-full mt-4 py-3 px-6 bg-amber-600 text-white rounded-xl font-medium hover:bg-amber-700 transition-colors"
        >
          {currentFrage < aufgabe.fragen.length - 1 || currentAufgabe < aufgaben.length - 1
            ? "Nächste Frage"
            : "Ergebnis anzeigen"}
        </button>
      )}
    </div>
  );
}
