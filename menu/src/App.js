import React, {useState} from 'react'
import data from './data'
import MenuItem from './Menu'
import Categories from './Categories';

// lo que hace es hacer un data set por que devuelve solo unique values 
// NO REPETIDOS. Y como devuelve un obj lo pone entre brackets para covertirlo en array

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

function App() {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all'){
      setMenu(data);
      return;
    }

    const newItems = data.filter((item) => item.category === category);
    setMenu(newItems);
  }


  return (
    <main className="menu">
      <div className="title"> 
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems}/>
      <div className="section-center">
        {menu.map(item => (
          <MenuItem key={item.id} item = {item}/>
        ))}

      </div>
    </main>
  )
}

export default App;
