import React, { useEffect, useState } from 'react';
import './App.css';
import './style.css'
import question from './question';
import { Button, Checkbox, Image, Input, Radio, Space } from 'antd';
import Flags from './Flags';



function Quiz(props) {
  const [questionArr, setQuestionArr] = useState(<></>)
  const [i, setI] = useState(0)
  const [value, setValue] = useState(0);
  const [quiz, setQuiz] = useState([])
  const [answers, setAnswers] = useState([])
  const [result, setResult] = useState([0])
  const onChange = (e) => {
    setValue(e.target.value)
  };
    const { setRoute } = props
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    const getQuestions = () => {
      const arr = []
        for(let i = 0; i < 10; i++ ) {
            arr.push(question[getRandomInt(100)])
        }
        const newAnsw = arr.map(i => i.answerCode)
        const newArr = arr.map(i =>
         <div>
    <Radio.Group size='large' onChange={onChange} buttonStyle='solid'>
      <Space direction='vertical'>
      <Radio.Button value={1}>{i[1]}</Radio.Button>
      <Radio.Button value={2}>{i[2]}</Radio.Button>
      <Radio.Button value={3}>{i[3]}</Radio.Button>
      <Radio.Button value={4}>{i[4]}</Radio.Button>
      </Space>
    </Radio.Group>
        <Image style={{ width: 100 }} src={Flags[i.answer]} />
        </div>
        )
        setAnswers(newAnsw)
      setQuestionArr(newArr)
    }
    useEffect(() => {
        getQuestions()
    }, [])
    useEffect(() => {
      const a = [...quiz, value]
      if (a[0] !== 0 && i < 12) setQuiz(a)
    }, [i])
    useEffect(() => {
      if (i === 10) {
        const arrAns = []
        for(let a = 0; a < 10; a++) {
          const check = quiz[a] === answers[a]
          arrAns.push(check)
        }
        const result = arrAns.map(i => i ? 1 : 0)
        const newres = result.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        );
        setResult([newres])
      }
    }, [i])
  return (
    <div>
    <div className="heading">
        <h1 style={{ zIndex: 1000 }}>Викторина на знание гербов и флагов стран мира</h1>
        <h2 style={{ zIndex: 2 }}>Тест легкого уровня сложности, <a href="#">зарегистрируйтесь</a>, что бы проходить более сложные тесты</h2>
    </div>
    <div style={{ zIndex: 3 }} className="fields">
        <p>Ваше имя</p>
        <input type="text" placeholder="Иван Смирнов" class="name" />
        <p className="country">Какой стране принадлежит этот герб-флаг?</p>
    {i < 10 ? questionArr[i]: result.map(i => <p key={i} >Вы набрали {i} баллов из 10 возможных!</p>)}
    
    </div>
    <div className='next'>
        <Button type='primary' onClick={e => { if(i < 11) setI(i+1)}}>Следующий вопрос</Button>
    </div>
    </div>
  );
}

export default Quiz;
