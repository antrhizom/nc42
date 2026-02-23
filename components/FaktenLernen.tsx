"use client";

import { useState, useEffect, useRef } from "react";
import type { Altersgruppe } from "@/data/uebungen";
import type { QuizQuestion } from "@/data/untertests";

interface FaktenLernenProps {
  gruppen: Altersgruppe[];
  aufgaben: QuizQuestion[];
}

type Phase = "intro" | "lernen" | "pause" | "abruf" | "ergebnis";

export default function FaktenLernen({ gruppen, aufgaben }: FaktenLernenProps) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [timeLeft, setTimeLeft] = useState(180); // 3 Min. Kurzversion
  const [pauseTime, setPauseTime] = useState(60); // 1 Min. Pause (Kurzversion)
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Lerntimer
  useEffect(() => {
    if (phase === "lernen" && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
    if (phase === "lernen" && timeLeft === 0) {
      setPhase("pause");
    }
  }, [phase, timeLeft]);

  // Pausentimer
  useEffect(() => {
    if (phase === "pause" && pauseTime > 0) {
      timerRef.current = setInterval(() => {
        setPauseTime((t) => t - 1);
      }, 1000);
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
    if (phase === "pause" && pauseTime === 0) {
      setPhase("abruf");
    }
  }, [phase, pauseTime]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const handleAnswer = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    setShowExplanation(true);
    if (index === aufgaben[current].correctIndex) setScore(score + 1);
  };

  const handleNext = () => {
    if (current < aufgaben.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
      setShowExplanation(false);
    } else {
      setFinished(true);
      setPhase("ergebnis");
    }
  };

  const handleReset = () => {
    setPhase("intro");
    setTimeLeft(180);
    setPauseTime(60);
    setCurrent(0);
    setSelected(null);
    setShowExplanation(false);
    setScore(0);
    setFinished(false);
  };

  const getOptionClass = (index: number) => {
    if (selected === null)
      return "border-gray-200 hover:border-teal-400 hover:bg-teal-50 cursor-pointer";
    if (index === aufgaben[current].correctIndex)
      return "border-green-500 bg-green-50 text-green-900";
    if (index === selected && index !== aufgaben[current].correctIndex)
      return "border-red-500 bg-red-50 text-red-900";
    return "border-gray-200 opacity-50";
  };

  // --- INTRO ---
  if (phase === "intro") {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🗂️ Fakten lernen — Übungsmodus</h3>
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-6">
          <p className="text-sm text-teal-800 mb-2">
            <strong>So funktioniert es:</strong>
          </p>
          <ol className="text-sm text-teal-700 space-y-1 list-decimal list-inside">
            <li><strong>Einprägephase (3 Min.):</strong> Präge dir die 15 Patienten ein.</li>
            <li><strong>Pause (1 Min.):</strong> Simuliert die Pause im echten EMS.</li>
            <li><strong>Abrufphase:</strong> Beantworte Konstellationsfragen zu den Patienten.</li>
          </ol>
          <p className="text-xs text-teal-600 mt-2">
            💡 Kurzversion: Im echten EMS hast du 6 Min. zum Einprägen und ca. 45 Min. Pause.
          </p>
        </div>
        <button
          onClick={() => setPhase("lernen")}
          className="w-full py-3 px-6 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition-colors"
        >
          Einprägephase starten
        </button>
      </div>
    );
  }

  // --- LERNEN ---
  if (phase === "lernen") {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">📖 Einprägephase</h3>
          <div className={`text-lg font-mono font-bold px-4 py-1 rounded-full ${timeLeft <= 30 ? "bg-red-100 text-red-700" : "bg-teal-100 text-teal-700"}`}>
            ⏱ {formatTime(timeLeft)}
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-teal-500 h-2 rounded-full transition-all duration-1000"
            style={{ width: `${((180 - timeLeft) / 180) * 100}%` }}
          />
        </div>

        <p className="text-sm text-gray-500 mb-4">Präge dir die folgenden 15 Patienten ein:</p>

        <div className="space-y-4">
          {gruppen.map((gruppe) => (
            <div key={gruppe.label} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                <span className="font-semibold text-gray-800">{gruppe.label}</span>
                <span className="text-sm text-gray-500 ml-2">({gruppe.altersbereich})</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left px-3 py-2 text-gray-500 font-medium">Vorname</th>
                      <th className="text-left px-3 py-2 text-gray-500 font-medium">Nachname</th>
                      <th className="text-left px-3 py-2 text-gray-500 font-medium">G</th>
                      <th className="text-left px-3 py-2 text-gray-500 font-medium">Alter</th>
                      <th className="text-left px-3 py-2 text-gray-500 font-medium">Beruf</th>
                      <th className="text-left px-3 py-2 text-gray-500 font-medium">Diagnose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gruppe.patienten.map((p) => (
                      <tr key={p.vorname} className="border-b border-gray-50 hover:bg-gray-50">
                        <td className="px-3 py-2 font-medium">{p.vorname}</td>
                        <td className="px-3 py-2">{p.nachname}</td>
                        <td className="px-3 py-2">{p.geschlecht === "m" ? "♂" : "♀"}</td>
                        <td className="px-3 py-2">{p.alter}</td>
                        <td className="px-3 py-2">{p.beruf}</td>
                        <td className="px-3 py-2">{p.diagnose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => { setPhase("pause"); if (timerRef.current) clearInterval(timerRef.current); }}
          className="w-full mt-6 py-3 px-6 bg-gray-600 text-white rounded-xl font-medium hover:bg-gray-700 transition-colors"
        >
          Frühzeitig zur Pause
        </button>
      </div>
    );
  }

  // --- PAUSE ---
  if (phase === "pause") {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-4">⏸️ Pause</h3>
        <p className="text-gray-600 mb-6">Die Patientendaten sind jetzt verdeckt. Versuche, dich an alles zu erinnern!</p>
        <div className={`text-5xl font-mono font-bold mb-6 ${pauseTime <= 10 ? "text-red-600" : "text-gray-700"}`}>
          {formatTime(pauseTime)}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-orange-500 h-2 rounded-full transition-all duration-1000"
            style={{ width: `${((60 - pauseTime) / 60) * 100}%` }}
          />
        </div>
        <p className="text-sm text-gray-500 mb-6">Im echten EMS bearbeitest du hier andere Untertests (~45 Min.)</p>
        <button
          onClick={() => { setPhase("abruf"); if (timerRef.current) clearInterval(timerRef.current); }}
          className="py-3 px-6 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition-colors"
        >
          Direkt zur Abrufphase
        </button>
      </div>
    );
  }

  // --- ERGEBNIS ---
  if (phase === "ergebnis" || finished) {
    const percentage = Math.round((score / aufgaben.length) * 100);
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Fakten lernen — Ergebnis</h3>
        <div className="text-center py-6">
          <div className={`text-6xl font-bold mb-2 ${percentage >= 60 ? "text-green-600" : "text-red-600"}`}>
            {percentage}%
          </div>
          <p className="text-gray-600 text-lg">{score} von {aufgaben.length} Fragen richtig</p>
          <div className="mt-4 w-full bg-gray-200 rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all duration-1000 ${percentage >= 60 ? "bg-green-500" : "bg-red-500"}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
        <button onClick={handleReset} className="w-full mt-4 py-3 px-6 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition-colors">
          Nochmal versuchen
        </button>
      </div>
    );
  }

  // --- ABRUF ---
  const question = aufgaben[current];
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">🔍 Abrufphase</h3>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          {current + 1} / {aufgaben.length}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-teal-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((current + (selected !== null ? 1 : 0)) / aufgaben.length) * 100}%` }}
        />
      </div>

      <p className="text-gray-800 font-medium mb-6 leading-relaxed">{question.question}</p>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={selected !== null}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${getOptionClass(index)}`}
          >
            <span className="font-semibold text-gray-400 mr-3">{String.fromCharCode(65 + index)}</span>
            {option}
            {selected !== null && index === question.correctIndex && (
              <span className="float-right text-green-600">&#10003;</span>
            )}
            {selected === index && index !== question.correctIndex && (
              <span className="float-right text-red-600">&#10007;</span>
            )}
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className="mt-6 p-4 bg-teal-50 border border-teal-200 rounded-xl">
          <p className="text-sm font-semibold text-teal-800 mb-1">Erklärung:</p>
          <p className="text-sm text-teal-700">{question.explanation}</p>
        </div>
      )}

      {selected !== null && (
        <button
          onClick={handleNext}
          className="w-full mt-4 py-3 px-6 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition-colors"
        >
          {current < aufgaben.length - 1 ? "Nächste Frage" : "Ergebnis anzeigen"}
        </button>
      )}
    </div>
  );
}
