import React from 'react'
import { FaChevronDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import '../App.scss'


const Header_section = () => {
  return (
    <>
    <header class="header">
   <div class="header-logo">
        <p>Logo</p>
   </div>
    <div class="header-nav">
        <a href="">Услуги <FaChevronDown size={15} style={{marginLeft: "15px"}}/></a>
        <a href="">О нас</a>
        <a href="">Блог</a>
        <a href="">Контакты</a>
    </div>
     {/* header-nav  */}
    <div class="header-buttons">
        <button><CiSearch size={25}/></button>
        <button><CiHeart size={25}/></button>
        <button><MdCall size={25}/></button>
        <button>Ru <FaChevronDown size={15} style={{marginLeft: "15px"}}/></button>
    </div>
     {/* header-buttons */}
   </header>
    {/* header */}

    <main className='main'>
      <h1>Свяжитесь с нами: <br /><span>Ваше идеальное жилье<br />всего в одном шаге</span></h1>
      <div className="information-contact-grid">
        <div className="information-contact-first">
          <div className="content-information-section-first">
            <p>Телефон</p>
            <h2>+998 (90) 123 45 67</h2>
          </div>
          {/* content-information-section-firsts */}
          <div className="hr"></div>
          <div className="content-information-section-first">
            <p>E-mail</p>
            <h2>name@domain.uz</h2>
          </div>
          {/* content-information-section-first */}
        </div>
        {/* information-contact */}
        <div className="information-contact">
          <p>Адрес</p>
          <h2>Узбекистан, г.Ташкент,<br />ул.Такая-то, дом такой-то,<br />Ориентир такой-то</h2>
        </div>
        {/* information-contact */}
        <div className="information-contact">
          <p>График работы</p>
          <h2>09:00 - 18:00 <br />пн-пт</h2>
        </div>
        {/* information-contact */}
      </div>
      {/* information-contact-grid */}
    </main>
    {/* main */}
   </>
  )
}

export default Header_section