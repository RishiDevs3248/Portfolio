import { useTheme } from "./Theme";

function Projects() {
    const { isDark, setIsDark } = useTheme();

    return (
        <div className={`home-page h-screen w-full ${isDark ? "bg-black text-white" : "bg-gray-200 text-black "} flex justify-center`}>
            <div className={` ${isDark ? "bg-black text-white" : "bg-gray-200 text-black "} w-[1050px] my-[100px]`}>
                <div className={` ${isDark ? "bg-black text-white" : "bg-gray-200 text-black "} border rounded-[15px] p-[50px]`}>
                    prj
                </div>
                <div>
                    Skills
                </div>
                <div>
                    Experience
                </div>
            </div>

        </div>
    );
}

export default Projects;