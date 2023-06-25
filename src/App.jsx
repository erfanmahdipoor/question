import { useState } from "react";
import data from "./data";
import Question from "./Question";
function App() {
  const [question ,setQuestion]=useState(data)
  // console.log(question);
  return (
    <div className="container" >
      <h1>
        
      سوالی برایتان پیش امده است؟
      </h1>
       {
        question.map((question)=>{
          return <Question key={question.id} {...question}/>
        })
       }
    </div>
  );
}

export default App;
