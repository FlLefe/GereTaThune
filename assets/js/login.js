import api from './api.js';

const login = {

      async tryConnect () {
        
        try{
        
            const loginForm = document.querySelector('#loginForm');

            loginForm.addEventListener('submit', async (event) => {
                event.preventDefault();
                const loginForm = event.currentTarget;
                const addListFormData = new FormData(loginForm);
                const listData = Object.fromEntries(addListFormData);
                console.log('listData >>' + JSON.stringify(listData, null, 2));
                
                const loginResponse  = await api.tryLogin(listData);
                if (loginResponse.ok) {
                    console.log('Login ok - Tu es connecté');
                } else {
                    console.error('Erreur d\'authentification:');
                }
            });
          
        }catch(error){
          alert("Une erreur inattendue s'est produite. Merci de revenir plus tard...");
        }
    }

};

login.tryConnect();