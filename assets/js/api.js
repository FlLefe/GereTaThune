import config from './config.js';

const api = {

  async tryLogin(data){
    try{
      console.log('data >>' + JSON.stringify(data, null, 2));
      
      const apiResponse = await fetch(`${config.baseUrl}login`, {
        method: 'POST', // on veut créer une ressource liste
        body: JSON.stringify(data), // les informations permettant au serveur de créer la liste (nom de la liste) sont encodée au format json dans le corp de la requête
        headers: { // on ajoute une entete à notre requête
          'Content-type': 'application/json', // qui permet de préciser que le corp de la requête est encodé en json (ce qui permettra au serveur de savoir comment la décoder)
        }
      });

      if (!apiResponse.ok){
        alert(apiResponse.message);
        return;
      }

      const createdList = await apiResponse.json();

      return createdList;
    } catch(error){
      console.error("Une erreur inattendue s'est produite. Merci de revenir plus tard...");
    }
  },

  async isConnect () {
    try{

      const session = await fetch(`${config.baseUrl}session`);
      
      const sessionData = await session.json();

      if (!session.ok){
        alert(sessionData.message);
        return;
      }

      return sessionData;
    } catch(error){
      console.error("Une erreur inattendue s'est produite. Merci de revenir plus tard...");
    }
  },

};

export default api;

