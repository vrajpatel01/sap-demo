import React from "react";
import Navbar from "./components/Navbar";
import { useAuthUser } from "react-auth-kit";

import { BiSolidHomeHeart } from 'react-icons/bi';
import { MdBloodtype } from 'react-icons/md';
import { IoSchool } from 'react-icons/io5';
import Logout from "./components/Logout";

const AboutMe = () => {
  const auth = useAuthUser();
  const data = auth().data;
  return (
    <div className="max-w-[800px] mx-auto">
      <div className="mt-10 flex justify-start items-center space-y-5 flex-col">
        <img className="w-16 h-16 rounded-full ring-4" src={`/api/image/${data.file}`} alt="profile" /> <span className="capitalize text-2xl font-josefin text-[#2b2b2b]">{data.firstName} {data.lastName}</span>
      </div>
      <div className="text-center text-xl mt-10 text-[#2b2b2b]">
        {data.about}
      </div>

      <div className='flex justify-center items-center flex-col gap-3 mt-10'>
        <div className="flex space-x-3">
          <div className='flex justify-center items-center space-x-2 text-2xl p-3 rounded-md bg-slate-200 whitespace-nowrap'>
            <BiSolidHomeHeart /> <span>{data.address}</span>
          </div>
          <div className='flex justify-center items-center space-x-2 text-2xl p-3 bg-slate-200 rounded-md max-w-min whitespace-nowrap'>
            <MdBloodtype /> <span>{data.bloodGroup}</span>
          </div>
        </div>
        <div className="flex space-x-3">
          <div className='flex justify-center items-center space-x-2 text-2xl p-3 bg-slate-200 rounded-md max-w-min whitespace-nowrap'>
            <IoSchool /> <span>{data.schoolName}</span>
          </div>
          <div className='flex justify-center items-center space-x-2 text-2xl p-3 bg-slate-200 rounded-md max-w-min whitespace-nowrap'>
            <IoSchool /> <span>{data.collageName}</span>
          </div>
        </div>
        <div className='flex justify-center items-center space-x-2 text-2xl p-3 bg-slate-200 rounded-md max-w-min whitespace-nowrap'>
          <IoSchool /> <span>{data.education}</span>
        </div>
      </div>

      <Logout />
      <Navbar />
    </div>
  );
};

export default AboutMe;
