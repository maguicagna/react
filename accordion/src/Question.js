import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Question = ({question}) => {

    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <article className='question'>
            <header>
                <h4>{question.title}</h4>
                <button className='btn' onClick={() => setShowAnswer(!showAnswer)}>
                    {showAnswer ? < AiOutlineMinus/> : <AiOutlinePlus/>}
                    </button> 
            </header>
            {showAnswer ? <p>{question.info}</p> : ''}

        </article>
    )
};

export default Question;