import { useParams, Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { FilmsList } from "../components/FilmsList";
import { NotFound } from "../components/NotFound";
export default function Pesquisa() {
    let {  value } = useParams();
    const [data, setData] = useState([])
    const [responseStatus, setResponseStatus] = useState(true)

    const loadData = async ()=>{
        const response = await fetch(`https://www.omdbapi.com/?apikey=dd3fbe30&s=${value}&type=movie&page=1`);
        let data = await response.json();

        if (data.Response === "False") {
            setResponseStatus(false)
            setData([])
            return
        }

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
                
                <button type="submit" className="text-white self-center bg-slate-950 mx-4 p-2 rounded-lg">
                    <Link to={"/"}>Voltar</Link>
                </button>
            </div>
            {!responseStatus?(<NotFound/>):
            <FilmsList data={data} />
            }
        </div>
    )
}