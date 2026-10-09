# Linee guida per gli agenti

## Progetto

- Il repository pubblica con GitHub Pages una guida per configurare ambienti di sviluppo ROS 2.
- Il sito Jekyll ha come directory sorgente `docs/`; `docs/index.md` è il punto di ingresso.
- Le guide sono organizzate per piattaforma in `docs/wsl2/`, `docs/dual_boot/` e `docs/mac_m1/`. Istruzioni comuni per Visual Studio Code sono in `docs/vscode/`.
- La configurazione usa il tema remoto `pages-themes/architect`, Kramdown e il plugin `jekyll-relative-links`, definiti in `docs/_config.yml`.

## Modifiche ai contenuti

- Mantieni in inglese i contenuti rivolti ai lettori, in coerenza con le guide esistenti.
- Conserva l'organizzazione per piattaforma; aggiorna `docs/index.md` quando aggiungi o rinomini una guida raggiungibile dai lettori.
- Segui il formato delle pagine esistenti: front matter YAML con `title` e `layout: default`, link `[Home](../index.md)`, titoli Markdown e link relativi.
- Conserva immagini e relativi riferimenti nella cartella della piattaforma. Rispetta maiuscole e minuscole nei nomi: i percorsi su GitHub Pages sono sensibili al caso.
- Tieni conto del prefisso di pubblicazione `/ros2_setup_guide` configurato in `docs/_config.yml`; preferisci i link relativi usati dal progetto.
- Per procedure di installazione o partizionamento, rendi espliciti prerequisiti, rischi e passaggi di verifica. Non presentare come testate le procedure indicate nel sito come sperimentali.
- Modifica `docs/index_old.md` solo se il lavoro richiesto riguarda esplicitamente quella pagina storica.

## Build e verifica

- Le dipendenze Ruby sono dichiarate in `docs/Gemfile` e bloccate in `docs/Gemfile.lock`.
- Per compilare il sito dalla radice del repository:

  ```sh
  cd docs
  bundle exec jekyll build
  ```

- Per visualizzarlo localmente:

  ```sh
  cd docs
  bundle exec jekyll serve
  ```

- Non risultano configurati test automatici specifici del sito. Dopo modifiche ai contenuti, controlla che la build Jekyll riesca e che i link e le immagini aggiunti puntino a file esistenti.
- Le modifiche a `docs/_config.yml` richiedono il riavvio del server Jekyll.

- Per testare il sito da browser cerca l'ip della macchina con `hostname -I` e apri `http://<ip>:4000/ros2_setup_guide/`