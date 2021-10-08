import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '수원 초밥 맛집']);
  let [따봉, 따봉변경] = useState(0,0,0);

  let [modal, modalC] = useState(true);
  let [누른제목 , 누른제목변경] = useState(0);

  let[입력값, 입력값변경] = useState('');


  let posts = '강남 고기 맛집';

  function 변경(){
     var a = [...글제목];
     a[0] = '여자 코트 추천';
     글제목변경(a);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={변경}>버튼</button>
   
      {
        글제목.map(function(a,i){
          return(
            <div className='list' key={i}>
              <h3 onClick={ ()=>{누른제목변경(i)} }> {a} <span onClick={()=>{따봉변경(따봉+1)}}>❤{따봉}</span></h3>
              <p>10월 7일 발행</p>
              <hr/>
            </div>
          )
        })
        
      }

      <div className="publish">
        <input onChange={ (e) => {입력값변경(e.target.value) } }/>
        <button onClick={ () => {
          var arrayCopy = [...글제목]
          arrayCopy.unshift(입력값);
          글제목변경(arrayCopy);
        } }>저장</button>
      </div>

  
      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
        : null
      }
      

    </div>

  );
}

function Modal(props){
  return(
    <div className="modal">
      <h2> { props.글제목[props.누른제목] } </h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
