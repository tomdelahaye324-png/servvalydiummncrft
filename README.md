# VALYDIUM Launcher — projet complet

Interface HTML VALYDIUM intégrée à une application Electron pour Windows.

## Contenu
- `index.html` : interface violette avec minerai cubique, bouton JOUER, bouton FERMER et adresse du serveur.
- `main.js` : fenêtre Electron, fermeture de fenêtre et demande d'ouverture du Launcher Minecraft officiel.
- `preload.js` : pont sécurisé entre l'interface et Electron.
- `package.json` : configuration et génération de l'installateur Windows.
- `.github/workflows/build-windows.yml` : workflow GitHub Actions pour construire l'application Windows.

## Construction avec GitHub
1. Décompressez ce ZIP dans un dépôt GitHub (ou téléversez tous les fichiers et dossiers en conservant leur structure).
2. Ouvrez l'onglet **Actions** et lancez le workflow de build, ou poussez un commit si le workflow est configuré pour se lancer sur push.
3. Téléchargez l'artefact de build généré par GitHub Actions.

## Limite importante concernant la connexion au serveur
Le bouton JOUER ouvre le Launcher Minecraft officiel avec le protocole `minecraft://`. Il ne contourne pas la connexion Microsoft et ne garantit pas de rejoindre automatiquement `join1.severoo.com:55230`. Pour un auto-join réel, il faut intégrer un lanceur Minecraft Java qui gère l'authentification Microsoft officielle, le profil/version et les arguments Quick Play. Ce projet ne collecte jamais le mot de passe Microsoft.
