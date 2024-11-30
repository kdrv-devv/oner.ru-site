import React, { useEffect } from "react";
const Showcase = () => {


  return (
    <>
      <section className="showcase">
        <div className="container">
            <div className="showcase1 w-full h-[420px] rounded-[20px] flex flex-col gap-5 justify-center pl-[60px] text-white">

                    <h5 className="font-bold text-[40px]">Оригинальные автомасла <br />
                    cо скидкой  <span className="inline-block bg-[#FB5C2A] rounded-[10px] py-[0] px-[10px]  ">15% </span> </h5>
                    <h6 className="font-normal text-[18px] text-white">Акция действует с 1 по 30 июня 2021</h6>

             </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
