
import { signOut } from "next-auth/react";
import { AiOutlinePieChart } from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import { FaMoneyBill, } from 'react-icons/fa';
import { RiThumbUpLine } from 'react-icons/ri';
import { HiOutlineUsers } from 'react-icons/hi';
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';



import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const handleSignOut = () => {
    signOut();
};

export default function Dashboard() {

    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Sales $',
                    data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgb(53, 162, 235, 0.4',
                },
            ]
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                },
            },

            maintainAspectRatio: false,
            responsive: true
        })
    }, [])
    return (
        <div className="flex h-screen bg-gray-100">

            <div className="w-1/6 bg-black text-white rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl transform translate-x-7" style={{ marginTop: '40px', marginBottom: '40px' }}>

                <div className="left flex flex-col justify-center items-center text-white mr-4">
                    <div className="py-10">
                        <h1 className="font-montserrat text-4xl font-bold leading-64 tracking-normal text-center">Board.</h1>
                    </div>
                </div>
                <nav className="mt-4 ml-16">

                    <ul>
                        <li className="mb-5 flex items-center">
                            <AiOutlinePieChart className="mr-2" />
                            <a href="#" className="text-white hover:text-gray-300">
                                Dashboard
                            </a>
                        </li>
                        <li className="mb-5 flex items-center">
                            <BsTags className="mr-2" />
                            <a href="#" className="text-white hover:text-gray-300">
                                Transactions
                            </a>
                        </li>
                        <li className="mb-5 flex items-center">
                            <TbCalendarTime className="mr-2" />
                            <a href="#" className="text-white hover:text-gray-300">
                                Schedules
                            </a>
                        </li>
                        <li className="mb-5 flex items-center">
                            <BiUserCircle className="mr-2" />
                            <a href="#" className="text-white hover:text-gray-300">
                                Users
                            </a>
                        </li>
                        <li className="mb-5 flex items-center">
                            <AiOutlineSetting className="mr-2" />
                            <a href="#" className="text-white hover:text-gray-300">
                                Settings
                            </a>
                        </li>


                        <div className="my-8 flex flex-col transform translate-y-56">
                            <li className="mb-2 " >
                                <a href="#" className="text-white text-sm hover:text-gray-300">
                                    Help
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-sm hover:text-gray-300">
                                    Contact Us
                                </a>
                            </li>
                            <button
                                onClick={handleSignOut}
                                className="block  text-white text-sm    mr-48  rounded-md mt-2 "
                            >
                                SignOut
                            </button>
                        </div>
                    </ul>
                </nav>
            </div>


            <div className="w-4/5 bg-gray-100 ml-20 mt-14">
                <nav className="flex items-center justify-between py-4">
                    <h1 className="text-2xl text-black font-bold">Dashboard</h1>
                    <div className="flex items-center">
                        <div className="relative flex">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                            <div className="absolute top-0 right-0 mt-2 mr-3">
                                <FaSearch className="text-gray-400 " />
                            </div>
                        </div>
                        <div className="ml-5 mr-16">
                            <FaBell className="text-gray-800 text-xl font-bold inline-block" />
                            <FaUserCircle className="text-gray-800 text-xl font-bold inline-block ml-4" />
                        </div>
                    </div>
                </nav>
                <div className="flex gap-10 mt-4">
                    <div
                        className="card mr-4"
                        style={{
                            width: '221.05262756347656px',
                            height: '120px',
                            backgroundColor: '#DDEFE0',
                            borderRadius: '15px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            position: 'relative',
                        }}
                    >
                        <FaMoneyBill className="text-black text-2xl font-bold absolute top-2 right-2" />
                        <p className="text-black text-lg ml-4 mb-2" style={{ fontSize: '14px' }}>
                            Total Revenues
                        </p>
                        <p className="text-black text-2xl font-bold ml-4" style={{ fontSize: '24px' }}>
                            $2,129,430
                        </p>
                    </div>
                    <div
                        className="card mr-4"
                        style={{
                            width: '221.05262756347656px',
                            height: '120px',
                            backgroundColor: '#F4ECDD',
                            borderRadius: '15px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            position: 'relative',
                        }}
                    >
                        <BsTags className="text-black text-2xl font-bold absolute top-2 right-2" />
                        <p className="text-black text-lg ml-4 mb-2" style={{ fontSize: '14px' }}>
                            Total Transactions
                        </p>
                        <p className="text-black text-2xl font-bold ml-4" style={{ fontSize: '24px' }}>
                            1,520
                        </p>
                    </div>
                    <div
                        className="card mr-4"
                        style={{
                            width: '221.05262756347656px',
                            height: '120px',
                            backgroundColor: '#EFDADA',
                            borderRadius: '15px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            position: 'relative',
                        }}
                    >
                        <RiThumbUpLine className="text-black text-2xl font-bold absolute top-2 right-2" />
                        <p className="text-black text-lg ml-4 mb-2" style={{ fontSize: '14px' }}>
                            Total Likes
                        </p>
                        <p className="text-black text-2xl font-bold ml-4" style={{ fontSize: '24px' }}>
                            9,721
                        </p>
                    </div>
                    <div
                        className="card mr-4"
                        style={{
                            width: '221.05262756347656px',
                            height: '120px',
                            backgroundColor: '#DEE0EF',
                            borderRadius: '15px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            position: 'relative',
                        }}
                    >
                        <HiOutlineUsers className="text-black text-2xl font-bold absolute top-2 right-2" />
                        <p className="text-black text-lg ml-4 mb-2" style={{ fontSize: '14px' }}>
                            Total Users
                        </p>
                        <p className="text-black text-2xl font-bold ml-4" style={{ fontSize: '24px' }}>
                            892
                        </p>
                    </div>
                </div>
                <div className="w-full md:col-span-2 relative lg:h-[30vh] h-[15vh] m-auto p-1 border rounded-lg bg-white mt-5 mr-24" style={{ width: '95%' }}>
                    <Bar data={chartData} options={chartOptions} />
                </div>

                <div className="flex  gap-32 mt-4">
                    <div
                        className="card"
                        style={{
                            width: '480px',
                            height: '236px',
                            borderRadius: '15px',
                            backgroundColor: 'white',
                        }}
                    >
                        <h3 className=" text-xl bold text-black font-semibold ml-5 mt-1 ">Top products</h3>
                        <div className="p-4 flex">
                            <div className="w-2/3">
                                {/* Dummy Pie Chart */}
                                <div
                                    className="w-36 h-36 rounded-full mx-auto"
                                    style={{
                                        background: 'conic-gradient(#98D89E 0 55%, #F6DC7D 55% 86%, #EE8484 86% 100%)',
                                        marginTop: '1.5rem',
                                    }}
                                ></div>
                            </div>
                            <div className="w-1/3">

                                <div className="mt-3 mr-5 mb-4">
                                    <div className="flex justify-between items-center">
                                        <p className="text-gray-900">Basic Tees</p>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <p className="text-sm text-gray-400">55%</p>
                                    <div className="flex justify-between items-center mt-2">
                                        <p className="text-gray-900">Custom Short Pants</p>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    </div>
                                    <p className="text-sm text-gray-400">31%</p>
                                    <div className="flex justify-between items-center mt-2">
                                        <p className="text-gray-900">Super Hoodies</p>
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    </div>
                                    <p className="text-sm text-gray-400">14%</p>
                                </div>


                            </div>
                        </div>
                    </div>




                    <div
                        className="card"
                        style={{
                            width: '480px',
                            height: '236px',
                            borderRadius: '15px',
                            backgroundColor: 'white',
                        }}
                    >
                        <div className="p-4">
                            <h3 className="text-lg text-black font-semibold">Today's Schedule</h3>
                            <div className="mt-4 relative">
                                <div className="border-l-2 border-green-500 absolute left-0 h-full top-0"></div>
                                <p className="text-gray-900 pl-4">Meeting with suppliers from Kuta Bali</p>
                                <p className="text-gray-400 pl-4">14.00-15.00</p>
                                <p className="text-gray-400 pl-4">at Sunset Road, Kuta, Bali</p>
                            </div>
                            <div className="mt-4 relative">
                                <div className="border-l-2 border-purple-500 absolute left-0 h-full top-0"></div>
                                <p className="text-gray-900 pl-4">Check operation at Giga Factory 1</p>
                                <p className="text-gray-400 pl-4">18.00-20.00</p>
                                <p className="text-gray-400 pl-4">at Central Jakarta</p>
                            </div>
                        </div>

                    </div>
                </div>



            </div>




        </div>


    );
}
