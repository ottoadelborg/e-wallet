import { useSelector } from "react-redux";
import { ActiveCard } from "../actions/cardActions";
import { useDispatch } from 'react-redux';
import ChipLight from '../assets/chip-light.svg'
import './styles/NewCard.css'


function NewCard() {
    const cardStack = useSelector((state) => { return state.cardStack })
    const dispatch = useDispatch()
    console.log(cardStack);

    const displayCard = cardStack.map((cardstack) => {
        const className = `card-stack-${cardstack.vendor}`;
        return (
            <section className={className} onClick={() => handleClick(cardstack)}
            key={cardstack.cardNumber}>
             <aside className='svg__Container'>
                <img src={ChipLight} alt="Chip-light" />
            </aside>
                <p placeholder='XXXX XXXX XXXX XXXX' className='card__Number'>{cardstack.cardNumber}</p>
            <aside className='card__Text--container'>
                <p className='card__holder--text'>CARD HOLDER</p>
                <p className='card__ValidThru--text'>VALID THRU</p>
            </aside>
            <aside className='valid__container'>
                <p className='card__Holder'>{cardstack.cardHolder}</p>
                <p className='card__ValidThru'>{cardstack.validThru}</p>
            </aside>
        </section>
        )
    }) 

    function handleClick(selectedCard){
        dispatch(ActiveCard(selectedCard))
        console.log(selectedCard);
    }

    return(
        <section className="Card__Stack--container">
            {displayCard}
        </section>
    )
}

export default NewCard;