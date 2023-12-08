const api = {
    /**

     */
    async checkConnect(){
      try{
        
        const userSession = await fetch(`localhost:3000/session`)
  
      }catch(error){
        alert("Une erreur inattendue s'est produite. Merci de revenir plus tard...");
      }
    },

}