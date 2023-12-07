// import Sortable from 'sortablejs';

// const li = document.getElementById('items');
// const sortable = Sortable.create(li);

// sortable-script.js

// Utilise le CDN pour charger SortableJS
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.1/Sortable.min.js';
script.async = true;

// Attache un gestionnaire d'événements pour savoir quand le script est chargé
script.onload = () => {
    // Maintenant que SortableJS est chargé, tu peux utiliser son code ici
    // const sortableInstance = new Sortable(document.getElementById('sortable-list'));
    const li = document.querySelectorAll('.items');
    for (const l of li) {
        const sortable = Sortable.create(l); 
    }
};

// Ajoute le script à la fin du corps du document
document.body.appendChild(script);
