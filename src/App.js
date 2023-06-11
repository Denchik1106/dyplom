import React, { useEffect, useState } from 'react';
import './App.css';
import Main from './Main';
import Quiz from './Quiz';


function App() {
  const [route, setRoute] = useState('main')
  console.log(route);
  useEffect(() => {
    console.log(route)
  },[])
  return (
        <div class="wrapper">
        <header>
            <nav>
              <button onClick={() => setRoute('main')}>
          Главная
          </button>
          <button onClick={() => setRoute('victorina')}>
          Викторина
          </button>
          <button onClick={() => setRoute('authorize')}>
          Авторизация
          </button>
          <button onClick={() => setRoute('Exit')}>
            Выход
            </button>
        </nav>
        </header>
    
        <img className="main" alt="maintheme" src="images/Main.jpeg" />
          {route === 'main' ? <Main setRoute={setRoute} /> : <Quiz />}
        </div>
  );
}

export default App;
