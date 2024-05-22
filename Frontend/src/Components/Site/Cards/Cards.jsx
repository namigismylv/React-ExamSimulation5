import React, { useContext, useState } from "react";
import Card from "../Card/Card";
import MainContext from "../../../Context/Context";

const Cards = ({data}) => {
  const {search,setSearch}=useContext(MainContext)
  const {sortBy,setSortBy} =useContext(MainContext)
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Search"  value={search} onChange={(e)=>setSearch(e.target.value)}/>
          </div>
        </div>
        <div className="row">
        {
            data.map((homeDataItem,index)=>{
                return(
                    <Card homeDataItem={homeDataItem} key={index}/>
                )
            })
        }
        </div>
      </div>
    </>
  );
};

export default Cards;
