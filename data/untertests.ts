export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Untertest {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  aufgaben: number;
  zeit: string;
  zeitProAufgabe: string;
  teil: "A" | "B";
  kompetenz: string;
  trainierbarkeit: number; // 1-4
  beschreibung: string;
  strategien: string[];
  tipps: string[];
  quizQuestions: QuizQuestion[];
}

export const untertests: Untertest[] = [
  {
    slug: "quantitative-probleme",
    title: "Quantitative & formale Probleme",
    icon: "🔢",
    shortDescription: "Mathematisch-logisches Denken mit Textaufgaben",
    aufgaben: 18,
    zeit: "50 Minuten",
    zeitProAufgabe: "~2:47 Min.",
    teil: "A",
    kompetenz: "Logisch-mathematisches Denken: Prozentrechnung, Dreisatz, Einheitenumrechnung, Wahrscheinlichkeit, Geometrie",
    trainierbarkeit: 3,
    beschreibung:
      "In diesem Untertest musst du mathematische Textaufgaben lösen. Die Aufgaben erfordern kein höheres Mathematikwissen, sondern testen deine Fähigkeit, Sachverhalte in mathematische Gleichungen zu übersetzen und unter Zeitdruck korrekt zu berechnen. Typisch sind Aufgaben zu Mischungsverhältnissen, Geschwindigkeiten, Konzentrationen und Proportionen.",
    strategien: [
      "Textaufgabe systematisch lesen und die gesuchte Grösse identifizieren",
      "Bekannte Werte herausschreiben, bevor du rechnest",
      "Einheiten konsequent mitführen — viele Fehler entstehen durch Einheitenverwechslungen",
      "Ausschlussverfahren nutzen: Oft kannst du 2-3 Antworten durch Überschlagen eliminieren",
      "Rückwärts rechnen: Antworten einsetzen und prüfen, ob die Aufgabe aufgeht",
    ],
    tipps: [
      "Übe täglich 5-10 Textaufgaben unter Zeitdruck",
      "Repetiere Bruchrechnen, Prozentrechnung und Dreisatz",
      "Lerne häufige Umrechnungen auswendig (z.B. km/h in m/s: ÷3.6)",
    ],
    quizQuestions: [
      {
        question:
          "Ein Medikament wird in einer Konzentration von 5 mg/ml verabreicht. Ein Patient benötigt 0.3 g des Wirkstoffs. Wie viel ml der Lösung müssen verabreicht werden?",
        options: ["15 ml", "30 ml", "60 ml", "150 ml", "6 ml"],
        correctIndex: 2,
        explanation:
          "0.3 g = 300 mg. Bei 5 mg/ml braucht man 300 ÷ 5 = 60 ml.",
      },
      {
        question:
          "In einem Spital sind 60% der Patienten weiblich. Von den weiblichen Patienten sind 25% über 70 Jahre alt, von den männlichen 40%. Wie viel Prozent aller Patienten sind über 70?",
        options: ["31%", "32.5%", "30%", "33%", "35%"],
        correctIndex: 0,
        explanation:
          "Weiblich über 70: 60% × 25% = 15%. Männlich über 70: 40% × 40% = 16%. Total: 15% + 16% = 31%.",
      },
      {
        question:
          "Ein Zug fährt um 08:15 in Zürich ab und erreicht Bern um 09:11. Die Strecke ist 120 km lang. Wie hoch ist die Durchschnittsgeschwindigkeit?",
        options: [
          "ca. 105 km/h",
          "ca. 120 km/h",
          "ca. 128 km/h",
          "ca. 135 km/h",
          "ca. 96 km/h",
        ],
        correctIndex: 2,
        explanation:
          "Fahrzeit: 56 Minuten = 56/60 Stunden ≈ 0.933 h. Geschwindigkeit: 120 ÷ 0.933 ≈ 128.6 km/h.",
      },
      {
        question:
          "Eine Lösung enthält Salz und Wasser im Verhältnis 1:9. Wenn man 50 ml Wasser zu 200 ml dieser Lösung hinzufügt, wie ist das neue Verhältnis von Salz zu Gesamtlösung?",
        options: ["1:12.5", "1:10", "1:11", "1:12", "1:9.5"],
        correctIndex: 0,
        explanation:
          "In 200 ml Lösung (1:9): 20 ml Salz, 180 ml Wasser. Nach Zugabe: 20 ml Salz, 230 ml Wasser. Gesamt: 250 ml. Verhältnis Salz:Gesamt = 20:250 = 1:12.5.",
      },
      {
        question:
          "Drei Pumpen füllen ein Becken in 4 Stunden. Wie lange brauchen 5 gleiche Pumpen für dasselbe Becken?",
        options: [
          "2 Std. 24 Min.",
          "2 Std. 30 Min.",
          "2 Std. 40 Min.",
          "3 Std.",
          "2 Std.",
        ],
        correctIndex: 0,
        explanation:
          "3 Pumpen × 4h = 12 Pumpen-Stunden. 5 Pumpen: 12 ÷ 5 = 2.4 h = 2 Std. 24 Min.",
      },
    ],
  },
  {
    slug: "textverstaendnis",
    title: "Textverständnis",
    icon: "📖",
    shortDescription: "Komplexe wissenschaftliche Texte analysieren",
    aufgaben: 18,
    zeit: "45 Minuten",
    zeitProAufgabe: "~2:30 Min.",
    teil: "B",
    kompetenz: "Lesesinnverständnis: Hauptaussagen erfassen, implizite Informationen erkennen, logische Schlussfolgerungen ziehen",
    trainierbarkeit: 2,
    beschreibung:
      "Du erhältst vier komplexe Texte aus verschiedenen Bereichen (Medizin, Biologie, Sozialwissenschaften, etc.) mit je 4-5 Fragen. Die Texte sind anspruchsvoll und lang. Du musst Hauptaussagen, Detailinformationen und logische Schlussfolgerungen aus den Texten ableiten. Der Schwierigkeitsgrad ist hoch — Textverständnis gilt als einer der anspruchsvollsten Untertests.",
    strategien: [
      "Zuerst die Fragen lesen, dann den Text — so weisst du, worauf du achten musst",
      "Beim Lesen Schlüsselwörter markieren und Absätze mental zusammenfassen",
      "Unterscheide klar zwischen dem, was im Text steht, und deinem Vorwissen",
      "Bei 'Was kann man aus dem Text schliessen?'-Fragen: Nur das, was logisch aus dem Text folgt",
      "Wenn du unsicher bist: Eliminiere klar falsche Antworten zuerst",
    ],
    tipps: [
      "Lies regelmässig anspruchsvolle Texte (NZZ Wissenschaft, Spektrum.de, Nature Reviews)",
      "Übe, nach dem Lesen die Kernaussagen in einem Satz zusammenzufassen",
      "Trainiere unter Zeitdruck — im EMS hast du nur ca. 10 Min. pro Text mit Fragen",
    ],
    quizQuestions: [
      {
        question:
          "Lies den folgenden Abschnitt: 'Die Blut-Hirn-Schranke schützt das Gehirn vor schädlichen Substanzen im Blut. Sie besteht aus Endothelzellen, die durch Tight Junctions eng verbunden sind. Nur kleine, lipophile Moleküle können diese Barriere passieren. Viele Medikamente können daher das Gehirn nicht erreichen.' — Welche Aussage lässt sich aus dem Text ableiten?",
        options: [
          "Grosse, wasserlösliche Medikamente können die Blut-Hirn-Schranke leicht überwinden",
          "Die Entwicklung von Medikamenten gegen Hirnerkrankungen ist durch die Blut-Hirn-Schranke erschwert",
          "Tight Junctions kommen nur im Gehirn vor",
          "Lipophile Substanzen werden vom Gehirn abgestossen",
          "Die Blut-Hirn-Schranke ist für alle Moleküle undurchlässig",
        ],
        correctIndex: 1,
        explanation:
          "Wenn viele Medikamente das Gehirn nicht erreichen können, ist die Entwicklung von Medikamenten gegen Hirnerkrankungen logisch erschwert. Die anderen Aussagen widersprechen dem Text oder gehen über ihn hinaus.",
      },
      {
        question:
          "Ein Text beschreibt, dass die Photosynthese-Rate bei steigenden Temperaturen zunächst ansteigt, ab 35°C jedoch drastisch abnimmt, da Enzyme denaturieren. Welche Schlussfolgerung ist korrekt?",
        options: [
          "Pflanzen wachsen bei 40°C am schnellsten",
          "Die Photosynthese ist temperaturunabhängig",
          "Es gibt eine optimale Temperatur für die Photosynthese, die unter 35°C liegt",
          "Enzyme funktionieren bei jeder Temperatur gleich gut",
          "Hohe Temperaturen verbessern immer die Photosynthese",
        ],
        correctIndex: 2,
        explanation:
          "Die Rate steigt erst an und fällt ab 35°C — das Optimum liegt also irgendwo unter 35°C. Die anderen Aussagen widersprechen den beschriebenen Fakten.",
      },
      {
        question:
          "Welche Lesestrategie ist für den EMS-Untertest Textverständnis am effektivsten?",
        options: [
          "Den Text dreimal durchlesen, bevor man die Fragen anschaut",
          "Zuerst die Fragen lesen, dann den Text gezielt nach Antworten durchsuchen",
          "Nur die Überschriften und den letzten Absatz lesen",
          "Alle unbekannten Wörter im Kopf übersetzen",
          "Jeden Satz einzeln auswendig lernen",
        ],
        correctIndex: 1,
        explanation:
          "Im EMS ist die Zeit knapp. Wer zuerst die Fragen kennt, kann den Text gezielt lesen und relevante Stellen schneller identifizieren.",
      },
    ],
  },
  {
    slug: "med-nat-grundverstaendnis",
    title: "Medizinisch-naturwiss. Grundverständnis",
    icon: "🔬",
    shortDescription: "Logisches Schlussfolgern bei naturwiss. Sachverhalten",
    aufgaben: 18,
    zeit: "50 Minuten",
    zeitProAufgabe: "~2:47 Min.",
    teil: "A",
    kompetenz: "Schlussfolgerndes Denken: Naturwissenschaftliche Sachverhalte aus dem Kontext verstehen, logische Ketten nachvollziehen",
    trainierbarkeit: 2,
    beschreibung:
      "In diesem Untertest werden dir kurze Texte zu naturwissenschaftlichen Themen vorgelegt. Du brauchst kein Vorwissen — alle Informationen stehen im Text. Die Aufgabe ist, logische Schlussfolgerungen aus dem Gelesenen zu ziehen. Es geht um das Verständnis von Ursache-Wirkung-Beziehungen, naturwissenschaftlichen Prinzipien und das Transferieren von Konzepten auf neue Situationen.",
    strategien: [
      "Lies den Text genau und identifiziere die beschriebene Ursache-Wirkung-Kette",
      "Achte auf Bedingungen: 'Wenn X, dann Y' — was passiert, wenn X sich ändert?",
      "Nutze kein Vorwissen, das dem Text widerspricht — nur der Text zählt",
      "Bei Transferfragen: Welches Prinzip wird beschrieben? Wende es auf die neue Situation an",
      "Zeichne dir bei komplexen Zusammenhängen ein kleines Schema",
    ],
    tipps: [
      "Übe mit populärwissenschaftlichen Texten und stelle dir selbst Transferfragen",
      "Trainiere logisches Denken: Wenn A → B und B → C, dann A → C",
      "Dieser Untertest ist schwer trainierbar — fokussiere dich auf andere Untertests mit höherem ROI",
    ],
    quizQuestions: [
      {
        question:
          "Ein Text erklärt: 'Insulin senkt den Blutzuckerspiegel, indem es die Aufnahme von Glukose in Muskel- und Fettzellen fördert. Bei Diabetes Typ 2 reagieren die Zellen nicht mehr ausreichend auf Insulin (Insulinresistenz).' Was passiert bei Insulinresistenz mit dem Blutzucker?",
        options: [
          "Er sinkt schneller als normal",
          "Er bleibt erhöht, weil die Zellen weniger Glukose aufnehmen",
          "Er wird nicht beeinflusst",
          "Er sinkt auf Null",
          "Er schwankt rhythmisch",
        ],
        correctIndex: 1,
        explanation:
          "Wenn Zellen nicht auf Insulin reagieren, nehmen sie weniger Glukose auf → der Blutzucker bleibt erhöht. Das ist die direkte logische Schlussfolgerung aus dem Text.",
      },
      {
        question:
          "Text: 'Osmose ist die Bewegung von Wasser durch eine semipermeable Membran vom Ort niedrigerer Teilchenkonzentration zum Ort höherer Teilchenkonzentration.' Was passiert, wenn man eine Zelle in eine stark salzhaltige Lösung legt?",
        options: [
          "Die Zelle nimmt Wasser auf und platzt",
          "Nichts verändert sich",
          "Wasser strömt aus der Zelle heraus, sie schrumpft",
          "Salz strömt in die Zelle",
          "Die Membran löst sich auf",
        ],
        correctIndex: 2,
        explanation:
          "Die Salzlösung aussen hat eine höhere Teilchenkonzentration. Wasser bewegt sich per Osmose nach aussen → die Zelle verliert Wasser und schrumpft.",
      },
      {
        question:
          "Text: 'Antibiotika wirken gegen Bakterien, nicht gegen Viren. Resistenzen entstehen, wenn Bakterien durch Mutation unempfindlich gegen ein Antibiotikum werden und sich vermehren.' Welche Massnahme verringert Resistenzbildung am ehesten?",
        options: [
          "Antibiotika bei jeder Erkältung einnehmen",
          "Antibiotika-Kuren vorzeitig abbrechen, wenn man sich besser fühlt",
          "Antibiotika nur bei bakteriellen Infektionen gezielt einsetzen und die Kur vollständig durchführen",
          "Möglichst viele verschiedene Antibiotika gleichzeitig nehmen",
          "Antibiotika prophylaktisch einnehmen",
        ],
        correctIndex: 2,
        explanation:
          "Gezielter Einsatz reduziert den Selektionsdruck; vollständige Kuren verhindern, dass teilresistente Bakterien überleben und sich vermehren.",
      },
      {
        question:
          "Ein naturwissenschaftlicher Text beschreibt, dass Enzyme substratspezifisch sind und durch das Schlüssel-Schloss-Prinzip funktionieren. Was folgt daraus für ein Enzym, dessen Struktur durch Hitze verändert wird?",
        options: [
          "Es arbeitet schneller",
          "Es kann sein spezifisches Substrat nicht mehr binden und verliert seine Funktion",
          "Es wird substratunspezifisch und kann alle Substrate binden",
          "Es wird durch Hitze aktiviert",
          "Es verändert das Substrat dauerhaft",
        ],
        correctIndex: 1,
        explanation:
          "Wenn das 'Schloss' (Enzym) seine Form verliert, passt der 'Schlüssel' (Substrat) nicht mehr → Funktionsverlust.",
      },
    ],
  },
  {
    slug: "objekte-im-raum",
    title: "Objekte im Raum",
    icon: "🧊",
    shortDescription: "Räumliches Vorstellungsvermögen (3D-Rotation)",
    aufgaben: 18,
    zeit: "10 Minuten",
    zeitProAufgabe: "~33 Sek.",
    teil: "A",
    kompetenz: "Räumliches Vorstellungsvermögen: 3D-Objekte nach zwei 90°-Drehungen mental rotieren und wiedererkennen",
    trainierbarkeit: 4,
    beschreibung:
      "Seit 2025 ersetzt dieser Untertest die bisherigen 'Schlauchfiguren'. Du siehst einen transparenten Würfel mit mehreren 3D-Objekten darin. Der Würfel wird zweimal um 90° gedreht. Du musst erkennen, welche Abbildung den korrekt gedrehten Würfel zeigt. Mit nur 33 Sekunden pro Aufgabe ist extremer Zeitdruck gegeben. Dieser Untertest lässt sich aber sehr gut trainieren.",
    strategien: [
      "Ankerobjekt-Technik: Wähle ein markantes Objekt im Würfel und verfolge nur dessen Position bei den Drehungen",
      "Ausschlussverfahren: Eliminiere Antworten, bei denen das Ankerobjekt falsch positioniert ist",
      "Drehachsen verstehen: Übe die 6 möglichen 90°-Drehungen (oben/unten, links/rechts, vorne/hinten) einzeln",
      "Ecken zählen: Merke dir, in welcher Ecke des Würfels sich Objekte befinden",
      "Nicht alle Objekte verfolgen — konzentriere dich auf 1-2 markante Objekte",
    ],
    tipps: [
      "Bastele einen echten Würfel mit Objekten und übe physische Drehungen",
      "Übe im Alltag: Drehe Gegenstände mental in deinem Kopf",
      "Starte mit einfachen Aufgaben und steigere langsam die Geschwindigkeit",
      "EMS Coaches bietet kostenlose Übungsaufgaben zu Objekte im Raum an",
    ],
    quizQuestions: [
      {
        question:
          "Was ist die effektivste Strategie für den Untertest 'Objekte im Raum'?",
        options: [
          "Alle Objekte im Würfel gleichzeitig verfolgen",
          "Die Ankerobjekt-Technik: Ein markantes Objekt wählen und nur dessen Position nach den Drehungen verfolgen",
          "Nur die Farben der Würfelflächen beachten",
          "Die Aufgaben in zufälliger Reihenfolge lösen",
          "Jede Aufgabe mindestens 2 Minuten lang analysieren",
        ],
        correctIndex: 1,
        explanation:
          "Die Ankerobjekt-Technik ist die bewährteste Strategie: Statt alle Objekte zu verfolgen, konzentrierst du dich auf eines und prüfst dessen Position nach den zwei 90°-Drehungen. Das spart Zeit und reduziert kognitive Belastung.",
      },
      {
        question:
          "Wie viele mögliche 90°-Drehungen eines Würfels gibt es um die drei Hauptachsen?",
        options: [
          "3 (eine pro Achse)",
          "6 (zwei Richtungen pro Achse: je nach links/rechts, oben/unten, vorne/hinten)",
          "12 (vier pro Achse)",
          "2 (nur links und rechts)",
          "9 (drei pro Achse)",
        ],
        correctIndex: 1,
        explanation:
          "Ein Würfel hat 3 Drehachsen. Pro Achse gibt es zwei Drehrichtungen (z.B. im und gegen den Uhrzeigersinn), also 6 mögliche 90°-Drehungen.",
      },
      {
        question:
          "Warum wurde 'Schlauchfiguren' ab 2025 durch 'Objekte im Raum' ersetzt?",
        options: [
          "Schlauchfiguren waren zu einfach",
          "Objekte im Raum prüft das räumliche Vorstellungsvermögen in komplexerer und anspruchsvollerer Form",
          "Es gab rechtliche Probleme mit dem alten Test",
          "Schlauchfiguren konnten nicht am Computer gelöst werden",
          "Der alte Test war nicht mehr zeitgemäss",
        ],
        correctIndex: 1,
        explanation:
          "Laut dem ZTD und swissuniversities prüft 'Objekte im Raum' das räumliche Vorstellungsvermögen in einer komplexeren Form, da zwei aufeinanderfolgende 90°-Drehungen nachvollzogen werden müssen statt nur einer Perspektivenänderung.",
      },
    ],
  },
  {
    slug: "figuren-lernen",
    title: "Figuren lernen",
    icon: "🧩",
    shortDescription: "Visuelles Gedächtnis für abstrakte Figuren",
    aufgaben: 18,
    zeit: "Einprägen: 4 Min. / Abruf: 5 Min.",
    zeitProAufgabe: "Einprägen: ~12 Sek. / Abruf: ~17 Sek.",
    teil: "A",
    kompetenz: "Visuelles Kurzzeit- und Langzeitgedächtnis: Abstrakte Formen einprägen und nach 45+ Minuten wiedererkennen",
    trainierbarkeit: 4,
    beschreibung:
      "Du siehst 18 abstrakte Figuren, die aus je 5 Feldern bestehen. In jeder Figur ist ein Feld schwarz eingefärbt. Du hast 4 Minuten, um dir alle einzuprägen. Danach folgen andere Untertests (ca. 45 Minuten Pause), bevor du in der Reproduktionsphase angeben musst, welches Feld schwarz war. Figuren lernen gilt als einer der schwierigsten Untertests — ist aber sehr gut trainierbar.",
    strategien: [
      "Visualisierung: Verwandle jede abstrakte Figur in ein konkretes Bild (Tier, Gegenstand, Buchstabe)",
      "Fokus-Strategie: Konzentriere dich entweder auf die schwarze Fläche ODER die Gesamtform",
      "Loci-Methode: Verknüpfe jede Figur mit einem Ort auf deiner mentalen Route",
      "Geschichten bilden: Verbinde mehrere Figuren zu einer zusammenhängenden Geschichte",
      "Skurrile Bilder merken sich am besten — je verrückter, desto einprägsamer",
    ],
    tipps: [
      "Trainiere alle 1-2 Tage (nicht täglich, um Verwechslungen zu vermeiden)",
      "Starte mit 10 Figuren und steigere auf 18-20",
      "Übe die Einprägephase mit Timer und simuliere die 45-minütige Pause",
      "Tausche dich mit anderen aus — verschiedene Assoziationen inspirieren",
    ],
    quizQuestions: [
      {
        question:
          "Welche Mnemotechnik ist für 'Figuren lernen' am effektivsten?",
        options: [
          "Die Figuren einfach so oft wie möglich anschauen (Repetition)",
          "Jede Figur in ein konkretes Bild umwandeln und mit der Loci-Methode an Orten platzieren",
          "Die Figuren abschreiben",
          "Sich nur die Nummern der schwarzen Felder merken",
          "Alle Figuren als eine grosse Figur zusammenfassen",
        ],
        correctIndex: 1,
        explanation:
          "Unser Gehirn merkt sich konkrete Bilder und Orte viel besser als abstrakte Formen. Die Kombination aus Visualisierung und Loci-Methode ist die bewährteste Technik.",
      },
      {
        question:
          "Wie lang ist die Pause zwischen Einprägephase und Abrufphase beim Untertest 'Figuren lernen'?",
        options: [
          "5 Minuten",
          "15 Minuten",
          "Ca. 45 Minuten (andere Untertests dazwischen)",
          "2 Stunden",
          "Es gibt keine Pause",
        ],
        correctIndex: 2,
        explanation:
          "Zwischen Einprägen und Abruf liegen ca. 45 Minuten, in denen du andere Untertests bearbeitest. Daher ist Langzeitgedächtnis-Training entscheidend.",
      },
      {
        question:
          "Warum sollte man beim Figuren-Lernen-Training Pausen von 1-2 Tagen einlegen?",
        options: [
          "Damit man nicht müde wird",
          "Um Verwechslungen mit den Figuren vom Vortag zu vermeiden",
          "Weil der Test nur alle 2 Tage geübt werden darf",
          "Damit die Bücher nicht abgenutzt werden",
          "Pausen sind unnötig — tägliches Training ist besser",
        ],
        correctIndex: 1,
        explanation:
          "Wenn du jeden Tag neue Figuren lernst, überlappen sich die Erinnerungen und du verwechselst alte mit neuen Figuren. 1-2 Tage Pause ermöglichen dem Gehirn, die Erinnerungen zu konsolidieren.",
      },
    ],
  },
  {
    slug: "fakten-lernen",
    title: "Fakten lernen",
    icon: "🗂️",
    shortDescription: "Patientendaten einprägen und abrufen",
    aufgaben: 18,
    zeit: "Einprägen: 6 Min. / Abruf: 7 Min.",
    zeitProAufgabe: "Einprägen: ~24 Sek. pro Patient / Abruf: ~23 Sek.",
    teil: "A",
    kompetenz: "Merkfähigkeit für vernetzte Informationen: Patientendaten (Name, Alter, Geschlecht, Beruf, Diagnose) einprägen und verknüpfen",
    trainierbarkeit: 4,
    beschreibung:
      "Du erhältst eine Tabelle mit 15 fiktiven Patienten in 5 Altersgruppen (je 3 Patienten). Pro Patient musst du dir 6 Fakten merken: Vorname, Nachname, Geschlecht, Alter, Beruf, Diagnose. Nach der Einprägephase (6 Minuten) und einer Pause folgen Abruffragen. Seit 2021 sind die Fragen deutlich schwieriger geworden — es werden Konstellationsfragen gestellt wie 'Welchen Beruf hat die älteste Frau mit Diagnose X?'.",
    strategien: [
      "Loci-Methode: 5 Altersgruppen = 5 Räume in deinem Haus. Platziere die 3 Patienten jeder Gruppe in einem Raum",
      "Visualisierung: Wandle jeden Namen in ein Bild um (z.B. 'Fischer' → Angel, 'Parkinson' → parkender Sohn)",
      "Geschichten: Erstelle pro Raum eine skurrile Mini-Geschichte, in der die Patienten interagieren",
      "Systematisch vorgehen: Immer in der gleichen Reihenfolge lernen (Name → Beruf → Diagnose)",
      "Konstellationen beachten: Seit 2021 musst du Beziehungen zwischen den Eigenschaften verstehen",
    ],
    tipps: [
      "Zeichne die Räume deiner Loci-Methode auf Papier",
      "Übe mit selbst erstellten Patientenlisten (KI kann dir diese generieren!)",
      "Trainiere, die 5 Gruppen in unter 6 Minuten einzuprägen",
      "Lege zwischen Übungssessions 1-2 Tage Pause ein",
    ],
    quizQuestions: [
      {
        question:
          "Gegeben: Patient Thomas Berger, 45, männlich, Lehrer, Diabetes. Patient Anna Fischer, 42, weiblich, Ärztin, Migräne. Patient Markus Klein, 48, männlich, Ingenieur, Asthma. — Frage: Welchen Beruf hat der älteste Mann in dieser Gruppe?",
        options: [
          "Lehrer",
          "Ingenieur",
          "Arzt",
          "Pfleger",
          "Nicht bestimmbar",
        ],
        correctIndex: 1,
        explanation:
          "Die Männer sind Thomas (45) und Markus (48). Der älteste Mann ist Markus Klein, 48 → Ingenieur.",
      },
      {
        question:
          "Welche Methode eignet sich am besten, um sich 15 Patienten mit je 6 Fakten zu merken?",
        options: [
          "Alle Daten stur auswendig lernen durch Wiederholung",
          "Nur die Namen merken, der Rest ergibt sich",
          "Die Loci-Methode: 5 Räume für 5 Altersgruppen, Patienten als interagierende Figuren in den Räumen",
          "Alles auf ein Blatt Papier schreiben und während des Tests nachschauen",
          "Sich nur die Diagnosen merken",
        ],
        correctIndex: 2,
        explanation:
          "Die Loci-Methode ist die nachweislich effektivste Technik für Fakten lernen. Die räumliche Verknüpfung und die visuellen Geschichten machen die Daten abrufbar.",
      },
      {
        question:
          "Was hat sich seit 2021 am Untertest 'Fakten lernen' geändert?",
        options: [
          "Es werden weniger Patienten abgefragt",
          "Die Fragen sind nun Konstellationsfragen, z.B. 'Welche Eigenschaft hat der jüngste Mann mit Krankheit X?'",
          "Die Einprägephase dauert jetzt 10 Minuten",
          "Es gibt keine Altersgruppen mehr",
          "Die Fakten sind jetzt auf Französisch",
        ],
        correctIndex: 1,
        explanation:
          "Seit 2021 reicht es nicht mehr, einfache Zuordnungen zu kennen. Du musst Beziehungen zwischen mehreren Eigenschaften gleichzeitig herstellen (Konstellationsfragen).",
      },
      {
        question:
          "Gegeben die gleiche Patientengruppe wie oben. Welche Diagnose hat die Person mit dem kürzesten Nachnamen?",
        options: [
          "Diabetes",
          "Migräne",
          "Asthma",
          "Nicht bestimmbar",
          "Grippe",
        ],
        correctIndex: 2,
        explanation:
          "Die Nachnamen sind: Berger (6), Fischer (7), Klein (5). Der kürzeste ist 'Klein' → Markus Klein → Asthma.",
      },
    ],
  },
  {
    slug: "muster-zuordnen",
    title: "Muster zuordnen",
    icon: "🔍",
    shortDescription: "Visuelle Muster erkennen und zuordnen",
    aufgaben: 18,
    zeit: "16 Minuten",
    zeitProAufgabe: "~53 Sek.",
    teil: "A",
    kompetenz: "Visuelles Erkennen: Ähnlichkeiten und Unterschiede in komplexen Mustern identifizieren (ähnlich histologischen Bildern)",
    trainierbarkeit: 3,
    beschreibung:
      "Du siehst ein Zielmuster und musst in einer grösseren Mustersammlung das identische Muster wiederfinden. Die Muster sind bewusst ähnlich gestaltet — wie bei histologischen Bildern in der Medizin. Du musst auf feine Details achten und systematisch vergleichen. Ablenkermuster unterscheiden sich oft nur minimal.",
    strategien: [
      "Systematischer Vergleich: Gehe das Zielmuster in einer festen Reihenfolge durch (z.B. von links oben nach rechts unten)",
      "Markantes Merkmal zuerst: Suche das auffälligste Element im Zielmuster und gleiche es ab",
      "Ausschlussverfahren: Eliminiere Optionen, die in einem klaren Merkmal abweichen",
      "Nicht zu lange an einer Aufgabe hängenbleiben — markiere und komme später zurück",
      "Trainiere das Erkennen feiner Unterschiede (z.B. mit 'Finde die Unterschiede'-Rätseln)",
    ],
    tipps: [
      "Übe mit histologischen Bildern oder Mikroskopie-Aufnahmen",
      "Trainiere deine visuelle Wahrnehmung mit Wimmelbildern und Fehlersuch-Bildern",
      "Geschwindigkeit kommt durch Routine — übe regelmässig",
    ],
    quizQuestions: [
      {
        question:
          "Welche Vorgehensweise ist beim Untertest 'Muster zuordnen' am effektivsten?",
        options: [
          "Alle Muster gleichzeitig betrachten und ein Gefühl entwickeln",
          "Zuerst ein markantes Merkmal im Zielmuster identifizieren und dann gezielt in den Optionen suchen",
          "Immer von rechts nach links vergleichen",
          "Die Muster drehen und spiegeln",
          "Nur die Ränder der Muster vergleichen",
        ],
        correctIndex: 1,
        explanation:
          "Ein markantes Merkmal als 'Anker' zu nutzen ermöglicht schnelles Ausschliessen falscher Optionen. Systematisches Vorgehen schlägt intuitives Betrachten.",
      },
      {
        question:
          "Warum ist 'Muster zuordnen' für das Medizinstudium relevant?",
        options: [
          "Weil Ärzte Muster in Tapeten erkennen müssen",
          "Weil die Fähigkeit, feine visuelle Unterschiede zu erkennen, z.B. in der Histologie und Radiologie entscheidend ist",
          "Weil Muster in der Chirurgie vorkommen",
          "Weil man im Studium viele Puzzle lösen muss",
          "Es ist nicht relevant, nur ein Füllertest",
        ],
        correctIndex: 1,
        explanation:
          "In der Medizin müssen z.B. histologische Schnitte oder Röntgenbilder beurteilt werden — das erfordert dieselbe Fähigkeit, feine visuelle Unterschiede systematisch zu erkennen.",
      },
      {
        question:
          "Was solltest du tun, wenn du bei einer Muster-Aufgabe nach 40 Sekunden noch keine Lösung hast?",
        options: [
          "Aufgabe überspringen und zum Ende kommen",
          "Die Aufgabe markieren, eine Tendenz-Antwort geben und zum Schluss zurückkehren",
          "Alle restliche Zeit in diese Aufgabe investieren",
          "Raten und nie zurückkehren",
          "Die Prüfung abbrechen",
        ],
        correctIndex: 1,
        explanation:
          "Mit nur 53 Sekunden pro Aufgabe ist Zeitmanagement entscheidend. Markiere schwierige Aufgaben, gib eine Tendenz-Antwort und kehre am Ende zurück — so verlierst du keine Punkte bei einfacheren Aufgaben.",
      },
    ],
  },
  {
    slug: "diagramme-tabellen",
    title: "Diagramme & Tabellen",
    icon: "📊",
    shortDescription: "Daten korrekt interpretieren und Schlüsse ziehen",
    aufgaben: 18,
    zeit: "50 Minuten",
    zeitProAufgabe: "~2:47 Min.",
    teil: "B",
    kompetenz: "Dateninterpretation: Grafiken, Diagramme und Tabellen lesen, Achsen/Einheiten beachten, Schlussfolgerungen ziehen",
    trainierbarkeit: 3,
    beschreibung:
      "Du erhältst Diagramme (Balken-, Linien-, Kreisdiagramme), Tabellen und Grafiken mit medizinisch-naturwissenschaftlichen Daten. Dazu werden Fragen gestellt, die korrektes Ablesen, Berechnen und Schlussfolgern erfordern. Typische Fallen: logarithmische Skalen, relative vs. absolute Werte, oder bewusst irreführende Achsenbeschriftungen.",
    strategien: [
      "Achsen zuerst lesen: Was wird dargestellt? Welche Einheiten? Welcher Massstab?",
      "Legende prüfen: Welche Kurve/Balkenfarbe steht wofür?",
      "Vorsicht bei Prozentwerten: Prozent von was? Relative vs. absolute Veränderungen unterscheiden",
      "Trends erkennen: Steigt/fällt/stagniert ein Wert? Gibt es Ausreisser?",
      "Bei Berechnungen: Werte sauber aus dem Diagramm ablesen und Zwischenschritte notieren",
    ],
    tipps: [
      "Übe regelmässig mit echten wissenschaftlichen Grafiken (z.B. aus Studien)",
      "Achte besonders auf logarithmische Skalen — sie verzerren die visuelle Wahrnehmung",
      "Trainiere das schnelle Ablesen von Werten aus Grafiken unter Zeitdruck",
    ],
    quizQuestions: [
      {
        question:
          "Eine Studie zeigt: Gruppe A (100 Patienten) hat eine Heilungsrate von 80%. Gruppe B (50 Patienten) hat eine Heilungsrate von 90%. Welche Aussage ist korrekt?",
        options: [
          "Gruppe B hat mehr geheilte Patienten als Gruppe A",
          "Gruppe A hat mehr geheilte Patienten (80 vs. 45), obwohl die Rate niedriger ist",
          "Beide Gruppen haben gleich viele geheilte Patienten",
          "Man kann die Gruppen nicht vergleichen",
          "90% ist immer besser als 80%",
        ],
        correctIndex: 1,
        explanation:
          "Gruppe A: 80% von 100 = 80 Geheilte. Gruppe B: 90% von 50 = 45 Geheilte. In absoluten Zahlen hat Gruppe A mehr Geheilte, obwohl die Rate niedriger ist. Typische Falle im EMS!",
      },
      {
        question:
          "Ein Balkendiagramm zeigt Medikamentenverkäufe: 2022: 500'000, 2023: 520'000, 2024: 530'000. Die Y-Achse beginnt bei 490'000. Welches Problem entsteht?",
        options: [
          "Die Daten sind falsch",
          "Die Y-Achse beginnt nicht bei 0, wodurch der Anstieg visuell übertrieben dargestellt wird",
          "Das Diagramm ist perfekt",
          "Die Zahlen sind zu gross",
          "Man bräuchte ein Liniendiagramm",
        ],
        correctIndex: 1,
        explanation:
          "Wenn die Y-Achse nicht bei 0 beginnt, erscheinen kleine Unterschiede visuell riesig. Der Anstieg von 500'000 auf 530'000 (+6%) sieht aus wie eine Verdopplung. Das ist eine häufige Falle im EMS.",
      },
      {
        question:
          "Eine Tabelle zeigt: Medikament A kostet CHF 50 und heilt 70% der Fälle. Medikament B kostet CHF 120 und heilt 85% der Fälle. Wie viel kostet eine Heilung durchschnittlich mit jedem Medikament?",
        options: [
          "A: CHF 71.43, B: CHF 141.18",
          "A: CHF 50, B: CHF 120",
          "A: CHF 35, B: CHF 102",
          "A: CHF 100, B: CHF 200",
          "Nicht berechenbar",
        ],
        correctIndex: 0,
        explanation:
          "Kosten pro Heilung = Kosten ÷ Heilungsrate. A: 50 ÷ 0.70 = CHF 71.43. B: 120 ÷ 0.85 = CHF 141.18. Medikament A ist pro Heilung kosteneffizienter.",
      },
    ],
  },
  {
    slug: "konzentration",
    title: "Konzentriertes & sorgfältiges Arbeiten",
    icon: "🎯",
    shortDescription: "Schnelligkeit und Genauigkeit unter Zeitdruck",
    aufgaben: 1600,
    zeit: "8 Minuten",
    zeitProAufgabe: "~0.3 Sek. pro Zeichen",
    teil: "B",
    kompetenz: "Konzentration, Arbeitsgeschwindigkeit, Sorgfalt, Ausdauer unter Zeitdruck",
    trainierbarkeit: 4,
    beschreibung:
      "Du erhältst einen Bogen mit 1600 Zeichen (Buchstaben und Symbole) in Reihen. Du musst bestimmte Zielzeichen markieren, die zu Beginn definiert werden. Es zählen nur korrekt bearbeitete Zeichen (richtig markierte UND richtig nicht-markierte). Fehler werden von den korrekten Antworten abgezogen. Dieser Untertest ist der am besten trainierbare Teil des EMS.",
    strategien: [
      "Entwickle eine persönliche Systematik: Gehe zeilenweise von links nach rechts vor",
      "Gleichmässiges Tempo: Nicht zu schnell (Fehler!) und nicht zu langsam (zu wenige bearbeitet)",
      "Fehler vermeiden ist wichtiger als viele Zeichen zu schaffen — Fehler werden abgezogen",
      "Blickführung trainieren: Auge zügig und gleichmässig über die Zeilen bewegen",
      "Nicht überspringen — wenn du ein Zeichen nicht sicher erkennst, markiere nach bestem Wissen",
    ],
    tipps: [
      "Täglich 8 Minuten üben — kein Untertest profitiert mehr von täglicher Routine",
      "Nutze die offiziellen Übungen von swissuniversities (6 echte Testversionen kostenlos verfügbar!)",
      "Miss deine Leistung und tracke deinen Fortschritt über die Wochen",
      "Sitzposition und Stifthaltung optimieren — Ergonomie beeinflusst die Geschwindigkeit",
    ],
    quizQuestions: [
      {
        question:
          "Was passiert im Konzentrationstest, wenn du ein Zeichen fälschlicherweise markierst?",
        options: [
          "Nichts, es wird einfach nicht gezählt",
          "Der Fehler wird von deinen korrekt bearbeiteten Zeichen abgezogen",
          "Der gesamte Test wird ungültig",
          "Du verlierst 5 Punkte",
          "Die Aufgabe wird übersprungen",
        ],
        correctIndex: 1,
        explanation:
          "Im Konzentrationstest zählt: Korrekte Markierungen MINUS Fehler. Daher ist Genauigkeit wichtiger als Geschwindigkeit — jeder Fehler kostet doppelt (verlorene richtige + Abzug).",
      },
      {
        question:
          "Wie kannst du den Konzentrationstest am effektivsten trainieren?",
        options: [
          "Einmal pro Woche 30 Minuten üben",
          "Jeden Tag genau 8 Minuten unter Echtbedingungen üben und die Leistung tracken",
          "Nur am Testtag üben",
          "Sudoku lösen als Alternative",
          "Meditieren statt üben",
        ],
        correctIndex: 1,
        explanation:
          "Tägliche 8-Minuten-Einheiten unter Echtbedingungen sind optimal. Die Routinebildung ist bei diesem Untertest der stärkste Erfolgsfaktor. Fortschritt tracken hilft bei der Motivation.",
      },
      {
        question:
          "Wie viele echte Testversionen für den Konzentrationstest bietet swissuniversities kostenlos an?",
        options: [
          "Keine",
          "2 Versionen",
          "6 Versionen mit Vergleichsdaten",
          "10 Versionen",
          "Nur 1 Demoversion",
        ],
        correctIndex: 2,
        explanation:
          "swissuniversities stellt 6 echte, ehemalige Testversionen des Konzentrationstests kostenlos zum Download bereit — inklusive Vergleichsdaten. Das ist das beste Gratis-Material!",
      },
    ],
  },
];
