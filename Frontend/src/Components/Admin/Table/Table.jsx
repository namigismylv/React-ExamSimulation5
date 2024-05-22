import React from "react";
import TableItem from "../TableItem/TableItem";

const Table = ({ data }) => {
  return (
    <>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dataItem, index) => {
            return <TableItem key={index} dataItem={dataItem} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
