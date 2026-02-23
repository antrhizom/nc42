"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/data/untertests";

interface QuizProps {
  questions: QuizQuestion[];
  title: string;
}

export default function Quiz({ questions, title }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  const question = questions[currentQuestion];

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === question.correctIndex) {
      setScore(score + 1);
    }
    setAnswers([...answers, index]);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setFinished(false);
    setAnswers([]);
  };

  const getOptionClass = (index: number) => {
    if (selectedAnswer === null)
      return "border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer";
    if (index === question.correctIndex)
      return "border-green-500 bg-green-50 text-green-900";
    if (index === selectedAnswer && index !== question.correctIndex)
      return "border-red-500 bg-red-50 text-red-900";
    return "border-gray-200 opacity-50";
  };

  const percentage = Math.round((score / questions.length) * 100);

  if (finished) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Quiz abgeschlossen!
        </h3>
        <div className="text-center py-6">
          <div
            className={`text-6xl font-bold mb-2 ${percentage >= 60 ? "text-green-600" : "text-red-600"}`}
          >
            {percentage}%
          </div>
          <p className="text-gray-600 text-lg">
            {score} von {questions.length} Fragen richtig
          </p>
          <div className="mt-4 w-full bg-gray-200 rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all duration-1000 ${percentage >= 60 ? "bg-green-500" : "bg-red-500"}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="mt-4 text-sm text-gray-500">
            {percentage >= 80
              ? "Hervorragend! Du bist sehr gut vorbereitet."
              : percentage >= 60
                ? "Gut! Mit weiterem Training erreichst du Topwerte."
                : "Hier gibt es noch Verbesserungspotenzial. Schau dir die Strategien nochmal an."}
          </p>
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
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          {currentQuestion + 1} / {questions.length}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{
            width: `${((currentQuestion + (selectedAnswer !== null ? 1 : 0)) / questions.length) * 100}%`,
          }}
        />
      </div>

      <p className="text-gray-800 font-medium mb-6 leading-relaxed">
        {question.question}
      </p>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={selectedAnswer !== null}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${getOptionClass(index)}`}
          >
            <span className="font-semibold text-gray-400 mr-3">
              {String.fromCharCode(65 + index)}
            </span>
            {option}
            {selectedAnswer !== null && index === question.correctIndex && (
              <span className="float-right text-green-600">&#10003;</span>
            )}
            {selectedAnswer === index &&
              index !== question.correctIndex && (
                <span className="float-right text-red-600">&#10007;</span>
              )}
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="text-sm font-semibold text-blue-800 mb-1">
            Erklärung:
          </p>
          <p className="text-sm text-blue-700">{question.explanation}</p>
        </div>
      )}

      {selectedAnswer !== null && (
        <button
          onClick={handleNext}
          className="w-full mt-4 py-3 px-6 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
        >
          {currentQuestion < questions.length - 1
            ? "Nächste Frage"
            : "Ergebnis anzeigen"}
        </button>
      )}
    </div>
  );
}
