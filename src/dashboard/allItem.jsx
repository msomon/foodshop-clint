import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import CartItem from '../hooks/CartItem';
import axios from 'axios';
import useAxiosSecure from '../hooks/useAxiosSecure';

const  AllItem= ({food,refetch }) => {
  const axiosSecure = useAxiosSecure()

    const {_id,name,image,price,description} = food ;
   

    const DeleteFromItems =(item)=>{
    
      axiosSecure.delete(`/deleteitem/${item._id}`)
                     .then( res =>{
        
                      if(res.data){
                        toast.success(`${item.name} Delete successfully`)
                      refetch()
                      } }   )
      
          }




    return (

    <div className="foodCart card card-compact w-[320px] lg:w-[350px] bg-base-100 shadow-xl justify-center items-center mx-auto">
      
  <figure><img className='h-60 w-60 rounded-lg mt-2' src={image} alt="Shoes" /></figure>
  <div className="card-body justify-center text-center">
    <h2 className="text-2xl">{name}</h2>
    <p>{description}</p>
    <h1 className="text-xl">${price}</h1>
    <div className="card-actions justify-center ">
      <button onClick={()=> DeleteFromItems(food)}   className="btn cartBtn">Delete</button>
    </div>
  </div>
</div>
    );
};

export default AllItem;