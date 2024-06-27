"use client"
import { addUser } from '@/app/redux/slice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddUser = () => {
  const [name,setName] = useState(""); 
  const dispatch = useDispatch()
  const userDispatch=()=>{
     dispatch(addUser(name))
  }
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-4/5 p-4 bg-white border border-black rounded-lg">
        <div className="p-2">
          <h3 className="font-bold text-xl mb-4">Add User</h3>
          <input
             onChange={(e)=>setName(e.target.value)}
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="User Name"
          />
          <button onClick={userDispatch} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
