const nav = document.getElementById('nav');
const content = document.createElement('div');
let data = document.cookie

const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/session'); 

      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }
      
      if (response.length > 0) {
        data = await response.json();
      }

      if (data != null) {
        content.innerHTML = `
            <a href="../html/finance.html">Mes finances</a>
            <a href="/logout">Se déconnecter</a>
            <p>${data.firstname}</p>`;
    } else {
        content.innerHTML = `
            <a href="../html/register.html">S'inscrire</a>
            <a href="../html/login.html">Se connecter</a>`;
    }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
};

fetchData();

nav.append(content);
