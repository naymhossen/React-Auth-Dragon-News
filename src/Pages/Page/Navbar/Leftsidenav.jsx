import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Leftsidenav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-resources/main/data/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    
    return (
        <div>
            <h2 className="text-2xl font-bold font-poppins p-2">All Category</h2>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ml-5 mt-5">National News</button>
            {
                categories.map(category => 
              <div key={category.id}  className="block mx-auto w-11/12 text-xl font-medium font-poppins mt-3">
                  <NavLink
                    to={`/category/${category.id}`}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-green-500 animate-pulse" : ""
                    }
                  >
                    {category.name}
                  </NavLink>
              </div> 
                  )
            }
        </div>
    );
};

export default Leftsidenav;