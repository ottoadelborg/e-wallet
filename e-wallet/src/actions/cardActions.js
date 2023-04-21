function onFormChange (value) {
    return {
        type: 'ON_FORM_CHANGE',
        payload: value
    }
}

function onAddNewCard (card) {
    return {
        type: 'ON_ADD_NEW_CARD',
        payload: card
    }
}

function ActiveCard (value) {
    return {
        type: 'ACTIVE_CARD',
        payload: value
    }
}

export {onFormChange, onAddNewCard, ActiveCard};