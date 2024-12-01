import React from 'react'
import quetions from "./imges/Shape.png"
import dumaloq from "./imges/dumaloq.png"
import visa from "./imges/visa.png"
import master from "./imges/mastercard.png"
import mir from "./imges/mir.png"
import irbis from "./imges/irbis.png"
const Footer = () => {
  return (
   <>

        <section className='footer bg-[#2f2b4a] mt-[60px]'>
        <div className="container">
            
            <div className='footer-top pt-[40px] flex justify-between'>
                <nav className="footer-links flex flex-col gap-[26px] ">
                    <h5  className= "text-[16px] text-[#FFFFFF] font-bold ">Меню компании</h5>
                    <nav className="footer-linkss flex flex-col gap-[8px]  text-[14px] font-normal text-[#F4F5F6]">
                        <a href="#">Что такое Oner</a>
                        <a href="#">Реквизиты и информация</a>
                        <a href="#">Новости</a>
                        <a href="#">Вакансии</a>
                        <a href="#">Поставщикам</a>
                        <a href="#">Контакты</a>
                    </nav>
                </nav>
                <nav className="footer-links flex flex-col gap-[26px] ">
                    <h5 className= "text-[16px] text-[#FFFFFF] font-bold ">Каталоги</h5>
                    <nav className="footer-linkss flex flex-col gap-[8px]  text-[14px] font-normal text-[#F4F5F6]">
                        <a href="#">Оригинальные запчасти</a>
                        <a href="#">Неоригинальные запчасти</a>
                        <a href="#">Запчасти для ТО</a>
                        <a href="#">Автомасла</a>
                        <a href="#">Аккумуляторы</a>
                        <a href="#">Распродажа</a>
                    </nav>
                </nav>

                <nav className="footer-links flex flex-col gap-[26px] ">
                    <h5  className= "text-[16px] text-[#FFFFFF] font-bold ">Помощь</h5>
                    <nav className="footer-linkss flex flex-col gap-[8px]  text-[14px] font-normal text-[#F4F5F6]">
                        <a href="#">Часто задаваемые вопросы</a>
                        <a href="#">Консультация Online</a>
                        <a href="#">Оплата заказа</a>
                        <a href="#">Доставка заказа</a>
                        <a href="#">Возврат товара</a>
                        <a href="#">Забыл пароль</a>
                    </nav>
                </nav>

                <nav className="footer-links flex flex-col gap-[26px] ">
                    <h5 className= "text-[16px] text-[#FFFFFF] font-bold ">Товары и бренды</h5>
                    <nav className="footer-linkss flex flex-col gap-[8px]  text-[14px] font-normal text-[#F4F5F6]">
                        <a href="#">Список брендов</a>
                        <a href="#">Популярные товары</a>
                        <a href="#">Наличие на складах</a>
                    </nav>
                </nav>

                <div className='quetions  flex flex-col gap-[24px]'>

                    <div className='questiondiv h-[66px]  p-[16px]  flex gap-4' >
                        <img className='w-[20px] h-[20px]' src={quetions} alt="quetions img" />
                        <div>
                            <h5 className='text-[14px] text-[#F4F5F6] font-normal' >Консультация Online</h5>
                            <h6 className='text-[#F4F5F6] text-[12px] font-normal'>Задавайте вопросы</h6>
                        </div>
                    </div>

                    <div className='mode flex  gap-4'>
                       <button className='w-[30px] h-[30px] rounded-[100%] bg-[#375856] flex items-center justify-center'> <img className='w-[16px] h-[16px]' src={dumaloq} alt="" /></button>
                        <h6 className='text-[14px] text-[#F4F5F6] font-normal'>Сервис работает в <br /> обычном режиме</h6>
                    </div>

                </div>


            </div>

            <div className='footer-bottom flex items-center justify-between mt-[45px] border-t border-gray-500 py-[20px] '>
                   <p className='text-white'>© ООО «Oner.ru» 2021.</p>
                   <div className='footer-center flex items-center gap-[52px]'>
                        <p className='text-white'>Принимаем к оплате</p>
                       
                        <div className='flex items-center gap-[10px]'>
                        <img src={visa} alt="" />
                        <img src={master} alt="" />
                        <img src={mir} alt="" />
                        </div>


                        <p className='text-white'>Оферта</p>
                        <p className='text-white'>Конфиденциальность</p>
                   </div>
                    <a href="#"> <img src={irbis} alt="" /></a>
            </div>

        </div>
        </section >
    
    
   </>
  )
}

export default Footer