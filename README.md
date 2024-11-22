# 🚀 Web App per Autenticazione Utente 🚀 
 Descrizione del Progetto

Sono entusiasta di condividere il mio ultimo progetto, una web app per la gestione dell'autenticazione degli utenti!

L'applicazione offre un'esperienza utente fluida e intuitiva con le seguenti funzionalità:

-Login e Registrazione Utente: Gli utenti possono creare un account e accedere tramite email e password. In caso di credenziali errate, un feedback tramite toast viene visualizzato per migliorare l'interazione dell'utente.

-Gestione Sicura delle Credenziali: La password degli utenti viene crittografata utilizzando bcrypt, e l'accesso sicuro è garantito tramite token JWT con una durata di 7 giorni.

-Design Responsivo e Moderno: L'interfaccia è stata progettata utilizzando Chakra UI, garantendo un'esperienza utente moderna e ottimizzata per tutti i dispositivi, dai desktop agli smartphone.
-Esperienza Multimediale: Ho creato un video dimostrativo con un sound ambient di sottofondo per offrire una panoramica del progetto in azione.
 Tecnologie Utilizzate
-Frontend: React.js, Vite, Chakra UI, React Icons
-Backend: Node.js, Express.js, Bcrypt, JWT (JSON Web Tokens), cookie-parser, cors
-Database: MySQL 
-Gestione Stato: Axios per le richieste HTTP e protezione tramite JWT

## 📋 Guida all'Utilizzo dell'Applicazione
1. Installazione e Configurazione
Clonare il repository
Per iniziare, clona il repository GitHub sul tuo computer locale:

bash
Copia codice
git clone: https://github.com/mister-nothing00/web-authentication-app.git

Installare le dipendenze
Dopo aver clonato il repository, spostati nella directory del progetto ed esegui il comando per installare tutte le dipendenze:

bash
Copia codice
cd tuo-repository
npm install
Configurare l'ambiente
Crea un file .env nella directory principale del progetto e aggiungi le seguenti variabili:

makefile

Copia codice
JWT_SECRET=your_jwt_secret
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name

Assicurati che le informazioni di configurazione siano corrette.

2. Esecuzione dell'Applicazione

Avviare il server di sviluppo
Per avviare il server backend (Express.js), utilizza il seguente comando:

bash
Copia codice
npm run dev
Avviare il frontend
In un altro terminale, spostati nella directory del frontend ed esegui:

bash
Copia codice
npm run dev
Il frontend dovrebbe essere accessibile su http://localhost:5173 e il backend su http://localhost:3000.

## 3. Funzionalità dell'Applicazione
Registrazione
L'utente può registrarsi inserendo la propria email e password. Le informazioni verranno crittografate nel database.

Login
Gli utenti possono effettuare l'accesso inserendo email e password. In caso di successo, viene generato un token JWT che permette l'accesso a risorse protette.

Protezione delle Rotte
Le rotte protette richiedono un token JWT valido. Se un utente tenta di accedere a una rotta protetta senza token, verrà reindirizzato alla pagina di login.

Gestione degli Errori
Credenziali Errate: Se l'utente inserisce un'email o una password errata, verrà visualizzato un messaggio di errore tramite toast.
Email Non Trovata: In caso di email non registrata, un messaggio di errore verrà mostrato.


# 📧 Contatti
Per ulteriori informazioni, puoi contattarmi tramite francescodavidedivita@gmail.com

🚀 Grazie per aver esplorato il mio progetto!
Hashtag suggeriti:
#WebDevelopment #ReactJS #NodeJS #JWT #Bcrypt #MySQL #CORS #CookieParser #ProgettoPersonale #ChakraUI