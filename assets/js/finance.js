
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

       // Ajout du nom de l'opération
       const newTableMainElement = newTableElement.querySelector('[slot="operation-main"]')
       newTableMainElement.textContent = operation.name
       // et on insère en dataset l'id de l'opération
       newTableMainElement.dataset.id = operation.id

       for (const category of operation.categories) {
        addCategoryToDom(category)
       }

       tableContainer.append(newTableElement)


    },
    addCategoryToDom(category) {
        const categoryContainer = document.querySelector(`[slot="operation-main"][data-id="${category.operation_id}"] [slot="categories"]`)

        const categoryTemplate = document.querySelector('#category-template')
        const newCategoryElement = movementTemplate.content.cloneNode(true);

        // Ajout de la couleur au style
        const newCategoryMainElement = newCategoryElement.querySelector('[slot="category-main"]');
        newCategoryMainElement.style = category.color;
        // et on insère en dataset l'id de la catégorie
        newCategoryMainElement.dataset.id = category.id

        // Ajout du nom de la catégorie
        const newCategoryNameElement = newCategoryElement.querySelector('[slot="category-name"]');
        newCategoryNameElement.textContent = category.name;
        
        for (const movement of category.movements) {
            addMovementToDom(movement)
        }

        categoryContainer.append(newCategoryElement)

    },
    addMovementToDom(movement) {
        const movementContainer = document.querySelector(`[slot="category-main"][data-id="${movement.category_id}"] [slot="movements"]`)

        const movementTemplate = document.querySelector('#movement-template')
        const newMovementElement = movementTemplate.content.cloneNode(true);

        // Ajout des données en dataset
        const editMovement = newMovementElement.querySelector('.edit-movement')
        editMovement.dataset.id= movement.id;
        editMovement.dataset.amount= movement.amount;
        editMovement.dataset.comment= movement.comment;
        editMovement.dataset.id= movement.operation_id;

        // Ajout du commentaire au DOM
        const newMovementCommentElement = newMovementElement.querySelector('[slot="movement-comment"]');
        newMovementCommentElement.textContent = movement.comment;

        // Ajout du montant au DOM
        const newMovementAmountElement = newMovementElement.querySelector('[slot="movement-amount"]');
        newMovementAmountElement.textContent = movement.amount;

        movementContainer.append(newMovementElement)
    },

    init() {
        
    }
}

document.addEventListener('DOMContentLoaded', finance.init);