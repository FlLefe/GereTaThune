import api from './api.js';

const nav = {

    async fetchSessionData () {

        try {
          const navDom = document.getElementById('nav');
          const content = document.createElement('div');
          
          const sessionResponse = await api.isConnect();
    
          if (sessionResponse) {
            content.innerHTML = `
                <a class="underliner" href="../html/finance.html">Mes finances</a>
                <a class="underliner" href="/logout">Se déconnecter</a>
                <p>${sessionResponse.firstname}</p>`;
        } else {
            content.innerHTML = `
                <a class="underliner" href="/assets/html/register.html">S'inscrire</a>
                <a class="underliner" href="/assets/html/login.html">Se connecter</a>`;
        }
    
        navDom.append(content);
        
        } catch (error) {
          console.error('Erreur lors de la récupération des données :', error);
        }
    }
};

nav.fetchSessionData();
