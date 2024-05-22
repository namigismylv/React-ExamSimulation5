import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Detail = () => {
  const {id} = useParams()
  const [item,setItem]= useState({})
  useEffect(()=>{
    axios.get(`http://localhost:4000/moda/${id}`).then(res=>{
    setItem(res.data)
    console.log(res.data);
    })
  },[])
  return (
    <div className='detail'> 
    <div className="container">
      <div className="row">
      <div className="col-6">
        <img src={item.image} width="400px" alt="" />
      </div>
      <div className="col-6">
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
      </div>
    </div>

      </div>
    </div>
  )
}

export default Detail