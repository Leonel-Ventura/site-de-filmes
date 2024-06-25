import { Link } from "react-router-dom"

export function FilmsList({data}) {
    if (!data.length) {
        return <div className="text-5xl flex justify-center items-center">Loading</div>
    }

    return(
        <div className="px-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {data.map(item=>(
                 <div key={item.imdbID} className="max-w-sm rounded overflow-hidden shadow-lg h-80 ">
                    <div className="h-[65%] border overflow-hidden">
                        <Link to={`/detalhes/${item.imdbID}`}>
                        <img className="w-full object-cover hover:scale-95 transition-all duration-300" src={item.Poster} alt="nome filme"/>
                        </Link>
                    </div>
                    <div className="p-2">
                        <h2 className="font-bold text-xl text-gray-800 mb-1 truncate">{item.Title}</h2>
                        <strong className="font-thin text-gray-800">{item.Year}</strong>
                       <p>
                       <em className="text-red-800">{item.Type}</em>
                       </p>
                    </div>
               </div>
            ))}
        </div>
    )
}