import { useParams } from "react-router-dom";
import Heder from "./Page/Navbar/Heder";
import Rightsitenav from "./Page/Navbar/Rightsitenav";
import Navbar from "./Page/Navbar/Navbar";


const Newsdetails = () => {

    const {title, image_url, _id} = useParams();

    return (
        <div>
            <Heder />
            <Navbar />
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h3 className="font-bold">Dragon News</h3>
                    <p>{_id}</p>
                    <img src={image_url} alt="" />
                    <h2>{title}</h2>
                </div>

                <div>
                    <Rightsitenav />
                </div>
            </div>
        </div>
    );
};

export default Newsdetails;