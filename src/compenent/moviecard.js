import React from "react";
import '../compenent/movie.css';
import Rate from "./rate";
function Moviecard({title, description, posterURL, rating,trl})
{
    function navigation()
    {
        window.location.href = `01234/?id=${trl}?title=${title}?description=${description}`
    }
    return(
    <div className="movie-card" style={{backgroundImage: "url(" +posterURL}}>
        <div className="movie-card__overlay"></div>
            <div className="movie-card__share">
                <button className="movie-card__icon"><i className="material-icons">&#xe87d</i></button>
                <button className="movie-card__icon"><i className="material-icons">&#xe253</i></button>
                <button className="movie-card__icon"><i className="material-icons">&#xe80d</i></button>
            </div>
        <div className="movie-card__content">
            <div className="movie-card__header">
                <h1 className="movie-card__title">{title}</h1>
            </div>
            <p className="movie-card__desc">{description}</p>
            <button className="btn btn-outline movie-card__button" type="button" onClick={navigation}>Watch Trailer</button>
            <Rate rat={rating}/>
            
        </div>
    </div>       
    );
}
export default Moviecard;