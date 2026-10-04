# Comment la décision est prise

Regroupe des accidents corporels en configurations descriptives sans attribuer de causalité individuelle.

Le code normalise la source et applique d’abord le cas déterministe documenté dans `src/index.mjs`. Pour les autres dossiers, Jev choisit la catégorie la plus prudente selon les caractéristiques communes effectivement renseignées : lieu, lumière, intersection, usagers et véhicules, sans transformer une association en cause. Une confiance inférieure à `0.8`, la catégorie `review_required` ou une absence de données choisie par le modèle marque le résultat pour revue humaine. Une collection vide explicitement fournie reste un résultat déterministe sans appel Jev.

Les jointures BAAC, fréquences, taux et contrôles de représentativité restent déterministes.

Les démonstrations ne contiennent que des probabilités synthétiques. Constituez un corpus français annoté, mesurez les erreurs par catégorie et fixez vos propres seuils avant un usage opérationnel.
