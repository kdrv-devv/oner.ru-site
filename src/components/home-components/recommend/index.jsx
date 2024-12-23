import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import 'antd/dist/reset.css';
import { notification, Skeleton } from 'antd';
import { IoCartOutline } from "react-icons/io5";
import { CheckCircleOutlined } from '@ant-design/icons';
import { IoMdHeartEmpty } from "react-icons/io";
import { shopAppContext } from "../../../context/save-cart-context";

const Recommend = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (title) => {
    api.open({
      key: 'updatable',
      message: `Артикул: ${title} Added to cart`,
      description: `You can see the product in the cart.`,
      icon: <CheckCircleOutlined style={{ color: 'green' }} />, // Yashil tasdiq belgisi
      style: {
        border: '1px solid #d4edda',
        backgroundColor: '#f6ffed',
        color: 'green',
        borderRadius: "10px",
      },
      duration: 1,
    });
  };

  useEffect(() => {
    axios
      .get("https://backend-oner.vercel.app/recomemded")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => setError(error.message));
  }, []);

  const { dispatch } = useContext(shopAppContext);

  return (
    <>
      {contextHolder}
      <div className="container pt-[60px]">
        <h5 className="font-bold text-[24px] text-[#1B1D1F]">Рекомендуем</h5>
        <div className="auto-oil-cards mt-[23px] grid grid-cols-[repeat(4,1fr)] gap-[20px]">
          {data.map((value) => (
            <div
              key={value.article}
              className="oil-card h-[470px] relative rounded-[10px] [box-shadow:0_0_7px_rgb(168,_167,_167)] flex flex-col justify-between"
            >
              <>
                <button className="w-[40px] flex items-center justify-center h-[40px] rounded-[100%] bg-[#f3f3f4cb] absolute top-[10px] right-[10px]">
                  <IoMdHeartEmpty style={{ fontSize: 22 }} />
                </button>
                <div className="oil-card-top w-full h-[60%] flex items-center p-[20px]">
                  <img className="w-full h-full" src={value.imagie} alt="img" />
                </div>
              </>
              <>
                <div className="oil-card-bottom p-[20px]">
                  <div className="star flex items-center gap-[6px] justify-between">
                    <h6 className="font-normal w-[40%] text-[14px] text-[#7A7680]">
                      {`Артикул:${value.article}`}
                    </h6>
                    <div className="flex items-center gap-[6px]">
                      <FaStar style={{ color: "goldenrod", fontSize: 11 }} />
                      <FaStar style={{ color: "goldenrod", fontSize: 11 }} />
                      <FaStar style={{ color: "goldenrod", fontSize: 11 }} />
                      <FaStar style={{ color: "goldenrod", fontSize: 11 }} />
                      <FaStarHalfAlt style={{ color: "goldenrod", fontSize: 11 }} />
                      <p>
                        4.0 <span className="text-[#5f6469]">({value.reviews})</span>
                      </p>
                    </div>
                  </div>
                  <h5 className="font-normal text-[16px] text-[#1B1D1F]">{value.name}</h5>
                  <div className="buy-btn flex items-center justify-between">
                    <h5 className="text-[30px]">
                      {value.price_current}{" "}
                      <sup className="text-[16px] text-[#7A7680]">{value.price_old}</sup>
                    </h5>
                    <button
                      onClick={() => {
                        openNotification(value.article);
                        dispatch({ type: "add", value });
                      }}
                      className="w-[40px] transition-all h-[40px] bg-[#6B59CC] rounded-[8px] flex items-center justify-center hover:bg-[#3b27ae]"
                    >
                      <IoCartOutline style={{ color: "white", fontSize: 16 }} />
                    </button>
                  </div>
                </div>
              </>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Recommend;
