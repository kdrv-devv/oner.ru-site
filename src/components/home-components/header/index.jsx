import React from 'react'
import { RiTelegramLine } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import headerLogo from "./imges/header-logo-svg.svg"
import { IoCart } from "react-icons/io5";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";



const Header = () => {
  return (
        <>  
        <header>
            <div className="container ">
                <div className="header-top  flex items-center justify-between p-[10px] border-b border-gray-200">
                    <nav className="header-location flex items-center gap-2">
                        <button ><RiTelegramLine style={{color:"#7A7680" ,fontSize:20}} /></button>
                        <a href="#" className=' text-[12px] border-bott text-[#1B1D1F] font-normal '>г. Нижний Новгород, Нижегородская обл.</a>
                    </nav>

                    <nav className="header-number flex items-center gap-[10px]">
                    <FaPhone style={{color:"#7A7680" , fontSize:16}} />
                    <a className=' font-normal text-[#1B1D1F] text-[16px]' href="tell:+998979661575">+7 (347) 229-46-45</a>
                    </nav>

                    <nav className="pages flex items-center gap-[20px] text-[12px]">
                        <Link to={"/"}> <h3 className='font-normal text-[#55556D]'>Доставка</h3> </Link>
                        <Link to={"/korzinka"}> <h3 className='font-normal text-[#55556D]'>Корзина</h3> </Link>
                        <Link to={"/"}> <h3 className='font-normal text-[#55556D]'>Контакты</h3> </Link>
                    </nav>

                </div>

                <div className='header-center py-2 flex items-center justify-between'>
                    <div className="header-search flex items-center gap-[28px] w-[60%] ">
                        <img src={headerLogo} alt="header-logo" className='w-[20%]' />
                        <form action="" className='w-[75%] border-[1px] border-[solid] rounded-[6px] border-[#DEDEE2]  flex justify-between items-center'>
                            <input  type="text" placeholder='Введите номер запчасти или VIN' className='w-[80%] h-[44px] text-[14px] text-[#505255] font-normal border-none outline-none bg-transparent p-[5px]' />
                            <button className='w-[20%] h-[44px] rounded-[0_6px_6px_0] flex items-center justify-center gap-[5px] text-white  bg-[#5946D7]'><IoSearch style={{color:"white",fontSize:16}} /> Искать</button>
                        </form>
                    </div>
                    <div className='registratsiya flex items-center gap-[30px]'>
                        <div>
                            <Link to={"/login"} className='flex items-center justify-center gap-[10px]'><FaRegUser style={{color:"#6B59CC", fontSize:20}} />  <h5 className='text-[14px] text-[#000000] font-normal'>Вход  /  Регистрация</h5></Link>
                        </div>

                        <button className='korzinka-button  flex items-center justify-center gap-2 p-[10px]'>
                            <MdOutlineShoppingCart style={{color:'#410F9E', fontSize:19}} />
                            <h6 className='font-normal text-[14px] text-black'>Корзина</h6>
                            <h6 className='flex w-[20px] h-[20px] rounded-[5px] bg-[#FB6019] text-white text-[10px] items-center justify-center'>5</h6>
                        </button>
                        
                    </div>



                </div>


                <nav className='header-bottom flex items-center gap-[36px]  py-[15px]'>
                        
                            <button className=' flex rounded-[8px] items-center justify-center gap-[10px] w-[152px] h-[44px] bg-[#5946D7] '>
                                <BsGrid3X3GapFill style={{color:"white", fontSize:17}} />
                                <h6 className='text-white text-[14px] font-normal'> Все категории</h6>
                            </button>

                            <button className='p-[12px] h-[44px] text-[14px] text-[#1B1D1F] font-normal bg-[#F4F5F6] rounded-[8px]'>Запчасти для ТО</button>
                            <button className='p-[12px] h-[44px] text-[14px] text-[#1B1D1F] font-normal bg-[#F4F5F6] rounded-[8px]'>Автомасла</button>
                            <button className='p-[12px] h-[44px] text-[14px] text-[#1B1D1F] font-normal bg-[#F4F5F6] rounded-[8px]'>Оригинальные запчасти</button>
                            <button className='p-[12px] h-[44px] text-[14px] text-[#1B1D1F] font-normal bg-[#F4F5F6] rounded-[8px]'>Неоригинальные запчасти</button>
                            <button className='p-[12px] h-[44px] text-[14px] text-[#1B1D1F] font-normal bg-[#F4F5F6] rounded-[8px]'>Лампочки</button>
                            <button className='p-[12px] h-[44px] text-[14px] text-[#1B1D1F] font-normal bg-[#F4F5F6] rounded-[8px]'>Аккумуляторы</button>
                        
                </nav>


            </div>
        </header>


        </>
  )
}

export default Header