import Countdown from "@/components/Countdown";
import UntertestCard from "@/components/UntertestCard";
import { untertests } from "@/data/untertests";
import Link from "next/link";

export default function Home() {
  const teilA = untertests.filter((u) => u.teil === "A");
  const teilB = untertests.filter((u) => u.teil === "B");

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              EMS 2026 — 3. Juli 2026
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              NC42
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-2 font-light">
              Deine EMS-Vorbereitung für das Medizinstudium
            </p>
            <p className="text-blue-200 max-w-2xl mx-auto mb-10">
              Alle 9 Untertests erklärt, interaktive Übungsfragen, Strategien,
              Kursanbieter-Vergleich und KI-gestützte Vorbereitung — alles an
              einem Ort.
            </p>

            <Countdown />

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#untertests"
                className="px-8 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              >
                Untertests entdecken
              </Link>
              <Link
                href="/vorbereitung"
                className="px-8 py-3 bg-white/10 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors"
              >
                Lernplan ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: "9", label: "Untertests", icon: "📝" },
            { value: "158", label: "Aufgaben", icon: "🔢" },
            { value: "~4h", label: "Testdauer", icon: "⏱️" },
            { value: "97+", label: "Zielpunkte", icon: "🎯" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-sm"
            >
              <span className="text-2xl">{stat.icon}</span>
              <div className="text-2xl font-bold text-gray-900 mt-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Untertests Grid */}
      <section
        id="untertests"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Die 9 Untertests
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jeder Untertest prüft eine andere kognitive Fähigkeit. Klicke auf
            einen Test für Details, Strategien und interaktive Übungsfragen.
          </p>
        </div>

        <h3 className="text-lg font-semibold text-blue-700 mb-4 flex items-center gap-2">
          <span className="bg-blue-100 px-3 py-1 rounded-full text-sm">
            Teil A
          </span>
          Vormittag — 126 Minuten
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {teilA.map((test) => (
            <UntertestCard key={test.slug} {...test} />
          ))}
        </div>

        <h3 className="text-lg font-semibold text-purple-700 mb-4 flex items-center gap-2">
          <span className="bg-purple-100 px-3 py-1 rounded-full text-sm">
            Teil B
          </span>
          Nachmittag — 109 Minuten
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teilB.map((test) => (
            <UntertestCard key={test.slug} {...test} />
          ))}
        </div>
      </section>

      {/* CTA Sections */}
      <section className="bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/vorbereitung"
              className="group p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <span className="text-3xl">📅</span>
              <h3 className="font-bold text-lg mt-3 mb-2 group-hover:text-blue-600">
                4-Phasen-Lernplan
              </h3>
              <p className="text-sm text-gray-600">
                Strukturierter Plan von der Orientierung bis zum Feinschliff.
                Inkl. Mnemotechniken und Simulationsplan.
              </p>
            </Link>
            <Link
              href="/anbieter"
              className="group p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <span className="text-3xl">🏫</span>
              <h3 className="font-bold text-lg mt-3 mb-2 group-hover:text-blue-600">
                Anbieter-Vergleich
              </h3>
              <p className="text-sm text-gray-600">
                Medtest, EMS Coaches, MedGurus, Meditrain und mehr — Stärken,
                Preise und Formate im Überblick.
              </p>
            </Link>
            <Link
              href="/ki-tools"
              className="group p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <span className="text-3xl">🤖</span>
              <h3 className="font-bold text-lg mt-3 mb-2 group-hover:text-blue-600">
                KI-gestützt lernen
              </h3>
              <p className="text-sm text-gray-600">
                Copy-Paste-Prompts für ChatGPT und Claude — erstelle dir
                massgeschneiderte Übungsaufgaben.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
