
const finance = {

    openEditMovementModal(movementId, amount, comment, operationId) {
        const editModal = document.getElementById('edit-movement-modal');
        editModal.classList.toggle('hidden');
        editModal.querySelector('[name=""]')
    },

    fermerModal() {
        document.getElementById('edit-movement-modal').classList.add('hidden');
    },

    modalEditEventListener() {
        const movements = document.querySelectorAll('.edit-movement');
        for (const movement of movements) {
            movement.addEventListener('click', (event) => {
                event.preventDefault();
                const movementId = event.currentTarget.dataset.movementId;
                const movementAmount = event.currentTarget.dataset.amount;
                const movementComment = event.currentTarget.dataset.comment;
                const movementOperation = event.currentTarget.dataset.operation;
                this.openEditMovementModal(movementId, movementAmount, movementComment, movementOperation);
            })
        }
    },

    init() {
        finance.modalEditEventListener();
    }
}

document.addEventListener('DOMContentLoaded', finance.init);