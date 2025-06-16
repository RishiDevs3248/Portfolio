export default function ProjectBlock({ prj_name, prj_img_src, side = "l" }) {
    return (
        <>
            {/* use ternary operator here in a way that aligns with right and left idea */}
            <div className={`border border-white rounded-md w-[75%] flex  ${side == "r"?"flex-row-reverse":"row"}`}>
                {/* prj image */}
                <div>
                    <img src={prj_img_src}></img>
                </div>
                <div className={`flex justify-center items-center`}>
                    {/* prj image name */}
                    {/* <div>{prj_img_src}</div> */}
                    <div>{prj_name}</div>
                </div>

            </div>
        </>
    )
}