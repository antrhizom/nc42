import type { QuizQuestion } from "./untertests";

// ============================================================
// Übungsdaten nach dem offiziellen EMS-Format (Beispielaufgaben 2025)
// Kurzversion: Pro Untertest 4-6 Aufgaben im Originalstil
// ============================================================

// --- Medizinisch-naturwissenschaftliches Grundverständnis ---
// Format: Sachtext → Aussagen I, II, III → Kombination A-E
export interface MedNatAufgabe {
  id: number;
  text: string;
  aussagen: [string, string, string];
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const medNatAufgaben: MedNatAufgabe[] = [
  {
    id: 1,
    text: "Die Niere filtert Blut und produziert Urin. Dabei werden Abfallprodukte aus dem Blut entfernt. Das antidiuretische Hormon (ADH) wird bei Wassermangel ausgeschüttet und bewirkt, dass die Sammelrohre der Niere mehr Wasser rückresorbieren. Dadurch wird der Urin konzentrierter und das Blutvolumen steigt. Bei Überhydratation wird weniger ADH freigesetzt.",
    aussagen: [
      "Bei starkem Schwitzen wird mehr ADH ausgeschüttet.",
      "Unter ADH-Einfluss wird mehr verdünnter Urin produziert.",
      "Alkohol hemmt die ADH-Ausschüttung, was zu vermehrtem Harndrang führt.",
    ],
    options: [
      "Nur I ist richtig",
      "Nur II ist richtig",
      "Nur I und III sind richtig",
      "Nur II und III sind richtig",
      "Alle sind richtig",
    ],
    correctIndex: 2,
    explanation:
      "I: Schwitzen → Wasserverlust → mehr ADH → richtig. II: ADH bewirkt konzentrierteren (nicht verdünnteren) Urin → falsch. III: Weniger ADH → weniger Rückresorption → mehr Urin → richtig. Also I und III.",
  },
  {
    id: 2,
    text: "Hämoglobin ist ein eisenhaltiges Protein in roten Blutkörperchen, das Sauerstoff (O₂) bindet. Die Bindung von O₂ an Hämoglobin wird durch den pH-Wert beeinflusst: Bei niedrigerem pH-Wert (saureres Milieu) gibt Hämoglobin leichter Sauerstoff ab (Bohr-Effekt). In stoffwechselaktiven Geweben entsteht vermehrt CO₂, welches den pH-Wert senkt.",
    aussagen: [
      "In stoffwechselaktiven Geweben wird mehr Sauerstoff vom Hämoglobin abgegeben.",
      "Hyperventilation (vermehrtes CO₂-Abatmen) führt zu einem höheren pH-Wert im Blut.",
      "Ein vollständiger Verlust von Eisen im Hämoglobin hätte keinen Einfluss auf den Sauerstofftransport.",
    ],
    options: [
      "Nur I ist richtig",
      "Nur I und II sind richtig",
      "Nur I und III sind richtig",
      "Nur II und III sind richtig",
      "Alle sind richtig",
    ],
    correctIndex: 1,
    explanation:
      "I: Mehr CO₂ → niedrigerer pH → mehr O₂-Abgabe (Bohr-Effekt) → richtig. II: Weniger CO₂ → pH steigt → richtig. III: Eisen ist essentiell für O₂-Bindung → Verlust hätte massiven Einfluss → falsch. Also I und II.",
  },
  {
    id: 3,
    text: "Pflanzen nehmen über ihre Wurzeln Wasser auf, das durch den Spross in die Blätter transportiert wird. Dort verdunstet Wasser durch die Spaltöffnungen (Transpiration). Dieser Wasserverlust erzeugt einen Sog, der weiteres Wasser aus den Wurzeln nachzieht (Transpirationssog). Bei Trockenheit schliessen Pflanzen ihre Spaltöffnungen, um Wasserverlust zu minimieren.",
    aussagen: [
      "Bei geschlossenen Spaltöffnungen kann die Pflanze kein CO₂ für die Photosynthese aufnehmen.",
      "An einem heissen, trockenen Tag ist der Transpirationssog grundsätzlich stärker als an einem kühlen, feuchten Tag.",
      "Bei geschlossenen Spaltöffnungen wird der Transpirationssog reduziert.",
    ],
    options: [
      "Nur I ist richtig",
      "Nur III ist richtig",
      "Nur I und III sind richtig",
      "Nur II und III sind richtig",
      "Alle sind richtig",
    ],
    correctIndex: 2,
    explanation:
      "I: Spaltöffnungen sind der Hauptweg für CO₂-Aufnahme → geschlossen = kein CO₂ → richtig. II: Heiss und trocken → Spaltöffnungen schliessen → weniger Transpiration → weniger Sog → falsch (die Schliessung dominiert). III: Weniger Transpiration = weniger Sog → richtig. Also I und III.",
  },
  {
    id: 4,
    text: "Enzyme sind biologische Katalysatoren mit einem aktiven Zentrum, an das spezifische Substrate binden (Schlüssel-Schloss-Prinzip). Die Enzymaktivität hängt von der Temperatur ab: Sie steigt zunächst mit der Temperatur, erreicht ein Optimum und fällt dann steil ab, weil das Enzym bei hohen Temperaturen denaturiert (seine dreidimensionale Struktur verliert).",
    aussagen: [
      "Ein denaturiertes Enzym kann durch Abkühlung immer wieder seine Funktion zurückgewinnen.",
      "Bei 0°C findet keine Enzymreaktion statt.",
      "Kompetitive Inhibitoren blockieren das aktive Zentrum, indem sie die Substratform imitieren.",
    ],
    options: [
      "Nur III ist richtig",
      "Nur I ist richtig",
      "Nur I und III sind richtig",
      "Nur II und III sind richtig",
      "Alle sind richtig",
    ],
    correctIndex: 0,
    explanation:
      "I: Denaturierung ist oft irreversibel → falsch (Text sagt 'Struktur verliert'). II: Bei 0°C sind Reaktionen nur verlangsamt, nicht gestoppt → falsch. III: Kompetitive Inhibition durch Strukturähnlichkeit mit dem Substrat → folgt logisch aus dem Schlüssel-Schloss-Prinzip → richtig. Also nur III.",
  },
  {
    id: 5,
    text: "Hormone sind chemische Botenstoffe, die von Drüsen produziert und über das Blut transportiert werden. Insulin wird von der Bauchspeicheldrüse produziert und senkt den Blutzuckerspiegel, indem es die Aufnahme von Glukose in Muskel- und Fettzellen fördert. Glucagon ist der Gegenspieler von Insulin: Es wird bei niedrigem Blutzucker freigesetzt und stimuliert den Abbau von Glykogen in der Leber zu Glukose.",
    aussagen: [
      "Nach einer kohlenhydratreichen Mahlzeit wird vermehrt Insulin ausgeschüttet.",
      "Bei längerem Fasten wird vermehrt Glucagon freigesetzt.",
      "Wenn sowohl Insulin als auch Glucagon gleichzeitig in gleicher Stärke wirken, bleibt der Blutzucker konstant.",
    ],
    options: [
      "Nur I ist richtig",
      "Nur I und II sind richtig",
      "Nur II und III sind richtig",
      "Nur I und III sind richtig",
      "Alle sind richtig",
    ],
    correctIndex: 4,
    explanation:
      "I: Kohlenhydrate → hoher Blutzucker → mehr Insulin → richtig. II: Fasten → niedriger Blutzucker → mehr Glucagon → richtig. III: Gegenspieler in Gleichgewicht → Netto-Effekt neutral → Blutzucker stabil → richtig. Alle sind richtig.",
  },
];

// --- Quantitative und formale Probleme ---
// Format: Textaufgabe mit 5 Antwortmöglichkeiten (A-E)
export const quantitativeAufgaben: QuizQuestion[] = [
  {
    question:
      "In einer Arztpraxis werden pro Woche 120 Patienten behandelt. 35% der Patienten kommen wegen Atemwegserkrankungen, 25% wegen Rückenbeschwerden und der Rest wegen anderer Beschwerden. Wie viele Patienten kommen wegen anderer Beschwerden pro Monat (4 Wochen)?",
    options: ["48", "192", "168", "240", "144"],
    correctIndex: 1,
    explanation:
      "Andere Beschwerden: 100% − 35% − 25% = 40%. Pro Woche: 120 × 0.40 = 48 Patienten. Pro Monat: 48 × 4 = 192.",
  },
  {
    question:
      "Eine Infusionslösung enthält 0.9% NaCl (Kochsalz). Wie viel Gramm NaCl sind in 2.5 Litern dieser Lösung enthalten?",
    options: ["2.25 g", "9 g", "22.5 g", "225 g", "0.225 g"],
    correctIndex: 2,
    explanation:
      "0.9% bedeutet 0.9 g pro 100 ml. In 2500 ml: (0.9 × 2500) / 100 = 22.5 g NaCl.",
  },
  {
    question:
      "Ein Medikament hat eine Halbwertszeit von 6 Stunden. Ein Patient nimmt um 08:00 Uhr eine Dosis von 400 mg ein. Wie viel mg des Medikaments sind um 20:00 Uhr noch im Körper?",
    options: ["200 mg", "100 mg", "50 mg", "150 mg", "25 mg"],
    correctIndex: 1,
    explanation:
      "Von 08:00 bis 20:00 = 12 Stunden = 2 Halbwertszeiten. Nach 1. HWZ (14:00): 400 ÷ 2 = 200 mg. Nach 2. HWZ (20:00): 200 ÷ 2 = 100 mg.",
  },
  {
    question:
      "Drei Ärzte untersuchen zusammen 90 Patienten pro Tag. Arzt A untersucht doppelt so viele wie Arzt B. Arzt C untersucht halb so viele wie Arzt B. Wie viele Patienten untersucht Arzt A pro Tag?",
    options: ["45", "60", "30", "51.4", "36"],
    correctIndex: 0,
    explanation:
      "Sei B = x. Dann A = 2x, C = x/2. Total: 2x + x + x/2 = 90 → 3.5x = 90 → x ≈ 25.7... Exakt: x = 180/7. Hmm, nochmal: 2x + x + 0.5x = 3.5x = 90 → x = 25.71. A = 51.4? Nein, schauen wir: B = x, A = 2x, C = 0.5x → 3.5x = 90 → x = 25.71 → A = 51.43. Warte – die Aufgabe stimmt nicht ganz. Korrektur: Sei B = 2y, A = 4y, C = y → 7y = 90 → y ≈ 12.86. Besser: B=x, A=2x, C=x/2: 3.5x=90, x=180/7≈25.7. A≈51.4. Also Antwort D. Korrektur: korrekt ist Index 3.",
  },
  {
    question:
      "Ein Spital hat 240 Betten. Die durchschnittliche Belegungsrate beträgt 85%. Jeder Patient bleibt im Durchschnitt 5 Tage. Wie viele Patienten werden pro Monat (30 Tage) aufgenommen?",
    options: ["1224", "1020", "1440", "816", "1200"],
    correctIndex: 0,
    explanation:
      "Belegte Betten: 240 × 0.85 = 204. Pro Monat bei 5 Tagen Aufenthalt: 204 × (30/5) = 204 × 6 = 1224 Patienten.",
  },
  {
    question:
      "Eine Bakterienkultur verdoppelt sich alle 20 Minuten. Zu Beginn sind 500 Bakterien vorhanden. Wie viele Bakterien sind nach 2 Stunden vorhanden?",
    options: ["16'000", "32'000", "64'000", "8'000", "128'000"],
    correctIndex: 1,
    explanation:
      "2 Stunden = 120 Min. Anzahl Verdopplungen: 120 ÷ 20 = 6. Nach 6 Verdopplungen: 500 × 2⁶ = 500 × 64 = 32'000.",
  },
];

// --- Textverständnis ---
// Format: Wissenschaftlicher Text + 4 Fragen
export const textverstaendnisText = `Die menschliche Leber ist das grösste innere Organ und erfüllt über 500 verschiedene Funktionen. Sie wiegt bei Erwachsenen zwischen 1.4 und 1.8 Kilogramm und erhält eine duale Blutversorgung: etwa 75% des Blutes kommen über die Pfortader aus dem Magen-Darm-Trakt, die restlichen 25% über die Leberarterie.

Eine der wichtigsten Funktionen der Leber ist die Biotransformation – die Umwandlung körperfremder Stoffe (Xenobiotika) in wasserlösliche Formen, die über die Nieren ausgeschieden werden können. Dieser Prozess läuft in zwei Phasen ab: In Phase I werden die Substanzen durch Enzyme der Cytochrom-P450-Familie chemisch verändert (z.B. oxidiert). In Phase II werden die Produkte mit wasserlöslichen Molekülen konjugiert, was ihre Ausscheidung erleichtert.

Bemerkenswert ist die Regenerationsfähigkeit der Leber. Selbst nach Entfernung von bis zu 70% des Lebergewebes kann das Organ innerhalb weniger Wochen seine ursprüngliche Grösse wieder erreichen. Diese Regeneration wird durch Wachstumsfaktoren wie den Hepatocyte Growth Factor (HGF) gesteuert. Allerdings kann chronische Schädigung – etwa durch dauerhaften Alkoholkonsum – zu Fibrose führen, bei der funktionstüchtiges Lebergewebe durch Narbengewebe ersetzt wird. Im Endstadium spricht man von Leberzirrhose, die irreversibel ist und die Regenerationsfähigkeit aufhebt.

Die Leber spielt auch eine zentrale Rolle im Stoffwechsel. Sie reguliert den Blutzuckerspiegel, indem sie Glukose als Glykogen speichert und bei Bedarf wieder freisetzt. Zudem produziert sie Gallenflüssigkeit, die für die Fettverdauung essentiell ist, und synthetisiert wichtige Blutproteine wie Albumin und Gerinnungsfaktoren.`;

export const textverstaendnisAufgaben: QuizQuestion[] = [
  {
    question:
      "Welche Aussage zur Blutversorgung der Leber ist gemäss dem Text korrekt?",
    options: [
      "Die Leber erhält ihr gesamtes Blut über die Leberarterie.",
      "Der grössere Anteil des Blutes erreicht die Leber über die Pfortader aus dem Verdauungstrakt.",
      "Die Pfortader liefert sauerstoffreiches Blut aus der Lunge.",
      "Die Leberarterie transportiert 75% des Blutes zur Leber.",
      "Die Leber hat keine direkte arterielle Blutversorgung.",
    ],
    correctIndex: 1,
    explanation:
      "Laut Text kommen etwa 75% des Blutes über die Pfortader aus dem Magen-Darm-Trakt.",
  },
  {
    question:
      "Was geschieht laut Text in Phase II der Biotransformation?",
    options: [
      "Substanzen werden durch Cytochrom-P450-Enzyme oxidiert.",
      "Xenobiotika werden direkt über die Nieren ausgeschieden.",
      "Die Produkte aus Phase I werden mit wasserlöslichen Molekülen konjugiert.",
      "Körperfremde Stoffe werden in fettlösliche Formen umgewandelt.",
      "Die Gallenflüssigkeit wird produziert.",
    ],
    correctIndex: 2,
    explanation:
      "Der Text beschreibt Phase II als Konjugation der Phase-I-Produkte mit wasserlöslichen Molekülen zur erleichterten Ausscheidung.",
  },
  {
    question:
      "Welche Schlussfolgerung lässt sich aus dem Text bezüglich der Leberregeneration ziehen?",
    options: [
      "Die Leber kann sich unter allen Umständen vollständig regenerieren.",
      "Chronische Schädigung kann die Regenerationsfähigkeit der Leber dauerhaft aufheben.",
      "Die Regeneration wird ausschliesslich durch Alkoholkonsum stimuliert.",
      "Fibrose ist eine reversible Vorstufe der Regeneration.",
      "HGF verhindert die Regeneration der Leber.",
    ],
    correctIndex: 1,
    explanation:
      "Der Text erklärt, dass chronische Schädigung zu Leberzirrhose führt, die irreversibel ist und die Regenerationsfähigkeit aufhebt.",
  },
  {
    question:
      "Welche der folgenden Funktionen wird der Leber im Text NICHT zugeschrieben?",
    options: [
      "Regulation des Blutzuckerspiegels",
      "Produktion von Gallenflüssigkeit",
      "Synthese von Gerinnungsfaktoren",
      "Produktion roter Blutkörperchen",
      "Biotransformation körperfremder Stoffe",
    ],
    correctIndex: 3,
    explanation:
      "Die Produktion roter Blutkörperchen (Erythropoese) wird im Text nicht als Leberfunktion genannt. Alle anderen Optionen werden explizit erwähnt.",
  },
];

// --- Fakten lernen ---
// Format: 15 Patienten in 5 Altersgruppen (je 3), danach Abruffragen
export interface Patient {
  vorname: string;
  nachname: string;
  geschlecht: "m" | "w";
  alter: number;
  beruf: string;
  diagnose: string;
}

export interface Altersgruppe {
  label: string;
  altersbereich: string;
  patienten: Patient[];
}

export const faktenLernenDaten: Altersgruppe[] = [
  {
    label: "Gruppe 1",
    altersbereich: "20–29 Jahre",
    patienten: [
      { vorname: "Lina", nachname: "Berger", geschlecht: "w", alter: 23, beruf: "Studentin", diagnose: "Migräne" },
      { vorname: "Marco", nachname: "Roth", geschlecht: "m", alter: 27, beruf: "Elektriker", diagnose: "Asthma" },
      { vorname: "Sara", nachname: "Wenger", geschlecht: "w", alter: 25, beruf: "Pflegefachfrau", diagnose: "Eisenmangel" },
    ],
  },
  {
    label: "Gruppe 2",
    altersbereich: "30–39 Jahre",
    patienten: [
      { vorname: "Thomas", nachname: "Keller", geschlecht: "m", alter: 34, beruf: "Koch", diagnose: "Gastritis" },
      { vorname: "Nina", nachname: "Huber", geschlecht: "w", alter: 31, beruf: "Lehrerin", diagnose: "Rückenschmerzen" },
      { vorname: "David", nachname: "Meier", geschlecht: "m", alter: 38, beruf: "Informatiker", diagnose: "Schlafapnoe" },
    ],
  },
  {
    label: "Gruppe 3",
    altersbereich: "40–49 Jahre",
    patienten: [
      { vorname: "Claudia", nachname: "Frei", geschlecht: "w", alter: 45, beruf: "Apothekerin", diagnose: "Hypertonie" },
      { vorname: "Peter", nachname: "Brunner", geschlecht: "m", alter: 42, beruf: "Schreiner", diagnose: "Diabetes Typ 2" },
      { vorname: "Andrea", nachname: "Schmid", geschlecht: "w", alter: 48, beruf: "Journalistin", diagnose: "Schilddrüsenunterfunktion" },
    ],
  },
  {
    label: "Gruppe 4",
    altersbereich: "50–59 Jahre",
    patienten: [
      { vorname: "Hans", nachname: "Zimmermann", geschlecht: "m", alter: 55, beruf: "Polizist", diagnose: "Arthrose" },
      { vorname: "Elisabeth", nachname: "Steiner", geschlecht: "w", alter: 52, beruf: "Buchhalterin", diagnose: "Depression" },
      { vorname: "Kurt", nachname: "Fischer", geschlecht: "m", alter: 58, beruf: "Bauer", diagnose: "COPD" },
    ],
  },
  {
    label: "Gruppe 5",
    altersbereich: "60–69 Jahre",
    patienten: [
      { vorname: "Margrit", nachname: "Baumann", geschlecht: "w", alter: 63, beruf: "Rentnerin", diagnose: "Osteoporose" },
      { vorname: "Werner", nachname: "Müller", geschlecht: "m", alter: 67, beruf: "Rentner", diagnose: "Herzinsuffizienz" },
      { vorname: "Ruth", nachname: "Hofmann", geschlecht: "w", alter: 61, beruf: "Bibliothekarin", diagnose: "Glaukom" },
    ],
  },
];

// Konstellationsfragen (ab 2021 neues Format)
export const faktenLernenAufgaben: QuizQuestion[] = [
  {
    question:
      "Welchen Beruf hat die jüngste Frau mit einer Diagnose, die mit dem Buchstaben 'E' beginnt?",
    options: ["Studentin", "Pflegefachfrau", "Lehrerin", "Apothekerin", "Buchhalterin"],
    correctIndex: 1,
    explanation:
      "Diagnose mit 'E': Eisenmangel → Sara Wenger, 25, Pflegefachfrau. Sie ist die einzige (und damit jüngste) Frau mit einer 'E'-Diagnose.",
  },
  {
    question:
      "Wie alt ist der Mann mit der Diagnose, die ein Atemwegsleiden beschreibt, in der Altersgruppe 50–59?",
    options: ["55", "52", "58", "50", "56"],
    correctIndex: 2,
    explanation:
      "Atemwegsleiden in Gruppe 50–59: COPD → Kurt Fischer, 58 Jahre alt.",
  },
  {
    question:
      "Welche Diagnose hat die älteste Frau aller Gruppen?",
    options: ["Osteoporose", "Glaukom", "Depression", "Schilddrüsenunterfunktion", "Hypertonie"],
    correctIndex: 0,
    explanation:
      "Älteste Frau: Margrit Baumann, 63 Jahre → Diagnose: Osteoporose.",
  },
  {
    question:
      "Welchen Nachnamen hat der jüngste männliche Patient mit einem handwerklichen Beruf?",
    options: ["Roth", "Brunner", "Keller", "Fischer", "Zimmermann"],
    correctIndex: 0,
    explanation:
      "Handwerkliche Berufe bei Männern: Elektriker (Marco Roth, 27), Koch (Thomas Keller, 34), Schreiner (Peter Brunner, 42), Bauer (Kurt Fischer, 58). Jüngster: Marco Roth, 27.",
  },
  {
    question:
      "Wie viele Patienten haben eine Diagnose, die den Bewegungsapparat betrifft (Rückenschmerzen, Arthrose, Osteoporose)?",
    options: ["2", "3", "4", "5", "1"],
    correctIndex: 1,
    explanation:
      "Rückenschmerzen: Nina Huber. Arthrose: Hans Zimmermann. Osteoporose: Margrit Baumann. = 3 Patienten.",
  },
];

// --- Diagramme und Tabellen ---
// Format: Tabelle/Diagramm-Beschreibung + Fragen
export interface DiagrammAufgabe {
  id: number;
  titel: string;
  beschreibung: string;
  tabelleDaten?: {
    headers: string[];
    rows: string[][];
  };
  fragen: QuizQuestion[];
}

export const diagrammAufgaben: DiagrammAufgabe[] = [
  {
    id: 1,
    titel: "Nährstoffgehalt von Milchprodukten",
    beschreibung: "Die folgende Tabelle zeigt den Nährstoffgehalt pro 100 g verschiedener Milchprodukte.",
    tabelleDaten: {
      headers: ["Produkt", "Energie (kcal)", "Protein (g)", "Fett (g)", "Kalzium (mg)"],
      rows: [
        ["Vollmilch", "64", "3.3", "3.5", "120"],
        ["Magerquark", "67", "12.0", "0.3", "92"],
        ["Emmentaler", "382", "28.4", "29.7", "1020"],
        ["Joghurt natur", "61", "3.5", "3.2", "140"],
        ["Hüttenkäse", "98", "12.5", "4.3", "73"],
      ],
    },
    fragen: [
      {
        question: "Welches Produkt hat das beste Verhältnis von Protein zu Fett?",
        options: ["Vollmilch", "Magerquark", "Emmentaler", "Joghurt natur", "Hüttenkäse"],
        correctIndex: 1,
        explanation:
          "Protein/Fett-Verhältnis: Vollmilch 3.3/3.5=0.94, Magerquark 12.0/0.3=40.0, Emmentaler 28.4/29.7=0.96, Joghurt 3.5/3.2=1.09, Hüttenkäse 12.5/4.3=2.91. Magerquark hat mit 40:1 das mit Abstand beste Verhältnis.",
      },
      {
        question: "Wie viel Kalzium nimmt man auf, wenn man 250 ml Vollmilch und 50 g Emmentaler isst?",
        options: ["810 mg", "630 mg", "510 mg", "1140 mg", "420 mg"],
        correctIndex: 0,
        explanation:
          "Vollmilch (250 ml ≈ 250 g): 120 mg × 2.5 = 300 mg. Emmentaler (50 g): 1020 mg × 0.5 = 510 mg. Total: 300 + 510 = 810 mg.",
      },
    ],
  },
  {
    id: 2,
    titel: "Blutdruckwerte nach Altersgruppen",
    beschreibung: "Die Tabelle zeigt durchschnittliche systolische und diastolische Blutdruckwerte (in mmHg) nach Altersgruppen in einer Studie mit 2000 Teilnehmenden.",
    tabelleDaten: {
      headers: ["Altersgruppe", "n", "Systolisch (mmHg)", "Diastolisch (mmHg)", "Hypertonie-Anteil (%)"],
      rows: [
        ["20–29", "400", "118", "74", "8"],
        ["30–39", "450", "122", "78", "14"],
        ["40–49", "420", "130", "82", "24"],
        ["50–59", "380", "138", "86", "38"],
        ["60–69", "350", "148", "84", "52"],
      ],
    },
    fragen: [
      {
        question: "Wie viele Personen in der Altersgruppe 50–59 leiden an Hypertonie?",
        options: ["38", "144.4", "380", "76", "190"],
        correctIndex: 1,
        explanation:
          "Gruppe 50–59: n = 380, Hypertonie-Anteil = 38%. Betroffene: 380 × 0.38 = 144.4 ≈ 144 Personen.",
      },
      {
        question: "Welche Aussage ist anhand der Daten NICHT korrekt?",
        options: [
          "Der systolische Blutdruck steigt mit zunehmendem Alter.",
          "Der diastolische Blutdruck steigt kontinuierlich mit dem Alter.",
          "Der Hypertonie-Anteil verdoppelt sich ungefähr alle 10 Jahre.",
          "Die grösste Gruppe ist die der 30–39-Jährigen.",
          "Über die Hälfte der 60–69-Jährigen hat Hypertonie.",
        ],
        correctIndex: 1,
        explanation:
          "Der diastolische Wert steigt von 74→78→82→86, fällt dann aber auf 84 bei 60–69. Er steigt also NICHT kontinuierlich – das ist die falsche Aussage.",
      },
    ],
  },
  {
    id: 3,
    titel: "Medikamentenwirksamkeit",
    beschreibung: "In einer klinischen Studie wurden drei Schmerzmittel verglichen. Gemessen wurde die durchschnittliche Schmerzreduktion (Skala 0–10) nach 1, 2 und 4 Stunden.",
    tabelleDaten: {
      headers: ["Medikament", "Nach 1h", "Nach 2h", "Nach 4h", "Nebenwirkungen (%)"],
      rows: [
        ["Analgin A", "2.1", "4.5", "3.8", "12"],
        ["Analgin B", "1.4", "3.2", "4.1", "8"],
        ["Analgin C", "3.5", "4.8", "2.1", "22"],
      ],
    },
    fragen: [
      {
        question: "Welches Medikament hat die höchste Schmerzreduktion zum Zeitpunkt der maximalen Wirkung?",
        options: [
          "Analgin A (4.5 nach 2h)",
          "Analgin B (4.1 nach 4h)",
          "Analgin C (4.8 nach 2h)",
          "Alle gleich wirksam",
          "Analgin C (3.5 nach 1h)",
        ],
        correctIndex: 2,
        explanation:
          "Maximale Wirkung: A=4.5, B=4.1, C=4.8. Analgin C erreicht mit 4.8 die höchste Schmerzreduktion (nach 2h).",
      },
      {
        question: "Ein Patient braucht eine langanhaltende Schmerzlinderung bei möglichst wenig Nebenwirkungen. Welches Medikament ist am geeignetsten?",
        options: ["Analgin A", "Analgin B", "Analgin C", "Keines der drei", "A und C gleichermassen"],
        correctIndex: 1,
        explanation:
          "Analgin B hat die beste Langzeitwirkung (4.1 nach 4h, steigend!) und die geringsten Nebenwirkungen (8%). A fällt nach 2h ab, C fällt stark ab und hat 22% Nebenwirkungen.",
      },
    ],
  },
];

// --- Muster zuordnen (beschreibende Aufgaben, da visuell) ---
export const musterZuordnenInfo = {
  beschreibung:
    "Der Untertest 'Muster zuordnen' arbeitet mit visuellen Mustern, die in einem digitalen Format schwer abzubilden sind. Im EMS siehst du ein Zielmuster und musst das identische Muster in einer Sammlung wiederfinden. Die Muster ähneln histologischen Bildern.",
  uebungstipps: [
    "Übe mit den offiziellen Beispielaufgaben von swissuniversities (PDF kostenlos verfügbar)",
    "Suche nach dem auffälligsten Merkmal im Zielmuster als 'Anker'",
    "Gehe systematisch vor: oben links → unten rechts",
    "Trainiere mit 'Finde den Unterschied'-Rätseln und Wimmelbildern",
    "Nutze histologische Bilder aus dem Internet zum Vergleichstraining",
  ],
};

// --- Objekte im Raum (beschreibend) ---
export const objekteImRaumInfo = {
  beschreibung:
    "Seit 2025 zeigt der Untertest 'Objekte im Raum' einen transparenten Würfel mit 3D-Objekten. Der Würfel wird zweimal um 90° gedreht. Du musst die richtige Ansicht nach den Drehungen identifizieren.",
  uebungstipps: [
    "Bastele einen transparenten Würfel mit Objekten und übe physische Drehungen",
    "Nutze die Ankerobjekt-Technik: Verfolge nur 1 markantes Objekt",
    "Übe alle 6 möglichen 90°-Drehungen einzeln (2 pro Achse)",
    "EMS Coaches und MedGurus bieten spezifische Übungsmaterialien an",
    "Steigere die Geschwindigkeit schrittweise — Ziel ist 33 Sekunden pro Aufgabe",
  ],
};

// --- Figuren lernen (beschreibend + Quiz) ---
export const figurenLernenInfo = {
  beschreibung:
    "Bei 'Figuren lernen' siehst du 18 abstrakte Figuren (je 5 Felder, eines schwarz). Du hast 4 Min. zum Einprägen. Nach ca. 45 Min. musst du das schwarze Feld wiedererkennen.",
  strategieQuiz: [
    {
      question:
        "Du siehst eine abstrakte Figur, die wie ein 'L' aussieht, mit dem schwarzen Feld oben rechts. Welche Mnemotechnik ist am effektivsten?",
      options: [
        "Die Figur 10x anschauen (visuelles Repetieren)",
        "Dir vorstellen, dass ein Vogel (L-Form) einen schwarzen Hut trägt (oben rechts), und ihn auf deinem Loci-Weg auf dem Briefkasten platzieren",
        "Die Position als 'oben rechts' aufschreiben",
        "Die Figur abzeichnen",
        "Nur die Farbe merken",
      ],
      correctIndex: 1,
      explanation:
        "Die Kombination aus Formassoziation (L = Vogel), Positionsverknüpfung (schwarzer Hut = oben rechts) und Loci-Methode (Briefkasten) nutzt drei Gedächtnissysteme gleichzeitig.",
    },
  ] as QuizQuestion[],
};

// --- Konzentration (beschreibend + Quiz) ---
export const konzentrationInfo = {
  beschreibung:
    "Beim Konzentrationstest markierst du in 8 Minuten Zielzeichen in 1600 Zeichen. Richtige Markierungen zählen, Fehler werden abgezogen.",
  strategieQuiz: [
    {
      question:
        "Im Konzentrationstest hast du nach 4 Minuten 900 Zeichen bearbeitet mit 3 Fehlern. Was ist deine beste Strategie für die verbleibenden 4 Minuten?",
      options: [
        "Tempo deutlich erhöhen, um alle 1600 Zeichen zu schaffen",
        "Gleichmässiges Tempo beibehalten — du bist auf gutem Kurs, Fehler vermeiden ist wichtiger",
        "Langsamer werden, um keine weiteren Fehler zu machen",
        "Aufhören und die bearbeiteten Zeichen kontrollieren",
        "Die letzten Zeichen zufällig markieren",
      ],
      correctIndex: 1,
      explanation:
        "Mit 900/4 Min. = 225 Zeichen/Min. wärst du bei 1800 Zeichen am Ende. Das ist ein sehr gutes Tempo. Gleichmässig weitermachen minimiert Fehler und maximiert das Nettoergebnis (richtige minus falsche).",
    },
  ] as QuizQuestion[],
};

// Korrektur für quantitative Aufgabe 4:
// Arzt A = 2x, B = x, C = x/2 → 3.5x = 90 → x ≈ 25.71 → A ≈ 51.43
// Ersetzen wir die Aufgabe mit einer saubereren Variante:
quantitativeAufgaben[3] = {
  question:
    "In einem Labor werden Blutproben analysiert. Montags werden 40% mehr Proben analysiert als an anderen Wochentagen. An normalen Tagen werden 50 Proben analysiert. Wie viele Proben werden in einer 5-Tage-Woche analysiert (Montag + 4 normale Tage)?",
  options: ["270", "250", "280", "300", "260"],
  correctIndex: 0,
  explanation:
    "Montag: 50 × 1.4 = 70 Proben. Dienstag–Freitag: 4 × 50 = 200 Proben. Total: 70 + 200 = 270 Proben.",
};
