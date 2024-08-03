import { Link } from "react-router-dom";

export default function NotFoundPage(){
    return (
        <div className="bg-white h-screen">
            <div className="flex flex-col justify-center items-center">
                <img src="./img/gajo-login.svg" className="w-[30vw]" alt="" />
                <h2 className="text-black">Stop the horses there cowboy, we're still working on this one</h2>
                <Link className="text-3xl my-4 text-black " to="/shopping-list-web-app/">Go Back</Link>
            </div>

        </div>
    )
}
