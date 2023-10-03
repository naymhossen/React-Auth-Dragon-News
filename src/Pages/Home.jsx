import { useContext } from "react";
import Brakingnews from "./Page/Brakingnews";
import Heder from "./Page/Navbar/Heder";
import Leftsidenav from "./Page/Navbar/Leftsidenav";
import Navbar from "./Page/Navbar/Navbar";
import Rightsitenav from "./Page/Navbar/Rightsitenav";
import { DataContex } from "../Firebase/Authprovider";
import Homenews from "./Page/Homenews";

const Home = () => {
  const data = useContext(DataContex);

  return (
    <div className="mb-8">
      <Heder />
      <Brakingnews />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
          <Leftsidenav />
        </div>
        <div className="md:col-span-2 border">
          {
            data.map((news) => <Homenews key={news.id} news={news}></Homenews> )
          }
        </div>
        <div className="border">
          <Rightsitenav />
        </div>
      </div>
    </div>
  );
};

export default Home;
