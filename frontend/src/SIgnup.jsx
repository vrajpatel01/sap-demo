import React, { useDebugValue } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

import { HiOutlineMail } from 'react-icons/hi';
import { CgLastpass } from 'react-icons/cg';
import { BiUser } from 'react-icons/bi';
import { SlGraph } from 'react-icons/sl';
import { BsGenderMale } from 'react-icons/bs';
import { MdBloodtype } from 'react-icons/md';
import { AiOutlinePhone, AiOutlineHome, AiOutlineHeart } from 'react-icons/ai';
import { IoSchoolOutline } from 'react-icons/io5';
import { SiAboutdotme } from 'react-icons/si';
import { IoIosArrowBack } from 'react-icons/io';
import { PiCameraBold } from 'react-icons/pi';
import { FcAddImage } from 'react-icons/fc';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast'


const SIgnup = () => {
    const [tab, setTab] = useState(1);

    let file;
    const [userName, setUserName] = useState();
    const [firstName, setFistName] = useState();
    const [middleName, setMiddleName] = useState();
    const [lastName, setLastName] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [bloodGroup, setBloodGroup] = useState();
    const [address, setAddress] = useState();
    const [school, setSchool] = useState();
    const [collage, setCollage] = useState();
    const [about, setAbout] = useState();
    const [hobby, setHobby] = useState();
    const [education, setEducation] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [image, setImage] = useState();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (userName === undefined || middleName === undefined || lastName === undefined || firstName === undefined || age === undefined || gender === undefined || bloodGroup === undefined || address === undefined || school === undefined || collage === undefined || about === undefined || hobby === undefined || education === undefined || email === undefined || phone === undefined || password === undefined || confirmPassword === undefined || image === undefined) {
            toast.error("Please fill all field")
        }

        const data = new FormData();
        data.append("userName", userName);
        data.append("firstName", firstName);
        data.append("middleName", middleName);
        data.append("lastName", lastName);
        data.append("age", age);
        data.append("gender", gender);
        data.append("bloodGroup", bloodGroup);
        data.append("address", address);
        data.append("schoolName", school);
        data.append("collageName", collage);
        data.append("about", about);
        data.append("hobby", hobby);
        data.append("education", education);
        data.append("email", email);
        data.append("phone", phone);
        data.append("password", password);
        data.append("confirmPassword", confirmPassword);
        data.append("file", image);

        const config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `/api/user`,
            data
        }
        // const res = await axios.request(config)
        //     .catch(function (error) {
        //         console.log(error);
        //     });

        axios.request(config)
            .then((response) => {
                console.log(response.data);
                toast.success(response.data.message);
            })
            .catch((error) => {
                console.log(error.response);
            });

        // console.log(res);
    }
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='bg-white p-6 rounded-md shadow-md divide-y space-y-8'>
                <form onSubmit={handleFormSubmit} className="flex justify-center items-center flex-col space-y-4">
                    <h1 className='text-3xl text-[#2b2b2b] font-medium text-center mb-4'>Sign up</h1>
                    <div className='flex justify-between items-center w-full'>
                        {tab !== 1 ? <IoIosArrowBack onClick={() => setTab(tab - 1)} className='p-2 bg-blue-100 rounded-full text-4xl cursor-pointer text-[#2b2b2b]' /> : <div></div>}
                        {`${tab} | 6`}
                    </div>

                    {
                        tab === 1 ? <div className='space-y-4'>
                            {/* username */}
                            <div className='space-y-2'>
                                <div className='flex justify-start items-center space-x-2'>
                                    <BiUser />
                                    <p className='tex-[#2b2b2b]'>Profile Unique name</p>
                                </div>
                                <input onChange={(e) => setUserName(e.target.value)} className='outline-none ring-2 bg-slate-50 rounded-sm px-4 py-3 min-w-[350px]' type="text" name="username" id="username" placeholder='username' />
                            </div>
                            {/* first name */}
                            <div className='space-y-2'>
                                <div className='flex justify-start items-center space-x-2'>
                                    <BiUser />
                                    <p className='tex-[#2b2b2b]'>First name</p>
                                </div>
                                <input onChange={(e) => setFistName(e.target.value)} className='outline-none ring-2 bg-slate-50 rounded-sm px-4 py-3 min-w-[350px]' type="text" name="username" id="username" placeholder='your name' />
                            </div>
                            {/* middle name */}
                            <div className='space-y-2'>
                                <div className='flex justify-start items-center space-x-2'>
                                    <BiUser />
                                    <p className='tex-[#2b2b2b]'>Middle name</p>
                                </div>
                                <input onChange={(e) => setMiddleName(e.target.value)} className='outline-none ring-2 bg-slate-50 rounded-sm px-4 py-3 min-w-[350px]' type="text" name="username" id="username" placeholder='father name' />
                            </div>
                            {/* last name */}
                            <div className='space-y-2'>
                                <div className='flex justify-start items-center space-x-2'>
                                    <BiUser />
                                    <p className='tex-[#2b2b2b]'>Last name</p>
                                </div>
                                <input onChange={(e) => setLastName(e.target.value)} className='outline-none ring-2 bg-slate-50 rounded-sm px-4 py-3 min-w-[350px]' type="text" name="username" id="username" placeholder='surname' />
                            </div>

                        </div> : null
                    }

                    {
                        tab === 3 ? <div className='space-y-4'>
                            {/* age */}
                            <div className='space-y-2'>
                                <div className='flex justify-start items-center space-x-2'>
                                    <SlGraph />
                                    <p className='tex-[#2b2b2b]'>Age</p>
                                </div>
                                <input onChange={(e) => setAge(e.target.value)} className='outline-none ring-2 bg-slate-50 rounded-sm px-4 py-3 min-w-[350px]' type="date" name="username" id="username" placeholder='32' />
                            </div>

                            {/* gender */}
                            <div className='space-y-2'>
                                <div className='flex justify-start items-center space-x-2'>
                                    <BsGenderMale />
                                    <p className='tex-[#2b2b2b]'>Gender</p>
                                </div>
                                <select onChange={(e) => setGender(e.target.value)} className='outline-none ring-2 bg-slate-50 rounded-sm px-4 py-3 min-w-[350px]'>
                                    <option default value="select">select</option>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </select>
                            </div>

                            {/* blood group */}
                            <div className='space-y-2'>
                                <div className='flex justify-start items-center space-x-2'>
                                    <MdBloodtype />
                                    <p className='tex-[#2b2b2b]'>Blood group</p>
                                </div>
                                <input onChange={(e) => setBloodGroup(e.target.value)} className='outline-none ring-2 bg-slate-50 rounded-sm px-4 py-3 min-w-[350px]' type="text" name="username" id="username" placeholder='B+' />
                            </div>

                        </div> : null
                    }

                    {
                        tab === 2 ? <div className='space-y-4'>
                            {/* email */}
                            <div className='space-y-2'>
                                <div className='flex justify-start items-center space-x-2'>
                                    <HiOutlineMail />
                                    <p className='tex-[#2b2b2b]'>Email Address</p>
                                </div>
                                <input onChange={(e) => setEmail(e.target.value)} className='outline-none ring-2 bg-slate-50 rounded-sm px-4 py-3 min-w-[350px]' type="email" name="email" id="email" placeholder='example@example.com' />
                            </div>

                            {/* phone */}
                            <div className='space-y-2'>
                                <div className='flex justify-start items-center space-x-2'>
                                    <AiOutlinePhone />
                                    <p className='tex-[#2b2b2b]'>Phone number</p>
                                </div>
                                <input onChange={(e) => setPhone(e.target.value)} className='outline-none ring-2 bg-slate-50 rounded-sm px-4 py-3 min-w-[350px]' type="number" name="username" id="username" placeholder='73853938463' />
                            </div>
                            {/* address */}
                            <div className='space-y-2'>
                                <div className='flex justify-start items-center space-x-2'>
                                    <AiOutlineHome />
                                    <p className='tex-[#2b2b2b]'>address</p>
                                </div>
                                <input onChange={(e) => setAddress(e.target.value)} className='outline-none ring-2 bg-slate-50 rounded-sm px-4 py-3 min-w-[350px]' type="text" name="username" id="username" placeholder='where you live' />
                            </div>

                        </div> : null
                    }

                    {
                        tab === 4 ? <div className='space-y-4'>

                            {/* school name */}
                            <div className='space-y-2'>
                                <div className='flex justify-start items-center space-x-2'>
                                    <IoSchoolOutline />
                                    <p className='tex-[#2b2b2b]'>School name</p>
                                </div>
                                <input onChange={(e) => setSchool(e.target.value)} className='outline-none ring-2 bg-slate-50 rounded-sm px-4 py-3 min-w-[350px]' type="text" name="username" id="username" placeholder='enter full name' />
                            </div>
                            {/* collage name */}
                            <div className='space-y-2'>
                                <div className='flex justify-start items-center space-x-2'>
                                    <IoSchoolOutline />
                                    <p className='tex-[#2b2b2b]'>Collage Name</p>
                                </div>
                                <input onChange={(e) => setCollage(e.target.value)} className='outline-none ring-2 bg-slate-50 rounded-sm px-4 py-3 min-w-[350px]' type="text" name="username" id="username" placeholder='enter full name' />
                            </div>
                            {/* education */}
                            <div className='space-y-2'>
                                <div className='flex justify-start items-center space-x-2'>
                                    <IoSchoolOutline />
                                    <p className='tex-[#2b2b2b]'>Education</p>
                                </div>
                                <input onChange={(e) => setEducation(e.target.value)} className='outline-none ring-2 bg-slate-50 rounded-sm px-4 py-3 min-w-[350px]' type="text" name="username" id="username" placeholder='UG' />
                            </div>
                        </div> : null
                    }

                    {
                        tab === 5 ? <div className='space-y-4'>

                            {/* hobby */}
                            <div className='space-y-2'>
                                <div className='flex justify-start items-center space-x-2'>
                                    <AiOutlineHeart />
                                    <p className='tex-[#2b2b2b]'>Hobby</p>
                                </div>
                                <input onChange={(e) => setHobby(e.target.value)} className='outline-none ring-2 bg-slate-50 rounded-sm px-4 py-3 min-w-[350px]' type="text" name="username" id="username" placeholder='coding, web development' />
                            </div>
                            {/* about */}
                            <div className='space-y-2'>
                                <div className='flex justify-start items-center space-x-2'>
                                    <SiAboutdotme />
                                    <p className='tex-[#2b2b2b]'>About</p>
                                </div>
                                <input onChange={(e) => setAbout(e.target.value)} className='outline-none ring-2 bg-slate-50 rounded-sm px-4 py-3 min-w-[350px]' type="text" name="email" id="email" placeholder='write something about you' />
                            </div>

                            {/* profile pic */}
                            <div className='space-y-2'>
                                <div className='flex justify-start items-center space-x-2'>
                                    <PiCameraBold />
                                    <p className='tex-[#2b2b2b]'>Profile picture</p>
                                </div>
                                {/* <input className='outline-none ring-2 bg-slate-50 rounded-sm px-4 py-3 min-w-[350px]' type="text" name="email" id="email" placeholder='write something about you' /> */}
                                <input onChange={(e) => setImage(e.target.files[0])} hidden ref={(refParam) => (file = refParam)} type="file" name="file" id="file" />
                                <div onClick={() => file.click()} className='outline-none ring-2 bg-slate-50 rounded-sm px-4 py-3 min-w-[350px] flex justify-between items-center cursor-pointer'>
                                    <p className='text-slate-400'>{image === undefined ? "select image" : image.name}</p>
                                    <FcAddImage />
                                </div>
                            </div>



                        </div> : null
                    }

                    {
                        tab === 6 ? <div className='space-y-4'>
                            {/* password */}
                            <div className='space-y-2'>
                                <div className='flex justify-start items-center space-x-2'>
                                    <CgLastpass />
                                    <p className='tex-[#2b2b2b]'>Password</p>
                                </div>
                                <input onChange={(e) => setPassword(e.target.value)} className='outline-none ring-2 bg-slate-50 rounded-sm my-4 px-4 py-3 min-w-[350px]' type="password" name="pass" id="pass" placeholder='enter 8 character or more' />
                            </div>

                            {/* confirm password */}
                            <div className='space-y-2'>
                                <div className='flex justify-start items-center space-x-2'>
                                    <CgLastpass />
                                    <p className='tex-[#2b2b2b]'>Confirm Password</p>
                                </div>
                                <input onChange={(e) => setConfirmPassword(e.target.value)} className='outline-none ring-2 bg-slate-50 rounded-sm my-4 px-4 py-3 min-w-[350px]' type="password" name="pass" id="pass" placeholder='enter 8 character or more' />
                            </div>
                            <input className='px-4 py-3 rounded-sm bg-blue-400 w-full cursor-pointer font-bold text-white' type="submit" value="Sign up" />
                        </div> : null
                    }
                    {
                        tab !== 6 ? <div onClick={() => setTab(tab + 1)} className='px-4 py-3 rounded-sm bg-blue-400 w-full cursor-pointer font-bold text-white text-center'>Next</div> : null
                    }
                </form>

                <h2 className='pt-5 text-center'>if you already have an account then <Link className='text-blue-700 font-medium' to="/login">sign in</Link></h2>

            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#fff',
                        color: '#2b2b2b',
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
        </div>
    )
}

export default SIgnup