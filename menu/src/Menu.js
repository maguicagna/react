import React from "react"

export default function Menu({item}){
    return(
        <article className="menu-item">
            <img className="photo" src={`${item.img}`}></img>
            <div className="item-info">
               <header>
                    <h4>{item.title}</h4>
                    <p className="price">{item.price}</p>
                </header>
                <p className="item-text">{item.desc}</p> 
            </div>
            
        </article>
    

    )
}