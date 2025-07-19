import { useTheme } from "./Theme";

export default function ProjectBlock({ children, prj_img_src, side = "left" }) {
    const { isDark, setIsDark } = useTheme();
    return (
        <>
            {/* use ternary operator here in a way that aligns with right and left idea */}
            <div className="w-full flex justify-center  mt-[20px]">
                <div className={`border ${isDark? 'border-white':'border-black'} rounded-2xl w-[75%] flex  ${side == "right" ? "flex-row-reverse" : "row"} overflow-hidden`}>
                    {/* prj image */}
                    <div className="w-[40%]">
                        <img src={prj_img_src} className="h-fit w-fit"></img>
                    </div>
                    <div className="w-[5%]"></div>
                    <div className={`flex justify-start items-center w-[50%]`}>
                        <div>{children}</div>
                    </div>
                    <div className="w-[5%]"></div>
                </div>
            </div>
        </>
    )
}