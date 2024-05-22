import React, { useContext, useState } from "react";
import MainContext from "../../../Context/Context";
import Cards from "../../../Components/Site/Cards/Cards";
import { Helmet } from "react-helmet";

const Home = () => {
  const { data, setData, search,sortBy,setSortBy } = useContext(MainContext);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <main>
        <section id="moda">
          <div className="moda__div">
            <Cards
              data={data.filter((x) =>
                x.title.toLowerCase().includes(search.toLowerCase())
              )}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
