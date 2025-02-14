import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
  <img
    className="w-[250px] h-[250px] border rounded-lg ml-4 lgl:w-[400px] lgl:h-[500px] z-10"
    src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
    alt="bannerImg"
  /> 
</div>

  );
}

export default RightBanner