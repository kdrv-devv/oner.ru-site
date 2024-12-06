import React, { useContext, useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "antd/dist/reset.css";
import { CheckCircleOutlined } from "@ant-design/icons";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import axios from "axios";
import { notification } from "antd";
import { IoMdHeartEmpty } from "react-icons/io";
import { shopAppContext } from "../../../context/save-cart-context";

const AutoOils = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (title) => {
    api.open({
      message: `${title} Added to cart`,
      description: `You can see the product in the cart.`,
      icon: <CheckCircleOutlined style={{ color: "green" }} />,
      style: {
        border: "1px solid #d4edda",
        backgroundColor: "#f6ffed",
        color: "green",
        borderRadius: "10px",
      },
      duration: 1,
    });
  };

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://674a9424868020296634d45d.mockapi.io/autoOils")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const { dispatch } = useContext(shopAppContext);

  return (
    <>
      {contextHolder}
      <section className="auto-oils mt-[120px]">
        <div className="container">
          <div className="auto-oils-top flex items-center justify-between">
            <h3 className="text-[24px] font-normal text-[#1B1D1F]">Автомасла</h3>
            <button className="auto-oil-see rounded-[8px] text-[#6B59CC] text-[14px] font-normal flex gap-2 items-center justify-center">
              Все автомасла
              <FaArrowRightLong style={{ color: "#6B59CC", fontSize: 14 }} />
            </button>
          </div>

          <div className="auto-oil-cards mt-[23px] grid grid-cols-[repeat(4,1fr)] gap-[20px]">
            <div className="oilcard1 h-[470px] p-[30px] rounded-[10px] [box-shadow:0_0_7px_rgb(168,_167,_167)] flex flex-col justify-between">
              <h1 className="font-bold text-[24px] text-white">
                Автомасла №1 от официальных дилеров
              </h1>
            </div>

            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              data.map((value) => (
                <div
                  key={+value.id}
                  className="oil-card relative h-[470px] rounded-[10px] [box-shadow:0_0_7px_rgb(168,_167,_167)] flex flex-col justify-between"
                >
                  <button className="w-[40px] flex items-center justify-center h-[40px] rounded-[100%] bg-[#f3f3f4cb] absolute top-[10px] right-[10px]">
                    <IoMdHeartEmpty style={{ fontSize: 22 }} />
                  </button>

                  <div className="oil-card-top w-full h-[60%] flex items-center p-[20px]">
                    <img
                      className="w-full h-full"
                      src={value.imagie}
                      alt="product"
                    />
                  </div>

                  <div className="oil-card-bottom p-[20px]">
                    <div className="star flex items-center gap-[6px] justify-between">
                      <h6 className="font-normal text-[14px] text-[#7A7680]">
                        {value.action}
                      </h6>
                      <div className="flex items-center gap-[6px]">
                        <FaStar style={{ color: "goldenrod", fontSize: 11 }} />
                        <FaStar style={{ color: "goldenrod", fontSize: 11 }} />
                        <FaStarHalfAlt
                          style={{ color: "goldenrod", fontSize: 11 }}
                        />
                        <p>
                          4.0 <span className="text-[#5f6469]">({+value.id + 10})</span>
                        </p>
                      </div>
                    </div>

                    <h5 className="font-normal text-[16px] text-[#1B1D1F]">
                      {value.name}
                    </h5>

                    <div className="buy-btn flex items-center justify-between">
                      <h5 className="text-[30px]">
                        {value.price_current}
                        <sup className="text-[16px] text-[#7A7680]">
                          {value.price_current + 500}
                        </sup>
                      </h5>
                      <button
                        onClick={() => {
                          openNotification(value.title);
                          dispatch({ type: "add", value });
                        }}
                        className="BUY_BUTTON w-[40px] h-[40px] bg-[#6B59CC] rounded-[8px] flex items-center justify-center hover:bg-[#3b27ae]"
                      >
                        <IoCartOutline style={{ color: "white", fontSize: 16 }} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AutoOils;
