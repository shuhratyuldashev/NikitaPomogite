import React from 'react'
import Logo_icon from '../img/logo-full.png'
import { PiInstagramLogo } from "react-icons/pi";
import { PiTelegramLogo } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { PiFacebookLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="footer">
            <section className="footer-section">
                <div className="footer-header">
                <a href="" className="logo">logo</a>
                <ul className="footer-icons">
                    <li><PiInstagramLogo size={25}/></li>
                    <li><PiTelegramLogo size={25}/></li>
                    <li><FaWhatsapp size={25}/></li>
                    <li><PiFacebookLogo size={25}/></li>
                </ul>
            </div>
            <div className="footer-main">
                <ul className="footer-ul">
                    <li><h1>Услуги</h1></li>
                    <li>Купить</li>
                    <li>Арендовать</li>
                    <li>Продать</li>
                    <li>Оценить</li>
                </ul>
                <ul className="footer-ul">
                    <li><h1>Недвижимость</h1></li>
                    <li>Квартиры</li>
                    <li>Новостройки</li>
                    <li>Дома и участки</li>
                    <li>Коммерческая</li>
                </ul>
                <ul className="footer-ul">
                    <li><h1>Компания</h1></li>
                    <li>О нас</li>
                    <li>Блог</li>
                    <li>Контакты</li>
                    <li>Связаться</li>
                </ul>
                <ul className="footer-ul">
                    <li><h1>Другое</h1></li>
                    <li>Ипотечный калькулятор</li>
                    <li>Инвестиции в недвижимость<br />в Дубае</li>
                </ul>
            </div>
            <div className="footer-down">
                <p>2024 © RMC De Luxe real estate LLC. Все права защищены</p>
                <div className="footer-img">
                    <img src={Logo_icon} alt="" />
                </div>
            </div>
        </section>
    </footer>
  )
}

export default Footer