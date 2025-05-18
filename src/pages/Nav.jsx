import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "./Theme";


export default function Nav() {
    const location = useLocation();

    const activeIndex = ["/home", "/prj", "/contact"].indexOf(location.pathname);

    const positions = [
        "left-[0%]",
        "left-[33.33%]",
        "left-[66.66%]",
    ];

    const { isDark, setIsDark } = useTheme();
    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--bg-color', isDark ? '#000000' : '#e5e7eb'); // Tailwind's gray-200
        root.style.setProperty('color', isDark ? '#ffffff' : '#000000');
    }, [isDark]);

    function getTextColor(isDark, isActive) {
        if (isDark) return isActive ? "text-black" : "text-white";
        else return isActive ? "text-white" : "text-black";
    }

    return (
        <div className={`flex mt-[20px] ${isDark ? "bg-black" : "bg-gray-200"}`}>
            <div className="Left_half w-[35%] "></div>

            <div className={`Middle_section nav w-[30%] relative flex justify-evenly border p-[5px] rounded-xl ${isDark ? "bg-black text-white border-white" : "bg-gray-200 text-black border-black"} overflow-hidden`}>
                <div className={`w-[100%] relative flex justify-evenly p-[5px] rounded-lg ${isDark ? "bg-black text-white" : "bg-gray-200 text-black"} overflow-hidden`}>
                    {/* Sliding background */}
                    <motion.div className={`absolute top-0 h-full w-1/3  ${isDark ? "bg-gray-200" : "bg-black"}  rounded-lg z-0`} animate={{ left: `${activeIndex * 33.33}%` }} transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                    {/* Links */}
                    <Link to="/home" className={`relative z-9 px-[20px] py-[7px] w-[33%] text-center rounded-lg transition-all duration-300 ease-in-out ${getTextColor(isDark, activeIndex === 0)}`} >Home</Link>
                    <Link to="/prj" className={`relative z-9 px-[20px] py-[7px] w-[33%] text-center rounded-lg transition-all duration-300 ease-in-out ${getTextColor(isDark, activeIndex === 1)}`} >Projects</Link>
                    <Link to="/contact" className={`relative z-9 px-[20px] py-[7px] w-[33%] text-center rounded-lg transition-all duration-300 ease-in-out ${getTextColor(isDark, activeIndex === 2)}`}>Contact</Link>
                </div>
            </div>

            <div className="Right_half w-[35%] flex justify-end items-center">
                <div className={`relative border  bg-black ${isDark ? "border-white " : "border-black"} h-[40px] w-[100px] mr-[20px] rounded-3xl flex  overflow-hidden`}>

                    {/* Sliding background */}
                    <motion.div
                        className={`absolute h-full w-[40px] bg-gray-300 rounded-full z-1 cursor-pointer`}
                        animate={{ x: isDark ? 0 : "145%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />

                    {/* Button container */}
                    <div className="flex w-full z-9 justify-between items-center">
                        <button onClick={() => setIsDark(false)} className={`w-[40px] h-[40px] rounded-full flex justify-center items-center ${isDark?"cursor-pointer":"cursor-auto"}`}><img src="/dark.webp" className="h-[20px] w-[20px]" /></button>
                        <button onClick={() => setIsDark(true)} className={`w-[40px] h-[40px] rounded-full flex justify-center items-center ${isDark?"cursor-auto":"cursor-pointer"}`}><img src="/light.png" className="h-[20px] w-[20px]" /></button></div>
                </div>

            </div>
        </div>

    );
}
