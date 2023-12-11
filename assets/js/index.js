import nav from './nav.js';

const app = {

  async init () {
    nav.fetchSessionData();
  },

};

document.addEventListener('DOMContentLoaded', app.init);



