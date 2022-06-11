import s from './News.module.css'
import {useEffect, useState} from "react";

function News() {
   let [counter, setCounter] = useState(0)
   useEffect(() => {
      console.log('ETP USEEFFECT')
   });
   return (
      <div>
         <p>Counter: {counter}</p>
         <button className={s.button}
                 onClick={() => setCounter(++counter)}
         >Прибавить
         </button>
      </div>
   )
}

export default News;