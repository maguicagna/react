
function List({people}){
    return(
        <>
            {people.map(people => (
                
                <article key={people.id} className="person">
                    <img src={people.image}></img>
                    <div>
                        <h4>{people.name}</h4>
                        <p>{people.age} years</p>
                    </div>

                </article>
                
            ))}
        </>
        
        
    )
    



}

export default List;