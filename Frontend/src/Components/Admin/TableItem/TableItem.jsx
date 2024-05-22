import axios from "axios";
import React, { useContext } from "react";
import MainContext from "../../../Context/Context";

const TableItem = ({ dataItem }) => {
  const { setData } = useContext(MainContext);
  return (
    <>
      <tr>
        <th scope="row">{dataItem._id}</th>
        <td>
          <img src={dataItem.image} width="80px" alt="" />
        </td>
        <td>{dataItem.title}</td>
        <td>{dataItem.desc}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() =>
              axios
                .delete(`http://localhost:4000/moda/${dataItem._id}`)
                .then((res) => {
                  setData([...res.data]);
                })
            }
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableItem;
