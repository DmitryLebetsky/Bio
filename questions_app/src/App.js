import React, { useState } from 'react';

import './App.css';

import Questions from './components/Questions';
import GenerateButton from './components/GenerateButton';

import questionsList from './data/questions';

function randomArr() {
  const dublicate = questionsList.slice();
  const randomArr = [];

  for(let i= 0; i<10; i++){
    let arr = dublicate[Math.floor(Math.random()*dublicate.length)];
     
    let index = dublicate.indexOf(arr);
     
    dublicate.splice(index, 1 );
     
    randomArr.push(arr);
   }

   return randomArr;
}

const App = () => {
  const [tenQuestions, setTenQuestions] = useState([]);

  return (
    <div className="container">
      {
        tenQuestions.length ? <Questions questions={tenQuestions}/> : null
      }
      <GenerateButton changeQuestions={() => setTenQuestions(randomArr())}/>
    </div>
  )
}

export default App;
