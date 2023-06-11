import React from 'react';
import './App.css';


function Main(props) {
    const { setRoute } = props
  return (
            <div className="header">
                <h1>Викторина на знание флагов и гербов стран мира</h1>
                <h2>Проверьте себя на знание гербов и флагов стран мира, в этой викторине собраны множество разных стран, начиная с очень известных до самых редких стран</h2>
                {/* <form action="viktorina.html" target="_blank"> */}
                    <button class="start" onClick={() => setRoute('victorina')} >Начать викторину</button>
                {/* </form> */}
            </div>
  );
}

export default Main;
