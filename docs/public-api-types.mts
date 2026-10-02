// Objectif : vérifier les types publiés depuis un projet consommateur.
import { crashPatternCase, assessCrashPattern, DECISIONS } from "../src/index.mjs";
import { createFakeProvider } from "../src/jev.mjs";
const dossier = crashPatternCase({
  "id": "exemple-1",
  "text": "Échantillon synthétique : plusieurs accidents corporels de deux-roues surviennent de nuit sur des carrefours urbains présentant les mêmes variables renseignées.",
  "source": {
    "url": "https://example.test/source-publique",
    "date": "2026-10-01"
  },
  "details": {
    "territoire": "France — cas synthétique",
    "origine": "donnée synthétique"
  }
});
void DECISIONS;
void assessCrashPattern(dossier, createFakeProvider(() => ({})));
