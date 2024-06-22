import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FilmDetails } from "../components/FilmDetails";

export default function Detalhes() {
    let { id } = useParams();
    const [data, setData] = useState([])

    const loadData = async ()=>{
        const response = await fetch(`https://www.omdbapi.com/?apikey=dd3fbe30&i=${id}`);
        let data = await response.json();

        setData(data)
    }

    useEffect(()=>{
        loadData()
    },[data?.imdbID])
    

    return (
        <div>
            <div id="first" className="bg-[#E63946] flex flex-col justify-between mb-4 sm:flex-row py-2">
               <h1 className=" font-bold text-white p-5
                text-3xl">
                    <Link to={"/"}>Cine<span className="text-slate-950">Click</span></Link>
                </h1>
                
                <button type="submit" className="text-white self-center bg-slate-950 mx-4 p-4 rounded-lg">
                    <Link to={"/"}>Voltar</Link>
                </button>
            </div>

            <FilmDetails data={data}/>
        </div>
    )
}
