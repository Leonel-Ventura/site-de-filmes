export function FilmDetails({data}) {

    if (!data?.imdbID) {                
        return <div className="text-5xl flex justify-center items-center">Loading</div>
    }

        return(
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <img src={data.Poster} alt="poster &amp; photo" className="w-full p-5 md:w-1/3 rounded-lg shadow-lg"/>
            <div className="flex flex-col space-y-4 p-3">
                <h1 className="text-4xl font-bold"> {data.Title}</h1>
                <div>
                    <p><strong>Ano:</strong> {data.Year}</p>
                    <p><strong>Gênero:</strong> {data.Genre}</p>
                    <p><strong>Director:</strong> {data.Director}</p>
                    <p><strong>Actores:</strong> {data.Actors}</p>
                    <p><strong>Descrição:</strong> {data.Plot}</p>
                    <p><strong>Linguagem:</strong> {data.Language}</p>
                    <p><strong>País:</strong> {data.Country}</p>
                    <p><strong>Prêmios:</strong>{data.Awards}</p>
                </div>
                
                <div className="flex space-x-4">
                    <div className="bg-slate-950 p-2 rounded-lg shadow-lg">
                        <p className="font-bold text-white">Internet Movie Database</p>
                        <p className="text-white text-center">{data.imdbRating}/10</p>
                    </div>
                    <div className="bg-slate-950 p-2 rounded-lg shadow-lg">
                        <p className="font-bold text-white">Imdb votes</p>
                        <p className="text-white text-center">{data.imdbVotes}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}