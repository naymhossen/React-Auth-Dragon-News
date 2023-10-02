import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Brakingnews = () => {
  return (
    <div className="flex items-center mb-8 gap-4">
      <h2 className="btn btn-secondary">latest</h2>
      <Marquee pauseOnHover={true} >

        <Link to="/">I can be a React component, multiple React components, or just some text.</Link>
        <Link to="/">I can be a React component, multiple React components, or just some text.</Link>
        <Link to="/">I can be a React component, multiple React components, or just some text.</Link>
        
        </Marquee>
    </div>
  );
};

export default Brakingnews;
