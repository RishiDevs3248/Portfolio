import ProjectBlock from "./ProjectBlock";
import { useTheme } from "./Theme";
import "./Projects.css"

function Projects() {
    const { isDark, setIsDark } = useTheme();

    return (
        <div className={`home-page h-screen w-full ${isDark ? "bg-black text-white" : "bg-gray-200 text-black "} flex justify-center`}>
            <div className={` ${isDark ? "bg-black text-white" : "bg-gray-200 text-black "} w-[1050px]`}>
                <ProjectBlock prj_img_src="/TechLogo/TechLogo-1.jpg" side="left" >prj 1</ProjectBlock>
                <ProjectBlock prj_img_src="/TechLogo/TechLogo-1.jpg" side="right">prj 2</ProjectBlock>
                <ProjectBlock prj_img_src="/TechLogo/TechLogo-1.jpg" side="righ">prj 2</ProjectBlock>
                <ProjectBlock prj_img_src="/TechLogo/TechLogo-1.jpg" side="right">prj 2</ProjectBlock>
                <ProjectBlock prj_img_src="/TechLogo/TechLogo-1.jpg" side="righ">prj 2</ProjectBlock>
                <ProjectBlock prj_img_src="/TechLogo/TechLogo-1.jpg" side="right">prj 2</ProjectBlock>
                <ProjectBlock prj_img_src="/TechLogo/TechLogo-1.jpg" side="righ">prj 2</ProjectBlock>
            </div>
        </div>
    );
}

export default Projects;