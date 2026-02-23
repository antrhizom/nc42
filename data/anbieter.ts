export interface Anbieter {
  name: string;
  url: string;
  description: string;
  staerken: string[];
  besonderheit: string;
  preisbereich: string;
  kursformate: string[];
  standorte: string[];
}

export const anbieter: Anbieter[] = [
  {
    name: "Medtest",
    url: "https://www.eignungstest.ch/",
    description:
      "Grösster Anbieter in der Schweiz mit über 20 Jahren EMS-Expertenerfahrung. Jährlich vertrauen über 700 Kursteilnehmende und mehr als 2'000 Simulations-Teilnehmende Medtest.",
    staerken: [
      "Jede:r 4. Kursteilnehmer:in erreicht Prozentrang 90+",
      "5-tägiger Intensivkurs mit E-Learning und Betreuung bis zum Test",
      "3 verschiedene Testsimulationen (Rot, Grün, Blau) mit einzigartigen Aufgaben",
      "Aufgaben werden jährlich dem steigenden Schwierigkeitsgrad angepasst",
    ],
    besonderheit:
      "Zahlung der letzten CHF 500 erst bei erfolgreichem EMS-Bestehen",
    preisbereich: "CHF 500-1500",
    kursformate: ["Intensivkurs (5 Tage)", "E-Learning", "Testsimulationen"],
    standorte: ["Zürich", "Bern", "Basel", "Online"],
  },
  {
    name: "EMS Coaches",
    url: "https://emscoaches.ch/",
    description:
      "Schweizer Unternehmen (GmbH in Kreuzlingen), spezialisiert auf den Numerus Clausus. Das Team besteht aus Ärzt:innen und Medizinstudierenden.",
    staerken: [
      "Über 3'400 Aufgaben und 10 Bücher",
      "Lernplattform + Videokurs + Gratis-Lernplan-Tool",
      "Tutoren mit EMS-Prozentrang von über 90% (viele 100%)",
      "Kostenlose Übungsaufgaben für Objekte im Raum",
      "Klimaneutral gedruckte Bücher, CO2-kompensierter Versand",
    ],
    besonderheit:
      "30% Geld-zurück-Garantie (bis CHF 500) bei Nichtbestehen",
    preisbereich: "CHF 200-1200",
    kursformate: [
      "Präsenzkurs (4-5 Tage)",
      "Online-Kurs",
      "Ferienkurse",
      "Buchpaket",
      "Digitalpaket",
    ],
    standorte: ["Zürich", "Bern", "Basel", "Online"],
  },
  {
    name: "MedGurus",
    url: "https://medgurus.de/ems/",
    description:
      "Grosser Anbieter mit starkem E-Learning und der grössten EMS-Community auf Discord. Das Redaktionsteam wird von Top-Absolvent:innen unterstützt.",
    staerken: [
      "E-Learning ähnlich Duolingo — interaktiv und motivierend",
      "Grösster EMS Discord-Server als Community",
      "Probetest vom ZTD (Testhersteller) empfohlen",
      "Übungsbücher + Simulationsbuch + Online-Probetest",
      "Vergleich mit anderen Trainierenden möglich",
    ],
    besonderheit:
      "E-Learning mit Gamification-Elementen und Community-Vergleich",
    preisbereich: "CHF 150-800",
    kursformate: [
      "E-Learning-Plattform",
      "Übungsbücher",
      "Online-Probetest",
      "Simulationsbuch",
    ],
    standorte: ["Online"],
  },
  {
    name: "Meditrain",
    url: "https://ems-eignungstest.ch/",
    description:
      "Der erfahrenste Anbieter im deutschsprachigen Raum — seit 1984 auf den EMS spezialisiert. Über 2'000 Seminare und 20'000 Teilnehmende.",
    staerken: [
      "80% Bestehensquote laut eigenen Angaben",
      "Individuelle Betreuung in kleinen Gruppen",
      "Seit 1984 — ältester EMS-Vorbereitungsanbieter",
      "Über 20'000 Seminarteilnehmer",
    ],
    besonderheit:
      "Individuelle Betreuung statt Massenveranstaltungen — bewusst kleine Gruppen",
    preisbereich: "CHF 800-2000",
    kursformate: ["Intensivseminar", "Einzeltraining"],
    standorte: ["Verschiedene Standorte in der Schweiz"],
  },
  {
    name: "MEDISEMINAR",
    url: "https://numerusclausus.ch/",
    description:
      "Bietet Trainingsbücher mit verständlicher Methodik, anschaulichen Beispielen und zahlreichen Trainingsaufgaben mit ausführlichen Lösungen.",
    staerken: [
      "Speziell zugeschnittene Trainingsbücher für alle Untertests",
      "Verständliche Methodik mit vielen Beispielen",
      "Zahlreiche Trainingsaufgaben mit ausführlichen Lösungen",
    ],
    besonderheit:
      "Fokus auf Bücher und Selbststudium — gutes Preis-Leistungs-Verhältnis",
    preisbereich: "CHF 50-300",
    kursformate: ["Trainingsbücher", "Vorbereitungskurse"],
    standorte: ["Online", "Verschiedene Standorte"],
  },
];

export const kostenloseRessourcen = [
  {
    name: "swissuniversities Beispielaufgaben",
    url: "https://www.swissuniversities.ch/fileadmin/swissuniversities/Dokumente/Lehre/Medizin/Beispielaufgaben2025.pdf",
    description:
      "Offizielle Beispielaufgaben für alle Untertests inkl. Objekte im Raum (PDF)",
  },
  {
    name: "swissuniversities Konzentrationstest",
    url: "https://www.swissuniversities.ch/fileadmin/swissuniversities/Dokumente/Lehre/Medizin/BeispielaufgabenKonz.pdf",
    description:
      "6 echte Testversionen des Konzentrationstests mit Vergleichsdaten (PDF)",
  },
  {
    name: "NCWiki Vorbereitungskurs 2026",
    url: "https://www.nc-wiki.ch/kostenloser-vorbereitungskurs-2026-informationen-zur-anmeldung-durchfuehrung/",
    description:
      "Kostenloser 2-Tages-Kurs mit Medizinstudierenden (14./15. März 2026)",
  },
  {
    name: "EMS Coaches Gratis-Aufgaben",
    url: "https://emscoaches.ch/objekte-im-raum/",
    description:
      "18 Aufgaben zu Objekte im Raum + Simulationsvideo + Audiospur",
  },
  {
    name: "Originalversionen I, II, III",
    url: "https://www.eignungstest.ch/EMS-Numerus-Clausus-/Wissenswertes-zum-EMS",
    description:
      "Die einzigen offiziellen Vorbereitungsmaterialien vom ZTD (Universität Fribourg) — im Buchhandel erhältlich",
  },
  {
    name: "MedGurus Discord Community",
    url: "https://medgurus.de/ems/",
    description:
      "Grösster EMS Discord-Server — Austausch mit anderen Vorbereitenden",
  },
];
