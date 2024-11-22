## 🌟 Cosa ho costruito?
🔑 Nome del progetto: Authentication
Come suggerisce il nome, questo progetto consente agli utenti di registrarsi o accedere al proprio account se già presente nel database. Una volta autenticati, gli utenti possono accedere alla pagina Home.

## 🚀 Tecnologie utilizzate
Front-End
🎨 SCSS: Per lo styling.
⚛️ React: Framework utilizzato insieme al sistema di building Vite per performance elevate.
✨ Chakra UI: Per un'interfaccia utente moderna e responsiva.
📡 Axios: Per le richieste HTTP.
🌐 React Router DOM: Per gestire la navigazione tra le pagine.

Back-End
🛠️ Node.js con Express: Per creare il server.
📂 MongoDB: Utilizzato con un cluster per rendere i dati disponibili globalmente e non solo localmente.

## 📰 Caratteristiche aggiuntive
Nell'applicazione, è possibile visualizzare notizie recenti grazie all'integrazione con l'API di NewsAPI.org.

Per configurare le notizie:
🔧 Crea un file .env nella cartella client.

```bash
Aggiungi la seguente variabile:
env
Copia codice
VITE_NEWS_API_KEY=<la-tua-chiave-API>
Ottieni la chiave API dal sito NewsAPI.org.
```
📜 Nella root principale del progetto (dove ci sono i file package.json e package-lock.json):

```bash
Crea un file .env e aggiungi queste configurazioni:
env
Copia codice
PORT=5000
SECRET_KEY=<la-tua-chiave-segreta>
```

## 🏁 Conclusione
Ecco fatto! Una volta completati questi passaggi, la tua applicazione Authentication sarà pronta per l'uso. 🎉

🌐 Prova l'applicazione qui: :https://authentication-rz5h.onrender.com/🚀
