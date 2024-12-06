import React, { useContext } from 'react';
import { shopAppContext } from '../../../context/save-cart-context';

const ReceivedProducts = () => {
  const { state, dispatch } = useContext(shopAppContext);

  return (
    <div className="products w-[90%] m-auto min-h-[300px]">
      {state?.data?.length > 0 ? (
        state.data.map((item) => (
          <div
            key={item.id} // Har bir element uchun unik "key" atributi
            className="product-item flex items-center justify-around"
          >
            <div className="product-img w-[30%] h-[100px]">
              <img
                className="h-[80%] w-[100px]"
                src={item.imagie}
                alt="Rasm bor qisqasi"
              />
            </div>

            <h4 className="text-[1.25rem] text-[black] w-[40%]">{item.name}</h4>

            <div className="product-buttons flex items-center gap-9">
              <div className="plus-minus-button flex items-center gap-6">
                <button className="text-[30px]">-</button>
                <span>{item.count}</span>
                <button className="text-[30px]">+</button>
              </div>
              <button
                onClick={() => {
                  dispatch({ type: 'delete', idd: item.id });
                }}
                className="w-[70px] h-[30px] text-white bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-[4rem] text-gray-500">No products available.</p> // Agar mahsulotlar bo'lmasa
      )}
    </div>
  );
};

export default ReceivedProducts;
