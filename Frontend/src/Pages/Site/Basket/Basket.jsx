import React, { useContext } from "react";
import MainContext from "../../../Context/Context";
import BasketTable from "../../../Components/Site/BasketTable/BasketTable";

const Basket = () => {
  const { basketItems, setBasketItems } = useContext(MainContext);
  return (
    <>
      <div className="basket">
        <BasketTable basketItems={basketItems}/>
      </div>
    </>
  );
};

export default Basket;
