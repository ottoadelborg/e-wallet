import './styles/CardStack.css';
import { useSelector } from 'react-redux';
import NewCard from './NewCard';



function CardStack() {
    const cardStack = useSelector((state) => { return state.cardStack })
    console.log(cardStack.info);

    return(
        <section>
            <NewCard />
        </section>
    )
}

export default CardStack