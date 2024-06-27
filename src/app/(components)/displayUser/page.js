"use client"
import react from "react";
import { useSelector } from "react-redux";

const DisplayPage =()=>{
  const userData = useSelector((data) => data.users);
  console.log(userData); // Check the structure here
    return (
        <div className="flex items-start justify-center min-h-screen">
        <div className="w-4/5 min-h-full border border-black p-2 rounded-lg">
          <div className=" flex flex-col justify-between">
            <div className="mb-4">
              <h3 className="font-bold">Display User</h3>
            </div>
            {userData.map((item) => (
            <div key={item.name}> {/* Add key prop here */}
              {item.name} {/* Ensure only the name is rendered */}
            </div>
          ))}
           
          </div>
        </div>
      </div>
    )
}

export default DisplayPage