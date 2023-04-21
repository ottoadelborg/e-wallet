const initialState = {
    cardStack: [],
    activeCard: [],
    cardNew: {
        cardNumber: '',
        cardHolder: '',
        validThru: '',
        ccv: '',
        vendor: '',
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_FORM_CHANGE': 
            return {
                ...state,
                cardNew: state.cardNew = {...state.cardNew, ...action.payload}
            }

        case 'ON_ADD_NEW_CARD': 
            return {
                ...state,
                cardStack: state.cardStack = [...state.cardStack, state.cardNew],
                cardNew: state.cardNew = {
                    cardNumber: '',
                    cardHolder: '',
                    validThru: '',
                    ccv: '',
                    vendor: '',
                }
            }

        case 'ACTIVE_CARD':
            return{
                ...state,
                activeCard: state.activeCard = action.payload
            }

        default:
            return state
    }
} 

export default reducer;