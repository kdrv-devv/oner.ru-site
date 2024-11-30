import React, { useEffect, useState } from "react";
import item1 from "./imges/item1.svg";
import item2 from "./imges/item2.svg";
import axios from "axios";
const Category = () => {
  const [data, setData] = useState([]);
  const [error, setEror] = useState(null);

  useEffect(() => {
    axios
      .get("https://backend-oner.vercel.app/categories")
      .then((data) => setData(data.data))
      .catch((error) => setEror(error));
  }, []);

  return (
    <>
      <section className="category mt-[60px]">
        <div className="container gap-[0px] grid grid-cols-[repeat(3,1fr)]">
          {data.map((value) => (
            <div
              key={value.id}
              className="category-item    p-[20px] rounded-[5px]   h-[100px] flex items-center gap-[22px] [transition:0.6]  [box-shadow:0_0_2px_rgb(168,_167,_167)] hover:[box-shadow:0_0_5px_rgb(168,_167,_167)]"
            >
              <img src={item1} alt="" />
              <div className="flex flex-col gap-[7px] w-full">
                <h5 className="font-normal text-[16px] text-[#1B1D1F]">
                  {value.name}
                </h5>
                <p className="font-normal text-[12px]  text-[#55556D]">
                  {value.products_count}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Category;
