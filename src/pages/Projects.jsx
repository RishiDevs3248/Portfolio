import ProjectBlock from "./ProjectBlock";
import { useTheme } from "./Theme";

function Projects() {
    const { isDark, setIsDark } = useTheme();

    return (
        <div className={`home-page h-screen w-full ${isDark ? "bg-black text-white" : "bg-gray-200 text-black "} flex justify-center`}>
            <div className={` ${isDark ? "bg-black text-white" : "bg-gray-200 text-black "} w-[1050px] my-[100px]`}>
                {/* Page code below */}
                {/* make a project component and reuse it  */}
                <ProjectBlock  prj_img_src="/TechLogo/TechLogo-1.jpg" prj_name="Hello"/> 

            </div>
        </div>
    );
}

export default Projects;