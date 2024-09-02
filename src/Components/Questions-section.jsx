import React from 'react'
import ImgBG from '../img/Photo.png'


const Questions_Footer = () => {
  return (
    <>
        <section className="question">
            <div className="question-form">
                <h1>Остались вопросы?<br /> Свяжитесь с нами</h1>
                <form action="" className="inputs-form">
                    <input placeholder='ФИО' type="text" />
                    <input placeholder='Номер телефон' type="text" />
                    <input placeholder='E-mail' type="text" />
                    <input placeholder='Ваш вопрос' type="text" />
                </form>
                <button>Отправить</button>
            </div>
            <div className="questions-img">
                <img src={ImgBG} alt="" />
            </div>
        </section>



       
    </>
  )
}

export default Questions_Footer