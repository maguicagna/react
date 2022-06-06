import React, {useState} from "react";

export default function Tour({tour, handleClick}){
    const [readMore, setReadMore] = useState(false);
        

    return(
        <article className="single-tour">
            <img src={tour.image} alt={tour.name}></img>
            <footer>
                <div className="tour-info">
                    <h4>{tour.name}</h4>
                    <h4 className="tour-price">${tour.price}</h4>
                </div>
                <p>{readMore ? tour.info : `${tour.info.substring(0,200)}...`} 
                <button onClick = {()=>setReadMore(!readMore)}>{readMore ? 'Show less' : 'Read more'}</button>
                </p>
                <button className="delete-btn" onClick={() => handleClick(tour.id)}>Not interested</button>
            </footer>

        </article>
    )
}
