import React, { useContext } from "react";
import TableItem from "../../Admin/TableItem/TableItem";
import MainContext from "../../../Context/Context";

const BasketTableItem = ({ basketItem, index }) => {
  const { deleteFromBasket } = useContext(MainContext);
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>
        <img src={basketItem.item.image} width="80px" alt="" />
      </td>
      <td>{basketItem.item.title}</td>
      <td>{basketItem.item.desc}</td>
      <td>
        <button className="btn btn-danger" onClick={()=>deleteFromBasket(basketItem.item)}>Delete</button>
      </td>
    </tr>
  );
};

export default BasketTableItem;
