import { useEffect, useRef, useState } from "react";
import './Home.css'
import { useTheme } from "./Theme";



function Home() {

    const [TechLogo, setTechLogo] = useState(
        // Array.from({ length: 14 }, (_, i) => `/public/Hrishikesh.png`)
        Array.from({ length: 12 }, (_, i) => `/TechLogo/TechLogo-${i + 1}.jpg`)
    );
    const [TechName, setTechName] = useState(
        ["HTML", "CSS", "JS", "REACT", "Tailwind", "Mongo", "Express", "Node.js", "Github", "Postman", "Docker", "mySql"]
    );


    const [searchTerm, setSearchTerm] = useState("");
    const [seeAllSkills, setSeeAllSkills] = useState(false);
    const inputRef = useRef(null); // kayboard ctrl for search
    const closeBtnRef = useRef(null); // keyboard ctrl for closig the skills window
    const negateSeeAllSkills = () => setSeeAllSkills(!seeAllSkills);

    const filteredSkills = TechName
        .map((name, index) => ({ name, logo: TechLogo[index] }))
        .filter((tech) => tech.name.toLowerCase().includes(searchTerm.toLowerCase()));

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                inputRef.current?.focus();
            }

            if (e.key === "Escape") {
                e.preventDefault();
                closeBtnRef.current?.click(); // simulate close button click
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const { isDark, setIsDark } = useTheme();

    return (
        <div className={`home-page h-screen w-full ${isDark?"bg-black":"bg-gray-200"} flex justify-center`}>
            <div className={` ${isDark ? "bg-black text-white" : "bg-gray-200 text-black "} w-[1050px] my-[100px] mt-[50px]`}>
                <div className={`${isDark ? "bg-black text-white border-white" : "bg-gray-200 text-black border-black"} border rounded-[15px] p-[50px] flex gap-[50px]`}>
                    <div className={`imageLeft ${isDark ? "bg-black " : "bg-gray-200 "}`}>
                        <img src="/def_img.png" className="h-[250px] rounded-xl"></img>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div>
                            <h1 className="text-[40px]">Hrishikesh Alabnur</h1>
                            <p className="mt-[5px]">📍 Pune, Maharashtra, India</p>
                            <p className={`mt-[5px]  ${isDark ? "text-gray-400" : "text-gray-500"}`}>I am 21 years old <span className={` ${isDark ? "text-gray-300" : "text-gray-700"}`}><u>Full Stack Web Developer</u></span>. I have been programming for more than 3 years</p>
                        </div>
                    </div>
                </div>



                {/* skills section */}
                <div className={`${isDark ? "bg-black text-white" : "bg-gray-200 text-black "}  py-[50px] `}>
                    <div className="flex flex-col justify-center">
                        <div>
                            <h1 className="text-[40px]">What I work with</h1>

                            {/* 1st animation */}
                            <div className="stock-ticker mt-[20px]">
                                <ul>
                                    {TechLogo.map((image, index) => (
                                        <li key={index} className="flex gap-[10px]">
                                            <img
                                                src={image}
                                                alt={`gallery-${index + 1}.webp`}
                                                className="w-10 h-10 object-cover rounded-lg shadow-lg Rishi_img"
                                            />
                                            <div className={`mt-2 ${isDark ? "text-white" : "text-black "}  font-semibold text-xl`}>
                                                {TechName[index]}
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <ul className="relative left-[-40px]">
                                    {TechLogo.map((image, index) => (
                                        <li key={index} className="flex gap-[10px]">
                                            <img
                                                src={image}
                                                alt={`gallery-${index + 1}.webp`}
                                                className="w-10 h-10 object-cover rounded-lg shadow-lg Rishi_img"
                                            />
                                            <div className={`mt-2 ${isDark ? "text-white" : "text-black "}   font-semibold text-lg`}>
                                                {TechName[index]}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* 2nd animation */}
                            <div className="stock-ticker2 mt-[20px]">
                                <ul>
                                    {TechLogo.map((image, index) => (
                                        <li key={index} className="flex gap-[10px]">
                                            <img
                                                src={image}
                                                alt={`gallery-${index + 1}.webp`}
                                                className="w-10 h-10 object-cover rounded-lg shadow-lg Rishi_img"
                                            />
                                            <div className={`mt-2 ${isDark ? "text-white" : "text-black "}  font-semibold text-xl`}>
                                                {TechName[index]}
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <ul className="relative left-[-40px]">
                                    {TechLogo.map((image, index) => (
                                        <li key={index} className="flex gap-[10px]">
                                            <img
                                                src={image}
                                                alt={`gallery-${index + 1}.webp`}
                                                className="w-10 h-10 object-cover rounded-lg shadow-lg Rishi_img"
                                            />
                                            <div className={`mt-2 ${isDark ? "text-white" : "text-black "}  font-semibold text-lg`}>
                                                {TechName[index]}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>


                            <div className="mt-[20px] flex justify-center ">
                                <button onClick={negateSeeAllSkills} className="flex justify-center cursor-pointer border py-[10px] px-[15px] rounded-lg focus:outline-none focus:ring-0" >
                                    <div className="flex col justify-center items-center ">See All</div>
                                    <img src="/right_arrow.jpg" className="h-[40px] ml-[20px] rounded-full"></img>
                                </button>
                            </div>

                            {seeAllSkills && (
                                <div className={`fixed inset-0 z-10 flex items-center justify-center bg-[#C7C7C7] bg-opacity-60`}>
                                    <div className={`bg-black text-white p-6 rounded-2xl shadow-lg w-[60%] overflow-y-auto`}>

                                        <div className="flex justify-between items-center mb-4 relative">
                                            <input
                                                ref={inputRef}
                                                type="text"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                placeholder="Search a skill..."
                                                className={`w-full p-2 pr-[60px] rounded-md text-white border focus:outline-none focus:ring-0`}
                                            />
                                            <div className={`absolute right-14 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded-md`}>
                                                ⌘ K
                                            </div>
                                            <button ref={closeBtnRef} onClick={negateSeeAllSkills} className="ml-4 cursor-pointer">
                                                <img src="/cross.jpg" className="h-[30px] rounded-2xl" title="Press Esc" />
                                            </button>
                                        </div>

                                        {filteredSkills.length > 0 ? (
                                            <ul className="flex flex-wrap gap-10">
                                                {filteredSkills.map((tech, index) => (
                                                    <li key={index} className="flex items-center gap-4 mb-4">
                                                        <img
                                                            src={tech.logo}
                                                            alt={`tech-${index}`}
                                                            className="w-10 h-10 object-cover rounded-lg shadow-lg Rishi_img"
                                                        />
                                                        <div className={`text-white font-semibold text-xl`}>
                                                            {tech.name}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className={`text-center text-gray-400 mt-4`}>No skill matched</p>
                                        )}
                                    </div>
                                </div>
                            )}


                        </div>
                    </div>
                </div>



                {/* experience section */}
                <div className={` pb-[50px] ${isDark?"bg-black":"bg-gray-200"}`}>
                    <div className={`${isDark?"text-black bg-gray-200 ":"text-white bg-black "} p-[50px] rounded-[15px] `}>
                        <div className="flex flex-col justify-center ">
                            <div>
                                <h1 className="text-[40px] mb-[50px]">Experiences</h1>
                            </div>

                            {/* End Section */}
                            <div className=" flex row gap-[50px]">
                                <div className="leftSide w-[45%] h-[32px] flex justify-end">
                                </div>
                                <div className="relative w-[40px] flex justify-center ">
                                    <div className="absolute top-1/25 -translate-y-1/2 w-[30px] h-[20px] text-center teat-white rounded-full z-9"> End </div>
                                </div>
                                <div className="rightSide w-[45%]">
                                </div>
                            </div>

                            {/* Internship Section */}
                            <div className=" flex row gap-[50px]">
                                <div className="leftSide w-[45%]  flex justify-end">
                                    <div>
                                        <div className="mb-[10px]">
                                            <div><b>Internship</b></div>
                                            <b>ERP Developer</b> - <i>4 November 2024 – 6 February 2025</i>
                                        </div>
                                        <div>
                                            • Developed and customized Odoo website pages using XML and CSS to enhance UI/UX.
                                            • Worked on Odoo module development, improving business workflows and system functionalities.
                                        </div>
                                    </div>
                                </div>
                                <div className={`relative w-[7px] ${isDark?" bg-black ":" bg-gray-200 "}  flex justify-center`}>
                                    <div className={`absolute top-1/25 -translate-y-1/2 w-[20px] h-[20px] ${isDark?" bg-black ":" bg-gray-200 "} rounded-full z-9`}></div>
                                </div>
                                <div className="rightSide w-[45%] ">
                                </div>
                            </div>

                            {/* Break Section */}
                            <div className=" flex row gap-[50px]">
                                <div className="leftSide w-[45%] h-[50px] flex justify-end">
                                </div>
                                <div className={`mid w-[7px] flex justify-center  ${isDark?" bg-black ":" bg-gray-200 "} `}>
                                </div>
                                <div className="rightSide w-[45%]">
                                </div>
                            </div>

                            {/* College Section */}
                            <div className=" flex row gap-[50px]">
                                <div className="leftSide w-[45%]  flex justify-end">
                                </div>
                                <div className={`relative w-[7px]  ${isDark?" bg-black ":" bg-gray-200 "}  flex justify-center`}>
                                    <div className={`absolute top-1/25 -translate-y-1/2 w-[20px] h-[20px]  ${isDark?" bg-black ":" bg-gray-200 "}  rounded-full z-9`}></div>
                                </div>
                                <div className="rightSide w-[45%] ">
                                    <div>
                                        <div className="mb-[10px]">
                                            <div><b>Education</b></div>
                                            <b>Genba Sopanrao Moze College of Engineering</b> - <i>Nov 2021 – Present</i>
                                        </div>
                                        <div>
                                            • Bachelor of Engineering in Computer Science (8.79 GPA)
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Break Section */}
                            <div className=" flex row gap-[50px]">
                                <div className="leftSide w-[45%] h-[50px] flex justify-end">
                                </div>
                                <div className={`mid w-[7px] flex justify-center  ${isDark?" bg-black ":" bg-gray-200 "} `}>
                                </div>
                                <div className="rightSide w-[45%]">
                                </div>
                            </div>

                            {/* 12th College Section */}
                            <div className=" flex row gap-[50px]">
                                <div className="leftSide w-[45%]  flex justify-end">
                                    <div>
                                        <div>
                                            <div className="mb-[10px]">
                                                <div><b>Education</b></div>
                                                <b>Shri Mhalsakant Secondary & High Secondary School, Akurdi </b> - <i>June 2021</i>
                                            </div>
                                            <div>
                                                • Intermediate, PCM (84.5 %)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`relative w-[7px]  ${isDark?" bg-black ":" bg-gray-200 "}  flex justify-center`}>
                                    <div className={`absolute top-1/25 -translate-y-1/2 w-[20px] h-[20px]  ${isDark?" bg-black ":" bg-gray-200 "}  rounded-full z-9`}></div>
                                </div>
                                <div className="rightSide w-[45%] ">
                                </div>
                            </div>

                            {/* Break Section */}
                            <div className=" flex row gap-[50px]">
                                <div className="leftSide w-[45%] h-[50px] flex justify-end">
                                </div>
                                <div className={`mid w-[7px] flex justify-center  ${isDark?" bg-black ":" bg-gray-200 "} `}>
                                </div>
                                <div className="rightSide w-[45%]">
                                </div>
                            </div>

                            {/* School Section */}
                            <div className=" flex row gap-[50px]">
                                <div className="leftSide w-[45%]  flex justify-end">
                                </div>
                                <div className={`relative w-[7px]  ${isDark?" bg-black ":" bg-gray-200 "}  flex justify-center`}>
                                    <div className={`absolute top-1/25 -translate-y-1/2 w-[20px] h-[20px]  ${isDark?" bg-black ":" bg-gray-200 "}  rounded-full z-9`}></div>
                                </div>
                                <div className="rightSide w-[45%] ">
                                    <div>
                                        <div className="mb-[10px]">
                                            <div><b>Education</b></div>
                                            <b>PDEA’s English Medium School, Pune</b> - <i>June 2019</i>
                                        </div>
                                        <div>
                                            • Matriculation (78.20 %)
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Break Section */}
                            <div className=" flex row gap-[50px]">
                                <div className="leftSide w-[45%] h-[50px] flex justify-end">
                                </div>
                                <div className={`mid w-[7px] flex justify-center  ${isDark?" bg-black ":" bg-gray-200 "} `}>
                                </div>
                                <div className="rightSide w-[45%]">
                                </div>
                            </div>


                            {/* Start Section */}
                            
                            <div className=" flex row gap-[50px]">
                                <div className="leftSide w-[45%] h-[32px] flex justify-end">
                                </div>
                                <div className="relative w-[40px] flex justify-center ">
                                    <div className="absolute top-1/25 -translate-y-1/2 w-[50px] h-[20px] text-center teat-white rounded-full z-9 mt-[20px]"> Start </div>
                                </div>
                                <div className="rightSide w-[45%]">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
