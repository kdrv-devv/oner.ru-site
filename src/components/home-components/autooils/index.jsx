import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import img from "./imges/imh1.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const AutoOils = () => {
  return (
    <>
      <section className="auto-oils  ">
        <div className="container">
          <div className="auto-oils-top ">
            <h3>Автомасла</h3>
            <button>
              Все автомасла <FaArrowRightLong />
            </button>
          </div>

          <div className="auto-oil-cards   ">
            <div className="oil-card rounded-[10px] [box-shadow:0_0_7px_rgb(168,_167,_167)]  w-[23%] border-[1px] border-[solid] border-[black">
              <div className="oil-card-top w-full h-[75%]  flex items-center p-[20px]">
                <img className="w-full h-full" src={img} alt="img" />
              </div>
              <div className="oil-card-bottom p-[20px] ">
                <div className="star flex items-center gap-[6px] justify-between">
                  <h6 className=" font-normal text-[14px] text-[#1C1D1E]">
                    Артикул: 153789
                  </h6>
                  <div className="flex items-center gap-[6px]">
                    <FaStar style={{ color: "goldenrod", fontSize: 11 }} />
                    <FaStar style={{ color: "goldenrod", fontSize: 11 }} />
                    <FaStar style={{ color: "goldenrod", fontSize: 11 }} />
                    <FaStar style={{ color: "goldenrod", fontSize: 11 }} />
                    <FaStarHalfAlt
                      style={{ color: "goldenrod", fontSize: 11 }}
                    />
                    <p>4.0 (51)</p>
                  </div>
                </div>
                <h5 className="font-normal text-[16px]  text-[#1B1D1F]">
                  Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.
                </h5>

                <div className="buy-btn flex items-center justify-between ">
                  <h5>
                    2 334 ₽ <sup>2 864 ₽</sup>
                  </h5>
                  <button className="w-[40px] h-[40px] bg-[#6B59CC] rounded-[8px] flex items-center justify-center">
                    <IoCartOutline style={{color:"white" , fontSize:16}} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AutoOils;
