import Link from "next/link";

interface UntertestCardProps {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  aufgaben: number;
  zeit: string;
  teil: "A" | "B";
  trainierbarkeit: number;
}

export default function UntertestCard({
  slug,
  title,
  icon,
  shortDescription,
  aufgaben,
  zeit,
  teil,
  trainierbarkeit,
}: UntertestCardProps) {
  return (
    <Link href={`/untertests/${slug}`}>
      <div className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300 h-full flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <span className="text-3xl">{icon}</span>
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${teil === "A" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`}
          >
            Teil {teil}
          </span>
        </div>
        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow">
          {shortDescription}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{aufgaben} Aufgaben</span>
          <span>{zeit}</span>
        </div>
        <div className="mt-3 flex items-center gap-1">
          <span className="text-xs text-gray-500 mr-1">Trainierbarkeit:</span>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-4 h-2 rounded-full ${i <= trainierbarkeit ? "bg-green-500" : "bg-gray-200"}`}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
