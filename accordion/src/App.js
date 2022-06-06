import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <div className='container'>
        <h3>Login FAQ</h3>
        
        {questions.map(question => (
          
            <SingleQuestion key={question.id} question={question}/>
          
        )
          )}

      </div>
    
    </main>)
}

export default App;
