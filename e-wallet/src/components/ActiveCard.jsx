import { useSelector } from "react-redux";
import './styles/ActiveCard.css'
import ChipLight from '../assets/chip-light.svg'
import Bitcoin from '../assets/vendor-bitcoin.svg'

function ActiveCard(selectedCard) {
    const activeCard = useSelector((state) => { return state.activeCard })
    console.log(selectedCard);


    return(
        <section className='active__Card--section'>
            <aside className='svg__Container'>
                <img src={ChipLight} alt="Chip-light" />
                <img className="Bitcoin" src={Bitcoin} alt="Bitcoin" />
            </aside>
                <p placeholder='XXXX XXXX XXXX XXXX' className='card__Number'>{activeCard.cardNumber}</p>
            <aside className='card__Text--container'>
                <p className='card__holder--text'>CARD HOLDER</p>
                <p className='card__ValidThru--text'>VALID THRU</p>
            </aside>
            <aside className='valid__container'>
                <p className='card__Holder'>{activeCard.cardHolder}</p>
                <p className='card__ValidThru'>{activeCard.validThru}</p>
            </aside>
        </section>
    )
}

export default ActiveCard