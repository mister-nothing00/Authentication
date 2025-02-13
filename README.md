# 🔐 Authentication

**Authentication** is a project that allows users to register or log in to their account. Once authenticated, users can access the Home page. The application also includes an integration with a news API to display recent updates.

---

## 🚀 Technologies used

### 🖥️ **Frontend**
- 🎨 **SCSS**: For a modern and personalized style.
- ⚛️ **React**: Library for creating the user interface, supported by **Vite** for high performance.
- ✨ **Chakra UI**: For an intuitive and responsive design.
- 📡 **Axios**: To handle HTTP requests.
- 🌐 **React Router DOM**: For smooth navigation between pages.

### 🛠️ **Backend**
- ⚡ **Node.js + Express**: For server and API management.
- 📂 **MongoDB**: Clustered NoSQL database to make data globally accessible.

---

## 📰 Additional features

🔹 **NewsAPI.org integration** to display the latest news directly in the application.

### 📌 API configuration

To enable news, create a `.env` file in the **client** folder and add:

```bash
VITE_NEWS_API_KEY=<your-API-key>
