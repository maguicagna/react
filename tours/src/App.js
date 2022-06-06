import {useEffect, useState} from 'react'
import Tours from './Tours'
import Loading from './Loading'
import axios from 'axios'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    try{
      const response = await axios(url);
      setTours(response.data);
      setLoading(false);
      console.log(response);
  
    }
    catch(error){
      setLoading(false);
      console.log(error.message);

    }
    
    
  }

  useEffect(() => {
    fetchTours()
    
  }, []);
  
  if(loading){
    return(
      <main >
        <Loading />
      </main>
    );
   
  }

  if(tours.length === 0){
    return(
      <main>
        <div className='title'>
          <h2>No tours left</h2>
          <button className = "btn" onClick={fetchTours}>Refresh</button>

        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
      
    </main>
  );
}

export default App;
