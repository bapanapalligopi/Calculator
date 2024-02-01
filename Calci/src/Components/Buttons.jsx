import React from 'react'
import styles from './button.module.css'
export default function Buttons({exp,setexp}) {

    function changeexp(num){
       
        if (num=="Ans") {
            try
            {
                setexp(eval(exp))
            }
            catch (error) {
                setexp('Syntax Error') // Outputs SyntaxError: Unexpected end of input
              }
        }
        else if(num=="Clr")
        {
            setexp("")
        }
        else if(num=="x")
        {
            if (exp!=='Syntax Error') setexp(exp.substring(0,exp.length-1))
        }
        else 
        {
            setexp(exp+num)
        }
        

    }
  return (
    <div className={styles.button}>
       <div className={styles.numbers}>
       <div className={styles.row}>
        <div><button className={styles.number} onClick={()=>{changeexp("1")}}>1</button></div>
        <div><button className={styles.number} onClick={()=>{changeexp("2")}}>2</button></div>
        <div><button className={styles.number} onClick={()=>{changeexp("3")}}>3</button></div>

       </div>
       <div className={styles.row}>
       <div><button className={styles.number} onClick={()=>{changeexp("4")}}>4</button></div>
        <div><button className={styles.number} onClick={()=>{changeexp("5")}}>5</button></div>
        <div><button className={styles.number} onClick={()=>{changeexp("6")}}>6</button></div>

       </div>
       <div className={styles.row}>
       <div><button className={styles.number} onClick={()=>{changeexp("7")}}>7</button></div>
        <div><button className={styles.number} onClick={()=>{changeexp("8")}}>8</button></div>
        <div><button className={styles.number} onClick={()=>{changeexp("9")}}>9</button></div>

       </div>
       <div className={styles.rowlast}>
            <button onClick={()=>{changeexp("0")}} className={styles.zero}>0</button>
            <button onClick={()=>{changeexp("x")}} className={styles.zero}>x</button>

       </div>
      </div>
      
      <div className={styles.operators}>

      <div className={styles.oprow}>
        <div><button className={styles.operator} onClick={()=>{changeexp("+")}}>+</button></div>
        <div><button className={styles.operator}onClick={()=>{changeexp("-")}}>-</button></div>
      </div>
       <div className={styles.oprow}>
        <div><button className={styles.operator} onClick={()=>{changeexp("*")}}>*</button></div>
        <div><button className={styles.operator}onClick={()=>{changeexp("/")}}>/</button></div>
       </div>
       <div className={styles.oprow}>
        <div><button className={styles.operator} onClick={()=>{changeexp("(")}}>(</button></div>
        <div><button className={styles.operator} onClick={()=>{changeexp(")")}}>)</button></div>
       </div>
       <div className={styles.oprow}>
        <div><button className={styles.operator} onClick={()=>{changeexp("Ans")}}>Ans</button></div>
        <div><button className={styles.operator} onClick={()=>{changeexp("Clr")}}>Clr</button></div>
       </div>
      </div>
    </div>
  )
}
