import './styles/CardForm.css';
import { useDispatch } from 'react-redux';
import { onFormChange } from '../actions/cardActions';

function CardForm() {

    const dispatch = useDispatch();

    function onChangeEvent(event) {
        dispatch(onFormChange({[event.target.id]: event.target.value}))
    }

    
    return(
        <section className='card__Form--section'>
            <p className='form__text'>CARD NUMBER</p>
            <input placeholder='XXXXXXXX' className='form__Input' id="cardNumber" type="text" onChange={onChangeEvent} />
            <p className='form__text'>CARD HOLDER</p>
            <input placeholder='FIRSTNAME LASTNAME' className='form__Input' id="cardHolder" type="text" onChange={onChangeEvent} />
            <section className='card__Form--text'>
                <p className='form__text--valid'>VALID THRU</p>
                <p className='form__text--ccv'>CCV</p>
            </section>
            <section className='card__Form--small'>
                <input className='form__Input--validThru' id="validThru"type="date" onChange={onChangeEvent} />
                <input className='form__Input--ccv' id="ccv" type="tel" onChange={onChangeEvent} />
            </section>
            <p className='form__text'>VENDOR</p>
            <select className='form__Select' id="vendor" onChange={onChangeEvent} >
                <option className='option__Value' value=""></option>
                <option className='option__Value' value="bitcoin">BITCOIN INC</option>
                <option className='option__Value' value="ninja-bank">NINJA BANK</option>
                <option className='option__Value' value="block-chain-inc">BLOCK CHAIN INC</option>
                <option className='option__Value' value="evil-corp">EVIL CORP</option>
            </select>
        </section>
    )
}

export default CardForm 