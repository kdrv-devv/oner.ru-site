import React from "react";
import { RiTelegramLine } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import headerLogo from "./imges/header-logo-svg.svg";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";
import { Modal } from "antd";
import moreImg from "./imges/Group.png";
import moreCategory from "./imges/more-category.png";
import { Drawer } from 'antd';
const Header = () => {
  const [open, setOpen] = useState(false);

  const [openn, setOpenn] = useState(false);
  const showDrawer = () => {
    setOpenn(true);
  };
  const onClose = () => {
    setOpenn(false);
  };


  return (
    <>
      {/* mdoal  */}
      <>
        <Modal
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={"90%"}
          footer={null}
        >
          <div className="more-category w-full h-[230px] flex justify-between   ">
            <div className="more-category-items  gap-4 grid grid-cols-[repeat(3,4fr)]  ">
              {Array(11)
                .fill(null)
                .map((_, index) => (
                  <div className="more-category-item p-4 w-[330px] h-[45px] flex items-center gap-5 cursor-pointer rounded-[4px]">
                    <img
                      className="w-[30px] h-[30px]"
                      src={moreImg}
                      alt="img"
                    />
                    <p className="font-normal text-[14px] text-black">
                      Кузовные запчасти
                    </p>
                  </div>
                ))}
            </div>

            <div className=" w-[18%] h-full">
              <img
                className="w-full h-full rounded-[5px]"
                src={moreCategory}
                alt="more categoiry img"
              />
            </div>
          </div>
        </Modal>
      </>
      {/* modal */}

      <header className="sticky top-[0] left-[0%] z-20 bg-white">
        <div className="container bg-white ">
          <div className="header-top bg-white  flex items-center justify-between p-[10px] border-b border-gray-200">
            <nav className="header-location flex items-center gap-2">
              <button>
                <RiTelegramLine style={{ color: "#7A7680", fontSize: 20 }} />
              </button>
              <a
                href="#"
                className=" text-[12px] border-bott text-[#1B1D1F] font-normal "
              >
                г. Нижний Новгород, Нижегородская обл.
              </a>
            </nav>

            <nav className="header-number flex items-center gap-[10px]">
              <FaPhone style={{ color: "#7A7680", fontSize: 16 }} />
              <a
                className=" font-normal text-[#1B1D1F] text-[16px]"
                href="tell:+998979661575"
              >
                +7 (347) 229-46-45
              </a>
            </nav>

            <nav className="pages flex items-center gap-[20px] text-[12px]">
              <Link to={"/"}>
                {" "}
                <h3 className="font-normal text-[#55556D]">Доставка</h3>{" "}
              </Link>
              <Link to={"/korzinka"}>
                {" "}
                <h3 className="font-normal text-[#55556D]">Корзина</h3>{" "}
              </Link>
              <Link to={"/"}>
                {" "}
                <h3 className="font-normal text-[#55556D]">Контакты</h3>{" "}
              </Link>
            </nav>
          </div>

          <div className="header-center py-2 flex items-center justify-between">
            <div className="header-search flex items-center gap-[28px] w-[60%] ">
              <img src={headerLogo} alt="header-logo" className="w-[20%]" />
              <form
                action=""
                className="w-[75%] border-[1px] border-[solid] rounded-[6px] border-[#DEDEE2]  flex justify-between items-center"
              >
                <input
                  type="text"
                  placeholder="Введите номер запчасти или VIN"
                  className="w-[80%] h-[44px] text-[14px] text-[#505255] font-normal border-none outline-none bg-transparent p-[5px]"
                />
                <button className="w-[20%] h-[44px] rounded-[0_6px_6px_0] flex items-center justify-center gap-[5px] text-white  transition-all bg-[#5946D7] hover:bg-[#362988]">
                  <IoSearch style={{ color: "white", fontSize: 16 }} /> Искать
                </button>
              </form>
            </div>
            <div className="registratsiya flex items-center gap-[30px]">
              <div>
                <Link
                  to={"/login"}
                  className="flex items-center justify-center gap-[10px]"
                >
                  <FaRegUser style={{ color: "#6B59CC", fontSize: 20 }} />{" "}
                  <h5 className="text-[14px] text-[#000000] font-normal">
                    Вход / Регистрация
                  </h5>
                </Link>
              </div>

              <button  onClick={showDrawer} className="korzinka-button  flex items-center justify-center gap-2 p-[10px]">
                <MdOutlineShoppingCart
                  style={{ color: "#410F9E", fontSize: 19 }}
                />
                <h6 className="font-normal text-[14px] text-black">Корзина</h6>
                <h6 className="flex w-[20px] h-[20px] rounded-[5px] bg-[#FB6019] text-white text-[10px] items-center justify-center">
                  0
                </h6>
              </button>
            </div>
          </div>

          <nav className="header-bottom flex items-center gap-[36px]  py-[15px]">
            <button
              onClick={() => setOpen(true)}
              className=" flex rounded-[8px] items-center justify-center gap-[10px] w-[152px] h-[44px] transition-all bg-[#5946D7] hover:bg-[#362988] "
            >
              <BsGrid3X3GapFill style={{ color: "white", fontSize: 17 }} />
              <h6 className="text-white text-[14px] font-normal">
                {" "}
                Все категории
              </h6>
            </button>

            <button className="p-[12px] h-[44px] text-[14px] text-[#1B1D1F] font-normal bg-[#F4F5F6] rounded-[8px] transition-all hover:bg-[#e6e7f0]">
              Запчасти для ТО
            </button>
            <button className="p-[12px] h-[44px] text-[14px] text-[#1B1D1F] font-normal bg-[#F4F5F6] rounded-[8px] transition-all hover:bg-[#e6e7f0]">
              Автомасла
            </button>
            <button className="p-[12px] h-[44px] text-[14px] text-[#1B1D1F] font-normal bg-[#F4F5F6] rounded-[8px] transition-all hover:bg-[#e6e7f0]">
              Оригинальные запчасти
            </button>
            <button className="p-[12px] h-[44px] text-[14px] text-[#1B1D1F] font-normal bg-[#F4F5F6] rounded-[8px] transition-all hover:bg-[#e6e7f0]">
              Неоригинальные запчасти
            </button>
            <button className="p-[12px] h-[44px] text-[14px] text-[#1B1D1F] font-normal bg-[#F4F5F6] rounded-[8px] transition-all hover:bg-[#e6e7f0]">
              Лампочки
            </button>
            <button className="p-[12px] h-[44px] text-[14px] text-[#1B1D1F] font-normal bg-[#F4F5F6] rounded-[8px] transition-all hover:bg-[#e6e7f0]">
              Аккумуляторы
            </button>
          </nav>
        </div>
      </header>

      <Drawer title="Корзина" onClose={onClose} open={openn}>
          <h4 className="w-[90%]">Mashetta maxsulotlar bo'ladi kelajakda </h4>
      </Drawer>


    </>
  );
};

export default Header;
