export default function ProjectBlock({prj_name , prj_img_src }){
    return (
        <>
            <div className="border border-white rounded-md ">
                <div>
                    <img src={prj_img_src}></img>
                </div>
                <div>{prj_img_src}</div>
                <div>{prj_name}</div>

            </div>
        </>
    )
}