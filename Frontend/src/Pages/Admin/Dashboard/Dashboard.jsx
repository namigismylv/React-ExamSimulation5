import React, { useContext } from "react";
import MainContext from "../../../Context/Context";
import Table from "../../../Components/Admin/Table/Table";

const Dashboard = () => {
  const { data } = useContext(MainContext);
  return (
    <>
      <Table data={data} />
    </>
  );
};

export default Dashboard;
