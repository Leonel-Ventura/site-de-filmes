import { useEffect, useState } from "react";
import { FormSeach } from "../components/FormSearch";
import { FilmsList } from "../components/FilmsList";
import { Link } from "react-router-dom";

export default function Home() {

    const [data, setData] = useState([])

    const loadData = async ()=>{
        const response = await fetch(`https://www.omdbapi.com/?apikey=dd3fbe30&s=red&type=movie&page=1`);
        let data = await response.json();

        setData(data.Search)
    }

    useEffect(()=>{
        loadData()
    },[data.length])
    
    return (
       <div>
            <div id="first" className="bg-[#E63946] flex flex-col justify-between mb-4 sm:flex-row">
               <h1 className=" font-bold text-white p-5
                text-3xl">
                    <Link to={"/"}>Cine<span className="text-slate-950">Click</span></Link>
                </h1>
                
                <FormSeach/>
            </div>
            
            <FilmsList data={data} />
       </div> 
    )
}