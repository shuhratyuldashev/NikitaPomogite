import React, { useState } from 'react';
import { GrCart } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import CardItem from './cardItem';
import Slider from './Slider';

const showOrders = (props) =>{
  let summ = 0
  props.card.forEach(el => summ += Number.parseFloat(el.price))
  return(
    <div className='dropdown-card'>
    <p className='Allprice'>Сумма: {new Intl.NumberFormat().format(summ)} $</p>
    {props.card.map(el => (
      <CardItem onDelete={props.onDelete} key={el.id} item={el}/>
    ))}
    </div>
  )
}

const showNothing = () =>{
  return(
    <div className='dropdown-card-nothing'>
      <GrCart size={25}/>
      <h2>Корзина Пуста</h2>
    </div>
  )
}


const Header = ( props ) => {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div className='head'>
        <span className='Logo'>Магазин мебели</span>
        <ul className="nav">
          <li className='hover-black'>Про нас</li>
          <li className='hover-black'>Контакты</li>
          <li onClick={() => setCartOpen(cartOpen = !cartOpen)} className={` ${cartOpen && 'active'}`}><GrCart size={17}/></li>
          <li className='hover-black'><FaRegUser size={17} /></li>
        </ul>
      </div>
      {cartOpen && (
        <div>
          {props.card.length > 0 ?
          showOrders(props) : showNothing()}
        </div>
      )}

    <Slider />
    </header>
  );
}

export default Header;
