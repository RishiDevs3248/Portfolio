import ProjectBlock from "./ProjectBlock";
import { useTheme } from "./Theme";
import "./Projects.css"

function Projects() {
    const { isDark, setIsDark } = useTheme();

    return (
        <div className={`home-page h-screen w-full ${isDark ? "bg-black text-white" : "bg-gray-200 text-black "} flex justify-center`}>
            <div className={` ${isDark ? "bg-black text-white" : "bg-gray-200 text-black "} w-[1050px] my-[100px] `}>
                {/* this is not an efficient way (below code ) */}

                {/* Page code below
                <div className={`left-prj`}>
                    <ProjectBlock prj_img_src="/TechLogo/TechLogo-1.jpg" prj_name="Hello" />
                </div>
                <div className={`right-prj`}>
                    <ProjectBlock prj_img_src="/TechLogo/TechLogo-1.jpg" prj_name="Hello" />
                </div> */}


                {/* try using something like ternary operator  and use it inside projectBlock so you dont have to change your code in many ways*/}

                <ProjectBlock prj_img_src="/TechLogo/TechLogo-1.jpg" prj_name="Hello"  ></ProjectBlock>


            </div>
        </div>
    );
}

export default Projects;