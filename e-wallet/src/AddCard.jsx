import { useNavigate } from 'react-router-dom';
import { onAddNewCard } from './actions/cardActions'
import { useDispatch } from 'react-redux';
import './styles/AddCard.css'
import Card from './components/Card';
import CardForm from './components/CardForm';

import { useSelector } from 'react-redux';

function AddCard({setHeader}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cardStack = useSelector((state) => { return state.cardStack })
    console.log(' -- CARD STACK --', cardStack);


    function addNewCard () {
        dispatch(onAddNewCard())
        
    }

    function handleClick() {
        addNewCard();
        
        navigate('/')
        setHeader('E-WALLET')
    }

    return(
        <section>
            <Card />
            <CardForm />
            <button className='add__Card--btn' onClick={handleClick}>ADD CARD</button>
        </section>
    )
}

export default AddCard;