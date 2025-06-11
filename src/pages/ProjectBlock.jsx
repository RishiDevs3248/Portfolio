export default function ProjectBlock({prj_name , prj_img_src }){
    return (
        <>
        {/* use ternary operator here in a way that aligns with right and left idea */}
            <div className="border border-white rounded-md w-[75%] ">
                <div>
                    <img src={prj_img_src}></img>
                </div>
                <div>{prj_img_src}</div>
                <div>{prj_name}</div>

            </div>
        </>
    )
}