import s from './News.module.css'
import {useState} from "react";

function News() {
   let [counter, setCounter] = useState(0)
   return (
      <div>
         <p>Counter: {counter}</p>
         <button className={s.button}
                 onClick={() => setCounter(++counter)}
         >Прибавить
         </button>
         <h1>{counter}</h1>
      </div>
   )
}

export default News;