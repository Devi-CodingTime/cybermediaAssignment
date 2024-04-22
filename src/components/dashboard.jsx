import React, { useEffect, useState } from 'react'
import Barchart from './barchart'

function Dashboard({name,img}) {
    const access_Token = "EAAN038CW9FUBO3N6F6o77ONIeYB7TW5sTTDYiZANJTAxuV1T9sJ12niOlFoSRLMhx8GQ6YiahkEAcCpbLsRgDKt2xAsFjsw9EXfHOrjMbWSBBZCZBThZBM5Qjdku7pCw2uAy7pmMGHRrN3wd5H9EbeHWMkzGuacJ3UZAiOLX38xNVoLjN7BYHlWyD"
    const [userPosts, setUserPosts] = useState([]);

    // Function to fetch user's posts
    const fetchUserPosts = async () => {
      try {
        const res = await fetch(`https://graph.facebook.com/v19.0/me/posts?access_token=${access_Token}`);
        const response = await res.json();
        console.log("ok", response);
        setUserPosts(response?.data);
      } catch (error) {
        console.error('Error fetching user posts:', error);
      }
    };
    useEffect(()=>{
        fetchUserPosts();
    },[]);
    return (
    <div classname="text-red-500">
  <div className="bg-gray-800 text-gray-100 p-4 w-full flex justify-between">
    <div classname="flex flex-col justify-center items-center">
      <img
        src={img} alt="profileimg" classname="h-40 w-40 rounded-full border border-solid "
      />
    </div>
    <h2 className="py-2 px-4 hover:bg-gray-700 font-bold text-2xl">
      {name}'s Dashboard
    </h2>

  </div>
  <main className="p-4 m-auto pt-3">
    <div className="flex justify-evenly w-full">
    <div className="bg-white p-6 rounded-lg shadow-md  w-[20%]">
        <h2 className="text-lg font-semibold mb-2">Total Posts</h2>
        <p className="text-3xl font-bold">{userPosts?.length}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md w-[20%]">
        <h2 className="text-lg font-semibold mb-2">Total Likes</h2>
        <p className="text-3xl font-bold">500</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md  w-[20%]">
        <h2 className="text-lg font-semibold mb-2">Total Reactions</h2>
        <p className="text-3xl font-bold">100</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md  w-[20%]">
        <h2 className="text-lg font-semibold mb-2">Total Comments</h2>
        <p className="text-3xl font-bold">200</p>
        
      </div>
      
      
    </div>
  </main>
        
    <Barchart/>
  
</div>
  )
}

export default Dashboard
