# ROS 2 Setup Guide

This is a repository for deploying a GitHub Page. Visit [https://sesasr-course.github.io/ros2_setup_guide/](https://sesasr-course.github.io/ros2_setup_guide/) for the actual site version.

## Aggiungere una nuova pagina

Il sito è generato con Jekyll a partire dalla cartella `docs/`. Per aggiungere una pagina:

1. Crea un file Markdown nella cartella appropriata sotto `docs/` (per esempio `docs/wsl2/nuova_guida.md`). Mantieni le guide organizzate per piattaforma; per contenuti comuni puoi usare una cartella dedicata.
2. Inserisci all'inizio del file il front matter YAML:

   ```yaml
   ---
   title: "Titolo della pagina"
   layout: default
   ---
   ```

   `title` definisce il titolo della pagina e `layout: default` applica il layout del sito. Dopo il front matter aggiungi il contenuto in Markdown: titoli (`#`, `##`), paragrafi, liste, blocchi di codice e link. Nelle guide delle cartelle di piattaforma, aggiungi anche il link alla home con il percorso relativo appropriato, per esempio `[Home](../index.md)`.

3. Aggiungi la pagina alla barra laterale modificando `docs/_data/navigation.yml`. Inserisci una voce sotto la sezione desiderata, rispettando l'indentazione YAML:

   ```yaml
   - title: WSL 2 Ubuntu
     pages:
       - title: Titolo della pagina
         url: /wsl2/nuova_guida/
   ```

   Il `title` della voce è il testo mostrato nella navigazione. L'URL corrisponde al percorso del file rispetto a `docs/`, senza estensione `.md`, con `/` iniziale e finale. Per esempio `docs/wsl2/nuova_guida.md` diventa `/wsl2/nuova_guida/`. Jekyll applica automaticamente il prefisso del sito (`/ros2_setup_guide`), quindi non inserirlo nell'URL della voce.

4. Se la nuova pagina deve essere raggiungibile anche dalla pagina iniziale, aggiungi un link in `docs/index.md`. La voce nella barra laterale e il link nella pagina iniziale sono gestiti separatamente.

   Controlla inoltre che i link relativi e i percorsi delle immagini aggiunti puntino a file esistenti.