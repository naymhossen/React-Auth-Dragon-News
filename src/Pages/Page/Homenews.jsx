/* eslint-disable react/prop-types */
import { GrBookmark } from "react-icons/gr";
import { BsShare } from "react-icons/bs";

const Homenews = ({ news }) => {
  const { title, details, image_url, author } = news;
  return (
    <div>
      <h1 className="font-semibold text-2xl">Dragon News Home</h1>
      <div className="flex justify-between items-center bg-gray-300 mt-5 rounded-md p-2">
        <div className="flex items-center gap-3">
          <img className="w-12 rounded-full" src={author.img} alt="" />
          <div>
            <h3 className="font-bold">{author.name}</h3>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 mr-5">
          <h2>
            <a href="">
              <GrBookmark />
            </a>
          </h2>
          <h2>
            <a href="">
              <BsShare />
            </a>
          </h2>
        </div>
      </div>
      <div className="space-y-4 mt-5">
        <h2 className="text-2xl font-semibold font-poppins">{title}</h2>
        <img src={image_url} alt="" />
        <p>{details.slice(0, 500)}</p>
      </div>
    </div>
  );
};

export default Homenews;
