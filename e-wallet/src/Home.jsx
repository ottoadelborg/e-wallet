import { useNavigate } from 'react-router-dom';
import './styles/Home.css';
import CardStack from './components/CardStack'
import ActiveCard from './components/ActiveCard';

function Home({setHeader}) {
    const navigate = useNavigate();
  
    function handleClick() {
        navigate('/AddCard')
        setHeader('ADD A NEW BANK CARD')
    }
    return(
        <section>
            <ActiveCard />
            <CardStack />
            <button className='add__newCard--btn' onClick={handleClick}>Add a new card</button>
        </section>
    )
}

export default Home;
