import './styles/Card.css';
import { useSelector } from 'react-redux';
import ChipDark from '../assets/chip-dark.svg'

function Card() {
    const cardNew = useSelector((state) => { return state.cardNew })

    return (
        <section className='new__Card--container'>
            <aside className='svg__Container'>
                <img src={ChipDark} alt="Chip-dark" />
            </aside>
                <p placeholder='XXXX XXXX XXXX XXXX' className='card__Number'>{cardNew.cardNumber}</p>
            <aside className='card__Text--container'>
                <p className='card__holder--text'>CARD HOLDER</p>
                <p className='card__ValidThru--text'>VALID THRU</p>
            </aside>
            <aside className='valid__container'>
                <p className='card__Holder'>{cardNew.cardHolder}</p>
                <p className='card__ValidThru'>{cardNew.validThru}</p>
            </aside>
        </section>
    )
}

export default Card