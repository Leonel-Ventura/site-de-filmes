import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function FormSeach() {
    const [keyword, setKeyword] = useState("")
    const navigate = useNavigate();

   const handleSubmitSearch = (event)=>{
    event.preventDefault();
    const value = keyword.trim();
    
    navigate(`/pesquisa/${value}`);
   }
    
    return (
        <form onSubmit={handleSubmitSearch} className="m-2.5 p-2.5 flex">
            <input required className="border p-1.5 border-gray-300 rounded-md " type="search" name="pesquisar" id="pesquisar" 
            value={keyword}
            onChange={(evt)=>setKeyword(evt.target.value)}
            placeholder="procure o seu filme"/>
            <button type="submit" className="text-white bg-slate-950 mx-4 p-2 rounded-lg">Pesquisar</button>
        </form>
    )
}