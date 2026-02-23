import { notFound } from "next/navigation";
import { untertests } from "@/data/untertests";
import Quiz from "@/components/Quiz";
import Link from "next/link";

export function generateStaticParams() {
  return untertests.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const test = untertests.find((t) => t.slug === params.slug);
  if (!test) return { title: "Nicht gefunden" };
  return {
    title: `${test.title} – NC42 EMS Vorbereitung`,
    description: test.shortDescription,
  };
}

export default function UntertestPage({
  params,
}: {
  params: { slug: string };
}) {
  const test = untertests.find((t) => t.slug === params.slug);
  if (!test) notFound();

  const currentIndex = untertests.findIndex((t) => t.slug === params.slug);
  const prevTest = currentIndex > 0 ? untertests[currentIndex - 1] : null;
  const nextTest =
    currentIndex < untertests.length - 1 ? untertests[currentIndex + 1] : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/#untertests" className="hover:text-blue-600">
          Untertests
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{test.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{test.icon}</span>
          <div>
            <span
              className={`text-xs font-semibold px-2 py-1 rounded-full ${test.teil === "A" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`}
            >
              Teil {test.teil}
            </span>
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          {test.title}
        </h1>
        <p className="text-lg text-gray-600">{test.shortDescription}</p>
      </div>

      {/* Quick Facts */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-gray-900">{test.aufgaben}</div>
          <div className="text-xs text-gray-500">Aufgaben</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
          <div className="text-lg font-bold text-gray-900">{test.zeit}</div>
          <div className="text-xs text-gray-500">Zeit</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
          <div className="text-lg font-bold text-gray-900">
            {test.zeitProAufgabe}
          </div>
          <div className="text-xs text-gray-500">Pro Aufgabe</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
          <div className="flex justify-center gap-1 mb-1">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-5 h-3 rounded-full ${i <= test.trainierbarkeit ? "bg-green-500" : "bg-gray-200"}`}
              />
            ))}
          </div>
          <div className="text-xs text-gray-500">Trainierbarkeit</div>
        </div>
      </div>

      {/* Description */}
      <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Beschreibung</h2>
        <p className="text-gray-700 leading-relaxed">{test.beschreibung}</p>
        <div className="mt-4 p-4 bg-blue-50 rounded-xl">
          <h3 className="text-sm font-semibold text-blue-800 mb-1">
            Geprüfte Kompetenz
          </h3>
          <p className="text-sm text-blue-700">{test.kompetenz}</p>
        </div>
      </section>

      {/* Strategies */}
      <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Strategien & Lösungsansätze
        </h2>
        <div className="space-y-3">
          {test.strategien.map((strategie, i) => (
            <div key={i} className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                {i + 1}
              </span>
              <p className="text-gray-700 pt-0.5">{strategie}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>💡</span> Tipps
        </h2>
        <ul className="space-y-2">
          {test.tipps.map((tipp, i) => (
            <li key={i} className="flex gap-2 text-gray-700">
              <span className="text-amber-500">&#9679;</span>
              {tipp}
            </li>
          ))}
        </ul>
      </section>

      {/* Quiz */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Übungsfragen
        </h2>
        <p className="text-gray-600 mb-6">
          Teste dein Wissen mit diesen interaktiven Fragen zum Untertest &laquo;
          {test.title}&raquo;.
        </p>
        <Quiz questions={test.quizQuestions} title={test.title} />
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
        {prevTest ? (
          <Link
            href={`/untertests/${prevTest.slug}`}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <span>&larr;</span>
            <div className="text-sm">
              <div className="text-xs text-gray-400">Vorheriger</div>
              <div className="font-medium">{prevTest.title}</div>
            </div>
          </Link>
        ) : (
          <div />
        )}
        {nextTest ? (
          <Link
            href={`/untertests/${nextTest.slug}`}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-right"
          >
            <div className="text-sm">
              <div className="text-xs text-gray-400">Nächster</div>
              <div className="font-medium">{nextTest.title}</div>
            </div>
            <span>&rarr;</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
