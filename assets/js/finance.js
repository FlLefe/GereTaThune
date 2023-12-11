
const finance = {

    async takeDataFromApi() {
        const financeDataFetch = await fetch(`localhost:3000/finance`);

        const financeData = await financeDataFetch.json();
        return financeData;
    },

    addTableToDom() {
       const tableContainer = document.querySelector('[slot="tables-container"]')

       const tableTemplate = document.querySelector('#table-template')
       const newTableElement = tableTemplate.content.cloneNode(true);


    },
    addCategoryToDom() {

    },
    addMovementToDom(movement) {
        const movementContainer = document.querySelector('[slot="movements"]')

        const movementTemplate = document.querySelector('#movement-template')
        const newMovementElement = movementTemplate.content.cloneNode(true);

        // Ajout des données en dataset
        const editMovement = newMovementElement.querySelector('.edit-movement')
        editMovement.dataset.id= movement.id;
        editMovement.dataset.amount= movement.amount;
        editMovement.dataset.comment= movement.comment;
        editMovement.dataset.id= movement.operation_id;

        // Ajout du commentaire au DOM
        const newCardCommentElement = newMovementElement.querySelector('[slot="movement-comment"]');
        newCardCommentElement.textContent = movement.comment;

        // Ajout du montant au DOM
        const newCardAmountElement = newMovementElement.querySelector('[slot="movement-amount"]');
        newCardAmountElement.textContent = movement.amount;

        movementContainer.append(newMovementElement)
    },

    init() {
        
    }
}

document.addEventListener('DOMContentLoaded', finance.init);