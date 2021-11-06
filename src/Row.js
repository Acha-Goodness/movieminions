import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";


const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ( { title, fetchUrl, isLargeRow }) => {
    const [ movies, setMovies ] = useState([]);
    const [ trailerUrl, setTrailerUrl ] = useState("");

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData(); 
    }, [fetchUrl]);

    const opts = {
        height:"390",
        width:"100%",
        playerVars:{
                // https://developers.google.com/youtube/player_parameters
            autoplay:1,
        }
    };

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error)); 
        }
    }
 

    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters grey">
                {movies.map((movie) => (
                    <img src={`${base_url}${movie.poster_path}`} alt={movie.name} key={movie.id} onClick={() => handleClick(movie)} className={`row_poster ${isLargeRow && "row_posterLarge"}`}/>
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row;