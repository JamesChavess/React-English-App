import React, {useState, useEffect} from 'react'
import styles from './Form.module.css'


 
 export const FormContainer = (props,{inputValHandler},darkMode) => {

    return (
        
        <main className={props.darkMode ? styles.dark : styles.light }>
            {/* <img src={img}></img> */}
            <form action="mailto:sb@gmail.com">
          
                <label  htmlFor="fName">Full Name</label>
                <input name="fName" onChange={props.inputValHandler}></input>
                <label htmlFor="pNumber">Phone Number</label>
                <input name="pNumber" onChange={props.inputValHandler}></input>
                <label htmlFor="email">Email Address</label>
                <input name="email" onChange={props.inputValHandler}></input>
                <aside >
                    <div>
                        <label htmlFor="pCode">Promo Code</label><br/>
                        <input type="password" name="pCode" onChange={inputValHandler}></input>
                    </div>
                    <div>
                        <label htmlFor="timeDate">Time and Date</label><br/>
                        <input  name='timeDate' type='date' id="timeDate" onChange={inputValHandler}></input>
                    </div>
                </aside>
                <br />
                <button type="submit">Schedule Appointment</button>
            </form>
            <footer></footer>
        </main>
    )
}

export default FormContainer
