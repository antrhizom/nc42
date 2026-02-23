"use client";

import { useState } from "react";
import type { MedNatAufgabe } from "@/data/uebungen";

interface MedNatQuizProps {
  aufgaben: MedNatAufgabe[];
}

export default function MedNatQuiz({ aufgaben }: MedNatQuizProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const aufgabe = aufgaben[current];

  const handleAnswer = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    setShowExplanation(true);
    if (index === aufgabe.correctIndex) setScore(score + 1);
  };

  const handleNext = () => {
    if (current < aufgaben.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
      setShowExplanation(false);
    } else {
      setFinished(true);
    }
  };

  const handleReset = () => {
    setCurrent(0);
    setSelected(null);
    setShowExplanation(false);
    setScore(0);
    setFinished(false);
  };

  const getOptionClass = (index: number) => {
    if (selected === null)
      return "border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer";
    if (index === aufgabe.correctIndex)
      return "border-green-500 bg-green-50 text-green-900";
    if (index === selected && index !== aufgabe.correctIndex)
      return "border-red-500 bg-red-50 text-red-900";
    return "border-gray-200 opacity-50";
  };

  const percentage = Math.round((score / aufgaben.length) * 100);

  if (finished) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Med.-nat. Grundverständnis — Ergebnis
        </h3>
        <div className="text-center py-6">
          <div className={`text-6xl font-bold mb-2 ${percentage >= 60 ? "text-green-600" : "text-red-600"}`}>
            {percentage}%
          </div>
          <p className="text-gray-600 text-lg">
            {score} von {aufgaben.length} Fragen richtig
          </p>
          <div className="mt-4 w-full bg-gray-200 rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all duration-1000 ${percentage >= 60 ? "bg-green-500" : "bg-red-500"}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
        <button
          onClick={handleReset}
          className="w-full mt-4 py-3 px-6 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
        >
          Nochmal versuchen
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
          Aufgabe {aufgabe.id}
        </span>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          {current + 1} / {aufgaben.length}
        </span>
      </div>

      {/* Progress */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-purple-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((current + (selected !== null ? 1 : 0)) / aufgaben.length) * 100}%` }}
        />
      </div>

      {/* Sachtext */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6">
        <p className="text-sm text-gray-500 font-semibold mb-2">📄 Sachtext:</p>
        <p className="text-gray-800 leading-relaxed text-sm">{aufgabe.text}</p>
      </div>

      {/* Aussagen */}
      <div className="mb-6">
        <p className="font-medium text-gray-900 mb-3">Welche der folgenden Aussagen ist/sind richtig?</p>
        <div className="space-y-2 bg-blue-50 border border-blue-100 rounded-xl p-4">
          {aufgabe.aussagen.map((aussage, i) => (
            <p key={i} className="text-sm text-gray-800">
              <span className="font-bold text-blue-700">{["I", "II", "III"][i]}.</span> {aussage}
            </p>
          ))}
        </div>
      </div>

      {/* Optionen */}
      <div className="space-y-3">
        {aufgabe.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={selected !== null}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${getOptionClass(index)}`}
          >
            <span className="font-semibold text-gray-400 mr-3">
              {String.fromCharCode(65 + index)}
            </span>
            {option}
            {selected !== null && index === aufgabe.correctIndex && (
              <span className="float-right text-green-600">&#10003;</span>
            )}
            {selected === index && index !== aufgabe.correctIndex && (
              <span className="float-right text-red-600">&#10007;</span>
            )}
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-xl">
          <p className="text-sm font-semibold text-purple-800 mb-1">Erklärung:</p>
          <p className="text-sm text-purple-700">{aufgabe.explanation}</p>
        </div>
      )}

      {selected !== null && (
        <button
          onClick={handleNext}
          className="w-full mt-4 py-3 px-6 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors"
        >
          {current < aufgaben.length - 1 ? "Nächste Aufgabe" : "Ergebnis anzeigen"}
        </button>
      )}
    </div>
  );
}
