import { GrFacebook, GrGithub, GrGoogle, GrInstagram, GrTwitter } from "react-icons/gr";

const Rightsitenav = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-poppins font-medium p-3">Login With</h2>
        <div className="p-4 space-y-2">
          <button className="btn btn-outline">
            {" "}
            <GrGoogle /> Login With Google
          </button>
          <button className="btn btn-outline">
            {" "}
            <GrGithub /> Login With GitHub
          </button>
        </div>
      </div>
      {/* 2nd box */}
      <div className="">
        <h2 className="text-2xl font-poppins font-medium mb-4 p-3">Find Us On</h2>
        <div className="p-4 rounded-t-lg">
          <a className="flex items-center gap-4 border p-3 rounded-t-lg">
            {" "}
            <GrFacebook /> Facebook
          </a>
          <a className="flex items-center gap-4 border p-3 rounded-t-lg">
            {" "}
            <GrTwitter /> Twitter
          </a>
          <a className="flex items-center gap-4 border p-3 rounded-t-lg">
            {" "}
            <GrInstagram /> Instagram
          </a>
        </div>
      </div>

      {/* Q Zone Section */}
      <div className="m-8 bg-gray-400 p-1 rounded-md">
        <h1 className="font-bold mb-5">Q-Zone</h1>
        <img src="https://i.ibb.co/2SwQFfY/qZone1.png" alt="" />
        <img src="https://i.ibb.co/M2849VD/qZone2.png" alt="" />
        <img src="https://i.ibb.co/8zH7G14/qZone3.png" alt="" />
      </div>
    </>
  );
};

export default Rightsitenav;
